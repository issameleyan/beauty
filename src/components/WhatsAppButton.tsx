import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/966500000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 z-40 p-4 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform"
      style={{ left: '1.25rem' }}
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7 text-[#fff]" />
    </a>
  );
};

export default WhatsAppButton;
