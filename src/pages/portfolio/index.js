import React, { useEffect, useMemo, useState, useCallback } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";
import mainPhoto from "../../assets/images/mainPhoto.jpg"

export default function Portfolio() {
  const items = Array.isArray(dataportfolio) ? dataportfolio : [];

  // Pick a hero image: hero -> cover -> img of first project
  const heroImage = useMemo(() => {
    if (!items.length) return "";
    const first = items[0] || {};
    return first.hero || first.cover || first.img || "";
  }, [items]);

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const openModal = useCallback((idx) => {
    setActiveIndex(idx);
    setSlideIndex(0);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const activeItem = items[activeIndex] || {};
  const gallery = useMemo(() => {
    if (Array.isArray(activeItem.gallery) && activeItem.gallery.length) {
      return activeItem.gallery;
    }
    const fallback = activeItem.cover || activeItem.img;
    return fallback ? [fallback] : [];
  }, [activeItem]);

  const nextSlide = useCallback(() => {
    if (!gallery.length) return;
    setSlideIndex((s) => (s + 1) % gallery.length);
  }, [gallery.length]);

  const prevSlide = useCallback(() => {
    if (!gallery.length) return;
    setSlideIndex((s) => (s - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  // Keyboard controls inside modal
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal, nextSlide, prevSlide]);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | {meta?.title || "Portfolio"}</title>
        <meta name="description" content={meta?.description || "Portfolio"} />
      </Helmet>

      {/* Hero */}
      <section
        className="portfolio-hero"
        style={{ ['--hero-bg']: `url(${mainPhoto})` }}
      >
        <div className="container hero-inner">
          <h1 className="hero-title">Portfolio</h1>
          <p className="hero-sub">
            Selected works — branding, UI/UX, posters, and concept visuals.
          </p>
        </div>
        <div className="hero-overlay" />
      </section>

      {/* Grid */}
      <section className="container portfolio-section">
        <div className="portfolio-grid">
          {items.map((p, i) => {
            const cover = p.cover || p.img;
            return (
              <article key={i} className="card">
                <div className="card-img-wrap" onClick={() => openModal(i)}>
                  {cover ? (
                    <img className="card-img" src={cover} alt={p.title || "Project"} />
                  ) : (
                    <div className="card-placeholder">No image</div>
                  )}
                  <div className="card-glow" />
                </div>

                <div className="card-body">
                  <h3 className="card-title">{p.title || "Untitled Project"}</h3>
                  {p.description && <p className="card-text">{p.description}</p>}

                  {Array.isArray(p.tags) && p.tags.length > 0 && (
                    <div className="tags">
                      {p.tags.map((t, idx) => (
                        <span key={idx} className="tag">{t}</span>
                      ))}
                    </div>
                  )}

                  <div className="card-actions">
                    <button className="btn btn--primary" onClick={() => openModal(i)}>
                      View project
                    </button>
                    {p.link && (
                      <a className="btn btn--ghost" href={p.link} target="_blank" rel="noreferrer">
                        Open link
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>

            <div className="modal-top">
              <div className="modal-media">
                {gallery.length ? (
                  <img className="modal-image" src={gallery[slideIndex]} alt="Slide" />
                ) : (
                  <div className="modal-placeholder">No images</div>
                )}
                {gallery.length > 1 && (
                  <>
                    <button className="modal-nav modal-nav--prev" onClick={prevSlide} aria-label="Previous">‹</button>
                    <button className="modal-nav modal-nav--next" onClick={nextSlide} aria-label="Next">›</button>
                  </>
                )}
              </div>

              <aside className="modal-info">
                <h2 className="modal-title">{activeItem.title || "Project"}</h2>
                {activeItem.description && (
                  <p className="modal-desc">{activeItem.description}</p>
                )}
                {Array.isArray(activeItem.tags) && activeItem.tags.length > 0 && (
                  <div className="modal-tags">
                    {activeItem.tags.map((t, idx) => (
                      <span key={idx} className="tag tag--chip">{t}</span>
                    ))}
                  </div>
                )}
                {activeItem.link && (
                  <a
                    href={activeItem.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--primary modal-link"
                  >
                    Open Project
                  </a>
                )}
              </aside>
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="thumbs">
                {gallery.map((g, idx) => (
                  <button
                    key={idx}
                    className={`thumb ${idx === slideIndex ? "is-active" : ""}`}
                    onClick={() => setSlideIndex(idx)}
                    aria-label={`Open image ${idx + 1}`}
                  >
                    <img src={g} alt={`thumb-${idx}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </HelmetProvider>
  );
}
