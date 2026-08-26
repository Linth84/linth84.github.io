import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import '../components/case-study/CaseStudy.css'

export default function PifTrackerCaseStudy() {
  const {
    language,
    toggleLanguage,
    t,
  } = useLanguage()

  const study = t.caseStudies.pif

  const pifPlayStoreUrl =
    language === 'es'
      ? 'https://play.google.com/store/apps/details?id=com.linthapps.piftracker&hl=es_AR'
      : 'https://play.google.com/store/apps/details?id=com.linthapps.piftracker&hl=en'

  const pifWebUrl =
    'https://edgardovillalba.is-a.dev/pif-tracker-web/'

  const pifGithubUrl =
    'https://github.com/Linth84/pif-tracker-web'

  const screenshots = [
    'calculator.png',
    'daily-log.png',
    'evolution.png',
    'tracking.png',
    'treatment-days.png',
  ]

  return (
    <main className="case-study case-study-mobile">
      {/* =====================================================
          HERO // PROJECT 03
          ===================================================== */}

      <section className="case-hero case-hero-mobile">
        <div className="case-shell">
          <div className="case-topbar">
            <Link to="/" className="case-back">
              ← {study.back}
            </Link>

            <div className="case-topbar-actions">
              <button
                type="button"
                className="case-language-switch"
                onClick={toggleLanguage}
              >
                LANG // {language.toUpperCase()}
              </button>

              <span>PROJECT // 03</span>
            </div>
          </div>

          <div className="case-hero-grid case-mobile-hero-grid">
            <div className="case-hero-copy">
              <div className="case-index">
                <span>03</span>
                <span>{study.type}</span>
              </div>

              <h1 className="case-mobile-title">
                {study.title}
              </h1>

              <p className="case-tagline">
                {study.tagline}
              </p>

              <p className="case-lead">
                {study.lead}
              </p>

              <div className="case-actions">
                <a
                  className="case-primary"
                  href="#overview"
                >
                  {study.explore}
                  <span>↓</span>
                </a>

                <a
                  className="case-secondary"
                  href={pifWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {study.liveDemo} ↗
                </a>

                <a
                  className="case-secondary"
                  href={pifPlayStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {study.playStore} ↗
                </a>
              </div>
            </div>

            <div className="case-phone-showcase">
              <div className="case-phone-telemetry">
                <span>DEVICE // 03</span>
                <span>{study.system}</span>
              </div>

              <div className="case-phone-frame case-phone-frame-pif">
                <div className="case-phone-speaker" />

                <video
                  src="/videos/pif-tracker/pif-tracker-demo.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>

              <div className="case-phone-status">
                <span className="case-live-dot" />
                <span>{study.mobileOnline}</span>
              </div>
            </div>
          </div>

          <div className="case-metrics case-mobile-metrics">
            <Metric
              value="84 + 84"
              label={study.metrics.cycle}
            />

            <Metric
              value="02"
              label={study.metrics.charts}
            />

            <Metric
              value="WEB + ANDROID"
              label={study.metrics.platforms}
            />

            <Metric
              value="ES / EN"
              label={study.metrics.languages}
            />
          </div>
        </div>
      </section>

      <CaseSection
        id="overview"
        index="01"
        eyebrow={study.sections.overview.eyebrow}
        title={study.sections.overview.title}
      >
        <div className="case-two-column">
          <p>{study.sections.overview.p1}</p>
          <p>{study.sections.overview.p2}</p>
        </div>
      </CaseSection>

      <CaseSection
        index="02"
        eyebrow={study.sections.problem.eyebrow}
        title={study.sections.problem.title}
      >
        <div className="case-split-cards">
          <article className="case-info-card">
            <span>01 // {study.sections.problem.contextLabel}</span>
            <p>{study.sections.problem.context}</p>
          </article>

          <article className="case-info-card case-info-card-accent">
            <span>02 // {study.sections.problem.solutionLabel}</span>
            <p>{study.sections.problem.solution}</p>
          </article>
        </div>
      </CaseSection>

      <CaseSection
        index="03"
        eyebrow={study.sections.role.eyebrow}
        title={study.sections.role.title}
      >
        <div className="case-role">
          <p>{study.sections.role.body}</p>

          <div className="case-role-tags">
            {study.sections.role.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </CaseSection>

      <CaseSection
        index="04"
        eyebrow={study.sections.features.eyebrow}
        title={study.sections.features.title}
      >
        <div className="case-feature-grid">
          {study.features.map((feature, index) => (
            <article
              className="case-feature-card"
              key={feature.title}
            >
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </CaseSection>

      <CaseSection
        index="05"
        eyebrow={study.sections.experience.eyebrow}
        title={study.sections.experience.title}
      >
        <div className="case-mobile-detail">
          <div className="case-mobile-copy">
            <p>{study.sections.experience.body}</p>

            <div className="case-role-tags">
              <span>84 + 84</span>
              <span>WEIGHT</span>
              <span>WELLNESS</span>
              <span>ES / EN</span>
              <span>KG / LB</span>
              <span>WEB + ANDROID</span>
            </div>
          </div>

          <div className="case-phone-showcase case-phone-showcase-inline">
            <div className="case-phone-frame case-phone-frame-pif">
              <div className="case-phone-speaker" />

              <video
                src="/videos/pif-tracker/pif-tracker-demo.webm"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </CaseSection>

      <CaseSection
        index="06"
        eyebrow={study.sections.gallery.eyebrow}
        title={study.sections.gallery.title}
      >
        <div className="case-pif-gallery">
          {screenshots.map((image, index) => (
            <figure className="case-pif-shot" key={image}>
              <div className="case-pif-shot-header">
                <div>
                  <span className="case-live-dot" />
                  <span>PIF TRACKER // WEB</span>
                </div>

                <span>
                  VIEW // {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="case-pif-shot-frame">
                <img
                  src={`/images/pif-tracker/${image}`}
                  alt={`PIF Tracker interface screenshot ${index + 1}`}
                  loading="lazy"
                />
              </div>

              <div className="case-pif-shot-footer">
                <span>SYS // PIF-03</span>
                <span>CAPTURE // LIVE APP</span>
              </div>
            </figure>
          ))}
        </div>
      </CaseSection>

      <CaseSection
        id="stack"
        index="07"
        eyebrow={study.sections.stack.eyebrow}
        title={study.sections.stack.title}
      >
        <div className="case-stack-grid case-stack-grid-mobile">
          {[
            'JAVASCRIPT',
            'HTML',
            'CSS',
            'LOCAL STORAGE',
            'ANDROID',
            'RESPONSIVE UI',
          ].map((item, index) => (
            <div className="case-stack-node" key={item}>
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>

              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection
        index="08"
        eyebrow={study.sections.learnings.eyebrow}
        title={study.sections.learnings.title}
      >
        <div className="case-two-column">
          <p>{study.sections.learnings.p1}</p>
          <p>{study.sections.learnings.p2}</p>
        </div>
      </CaseSection>

      <section className="case-footer">
        <div className="case-shell">
          <span>END // PROJECT 03</span>

          <h2>{study.footerTitle}</h2>

          <div className="case-actions">
            <a
              href={pifWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-primary"
            >
              {study.liveDemo}
              <span>↗</span>
            </a>

            <a
              href={pifPlayStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-secondary"
            >
              {study.playStore}
            </a>

            <a
              href={pifGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-secondary"
            >
              GITHUB
            </a>

            <Link to="/" className="case-secondary">
              {study.back}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}


type MetricProps = {
  value: string
  label: string
}

function Metric({
  value,
  label,
}: MetricProps) {
  return (
    <div className="case-metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}


type CaseSectionProps = {
  id?: string
  index: string
  eyebrow: string
  title: string
  children: React.ReactNode
}

function CaseSection({
  id,
  index,
  eyebrow,
  title,
  children,
}: CaseSectionProps) {
  return (
    <section
      className="case-section"
      id={id}
    >
      <div className="case-shell">
        <div className="case-section-heading">
          <span>{index}</span>

          <div>
            <small>{eyebrow}</small>
            <h2>{title}</h2>
          </div>
        </div>

        <div className="case-section-content">
          {children}
        </div>
      </div>
    </section>
  )
}
