import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import '../components/case-study/CaseStudy.css'

const copy = {
  en: {
    back:'BACK TO PORTFOLIO', type:'WEB APP / INTERACTIVE 3D', tagline:'Let fate decide.',
    lead:'A fantasy-themed decision maker that turns everyday choices into an interactive D20 experience with real 3D animation, sound and a Best of 3 duel mode.',
    explore:'EXPLORE CASE STUDY', live:'LIVE DEMO', hero:'D20 DECISION SYSTEM',
    metrics:['CHOICES','LANGUAGES','D20 MODEL','DUEL MODE'],
    overview:['PROJECT OVERVIEW','Turn a decision into a dungeon roll.','Decision Dungeon starts with a simple idea: make choosing between options feel playful instead of mechanical. Users write a question, add between 2 and 20 choices, and roll a D20 to let the dungeon choose.','The experience combines a responsive interface with a real browser-rendered 3D die, fantasy visual effects, ambient audio and bilingual support. The visible die face stays synchronized with the option selected by the decision logic.'],
    problem:['CONCEPT / SOLUTION','More than a random picker.','THE IDEA','Traditional random choice tools are functional, but the interaction usually ends at displaying a result.','THE EXPERIENCE','Decision Dungeon turns that same utility into a themed experience: enter the dungeon, build the choice set, roll an animated D20, reveal the result, or challenge fate with Best of 3.'],
    features:['KEY FEATURES','A decision system built around the D20.',[
      ['REAL 3D D20','Rendered with Three.js and React Three Fiber. The die animates through launch, spin and settling states.'],
      ['2–20 CUSTOM CHOICES','Each user choice maps directly to a possible D20 result, keeping the visual roll and selected option aligned.'],
      ['BEST OF 3','The first result faces a different contender, then a final roll determines the winner between both.'],
      ['ENGLISH / SPANISH','The full interface is bilingual and the selected language persists locally.'],
      ['IMMERSIVE AUDIO','Looping medieval ambience and synchronized dice-roll SFX with independent controls.'],
      ['FANTASY PRESENTATION','Animated stars, astrolabes, arcane effects, vortex visuals and a dedicated dungeon entrance screen.']]],
    gallery:['PRODUCT EXPERIENCE','Inside the dungeon.'], stack:['TECH STACK','The systems behind the roll.'],
    learn:['CHALLENGES / LEARNINGS','Making randomness feel physical.','A key challenge was keeping the application state, selected option and final orientation of the 3D die synchronized so the visible face always represents the actual result.','The project was also an exercise in combining interaction design, 3D rendering, responsive layout, audiovisual feedback and persistent language preferences without losing the simplicity of the core utility.'],
    footer:'READY TO ENTER THE DUNGEON?'
  },
  es: {
    back:'VOLVER AL PORTFOLIO', type:'WEB APP / 3D INTERACTIVO', tagline:'Dejá que el destino decida.',
    lead:'Un decisor con estética de fantasía que convierte elecciones cotidianas en una experiencia interactiva con D20, animación 3D real, sonido y un modo de duelo al mejor de 3.',
    explore:'EXPLORAR CASO DE ESTUDIO', live:'DEMO EN VIVO', hero:'SISTEMA DE DECISIÓN D20',
    metrics:['OPCIONES','IDIOMAS','MODELO D20','MODO DUELO'],
    overview:['DESCRIPCIÓN DEL PROYECTO','Convertir una decisión en una tirada de mazmorra.','Decision Dungeon parte de una idea simple: hacer que elegir entre opciones sea algo lúdico en lugar de mecánico. El usuario escribe una pregunta, agrega entre 2 y 20 opciones y tira un D20 para dejar que la mazmorra decida.','La experiencia combina una interfaz responsive con un dado 3D real renderizado en el navegador, efectos visuales de fantasía, audio ambiental y soporte bilingüe. La cara visible del dado se mantiene sincronizada con la opción seleccionada por la lógica de decisión.'],
    problem:['CONCEPTO / SOLUCIÓN','Más que un selector aleatorio.','LA IDEA','Las herramientas tradicionales para elegir al azar son funcionales, pero la interacción suele terminar al mostrar un resultado.','LA EXPERIENCIA','Decision Dungeon transforma esa misma utilidad en una experiencia temática: entrar a la mazmorra, crear las opciones, tirar un D20 animado, revelar el resultado o desafiar al destino con Best of 3.'],
    features:['FUNCIONES PRINCIPALES','Un sistema de decisión construido alrededor del D20.',[
      ['D20 3D REAL','Renderizado con Three.js y React Three Fiber. El dado pasa por animaciones de lanzamiento, giro y asentamiento.'],
      ['2–20 OPCIONES PERSONALIZADAS','Cada opción se asigna directamente a un resultado posible del D20, manteniendo alineados la tirada visual y el resultado.'],
      ['BEST OF 3','El primer resultado se enfrenta a un contendiente diferente y una tirada final decide entre ambos.'],
      ['INGLÉS / ESPAÑOL','Toda la interfaz es bilingüe y la preferencia de idioma se guarda localmente.'],
      ['AUDIO INMERSIVO','Ambiente medieval en loop y efecto de tirada sincronizado, con controles independientes.'],
      ['PRESENTACIÓN FANTÁSTICA','Estrellas animadas, astrolabios, efectos arcanos, vortex y una pantalla dedicada para entrar a la mazmorra.']]],
    gallery:['EXPERIENCIA DE PRODUCTO','Dentro de la mazmorra.'], stack:['STACK TECNOLÓGICO','Los sistemas detrás de la tirada.'],
    learn:['DESAFÍOS / APRENDIZAJES','Hacer que el azar se sienta físico.','Uno de los principales desafíos fue mantener sincronizados el estado de la aplicación, la opción elegida y la orientación final del dado 3D para que la cara visible siempre represente el resultado real.','El proyecto también fue un ejercicio de integración entre diseño de interacción, renderizado 3D, layout responsive, feedback audiovisual y persistencia del idioma sin perder la simplicidad de la utilidad central.'],
    footer:'¿LISTO PARA ENTRAR A LA MAZMORRA?'
  }
} as const

export default function DecisionDungeonCaseStudy() {
  const { language } = useLanguage(); const c = copy[language]
  return <main className="case-study">
    <section className="case-hero"><div className="case-shell">
      <div className="case-topbar"><Link to="/" className="case-back">← {c.back}</Link><span>PROJECT // 03</span></div>
      <div className="case-hero-grid"><div className="case-hero-copy"><div className="case-index"><span>03</span><span>{c.type}</span></div><h1>Decision Dungeon</h1><p className="case-tagline">{c.tagline}</p><p className="case-lead">{c.lead}</p><div className="case-actions"><a className="case-primary" href="#overview">{c.explore}<span>↓</span></a><a className="case-secondary" href="https://edgardovillalba.is-a.dev/decision-dungeon/" target="_blank" rel="noopener noreferrer">{c.live} ↗</a><a className="case-secondary" href="https://github.com/Linth84/decision-dungeon" target="_blank" rel="noopener noreferrer">GITHUB ↗</a></div></div>
      <div className="case-hero-visual"><div className="case-visual-header"><span className="case-live-dot"/><span>DECISION DUNGEON // SYSTEM FEED</span><span>ONLINE</span></div><video src="/videos/decision-dungeon/decision-dungeon.webm" autoPlay muted loop playsInline preload="metadata"/><div className="case-visual-footer"><span>SYS // DD-03</span><span>{c.hero}</span></div></div></div>
      <div className="case-metrics case-dstime-metrics"><Metric value="2–20" label={c.metrics[0]}/><Metric value="02" label={c.metrics[1]}/><Metric value="3D" label={c.metrics[2]}/><Metric value="BO3" label={c.metrics[3]}/></div>
    </div></section>
    <Section id="overview" index="01" eyebrow={c.overview[0]} title={c.overview[1]}><div className="case-two-column"><p>{c.overview[2]}</p><p>{c.overview[3]}</p></div></Section>
    <Section index="02" eyebrow={c.problem[0]} title={c.problem[1]}><div className="case-split-cards"><article className="case-info-card"><span>01 // {c.problem[2]}</span><p>{c.problem[3]}</p></article><article className="case-info-card case-info-card-accent"><span>02 // {c.problem[4]}</span><p>{c.problem[5]}</p></article></div></Section>
    <Section index="03" eyebrow={c.features[0]} title={c.features[1]}><div className="case-feature-grid">{c.features[2].map((f,i)=><article className="case-feature-card" key={f[0]}><span>{String(i+1).padStart(2,'0')}</span><h3>{f[0]}</h3><p>{f[1]}</p></article>)}</div></Section>
    <Section index="04" eyebrow={c.gallery[0]} title={c.gallery[1]}><div className="case-dstime-gallery">{[1,2,3,4,5].map((n,i)=><figure className="case-dstime-shot" key={n}><div className="case-dstime-shot-header"><div><span className="case-live-dot"/><span>DECISION DUNGEON // INTERFACE</span></div><span>VIEW // {String(i+1).padStart(2,'0')}</span></div><div className="case-dstime-shot-frame"><img src={`/images/decision-dungeon/screenshot-0${n}.png`} alt={`Decision Dungeon interface screenshot ${n}`} loading="lazy"/></div><div className="case-dstime-shot-footer"><span>SYS // DD-03</span><span>CAPTURE // ONLINE</span></div></figure>)}</div></Section>
    <Section id="stack" index="05" eyebrow={c.stack[0]} title={c.stack[1]}><div className="case-stack-grid">{['REACT','TYPESCRIPT','VITE','THREE.JS','REACT THREE FIBER','REACT THREE DREI','HTML5 AUDIO','LOCAL STORAGE'].map((x,i)=><div className="case-stack-node" key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></div>)}</div></Section>
    <Section index="06" eyebrow={c.learn[0]} title={c.learn[1]}><div className="case-two-column"><p>{c.learn[2]}</p><p>{c.learn[3]}</p></div></Section>
    <section className="case-footer"><div className="case-shell"><span>END // PROJECT 03</span><h2>{c.footer}</h2><div className="case-actions"><a className="case-primary" href="https://edgardovillalba.is-a.dev/decision-dungeon/" target="_blank" rel="noopener noreferrer">{c.live}<span>↗</span></a><a className="case-secondary" href="https://github.com/Linth84/decision-dungeon" target="_blank" rel="noopener noreferrer">GITHUB</a><Link to="/" className="case-secondary">{c.back}</Link></div></div></section>
  </main>
}
function Metric({value,label}:{value:string;label:string}){return <div className="case-metric"><strong>{value}</strong><span>{label}</span></div>}
function Section({id,index,eyebrow,title,children}:{id?:string;index:string;eyebrow:string;title:string;children:React.ReactNode}){return <section className="case-section" id={id}><div className="case-shell"><div className="case-section-heading"><span>{index}</span><div><small>{eyebrow}</small><h2>{title}</h2></div></div><div className="case-section-content">{children}</div></div></section>}
