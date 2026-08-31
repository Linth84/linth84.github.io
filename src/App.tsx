import { useEffect, useRef } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Hero from './components/hero/Hero'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import CustomCursor from './components/cursor/CustomCursor'
import SpaceEffects from './components/space/SpaceEffects'

import FinSightCaseStudy from './pages/FinSightCaseStudy'
import PifTrackerCaseStudy from './pages/PifTrackerCaseStudy'
import SootheWaveCaseStudy from './pages/SootheWaveCaseStudy'
import DSTimeCaseStudy from './pages/DSTimeCaseStudy'
import DecisionDungeonCaseStudy from './pages/DecisionDungeonCaseStudy'
import CampaignChroniclesCaseStudy from './pages/CampaignChroniclesCaseStudy'
import { useLanguage } from './i18n/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         HERO EXIT
         ========================= */

      gsap.to('.hero-center', {
        scale: 0.84,
        opacity: 0,
        y: -90,

        scrollTrigger: {
          trigger: heroRef.current,
          start: '55% center',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to(
        [
          '.hero-nav',
          '.hero-interface',
          '.telemetry',
          '.scroll-indicator',
        ],
        {
          opacity: 0,
          y: -25,

          scrollTrigger: {
            trigger: heroRef.current,
            start: '65% center',
            end: 'bottom top',
            scrub: 1,
          },
        },
      )

      gsap.to('.orbit-outer', {
        scale: 1.5,
        opacity: 0,

        scrollTrigger: {
          trigger: heroRef.current,
          start: '55% center',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to('.orbit-middle', {
        scale: 1.8,
        opacity: 0,

        scrollTrigger: {
          trigger: heroRef.current,
          start: '58% center',
          end: 'bottom top',
          scrub: 1.1,
        },
      })

      gsap.to('.orbit-inner', {
        scale: 2.2,
        opacity: 0,

        scrollTrigger: {
          trigger: heroRef.current,
          start: '60% center',
          end: 'bottom top',
          scrub: 1.2,
        },
      })

      /* =========================
         ABOUT
         ========================= */

      gsap.from('.about-heading', {
        opacity: 0,
        y: 35,

        scrollTrigger: {
          trigger: '#about',
          start: 'top 88%',
          end: 'top 68%',
          scrub: 1,
        },
      })

      gsap.from('.about-identity', {
        opacity: 0,
        x: -80,
        scale: 0.96,

        scrollTrigger: {
          trigger: '#about',
          start: 'top 82%',
          end: 'top 52%',
          scrub: 1,
        },
      })

      gsap.from('.about-content', {
        opacity: 0,
        x: 80,

        scrollTrigger: {
          trigger: '#about',
          start: 'top 82%',
          end: 'top 52%',
          scrub: 1,
        },
      })

      /* =========================
         FINSIGHTAI
         ========================= */

      gsap.from('.project-finsight .projects-heading', {
        opacity: 0,
        y: 40,

        scrollTrigger: {
          trigger: '.project-finsight',
          start: 'top 88%',
          end: 'top 68%',
          scrub: 1,
        },
      })

      gsap.from('.project-finsight .project-info', {
        opacity: 0,
        x: -90,

        scrollTrigger: {
          trigger: '.project-finsight',
          start: 'top 82%',
          end: 'top 52%',
          scrub: 1,
        },
      })

      gsap.from('.project-finsight .project-visual', {
        opacity: 0,
        x: 100,
        scale: 0.94,

        scrollTrigger: {
          trigger: '.project-finsight',
          start: 'top 82%',
          end: 'top 48%',
          scrub: 1,
        },
      })

          /* =========================
         DS-TIME
         ========================= */

      gsap.from('.project-dstime .projects-heading', {
        opacity: 0,
        y: 38,

        scrollTrigger: {
          trigger: '.project-dstime',
          start: 'top 88%',
          end: 'top 68%',
          scrub: 1,
        },
      })

      gsap.from('.project-dstime .project-info', {
        opacity: 0,
        x: 95,

        scrollTrigger: {
          trigger: '.project-dstime',
          start: 'top 82%',
          end: 'top 54%',
          scrub: 1,
        },
      })

      gsap.from('.project-dstime .dstime-system', {
        opacity: 0,
        x: -110,
        y: 30,
        scale: 0.94,

        scrollTrigger: {
          trigger: '.project-dstime',
          start: 'top 82%',
          end: 'top 48%',
          scrub: 1,
        },
      })


      /* =========================
         DECISION DUNGEON
         ========================= */

      gsap.from('.project-dungeon .projects-heading', { opacity: 0, y: 38, scrollTrigger: { trigger: '.project-dungeon', start: 'top 88%', end: 'top 68%', scrub: 1 } })
      gsap.from('.project-dungeon .project-info', { opacity: 0, x: -95, scrollTrigger: { trigger: '.project-dungeon', start: 'top 82%', end: 'top 54%', scrub: 1 } })
      gsap.from('.project-dungeon .dungeon-system', { opacity: 0, x: 110, y: 30, scale: 0.94, scrollTrigger: { trigger: '.project-dungeon', start: 'top 82%', end: 'top 48%', scrub: 1 } })

      /* =========================
         CAMPAIGN CHRONICLES
         ========================= */

      gsap.from('.project-campaign .projects-heading', {
        opacity: 0,
        y: 38,
        scrollTrigger: {
          trigger: '.project-campaign',
          start: 'top 88%',
          end: 'top 68%',
          scrub: 1,
        },
      })

      gsap.from('.project-campaign .project-info', {
        opacity: 0,
        x: 95,
        scrollTrigger: {
          trigger: '.project-campaign',
          start: 'top 82%',
          end: 'top 54%',
          scrub: 1,
        },
      })

      gsap.from('.project-campaign .campaign-system', {
        opacity: 0,
        x: -110,
        y: 30,
        scale: 0.94,
        scrollTrigger: {
          trigger: '.project-campaign',
          start: 'top 82%',
          end: 'top 48%',
          scrub: 1,
        },
      })

      /* =========================
         FIP TRACKER
         ========================= */

      gsap.from('.project-fip .projects-heading', {
        opacity: 0,
        y: 38,

        scrollTrigger: {
          trigger: '.project-fip',
          start: 'top 88%',
          end: 'top 68%',
          scrub: 1,
        },
      })

      gsap.from('.project-fip .project-info', {
        opacity: 0,
        x: -95,

        scrollTrigger: {
          trigger: '.project-fip',
          start: 'top 82%',
          end: 'top 54%',
          scrub: 1,
        },
      })

      gsap.from('.project-fip .phone-system', {
        opacity: 0,
        x: 110,
        y: 35,
        scale: 0.9,
        rotate: 2,

        scrollTrigger: {
          trigger: '.project-fip',
          start: 'top 82%',
          end: 'top 48%',
          scrub: 1,
        },
      })

      /* =========================
         SOOTHEWAVEAPP
         ========================= */

      gsap.from('.project-soothe .projects-heading', {
        opacity: 0,
        y: 38,

        scrollTrigger: {
          trigger: '.project-soothe',
          start: 'top 88%',
          end: 'top 68%',
          scrub: 1,
        },
      })

      gsap.from('.project-soothe .project-info', {
        opacity: 0,
        x: 95,

        scrollTrigger: {
          trigger: '.project-soothe',
          start: 'top 82%',
          end: 'top 54%',
          scrub: 1,
        },
      })

      gsap.from('.project-soothe .phone-system', {
        opacity: 0,
        x: -110,
        y: 35,
        scale: 0.9,
        rotate: -2,

        scrollTrigger: {
          trigger: '.project-soothe',
          start: 'top 82%',
          end: 'top 48%',
          scrub: 1,
        },
      })

      /* =========================
         SKILLS
         ========================= */

      gsap.from('.skills-heading', {
        opacity: 0,
        y: 36,

        scrollTrigger: {
          trigger: '#skills',
          start: 'top 88%',
          end: 'top 68%',
          scrub: 1,
        },
      })

      gsap.from('.skills-intro', {
        opacity: 0,
        y: 55,

        scrollTrigger: {
          trigger: '#skills',
          start: 'top 84%',
          end: 'top 58%',
          scrub: 1,
        },
      })

      gsap.from('.skill-module', {
        opacity: 0,
        y: -45,
        scale: 0.96,
        stagger: 0.08,

        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 86%',
          end: 'top 52%',
          scrub: 1,
        },
      })

      gsap.from('.skills-additional', {
        opacity: 0,
        y: 35,

        scrollTrigger: {
          trigger: '.skills-additional',
          start: 'top 90%',
          end: 'top 70%',
          scrub: 1,
        },
      })

      gsap.from('.skills-focus', {
        opacity: 0,
        y: 28,

        scrollTrigger: {
          trigger: '.skills-additional',
          start: 'top 82%',
          end: 'top 62%',
          scrub: 1,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main>
      <div ref={heroRef}>
        <Hero />
      </div>

      <About />

      <div ref={projectsRef}>
        <Projects />
      </div>

      <Skills />
    </main>
  )
}




/* =========================================================
   SEO SYNC

   The base index.html contains crawlable metadata for the
   portfolio homepage. This component keeps document metadata
   aligned with the active route and selected language after
   React has loaded.
   ========================================================= */

function SeoSync() {
  const { pathname } = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    const site = 'https://edgardovillalba.is-a.dev'

    const seoByRoute = {
      '/': {
        en: {
          title: 'Edgardo Villalba | Developer · AI · Data',
          description:
            'Portfolio of Edgardo Villalba, a developer focused on web development, artificial intelligence, data and practical digital products built around real-world problems.',
        },
        es: {
          title: 'Edgardo Villalba | Desarrollo · IA · Datos',
          description:
            'Portfolio de Edgardo Villalba, desarrollador enfocado en desarrollo web, inteligencia artificial, datos y productos digitales prácticos construidos alrededor de problemas reales.',
        },
      },
      '/projects/finsightai': {
        en: {
          title: 'FinSightAI | Edgardo Villalba',
          description:
            'Case study of FinSightAI, a financial intelligence platform combining web development, data, machine learning and contextual AI.',
        },
        es: {
          title: 'FinSightAI | Edgardo Villalba',
          description:
            'Caso de estudio de FinSightAI, una plataforma de inteligencia financiera que combina desarrollo web, datos, machine learning e IA contextual.',
        },
      },
      '/projects/ds-time': {
        en: {
          title: 'DS-Time | Edgardo Villalba',
          description:
            'Case study of DS-Time, a multilingual Discord timestamp generator designed to simplify scheduling across time zones.',
        },
        es: {
          title: 'DS-Time | Edgardo Villalba',
          description:
            'Caso de estudio de DS-Time, un generador multilingüe de timestamps de Discord diseñado para simplificar la coordinación entre zonas horarias.',
        },
      },
      '/projects/decision-dungeon': {
        en: {
          title: 'Decision Dungeon | Edgardo Villalba',
          description: 'Case study of Decision Dungeon, an interactive fantasy decision maker with a real animated 3D D20, bilingual UI, audio and Best of 3 mode.',
        },
        es: {
          title: 'Decision Dungeon | Edgardo Villalba',
          description: 'Caso de estudio de Decision Dungeon, un decisor interactivo de fantasía con D20 3D animado real, interfaz bilingüe, audio y modo Best of 3.',
        },
      },
      '/projects/campaign-chronicles': {
        en: {
          title: 'Campaign Chronicles | Edgardo Villalba',
          description:
            'Case study of Campaign Chronicles, a bilingual narrative workspace for organizing TTRPG campaigns, characters, NPCs, places, sessions, factions, relationships and campaign knowledge.',
        },
        es: {
          title: 'Campaign Chronicles | Edgardo Villalba',
          description:
            'Caso de estudio de Campaign Chronicles, un workspace narrativo bilingüe para organizar campañas de rol, personajes, NPCs, lugares, sesiones, facciones, relaciones y conocimiento de campaña.',
        },
      },
      '/projects/pif-tracker': {
        en: {
          title: 'PIF Tracker | Edgardo Villalba',
          description:
            'Case study of PIF Tracker, a Web and Android app for organizing daily FIP treatment tracking, weight, wellness and the 84 + 84 journey.',
        },
        es: {
          title: 'PIF Tracker | Edgardo Villalba',
          description:
            'Caso de estudio de PIF Tracker, una app Web y Android para organizar el seguimiento diario del tratamiento de la PIF, peso, bienestar y el proceso 84 + 84.',
        },
      },
      '/projects/soothewave': {
        en: {
          title: 'SootheWaveApp | Edgardo Villalba',
          description:
            'Case study of SootheWaveApp, a mobile wellness experience focused on guided relaxation and a calm, low-friction interface.',
        },
        es: {
          title: 'SootheWaveApp | Edgardo Villalba',
          description:
            'Caso de estudio de SootheWaveApp, una experiencia móvil de bienestar enfocada en relajación guiada y una interfaz tranquila y simple.',
        },
      },
    } as const

    const routeSeo =
      seoByRoute[pathname as keyof typeof seoByRoute] ??
      seoByRoute['/']

    const seo = routeSeo[language]
    const canonicalUrl = `${site}${pathname === '/' ? '/' : pathname}`

    document.title = seo.title

    const setMeta = (
      selector: string,
      content: string,
    ) => {
      const element =
        document.querySelector<HTMLMetaElement>(selector)

      if (element) {
        element.content = content
      }
    }

    setMeta('meta[name="description"]', seo.description)
    setMeta('meta[property="og:title"]', seo.title)
    setMeta('meta[property="og:description"]', seo.description)
    setMeta('meta[property="og:url"]', canonicalUrl)
    setMeta('meta[name="twitter:title"]', seo.title)
    setMeta('meta[name="twitter:description"]', seo.description)
    setMeta(
      'meta[property="og:locale"]',
      language === 'es' ? 'es_AR' : 'en_US',
    )

    const canonical =
      document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]',
      )

    if (canonical) {
      canonical.href = canonicalUrl
    }
  }, [language, pathname])

  return null
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <SeoSync />
      <SpaceEffects />
      <CustomCursor />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projects/finsightai"
          element={<FinSightCaseStudy />}
        />

        <Route path="/projects/ds-time"
         element={<DSTimeCaseStudy />} 
         />


        <Route
          path="/projects/decision-dungeon"
          element={<DecisionDungeonCaseStudy />}
        />

        <Route
          path="/projects/campaign-chronicles"
          element={<CampaignChroniclesCaseStudy />}
        />

        <Route
          path="/projects/pif-tracker"
          element={<PifTrackerCaseStudy />}
        />

        <Route
          path="/projects/soothewave"
          element={<SootheWaveCaseStudy />}
        />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
