import './Projects.css'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Projects() {
  const { t, language } = useLanguage()
  const projects = t.projects

  const pifPlayStoreUrl =
    language === 'es'
      ? 'https://play.google.com/store/apps/details?id=com.linthapps.piftracker&hl=es_AR'
      : 'https://play.google.com/store/apps/details?id=com.linthapps.piftracker&hl=en'

  const soothePlayStoreUrl =
    language === 'es'
      ? 'https://play.google.com/store/apps/details?id=com.linthapps.soothewaveapp&hl=es_AR'
      : 'https://play.google.com/store/apps/details?id=com.linthapps.soothewaveapp&hl=en'

  return (
    <section className="projects" id="projects">
      {/* =====================================================
          PROJECT 01 // FINSIGHTAI
          ===================================================== */}

      <div className="project-section project-finsight">
        <div className="projects-heading">
          <span>{projects.finsight.archive}</span>
          <span>{projects.common.selectedWork}</span>
        </div>

        <article className="project-featured">
          <div className="project-info">
            <div className="project-index">
              <span>01</span>
              <span>{projects.finsight.type}</span>
            </div>

            <h2>{projects.finsight.title}</h2>

            <p className="project-tagline">
              {projects.finsight.tagline}
            </p>

            <p className="project-description">
              {projects.finsight.description}
            </p>

            <div className="project-stack">
              <span>REACT</span>
              <span>SPRING BOOT</span>
              <span>FASTAPI</span>
              <span>PYTHON</span>
              <span>MACHINE LEARNING</span>
            </div>

            <div className="project-actions">
              <Link
                to="/projects/finsightai"
                className="project-primary"
              >
                {projects.finsight.primaryAction}
                <span>↗</span>
              </Link>

              <a
                href="https://github.com/Linth84/FinSightAI"
                target="_blank"
                rel="noopener noreferrer"
                className="project-secondary"
              >
                {projects.finsight.secondaryAction}
              </a>
            </div>
          </div>

          <div className="project-visual">
            <div className="visual-header">
              <div>
                <span className="visual-dot" />
                <span>{projects.finsight.feed}</span>
              </div>

              <span>{projects.finsight.liveInterface}</span>
            </div>

            <div className="video-grid">
              <VideoPanel
                label={projects.finsight.videos.dashboard}
                online={projects.common.online}
                src="/videos/finsightai/finsightai-dashboard.webm"
              />

              <VideoPanel
                label={projects.finsight.videos.assistant}
                online={projects.common.online}
                src="/videos/finsightai/finsightai-chat.webm"
              />

              <VideoPanel
                label={projects.finsight.videos.import}
                online={projects.common.online}
                src="/videos/finsightai/finsightai-import.webm"
              />

              <VideoPanel
                label={projects.finsight.videos.goals}
                online={projects.common.online}
                src="/videos/finsightai/finsightai-goals.webm"
              />
            </div>

            <div className="visual-footer">
              <span>SYS // FIN-01</span>
              <span>{projects.finsight.feedsActive}</span>
            </div>
          </div>
        </article>
      </div>

      {/* =====================================================
          PROJECT 02 // FIP / PIF TRACKER
          ===================================================== */}

      <div className="project-section mobile-project project-fip">
        <div className="projects-heading">
          <span>{projects.fip.archive}</span>
          <span>{projects.common.mobileApplication}</span>
        </div>

        <article className="mobile-project-layout">
          <div className="project-info">
            <div className="project-index">
              <span>02</span>
              <span>{projects.fip.type}</span>
            </div>

            <h2>{projects.fip.title}</h2>

            <p className="project-tagline">
              {projects.fip.tagline}
            </p>

            <p className="project-description">
              {projects.fip.description}
            </p>

            <div className="project-stack">
              <span>ANDROID</span>
              <span>JAVASCRIPT</span>
              <span>MOBILE</span>
            </div>

            <div className="project-actions">
              <Link
                to="/projects/pif-tracker"
                className="project-primary"
              >
                {projects.common.viewProject}
                <span>↗</span>
              </Link>

              <a
                href={pifPlayStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-secondary"
              >
                {language === 'es'
                  ? 'VER EN GOOGLE PLAY'
                  : 'VIEW ON GOOGLE PLAY'}
              </a>
            </div>
          </div>

          <PhoneDisplay
            number="02"
            system={projects.fip.system}
            mobileSystemOnline={projects.phone.mobileSystemOnline}
            src="/videos/pif-tracker/pif-tracker-demo.webm"
            variant="pif"
          />
        </article>
      </div>

      {/* =====================================================
          PROJECT 03 // SOOTHEWAVEAPP
          ===================================================== */}

      <div className="project-section mobile-project project-soothe">
        <div className="projects-heading">
          <span>{projects.soothe.archive}</span>
          <span>{projects.common.mobileApplication}</span>
        </div>

        <article className="mobile-project-layout mobile-project-reverse">
          <div className="project-info">
            <div className="project-index">
              <span>03</span>
              <span>{projects.soothe.type}</span>
            </div>

            <h2>{projects.soothe.title}</h2>

            <p className="project-tagline">
              {projects.soothe.tagline}
            </p>

            <p className="project-description">
              {projects.soothe.description}
            </p>

            <div className="project-stack">
              <span>ANDROID</span>
              <span>JAVASCRIPT</span>
              <span>MOBILE</span>
            </div>

            <div className="project-actions">
              <Link
                to="/projects/soothewave"
                className="project-primary"
              >
                {projects.common.viewProject}
                <span>↗</span>
              </Link>

              <a
                href={soothePlayStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-secondary"
              >
                {language === 'es'
                  ? 'VER EN GOOGLE PLAY'
                  : 'VIEW ON GOOGLE PLAY'}
              </a>
            </div>
          </div>

          <PhoneDisplay
            number="03"
            system={projects.soothe.system}
            mobileSystemOnline={projects.phone.mobileSystemOnline}
            src="/videos/soothewave/soothewave-demo.webm"
            variant="soothe"
          />
        </article>
      </div>
    </section>
  )
}


/* =========================================================
   FINSIGHTAI VIDEO PANEL
   ========================================================= */

type VideoPanelProps = {
  label: string
  online: string
  src: string
}

function VideoPanel({
  label,
  online,
  src,
}: VideoPanelProps) {
  return (
    <div className="video-panel">
      <div className="video-label">
        <span>{label}</span>
        <span>{online}</span>
      </div>

      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  )
}


/* =========================================================
   MOBILE PHONE DISPLAY
   ========================================================= */

type PhoneDisplayProps = {
  number: string
  system: string
  mobileSystemOnline: string
  src: string
  variant: 'pif' | 'soothe'
}

function PhoneDisplay({
  number,
  system,
  mobileSystemOnline,
  src,
  variant,
}: PhoneDisplayProps) {
  return (
    <div className={`phone-system phone-system-${variant}`}>
      <div className="phone-telemetry">
        <span>DEVICE // {number}</span>
        <span>{system}</span>
      </div>

      <div className="phone-glow" />

      <div className="phone-frame">
        <div className="phone-speaker" />

        <div className="phone-screen">
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </div>

      <div className="phone-status">
        <span className="visual-dot" />
        <span>{mobileSystemOnline}</span>
      </div>
    </div>
  )
}
