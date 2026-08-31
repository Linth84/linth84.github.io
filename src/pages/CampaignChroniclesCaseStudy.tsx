import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import '../components/case-study/CaseStudy.css'

const copy = {
  en: {
    back: 'BACK TO PORTFOLIO',
    type: 'WEB APP / TTRPG WORKSPACE',
    tagline: 'The memory of your campaign.',
    lead: 'A bilingual narrative workspace built to keep the people, places, sessions, factions, relationships and evolving knowledge of a tabletop RPG campaign connected and easy to revisit.',
    explore: 'EXPLORE CASE STUDY',
    live: 'OPEN APP',
    demo: 'WATCH DEMO',
    hero: 'CAMPAIGN KNOWLEDGE SYSTEM',
    metrics: ['LANGUAGES', 'CORE ENTITY TYPES', 'AUTH', 'LIVE APP'],
    overview: ['PROJECT OVERVIEW', 'A home for everything a campaign accumulates.', 'Long-running tabletop campaigns generate a huge amount of information: characters, NPCs, places, sessions, factions, notes and relationships. Campaign Chronicles was created to keep that material organized without reducing the campaign to a spreadsheet.', 'The product is designed as a narrative workspace and campaign memory: a place where information can stay connected and useful as the story grows, for both players and game masters.'],
    problem: ['PROBLEM / SOLUTION', 'Campaign notes are useful only when you can find the story again.', 'THE PROBLEM', 'Campaign information tends to become fragmented across documents, spreadsheets, chat messages and disconnected notes. As sessions accumulate, remembering who someone was, where something happened or how two entities are related becomes harder.', 'THE APPROACH', 'Campaign Chronicles brings campaign knowledge into one structured workspace, while keeping the presentation focused on narrative context instead of turning the experience into a rules engine or virtual tabletop.'],
    features: ['CORE EXPERIENCE', 'Built around campaign memory.', [
      ['CAMPAIGNS', 'Create a dedicated workspace for each campaign and keep its growing world together.'],
      ['CHARACTERS & NPCs', 'Organize the people who shape the story and preserve useful narrative context.'],
      ['PLACES & SESSIONS', 'Keep locations and session history accessible as the campaign expands.'],
      ['FACTIONS', 'Track the groups and organizations that influence the world.'],
      ['RELATIONSHIPS', 'Connect entities so campaign information is not isolated in separate records.'],
      ['BILINGUAL UI', 'The experience is available in English and Spanish.'],
    ]],
    experience: ['PRODUCT EXPERIENCE', 'See Campaign Chronicles in action.', 'The demo walks through the current product experience and shows how the workspace is used to organize campaign information. The embedded video automatically follows the portfolio language.'],
    stack: ['TECH STACK', 'The systems behind the campaign.'],
    learn: ['PRODUCT DIRECTION', 'A workspace, not another VTT.', 'A central product decision was to focus Campaign Chronicles on memory, organization and narrative continuity instead of trying to reproduce maps, dice systems or game rules already handled by virtual tabletops.', 'That direction keeps the product centered on a different problem: helping a campaign remain understandable after weeks, months and dozens of sessions worth of accumulated information.'],
    footer: 'KEEP THE STORY CONNECTED.',
  },
  es: {
    back: 'VOLVER AL PORTFOLIO',
    type: 'WEB APP / WORKSPACE TTRPG',
    tagline: 'La memoria de tu campaña.',
    lead: 'Un workspace narrativo bilingüe pensado para mantener conectados y fáciles de consultar los personajes, NPCs, lugares, sesiones, facciones, relaciones y todo el conocimiento que va creciendo en una campaña de rol.',
    explore: 'EXPLORAR CASO DE ESTUDIO',
    live: 'ABRIR APP',
    demo: 'VER DEMO',
    hero: 'SISTEMA DE CONOCIMIENTO DE CAMPAÑA',
    metrics: ['IDIOMAS', 'TIPOS DE ENTIDAD', 'AUTH', 'APP ONLINE'],
    overview: ['DESCRIPCIÓN DEL PROYECTO', 'Un lugar para todo lo que una campaña va acumulando.', 'Las campañas de rol largas generan una enorme cantidad de información: personajes, NPCs, lugares, sesiones, facciones, notas y relaciones. Campaign Chronicles nació para mantener ese material organizado sin reducir la campaña a una planilla.', 'El producto está pensado como un workspace narrativo y una memoria de campaña: un lugar donde la información pueda seguir conectada y siendo útil mientras crece la historia, tanto para jugadores como para masters.'],
    problem: ['PROBLEMA / SOLUCIÓN', 'Las notas sirven cuando podés volver a encontrar la historia.', 'EL PROBLEMA', 'La información de una campaña suele terminar fragmentada entre documentos, planillas, mensajes y notas desconectadas. A medida que pasan las sesiones, recordar quién era alguien, dónde ocurrió algo o cómo se relacionan dos entidades se vuelve cada vez más difícil.', 'EL ENFOQUE', 'Campaign Chronicles reúne el conocimiento de la campaña en un workspace estructurado, manteniendo el foco en el contexto narrativo en lugar de convertir la experiencia en un motor de reglas o un virtual tabletop.'],
    features: ['EXPERIENCIA PRINCIPAL', 'Construido alrededor de la memoria de campaña.', [
      ['CAMPAÑAS', 'Creá un workspace dedicado para cada campaña y mantené unido el mundo que va creciendo.'],
      ['PERSONAJES Y NPCs', 'Organizá a quienes forman parte de la historia y conservá su contexto narrativo.'],
      ['LUGARES Y SESIONES', 'Mantené accesibles las ubicaciones y el historial de sesiones a medida que avanza la campaña.'],
      ['FACCIONES', 'Registrá los grupos y organizaciones que influyen en el mundo.'],
      ['RELACIONES', 'Conectá entidades para que la información no quede aislada en registros separados.'],
      ['INTERFAZ BILINGÜE', 'Toda la experiencia está disponible en español e inglés.'],
    ]],
    experience: ['EXPERIENCIA DE PRODUCTO', 'Mirá Campaign Chronicles en acción.', 'La demo recorre la experiencia actual del producto y muestra cómo se usa el workspace para organizar la información de una campaña. El video embebido cambia automáticamente según el idioma del portfolio.'],
    stack: ['STACK TECNOLÓGICO', 'Los sistemas detrás de la campaña.'],
    learn: ['DIRECCIÓN DE PRODUCTO', 'Un workspace, no otro VTT.', 'Una decisión central del producto fue enfocar Campaign Chronicles en memoria, organización y continuidad narrativa, en lugar de intentar reproducir mapas, dados o reglas que ya resuelven los virtual tabletops.', 'Esa dirección mantiene el producto centrado en otro problema: ayudar a que una campaña siga siendo comprensible después de semanas, meses y decenas de sesiones de información acumulada.'],
    footer: 'MANTENÉ CONECTADA LA HISTORIA.',
  },
} as const

export default function CampaignChroniclesCaseStudy() {
  const { language } = useLanguage()
  const c = copy[language]
  const videoId = language === 'es' ? 'm9YQC_ELuc8' : 'CTsnpz_F7hI'

  return <main className="case-study">
    <section className="case-hero"><div className="case-shell">
      <div className="case-topbar"><Link to="/" className="case-back">← {c.back}</Link><span>PROJECT // 04</span></div>
      <div className="case-hero-grid">
        <div className="case-hero-copy">
          <div className="case-index"><span>04</span><span>{c.type}</span></div>
          <h1>Campaign Chronicles</h1>
          <p className="case-tagline">{c.tagline}</p>
          <p className="case-lead">{c.lead}</p>
          <div className="case-actions">
            <a className="case-primary" href="#overview">{c.explore}<span>↓</span></a>
            <a className="case-secondary" href="https://campaign-chronicles.com/" target="_blank" rel="noopener noreferrer">{c.live} ↗</a>
            <a className="case-secondary" href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">{c.demo} ↗</a>
          </div>
        </div>

        <div className="case-hero-visual">
          <div className="case-visual-header"><span className="case-live-dot"/><span>CAMPAIGN CHRONICLES // SYSTEM FEED</span><span>ONLINE</span></div>
          <div className="case-youtube-embed">
            <iframe
              key={videoId}
              src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
              title={language === 'es' ? 'Campaign Chronicles — Demo en español' : 'Campaign Chronicles — English demo'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="case-visual-footer"><span>SYS // CC-04</span><span>{c.hero}</span></div>
        </div>
      </div>

      <div className="case-metrics case-dstime-metrics">
        <Metric value="02" label={c.metrics[0]}/>
        <Metric value="06+" label={c.metrics[1]}/>
        <Metric value="✓" label={c.metrics[2]}/>
        <Metric value="LIVE" label={c.metrics[3]}/>
      </div>
    </div></section>

    <Section id="overview" index="01" eyebrow={c.overview[0]} title={c.overview[1]}><div className="case-two-column"><p>{c.overview[2]}</p><p>{c.overview[3]}</p></div></Section>

    <Section index="02" eyebrow={c.problem[0]} title={c.problem[1]}><div className="case-split-cards"><article className="case-info-card"><span>01 // {c.problem[2]}</span><p>{c.problem[3]}</p></article><article className="case-info-card case-info-card-accent"><span>02 // {c.problem[4]}</span><p>{c.problem[5]}</p></article></div></Section>

    <Section index="03" eyebrow={c.features[0]} title={c.features[1]}><div className="case-feature-grid">{c.features[2].map((f,i)=><article className="case-feature-card" key={f[0]}><span>{String(i+1).padStart(2,'0')}</span><h3>{f[0]}</h3><p>{f[1]}</p></article>)}</div></Section>

    <Section index="04" eyebrow={c.experience[0]} title={c.experience[1]}>
      <div className="case-two-column"><p>{c.experience[2]}</p><div className="case-demo-browser">
        <div className="case-dstime-shot-header"><div><span className="case-live-dot"/><span>CAMPAIGN CHRONICLES // DEMO</span></div><span>{language.toUpperCase()}</span></div>
        <div className="case-youtube-embed"><iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`} title="Campaign Chronicles demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
        <div className="case-dstime-shot-footer"><span>SYS // CC-04</span><span>YOUTUBE // ONLINE</span></div>
      </div></div>
    </Section>

    <Section id="stack" index="05" eyebrow={c.stack[0]} title={c.stack[1]}><div className="case-stack-grid">{['REACT','TYPESCRIPT','VITE','SUPABASE','AUTH','RESPONSIVE UI','ES / EN'].map((x,i)=><div className="case-stack-node" key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></div>)}</div></Section>

    <Section index="06" eyebrow={c.learn[0]} title={c.learn[1]}><div className="case-two-column"><p>{c.learn[2]}</p><p>{c.learn[3]}</p></div></Section>

    <section className="case-footer"><div className="case-shell"><span>END // PROJECT 04</span><h2>{c.footer}</h2><div className="case-actions"><a className="case-primary" href="https://campaign-chronicles.com/" target="_blank" rel="noopener noreferrer">{c.live}<span>↗</span></a><a className="case-secondary" href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">{c.demo}</a><Link to="/" className="case-secondary">{c.back}</Link></div></div></section>
  </main>
}

function Metric({value,label}:{value:string;label:string}) {
  return <div className="case-metric"><strong>{value}</strong><span>{label}</span></div>
}

function Section({id,index,eyebrow,title,children}:{id?:string;index:string;eyebrow:string;title:string;children:React.ReactNode}) {
  return <section className="case-section" id={id}><div className="case-shell"><div className="case-section-heading"><span>{index}</span><div><small>{eyebrow}</small><h2>{title}</h2></div></div><div className="case-section-content">{children}</div></div></section>
}
