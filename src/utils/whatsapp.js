/** S7 Padel WhatsApp: +971 58 586 9190 */
export const WHATSAPP_NUMBER = '971585869190';

const MESSAGES = {
  bookCourt: `Hi Team S7,
Looking to reserve a court. Kindly share available slots and prices`,

  bookCoaching: `Hello S7,
Interested in a coaching session. Kindly send available timings and rates.`,

  getInTouch: `Hi S7 Padel,

I would like to get in touch. Please share more information about S7 Padel.

Thank you!`,

  getSponsorship: `Hi S7 Padel,

I am interested in sponsorship opportunities at S7 Padel. Please share details on available packages.

Thank you!`,

  becomePartner: `Hi S7 Padel,

I would like to become a partner with S7 Padel. Please send information on partnership tiers and benefits.

Thank you!`,

  partnershipContact: `Hi S7 Padel,

I would like to discuss a partnership with S7 Padel. Please contact me to arrange a conversation.

Thank you!`,

  requestSponsorshipDeck: `Hi S7 Padel,

Please send me the full sponsorship deck and collaboration overview.

Thank you!`,
};

export function buildContactFormMessage({ fullName, email, phone, enquiryType, message }) {
  return `Hi S7 Padel,

*Hi Team S7,
    Looking to reserve a court. Kindly share available slots and prices.*

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Enquiry type: ${enquiryType}

Message:
${message}

Thank you!`;
}

export function getWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppHref(messageKey, formData) {
  if (messageKey === 'contactForm' && formData) {
    return getWhatsAppUrl(buildContactFormMessage(formData));
  }
  const text = MESSAGES[messageKey];
  if (!text) return getWhatsAppUrl(MESSAGES.getInTouch);
  return getWhatsAppUrl(text);
}

export function openWhatsApp(messageKey, formData) {
  window.open(getWhatsAppHref(messageKey, formData), '_blank', 'noopener,noreferrer');
}
