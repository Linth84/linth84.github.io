import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import '../components/case-study/CaseStudy.css'

export default function DSTimeCaseStudy() {
  const { t } = useLanguage()
  const study = t.caseStudies.dstime

  return (
    <main className="case-study">
      <section className="case-hero">
        <div className="case-shell">
          <div className="case-topbar">
            <Link to="/" className="case-back">← {study.back}</Link>
            <span>PROJECT // 02</span>
          </div>

          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <div className="case-index"><span>02</span><span>{study.type}</span></div>
              <h1 className="case-dstime-title">{study.title}</h1>
              <p className="case-tagline">{study.tagline}</p>
              <p className="case-lead">{study.lead}</p>
              <div className="case-actions">
                <a className="case-primary" href="#overview">{study.explore}<span>↓</span></a>
                <a className="case-secondary" href="https://edgardovillalba.is-a.dev/DS-Time/" target="_blank" rel="noopener noreferrer">{study.liveDemo} ↗</a>
                <a className="case-secondary" href="https://github.com/Linth84/DS-Time" target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
              </div>
            </div>

            <div className="case-hero-visual">
              <div className="case-visual-header"><span className="case-live-dot" /><span>DS-TIME // SYSTEM FEED</span><span>ONLINE</span></div>
              <video src="/videos/ds-time/ds-time.webm" autoPlay muted loop playsInline preload="metadata" />
              <div className="case-visual-footer"><span>SYS // DST-02</span><span>{study.heroFeed}</span></div>
            </div>
          </div>

          <div className="case-metrics case-dstime-metrics">
            <Metric value="07" label={study.metrics.formats} />
            <Metric value="05" label={study.metrics.languages} />
            <Metric value="LIVE" label={study.metrics.preview} />
            <Metric value="100%" label={study.metrics.clientSide} />
          </div>
        </div>
      </section>

      <CaseSection id="overview" index="01" eyebrow={study.sections.overview.eyebrow} title={study.sections.overview.title}>
        <div className="case-two-column"><p>{study.sections.overview.p1}</p><p>{study.sections.overview.p2}</p></div>
      </CaseSection>

      <CaseSection index="02" eyebrow={study.sections.problem.eyebrow} title={study.sections.problem.title}>
        <div className="case-split-cards">
          <article className="case-info-card"><span>01 // {study.sections.problem.problemLabel}</span><p>{study.sections.problem.problem}</p></article>
          <article className="case-info-card case-info-card-accent"><span>02 // {study.sections.problem.solutionLabel}</span><p>{study.sections.problem.solution}</p></article>
        </div>
      </CaseSection>

      <CaseSection index="03" eyebrow={study.sections.features.eyebrow} title={study.sections.features.title}>
        <div className="case-feature-grid">
          {study.features.map((feature, index) => <article className="case-feature-card" key={feature.title}><span>{String(index + 1).padStart(2,'0')}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>)}
        </div>
      </CaseSection>

      <CaseSection index="04" eyebrow={study.sections.design.eyebrow} title={study.sections.design.title}>
        <div className="case-dstime-gallery">
          {['ds-time-1.png', 'ds-time-2.png', 'ds-time-3.png'].map(
            (image, index) => (
              <figure className="case-dstime-shot" key={image}>
                <div className="case-dstime-shot-header">
                  <div>
                    <span className="case-live-dot" />
                    <span>DS-TIME // INTERFACE</span>
                  </div>

                  <span>VIEW // {String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className="case-dstime-shot-frame">
                  <img
                    src={`/images/ds-time/${image}`}
                    alt={`DS-Time interface screenshot ${index + 1}`}
                    loading="lazy"
                  />
                </div>

                <div className="case-dstime-shot-footer">
                  <span>SYS // DST-02</span>
                  <span>CAPTURE // ONLINE</span>
                </div>
              </figure>
            ),
          )}
        </div>
      </CaseSection>

      <CaseSection id="stack" index="05" eyebrow={study.sections.stack.eyebrow} title={study.sections.stack.title}>
        <div className="case-stack-grid">{['REACT','TYPESCRIPT','VITE','CSS','I18N','GITHUB PAGES'].map((item,index) => <div className="case-stack-node" key={item}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong></div>)}</div>
      </CaseSection>

      <CaseSection index="06" eyebrow={study.sections.learnings.eyebrow} title={study.sections.learnings.title}>
        <div className="case-two-column"><p>{study.sections.learnings.p1}</p><p>{study.sections.learnings.p2}</p></div>
      </CaseSection>

      <section className="case-footer"><div className="case-shell"><span>END // PROJECT 02</span><h2>{study.footerTitle}</h2><div className="case-actions"><a className="case-primary" href="https://edgardovillalba.is-a.dev/DS-Time/" target="_blank" rel="noopener noreferrer">{study.liveDemo}<span>↗</span></a><a className="case-secondary" href="https://github.com/Linth84/DS-Time" target="_blank" rel="noopener noreferrer">GITHUB</a><Link to="/" className="case-secondary">{study.back}</Link></div></div></section>
    </main>
  )
}

type MetricProps = { value: string; label: string }
function Metric({ value, label }: MetricProps) { return <div className="case-metric"><strong>{value}</strong><span>{label}</span></div> }

type CaseSectionProps = { id?: string; index: string; eyebrow: string; title: string; children: React.ReactNode }
function CaseSection({ id, index, eyebrow, title, children }: CaseSectionProps) {
  return <section className="case-section" id={id}><div className="case-shell"><div className="case-section-heading"><span>{index}</span><div><small>{eyebrow}</small><h2>{title}</h2></div></div><div className="case-section-content">{children}</div></div></section>
}
