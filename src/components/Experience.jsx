import { experience } from '../data.js';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Journey</span>
          <h2>Experience &amp; education</h2>
        </div>
        <ol className="timeline">
          {experience.map((e) => (
            <li className="timeline__item reveal" key={e.title}>
              <span className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__top">
                  <span className="timeline__period">{e.period}</span>
                  <span className="pill">{e.type}</span>
                </div>
                <h3>{e.title}</h3>
                <p className="timeline__org">{e.org}</p>
                <ul>
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
