import { useMemo, useState } from "react";
import StorySectionGrid from "../components/StorySectionGrid.jsx";
import { storyItems } from "../data/tripData.js";
import { getFoodTagIcon } from "../utils/foodTags.js";

const preferredTagOrder = ["全部", "麵食", "拉麵", "主食", "甜點", "點心", "冰品", "水果", "飲品"];

export default function Food() {
  const foodSections = useMemo(
    () => storyItems.filter((item) => item.category === "food"),
    []
  );
  const availableTags = useMemo(() => {
    const usedTags = new Set(foodSections.flatMap((item) => item.tags || []));
    const orderedTags = preferredTagOrder.filter((tag) => tag === "全部" || usedTags.has(tag));
    const extraTags = [...usedTags].filter((tag) => !preferredTagOrder.includes(tag)).sort();
    return [...orderedTags, ...extraTags];
  }, [foodSections]);
  const [activeTag, setActiveTag] = useState("全部");

  const filteredSections = activeTag === "全部"
    ? foodSections
    : foodSections.filter((item) => item.tags?.includes(activeTag));

  return <section className="page-shell">
    <header className="page-heading"><div><p className="eyebrow">01 / NAGOYA & CHUBU · FOOD NOTES</p><h1>沿途美食</h1><p>名古屋與日本中部，旅行裡吃到的每一味。</p></div><span className="page-count">{foodSections.length} 則美食紀錄</span></header>
    <div className="filter-bar" aria-label="美食分類">{availableTags.map(tag=><button type="button" key={tag} className="filter-chip" aria-pressed={activeTag === tag} onClick={()=>setActiveTag(tag)}><span aria-hidden="true">{getFoodTagIcon(tag)}</span>{tag}</button>)}</div>
    <div className="food-results" aria-live="polite"><StorySectionGrid title={`${activeTag} · ${filteredSections.length} 則紀錄`} sections={filteredSections} fallbackImage="./images/placeholders/nagoya.webp"/></div>
  </section>;
}
