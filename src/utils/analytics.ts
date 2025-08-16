// Analytics and Tracking Utilities

// Função helper para verificar se estamos no browser
const isBrowser = () => typeof window !== 'undefined';

// Google Analytics 4 Events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (isBrowser() && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

// Google Ads Conversion Tracking
export const trackConversion = (conversionId: string, value?: number, currency = 'BRL') => {
  if (isBrowser() && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': `AW-17031617120/${conversionId}`,
      'value': value,
      'currency': currency
    });
  }
};

// Facebook Pixel Events
export const trackFacebookEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (isBrowser() && (window as any).fbq) {
    (window as any).fbq('track', eventName, parameters);
  }
};

// Hotjar Events
export const trackHotjarEvent = (eventName: string) => {
  if (isBrowser() && (window as any).hj) {
    (window as any).hj('event', eventName);
  }
};

// Specific tracking functions for common events
export const analytics = {
  // Page views
  pageView: (pageName: string) => {
    trackEvent('page_view', { page_title: pageName });
    trackFacebookEvent('PageView');
  },

  // Button clicks
  buttonClick: (buttonName: string, location: string) => {
    trackEvent('click', {
      event_category: 'engagement',
      event_label: buttonName,
      page_location: location
    });
    trackHotjarEvent(`button_click_${buttonName}`);
  },

  // Form submissions
  formSubmit: (formName: string) => {
    trackEvent('form_submit', {
      event_category: 'engagement',
      event_label: formName
    });
    trackFacebookEvent('Lead');
    trackHotjarEvent(`form_submit_${formName}`);
  },

  // Appointment scheduling
  scheduleAppointment: (specialty: string, value?: number) => {
    trackEvent('schedule_appointment', {
      event_category: 'conversion',
      event_label: specialty,
      value: value
    });
    trackConversion('schedule_appointment', value);
    trackFacebookEvent('Schedule', { 
      content_name: specialty,
      value: value,
      currency: 'BRL'
    });
    trackHotjarEvent('appointment_scheduled');
  },

  // Specialty selection
  selectSpecialty: (specialty: string) => {
    trackEvent('select_content', {
      event_category: 'engagement',
      content_type: 'specialty',
      item_id: specialty
    });
    trackFacebookEvent('ViewContent', { 
      content_name: specialty,
      content_type: 'specialty'
    });
  },

  // WhatsApp clicks
  whatsappClick: (location: string) => {
    trackEvent('click', {
      event_category: 'engagement',
      event_label: 'whatsapp_click',
      page_location: location
    });
    trackFacebookEvent('Contact');
    trackHotjarEvent('whatsapp_click');
  },

  // FAQ interactions
  faqOpen: (question: string) => {
    trackEvent('click', {
      event_category: 'engagement',
      event_label: 'faq_open',
      faq_question: question
    });
    trackHotjarEvent('faq_interaction');
  },

  // Testimonial interactions
  testimonialView: (testimonialAuthor: string) => {
    trackEvent('view_item', {
      event_category: 'engagement',
      item_name: testimonialAuthor,
      item_category: 'testimonial'
    });
  },

  // Menu navigation
  menuNavigation: (menuItem: string) => {
    trackEvent('click', {
      event_category: 'navigation',
      event_label: menuItem
    });
  }
};

export default analytics;
