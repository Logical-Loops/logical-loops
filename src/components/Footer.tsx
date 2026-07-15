import blackLogoFooterImg from '@/assets/images/black_logo_footer.png';
import footerBgImage from '@/assets/images/footer_bg_image.png';

export default function Footer() {
  return (
    <footer 
      className="bg-white text-gray-800 relative overflow-hidden"
      style={{
        backgroundImage: `url(${footerBgImage})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      
      {/* 1. Large Black Lightning Bolt Logo watermark on the right */}
      {/* Adjusted top position and right percentage to align perfectly with the background horizontal and diagonal grid lines */}
      <img
        src={blackLogoFooterImg}
        alt="Logo watermark"
        className="absolute right-[17.2%] top-[96px] h-[160px] w-auto object-contain select-none pointer-events-none opacity-100 z-0"
      />

      {/* 2. Text content containers (z-20 - on top of the background) */}
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Row 1: Tagline (Aligned to Band 1) */}
        <div className="h-20 flex items-center relative z-20">
          <p className="text-gray-400 text-sm font-medium">
            Made with <span className="text-indigo-400">💜</span> to loop your business into success.
          </p>
        </div>

        {/* Row 2: Socials & Chat Lists (Aligned to Band 2) */}
        <div className="h-20 flex items-center relative z-20">
          <div className="flex flex-wrap gap-x-16 gap-y-2">
            {/* Follow Us */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-[11px] font-medium tracking-wide">Follow us</span>
              <div className="flex items-center gap-2">
                {/* Facebook */}
                <a href="#" className="w-8 h-8 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center text-white" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                  </svg>
                </a>
                {/* Google+ */}
                <a href="#" className="w-8 h-8 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center text-white text-[10px] font-black" aria-label="Google Plus">
                  G+
                </a>
                {/* Instagram */}
                <a href="#" className="w-8 h-8 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center text-white" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="w-8 h-8 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center text-white" aria-label="YouTube">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.002 3.002 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Let's Chat */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-[11px] font-medium tracking-wide">Let's chat</span>
              <div className="flex items-center gap-2">
                {/* WhatsApp */}
                <a href="https://wa.me/918331899573" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center text-white" aria-label="WhatsApp">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.45 5.426 0 9.84-4.415 9.843-9.85 0-2.63-1.024-5.105-2.883-6.97-1.86-1.866-4.33-2.891-6.97-2.894-5.433 0-9.846 4.417-9.85 9.853-.001 1.673.456 3.305 1.32 4.757l-.995 3.635 3.723-.976z"/>
                  </svg>
                </a>
                {/* Telegram */}
                <a href="https://t.me/logicalloops" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center text-white" aria-label="Telegram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.6 1.5-1.55 2.76-2.6 4.2-3.8.16-.14.32-.47.03-.51-.29-.04-.85.15-1.2.27-.47.16-3.85 2.4-7.28 4.7-.5.34-.95.51-1.35.5-.44-.01-1.28-.25-1.9-.45-.76-.25-1.37-.38-1.32-.8.02-.22.33-.45.93-.7 3.64-1.58 6.07-2.62 7.29-3.1 3.47-1.38 4.19-1.62 4.66-1.63.1 0 .33.02.48.15.12.1.16.24.18.33.02.12.02.26 0 .39z"/>
                  </svg>
                </a>
                {/* Chat */}
                <a href="#" className="w-8 h-8 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center text-white" aria-label="Chat">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 2.21.72 4.25 1.94 5.92L3 21l3.2-.95C7.81 21.28 9.83 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Contact Us info (Aligned to Band 3) */}
        <div className="h-20 flex items-center relative z-20">
          <div className="flex items-center gap-8">
            <span className="text-gray-400 text-[11px] font-medium tracking-wide">Contact us</span>
            <div className="flex flex-wrap gap-x-12 gap-y-3 text-xs sm:text-sm font-bold text-gray-800">
              <a href="tel:+918331899573" className="flex items-center gap-2.5 hover:text-[#71B206] transition-colors">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                +91 8331899573
              </a>
              <a href="mailto:Contactlogicalloops.in@gmail.com" className="flex items-center gap-2.5 hover:text-[#71B206] transition-colors">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Contactlogicalloops.in@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Row 4: Privacy Policy (Aligned to Band 4) */}
        <div className="h-20 flex items-center relative z-20">
          <div className="flex gap-4 text-xs font-semibold text-gray-500">
            <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a>
          </div>
        </div>

        {/* Row 5: Copyright (Aligned to Band 5) */}
        <div className="h-20 flex items-center relative z-20">
          <p className="text-gray-400 text-xs">
            © Copyright 2026 - Logicalloops. All Right Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
