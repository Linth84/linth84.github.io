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
