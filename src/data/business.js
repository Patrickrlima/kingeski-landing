/**
 * Dados centrais da barbearia — edite só aqui, o resto da página se
 * atualiza sozinho. Campos marcados // TODO ainda usam valor de exemplo.
 */
const business = {
  name: 'Kingeski Barbearia',
  city: 'Osório',
  state: 'RS',
  address: 'Av. Getúlio Vargas, 1102 – Centro, Osório – RS',
  addressShort: 'Av. Getúlio Vargas, 1102 – Centro',
  mapsQuery: 'Kingeski Barbearia, Av. Getúlio Vargas, 1102, Centro, Osório - RS',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('Kingeski Barbearia, Av. Getúlio Vargas, 1102, Centro, Osório - RS'),
  // TODO: cole aqui o link real "Ver no Google" / avaliações do perfil do Google Business da Kingeski.
  googleReviewsUrl: 'https://www.google.com/maps/place/?q=place_id:TODO_KINGESKI_PLACE_ID',
  instagram: 'https://www.instagram.com/kingeskibarbearia/',
  whatsapp: '5551991287463',
  // TODO: telefone comercial, se houver um diferente do WhatsApp.
  phone: '',
  hours: [
    { days: 'Segunda a sexta', time: '08:00 – 20:00' },
    { days: 'Sábado', time: '08:00 – 19:00' },
    { days: 'Domingo', time: 'Fechado' },
  ],
};

export function buildWhatsappLink(message) {
  const text = encodeURIComponent(message || 'Olá! Quero agendar um horário na Kingeski Barbearia.');
  return `https://wa.me/${business.whatsapp}?text=${text}`;
}

export default business;
