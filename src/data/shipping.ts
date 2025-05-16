
import { City, ShippingRate } from '@/types/products';

export const SHIPPING_RATES: ShippingRate[] = [
  { city: 'Brasília', cost: 5.00 },
  { city: 'Águas Claras', cost: 7.50 },
  { city: 'Taguatinga', cost: 8.00 },
  { city: 'Ceilândia', cost: 10.00 },
  { city: 'Samambaia', cost: 10.00 },
  { city: 'Gama', cost: 12.00 },
  { city: 'Planaltina', cost: 15.00 }
];

export const FREE_SHIPPING_THRESHOLD = 300.00;
