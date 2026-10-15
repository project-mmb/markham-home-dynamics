import { useState } from 'react';
import { Heart, Star, MapPin, BedDouble, Users, ArrowUpRight, Sparkles, Wifi, Car, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import type { Listing } from '@/lib/markham-data';
export function ListingCard({listing}:{listing:Listing}) {
 const [saved,setSaved]=useState(false); const [open,setOpen]=useState(false);
 return <><article className="listing-card">
 <div className="listing-photo"><img src={listing.image} width={1024} height={768} loading="lazy" alt={listing.name}/><span className="photo-tag">{listing.tag}</span><Button variant="secondary" size="icon" className="save-button" aria-label={`${saved?'Unsave':'Save'} ${listing.name}`} aria-pressed={saved} onClick={()=>setSaved(!saved)}><Heart className={saved?'heart-saved':''}/></Button><Button variant="ghost" className="photo-open" aria-label={`View ${listing.name}`} onClick={()=>setOpen(true)}/></div>
 <div className="listing-info"><div className="listing-title"><h3><Button variant="link" onClick={()=>setOpen(true)}>{listing.name}</Button></h3><span><Star size={13}/>{listing.rating}</span></div><p className="location"><MapPin size={13}/>{listing.area}</p><p className="listing-spec">{listing.type}<span>·</span>{listing.beds} bedrooms<span>·</span>{listing.guests} guests</p><div className="price-row"><p><strong>P {listing.price.toLocaleString()}</strong><span> / night</span></p><span className="smart-price"><Sparkles size={12}/>Smart price</span></div></div>
 </article><Dialog open={open} onOpenChange={setOpen}><DialogContent className="listing-dialog"><img src={listing.image} alt={listing.name} width={1024} height={768}/><DialogTitle>{listing.name}</DialogTitle><DialogDescription>{listing.area} · {listing.type}</DialogDescription><div className="detail-features"><span><BedDouble/> {listing.beds} bedrooms</span><span><Users/> {listing.guests} guests</span><span><Wifi/> Wi-Fi</span><span><Car/> Parking</span></div><p><strong>P {listing.price.toLocaleString()}</strong> / night</p><p className="demo-note">Sample listing and price. Booking and dynamic pricing are not connected.</p><Button onClick={()=>setOpen(false)}>Back to exploring <ArrowUpRight/></Button></DialogContent></Dialog></>;
}
