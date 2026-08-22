import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import '../components/case-study/CaseStudy.css'

export default function FinSightCaseStudy() {
  const { t } = useLanguage()
  const study = t.caseStudies.finsight

  return (
    <main className="case-study">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="case-hero">
        <div className="case-shell">
          <div className="case-topbar">
            <Link to="/" className="case-back">
              ← {study.back}
            </Link>

            <span>PROJECT // 01</span>
          </div>

          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <div className="case-index">
                <span>01</span>
                <span>AI / FINTECH</span>
              </div>

              <h1>FinSightAI</h1>

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

            <div className="case-hero-visual">
              <div className="case-visual-header">
                <span className="case-live-dot" />
                <span>FINSIGHTAI // SYSTEM FEED</span>
                <span>ONLINE</span>
              </div>

              <video
                src="/videos/finsightai/finsightai-dashboard.webm"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />

              <div className="case-visual-footer">
                <span>SYS // FIN-01</span>
                <span>{study.heroFeed}</span>
              </div>
            </div>
          </div>

          <div className="case-metrics">
            <Metric value="1,000" label={study.metrics.users} />
            <Metric value="+74K" label={study.metrics.transactions} />
            <Metric value="12" label={study.metrics.months} />
            <Metric value="16" label={study.metrics.categories} />
            <Metric value="3" label={study.metrics.profiles} />
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
          PROBLEM / SOLUTION
          ===================================================== */}

      <CaseSection
        index="02"
        eyebrow={study.sections.problem.eyebrow}
        title={study.sections.problem.title}
      >
        <div className="case-split-cards">
          <article className="case-info-card">
            <span>01 // {study.sections.problem.problemLabel}</span>
            <p>{study.sections.problem.problem}</p>
          </article>

          <article className="case-info-card case-info-card-accent">
            <span>02 // {study.sections.problem.solutionLabel}</span>
            <p>{study.sections.problem.solution}</p>
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

          <div className="case-team">
            <div className="case-team-header">
              <span>{study.team.eyebrow}</span>
              <strong>{study.team.title}</strong>
            </div>

            <div className="case-team-grid">
              {study.team.members.map((member) => (
                <article
                  className={`case-team-member${member.github ? '' : ' case-team-member-current'}`}
                  key={member.name}
                >
                  <span className="case-team-role">
                    {member.role}
                  </span>

                  {member.github ? (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-team-link"
                    >
                      {member.name}
                      <span>↗</span>
                    </a>
                  ) : (
                    <strong className="case-team-name">
                      {member.name}
                    </strong>
                  )}

                  <small>
                    {member.github
                      ? 'GITHUB // EXTERNAL'
                      : study.team.currentPortfolio}
                  </small>
                </article>
              ))}
            </div>
          </div>
        </div>
      </CaseSection>

      {/* =====================================================
          ARCHITECTURE
          ===================================================== */}

      <CaseSection
        index="04"
        eyebrow={study.sections.architecture.eyebrow}
        title={study.sections.architecture.title}
      >
        <div className="architecture-map">
          <ArchitectureNode
            number="01"
            title="REACT"
            subtitle={study.architecture.frontend}
          />

          <span className="architecture-arrow">→</span>

          <ArchitectureNode
            number="02"
            title="SPRING BOOT"
            subtitle={study.architecture.backend}
          />

          <span className="architecture-arrow">→</span>

          <ArchitectureNode
            number="03"
            title="FASTAPI"
            subtitle={study.architecture.aiService}
          />

          <span className="architecture-arrow">→</span>

          <ArchitectureNode
            number="04"
            title="PYTHON / ML"
            subtitle={study.architecture.ml}
          />
        </div>

        <div className="architecture-data">
          <span>POSTGRESQL</span>
          <span>MINIO</span>
          <span>DOCKER</span>
          <span>OCI</span>
        </div>
      </CaseSection>

      {/* =====================================================
          FEATURES
          ===================================================== */}

      <CaseSection
        index="05"
        eyebrow={study.sections.features.eyebrow}
        title={study.sections.features.title}
      >
        <div className="case-feature-grid">
          {study.features.map((feature, index) => (
            <article className="case-feature-card" key={feature.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </CaseSection>

      {/* =====================================================
          MACHINE LEARNING
          ===================================================== */}

      <CaseSection
        index="06"
        eyebrow={study.sections.ml.eyebrow}
        title={study.sections.ml.title}
      >
        <div className="case-ml-grid">
          <article>
            <span>MODEL // 01</span>
            <h3>{study.ml.classifierTitle}</h3>
            <p>{study.ml.classifierBody}</p>
          </article>

          <article>
            <span>MODEL // 02</span>
            <h3>{study.ml.profileTitle}</h3>
            <p>{study.ml.profileBody}</p>
          </article>
        </div>

        <div className="case-video-wide">
          <video
            src="/videos/finsightai/finsightai-import.webm"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </CaseSection>

      {/* =====================================================
          EXPERIENCE
          ===================================================== */}

      <CaseSection
        index="07"
        eyebrow={study.sections.experience.eyebrow}
        title={study.sections.experience.title}
      >
        <div className="case-video-pair">
          <VideoCard
            title={study.videos.assistant}
            src="/videos/finsightai/finsightai-chat.webm"
          />

          <VideoCard
            title={study.videos.goals}
            src="/videos/finsightai/finsightai-goals.webm"
          />
        </div>
      </CaseSection>

      {/* =====================================================
          STACK
          ===================================================== */}

      <CaseSection
        id="stack"
        index="08"
        eyebrow={study.sections.stack.eyebrow}
        title={study.sections.stack.title}
      >
        <div className="case-stack-grid">
          {[
            'REACT',
            'TYPESCRIPT',
            'SPRING BOOT',
            'FASTAPI',
            'PYTHON',
            'MACHINE LEARNING',
            'POSTGRESQL',
            'MINIO',
            'DOCKER',
            'OCI',
          ].map((item, index) => (
            <div className="case-stack-node" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </CaseSection>

      {/* =====================================================
          CHALLENGES / LEARNINGS
          ===================================================== */}

      <CaseSection
        index="09"
        eyebrow={study.sections.learnings.eyebrow}
        title={study.sections.learnings.title}
      >
        <div className="case-two-column">
          <p>{study.sections.learnings.p1}</p>
          <p>{study.sections.learnings.p2}</p>
        </div>
      </CaseSection>

      {/* =====================================================
          FOOTER CTA
          ===================================================== */}

      <section className="case-footer">
        <div className="case-shell">
          <span>END // PROJECT 01</span>

          <h2>{study.footerTitle}</h2>

          <div className="case-actions">
            <Link to="/" className="case-primary">
              {study.back}
              <span>↗</span>
            </Link>

            <a
              href="https://github.com/Linth84/FinSightAI"
              target="_blank"
              rel="noopener noreferrer"
              className="case-secondary"
            >
              GITHUB
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

function Metric({ value, label }: MetricProps) {
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
    <section className="case-section" id={id}>
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


type ArchitectureNodeProps = {
  number: string
  title: string
  subtitle: string
}

function ArchitectureNode({
  number,
  title,
  subtitle,
}: ArchitectureNodeProps) {
  return (
    <div className="architecture-node">
      <span>{number}</span>
      <strong>{title}</strong>
      <small>{subtitle}</small>
    </div>
  )
}


type VideoCardProps = {
  title: string
  src: string
}

function VideoCard({
  title,
  src,
}: VideoCardProps) {
  return (
    <article className="case-video-card">
      <div>
        <span className="case-live-dot" />
        <span>{title}</span>
      </div>

      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </article>
  )
}
