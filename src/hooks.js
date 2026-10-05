import { useSyncExternalStore } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'
const subscribe = cb => {
  const m = window.matchMedia(QUERY)
  m.addEventListener('change', cb)
  return () => m.removeEventListener('change', cb)
}

/** True when the visitor has asked the OS for reduced motion. */
export const useReducedMotion = () =>
  useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false)
