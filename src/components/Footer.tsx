import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import { config } from '../config';
import { agencyDisclaimerEn } from '../data/legalCopy';
import { trackMarketingContact } from '../utils/trackMarketing';
import { getWhatsAppLink } from '../utils/whatsapp';

const Footer = () => {
  const { pathname } = useLocation();
  const leadFormHash =
    pathname === '/eastvale' ? '#eastvale-lead-form' : pathname === '/east' ? '#east-lead-form' : '#lead-form';
  return (
    <footer className="bg-black px-6 py-16 text-gray-300 md:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <img src="./sections/hero/logo.svg" alt="SODIC projects — marketed by Flair Agency" className="h-6 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              Marketed by <span className="text-gray-300">Flair Agency</span> — authorized partner with signed
              marketing rights. Not the real estate developer.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">Contact</h3>
            <div className="mt-4 space-y-3">
              <a
                href={`tel:${config.phoneNumber}`}
                title="Call us"
                onClick={() => trackMarketingContact('phone')}
                className="inline-flex flex-col gap-1 text-sm hover:text-white sm:flex-row sm:items-center sm:gap-2"
              >
                <span className="inline-flex items-center gap-2">
                  <Phone size={15} />
                  <span>{config.phoneDisplayLocal}</span>
                </span>
              </a>
              <div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackMarketingContact('whatsapp')}
                  className="inline-flex items-center gap-2 text-sm hover:text-white"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">Legal</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <a href={leadFormHash} className="hover:text-white">
                Contact Form
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Project trademarks belong to their owners. Site operated by Flair
            Agency.
          </p>
          <p className="mt-3 max-w-3xl text-xs leading-relaxed text-gray-400 md:text-sm">{agencyDisclaimerEn}</p>
          <p className="mt-3">
            <Link to="/privacy" className="text-gray-300 underline underline-offset-4 hover:text-white">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
