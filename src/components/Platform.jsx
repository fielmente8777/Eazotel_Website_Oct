import { useEffect, useState } from 'react'
import { Icon, Html } from './Icon.jsx'
import { J, M } from '../data.js'
import { useReducedMotion } from '../hooks.js'

/** Guest-journey stepper (timeline + copy + phone screen), auto-advancing until clicked. */
export function JourneyBody() {
  const reduce = useReducedMotion()
  const [cur, setCur] = useState(0)
  const [auto, setAuto] = useState(true)
  useEffect(() => {
    if (reduce || !auto) return
    const t = setInterval(() => setCur(c => (c + 1) % J.length), 4500)
    return () => clearInterval(t)
  }, [reduce, auto])
  const s = J[cur]
  return (
    <>
      <div className="timeline" role="tablist" aria-label="Guest journey">
        <span className="tl-bar" style={{ width: (cur / (J.length - 1)) * 86 + '%' }}></span>
        {J.map((st, i) => (
          <button key={st.t} type="button" role="tab" aria-selected={i === cur}
            className={'node' + (i < cur ? ' done' : '')} onClick={() => { setCur(i); setAuto(false) }}>
            <span className="c"><Icon n={st.i} /></span>{st.t}
          </button>
        ))}
      </div>
      <div className="stagebox">
        <div className="stage-txt" aria-live="polite">
          <span className="eyebrow">Step {cur + 1} / {J.length}</span>
          <h3>{s.h}</h3><p>{s.p}</p>
          <div className="chips">{s.c.map(c => <span key={c[1]}><Icon n={c[0]} style={{ width: 14, height: 14 }} />{c[1]}</span>)}</div>
        </div>
        <div className="phone"><Html className="screen" html={s.s} /></div>
      </div>
    </>
  )
}

export function Journey() {
  return (
    <section className="band" id="journey">
      <div className="wrap">
        <div className="head"><span className="eyebrow">How it works</span><h2>From ad click to repeat stay.</h2></div>
        <JourneyBody />
      </div>
    </section>
  )
}

export function Modules() {
  const [i, setI] = useState(0)
  const m = M[i]
  return (
    <section id="platform">
      <div className="wrap">
        <div className="head"><span className="eyebrow">The platform</span><h2>Eight modules. One guest record.</h2></div>
        <div className="mod-grid" role="tablist">
          {M.map((mm, k) => (
            <button key={mm[1]} type="button" className="mod" role="tab" aria-selected={k === i} onClick={() => setI(k)}>
              <span className="ic"><Icon n={mm[0]} /></span><span><b>{mm[1]}</b><small>{mm[2]}</small></span>
            </button>
          ))}
        </div>
        <div className="mod-view" role="tabpanel">
          <div>
            <span className="eyebrow">{m[1]}</span><h3>{m[2]}.</h3><p>{m[3]}</p>
            <ul className="ticks">{m[4].map(t => <li key={t}><Icon n="check" />{t}</li>)}</ul>
          </div>
          <Html className="mock" html={m[5]} />
        </div>
        <p className="mod-note">Screens are illustrative.</p>
      </div>
    </section>
  )
}
