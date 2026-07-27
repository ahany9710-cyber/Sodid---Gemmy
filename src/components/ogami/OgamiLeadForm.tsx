import { useOgamiPage } from '../../contexts/OgamiLocaleContext';
import LeadForm from '../LeadForm';

type OgamiLeadFormPlacement = 'primary' | 'closing';

const OgamiLeadForm = ({ placement = 'primary' }: { placement?: OgamiLeadFormPlacement }) => {
  const { copy, whatsappOgami, fontClass } = useOgamiPage();
  const l = copy.lead;
  const isClosing = placement === 'closing';
  const outerId = isClosing ? 'lead-form-bottom' : 'lead-form';
  const innerId = isClosing ? 'lead-form-bottom-inner' : 'lead-form-inner';

  return (
    <section id={outerId} className="relative overflow-hidden bg-stone-50 px-6 py-16 md:px-10 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="text-[11px] font-semibold tracking-wider text-zinc-500">{l.eyebrow}</p>
          <h2 className={`${fontClass} mt-3 text-2xl font-bold leading-tight text-black md:text-4xl`}>{l.formTitle}</h2>
          <p className={`${fontClass} mt-3 text-sm text-zinc-600 md:text-base`}>{l.formSubtitle}</p>
        </div>
        <div className="mx-auto max-w-xl bg-white p-2 shadow-xl ring-1 ring-zinc-100">
          <LeadForm
            locale={l.leadFormLocale}
            presetProject="Ogami"
            title=""
            subtitle=""
            submitLabelOverride={l.submit}
            whatsappMessage={whatsappOgami}
            sectionClassName="bg-white px-6 py-8 md:px-10 md:py-10"
            sectionId={innerId}
          />
        </div>
      </div>
    </section>
  );
};

export default OgamiLeadForm;
