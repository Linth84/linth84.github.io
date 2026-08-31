import './VideoShowcase.css'

type Props = {
  language: 'es' | 'en'
}

export default function VideoShowcase({ language }: Props) {
  const isSpanish = language === 'es'
  const videoId = isSpanish ? 'm9YQC_ELuc8' : 'CTsnpz_F7hI'

  return (
    <div className="project-section video-showcase">
      <div className="projects-heading">
        <span>VIDEO // SHOWCASE</span>
        <span>YOUTUBE // DEMO</span>
      </div>

      <article className="video-showcase-layout">
        <div className="video-showcase-copy">
          <div className="project-index">
            <span>▶</span>
            <span>{isSpanish ? 'DEMO DEL PROYECTO' : 'PROJECT DEMO'}</span>
          </div>

          <h2 id="video-showcase-title">
            {isSpanish ? 'Mirá el proyecto en acción.' : 'See the project in action.'}
          </h2>

          <p className="project-tagline">
            {isSpanish ? 'DEMO COMPLETA // YOUTUBE' : 'FULL DEMO // YOUTUBE'}
          </p>

          <p className="project-description">
            {isSpanish
              ? 'Una demo completa en español para recorrer la experiencia, la interfaz y las funciones principales.'
              : 'A complete English demo covering the experience, interface and main features.'}
          </p>

          <div className="project-actions">
            <a
              className="project-secondary"
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isSpanish ? 'VER EN YOUTUBE' : 'WATCH ON YOUTUBE'} <span>↗</span>
            </a>
          </div>
        </div>

        <div className="video-showcase-player">
          <div className="dstime-telemetry">
            <span>VIDEO // 01</span>
            <span>{isSpanish ? 'DEMO EN ESPAÑOL' : 'ENGLISH DEMO'}</span>
          </div>

          <div className="dstime-glow" />

          <div className="dstime-browser">
            <div className="dstime-browser-bar">
              <div className="dstime-browser-dots" aria-hidden="true">
                <span /><span /><span />
              </div>
              <span>youtube.com/watch?v={videoId}</span>
              <span>ONLINE</span>
            </div>

            <div className="video-showcase-screen">
              <iframe
                key={videoId}
                src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
                title={isSpanish ? 'Demo en español' : 'English demo'}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="dstime-browser-footer">
              <span>SYS // VIDEO-01</span>
              <span>{isSpanish ? 'ESPAÑOL' : 'ENGLISH'}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
