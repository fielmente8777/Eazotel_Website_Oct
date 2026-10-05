import { useState } from 'react'
import { Icon } from './Icon.jsx'

const LINKS = [['#platform', 'Platform'], ['#journey', 'How it works'], ['#services', 'Marketing services'], ['#results', 'Results'], ['#pricing', 'Pricing']]
export const SIGNUP = 'https://onboarding.eazotel.com/sign-in'
export const WA = 'https://wa.me/919501868775'

/** Hidden SVG sprite: Eazotel wordmark + WhatsApp glyph, referenced with <use>. */
export function Sprites() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <symbol id="eazLogo" viewBox="100 80 1530 270">
        <g fill="none" stroke="currentColor" strokeWidth="57" strokeLinecap="round" strokeLinejoin="round">
          <path d="M269.5 136.5H158.5V287.5H269.5M158.5 212H252" /><path d="M372 287.5L425 131.5L478 287.5M392 240H458" />
          <path d="M581.5 136.5H709.5L581.5 287.5H709.5" /><path d="M1041.5 136.5H1196.5M1119 136.5V287.5" />
          <path d="M1381.5 136.5H1268.5V287.5H1381.5M1268.5 212H1362" /><path d="M1470 131.5V287.5H1585" />
        </g>
        <circle cx="881" cy="212" r="86" fill="none" stroke="#FD5C01" strokeWidth="67" />
      </symbol>
      <symbol id="wa" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.2-.8-2.7-1.1-4.4-3.9-4.5-4.1-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.4.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" />
      </symbol>
    </svg>
  )
}

export const Logo = ({ style }) => (
  <a className="logo" href="#top" aria-label="Eazotel home" style={style}>
    <svg className="wm" width="164" height="29" role="img" aria-label="Eazotel"><use href="#eazLogo" /></svg>
  </a>
)

export const WaGlyph = ({ size = 18 }) => <svg width={size} height={size}><use href="#wa" /></svg>

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className={'nav' + (open ? ' open' : '')} id="nav">
      <div className="wrap">
        <Logo />
        <ul className="nav-links" id="navLinks">
          {LINKS.map(([h, t]) => <li key={h}><a href={h} onClick={() => setOpen(false)}>{t}</a></li>)}
        </ul>
        <div className="nav-cta">
          <a className="btn btn-ghost btn-sm" href={SIGNUP}>Log in</a>
          <a className="btn btn-primary btn-sm" href={SIGNUP}>Start free</a>
        </div>
        <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
          aria-controls="navLinks" onClick={() => setOpen(o => !o)}>
          <Icon n={open ? 'x' : 'menu'} />
        </button>
      </div>
    </header>
  )
}
