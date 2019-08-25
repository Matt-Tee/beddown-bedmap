import ProviderType from './map.interface'

export const providerMock: ProviderType[] = [
  {
    id: 1,
    name: "Charlotte Street Building",
    location: { address: '14 Charlotte st, Brisbane, QLD, 400', directions: '' },
    beds: { male: { available: 8, max: 10 } },
    image: "" ,
    contact: { phone: '1800 111 111', email: 'notfake@fake.com.au' },
    geoLocation: [153.02732, -27.470601],
  },
  {
    id: 2,
    name: "Wickham Street Building",
    location: { address: '14 Wickham St, Fortidtude valley, Qld, 4000', directions: '' },
    beds: { male: { available: 8, max: 10 } },
    image: "" ,
    contact: { phone: '1800 111 111', email: 'notfake@fake.com.au' },
    geoLocation: [153.037877, -27.453294],
  },
  {
    id: 3,
    name: "Boundary Street building",
    location: { address: '14 Boundary st, Springhill, QLD, 4000', directions: '' },
    beds: { male: { available: 8, max: 10 } },
    image: "" ,
    contact: { phone: '1800 111 111', email: 'notfake@fake.com.au' },
    geoLocation: [153.022095, -27.470463],
  },
];
