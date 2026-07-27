import { ArrowLeft, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { config } from '../config';
import { trackMarketingContact } from '../utils/trackMarketing';

export type UnitCardActionsLocale = 'en' | 'ar';

export interface UnitCardActionsProps {
  onFormClick: () => void;
  waHref: string;
  formLabel: string;
  callLabel: string;
  whatsappLabel: string;
  /** Unique accessible name so multiple WA CTAs don't fail identical-links audit */
  whatsappAriaLabel?: string;
  callAriaLabel?: string;
  formAriaLabel?: string;
  locale?: UnitCardActionsLocale;
  fontClass?: string;
  className?: string;
  compact?: boolean;
  /** Vertical stack — fits table cells on desktop */
  stack?: boolean;
}

const UnitCardActions = ({
  onFormClick,
  waHref,
  formLabel,
  callLabel,
  whatsappLabel,
  whatsappAriaLabel,
  callAriaLabel,
  formAriaLabel,
  locale = 'en',
  fontClass = '',
  className = 'mt-6',
  compact = false,
  stack = false,
}: UnitCardActionsProps) => {
  const FormArrow = locale === 'ar' ? ArrowLeft : ArrowRight;
  const btn = compact
    ? `inline-flex min-h-11 w-full items-center justify-center gap-1 px-2 py-2.5 text-[10px] font-bold transition-colors`
    : `inline-flex min-h-11 items-center justify-center gap-1.5 px-3 py-3 text-xs font-bold transition-colors`;

  const layoutClass = stack
    ? 'flex min-w-[6.5rem] flex-col gap-1'
    : 'grid grid-cols-1 gap-2 sm:grid-cols-3';

  return (
    <div className={`${layoutClass} ${fontClass} ${className}`.trim()}>
      <button
        type="button"
        onClick={onFormClick}
        aria-label={formAriaLabel ?? formLabel}
        className={`${btn} bg-black text-white hover:bg-zinc-800`}
      >
        {formLabel}
        <FormArrow size={compact ? 12 : 14} />
      </button>
      <a
        href={`tel:${config.phoneNumber}`}
        aria-label={callAriaLabel ?? callLabel}
        onClick={() => trackMarketingContact('phone')}
        className={`${btn} border border-black text-black hover:bg-black hover:text-white`}
      >
        <Phone size={compact ? 12 : 14} />
        {callLabel}
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={whatsappAriaLabel ?? whatsappLabel}
        onClick={() => trackMarketingContact('whatsapp')}
        className={`${btn} border border-[#107C41] bg-[#107C41] text-white hover:bg-[#0C6836]`}
      >
        <MessageCircle size={compact ? 12 : 14} />
        {whatsappLabel}
      </a>
    </div>
  );
};

export default UnitCardActions;
