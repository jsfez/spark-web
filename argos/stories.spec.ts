import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { test } from '@playwright/test'
import { argosScreenshot } from '@argos-ci/playwright'

type StoryIndex = {
  entries: Record<string, { id: string; title: string; name: string; type: string }>
}

const indexPath = fileURLToPath(new URL('../dist/index.json', import.meta.url))
const index: StoryIndex = JSON.parse(readFileSync(indexPath, 'utf-8'))

const only = process.env.ARGOS_ONLY?.split(',').map((s) => s.trim())

const stories = Object.values(index.entries).filter(
  (entry) => entry.type === 'story' && (!only || only.includes(entry.id)),
)

for (const story of stories) {
  test(`${story.title} › ${story.name}`, async ({ page }) => {
    await page.goto(`/iframe.html?id=${story.id}&viewMode=story`)
    // Wait for Storybook's own render cycle: some stories render in a portal
    // and leave #storybook-root empty, so don't wait on the root itself.
    await page.waitForFunction(() => {
      const phase = (
        window as unknown as {
          __STORYBOOK_PREVIEW__?: { currentRender?: { phase?: string } }
        }
      ).__STORYBOOK_PREVIEW__?.currentRender?.phase
      return phase === 'completed' || phase === 'finished'
    })
    // Spinners and skeletons legitimately keep aria-busy forever.
    const isLoadingState = /load(ing|er)|skeleton|spinner|progress/i.test(
      `${story.title} ${story.name}`,
    )
    await argosScreenshot(page, story.id, {
      stabilize: isLoadingState ? { waitForAriaBusy: false } : true,
    })
  })
}
