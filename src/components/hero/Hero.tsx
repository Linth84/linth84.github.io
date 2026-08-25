import './Hero.css'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Hero() {
  const {
    language,
    toggleLanguage,
    t,
  } = useLanguage()

  const hero = t.hero

  return (
    <section className="hero" id="home">
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-stars" aria-hidden="true" />

      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <header className="hero-nav">
        <div className="identity">
          <span
            className="identity-mark identity-orbit-mark"
            aria-hidden="true"
          >
            <span className="identity-node-dot" />
            <strong>11</strong>
          </span>

          <div>
            <strong>EDGARDO VILLALBA</strong>
            <span>PORTFOLIO / 2026</span>
          </div>
        </div>

        <nav>
          <a href="#about">
            {hero.nav.about}
          </a>

          <a href="#projects">
            {hero.nav.projects}
          </a>

          <a href="#skills">
            {hero.nav.skills}
          </a>
        </nav>

        <div className="hero-nav-actions">
          <button
            type="button"
            className="language-switch"
            onClick={toggleLanguage}
            aria-label={
              language === 'en'
                ? 'Cambiar idioma a español'
                : 'Switch language to English'
            }
          >
            <span>{hero.languageLabel}</span>
            <strong>
              {language.toUpperCase()}
            </strong>
          </button>

          <div className="status">
            <span className="status-dot" />
            <span>{hero.status}</span>
          </div>
        </div>
      </header>

      {/* =====================================================
          SYSTEM INFORMATION
          ===================================================== */}

      <div className="hero-interface">
        <span>{hero.interface.system}</span>
        <span>{hero.interface.location}</span>
        <span>{hero.interface.coords}</span>
      </div>

      {/* =====================================================
          ORBITS
          ===================================================== */}

      <div className="orbit orbit-outer" aria-hidden="true" />
      <div className="orbit orbit-middle" aria-hidden="true" />
      <div className="orbit orbit-inner" aria-hidden="true" />

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}

      <div className="hero-center">
        <p className="eyebrow">
          {hero.eyebrow}
        </p>

        <div className="hero-name">
          <img
            className="hero-name-image"
            src="/images/edgardo-villalba.png"
            alt="Edgardo Villalba"
            draggable="false"
          />

          <h1 className="sr-only">
            Edgardo Villalba
          </h1>
        </div>

        <p className="hero-description">
          <span>{hero.descriptionLine1}</span>
          <span>{hero.descriptionLine2}</span>
        </p>

        <div className="hero-actions">
          <a
            href="#projects"
            className="primary-action"
          >
            {hero.actions.projects}
            <span>↗</span>
          </a>

          <a
            href={
              language === 'es'
                ? 'mailto:villalbaed84@gmail.com?subject=Contacto%20desde%20tu%20portfolio'
                : 'mailto:villalbaed84@gmail.com?subject=Portfolio%20Contact'
            }
            className="secondary-action"
          >
            {hero.actions.contact}
          </a>
        </div>
      </div>

      {/* =====================================================
          LEFT TELEMETRY
          ===================================================== */}

      <div className="telemetry telemetry-left">
        <span>{hero.telemetry.node}</span>
        <strong>EV-11</strong>
        <span>{hero.telemetry.online}</span>
      </div>

      {/* =====================================================
          RIGHT TELEMETRY
          ===================================================== */}

      <div className="telemetry telemetry-right">
        <span>{hero.telemetry.system}</span>
        <strong>{hero.telemetry.portfolio}</strong>
        <span>{hero.telemetry.ready}</span>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
          ===================================================== */}

      <a
        className="scroll-indicator"
        href="#projects"
      >
        <span className="scroll-line" />
        <span>{hero.scroll}</span>
      </a>
    </section>
  )
}
