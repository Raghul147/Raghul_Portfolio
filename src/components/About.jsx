import { skills } from '../data.js';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="reveal">
          <span className="eyebrow">About me</span>
          <h2>Engineer by day, freelancer by passion.</h2>
          <p>
            I'm a software engineer from India with a B.E. in Information Science &amp; Engineering. From 2023 to 2024 I
            built projects and completed internships in full-stack web development and Java, shipping everything from
            C++ systems to MERN apps and an Android billing app.
          </p>
          <p>
            Since 2024 I've worked as an <strong>Associate Software Engineer at Stavtar</strong>. Alongside that I
            freelance. My most recent client project, <strong>Flexible Dieting</strong>, is a real-time coaching
            platform with a React web portal, a React Native app, and FastAPI and Go services behind them.
          </p>
          <p>
            I care about clean code, clear communication and shipping on time. If you have an idea, I can take it from
            design to deployment.
          </p>
        </div>
        <div className="skills reveal">
          {skills.map((s) => (
            <div className="skills__group" key={s.group}>
              <h4>{s.group}</h4>
              <div className="chips">
                {s.items.map((i) => (
                  <span className="chip" key={i}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
