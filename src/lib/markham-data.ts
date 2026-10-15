import villa from '@/assets/villa.jpg';
import apartment from '@/assets/apartment.jpg';
import lodge from '@/assets/lodge.jpg';
export { villa, apartment, lodge };
export const districts = ['Central', 'Chobe', 'Francistown', 'Gaborone', 'Ghanzi', 'Jwaneng', 'Kgalagadi', 'Kgatleng', 'Kweneng', 'Lobatse', 'North-East', 'North-West', 'Orapa', 'Selebi-Phikwe', 'Sowa', 'South-East', 'Southern'];
export type Listing = { id: number; name: string; district: string; area: string; image: string; price: number; rating: string; type: string; beds: number; guests: number; status: 'Available' | 'Upcoming'; tag: string };
export const listings: Listing[] = [
 { id:1, name:'The Acacia Residence', district:'Gaborone', area:'Phakalane, Gaborone', image:villa, price:1250, rating:'4.98', type:'Entire villa', beds:3, guests:6, status:'Available', tag:'Guest favourite' },
 { id:2, name:'City Light Apartment', district:'Gaborone', area:'CBD, Gaborone', image:apartment, price:650, rating:'4.92', type:'Entire apartment', beds:2, guests:4, status:'Available', tag:'Great value' },
 { id:3, name:'The Delta Hideaway', district:'North-West', area:'Maun, North-West', image:lodge, price:1800, rating:'4.99', type:'Private lodge', beds:2, guests:4, status:'Available', tag:'A little escape' },
 { id:4, name:'Chobe Riverside Retreat', district:'Chobe', area:'Kasane, Chobe', image:lodge, price:1450, rating:'New', type:'Private lodge', beds:2, guests:4, status:'Upcoming', tag:'Coming November' },
 { id:5, name:'Tati Urban Studio', district:'Francistown', area:'Tati River, Francistown', image:apartment, price:550, rating:'New', type:'Entire apartment', beds:1, guests:2, status:'Upcoming', tag:'Coming December' },
 { id:6, name:'The Garden House', district:'Central', area:'Palapye, Central', image:villa, price:850, rating:'4.86', type:'Entire house', beds:3, guests:6, status:'Available', tag:'Room to unwind' },
];
export function pageHead(title: string, description: string) { return { meta: [{title: `${title} · MarKHaM`}, {name:'description',content:description}, {property:'og:title',content:`${title} · MarKHaM`}, {property:'og:description',content:description}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'}] }; }
