import './About.css'
import { useLanguage } from '../../i18n/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const about = t.about

  return (
    <section className="about" id="about">
      {/* =====================================================
          SECTION HEADER
          ===================================================== */}

      <div className="about-heading">
        <span>{about.heading}</span>
        <span>{about.headingRight}</span>
      </div>

      {/* =====================================================
          MAIN LAYOUT
          ===================================================== */}

      <div className="about-layout">
        {/* ===================================================
            IDENTITY SYSTEM
            =================================================== */}

        <aside className="about-identity">
          <div className="identity-panel-header">
            <span>{about.subject}</span>

            <div className="identity-panel-status">
              <span className="identity-status-dot" />
              <span>{about.active}</span>
            </div>
          </div>

          <div className="identity-core" aria-hidden="true">
            <div className="identity-orbit identity-orbit-outer" />
            <div className="identity-orbit identity-orbit-middle" />
            <div className="identity-orbit identity-orbit-inner" />

            <div className="identity-core-node">
              <span>EV</span>
              <strong>11</strong>
            </div>
          </div>

          <div className="identity-readout">
            <div className="identity-readout-row">
              <span>{about.readout.node}</span>
              <strong>{about.readout.nodeValue}</strong>
            </div>

            <div className="identity-readout-row">
              <span>{about.readout.location}</span>
              <strong>{about.readout.locationValue}</strong>
            </div>

            <div className="identity-readout-row">
              <span>{about.readout.focus}</span>
              <strong>{about.readout.focusValue}</strong>
            </div>

            <div className="identity-readout-row">
              <span>{about.readout.mode}</span>
              <strong>{about.readout.modeValue}</strong>
            </div>
          </div>

          <div className="identity-signal">
            <span className="identity-signal-label">
              {about.signal}
            </span>

            <div className="identity-signal-bars" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <strong>{about.signalValue}</strong>
          </div>

          <div className="identity-panel-footer">
            <span>{about.profileVerified}</span>
            <span>{about.systemOnline}</span>
          </div>
        </aside>

        {/* ===================================================
            ABOUT CONTENT
            =================================================== */}

        <div className="about-content">
          <p className="about-eyebrow">
            {about.eyebrow}
          </p>

          <h2>
            {about.titleLine1}
            <span> {about.titleLine2}</span>
          </h2>

          <p className="about-description">
            {about.description1}
          </p>

          <p className="about-description">
            {about.description2}
          </p>

          <div className="about-data">
            <div className="about-data-row">
              <span>{about.data.basedIn}</span>
              <strong>{about.data.basedInValue}</strong>
            </div>

            <div className="about-data-row">
              <span>{about.data.focus}</span>
              <strong>{about.data.focusValue}</strong>
            </div>

            <div className="about-data-row">
              <span>{about.data.approach}</span>
              <strong>{about.data.approachValue}</strong>
            </div>

            <div className="about-data-row">
              <span>{about.data.status}</span>
              <strong>{about.data.statusValue}</strong>
            </div>
          </div>

          <div className="about-philosophy">
            <span className="about-philosophy-index">
              01
            </span>

            <p>{about.philosophy}</p>
          </div>

          <div className="about-actions">
            <a
              href="#projects"
              className="about-primary-action"
            >
              {about.action}
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
