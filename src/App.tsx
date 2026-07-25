import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Advantage from './components/Advantage'
import Stats from './components/Stats'
import Sambutan from './components/Sambutan'
import VirtualCampus from './components/VirtualCampus'
import PortalHub from './components/PortalHub'
import BeritaKegiatan from './components/BeritaKegiatan'
import Footer from './components/Footer'
import FloatingBot from './components/FloatingBot'

function App() {
  useEffect(() => {
    // Micro-interactions and subtle effects
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      document.body.style.setProperty('--mouse-x', `${x}%`)
      document.body.style.setProperty('--mouse-y', `${y}%`)
    }

    // Counter Animation Logic
    const counters = document.querySelectorAll('.font-display-lg')
    const observerOptions = { threshold: 0.5 }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          const text = target.innerText || '0'
          const countTo = parseInt(text.replace('+', '').replace('%', ''), 10)
          let currentCount = 0
          const duration = 2000
          const step = countTo / (duration / 16)

          const updateCount = () => {
            currentCount += step
            if (currentCount < countTo) {
              target.innerText =
                Math.floor(currentCount) +
                (text.includes('+') ? '+' : text.includes('%') ? '%' : '')
              requestAnimationFrame(updateCount)
            } else {
              target.innerText =
                countTo + (text.includes('+') ? '+' : text.includes('%') ? '%' : '')
            }
          }
          updateCount()
          observer.unobserve(target)
        }
      })
    }, observerOptions)

    counters.forEach((counter) => observer.observe(counter))

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      counters.forEach((counter) => observer.unobserve(counter))
    }
  }, [])

  return (
    <main className="pt-20">
      <Header />
      <Hero />
      <Advantage />
      <Stats />
      <Sambutan />
      <VirtualCampus />
      <PortalHub />
      <BeritaKegiatan />
      <Footer />
      <FloatingBot />
    </main>
  )
}

export default App
