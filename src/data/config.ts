// Shop settings. Change the WhatsApp number before going live.
export const SHOP = {
  name: 'Mootea',
  city: 'Marrakech',
  // International format, digits only (212 + number without the leading 0).
  // TODO: replace with Mootea's real WhatsApp number.
  whatsapp: '212600000000',
  instagram: 'https://www.instagram.com/',
  hours: 'Every day · 11:00 – 23:00',
  address: 'Marrakech',
  mapsUrl: 'https://maps.google.com/?q=Mootea+Marrakech',
  currency: 'DH',
};

// Delivery estimates for Marrakech (placeholder grid, adjust to the real courier prices).
export interface Zone {
  id: string;
  name: string;
  areas: string;
  fee: number;
  eta: string;
}

export const ZONES: Zone[] = [
  { id: 'gueliz', name: 'Guéliz · Hivernage', areas: 'Guéliz, Hivernage, Majorelle, Victor Hugo', fee: 15, eta: '20–30 min' },
  { id: 'medina', name: 'Médina · Kasbah', areas: 'Médina, Kasbah, Mellah, Riad Zitoun, Bab Doukkala', fee: 20, eta: '30–40 min' },
  { id: 'north', name: 'Semlalia · Daoudiate', areas: 'Semlalia, Daoudiate, Issil, Amerchich', fee: 20, eta: '25–35 min' },
  { id: 'west', name: 'Targa · Massira', areas: 'Targa, Massira, Azli, Mhamid, Sidi Ghanem', fee: 25, eta: '35–45 min' },
  { id: 'south', name: 'Agdal · M’hamid', areas: 'Agdal, Route de l’Ourika (city), Izdihar, Sidi Youssef Ben Ali', fee: 25, eta: '35–45 min' },
  { id: 'far', name: 'Palmeraie · outskirts', areas: 'Palmeraie, Route de Fès, Route de Casa, Tamansourt road', fee: 40, eta: '45–60 min' },
];

export const ORDERING = {
  minOrder: 60,
  freeDeliveryFrom: 250,
};
