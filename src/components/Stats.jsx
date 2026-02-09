export default function Stats() {
  const stats = [
    { number: "1000+", label: "Students Trained" },
    { number: "50+", label: "Mentors" },
    { number: "95%", label: "Placement Rate" },
  ];

  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h2 className="stat-number">{stat.number}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
