import { makeVariants } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

export const buttonVariantStyles = cva(
  [
    'u-shadow-border-transition',
    'box-border inline-flex items-center justify-center gap-md whitespace-nowrap',
    'default:px-lg',
    'rounded-button',
    'text-body-1-highlight',
    'focus-visible:u-outline',
  ],
  {
    variants: {
      /**
       * Semantic variant of the button that combines design and intent.
       * When specified, this prop overrides both `design` and `intent`.
       *
       * - `primary`: Main action, filled background
       * - `secondary`: Secondary action, filled support background
       * - `tertiary`: Tertiary action, outlined with surface background
       * - `contrast`: Contrast action, surface background
       * - `underline`: Link-style with underline
       * - `success`: Success action, outlined with transparent background
       * - `danger`: Danger action, outlined with transparent background
       * - `boost`: Accent action, filled accent background
       * - `AI`: AI action, filled AI background
       */
      variant: {
        primary: [
          'bg-main',
          'text-on-main',
          'rounded-button',
          'enabled:hover:bg-main-hovered',
          'enabled:active:bg-main-hovered',
          'enabled:focus-visible:bg-main-hovered',
        ],
        secondary: [
          'bg-support',
          'text-on-support',
          'rounded-button',
          'enabled:hover:bg-support-hovered',
          'enabled:active:bg-support-hovered',
          'enabled:focus-visible:bg-support-hovered',
        ],
        tertiary: [
          'border-outline',
          'border-sm',
          'bg-surface',
          'text-on-surface',
          'rounded-button',
          'enabled:hover:bg-surface-hovered',
          'enabled:active:bg-surface-hovered',
          'enabled:focus-visible:bg-surface-hovered',
        ],
        contrast: [
          'bg-surface',
          'text-on-surface',
          'rounded-button',
          'enabled:hover:bg-surface-hovered',
          'enabled:active:bg-surface-hovered',
          'enabled:focus-visible:bg-surface-hovered',
        ],
        underline: [
          'text-on-surface underline default:-mx-md px-md enabled:hover:bg-surface-hover',
        ],
        success: [
          'border-outline',
          'border-sm',
          'bg-transparent',
          'text-success',
          'rounded-button',
          'enabled:hover:bg-success-container',
          'enabled:active:bg-success-container',
          'enabled:focus-visible:bg-success-container',
        ],
        danger: [
          'border-outline',
          'border-sm',
          'bg-transparent',
          'text-error',
          'rounded-button',
          'enabled:hover:bg-error-container',
          'enabled:active:bg-error-container',
          'enabled:focus-visible:bg-error-container',
        ],
        boost: [
          'bg-accent',
          'text-on-accent',
          'rounded-button',
          'enabled:hover:bg-accent-hovered',
          'enabled:active:bg-accent-hovered',
          'enabled:focus-visible:bg-accent-hovered',
        ],
        AI: [
          'bg-ai',
          'text-on-ai',
          'rounded-button',
          'enabled:hover:bg-ai-hovered',
          'enabled:active:bg-ai-hovered',
          'enabled:focus-visible:bg-ai-hovered',
        ],
      },
      /**
       * Size of the button.
       */
      size: makeVariants<'size', ['sm', 'md', 'lg']>({
        sm: ['min-w-sz-32 h-sz-32'],
        md: ['min-w-sz-44 h-sz-44'],
        lg: ['min-w-sz-56 h-sz-56'],
      }),
      /**
       * Disable the button, preventing user interaction and adding opacity.
       */
      disabled: {
        true: ['cursor-not-allowed opacity-dim-3'],
        false: ['cursor-pointer'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export type ButtonVariantStylesProps = VariantProps<typeof buttonVariantStyles>
