import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { japanUrl } from "../data/siteLinks.js";
const links = [{label:"日本地圖",href:japanUrl},{label:"Cody 中部旅記",to:"/chubu"},{label:"每日行程",to:"/itinerary"},{label:"沿途美食",to:"/food"}];
export default function Navbar() {
 const [open,setOpen] = useState(false);
 const {pathname} = useLocation();
 const gateway = false;
 useEffect(() => { setOpen(false); },[pathname]);
 useEffect(() => { const close = (e) => { if(e.key === "Escape") setOpen(false); }; window.addEventListener("keydown",close); return () => window.removeEventListener("keydown",close); },[]);
 const renderLink = (link) => link.href ? <a key={link.label} href={link.href} className="nav-link">{link.label}</a> : <NavLink key={link.to} to={link.to} end className="nav-link" onClick={()=>setOpen(false)}>{link.label}</NavLink>;
 return <nav className="journal-nav" aria-label="主要導覽"><div className="nav-inner">
  <Link className="journal-brand" to={gateway ? "/" : "/chubu"}><span className="brand-dot" aria-hidden="true"/><span><span className="brand-title">{gateway ? "Cody 日本旅記" : "Cody 中部旅記"}</span><span className="brand-caption">CODY'S TRAVEL JOURNAL</span></span></Link>
  {gateway ? <span className="nav-note">JAPAN · 2025 — 2026</span> : <><div className="nav-links">{links.map(renderLink)}</div><button className="menu-toggle" aria-label={open ? "關閉選單" : "開啟選單"} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button></>}
 </div>{open && !gateway && <div id="mobile-navigation" className="mobile-menu">{links.map(renderLink)}</div>}</nav>;
}
