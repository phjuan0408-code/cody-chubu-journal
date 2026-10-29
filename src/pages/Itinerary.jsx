import { Link } from "react-router-dom";
import { itineraryDays } from "../data/tripData.js";
import "./Itinerary.css";
const days = itineraryDays.map(d=>({...d,path:`/day/${d.day.toLowerCase().replace(/\s+/g,"-")}`}));
const summaries = [["初抵名古屋", "抵達名古屋，從市區的第一晚展開九天旅程。"], ["名古屋城", "走訪名古屋城，沿途吃咖啡店早餐與在地美食。"], ["奈良井宿・松本", "走過奈良井宿與松本城，前往信濃大町。"], ["立山黑部", "穿越雪之大谷與黑部水壩，一路抵達富山。"], ["白川鄉・高山", "走訪合掌聚落，再到高山老街散步。"], ["上高地", "沿梓川欣賞山景，傍晚啟程返回名古屋。"], ["犬山城・關市", "登上犬山城，再到關市認識刀具工藝。"], ["名古屋散策", "走訪熱田神宮，把時間留給逛街與美食。"], ["返程日", "從名古屋前往常滑，經中部機場返回台灣。"]];
export default function Itinerary() { return <section className="page-shell">
<header className="page-heading"><div><p className="eyebrow">01 / NAGOYA & CHUBU · DAILY JOURNAL</p><h1>每日行程</h1><p>從名古屋出發，九天走過城市、宿場町與北阿爾卑斯。</p></div><span className="page-count">2026.05.08 — 05.16<br/>{days.length} 天的旅行紀錄</span></header>
<table className="itinerary-table"><caption className="sr-only">每日行程：點選標題閱讀當天旅記</caption><thead><tr><th scope="col">DAY</th><th scope="col">行程</th><th scope="col">旅程摘要</th></tr></thead><tbody>{days.map((day,index)=><tr key={day.day}><td className="itinerary-day">{String(index+1).padStart(2,"0")}</td><td><Link to={day.path} aria-label={`Day ${index+1}：${summaries[index][0]}`}>{summaries[index][0]}</Link></td><td className="itinerary-summary">{summaries[index][1]}</td></tr>)}</tbody></table>
</section>; }
