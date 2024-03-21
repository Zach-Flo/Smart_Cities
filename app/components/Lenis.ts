import Lenis from '@studio-freight/lenis'

if (typeof window !== 'undefined') {
  const lenis = new Lenis()

  const raf = function (time: number): void {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}