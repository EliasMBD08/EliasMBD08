export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'accent';
export type ButtonSize = 'sm' | 'md' | 'lg';

export const BUTTON_BASE_CLASS =
  'inline-flex items-center justify-center gap-2 font-medium select-none rounded-md border transition-all duration-150 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-50 disabled:cursor-not-allowed';

export const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-brand text-ink-inverse border-transparent hover:bg-brand-strong hover:shadow-glow focus-visible:ring-brand',
  outline:
    'bg-transparent text-brand border-brand hover:bg-brand-soft hover:text-brand-strong focus-visible:ring-brand',
  ghost:
    'bg-transparent text-ink border-transparent hover:bg-surface-2 focus-visible:ring-brand',
  accent:
    'bg-accent text-ink-inverse border-transparent hover:bg-accent/90 focus-visible:ring-accent',
};

export function buttonClasses(variant: ButtonVariant, size: ButtonSize): string {
  return [
    BUTTON_BASE_CLASS,
    BUTTON_SIZE_CLASSES[size],
    BUTTON_VARIANT_CLASSES[variant],
  ].join(' ');
}