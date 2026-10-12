import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSocialLinks } from '../../hooks/useSocialLinks';
import { useLanguage } from '../../Context/LanguageContext';

function Footer({ activeCollection, onSelectCollection }) {
  const navigate = useNavigate();
  const { socialLinks } = useSocialLinks();
  const { t, isRTL } = useLanguage();

  const scrollToSection = (sectionId) => {
    if (['women', 'men', 'kids'].includes(activeCollection)) {
      onSelectCollection('default');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (!element) return;
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (!element) return;
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // تحديد الاتجاه ومحاذاة النص بناءً على اللغة
  const textAlignClass = isRTL ? 'text-right' : 'text-left';

  return (
    <footer className="bg-white border-t border-gray-200" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Shop By Category Section */}
      <div className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-normal tracking-wide mb-4 text-gray-900">
              {t.footer.shopByCategory}
            </h3>
            <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <button
              onClick={() => scrollToSection('women')}
              className="group relative overflow-hidden bg-gray-50 hover:bg-gray-900 transition-all duration-500 p-8 border border-gray-200 hover:border-gray-900 text-center"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-normal tracking-widest uppercase text-gray-900 group-hover:text-white transition-colors duration-500 mb-2">
                  {t.footer.categories.women}
                </h3>
                <p className="text-sm font-normal text-gray-600 group-hover:text-white/80 transition-colors duration-500">
                  {t.footer.categories.womenSub}
                </p>
                <div className="mt-4 w-10 h-0.5 bg-gray-900 group-hover:bg-white group-hover:w-full mx-auto transition-all duration-500"></div>
              </div>
            </button>
            
            <button
              onClick={() => scrollToSection('men')}
              className="group relative overflow-hidden bg-gray-50 hover:bg-gray-900 transition-all duration-500 p-8 border border-gray-200 hover:border-gray-900 text-center"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-normal tracking-widest uppercase text-gray-900 group-hover:text-white transition-colors duration-500 mb-2">
                  {t.footer.categories.men}
                </h3>
                <p className="text-sm font-normal text-gray-600 group-hover:text-white/80 transition-colors duration-500">
                  {t.footer.categories.menSub}
                </p>
                <div className="mt-4 w-10 h-0.5 bg-gray-900 group-hover:bg-white group-hover:w-full mx-auto transition-all duration-500"></div>
              </div>
            </button>
            
            <button
              onClick={() => scrollToSection('kids')}
              className="group relative overflow-hidden bg-gray-50 hover:bg-gray-900 transition-all duration-500 p-8 border border-gray-200 hover:border-gray-900 text-center"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-normal tracking-widest uppercase text-gray-900 group-hover:text-white transition-colors duration-500 mb-2">
                  {t.footer.categories.kids}
                </h3>
                <p className="text-sm font-normal text-gray-600 group-hover:text-white/80 transition-colors duration-500">
                  {t.footer.categories.kidsSub}
                </p>
                <div className="mt-4 w-10 h-0.5 bg-gray-900 group-hover:bg-white group-hover:w-full mx-auto transition-all duration-500"></div>
              </div>
            </button>
            
            <button
              onClick={() => scrollToSection('collections')}
              className="group relative overflow-hidden bg-gray-50 hover:bg-gray-900 transition-all duration-500 p-8 border border-gray-200 hover:border-gray-900 text-center"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-normal tracking-widest uppercase text-gray-900 group-hover:text-white transition-colors duration-500 mb-2">
                  {t.footer.categories.all}
                </h3>
                <p className="text-sm font-normal text-gray-600 group-hover:text-white/80 transition-colors duration-500">
                  {t.footer.categories.allSub}
                </p>
                <div className="mt-4 w-10 h-0.5 bg-gray-900 group-hover:bg-white group-hover:w-full mx-auto transition-all duration-500"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Mezna Store */}
          <div className={textAlignClass}>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900 mb-4">
              {t.footer.about.heading}
            </h3>
            <p className="text-xs sm:text-sm font-normal text-gray-600 leading-relaxed">
              {t.footer.about.desc}
            </p>
          </div>

          {/* Customer Service */}
          <div className={textAlignClass}>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900 mb-4">
              {t.footer.customerService.heading}
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate('/page/contact')}
                  className={`text-xs sm:text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors w-full ${textAlignClass}`}
                >
                  {t.footer.customerService.contact}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/page/shipping')}
                  className={`text-xs sm:text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors w-full ${textAlignClass}`}
                >
                  {t.footer.customerService.shipping}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/page/returns')}
                  className={`text-xs sm:text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors w-full ${textAlignClass}`}
                >
                  {t.footer.customerService.returns}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/page/faq')}
                  className={`text-xs sm:text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors w-full ${textAlignClass}`}
                >
                  {t.footer.customerService.faq}
                </button>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div className={textAlignClass}>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900 mb-4">
              {t.footer.shop.heading}
            </h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('women')} className={`text-xs sm:text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors w-full ${textAlignClass}`}>
                  {t.footer.shop.women}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('men')} className={`text-xs sm:text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors w-full ${textAlignClass}`}>
                  {t.footer.shop.men}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('kids')} className={`text-xs sm:text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors w-full ${textAlignClass}`}>
                  {t.footer.shop.kids}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('collections')} className={`text-xs sm:text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors w-full ${textAlignClass}`}>
                  {t.footer.shop.collections}
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className={textAlignClass}>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900 mb-4">
              {t.footer.connect}
            </h3>
            <div className={`flex gap-3 mb-4 ${isRTL ? 'justify-start' : 'justify-start'}`}>
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              )}
              {socialLinks.whatsapp && (
                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-green-50 rounded-lg transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              )}
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
            </div>
            
            <p className="text-xs font-normal text-gray-600 mb-2">
              {t.footer.badges.cod}
            </p>
            <p className="text-xs font-normal text-gray-600 mb-4">
              {t.footer.badges.returns}
            </p>
            
            {/* Payment Methods */}
            <div className="mt-4">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-gray-900 mb-3">
                {t.footer.badges.weAccept}
              </h4>
              <div className="flex flex-wrap gap-2 items-center">
                <img src="/Screenshot 2026-02-25 161629.png" alt="Payment Method" className="h-8 w-auto object-contain" />
                <img src="/Screenshot 2026-02-25 161621.png" alt="Payment Method" className="h-8 w-auto object-contain" />
                <img src="/Screenshot 2026-02-25 161613.png" alt="Payment Method" className="h-8 w-auto object-contain" />
                <img src="/Screenshot 2026-02-26 103448.png" alt="Payment Method" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-xs font-normal text-gray-500 text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;