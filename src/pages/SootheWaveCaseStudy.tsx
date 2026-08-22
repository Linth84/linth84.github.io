import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import '../components/case-study/CaseStudy.css'

export default function SootheWaveCaseStudy() {
  const {
    language,
    toggleLanguage,
    t,
  } = useLanguage()

  const study = t.caseStudies.soothe

  const playStoreUrl =
    language === 'es'
      ? 'https://play.google.com/store/apps/details?id=com.linthapps.soothewaveapp&hl=es_AR'
      : 'https://play.google.com/store/apps/details?id=com.linthapps.soothewaveapp&hl=en'

  return (
    <main className="case-study case-study-mobile">
      {/* =====================================================
          HERO
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

              <h1 className="case-mobile-title case-soothe-title">
                SootheWaveApp
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
                  href="#stack"
                >
                  {study.stackAction}
                </a>
              </div>
            </div>

            <div className="case-phone-showcase">
              <div className="case-phone-telemetry">
                <span>DEVICE // 03</span>
                <span>SOOTHEWAVEAPP</span>
              </div>

              <div className="case-phone-frame case-phone-frame-soothe">
                <div className="case-phone-speaker" />

                <video
                  src="/videos/soothewave/soothewave-demo.webm"
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
              value="04"
              label={study.metrics.modes}
            />

            <Metric
              value="10"
              label={study.metrics.sections}
            />

            <Metric
              value="EN"
              label={study.metrics.language}
            />

            <Metric
              value="01"
              label={study.metrics.experience}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
          ===================================================== */}

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

      {/* =====================================================
          PURPOSE / DESIGN
          ===================================================== */}

      <CaseSection
        index="02"
        eyebrow={study.sections.problem.eyebrow}
        title={study.sections.problem.title}
      >
        <div className="case-split-cards">
          <article className="case-info-card">
            <span>01 // {study.sections.problem.purposeLabel}</span>
            <p>{study.sections.problem.purpose}</p>
          </article>

          <article className="case-info-card case-info-card-accent">
            <span>02 // {study.sections.problem.designLabel}</span>
            <p>{study.sections.problem.design}</p>
          </article>
        </div>
      </CaseSection>

      {/* =====================================================
          MY ROLE
          ===================================================== */}

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

          <div className="case-collaboration">
            <div className="case-collaboration-header">
              <span>{study.collaboration.eyebrow}</span>
            </div>

            <div className="case-collaboration-content">
              <div>
                <span className="case-collaboration-role">
                  {study.collaboration.role}
                </span>

                <a
                  href="https://www.deviantart.com/facuam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-collaboration-link"
                >
                  FACUNDO MORELLO
                  <span>↗</span>
                </a>
              </div>

              <p>{study.collaboration.description}</p>
            </div>
          </div>
        </div>
      </CaseSection>

      {/* =====================================================
          FEATURES
          ===================================================== */}

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

      {/* =====================================================
          MOBILE EXPERIENCE
          ===================================================== */}

      <CaseSection
        index="05"
        eyebrow={study.sections.experience.eyebrow}
        title={study.sections.experience.title}
      >
        <div className="case-mobile-detail case-mobile-detail-reverse">
          <div className="case-phone-showcase case-phone-showcase-inline">
            <div className="case-phone-frame case-phone-frame-soothe">
              <div className="case-phone-speaker" />

              <video
                src="/videos/soothewave/soothewave-demo.webm"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>

          <div className="case-mobile-copy">
            <p>{study.sections.experience.body}</p>

            <div className="case-role-tags">
              <span>MEDITATION</span>
              <span>SAFE PLACE</span>
              <span>BODY SCAN</span>
              <span>CHIME</span>
            </div>
          </div>
        </div>
      </CaseSection>

      {/* =====================================================
          STACK
          ===================================================== */}

      <CaseSection
        id="stack"
        index="06"
        eyebrow={study.sections.stack.eyebrow}
        title={study.sections.stack.title}
      >
        <div className="case-stack-grid case-stack-grid-mobile">
          {[
            'ANDROID',
            'JAVASCRIPT',
            'HTML',
            'CSS',
            'ANDROID STUDIO',
            'MOBILE',
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

      {/* =====================================================
          LEARNINGS
          ===================================================== */}

      <CaseSection
        index="07"
        eyebrow={study.sections.learnings.eyebrow}
        title={study.sections.learnings.title}
      >
        <div className="case-two-column">
          <p>{study.sections.learnings.p1}</p>
          <p>{study.sections.learnings.p2}</p>
        </div>
      </CaseSection>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <section className="case-footer">
        <div className="case-shell">
          <span>END // PROJECT 03</span>

          <h2>{study.footerTitle}</h2>

          <div className="case-actions">
            <Link to="/" className="case-primary">
              {study.back}
              <span>↗</span>
            </Link>

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-secondary"
            >
              {language === 'es'
                ? 'VER EN GOOGLE PLAY'
                : 'VIEW ON GOOGLE PLAY'}
            </a>
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
