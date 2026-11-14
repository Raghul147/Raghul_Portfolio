import { useState } from 'react';
import { projects } from '../data.js';
import Lightbox from './Lightbox.jsx';

const categories = ['All', ...new Set(projects.map((p) => p.category))];

function Frame({ device, src, alt, onClick }) {
  if (device === 'mobile') {
    return (
      <button className="frame frame--phone" onClick={onClick}>
        <img src={src} alt={alt} loading="lazy" />
      </button>
    );
  }
  return (
    <button className={`frame frame--browser ${device === 'terminal' ? 'frame--terminal' : ''}`} onClick={onClick}>
      <span className="frame__bar">
        <i /><i /><i />
      </span>
      <img src={src} alt={alt} loading="lazy" />
    </button>
  );
}

function Links({ project, onOpen }) {
  return (
    <div className="project__links">
      <button className="btn btn--ghost btn--sm" onClick={onOpen}>
        View screenshots ({project.images.length + (project.mobileImages?.length || 0)})
      </button>
      {project.links.github && (
        <a className="btn btn--ghost btn--sm" href={project.links.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      )}
    </div>
  );
}

function Featured({ project, open }) {
  return (
    <article className="featured reveal">
      <div className="featured__text">
        <div className="project__meta">
          <span className="pill pill--accent">{project.badge}</span>
          <span className="pill">{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="highlights">
          {project.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
        <div className="chips">
          {project.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
        </div>
        <Links project={project} onOpen={() => open(project, 0)} />
      </div>
      <div className="featured__visual">
        <Frame device="desktop" src={project.images[0].src} alt={project.title} onClick={() => open(project, 0)} />
        <div className="featured__phones">
          {project.mobileImages.slice(0, 3).map((m, i) => (
            <Frame
              key={m.src}
              device="mobile"
              src={m.src}
              alt={m.caption}
              onClick={() => open(project, project.images.length + i)}
            />
          ))}
        </div>
        <div className="thumbs">
          {project.images.slice(1).map((m, i) => (
            <button key={m.src} className="thumb" onClick={() => open(project, i + 1)}>
              <img src={m.src} alt={m.caption} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

function Card({ project, open }) {
  return (
    <article className={`card ${project.device === 'mobile' ? 'card--mobile' : ''}`}>
      <div className="card__media">
        {project.device === 'mobile' ? (
          <div className="card__phones">
            {project.images.slice(0, 3).map((m, i) => (
              <Frame key={m.src} device="mobile" src={m.src} alt={project.title} onClick={() => open(project, i)} />
            ))}
          </div>
        ) : (
          <Frame device={project.device} src={project.images[0].src} alt={project.title} onClick={() => open(project, 0)} />
        )}
      </div>
      <div className="card__body">
        <div className="project__meta">
          <span className="pill">{project.category}</span>
          <span className="muted">{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="highlights highlights--compact">
          {project.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
        <div className="chips">
          {project.stack.map((s) => <span className="chip chip--sm" key={s}>{s}</span>)}
        </div>
        <Links project={project} onOpen={() => open(project, 0)} />
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [viewer, setViewer] = useState(null);

  const open = (project, index) =>
    setViewer({ images: [...project.images, ...(project.mobileImages || [])], index, title: project.title });

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured && (filter === 'All' || p.category === filter));
  const showFeatured = filter === 'All' || featured.category === filter;

  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Selected work</span>
          <h2>Projects I've built</h2>
          <p>Every screenshot below comes from the actual project. Click any image to browse the full gallery.</p>
        </div>

        <div className="filters">
          {categories.map((c) => (
            <button key={c} className={`filter ${filter === c ? 'filter--active' : ''}`} onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </div>

        {showFeatured && <Featured project={featured} open={open} />}

        <div className="grid">
          {rest.map((p) => <Card key={p.id} project={p} open={open} />)}
        </div>
      </div>

      {viewer && <Lightbox {...viewer} onClose={() => setViewer(null)} />}
    </section>
  );
}
