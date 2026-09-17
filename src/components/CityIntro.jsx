export default function CityIntro({title,subtitle,paragraphs=[],imageSrc,imageAlt=""}) {
 return <section className="city-intro"><img src={imageSrc} alt={imageAlt} loading="lazy"/><div><p className="eyebrow">{subtitle}</p><h1>{title}</h1>{paragraphs.map(p=><p key={p}>{p}</p>)}</div></section>;
}
