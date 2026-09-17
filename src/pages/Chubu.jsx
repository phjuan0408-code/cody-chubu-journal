import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Banner from "../components/Banner.jsx";
import PrefectureMap from "../components/PrefectureMap.jsx";
import { chubuPrefectures, places } from "../data/tripData.js";
export default function Chubu() {
 return <>
  <Banner title="名古屋・日本中部" englishTitle="01 / NAGOYA & CHUBU" meta="2026.05.08 — 05.16 · 9 DAYS" subtitle="沿著木曾路走進山城，穿越立山黑部，再回到名古屋。" imageUrl="./images/nagoya-2026/places/kamikochi.webp"/>
  <section className="region-summary"><div><p className="eyebrow">THE JOURNEY</p><h2>從城市出發，<br/>走進北阿爾卑斯。</h2></div><div><p>九天從名古屋出發，沿著木曾路走進山城與宿場町，穿越立山黑部，再把富山、白川鄉、高山、上高地與岐阜收進同一張地圖。</p><div className="summary-links"><Link className="text-link" to="/itinerary">九天的旅行 <ArrowRight size={16}/></Link><Link className="text-link" to="/food">沿途吃了什麼 <ArrowRight size={16}/></Link></div></div></section>
  <section id="map-section" className="region-map-section"><div className="section-heading"><div><p className="eyebrow">EXPLORE CHUBU</p><h2>旅程，在地圖上展開</h2></div><p>選一個地點，翻開它的旅記。</p></div><div className="map-surface"><PrefectureMap mode="chubu" highlightPrefectures={chubuPrefectures} places={places}/></div><nav className="place-index" aria-label="中部景點">{places.filter(p=>!p.hideOnMap).map(p=><Link key={p.id} to={`/place/${p.id}`}>{p.name} ↗</Link>)}</nav></section>
 </>;
}
