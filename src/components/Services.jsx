import { services } from '../data.js';

const steps = [
  ['01', 'Discuss', 'We talk through your idea, goals, budget and timeline.'],
  ['02', 'Plan & design', 'I share a clear scope, milestones and UI direction.'],
  ['03', 'Build', 'Regular demos so you can see progress and give feedback.'],
  ['04', 'Launch & support', 'Deployment, handover and support after launch.'],
];

export default function Services() {
  return (
    <section className="section section--alt" id="services">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Freelance</span>
          <h2>How I can help you</h2>
          <p>Need a new product, an MVP, or help with an existing codebase? I take on part-time freelance projects.</p>
        </div>
        <div className="services reveal">
          {services.map((s) => (
            <div className="service" key={s.title}>
              <span className="service__icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <div className="process reveal">
          {steps.map(([n, t, d]) => (
            <div className="process__step" key={n}>
              <span className="process__num">{n}</span>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
