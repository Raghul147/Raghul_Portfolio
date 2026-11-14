import { useEffect, useState } from 'react';

export default function Lightbox({ images, index: start, title, onClose }) {
  const [index, setIndex] = useState(start);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const current = images[index];

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox__head">
          <div>
            <strong>{title}</strong>
            {current.caption && <span className="muted"> · {current.caption}</span>}
          </div>
          <span className="muted">{index + 1} / {images.length}</span>
          <button className="lightbox__close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="lightbox__stage">
          <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous">‹</button>
          <img src={current.src} alt={current.caption || title} />
          <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next">›</button>
        </div>
        <div className="lightbox__strip">
          {images.map((m, i) => (
            <button key={m.src} className={`thumb ${i === index ? 'thumb--active' : ''}`} onClick={() => setIndex(i)}>
              <img src={m.src} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
