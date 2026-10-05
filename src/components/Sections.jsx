// Mostly static page sections (converted from the original HTML).
import { Icon, Photo } from './Icon.jsx'
import { Logo } from './Header.jsx'
import { ServiceCols, Industries, Roi, Reviews, PhoneRow } from './Interactive.jsx'

export function ServicesSection() {
  return (
    <>
      <section id="services" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="fm-hero">
            <Photo className="photo ph-content" role="img" aria-label="Fielmente marketing team at work"></Photo>
            <div className="fm-copy">
              <span className="by">Marketing services by <b>Fielmente</b></span>
              <h2>Our team fills the inbox.</h2>
              <p className="lede">Ads, SEO, social, content and OTAs, run by hospitality marketers. Every lead lands in Eazotel.</p>
              <div className="fm-nums">
                <div><b>500<span>+</span></b><small>Properties · India, UAE, UK</small></div>
                <div><b>95<span>%</span></b><small>Client retention</small></div>
                <div><b>1K<span>+</span></b><small>Campaigns run</small></div>
              </div>
            </div>
          </div>
          <ServiceCols/>
          <p className="illus">Dashboards and figures in these cards are illustrative.</p>
          <div className="process">
            <article className="proc">
              <div className="proc-h"><span className="ic"><Icon n="messages-square"/></span><div><b>1 · Consult</b><small>Audit, targets, competitors</small></div><span className="when">Week 1</span></div>
              <div className="pviz">
                <span className="vlab">Digital health audit</span>
                <div className="gauge">
                  <svg viewBox="0 0 96 58" role="img" aria-label="Audit score 54 out of 100"><path d="M8 52 A40 40 0 0 1 88 52" fill="none" stroke="var(--line)" strokeWidth="9" strokeLinecap="round"/><path d="M8 52 A40 40 0 0 1 88 52" fill="none" stroke="var(--warn)" strokeWidth="9" strokeLinecap="round" pathLength="100" strokeDasharray="54 100"/><text x="48" y="50" textAnchor="middle" style={{font:'800 19px var(--display)',fill:'var(--fg)'}}>54</text></svg>
                  <div style={{display:'grid',gap:'5px'}}>
                    <div className="sub-r"><span>Ads</span><span className="t"><i style={{width:'48%',background:'var(--warn)'}}></i></span><b>48</b></div>
                    <div className="sub-r"><span>SEO</span><span className="t"><i style={{width:'41%',background:'var(--hot)'}}></i></span><b>41</b></div>
                    <div className="sub-r"><span>OTA</span><span className="t"><i style={{width:'66%',background:'var(--ok)'}}></i></span><b>66</b></div>
                    <div className="sub-r"><span>Social</span><span className="t"><i style={{width:'58%',background:'var(--warn)'}}></i></span><b>58</b></div>
                  </div>
                </div>
                <div className="vrow"><span className="tag-s"><i style={{background:'var(--hot)'}}></i>3 competitors outrank you</span><span className="tag-s ok">12 quick wins</span></div>
              </div>
            </article>
            <article className="proc">
              <div className="proc-h"><span className="ic"><Icon n="compass"/></span><div><b>2 · Strategise</b><small>Channel plan and budget</small></div><span className="when">Week 2</span></div>
              <div className="pviz">
                <span className="vlab">Monthly budget split</span>
                <div className="budget">
                  <div className="bdonut" role="img" aria-label="Budget split: Google Ads 40%, Meta 25%, SEO and AI search 15%, content 10%, OTA 10%"></div>
                  <div className="bleg">
                    <div><i style={{background:'var(--orange)'}}></i>Google Ads<b>40%</b></div>
                    <div><i style={{background:'var(--c-navy)'}}></i>Meta<b>25%</b></div>
                    <div><i style={{background:'var(--meta)'}}></i>SEO & AI search<b>15%</b></div>
                    <div><i style={{background:'var(--ok)'}}></i>Content<b>10%</b></div>
                    <div><i style={{background:'var(--muted)'}}></i>OTA<b>10%</b></div>
                  </div>
                </div>
                <div className="vrow"><span className="tag-s">90-day target</span><span className="tag-s hot">45% direct</span></div>
              </div>
            </article>
            <article className="proc">
              <div className="proc-h"><span className="ic"><Icon n="rocket"/></span><div><b>3 · Execute</b><small>Run, report, improve monthly</small></div><span className="when">Monthly</span></div>
              <div className="pviz">
                <div className="vrow"><span className="vlab">Direct revenue</span><span className="tag-s ok">Report on the 1st</span></div>
                <svg className="vsvg" viewBox="0 0 260 90" preserveAspectRatio="none" role="img" aria-label="Direct revenue rising month over month" style={{minHeight:'84px'}}>
                  <defs><linearGradient id="exG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FD5C01" stopOpacity=".35"/><stop offset="1" stopColor="#FD5C01" stopOpacity="0"/></linearGradient></defs>
                  <g stroke="var(--line)" strokeWidth="1"><path d="M0 22H260M0 52H260M0 82H260"/></g>
                  <path d="M0 76 L52 70 L104 60 L156 48 L208 34 L260 14 L260 90 L0 90Z" fill="url(#exG)"/>
                  <path d="M0 76 L52 70 L104 60 L156 48 L208 34 L260 14" fill="none" stroke="#FD5C01" strokeWidth="2.5" vectorEffect="non-scaling-stroke"/>
                </svg>
                <div className="vrow" style={{font:'500 .6rem var(--mono)',color:'var(--muted)'}}><span>M1</span><span>M2</span><span>M3</span><span>M4</span><span>M5</span><span>M6</span></div>
              </div>
            </article>
          </div>
          <div className="inds-wrap">
            <h3>Who we market<span>9 business types</span></h3>
            <Industries/>
          </div>
        </div>
      </section>
    </>
  )
}

export function Results() {
  return (
    <>
      <section className="band" id="results">
        <div className="wrap">
          <div className="head"><span className="eyebrow">Results</span><h2>What changes after 90 days.</h2></div>
          <div className="stats">
            <div className="stat"><span className="ic"><Icon n="zap"/></span><b data-count="2" data-suf="×">2×</b><small>Faster guest response</small><div className="cmp" aria-hidden="true"><div>Before<i style={{width:'100%'}}></i></div><div>After<i style={{width:'50%'}}></i></div></div></div>
            <div className="stat"><span className="ic"><Icon n="target"/></span><b data-count="35" data-suf="%">35%</b><small>Higher lead conversion</small><div className="cmp" aria-hidden="true"><div>Before<i style={{width:'74%'}}></i></div><div>After<i style={{width:'100%'}}></i></div></div></div>
            <div className="stat"><span className="ic"><Icon n="trending-up"/></span><b data-count="40" data-suf="%">40%</b><small>More direct bookings</small><div className="cmp" aria-hidden="true"><div>Before<i style={{width:'56%'}}></i></div><div>After<i style={{width:'100%'}}></i></div></div></div>
            <div className="stat"><span className="ic"><Icon n="indian-rupee"/></span><b data-count="700" data-pre="₹" data-suf="+">₹700+</b><small>RevPAR increase</small><div className="cmp" aria-hidden="true"><div>Before<i style={{width:'80%'}}></i></div><div>After<i style={{width:'100%'}}></i></div></div></div>
          </div>
          <div className="charts">
            <div className="chart">
              <h3>Booking mix, before and after</h3>
              <div className="mix">
                <div className="mix-row"><span>Before</span><div className="mix-bar"><span className="d" style={{width:'25%'}}>25%</span><span className="o" style={{width:'75%'}}>75% OTA</span></div></div>
                <div className="mix-row"><span>After 90 days</span><div className="mix-bar"><span className="d" style={{width:'45%'}}>45% direct</span><span className="o" style={{width:'55%'}}>55%</span></div></div>
              </div>
              <div className="legend"><span><i style={{background:'var(--orange)'}}></i>Direct</span><span><i style={{background:'#5b7396'}}></i>OTA</span></div>
              <p className="note">Example property. Your mix depends on market and spend.</p>
            </div>
            <div className="chart">
              <h3>Where leads come from</h3>
              <div className="donut-wrap">
                <div className="donut" role="img" aria-label="Example lead sources: WhatsApp 38%, Google Ads 27%, Meta 19%, website 16%"></div>
                <div className="donut-l">
                  <div><i style={{background:'#3ccf7a'}}></i>WhatsApp<b>38%</b></div>
                  <div><i style={{background:'#FD5C01'}}></i>Google Ads<b>27%</b></div>
                  <div><i style={{background:'#8a9dff'}}></i>Meta leads<b>19%</b></div>
                  <div><i style={{background:'#cfe0f5'}}></i>Website<b>16%</b></div>
                </div>
              </div>
              <p className="note">Example property dashboard.</p>
            </div>
          </div>
      
          <Roi/>
        </div>
      </section>
    </>
  )
}

export function Who() {
  return (
    <>
      <section id="who">
        <div className="wrap">
          <div className="head"><span className="eyebrow">Built for</span><h2>Every kind of stay.</h2></div>
          <div className="who-grid">
            <Photo className="photo who ph-boutique"><div className="who-chip"><Icon n="message-circle"/><div><b>8 sec</b><small>reply at 2:14 AM</small></div></div><span>5–40 keys</span><h3>Boutique hotels</h3><p>Fast replies, no night shift.</p></Photo>
            <Photo className="photo who ph-resort"><div className="who-chip"><Icon n="package"/><div><b>214</b><small>package leads</small></div></div><span>Seasonal peaks</span><h3>Resorts & wellness</h3><p>Packages, spa and campaigns.</p></Photo>
            <Photo className="photo who ph-glamp"><div className="who-chip"><Icon n="globe"/><div><b>Day 1</b><small>site + engine live</small></div></div><span>Villas · glamps</span><h3>Alternative stays</h3><p>Website and bookings same day.</p></Photo>
            <Photo className="photo who ph-group"><div className="who-chip"><Icon n="building-2"/><div><b>4 hotels</b><small>one dashboard</small></div></div><span>Multi-property</span><h3>Hotel groups</h3><p>One view across properties.</p></Photo>
          </div>
        </div>
      </section>
    </>
  )
}

export function Pricing() {
  return (
    <>
      <section id="pricing" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="head center"><span className="eyebrow">Pricing</span><h2>Simple plans. No setup fee.</h2><p className="lede">14-day free trial. INR, excl. GST.</p></div>
          <div className="price-grid">
            <div className="plan">
              <div className="plan-h"><span className="ic"><svg width="22" height="22"><use href="#wa"/></svg></span><b>WhatsApp AI</b></div>
              <div className="amount">₹1,000<small>/mo</small></div>
              <ul><li><Icon n="check"/>AI agent on your number</li><li><Icon n="check"/>Trained on your property</li><li><Icon n="check"/>Leads saved to CRM</li><li><Icon n="check"/>Human handover</li></ul>
              <a className="btn btn-ghost" href="https://onboarding.eazotel.com/sign-in">Start free</a>
            </div>
            <div className="plan feat"><span className="tag">Most chosen</span>
              <div className="plan-h"><span className="ic"><Icon n="sparkles"/></span><b>AI Suite</b></div>
              <div className="amount">₹5,000<small>/mo</small></div>
              <ul><li><Icon n="check"/>Website + booking engine</li><li><Icon n="check"/>WhatsApp, sales & web AI agents</li><li><Icon n="check"/>CRM + unified inbox</li><li><Icon n="check"/>EazoMail + broadcasts</li><li><Icon n="check"/>Razorpay deposits</li><li><Icon n="check"/>Ads & analytics dashboard</li></ul>
              <a className="btn btn-primary" href="https://onboarding.eazotel.com/sign-in">Start 14-day trial</a>
            </div>
            <div className="plan">
              <div className="plan-h"><span className="ic"><Icon n="rocket"/></span><b>Growth Partner</b></div>
              <div className="amount" style={{fontSize:'2rem'}}>Custom</div>
              <ul><li><Icon n="check"/>Everything in AI Suite</li><li><Icon n="check"/>Google & Meta ads by Fielmente</li><li><Icon n="check"/>SEO, Local SEO, AI search</li><li><Icon n="check"/>Social, content, OTAs</li><li><Icon n="check"/>Monthly revenue review</li></ul>
              <a className="btn btn-ghost" href="https://wa.me/919501868775?text=Hello%2C%20I%20would%20like%20the%20Growth%20Partner%20plan">Talk to us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function Partners() {
  return (
    <>
      <section style={{paddingTop:0}}>
        <div className="wrap">
          <div className="head center"><span className="eyebrow">Partners & channels</span></div>
          <div className="logos"><span className="ltile"><img src="/logos/google-partner.webp" alt="Google Partner" loading="lazy"/></span><span className="ltile"><img src="/logos/meta-partner.webp" alt="Meta Business Partner" loading="lazy"/></span><span className="ltile"><img src="/logos/aws.webp" alt="AWS" loading="lazy"/></span><span className="ltile"><img src="/logos/zoho.webp" alt="Zoho" loading="lazy"/></span><span className="ltile"><img src="/logos/razorpay.webp" alt="Razorpay" loading="lazy"/></span><span className="ltile"><img src="/logos/booking.webp" alt="Booking.com" loading="lazy"/></span><span className="ltile"><img src="/logos/agoda.webp" alt="Agoda" loading="lazy"/></span><span className="ltile"><img src="/logos/airbnb.webp" alt="Airbnb" loading="lazy"/></span><span className="ltile"><img src="/logos/makemytrip.webp" alt="MakeMyTrip" loading="lazy"/></span><span className="ltile"><img src="/logos/goibibo.webp" alt="Goibibo" loading="lazy"/></span><span className="ltile"><img src="/logos/cleartrip.webp" alt="Cleartrip" loading="lazy"/></span></div>
        </div>
      </section>
    </>
  )
}

export function ReviewsSection() {
  return (
    <>
      <section id="reviews" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="head"><span className="eyebrow">Reviews</span><h2>Hoteliers say it best.</h2></div>
          <Reviews/>
        </div>
      </section>
    </>
  )
}

export function Faq() {
  return (
    <>
      <section id="faq" style={{paddingTop:0}}>
        <div className="wrap faq">
          <div className="head" style={{margin:0}}><span className="eyebrow">FAQ</span><h2>Quick answers.</h2></div>
          <div>
            <details open><summary>Do I replace my PMS or channel manager?</summary><p>No. Eazotel works alongside them and keeps OTA inventory in sync.</p></details>
            <details><summary>How does the AI learn my property?</summary><p>Upload brochures, rate sheets and website links. We build your knowledge base from them.</p></details>
            <details><summary>Can guests pay a deposit?</summary><p>Yes. Partial payments through Razorpay, balance later.</p></details>
            <details><summary>Eazotel or Fielmente, what's the difference?</summary><p>Eazotel is the software. Fielmente is our marketing team that runs your ads, SEO and social.</p></details>
            <details><summary>Any contract or setup fee?</summary><p>No. Monthly plans with a 14-day free trial.</p></details>
          </div>
        </div>
      </section>
    </>
  )
}

export function Cta() {
  return (
    <>
      <section className="cta">
        <div className="wrap">
          <Photo className="photo cta-box ph-villa">
            <div>
              <h2>Stop losing enquiries. <span>Start converting.</span></h2>
              <p>A 20-minute demo on a property like yours.</p>
              <div className="ctas" style={{margin:0}}><a className="btn btn-primary" href="https://onboarding.eazotel.com/sign-in">Start free trial</a><a className="btn btn-ghost" style={{color:'#fff'}} href="https://wa.me/919501868775?text=Hello%2C%20I%20would%20like%20an%20Eazotel%20demo"><svg width="18" height="18"><use href="#wa"/></svg>Book a demo</a></div>
              <PhoneRow/>
            </div>
          </Photo>
        </div>
      </section>
    </>
  )
}

export function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="foot">
            <div style={{display:'grid',gap:'12px',alignContent:'start'}}>
              <Logo onDark />
              <p>AI growth platform for hotels, with marketing by Fielmente.</p>
              <p style={{fontSize:'.82rem'}}>Suncity Success Tower, Sector 65, Gurugram 122005</p>
              <p style={{fontFamily:'var(--mono)',fontSize:'.82rem',userSelect:'all'}}>sachin@fielmente.com</p>
            </div>
            <div><h4>Product</h4><ul><li><a href="#platform">Platform</a></li><li><a href="#journey">How it works</a></li><li><a href="#results">Results</a></li><li><a href="#pricing">Pricing</a></li></ul></div>
            <div><h4>Fielmente</h4><ul><li><a href="#services">Performance ads</a></li><li><a href="#services">SEO & AI search</a></li><li><a href="#services">Social & content</a></li><li><a href="#services">OTA management</a></li></ul></div>
            <div><h4>Company</h4><ul><li><a href="https://eazotel.com/blogs/">Blog</a></li><li><a href="https://eazotel.com/privacy-policy/">Privacy</a></li><li><a href="https://eazotel.com/terms-of-service/">Terms</a></li><li><a href="https://eazotel.com/data-deletion/">Data deletion</a></li></ul></div>
            <div><h4>Start</h4><ul><li><a href="https://onboarding.eazotel.com/sign-in">Free trial</a></li><li><a href="https://onboarding.eazotel.com/sign-in">Log in</a></li><li><a href="https://wa.me/919501868775">WhatsApp us</a></li></ul></div>
          </div>
          <div className="foot-b"><span>© 2026 Eazotel Technologies Pvt. Ltd.</span><span>Gurugram, India</span></div>
        </div>
      </footer>
      <a className="wa-float" href="https://wa.me/919501868775?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Eazotel" aria-label="Chat on WhatsApp"><svg><use href="#wa"/></svg></a>
    </>
  )
}
