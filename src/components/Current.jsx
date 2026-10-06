// Homepage that keeps the structure and wording of the current eazotel.com homepage,
// with new interactive visuals added: live inbox, channel flow, guest journey, charts + calculator.
import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon.jsx'
import { HeroFloats, FlowDiagram } from './Hero.jsx'
import { JourneyBody } from './Platform.jsx'
import { Roi } from './Interactive.jsx'
import { CLIENTS, TESTIMONIALS } from '../curData.js'
import { useReducedMotion } from '../hooks.js'

export const SIGNUP = 'https://onboarding.eazotel.com/sign-in'
export const LOGIN = 'https://dashboard.eazotel.com/login'
export const DEMO = 'https://wa.me/+919501868775?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Eazotel%20AI%20Hospitality%20Marketing%20Solutions'
const SERVICES = 'https://www.fielmente.com'

const Arrow = () => <Icon n="arrow-right" className="ez-arrow" />
const Pill = ({ icon, children }) => <span className="ez-pill"><Icon n={icon} />{children}</span>

function Head({ icon, pill, title, desc, center = true, dark = false }) {
  return (
    <div className={'ez-head' + (center ? ' center' : '') + (dark ? ' dark' : '')}>
      <Pill icon={icon}>{pill}</Pill>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  )
}

/* ---------- Nav ---------- */
const NAV = [['#features', 'Features'], ['#modules', 'Modules'], ['#how-it-works', 'How it works'], [SERVICES, 'Our Services']]

export function EzNav() {
  const [open, setOpen] = useState(false)
  return (
    <header className={'ez-nav' + (open ? ' open' : '')}>
      <div className="ez-wrap">
        <div className="ez-nav-bar">
          <a href="#top" className="ez-logo" aria-label="Eazotel home">
            <img src="/brand/eazotel-logo-white.webp" width="150" height="27" alt="Eazotel" />
          </a>
          <ul className="ez-links" id="ezLinks">
            {NAV.map(([h, t]) => <li key={t}><a href={h} onClick={() => setOpen(false)}>{t}</a></li>)}
          </ul>
          <div className="ez-nav-cta">
            <a className="ez-btn orange" href={SIGNUP} target="_blank" rel="noopener">Start For FREE <Arrow /></a>
            <a className="ez-btn blue" href={DEMO} target="_blank" rel="noopener">Book a Demo <Arrow /></a>
          </div>
          <button className="ez-menu" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
            aria-controls="ezLinks" onClick={() => setOpen(o => !o)}><Icon n={open ? 'x' : 'menu'} /></button>
        </div>
      </div>
    </header>
  )
}

/* ---------- Hero ---------- */
function Banner() {
  return (
    <section className="ez-hero" id="top">
      <div className="ez-wrap">
        <div className="ez-hero-copy">
          <span className="ez-pill glass">All-in-one Hotel CRM &amp; Marketing Platform</span>
          <h1>One Dashboard for All Your Hotel Enquiries</h1>
          <p>Capture leads from Meta, WhatsApp, website chat, and Google—then convert them into direct bookings with Eazotel's hotel CRM.</p>
          <div className="ez-ctas">
            <a className="ez-btn white" href={SIGNUP} target="_blank" rel="noopener">Start 14-Day FREE Trial <Arrow /></a>
            <a className="ez-btn glass" href={LOGIN} target="_blank" rel="noopener">Login to Dashboard <Arrow /></a>
          </div>
        </div>
        <div className="ez-shot hero-visual">
          <div className="ez-browser">
            <img src="/cur/Safari-bnr.webp" width="1600" height="978" alt="Eazotel dashboard showing total leads, source distribution and lead funnel" />
          </div>
          <HeroFloats />
        </div>
      </div>
    </section>
  )
}

/* ---------- Trusted by ---------- */
function Clients() {
  return (
    <section className="ez-clients">
      <div className="ez-wrap">
        <div className="ez-cgrid">
          <div className="ez-ctitle">
            <h2>Trusted by <span>120+ hotels</span> worldwide</h2>
            <a className="ez-btn black" href={DEMO} target="_blank" rel="noopener">Book a Demo <Arrow /></a>
          </div>
          {CLIENTS.map(src => <div className="ez-cl" key={src}><img src={src} alt="Client hotel logo" loading="lazy" /></div>)}
        </div>
      </div>
    </section>
  )
}

/* ---------- The Problem (+ channel flow) ---------- */
const PROBLEMS = [
  ['Meta leads go to one tool', 'Facebook and Instagram enquiries get lost in ad manager notifications.'],
  ['WhatsApp enquiries go to another', 'Guest messages sit unread on personal phones without tracking.'],
  ['Website chats are missed', 'Live chat enquiries disappear when staff are offline or busy.'],
  ['Staff forget to follow up', 'Without reminders, hot leads go cold and bookings are lost.'],
]

function Problem() {
  return (
    <section className="ez-dark ez-problem">
      <div className="ez-wrap">
        <Head dark icon="alarm-clock-off" pill="The Problem" title="Hotels Lose Bookings Because Leads Are Scattered"
          desc="Your team juggles multiple tools while guests wait. Every missed reply is a lost booking." />
        <div className="ez-pgrid">
          {PROBLEMS.map(([t, d], i) => (
            <article className="ez-pcard" key={t}>
              <span className="n">0{i + 1}</span>
              <h3>{t}</h3><p>{d}</p>
              <img src={`/cur/problem-${i + 1}.webp`} alt="" loading="lazy" width="669" height="372" />
            </article>
          ))}
        </div>
        <div className="ez-fix">
          <div className="ez-fix-h">
            <span className="ez-fix-ic"><Icon n="layout-dashboard" /></span>
            <p>Eazotel brings every guest conversation into one powerful dashboard so your team never misses a booking opportunity.</p>
          </div>
          <FlowDiagram />
        </div>
      </div>
    </section>
  )
}

/* ---------- Features carousel ---------- */
const FEATURES = [
  ['Meta Lead Ads', 'Capture Facebook and Instagram leads instantly into your CRM.', 1],
  ['WhatsApp', 'Manage all guest WhatsApp conversations in one unified inbox.', 2],
  ['Website Live Chat', 'Never miss a guest enquiry with real time website chat.', 3],
  ['Direct Website Forms', 'Capture form submissions and route them to your sales team.', 5],
  ['Instagram & Messenger', 'Track DMs and comments from social channels automatically.', 4],
]

function Features() {
  const ref = useRef(null)
  const [cur, setCur] = useState(0)
  const go = i => {
    const el = ref.current; if (!el) return
    const n = (i + FEATURES.length) % FEATURES.length
    el.children[n].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    setCur(n)
  }
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setCur(+e.target.dataset.i)), { root: el, threshold: 0.6 })
    ;[...el.children].forEach(c => io.observe(c))
    return () => io.disconnect()
  }, [])
  return (
    <section className="ez-light ez-features" id="features">
      <div className="ez-wrap">
        <Head icon="star" pill="Features" title={<>Manage Every Guest Enquiry in <span>One Place</span></>}
          desc="All your channels, one dashboard. No more switching between tools." />
      </div>
      <div className="ez-fscroll" ref={ref}>
        {FEATURES.map(([t, d, img], i) => (
          <article className={'ez-fcard' + (i === cur ? ' on' : '')} key={t} data-i={i}>
            <img src={`/cur/feature-${img}.webp`} alt={`${t} in the Eazotel dashboard`} loading="lazy" width="1400" height="764" />
            <h3>{t} <Icon n="arrow-right" className="ez-tilt" /></h3>
            <p>{d}</p>
          </article>
        ))}
      </div>
      <div className="ez-fnav">
        <button type="button" aria-label="Previous feature" onClick={() => go(cur - 1)}><Icon n="chevron-left" /></button>
        <div className="ez-dots">{FEATURES.map((f, i) => <button type="button" key={f[0]} aria-label={f[0]} className={i === cur ? 'on' : ''} onClick={() => go(i)} />)}</div>
        <button type="button" aria-label="Next feature" onClick={() => go(cur + 1)}><Icon n="chevron-right" /></button>
      </div>
    </section>
  )
}

/* ---------- Modules ---------- */
const MODULES = [
  ['Conversational CRM', 'Engage guests across channels with a unified inbox that captures every conversation and converts inquiries into bookings.', ['Unified guest chat inbox', 'Guest communication history', 'Lead tracking']],
  ['Performance Marketing', 'Run high-ROI campaigns across Google and Meta with real-time analytics and automated lead capture.', ['Google Ads management', 'Meta Ads lead integration', 'Campaign tracking']],
  ['SEO for Hotels', 'Dominate organic search results and drive qualified traffic directly to your booking engine.', ['Rank higher on Google', 'Increase direct website traffic', 'Track organic leads']],
  ['High-Converting Websites', 'Purpose-built hotel websites designed to maximize direct bookings and reduce OTA dependency.', ['Direct booking focused design', 'Mobile-first experience', 'Lead capture automation']],
]

function Modules() {
  const [i, setI] = useState(0)
  const m = MODULES[i]
  return (
    <section className="ez-dark ez-modules" id="modules">
      <div className="ez-wrap">
        <Head dark icon="package" pill="Modules" title="Core Eazotel Modules"
          desc="Everything your hotel needs to capture, manage, and convert leads—all in one platform." />
        <div className="ez-mgrid">
          <div className="ez-mtabs" role="tablist" aria-label="Modules">
            {MODULES.map((mm, k) => (
              <button key={mm[0]} type="button" role="tab" aria-selected={k === i} onClick={() => setI(k)}>{mm[0]}</button>
            ))}
          </div>
          <div className="ez-mview" role="tabpanel">
            <h3>{m[0]}</h3>
            <p>{m[1]}</p>
            <div className="ez-chips">{m[2].map(p => <span key={p}>{p}</span>)}</div>
            <div className="ez-mimg"><img key={i} src={`/cur/module-${i + 1}.webp`} alt={`${m[0]} screen`} width="1060" height="472" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Why Eazotel ---------- */
const WHY = [
  ['trending-up', 'Increase Direct Bookings', 'Convert more website visitors into confirmed guests with optimized booking flows.'],
  ['zap', 'Faster Response Times', 'AI powered replies ensure no guest inquiry goes unanswered, even at 2 AM.'],
  ['package', 'No More Multiple Tools', 'Replace your CRM, chat tools, and marketing stack with one unified platform.'],
  ['hotel', 'Built for Hotels', 'Purpose built for hospitality — not a generic CRM forced into hotel workflows.'],
]

function Why() {
  return (
    <section className="ez-light ez-why">
      <div className="ez-wrap">
        <Head icon="target" pill="Why Eazotel" title={<>Why Hotels Choose <span>Eazotel</span></>}
          desc="A unified platform built exclusively for hospitality teams to capture and convert more guests." />
        <div className="ez-wpanel">
          <div className="ez-wcards">
            {WHY.map(([ic, t, d]) => (
              <article key={t}><span className="ic"><Icon n={ic} /></span><h3>{t}</h3><p>{d}</p></article>
            ))}
          </div>
          <div className="ez-wimg"><img src="/cur/why-section.webp" alt="Eazotel booking report screen" loading="lazy" width="1100" height="1037" /></div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Automation ---------- */
const AUTO = [
  ['AI Chat Responses', 'Instantly reply to guest queries with intelligent AI powered responses 24/7.'],
  ['WhatsApp Broadcasts', 'Send targeted campaigns to segmented guest lists'],
  ['Auto Follow-ups', 'Never lose a lead with timed follow up sequences'],
  ['Booking Reminders', 'Reduce no shows with timely confirmation and reminder messages.'],
  ['Lead Status Tracking', 'Track every lead from first enquiry through to confirmed booking.'],
]

function Automation() {
  return (
    <section className="ez-auto">
      <div className="ez-wrap">
        <Head dark icon="workflow" pill="Automation" title="Automate Your Guest Communication"
          desc="From first inquiry to confirmed booking — every step runs on autopilot." />
        <div className="ez-agrid">
          {AUTO.map(([t, d], i) => (
            <article className="ez-acard" key={t}>
              <h3>{t}</h3><p>{d}</p>
              <img src={`/cur/automation-${i + 1}.webp`} alt="" loading="lazy" width="704" height="284" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Results (+ charts and calculator) ---------- */
const STATS = [
  ['Faster Guest Response', '2×', 'Reply to guests instantly across all channels'],
  ['Smart Lead Conversion', '35%', 'Turn more enquiries into confirmed bookings'],
  ['Direct Bookings', '40%', 'Drive more direct reservations without OTAs'],
  ['Unified Enquiry Management', '1', 'Manage all guest interactions from one dashboard'],
]

function Results() {
  return (
    <section className="ez-light ez-results" id="results">
      <div className="ez-wrap">
        <Head icon="trending-up" pill="Results" title={<>Designed for growth, built for <span>Hotels</span></>}
          desc="The all-in-one platform to manage, convert, and maximize every enquiry" />
        <div className="ez-stats">
          {STATS.map(([l, v, d]) => (
            <article key={l}><h3>{l}</h3><b>{v}</b><p>{d}</p></article>
          ))}
        </div>
        <div className="ez-rpanel band">
          <div className="charts">
            <div className="chart">
              <h3>Booking mix, before and after</h3>
              <div className="mix">
                <div className="mix-row"><span>Before</span><div className="mix-bar"><span className="d" style={{ width: '25%' }}>25%</span><span className="o" style={{ width: '75%' }}>75% OTA</span></div></div>
                <div className="mix-row"><span>After 90 days</span><div className="mix-bar"><span className="d" style={{ width: '45%' }}>45% direct</span><span className="o" style={{ width: '55%' }}>55%</span></div></div>
              </div>
              <div className="legend"><span><i style={{ background: 'var(--orange)' }}></i>Direct</span><span><i style={{ background: '#5b7396' }}></i>OTA</span></div>
              <p className="note">Example property. Your mix depends on market and spend.</p>
            </div>
            <div className="chart">
              <h3>Where leads come from</h3>
              <div className="donut-wrap">
                <div className="donut" role="img" aria-label="Example lead sources: WhatsApp 38%, Google Ads 27%, Meta 19%, website 16%"></div>
                <div className="donut-l">
                  <div><i style={{ background: '#3ccf7a' }}></i>WhatsApp<b>38%</b></div>
                  <div><i style={{ background: '#FD5C01' }}></i>Google Ads<b>27%</b></div>
                  <div><i style={{ background: '#8a9dff' }}></i>Meta leads<b>19%</b></div>
                  <div><i style={{ background: '#cfe0f5' }}></i>Website<b>16%</b></div>
                </div>
              </div>
              <p className="note">Example property dashboard.</p>
            </div>
          </div>
          <Roi />
        </div>
        <div className="ez-rcta">
          <a className="ez-btn blue" href={SIGNUP} target="_blank" rel="noopener">Get Started With Eazotel <Arrow /></a>
          <p>No setup hassle | Works with your existing channels</p>
          <span className="ez-trusted"><span className="stars">★★★★★</span> Trusted by 500+ hotels</span>
        </div>
      </div>
    </section>
  )
}

/* ---------- How it works (+ guest journey) ---------- */
const LEADS = [['Mayank Singh', 23, 'Hot lead', 'hot'], ['Priya Mehra', 12, 'Warm lead', 'warm'], ['Ayush S', 54, 'New lead', 'new']]

function HowItWorks() {
  return (
    <section className="ez-how" id="how-it-works">
      <div className="ez-wrap">
        <div className="ez-how-head">
          <div><Pill icon="workflow">How It Works</Pill><h2>How Eazotel Works</h2></div>
          <p>Get started in three simple steps — from connecting channels to converting bookings</p>
        </div>
        <ol className="ez-steps">
          <li>
            <span className="num">01</span>
            <h3>Connect Channels</h3><p>Integrate WhatsApp, Meta Ads, Website Chat, and more in minutes.</p>
            <div className="ez-scard">
              <div className="ez-chans">
                <span><Icon n="message-circle" />Whatsapp</span><span><Icon n="megaphone" />Meta Ads</span>
                <span><Icon n="globe" />Website</span><span><Icon n="mail" />Email</span>
              </div>
              <em className="ok">All channels connected!</em>
            </div>
          </li>
          <li>
            <span className="num">02</span>
            <h3>Manage Leads</h3><p>Track every guest inquiry in a unified inbox with lead scoring.</p>
            <div className="ez-scard">
              {LEADS.map(([n, s, t, c], k) => (
                <div className="ez-lrow" key={n}>
                  <img src={`/cur/${[23, 12, 54][k]}.webp`} alt="" width="24" height="24" />
                  <b>{n}</b><span className={'t ' + c}>{t}</span><span className="s">{s}</span>
                </div>
              ))}
            </div>
          </li>
          <li>
            <span className="num">03</span>
            <h3>Convert Bookings</h3><p>Close deals faster with automated follow ups and booking confirmations.</p>
            <div className="ez-scard">
              <div className="ez-booked"><b><Icon n="calendar-check" />Booking Confirmed!</b><span>Ocean View Suite Dec 24 28</span></div>
            </div>
          </li>
        </ol>
        <div className="ez-journey band">
          <div className="ez-jhead"><span className="eyebrow">Follow one guest</span><h3>From ad click to repeat stay</h3></div>
          <JourneyBody />
        </div>
      </div>
    </section>
  )
}

/* ---------- Who use Eazotel ---------- */
const WHO = [
  ['Resorts', 'Manage high-volume inquiries and seasonal campaigns effortlessly.', 2],
  ['Boutique Hotels', 'Personalized guest experiences with smart CRM workflows.', 3],
  ['Hotel Groups', 'Centralized lead management across multiple properties.', 1],
]

function Who() {
  return (
    <section className="ez-light ez-who">
      <div className="ez-wrap">
        <Head icon="star" pill="For Every Property" title="Who Use Eazotel" desc="The platform that powers hospitality businesses of all sizes." />
        <div className="ez-wgrid">
          {WHO.map(([t, d, img], i) => (
            <article key={t} className={i === 1 ? 'mid' : ''}>
              <h3>{t}</h3><p>{d}</p>
              <img src={`/cur/who-use-${img}.webp`} alt={t} loading="lazy" className={img === 1 ? 'fit' : undefined} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Testimonials ---------- */
function Quote({ t }) {
  return (
    <figure className="ez-quote">
      <span className="q" aria-hidden="true">“</span>
      <span className="stars" aria-label="5 stars">★★★★★</span>
      <blockquote>{t.text}</blockquote>
      <figcaption>{t.name}</figcaption>
    </figure>
  )
}

function Testimonials() {
  const reduce = useReducedMotion()
  const a = TESTIMONIALS.filter((_, i) => i % 2 === 0), b = TESTIMONIALS.filter((_, i) => i % 2 === 1)
  return (
    <section className="ez-testi">
      <div className="ez-wrap ez-tgrid">
        <div className="ez-tcopy">
          <Pill icon="message-circle">Testimonials</Pill>
          <h2>What Our Customers Say</h2>
          <p>Hotels across India use Eazotel to build better websites, increase direct bookings, and reduce OTA dependency.</p>
          <a className="ez-btn white" href={DEMO} target="_blank" rel="noopener">Book a Free Consultation Call <Arrow /></a>
        </div>
        <div className={'ez-tcols' + (reduce ? ' still' : '')}>
          {[a, b].map((col, k) => (
            <div className={'ez-tcol' + (k ? ' down' : '')} key={k}>
              <div className="ez-ttrack">
                {[...col, ...col].map((t, i) => <div key={i} aria-hidden={i >= col.length || undefined}><Quote t={t} /></div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- CTA + partners + footer ---------- */
function Cta() {
  return (
    <section className="ez-cta-wrap">
      <div className="ez-wrap">
        <div className="ez-cta">
          <h2>Stop Losing Enquiries.<br />Start Converting Them.</h2>
          <p>See how Eazotel can increase your direct bookings. Book a free demo today.</p>
          <a className="ez-btn blue" href={DEMO} target="_blank" rel="noopener">Book a Demo</a>
        </div>
      </div>
    </section>
  )
}

const PARTNERS = [['google-partner', 'Google Partner'], ['meta-business-partner', 'Meta Business Partner'], ['zoho-corporation', 'Zoho'], ['aws', 'AWS'], ['Booking.Com', 'Booking.com'], ['razorpay', 'Razorpay'], ['agoda-logo', 'Agoda'], ['airbnb-logo', 'Airbnb'], ['goibibo-logo', 'Goibibo'], ['makemytrip-logo', 'MakeMyTrip'], ['cleartrip-logo', 'Cleartrip']]

function Partners() {
  const all = [...PARTNERS, ...PARTNERS]
  return (
    <section className="ez-partners">
      <div className="ez-wrap ez-pwrap">
        <h2>Our <span>Business</span> Partners</h2>
        <div className="ez-pmarq"><div className="ez-ptrack">
          {all.map(([f, n], i) => <img key={i} src={`/cur/partners-${f}.webp`} alt={i < PARTNERS.length ? n : ''} aria-hidden={i >= PARTNERS.length || undefined} loading="lazy" />)}
        </div></div>
      </div>
    </section>
  )
}

const FOOT = [
  ['Product', [['#features', 'Features'], ['#modules', 'Modules'], ['#how-it-works', 'How it works'], [SERVICES, 'Our Services']]],
  ['Company', [['/blogs/', 'Blogs'], ['/pricing/', 'Pricing'], ['/privacy-policy/', 'Privacy Policy'], ['/terms-of-service/', 'Terms of Service'], ['/data-deletion/', 'Data Deletion Policy']]],
  ['Get Started', [[DEMO, 'Book a demo'], [SERVICES, 'Our Services']]],
]

function EzFooter() {
  return (
    <footer className="ez-foot">
      <div className="ez-wrap">
        <div className="ez-fgrid">
          <div>
            <img src="/brand/eazotel-logo-white.webp" width="150" height="27" alt="Eazotel" />
            <p>All-in-one hotel CRM and marketing platform that turns enquiries into direct bookings.</p>
          </div>
          {FOOT.map(([h, links]) => (
            <div key={h}><h4>{h}</h4><ul>{links.map(([href, t]) => <li key={t}><a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>{t}</a></li>)}</ul></div>
          ))}
        </div>
        <p className="ez-copy">© 2026 Eazotel. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function CurrentHome() {
  return (
    <div className="ez">
      <EzNav />
      <main>
        <Banner />
        <Clients />
        <Problem />
        <Features />
        <Modules />
        <Why />
        <Automation />
        <Results />
        <HowItWorks />
        <Who />
        <Testimonials />
        <Cta />
        <Partners />
      </main>
      <EzFooter />
      <a className="wa-float" href={DEMO} target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg><use href="#wa" /></svg></a>
    </div>
  )
}
