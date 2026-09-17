import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { itineraryDays, places } from "../data/tripData.js";
const days = itineraryDays.map(day=>({...day,path:`/day/${day.day.toLowerCase().replace(/\s+/g,"-")}`,image:day.heroImages?.[0]?.src}));
const placeName = id => places.find(place=>place.id===id)?.name;
const placePath = id => `/place/${id}`;
export default function Itinerary() { return <section className="page-shell">
 <header className="page-heading"><div><p className="eyebrow">01 / NAGOYA & CHUBU · DAILY JOURNAL</p><h1>每日行程</h1><p>從名古屋出發，九天走過城市、宿場町與北阿爾卑斯。</p></div><span className="page-count">2026.05.08 — 05.16<br/>{days.length} 天的旅行紀錄</span></header>
 <div className="itinerary-list">{days.map(day=><article key={day.day} className="itinerary-row">
  <img className="itinerary-photo" src={day.image} alt={day.title} loading="lazy"/>
  <div className="day-number"><small>DAY</small>{day.day.replace("Day ","").padStart(2,"0")}</div>
  <div className="itinerary-copy"><time>{day.date}</time><h2><Link className="day-title-link" to={day.path}>{day.title}</Link></h2><p>{day.note}</p><div className="route-chips">{day.placeIds.map(id=><Link key={id} to={placePath(id)}>{placeName(id)}</Link>)}</div></div><ArrowUpRight className="row-arrow" size={21}/>
 </article>)}</div></section>; }
