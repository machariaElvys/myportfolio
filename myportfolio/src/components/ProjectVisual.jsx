function LeafMark() {
  return (
    <svg className="leaf-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M39.6 7.8C25.2 7.2 12.7 10.4 8.5 21.4c-3.4 9 3.1 15.8 10.1 13.6 9.3-2.9 14.8-15.1 21-27.2Z" fill="currentColor" />
      <path d="M10 40c5.2-9.1 12.4-16.1 23.9-23.3" stroke="#F7F6F1" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export default function ProjectVisual({ type, compact = false }) {
  return (
    <div className={`project-visual visual-${type}${compact ? " is-compact" : ""}`} aria-hidden="true">
      {type === "shamba" && (
        <div className="farm-ui">
          <div className="farm-top"><div className="farm-brand"><LeafMark /> <span>shamba<span>smart</span></span></div><span className="farm-date">FIELD OVERVIEW&nbsp; · &nbsp;TODAY</span></div>
          <div className="farm-heading">Good morning<span>Let’s check on your crops.</span></div>
          <div className="farm-metrics"><div><small>SOIL MOISTURE</small><strong>68<span>%</span></strong><i><b style={{ width: "68%" }} /></i></div><div><small>FIELD TEMPERATURE</small><strong>24<span>°C</span></strong><em>Ideal range</em></div></div>
          <div className="farm-chart"><div className="chart-label"><span>Moisture over time</span><b>Last 7 days⌄</b></div><div className="chart-bars">{[36, 58, 48, 76, 61, 88, 71, 94, 65, 83, 73, 100, 78, 91].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
        </div>
      )}
      {type === "farm-management" && (
        <div className="records-ui">
          <div className="records-top"><div className="records-brand"><span>F</span> FARM<span>RECORDS</span></div><span>FARMER DASHBOARD &nbsp;·&nbsp; 2025</span></div>
          <div className="records-heading">Your farm, in focus<span>One place for every important record.</span></div>
          <div className="records-stats"><div><small>THIS YEAR’S SALES</small><b>KSh 248,500</b><span>↑ &nbsp;12.4%</span></div><div><small>HARVEST LOGGED</small><b>1,280 kg</b><span>Across 4 crops</span></div></div>
          <div className="records-list"><div className="records-list-head"><span>RECENT RECORDS</span><span>VIEW ALL ↗</span></div><div><i className="record-dot dot-leaf"/><span>Maize harvest</span><small>12 Aug</small><b>+ 420 kg</b></div><div><i className="record-dot dot-gold"/><span>Fertilizer input</span><small>08 Aug</small><b>− KSh 8,400</b></div><div><i className="record-dot dot-blue"/><span>Tomato sales</span><small>02 Aug</small><b>+ KSh 16,200</b></div></div>
        </div>
      )}
      {type === "jada" && (
        <div className="gallery-ui">
          <div className="gallery-top"><span>JADA <i>ART STUDIO</i></span><span>COLLECTION&nbsp; 2025</span></div>
          <div className="gallery-title">Art that<br /><i>stays with you.</i></div>
          <div className="art-grid"><div className="artwork art-one"><span /></div><div className="artwork art-two"><span /></div><div className="artwork art-three"><span /></div></div>
          <div className="gallery-caption">SELECTED WORKS&nbsp; <span>↗</span></div>
        </div>
      )}
      {type === "kitchen-core" && (
        <div className="kitchen-ui">
          <div className="kitchen-top"><span className="kitchen-wordmark">KITCHEN<span>CORE</span></span><span>FRESH IDEAS FOR EVERY MEAL</span></div>
          <div className="kitchen-welcome">Cook something<br /><i>delicious today.</i></div>
          <div className="kitchen-search"><span>⌕</span> Search recipes…<b>↗</b></div>
          <div className="kitchen-dishes"><div className="dish dish-one"><i /></div><div className="dish dish-two"><i /></div><div className="dish dish-three"><i /></div></div>
          <div className="kitchen-labels"><span>FEATURED RECIPES</span><span>FAVORITES&nbsp; ♡</span></div>
        </div>
      )}
    </div>
  );
}
