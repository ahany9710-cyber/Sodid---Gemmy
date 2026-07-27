import { useOgamiPage } from '../../contexts/OgamiLocaleContext';
import LeadForm from '../LeadForm';

type OgamiLeadFormPlacement = 'primary' | 'closing';

const OgamiLeadForm = ({ placement = 'primary' }: { placement?: OgamiLeadFormPlacement }) => {
  const { copy, whatsappOgami } = useOgamiPage();
  const l = copy.lead;
  const isClosing = placement === 'closing';
  const outerId = isClosing ? 'lead-form-bottom' : 'lead-form';
  const innerId = isClosing ? 'lead-form-bottom-inner' : 'lead-form-inner';

  return (
    <section id={outerId} className="relative overflow-hidden bg-stone-50 px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-xl bg-white p-2 shadow-xl ring-1 ring-zinc-100">
        <LeadForm
          locale={l.leadFormLocale}
          presetProject="Ogami"
          title={l.formTitle}
          subtitle={l.formSubtitle}
          submitLabelOverride={l.submit}
          whatsappMessage={whatsappOgami}
          sectionClassName="bg-white px-6 py-8 md:px-10 md:py-10"
          sectionId={innerId}
        />
      </div>
    </section>
  );
};

export default OgamiLeadForm;
