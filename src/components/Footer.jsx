import React from 'react';
import { Link } from 'react-router-dom';
import logoTransparent from '../assets/images/Logo_transparent.png';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant w-full mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4 md:px-6 py-16 w-full max-w-container-max mx-auto items-start">
        {/* Brand details */}
        <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-2 pr-0 lg:pr-8">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              alt="ALPHAONE Logo"
              className="h-12 md:h-20 w-auto invert opacity-80 hover:opacity-100 transition-all group-hover:scale-95"
              src={logoTransparent}
            />
            <span className="font-syne text-[24px] md:text-[32px] text-on-surface font-extrabold uppercase tracking-tighter">
              ALPHAONE
            </span>
          </Link>
          <p className="font-geist text-sm text-on-surface-variant max-w-xs leading-relaxed">
            Precision performance and elite conditioning for those who refuse to compromise.
          </p>

        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-geist text-xs text-on-surface uppercase mb-2 tracking-widest font-semibold">
            LINKS
          </h4>
          <Link
            className="font-geist text-xs text-on-surface-variant uppercase hover:text-accent transition-colors"
            to="/facilities"
          >
            LOCATIONS
          </Link>
          <a
            className="font-geist text-xs text-on-surface-variant uppercase hover:text-accent transition-colors"
            href="#"
          >
            PRIVACY POLICY
          </a>
          <a
            className="font-geist text-xs text-on-surface-variant uppercase hover:text-accent transition-colors"
            href="#"
          >
            TERMS OF SERVICE
          </a>
          <a
            className="font-geist text-xs text-on-surface-variant uppercase hover:text-accent transition-colors"
            href="#"
          >
            CAREERS
          </a>
        </div>

        {/* Contact/Address */}
        <div className="flex flex-col gap-4 md:col-span-1 lg:col-span-2 md:text-left">
          <h4 className="font-geist text-xs text-on-surface uppercase mb-2 tracking-widest font-semibold">
            CONTACT US
          </h4>
          <a
            href="https://www.google.com/maps/search/?api=1&query=LG1%2C+Maplle+Morya+Classic+building%2C+Opposite+Infinity+mall%2C+beside+What%27s+your+Bahana%2C+Andheri+West%2C+Mumbai"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 hover:text-accent group transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-accent text-lg mt-1 transition-colors">
              location_on
            </span>
            <p className="font-geist text-sm text-on-surface-variant group-hover:text-accent leading-relaxed transition-colors">
              LG1, Maplle Morya Classic building, Opposite Infinity mall, beside What's your Bahana, Andheri West, Mumbai
            </p>
          </a>
          <div className="flex items-center gap-3 mt-2">
            <span className="material-symbols-outlined text-on-surface-variant text-lg">
              phone
            </span>
            <p className="font-geist text-sm text-on-surface-variant font-bold">
              +91 86920 20755
            </p>
          </div>
          {/* Socials / Direct Contacts in Contact section */}
          <div className="flex flex-wrap gap-6 mt-4">
            <a
              aria-label="Instagram"
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-accent transition-colors font-geist text-sm font-bold tracking-wider animate-pulse"
              href="https://www.instagram.com/alphaonefitnessclub/"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                />
              </svg>
              <span>Follow Us</span>
            </a>
            <a
              aria-label="WhatsApp"
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-accent transition-colors font-geist text-sm font-bold tracking-wider animate-pulse"
              style={{ animationDelay: '1s' }}
              href="https://wa.me/918692020755?text=Hi%20AlphaOne%20Team%2C%20I'm%20interested%20in%20joining%20the%20club%21"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.251-1.378a9.804 9.804 0 0 0 4.73 1.206h.004c5.457 0 9.905-4.448 9.91-9.913a9.813 9.813 0 0 0-2.894-7.007zm-7.009 15.241a8.166 8.166 0 0 1-4.163-1.144l-.298-.177-3.1 1.057.828-3.023-.195-.31a8.178 8.178 0 0 1-1.253-4.343c.004-4.506 3.673-8.178 8.185-8.178a8.18 8.18 0 0 1 5.79 2.401 8.176 8.176 0 0 1 2.396 5.8c-.004 4.51-3.678 8.182-8.187 8.182zm4.492-6.14c-.247-.124-1.458-.72-1.685-.803-.228-.081-.393-.124-.559.124-.166.247-.64.803-.784.965-.145.166-.29.185-.538.062a6.786 6.786 0 0 1-1.999-1.233 7.465 7.465 0 0 1-1.385-1.722c-.145-.247-.015-.382.11-.505.112-.11.247-.29.372-.434.124-.145.166-.247.247-.412.081-.166.041-.31-.02-.434-.062-.124-.559-1.348-.765-1.843-.2-.486-.403-.42-.559-.428-.145-.008-.31-.008-.475-.008-.166 0-.435.062-.662.31-.228.247-.868.847-.868 2.065 0 1.218.889 2.395.989 2.535.1.141 1.75 2.673 4.241 3.746.593.256 1.056.408 1.417.523.595.19 1.137.163 1.565.101.477-.07 1.458-.597 1.665-1.173.207-.577.207-1.073.145-1.173-.062-.1-.228-.166-.475-.29z"/>
              </svg>
              <span>Contact Us</span>
            </a>
          </div>
          <div className="mt-8 border-t border-outline-variant/30 pt-6">
            <p className="font-geist text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">
              © 2024 ALPHAONE FITNESS CLUB. ALL RIGHTS RESERVED. PRECISION PERFORMANCE.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
