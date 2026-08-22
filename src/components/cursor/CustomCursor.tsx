import { useEffect, useRef } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current

    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0

    let ringX = 0
    let ringY = 0

    let animationFrame: number

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY

      dot.style.transform =
        `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.14
      ringY += (mouseY - ringY) * 0.14

      ring.style.transform =
        `translate3d(${ringX}px, ${ringY}px, 0)`

      animationFrame =
        requestAnimationFrame(animateRing)
    }

    const interactiveElements =
      document.querySelectorAll(
        'a, button, .video-panel, .phone-frame'
      )

    const handleEnter = () => {
      ring.classList.add('cursor-hover')
    }

    const handleLeave = () => {
      ring.classList.remove('cursor-hover')
    }

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleEnter)
      element.addEventListener('mouseleave', handleLeave)
    })

    window.addEventListener('mousemove', handleMouseMove)

    animateRing()

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )

      interactiveElements.forEach((element) => {
        element.removeEventListener(
          'mouseenter',
          handleEnter
        )

        element.removeEventListener(
          'mouseleave',
          handleLeave
        )
      })

      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <>
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        aria-hidden="true"
      />

      <div
        ref={dotRef}
        className="custom-cursor-dot"
        aria-hidden="true"
      />
    </>
  )
}