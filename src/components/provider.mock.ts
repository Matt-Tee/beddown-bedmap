import { ProviderType, Address } from './map.interface';

const addressMock: Address[] = [
  {
    city: 'Brisbane',
    number: 14,
    postcode: 4000,
    state: 'Qld',
    street: 'Charlotte st',
    suburb: 'Brisbane City'
  },
  {
    city: 'Brisbane',
    number: 14,
    postcode: 4000,
    state: 'Qld',
    street: 'Wickham St',
    suburb: 'Fortidtude valley'
  },
  {
    city: 'Brisbane',
    number: 14,
    postcode: 4000,
    state: 'Qld',
    street: 'Boundary st',
    suburb: 'Springhill'
  },
];
export const providerMock: ProviderType[] = [
  {
    key: 1,
    address: addressMock[0],
    geoLocation: [153.02732, -27.470601],
    bedsAmount: 6,
    bedsAvailable: 10,
    gender: 'Mixed'
},
{
    key: 2,
    address: addressMock[1],
    geoLocation: [153.037877, -27.453294],
    bedsAmount: 6,
    bedsAvailable: 10,
    gender: 'Mixed'
},
{
    key: 3,
    address: addressMock[2],
    geoLocation: [153.022095, -27.470463],
    bedsAmount: 6,
    bedsAvailable: 10,
    gender: 'Mixed'
  },
];
