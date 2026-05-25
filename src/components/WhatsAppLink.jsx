import React from 'react';
import { getWhatsAppHref } from '../utils/whatsapp';

/**
 * Renders an anchor that opens WhatsApp with a preset message.
 * @param {keyof import('../utils/whatsapp').MESSAGES | 'contactForm'} messageKey
 */
export default function WhatsAppLink({
  messageKey,
  formData,
  className = '',
  children,
  ...props
}) {
  return (
    <a
      href={getWhatsAppHref(messageKey, formData)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
