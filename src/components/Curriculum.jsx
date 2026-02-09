export default function Curriculum() {
  const topics = [
    "Linux & Shell Scripting",
    "Git & GitHub",
    "Docker & Containerization",
    "Kubernetes Orchestration",
    "Jenkins CI/CD Pipeline",
    "AWS Cloud Services",
    "Infrastructure as Code",
    "Monitoring & Logging",
    "Real-time Projects"
  ];

  return (
    <section id="curriculum" className="section">
      <h2 className="section-title section-title-center">Curriculum</h2>

      <div className="section-content">
        <ul className="curriculum-list">
          {topics.map((topic, index) => (
            <li key={index} className="curriculum-item">
              - {topic}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
