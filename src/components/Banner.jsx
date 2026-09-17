import { ArrowDown } from "lucide-react";
export default function Banner({ title, subtitle, meta, imageUrl, englishTitle, mapTarget = "map-section" }) {
 return <header className="region-hero">
  <img src={imageUrl} alt="" fetchPriority="high" />
  <div className="hero-shade" />
  <div className="hero-content">
   <p className="eyebrow">{englishTitle || "JAPAN TRAVEL JOURNAL"}</p>
   <h1>{title}</h1><p className="hero-subtitle">{subtitle}</p>
   <div className="hero-bottom"><p className="hero-date">{meta}</p>
    <button className="hero-map-link" onClick={() => document.getElementById(mapTarget)?.scrollIntoView({behavior:"smooth"})}>展開旅行地圖 <ArrowDown size={16}/></button>
   </div>
  </div>
 </header>;
}
