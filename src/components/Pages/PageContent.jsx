// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getPageContent } from '../../api/categories';

// function PageContent() {
//   const { pageKey } = useParams();
//   const navigate = useNavigate();
//   const [content, setContent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   // eslint-disable-next-line no-unused-vars
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContent = async () => {
//       try {
//         setLoading(true);
//         const response = await getPageContent(pageKey);
//         setContent(response.data.data);
//         setError(null);
//       } catch (err) {
//         console.error('Error fetching page content:', err);
//         setError('Failed to load page content');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (pageKey) {
//       fetchContent();
//     }
//   }, [pageKey]);

//   const getPageTitle = () => {
//     switch (pageKey) {
//       case 'shipping':
//         return 'Shipping Information';
//       case 'returns':
//         return 'Returns & Exchanges';
//       case 'faq':
//         return 'Frequently Asked Questions';
//       default:
//         return 'Page Content';
//     }
//   };

//   const getDefaultContent = () => {
//     switch (pageKey) {
//       case 'shipping':
//         return {
//           title: 'Shipping Information',
//           sections: [
//             {
//               heading: 'Delivery Options',
//               content: 'We offer fast and reliable shipping across all regions. Standard delivery takes 3-5 business days.'
//             },
//             {
//               heading: 'Shipping Costs',
//               content: 'Free shipping on orders over 500 SAR. Standard shipping fee is 30 SAR for orders below 500 SAR.'
//             },
//             {
//               heading: 'Order Tracking',
//               content: 'Once your order is shipped, you will receive a tracking number via SMS and email to monitor your delivery.'
//             },
//             {
//               heading: 'Cash on Delivery',
//               content: 'We accept cash on delivery for all orders. Pay when you receive your items at your doorstep.'
//             }
//           ]
//         };
//       case 'returns':
//         return {
//           title: 'Returns & Exchanges',
//           sections: [
//             {
//               heading: 'Return Policy',
//               content: 'We accept returns within 3 days of delivery. Items must be unused, unworn, and in original packaging with all tags attached.'
//             },
//             {
//               heading: 'How to Return',
//               content: 'Contact our customer service team via WhatsApp or Instagram to initiate a return. We will arrange pickup from your location.'
//             },
//             {
//               heading: 'Refund Process',
//               content: 'Refunds are processed within 5-7 business days after we receive and inspect the returned items.'
//             },
//             {
//               heading: 'Exchange Policy',
//               content: 'Exchanges are available for different sizes or colors of the same product, subject to availability.'
//             }
//           ]
//         };
//       case 'faq':
//         return {
//           title: 'Frequently Asked Questions',
//           sections: [
//             {
//               heading: 'Are your products authentic?',
//               content: 'Yes, all our products are premium quality replicas that are identical to the original brands in terms of quality and design.'
//             },
//             {
//               heading: 'How long does delivery take?',
//               content: 'Standard delivery takes 3-5 business days. Express delivery options are available for faster shipping.'
//             },
//             {
//               heading: 'Do you accept cash on delivery?',
//               content: 'Yes, we accept cash on delivery for all orders across all regions.'
//             },
//             {
//               heading: 'What is your return policy?',
//               content: 'We accept returns within 3 days of delivery. Items must be in original condition with tags attached.'
//             },
//             {
//               heading: 'How can I track my order?',
//               content: 'You will receive a tracking number via SMS and email once your order is shipped.'
//             },
//             {
//               heading: 'Do you ship internationally?',
//               content: 'Currently, we only ship within Saudi Arabia. International shipping will be available soon.'
//             }
//           ]
//         };
//       default:
//         return null;
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   // محاولة parse المحتوى كـ JSON، وإلا استخدام النص مباشرة
//   let displayContent;
//   if (content?.content) {
//     try {
//       // إذا كان JSON صالح
//       if (typeof content.content === 'string' && content.content.trim().startsWith('{')) {
//         displayContent = JSON.parse(content.content);
//       } else {
//         // إذا كان نص عادي، اعرضه كمحتوى بسيط
//         displayContent = {
//           title: getPageTitle(),
//           sections: [{
//             heading: getPageTitle(),
//             content: content.content
//           }]
//         };
//       }
//     } catch (e) {
//       // في حالة فشل الـ parse، استخدم المحتوى الافتراضي
//       console.error('Failed to parse content:', e);
//       displayContent = getDefaultContent();
//     }
//   } else {
//     displayContent = getDefaultContent();
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="bg-gray-50 border-b border-gray-200">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <button
//             onClick={() => navigate('/')}
//             className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
//           >
//             <svg 
//               className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             Back to Home
//           </button>
          
//           <h1 className="text-5xl md:text-6xl font-light tracking-wide text-black mb-4">
//             {displayContent?.title || getPageTitle()}
//           </h1>
//           <div className="w-24 h-1 bg-black"></div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {displayContent?.sections?.map((section, index) => (
//           <div 
//             key={index}
//             className="mb-12 pb-12 border-b border-gray-200 last:border-b-0"
//           >
//             <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
//               {section.heading}
//             </h2>
//             <p className="text-lg font-light text-gray-800 leading-relaxed">
//               {section.content}
//             </p>
//           </div>
//         ))}

//         {/* Contact Section */}
//         <div className="mt-16 bg-gray-50 border border-gray-200 p-8 md:p-12">
//           <h3 className="text-2xl font-light tracking-wide text-black mb-4">
//             Need More Help?
//           </h3>
//           <p className="text-lg font-light text-gray-800 mb-6">
//             Our customer service team is here to assist you with any questions or concerns.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <a
//               href="https://wa.me/1234567890"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center px-8 py-3 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
//             >
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 width="20" 
//                 height="20" 
//                 viewBox="0 0 24 24" 
//                 fill="currentColor"
//                 className="mr-2"
//               >
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
//               </svg>
//               Contact on WhatsApp
//             </a>
//             <a
//               href="https://instagram.com/reem.store7777"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
//             >
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 width="20" 
//                 height="20" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2"
//                 className="mr-2"
//               >
//                 <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                 <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
//               </svg>
//               Follow on Instagram
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PageContent;



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPageContent } from '../../api/categories';
import { useLanguage } from '../../Context/LanguageContext';

function PageContent() {
  const { pageKey } = useParams();
  const navigate = useNavigate();
  const { lang, isRTL } = useLanguage();

  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await getPageContent(pageKey);
        setContent(response.data.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching page content:', err);
        setError('Failed to load page content');
      } finally {
        setLoading(false);
      }
    };

    if (pageKey) {
      fetchContent();
    }
  }, [pageKey]);

  const getPageTitle = () => {
    if (lang === 'ar') {
      switch (pageKey) {
        case 'shipping':
          return 'معلومات الشحن والتوصيل';
        case 'returns':
          return 'سياسة الإرجاع والاستبدال';
        case 'faq':
          return 'الأسئلة الشائعة';
        default:
          return 'محتوى الصفحة';
      }
    } else {
      switch (pageKey) {
        case 'shipping':
          return 'Shipping Information';
        case 'returns':
          return 'Returns & Exchanges';
        case 'faq':
          return 'Frequently Asked Questions';
        default:
          return 'Page Content';
      }
    }
  };

  const getDefaultContent = () => {
    if (lang === 'ar') {
      switch (pageKey) {
        case 'shipping':
          return {
            title: 'معلومات الشحن والتوصيل',
            sections: [
              {
                heading: 'خيارات التوصيل',
                content: 'نوفر خدمة شحن سريعة وموثوقة لجميع المناطق. يستغرق التوصيل العادي من 3 إلى 5 أيام عمل.'
              },
              {
                heading: 'تكاليف الشحن',
                content: 'شحن مجاني للطلبات التي تتجاوز 500 ريال. رسوم الشحن القياسية هي 30 ريال للطلبات أقل من 500 ريال.'
              },
              {
                heading: 'تتبع الطلب',
                content: 'بمجرد شحن طلبك، ستتلقى رقم التتبع عبر الرسائل النصية القصيرة والبريد الإلكتروني لمتابعة شحنتك.'
              },
              {
                heading: 'الدفع عند الاستلام',
                content: 'نقبل الدفع عند الاستلام لجميع الطلبات. ادفع عند استلام منتجاتك أمام باب منزلك.'
              }
            ]
          };
        case 'returns':
          return {
            title: 'سياسة الإرجاع والاستبدال',
            sections: [
              {
                heading: 'سياسة الإرجاع',
                content: 'نقبل الإرجاع خلال 3 أيام من تاريخ الاستلام. يجب أن تكون المنتجات غير مستخدمة وفي تغليفها الأصلي مع جميع البطاقات المرفقة.'
              },
              {
                heading: 'كيفية الإرجاع',
                content: 'تواصل مع فريق خدمة العملاء عبر الواتساب أو إنستغرام لبدء عملية الإرجاع، وسنقوم بترتيب استلام الشحنة من موقعك.'
              },
              {
                heading: 'عملية استرداد الأموال',
                content: 'يتم معالجة المبالغ المستردة خلال 5-7 أيام عمل بعد استلام المنتجات المرجعة وفحصها.'
              },
              {
                heading: 'سياسة الاستبدال',
                content: 'الاستبدال متاح لمقاسات أو ألوان مختلفة لنفس المنتج، وذلك حسب توفر المخزون.'
              }
            ]
          };
        case 'faq':
          return {
            title: 'الأسئلة الشائعة',
            sections: [
              {
                heading: 'هل منتجاتكم أصلية؟',
                content: 'نعم، جميع منتجاتنا ذات جودة عالية ومطابقة تماماً للماركات الأصلية من حيث التصميم والخامة.'
              },
              {
                heading: 'كم يستغرق التوصيل؟',
                content: 'يستغرق التوصيل العادي من 3 إلى 5 أيام عمل. كما تتوفر خيارات الشحن السريع.'
              },
              {
                heading: 'هل تقبلون الدفع عند الاستلام؟',
                content: 'نعم، نقبل خدمة الدفع عند الاستلام لجميع الطلبات وفي كافة المناطق.'
              },
              {
                heading: 'ما هي سياسة الإرجاع لديكم؟',
                content: 'نقبل الإرجاع خلال 3 أيام من الاستلام بشرط أن تكون المنتجات بحالتها الأصلية.'
              },
              {
                heading: 'كيف يمكنني تتبع طلبي؟',
                content: 'ستتلقى رقم التتبع عبر الرسائل النصية والبريد الإلكتروني فور شحن الطلب.'
              },
              {
                heading: 'هل توفرون الشحن الدولي؟',
                content: 'حالياً نقوم بالشحن داخل السعودية فقط، وسيكون الشحن الدولي متاحاً قريباً.'
              }
            ]
          };
        default:
          return null;
      }
    } else {
      switch (pageKey) {
        case 'shipping':
          return {
            title: 'Shipping Information',
            sections: [
              {
                heading: 'Delivery Options',
                content: 'We offer fast and reliable shipping across all regions. Standard delivery takes 3-5 business days.'
              },
              {
                heading: 'Shipping Costs',
                content: 'Free shipping on orders over 500 SAR. Standard shipping fee is 30 SAR for orders below 500 SAR.'
              },
              {
                heading: 'Order Tracking',
                content: 'Once your order is shipped, you will receive a tracking number via SMS and email to monitor your delivery.'
              },
              {
                heading: 'Cash on Delivery',
                content: 'We accept cash on delivery for all orders. Pay when you receive your items at your doorstep.'
              }
            ]
          };
        case 'returns':
          return {
            title: 'Returns & Exchanges',
            sections: [
              {
                heading: 'Return Policy',
                content: 'We accept returns within 3 days of delivery. Items must be unused, unworn, and in original packaging with all tags attached.'
              },
              {
                heading: 'How to Return',
                content: 'Contact our customer service team via WhatsApp or Instagram to initiate a return. We will arrange pickup from your location.'
              },
              {
                heading: 'Refund Process',
                content: 'Refunds are processed within 5-7 business days after we receive and inspect the returned items.'
              },
              {
                heading: 'Exchange Policy',
                content: 'Exchanges are available for different sizes or colors of the same product, subject to availability.'
              }
            ]
          };
        case 'faq':
          return {
            title: 'Frequently Asked Questions',
            sections: [
              {
                heading: 'Are your products authentic?',
                content: 'Yes, all our products are premium quality replicas that are identical to the original brands in terms of quality and design.'
              },
              {
                heading: 'How long does delivery take?',
                content: 'Standard delivery takes 3-5 business days. Express delivery options are available for faster shipping.'
              },
              {
                heading: 'Do you accept cash on delivery?',
                content: 'Yes, we accept cash on delivery for all orders across all regions.'
              },
              {
                heading: 'What is your return policy?',
                content: 'We accept returns within 3 days of delivery. Items must be in original condition with tags attached.'
              },
              {
                heading: 'How can I track my order?',
                content: 'You will receive a tracking number via SMS and email once your order is shipped.'
              },
              {
                heading: 'Do you ship internationally?',
                content: 'Currently, we only ship within Saudi Arabia. International shipping will be available soon.'
              }
            ]
          };
        default:
          return null;
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">{lang === 'ar' ? 'جاري التحميل...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

  let displayContent;
  if (content?.content) {
    try {
      if (typeof content.content === 'string' && content.content.trim().startsWith('{')) {
        displayContent = JSON.parse(content.content);
      } else {
        displayContent = {
          title: getPageTitle(),
          sections: [{
            heading: getPageTitle(),
            content: content.content
          }]
        };
      }
    } catch (e) {
      console.error('Failed to parse content:', e);
      displayContent = getDefaultContent();
    }
  } else {
    displayContent = getDefaultContent();
  }

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <svg 
              className={`w-5 h-5 transform group-hover:-translate-x-1 transition-transform ${
                isRTL ? 'ml-2 rotate-180' : 'mr-2'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {lang === 'ar' ? 'الرجوع للرئيسية' : 'Back to Home'}
          </button>
          
          <h1 className="text-5xl md:text-6xl font-light tracking-wide text-black mb-4">
            {displayContent?.title || getPageTitle()}
          </h1>
          <div className="w-24 h-1 bg-black"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {displayContent?.sections?.map((section, index) => (
          <div 
            key={index}
            className="mb-12 pb-12 border-b border-gray-200 last:border-b-0"
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
              {section.heading}
            </h2>
            <p className="text-lg font-light text-gray-800 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}

        {/* Contact Section */}
        <div className="mt-16 bg-gray-50 border border-gray-200 p-8 md:p-12">
          <h3 className="text-2xl font-light tracking-wide text-black mb-4">
            {lang === 'ar' ? 'هل تحتاج لمزيد من المساعدة؟' : 'Need More Help?'}
          </h3>
          <p className="text-lg font-light text-gray-800 mb-6">
            {lang === 'ar' 
              ? 'فريق خدمة العملاء لدينا جاهز لمساعدتك وإجابة كافة استفساراتك.' 
              : 'Our customer service team is here to assist you with any questions or concerns.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className={isRTL ? 'ml-2' : 'mr-2'}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {lang === 'ar' ? 'التواصل عبر الواتساب' : 'Contact on WhatsApp'}
            </a>
            <a
              href="https://instagram.com/reem.store7777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className={isRTL ? 'ml-2' : 'mr-2'}
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              {lang === 'ar' ? 'المتابعة على إنستغرام' : 'Follow on Instagram'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContent;