'use client';

type WhatsappButtonProps = {
  phone: string; // ex: "5583996858590"
  text?: string;
};

export default function WhatsappButton({ phone, text }: WhatsappButtonProps) {
  const handleClick = () => {
    if (window.gtag) {
      window.gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: `Clique no WhatsApp - ${phone}`,
      });
    }
  };

  const url = `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
    >
      💬 Falar no WhatsApp
    </a>
  );
}
