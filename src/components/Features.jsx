const features = [
  "Hands-on Projects",
  "Industry Mentors",
  "Live Sessions",
  "Placement Assistance",
];

export default function Features() {
  return (
    <section id="features" className="section section-alt">
      <h2 className="section-title section-title-center">Why Join?</h2>

      <div className="feature-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <h3 className="feature-title">{f}</h3>
            <p className="feature-text">Industry-standard training approach</p>
          </div>
        ))}
      </div>
    </section>
  );
}
