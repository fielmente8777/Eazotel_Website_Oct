import { useRef, useState } from 'react'
import { Icon, Html } from './Icon.jsx'
import { S, V, IND, CHC, R } from '../data.js'

export function ServiceCols() {
  return (
    <div className="svc-cols">
      {S.map(g => (
        <div className="svc-col" key={g[0]}>
          <h3>{g[1]}<span>{g[0]}</span></h3>
          <div className="svc-list">
            {g[2].map(s => (
              <article key={s[3]} className={'svc' + (s[4] ? ' grow' : '')}>
                <Html className="viz" html={V[s[3]]} />
                <div className="cap"><span className="ic"><Icon n={s[0]} /></span><span><b>{s[1]}</b><small>{s[2]}</small></span></div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function Industries() {
  return (
    <div className="inds">
      {IND.map(d => (
        <article className="ind" key={d[1]}>
          <div className="ind-h"><span className="ii"><Icon n={d[0]} /></span><span><b>{d[1]}</b><small>{d[2]}</small></span><em>{d[3]}</em></div>
          <div className="ind-chat">
            <span className="ch"><i style={{ background: CHC[d[6]] }}></i>{d[7]}</span>
            <div className="q">{d[4]}</div>
            <div className="a">{d[5]}<small>Replied in seconds</small></div>
          </div>
          <div className="ind-f">{d[8].map(t => <span className="tag-s" key={t}>{t}</span>)}</div>
        </article>
      ))}
    </div>
  )
}

export function Reviews() {
  const ref = useRef(null)
  const by = dx => ref.current?.scrollBy({ left: dx, behavior: 'smooth' })
  return (
    <>
      <div className="revs" ref={ref}>
        {R.map(r => (
          <figure className="rev" style={{ margin: 0 }} key={r[0]}>
            <span className="stars">★★★★★</span>
            <p>“{r[2]}”</p>
            <figcaption className="who-r">
              <span className="av">{r[0].split(' ').map(w => w[0]).slice(0, 2).join('')}</span>
              <span><b>{r[0]}</b><small>{r[1]}</small></span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="rev-nav">
        <button type="button" aria-label="Previous reviews" onClick={() => by(-360)}><Icon n="chevron-left" /></button>
        <button type="button" aria-label="Next reviews" onClick={() => by(360)}><Icon n="chevron-right" /></button>
      </div>
    </>
  )
}

const inr = n => '₹' + Math.round(n).toLocaleString('en-IN')
const short = n => (n >= 1e7 ? '₹' + (n / 1e7).toFixed(1) + 'Cr' : n >= 1e5 ? '₹' + (n / 1e5).toFixed(1) + 'L' : inr(n))

const FIELDS = [
  ['rooms', 'Rooms', 5, 200, 1, v => v],
  ['occ', 'Occupancy', 20, 95, 1, v => v + '%'],
  ['adr', 'Avg. room rate', 1500, 30000, 500, inr],
  ['ota', 'From OTAs', 10, 95, 1, v => v + '%'],
  ['comm', 'OTA commission', 10, 30, 1, v => v + '%'],
  ['shift', 'Moved to direct', 5, 50, 1, v => v + '%'],
]

export function Roi() {
  const [v, setV] = useState({ rooms: 25, occ: 60, adr: 6500, ota: 65, comm: 18, shift: 20 })
  const D = v.shift / 100
  const comm = v.rooms * 365 * (v.occ / 100) * v.adr * (v.ota / 100) * (v.comm / 100)
  const saved = comm * D
  return (
    <div className="roi">
      <div className="roi-in">
        <div><span className="eyebrow">Commission calculator</span><h3 style={{ marginTop: '6px', fontSize: '1.4rem' }}>What are OTAs costing you?</h3></div>
        {FIELDS.map(([id, label, min, max, step, fmt]) => (
          <div className="field" key={id}>
            <div className="field-top"><label htmlFor={id}>{label}</label><output htmlFor={id}>{fmt(v[id])}</output></div>
            <input type="range" id={id} min={min} max={max} step={step} value={v[id]}
              onChange={e => setV(s => ({ ...s, [id]: +e.target.value }))} />
          </div>
        ))}
      </div>
      <div className="roi-out">
        <span className="mlabel">You keep, per year</span>
        <div className="roi-big">{inr(saved)}</div>
        <div className="split">
          <div className="t"><span style={{ background: 'var(--orange)', width: D * 100 + '%' }}></span><span style={{ background: 'var(--ota)', width: (1 - D) * 100 + '%' }}></span></div>
          <div className="k"><span>Kept <b>{short(saved)}</b></span><span>Still paid to OTAs <b>{short(comm - saved)}</b></span></div>
        </div>
        <div className="kpis">
          <div className="kpi"><b>{short(saved / 12)}</b><span>Per month</span></div>
          <div className="kpi"><b>₹60K</b><span>AI Suite / yr</span></div>
          <div className="kpi"><b>{(saved / 60000).toFixed(1)}×</b><span>Return</span></div>
        </div>
        <p className="fine">Estimate from your inputs, before taxes and gateway fees.</p>
        <a className="btn btn-primary" href="https://wa.me/919501868775?text=Hello%2C%20I%20used%20the%20Eazotel%20calculator%20and%20would%20like%20a%20demo">Get my plan <Icon n="arrow-right" /></a>
      </div>
    </div>
  )
}

export function PhoneRow() {
  const [label, setLabel] = useState('Copy')
  const ref = useRef(null)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText('+919501868775')
      setLabel('Copied')
    } catch {
      const r = document.createRange(); r.selectNodeContents(ref.current)
      const s = getSelection(); s.removeAllRanges(); s.addRange(r)
      setLabel('Selected')
    }
    setTimeout(() => setLabel('Copy'), 2000)
  }
  return (
    <div className="phone-row"><Icon n="phone" /><span ref={ref}>+91 95018 68775</span>
      <button className="copy-btn" type="button" onClick={copy}>{label}</button></div>
  )
}
