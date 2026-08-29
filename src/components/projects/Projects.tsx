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
          PROJECT 02 // DS-TIME
          ===================================================== */}

      <div className="project-section project-dstime">
        <div className="projects-heading">
          <span>{projects.dstime.archive}</span>
          <span>{projects.common.desktopApplication}</span>
        </div>

        <article className="dstime-project-layout">
          <DesktopDisplay
            number="02"
            feed={projects.dstime.feed}
            online={projects.common.online}
            src="/videos/ds-time/ds-time.webm"
          />

          <div className="project-info">
            <div className="project-index">
              <span>02</span>
              <span>{projects.dstime.type}</span>
            </div>
            <h2>{projects.dstime.title}</h2>
            <p className="project-tagline">{projects.dstime.tagline}</p>
            <p className="project-description">{projects.dstime.description}</p>
            <div className="project-stack">
              <span>REACT</span><span>TYPESCRIPT</span><span>VITE</span><span>RESPONSIVE DESIGN</span>
            </div>
            <div className="project-actions">
              <Link to="/projects/ds-time" className="project-primary">
                {projects.common.viewProject}<span>↗</span>
              </Link>
              <a href="https://edgardovillalba.is-a.dev/DS-Time/" target="_blank" rel="noopener noreferrer" className="project-secondary">
                {projects.dstime.liveDemo}
              </a>
              <a href="https://github.com/Linth84/DS-Time" target="_blank" rel="noopener noreferrer" className="project-secondary">GITHUB</a>
            </div>
          </div>
        </article>
      </div>

      {/* =====================================================
          PROJECT 03 // DECISION DUNGEON
          ===================================================== */}

      <div className="project-section project-dungeon">
        <div className="projects-heading">
          <span>{projects.dungeon.archive}</span>
          <span>{projects.common.desktopApplication}</span>
        </div>

        <article className="dstime-project-layout">
          <div className="project-info">
            <div className="project-index">
              <span>03</span>
              <span>{projects.dungeon.type}</span>
            </div>
            <h2>{projects.dungeon.title}</h2>
            <p className="project-tagline">{projects.dungeon.tagline}</p>
            <p className="project-description">{projects.dungeon.description}</p>
            <div className="project-stack">
              <span>REACT</span><span>TYPESCRIPT</span><span>THREE.JS</span><span>VITE</span>
            </div>
            <div className="project-actions">
              <Link to="/projects/decision-dungeon" className="project-primary">
                {projects.common.viewProject}<span>↗</span>
              </Link>
              <a href="https://edgardovillalba.is-a.dev/decision-dungeon/" target="_blank" rel="noopener noreferrer" className="project-secondary">
                {projects.dungeon.liveDemo}
              </a>
              <a href="https://github.com/Linth84/decision-dungeon" target="_blank" rel="noopener noreferrer" className="project-secondary">GITHUB</a>
            </div>
          </div>

          <DungeonDisplay
            feed={projects.dungeon.feed}
            online={projects.common.online}
            src="/videos/decision-dungeon/decision-dungeon.webm"
          />
        </article>
      </div>

      {/* =====================================================
          PROJECT 04 // FIP / PIF TRACKER
          ===================================================== */}

      <div className="project-section mobile-project project-fip">
        <div className="projects-heading">
          <span>{projects.fip.archive}</span>
          <span>{projects.fip.platform}</span>
        </div>

        <article className="mobile-project-layout">
          <div className="project-info">
            <div className="project-index">
              <span>04</span>
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
              <span>WEB</span>
              <span>ANDROID</span>
              <span>JAVASCRIPT</span>
              <span>RESPONSIVE</span>
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

              <a
                href="https://edgardovillalba.is-a.dev/pif-tracker-web/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-secondary"
              >
                {language === 'es'
                  ? 'ABRIR VERSIÓN WEB'
                  : 'OPEN WEB APP'}
              </a>
            </div>
          </div>

          <PhoneDisplay
            number="04"
            system={projects.fip.system}
            mobileSystemOnline={projects.phone.mobileSystemOnline}
            src="/videos/pif-tracker/pif-tracker-demo.webm"
            variant="pif"
          />
        </article>
      </div>

      {/* =====================================================
          PROJECT 05 // SOOTHEWAVEAPP
          ===================================================== */}

      <div className="project-section mobile-project project-soothe">
        <div className="projects-heading">
          <span>{projects.soothe.archive}</span>
          <span>{projects.common.mobileApplication}</span>
        </div>

        <article className="mobile-project-layout mobile-project-reverse">
          <div className="project-info">
            <div className="project-index">
              <span>05</span>
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
            number="05"
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
   DESKTOP WEB APP DISPLAY
   ========================================================= */

type DesktopDisplayProps = {
  number: string
  feed: string
  online: string
  src: string
}

function DesktopDisplay({ number, feed, online, src }: DesktopDisplayProps) {
  return (
    <div className="dstime-system">
      <div className="dstime-telemetry"><span>WEB APP // {number}</span><span>{feed}</span></div>
      <div className="dstime-glow" />
      <div className="dstime-browser">
        <div className="dstime-browser-bar">
          <div className="dstime-browser-dots" aria-hidden="true"><span /><span /><span /></div>
          <span>edgardovillalba.is-a.dev/DS-Time/</span><span>LIVE</span>
        </div>
        <div className="dstime-screen"><video src={src} autoPlay muted loop playsInline preload="metadata" /></div>
        <div className="dstime-browser-footer"><span>SYS // DST-02</span><span>{online}</span></div>
      </div>
    </div>
  )
}


/* =========================================================
   DECISION DUNGEON DISPLAY
   ========================================================= */

function DungeonDisplay({ feed, online, src }: { feed: string; online: string; src: string }) {
  return (
    <div className="dstime-system dungeon-system">
      <div className="dstime-telemetry"><span>WEB APP // 03</span><span>{feed}</span></div>
      <div className="dstime-glow" />
      <div className="dstime-browser">
        <div className="dstime-browser-bar">
          <div className="dstime-browser-dots" aria-hidden="true"><span /><span /><span /></div>
          <span>edgardovillalba.is-a.dev/decision-dungeon/</span><span>LIVE</span>
        </div>
        <div className="dstime-screen"><video src={src} autoPlay muted loop playsInline preload="metadata" /></div>
        <div className="dstime-browser-footer"><span>SYS // DD-03</span><span>{online}</span></div>
      </div>
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
