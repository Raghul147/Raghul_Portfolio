import { profile, stats } from '../data.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" />
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="pill pill--live">
            <span className="dot" /> Available for freelance projects
          </span>
          <h1>
            Hi, I'm <span className="gradient-text">{profile.name}</span>
            <br />I build products people love to use.
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary">Start a project</a>
            <a href="#projects" className="btn btn--ghost">See my work</a>
          </div>
          <div className="hero__stats">
            {stats.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__photo">
            <img src={profile.photo} alt={profile.name} />
          </div>
          <div className="floating-card floating-card--top">
            <span className="floating-card__icon">⚡</span>
            <div>
              <strong>Real-time apps</strong>
              <small>WebSockets · Go · FastAPI</small>
            </div>
          </div>
          <div className="floating-card floating-card--bottom">
            <span className="floating-card__icon">📱</span>
            <div>
              <strong>Web + Mobile</strong>
              <small>React · React Native</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
