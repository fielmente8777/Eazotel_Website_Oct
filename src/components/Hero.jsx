import { useEffect, useState } from 'react'
import { Icon, Photo } from './Icon.jsx'
import { WaGlyph, SIGNUP, WA } from './Header.jsx'
import { CH, L, brands, ins, O } from '../data.js'
import { useReducedMotion } from '../hooks.js'

function Lead({ l }) {
  const c = CH[l[1]]
  return (
    <li className="lead">
      <span className="src-ico" style={{ background: c.c }}><Icon n={c.i} /></span>
      <div className="lead-b"><b>{l[0]}</b><span>{l[2]}</span></div>
      <span className={'pill ' + l[3]}>{l[4]}</span>
    </li>
  )
}

function HeroFloats() {
  const reduce = useReducedMotion()
  // feed holds [seq, leadIndex] so keys stay unique as rows rotate in
  const [feed, setFeed] = useState(() => [3, 2, 1, 0].map(i => [i, i]))
  const [amt, setAmt] = useState(16800)
  useEffect(() => {
    if (reduce) return
    let seq = 4
    const t = setInterval(() => {
      const idx = seq % L.length
      setFeed(f => [[seq, idx], ...f].slice(0, 4))
      if (L[idx][3] === 'booked') setAmt(12000 + Math.round(Math.random() * 12) * 1000)
      seq++
    }, 2800)
    return () => clearInterval(t)
  }, [reduce])
  return (
    <>
      <div className="float toast"><span className="ic"><Icon n="badge-check" /></span><div><small>Booked direct · 0% commission</small><b>₹{amt.toLocaleString('en-IN')}</b></div></div>
      <div className="float rating"><span className="stars">★★★★★</span><b>8 sec</b>avg. first reply</div>
      <div className="float inbox" aria-label="Example unified inbox">
        <div className="inbox-top"><Icon n="inbox" /><strong>Unified inbox</strong><span className="pill ai">AI on</span></div>
        <ul className="feed">{feed.map(([k, i]) => <Lead key={k} l={L[i]} />)}</ul>
      </div>
    </>
  )
}

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="pill-live"><span className="dot"></span>AI hotel CRM + marketing</span>
          <h1>Every enquiry. One inbox. More bookings <em>direct.</em></h1>
          <p className="lede">WhatsApp, Meta, Google, Instagram and website leads in one dashboard. AI replies in seconds.</p>
          <div className="ctas">
            <a className="btn btn-primary" href={SIGNUP}>Start 14-day free trial <Icon n="arrow-right" /></a>
            <a className="btn btn-ghost" href={WA + '?text=Hello%2C%20I%20would%20like%20an%20Eazotel%20demo'}><WaGlyph />Book a demo</a>
          </div>
          <div className="mini-stats">
            <div><b>120<span>+</span></b><small>Hotels live</small></div>
            <div><b>40<span>%</span></b><small>More direct bookings</small></div>
            <div><b>24<span>/7</span></b><small>AI replies</small></div>
          </div>
        </div>
        <div className="hero-visual">
          <Photo className="photo ph-hero" role="img" aria-label="Luxury hotel lobby" />
          <HeroFloats />
        </div>
      </div>
    </section>
  )
}

export function Trust() {
  const all = [...brands, ...brands]
  return (
    <div className="trust"><div className="wrap"><p>Trusted by 120+ hotels, resorts and villas</p>
      <div className="marquee"><div className="track">
        {all.map((b, i) => (
          <span key={i} className={'ltile' + (b[2] ? ' dk' : '')} aria-hidden={i >= brands.length || undefined}>
            <img src={`/logos/${b[0]}.webp`} alt={i < brands.length ? b[1] : ''} loading="lazy" />
          </span>
        ))}
      </div></div>
    </div></div>
  )
}

export function Flow() {
  return (
    <section id="platform-flow">
      <div className="wrap">
        <div className="head center"><span className="eyebrow">Why Eazotel</span><h2>Scattered leads in. Direct bookings out.</h2></div>
        <div className="flow-wrap">
          <svg className="flow" viewBox="0 0 1000 380" role="img" aria-label="Diagram: six channels flow into the Eazotel inbox, which leads to AI reply, follow-up and a direct booking">
            <defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0" stopColor="#093A75" /><stop offset="1" stopColor="#1b5aa6" /></linearGradient></defs>
            <g>
              {ins.map((key, i) => {
                const y = 40 + i * 60, d = `M190 ${y} C 300 ${y}, 300 190, 400 190`
                return <g key={key}><path className="wire" d={d} /><path className="pulse" d={d} stroke={CH[key].c} style={{ animationDelay: `${i * -0.23}s` }} /></g>
              })}
              {O.map((o, i) => {
                const y = 90 + i * 100, d = `M600 190 C 690 190, 690 ${y}, 760 ${y}`, last = i === 2
                return <g key={o[0]}><path className="wire" d={d} /><path className="pulse" d={d} stroke={last ? '#FD5C01' : '#1b5aa6'} style={{ animationDelay: `${i * -0.4}s` }} /></g>
              })}
            </g>
            <g>
              {ins.map((key, i) => {
                const y = 40 + i * 60, c = CH[key]
                return (
                  <g key={key}>
                    <rect x="20" y={y - 22} width="170" height="44" rx="22" fill="var(--surface)" stroke="var(--line)" />
                    <circle cx="44" cy={y} r="15" fill={c.c} />
                    <text x="68" y={y + 5} style={{ fontSize: '14px', fontWeight: 600 }}>{c.n}</text>
                    <Icon n={c.i} x="35" y={y - 9} width="18" height="18" color="#fff" style={{ width: 18, height: 18 }} />
                  </g>
                )
              })}
            </g>
            <rect x="400" y="120" width="200" height="140" rx="18" fill="url(#g1)" />
            <svg x="428" y="146" width="144" height="26" style={{ color: '#fff' }}><use href="#eazLogo" /></svg>
            <text x="428" y="212" style={{ fill: '#cfe0f5', fontSize: '13px' }}>Unified inbox · CRM</text>
            <text x="428" y="234" style={{ fill: '#cfe0f5', fontSize: '13px' }}>AI agent · Lead scoring</text>
            <g>
              {O.map((o, i) => {
                const y = 90 + i * 100, last = i === 2
                return (
                  <g key={o[0]}>
                    <rect x="760" y={y - 32} width="220" height="64" rx="14" fill={last ? '#FD5C01' : 'var(--surface)'} stroke={last ? '#FD5C01' : 'var(--line)'} />
                    <Icon n={o[0]} x="776" y={y - 12} width="22" height="22" color={last ? '#fff' : '#FD5C01'} style={{ width: 22, height: 22 }} />
                    <text x="810" y={y - 2} style={{ fontSize: '15px', fontWeight: 700, ...(last ? { fill: '#fff' } : {}) }}>{o[1]}</text>
                    <text x="810" y={y + 17} className="sub" style={last ? { fill: '#ffe3d1' } : undefined}>{o[2]}</text>
                  </g>
                )
              })}
            </g>
          </svg>
        </div>
        <div className="leaks">
          <div className="leak"><Icon n="megaphone-off" />Meta leads lost in Ads Manager</div>
          <div className="leak"><Icon n="smartphone" />WhatsApp chats on personal phones</div>
          <div className="leak"><Icon n="moon" />Night enquiries unanswered</div>
          <div className="leak"><Icon n="alarm-clock-off" />No follow-up, leads go cold</div>
        </div>
      </div>
    </section>
  )
}
