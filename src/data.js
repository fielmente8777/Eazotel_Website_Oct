// Content and mock data for the Eazotel homepage (all figures illustrative)
export const CH={wa:{c:'#1f9d55',i:'message-circle',n:'WhatsApp'},meta:{c:'#4f6bed',i:'megaphone',n:'Meta ads'},google:{c:'#FD5C01',i:'search',n:'Google'},web:{c:'#093A75',i:'globe',n:'Website'},ig:{c:'#c13584',i:'instagram',n:'Instagram'},mail:{c:'#6b7a90',i:'mail',n:'Email'}};
export const L=[
    ['Priya M.','wa','2 adults · 24–26 Oct?','hot','Hot'],
    ['Rahul V.','meta','Diwali package · 4 guests','warm','Warm'],
    ['Ananya I.','web','AI sent rates · Suite','ai','AI replied'],
    ['Mayank S.','google','Paid 10% · 3 nights','booked','Booked'],
    ['Sara K.','ig','Pets allowed?','warm','Warm'],
    ['Vikram R.','wa','Offsite · 18 rooms','hot','Hot'],
    ['Neha K.','web','Paid 25% · 2 nights','booked','Booked']];
export const brands=[['arkaya', 'Arkaya Mukteshwar', false], ['wabisabi', 'Wabi Sabi', false], ['corbett', 'Corbett The Grand', false], ['naad', 'Naad Wellness', true], ['northwind', 'North Wind 57', true], ['naturoville', 'Naturoville Wellness', false], ['allure', 'Allure Lake Front', false], ['greencastle', 'Hotel Green Castle', false], ['zion', 'The Zion', false], ['mahabir', 'Mahabir Palace', false], ['kumaon', 'Kumaon Bliss', false], ['colonels', "Colonel's Resort", false]];
export const ins=['wa','meta','google','web','ig','mail'];
export const O=[['bot','AI replies in 8 sec','Every channel, 24/7'],['repeat','Auto follow-up','WhatsApp + email'],['badge-check','Booked direct','Deposit via Razorpay']];
export const J=[
    {i:'mouse-pointer-click',t:'Ad click',h:'Guest finds you on Google or Instagram.',p:'Search, Performance Max, Hotel Ads and Meta ads send them to your own site.',c:[['search','Google Ads'],['megaphone','Meta'],['map-pin','Local SEO']],
      s:`<div class="scr-top web"><span class="av">G</span>Google</div><div class="scr-body"><div class="card-s"><small style="color:#12805c;font-weight:700">Sponsored · arkaya.com</small><b style="color:#1a0dab">Arkaya Mukteshwar · Book Direct, Best Rate</b><span>Himalayan views. Free breakfast on direct bookings.</span></div><div class="adimg photo ph-resort"></div><div class="card-s"><div class="row"><b>★ 4.8</b><span>From ₹7,200</span></div></div></div>`},
    {i:'calendar-check',t:'Booking engine',h:'They land on your booking engine.',p:'Live rates, room photos, and Eazbot answering questions.',c:[['layout-template','Website'],['bot','Eazbot']],
      s:`<div class="scr-top web"><span class="av">A</span>Arkaya · Book</div><div class="scr-body"><div class="card-s"><div class="row"><span>Sun 18 – Tue 20 Oct</span><b>2 adults</b></div></div><div class="card-s"><div class="row"><b>Garden Cottage</b><span>₹6,200</span></div></div><div class="card-s" style="outline:2px solid #FD5C01"><div class="row"><b>Valley View Suite</b><span>₹8,400</span></div></div><div class="b">Hi! Breakfast is included on direct bookings 😊<small>Eazbot</small></div></div>`},
    {i:'wallet',t:'Deposit',h:'They pay a small advance.',p:'10% now, balance later. Razorpay, UPI or card.',c:[['wallet','Razorpay'],['percent','Pay-later slabs']],
      s:`<div class="scr-top web"><span class="av">₹</span>Secure checkout</div><div class="scr-body"><div class="card-s"><span>Valley View Suite · 2 nights</span><div class="row"><span>Total</span><b>₹16,800</b></div><div class="row"><span>Pay now (10%)</span><span class="big">₹1,680</span></div></div><div class="card-s"><div class="row"><span>UPI</span><b>●</b></div><div class="row"><span>Card</span><b>○</b></div></div><div class="btn-s">Pay ₹1,680</div></div>`},
    {i:'message-circle',t:'Confirmed',h:'Confirmed on WhatsApp in seconds.',p:'Email too. The AI agent handles questions and upsells.',c:[['message-circle','WhatsApp'],['mail','EazoMail'],['phone','AI call']],
      s:`<div class="scr-top"><span class="av">A</span>Arkaya Mukteshwar</div><div class="scr-body"><div class="b">✅ Booking confirmed!<br>Valley View Suite · 18–20 Oct<br>Ref: EZ-48213<small>10:42 AM</small></div><div class="b">Need a cab from Kathgodam? ₹2,800 one way.<small>10:42 AM</small></div><div class="b me">Yes please 🙌<small>10:44 AM</small></div><div class="b">Done! Driver details the day before.<small>10:44 AM</small></div></div>`},
    {i:'layout-dashboard',t:'Dashboard',h:'It lands on your dashboard.',p:'The channel manager updates every OTA, so no overbooking.',c:[['layout-dashboard','Dashboard'],['refresh-cw','Channel manager']],
      s:`<div class="scr-top web"><span class="av">E</span>Eazotel dashboard</div><div class="scr-body"><div class="card-s"><small>New booking</small><b>Mayank S. · Valley View Suite</b><div class="ok-s">Booked direct · ₹0 commission</div></div><div class="card-s"><div class="row"><span>Booking.com</span><b style="color:#12805c">Synced</b></div><div class="row"><span>Agoda</span><b style="color:#12805c">Synced</b></div><div class="row"><span>MakeMyTrip</span><b style="color:#12805c">Synced</b></div></div></div>`},
    {i:'concierge-bell',t:'In-stay',h:'Guests order and request in-stay.',p:'Room service, towels, spa. One queue for your team.',c:[['concierge-bell','GRM'],['utensils','Orders']],
      s:`<div class="scr-top"><span class="av">A</span>Arkaya · Room 204</div><div class="scr-body"><div class="b me">Can we get 2 masala chai and pakoras?<small>5:10 PM</small></div><div class="b">Order placed 🍵 Ready in 15 min.<small>5:10 PM</small></div><div class="card-s"><div class="row"><span>Order #312</span><b style="color:#b85c00">Preparing</b></div></div></div>`},
    {i:'repeat',t:'Return',h:'Feedback, then the next stay.',p:'Reviews after checkout, offers by WhatsApp and email later.',c:[['star','Reviews'],['send','Broadcasts']],
      s:`<div class="scr-top"><span class="av">A</span>Arkaya Mukteshwar</div><div class="scr-body"><div class="b">How was your stay? Tap to rate ⭐<small>Checkout day</small></div><div class="b me">⭐⭐⭐⭐⭐ Loved it!<small></small></div><div class="b">Welcome back offer: 20% off your next winter stay ❄️<small>3 months later</small></div><div class="btn-s">Book again</div></div>`}];
export const MI=n=>`/img/${n}.webp`;
export const cal=()=>{const h=['M','T','W','T','F','S','S'].map(d=>`<span class="h">${d}</span>`).join('');let c=h+'<span></span><span></span><span></span>';
    for(let d=1;d<=31;d++){const cls=d===18||d===20?'e':d===19?'in':[10,11,24,25].includes(d)?'x':'';c+=`<span class="${cls}">${d}</span>`}return c};
export const spark=pts=>`<svg viewBox="0 0 54 20" aria-hidden="true"><polyline points="${pts}" fill="none" stroke="var(--ok)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
export const M=[
    ['inbox','Conversational CRM','Every chat, one inbox','One profile per guest, full history, lead scores.',['Unified inbox','Lead scoring','Team assign'],
      `<div class="mk-pipe">
        <div class="col"><span class="vlab">New · 12</span><div class="lc"><i class="dot" style="background:var(--wa)"></i><b>Vikram R.</b><small>Offsite · 20 pax</small></div><div class="lc"><i class="dot" style="background:var(--ig)"></i><b>Sara K.</b><small>Pets allowed?</small></div><div class="lc"><i class="dot" style="background:var(--src-web)"></i><b>Neha T.</b><small>Honeymoon, Nov</small></div></div>
        <div class="col"><span class="vlab">Quoted · 8</span><div class="lc on"><i class="dot" style="background:var(--meta)"></i><b>Priya M.</b><small>24–26 Oct · ₹16.8K</small></div><div class="lc"><i class="dot" style="background:#FD5C01"></i><b>Rahul V.</b><small>Diwali package</small></div></div>
        <div class="col"><span class="vlab">Booked · 5</span><div class="lc"><i class="dot" style="background:var(--wa)"></i><b>Mayank S.</b><small>3 nights · paid</small></div><div class="lc"><i class="dot" style="background:var(--src-web)"></i><b>Ananya I.</b><small>Suite · deposit</small></div></div>
      </div>
      <div class="mk-prof"><span class="av-c">PM</span><div><b>Priya M.</b><small>Meta lead · 3 chats · 1 past stay</small>
        <div class="tline"><i style="background:var(--meta)"></i>Ad<u>—</u><i style="background:var(--wa)"></i>WhatsApp<u>—</u><i style="background:var(--warn)"></i>Quote<u>—</u><i style="background:var(--line)"></i>Booked</div></div>
        <div class="score-r" role="img" aria-label="Lead score 82"><b>82</b></div></div>
      <div class="mk-float p-tr"><span class="fi o"><i data-lucide="user-plus"></i></span><span><b>+14</b><small>leads today</small></span></div>`],
    ['message-circle','AI WhatsApp Agent','Books while you sleep','Quotes, photos, location, bookings, changes.',['Takes bookings','Rich replies','Human handover'],
      `<div class="mk-split">
        <div class="wphone"><div class="ph-top"><span class="av">A</span><div><b>Arkaya Mukteshwar</b><small>AI agent · online</small></div></div>
          <div class="ph-body"><div class="b">Room for 2 this Saturday?<small>11:52 PM</small></div>
            <div class="b me">Yes! Valley View Suite, ₹8,400 with breakfast 🌄<img src="${MI('resort')}" alt="" loading="lazy"><small>11:52 PM</small></div>
            <div class="qr2"><span>Book now</span><span>More photos</span></div>
            <div class="b me">Tap Book now and pay ₹1,680 to confirm ✅<small>11:53 PM</small></div></div></div>
        <div class="sstats">
          <div class="sstat"><b>8 sec</b><small>First reply, day or night</small></div>
          <div class="sstat"><b>7 in 10</b><small>Chats closed without staff</small><div class="t"><i style="width:70%;background:var(--wa)"></i></div></div>
          <div class="sstat"><b style="color:var(--orange)">₹16,800</b><small>Booked after midnight</small></div>
        </div></div>`],
    ['bot','Eazbot Web Chat','Visitors into bookings','Opens on page load, linked to live availability.',['24/7 answers','Live rates','Captures leads'],
      `<div class="mk-brw"><div class="top"><i></i><i></i><i></i><span>arkaya.com</span></div>
        <div class="mk-site"><img src="${MI('hero')}" alt="" loading="lazy"><b>Himalayan stays, booked direct</b><em>Check rates</em>
          <div class="mk-widget"><div class="wh"><i data-lucide="bot"></i>Eazbot<small>● online</small></div><div class="wb">
            <div class="b">Welcome! Looking for dates?</div><div class="b me">Is the spa open to non-residents?</div><div class="b">For in-house guests. Rooms from ₹7,200 🌿</div>
            <div class="chipr"><span>Check dates</span><span>Call me</span></div></div></div></div></div>
      <div class="mk-float p-bl"><span class="fi"><i data-lucide="user-check"></i></span><span><b>Lead saved</b><small>Rahul V. · +91 98••• ••210</small></span></div>`],
    ['layout-template','Website & Engine','Live in minutes','Your site, your engine, your CMS, partial payments.',['3-sec builder','CMS','Deposits'],
      `<div class="mk-brw"><div class="top"><i></i><i></i><i></i><span>book.arkaya.com</span></div>
        <div class="mk-eng">
          <div class="cal"><div class="mh">October 2026<small>18 → 20 · 2 nights</small></div><div class="g">${cal()}</div></div>
          <div class="rms"><span class="vlab">2 adults · 2 nights</span>
            <div class="rm"><img src="${MI('boutique')}" alt="" loading="lazy"><span><b>Garden Cottage</b><small>₹6,200 / night</small></span></div>
            <div class="rm on"><img src="${MI('villa')}" alt="" loading="lazy"><span><b>Valley View Suite</b><small>₹8,400 / night</small></span></div>
            <div class="rm"><img src="${MI('glamping')}" alt="" loading="lazy"><span><b>Forest Dome</b><small>Sold out</small></span></div>
            <div class="paybtn">Pay 10% · ₹1,680</div></div>
        </div></div>
      <div class="mk-float p-tr"><span class="ring2" role="img" aria-label="Page speed 96"><b>96</b></span><span><b>Fast</b><small>Mobile speed score</small></span></div>`],
    ['mail','EazoMail','Emails AI writes','Campaigns and broadcasts to past guests and leads.',['AI templates','Segments','Excel import'],
      `<div class="mk-split">
        <div class="mail"><div class="mh"><small>Subject · AI written</small><b>Your Diwali escape is waiting ✨</b></div><img src="${MI('villa')}" alt="" loading="lazy">
          <div class="mb"><b>20% off festive stays</b><span class="ln"></span><span class="ln" style="width:70%"></span><em>Book now</em></div></div>
        <div class="funnel"><span class="vlab">Campaign · Diwali Escape</span>
          <div class="fn"><div class="r"><span>Sent</span><b>4,210</b></div><div class="t"><i style="width:100%"></i></div></div>
          <div class="fn"><div class="r"><span>Opened</span><b>46%</b></div><div class="t"><i style="width:46%"></i></div></div>
          <div class="fn"><div class="r"><span>Clicked</span><b>12%</b></div><div class="t"><i style="width:12%"></i></div></div>
          <div class="fn o"><div class="r"><span>Booked</span><b>31</b></div><div class="t"><i style="width:4%"></i></div></div>
        </div></div>
      <div class="mk-float p-tr"><span class="fi o"><i data-lucide="indian-rupee"></i></span><span><b>₹5.2L</b><small>from one email</small></span></div>`],
    ['megaphone','Ads Manager','Ads that fill rooms','Google, Hotel Ads and Meta, tracked to the booking.',['Google Ads','Meta leads','ROAS'],
      `<div class="mk-tabs"><span class="on">All</span><span><i style="background:#FD5C01"></i>Google</span><span><i style="background:var(--meta)"></i>Meta</span><span><i style="background:var(--ok)"></i>Hotel Ads</span><em>Last 6 weeks</em></div>
      <div class="kp4"><div><b>₹66K</b><small>Spend</small></div><div><b>312</b><small>Leads</small></div><div><b>74</b><small>Bookings</small></div><div class="o"><b>6.8×</b><small>ROAS</small></div></div>
      <div class="gbars" role="img" aria-label="Weekly spend flat, revenue rising">${[[10,52],[11,61],[11,68],[11,78],[11.5,88],[11.5,102]].map(w=>`<div><i style="height:${w[0]/102*100}%"></i><i class="o" style="height:${w[1]/102*100}%"></i></div>`).join('')}</div>
      <div class="mk-tabs" style="gap:12px"><span style="border:0;padding:0;background:none"><i style="background:var(--bar)"></i>Spend</span><span style="border:0;padding:0;background:none"><i style="background:#FD5C01"></i>Revenue</span></div>
      <div class="ctab"><div><span>Campaign</span><em>Spend</em><em>ROAS</em></div>
        <div><span><i style="background:#FD5C01"></i>Search · Brand</span><em>₹14K</em><b>10.2×</b></div>
        <div><span><i style="background:var(--ok)"></i>Hotel Ads</span><em>₹12K</em><b>8.0×</b></div>
        <div><span><i style="background:#FD5C01"></i>PMax · Rooms</span><em>₹22K</em><b>5.8×</b></div>
        <div><span><i style="background:var(--meta)"></i>Meta · Reels</span><em>₹18K</em><b>4.6×</b></div></div>`],
    ['map-pin','SEO & Local SEO','Rank on Google & Maps','Track keywords, profile and organic bookings.',['Map pack','SEO tracker','GBP'],
      `<div class="mk-split">
        <div class="mk-map"><svg viewBox="0 0 260 230" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="260" height="230" fill="var(--map)"/><path d="M0 170 Q60 150 110 176 T200 168 T260 180 V230 H0Z" fill="var(--water)"/><rect x="170" y="20" width="70" height="50" rx="8" fill="var(--park)"/>
          <g stroke="var(--road)" stroke-width="8" fill="none" stroke-linecap="round"><path d="M-10 92 H270"/><path d="M78 -10 V240"/><path d="M160 -10 Q140 110 210 240"/><path d="M0 34 Q120 46 270 26"/></g>
          <g fill="var(--muted)" opacity=".5"><circle cx="40" cy="60" r="6"/><circle cx="130" cy="130" r="6"/><circle cx="220" cy="120" r="6"/><circle cx="34" cy="140" r="6"/></g>
          <circle cx="112" cy="70" r="20" fill="#FD5C01" opacity=".18"><animate attributeName="r" values="12;26;12" dur="2.4s" repeatCount="indefinite"/></circle>
          <g transform="translate(98 34)"><path d="M14 0C6 0 0 6 0 14c0 10 14 26 14 26s14-16 14-26C28 6 22 0 14 0Z" fill="#FD5C01"/><circle cx="14" cy="14" r="5.5" fill="#fff"/></g></svg>
          <div class="vcard"><span class="tag-s hot">#1</span><b>Arkaya Mukteshwar</b><span></span><span style="color:var(--muted)"><span class="stars" style="font-size:.66rem">★★★★★</span> 4.8 · 412 reviews</span></div></div>
        <div class="ranks"><span class="vlab">Keyword positions · 90 days</span>
          <div class="rk"><span>resort in mukteshwar</span>${spark('2,16 14,14 26,12 38,8 52,4')}<b>#2</b></div>
          <div class="rk"><span>stay near nainital</span>${spark('2,18 14,15 26,12 38,9 52,6')}<b>#4</b></div>
          <div class="rk"><span>wellness retreat uttarakhand</span>${spark('2,18 14,17 26,13 38,11 52,7')}<b>#7</b></div>
          <div class="gbp"><div><b>186</b><small>Calls</small></div><div><b>240</b><small>Directions</small></div><div><b>512</b><small>Site visits</small></div></div>
        </div></div>`],
    ['bar-chart-3','Analytics','See what pays','GA, Google Ads and Meta next to your bookings.',['Lead sources','ROAS','Calls & chats'],
      `<div class="kp4" style="grid-template-columns:repeat(3,minmax(0,1fr))"><div><b>₹18.4L</b><small>Revenue · <span style="color:var(--ok)">↑32%</span></small></div><div class="o"><b>45%</b><small>Direct share</small></div><div><b>₹892</b><small>Cost per booking</small></div></div>
      <div class="mk-split" style="align-items:stretch">
        <div class="lchart"><span class="vlab">Bookings by month</span>
          <svg viewBox="0 0 220 110" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="anG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FD5C01" stop-opacity=".3"/><stop offset="1" stop-color="#FD5C01" stop-opacity="0"/></linearGradient></defs>
            <g stroke="var(--line)"><path d="M0 28H220M0 64H220M0 100H220"/></g>
            <path d="M0 92 L44 84 L88 70 L132 58 L176 42 L220 24 L220 110 L0 110Z" fill="url(#anG)"/>
            <polyline points="0,92 44,84 88,70 132,58 176,42 220,24" fill="none" stroke="#FD5C01" stroke-width="2.5" vector-effect="non-scaling-stroke"/>
            <polyline points="0,40 44,44 88,50 132,54 176,60 220,64" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4" vector-effect="non-scaling-stroke"/></svg>
          <div class="lg"><span><i style="background:#FD5C01"></i>Direct</span><span><i style="background:var(--muted)"></i>OTA</span></div></div>
        <div class="dn"><span class="vlab">Leads by source</span><div class="d" role="img" aria-label="WhatsApp 38%, Google Ads 27%, Meta 19%, Website 16%"><b>312<small>LEADS</small></b></div>
          <div class="l"><span><i style="background:var(--wa)"></i>WhatsApp 38%</span><span><i style="background:#FD5C01"></i>Google 27%</span><span><i style="background:var(--meta)"></i>Meta 19%</span><span><i style="background:var(--src-web)"></i>Website 16%</span></div></div>
      </div>`]];
export const IMG=n=>`/img/${n}.webp`;
export const V={
    perf:`<div class="vrow"><span class="vlab">Direct bookings · 8 weeks</span><span class="tag-s ok">ROAS 6.8×</span></div>
      <div class="vbars" role="img" aria-label="Weekly direct bookings rising">${[30,38,34,47,52,60,71,92].map((h,i)=>`<i class="${i===7?'o':''}" style="height:${h}%"></i>`).join('')}</div>
      <div class="vrow" style="justify-content:flex-start;gap:5px"><span class="tag-s"><i style="background:#FD5C01"></i>Google</span><span class="tag-s"><i style="background:var(--meta)"></i>Meta</span><span class="tag-s"><i style="background:var(--ok)"></i>Hotel Ads</span></div>`,
    local:`<svg viewBox="0 0 320 160" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%" aria-hidden="true">
        <rect width="320" height="160" fill="var(--map)"/><path d="M0 120 Q60 100 110 128 T220 120 T320 132 V160 H0Z" fill="var(--water)"/><rect x="214" y="18" width="70" height="44" rx="8" fill="var(--park)"/>
        <g stroke="var(--road)" stroke-width="7" fill="none" stroke-linecap="round"><path d="M-10 70 H330"/><path d="M90 -10 V170"/><path d="M190 -10 Q170 80 240 170"/><path d="M0 28 Q120 40 330 20"/></g>
        <g fill="var(--muted)" opacity=".55"><circle cx="58" cy="44" r="6"/><circle cx="146" cy="100" r="6"/><circle cx="262" cy="98" r="6"/><circle cx="40" cy="104" r="6"/></g>
        <g transform="translate(118 30)"><path d="M14 0C6 0 0 6 0 14c0 10 14 26 14 26s14-16 14-26C28 6 22 0 14 0Z" fill="#FD5C01"/><circle cx="14" cy="14" r="5.5" fill="#fff"/></g>
        <circle cx="132" cy="72" r="18" fill="#FD5C01" opacity=".18"><animate attributeName="r" values="10;24;10" dur="2.4s" repeatCount="indefinite"/></circle></svg>
      <div class="vcard pin-card"><span class="tag-s hot" style="justify-self:start">#1 Map pack</span><b>Your resort</b><span style="color:var(--muted)"><span class="stars" style="font-size:.7rem">★★★★★</span> 4.8 · 412</span></div>`,
    seo:`<div class="vrow"><div><span class="vlab">Organic sessions</span><div class="vbig">12.4K<em>↑ 186%</em></div></div><span class="tag-s">6 months</span></div>
      <svg class="vsvg" viewBox="0 0 300 70" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="seoG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FD5C01" stop-opacity=".35"/><stop offset="1" stop-color="#FD5C01" stop-opacity="0"/></linearGradient></defs>
        <g stroke="var(--line)"><path d="M0 18H300M0 44H300"/></g><path d="M0 62 C40 60 60 56 90 52 S150 44 180 36 S240 14 300 6 V70 H0Z" fill="url(#seoG)"/><path d="M0 62 C40 60 60 56 90 52 S150 44 180 36 S240 14 300 6" fill="none" stroke="#FD5C01" stroke-width="2.5" vector-effect="non-scaling-stroke"/></svg>
      <div class="vrow" style="justify-content:flex-start;gap:5px"><span class="tag-s">resort in mukteshwar <b style="color:var(--ok)">#2</b></span><span class="tag-s">spa retreat <b style="color:var(--ok)">#4</b></span></div>`,
    ai:`<div class="ai-q">Best wellness resort near Ranikhet?</div>
      <div class="vcard ai-a"><div class="vrow" style="justify-content:flex-start;gap:6px;color:var(--orange)"><i data-lucide="sparkles" style="width:14px;height:14px"></i><span class="vlab" style="color:var(--orange)">AI answer</span></div>
        <div class="hl"><b>1. Your Resort</b> · spa &amp; valley views</div><div class="ln" style="width:72%"></div></div>
      <div class="vrow" style="justify-content:flex-start;gap:5px"><span class="tag-s">ChatGPT</span><span class="tag-s">Gemini</span><span class="tag-s">Perplexity</span><span class="tag-s ok">Cited</span></div>`,
    social:`<div class="vrow"><span class="vlab">Reels · this month</span><span class="tag-s ok">Reach 3.2×</span></div>
      <div class="reels">${[['villa','48.2K'],['resort','31.7K'],['glamping','22.4K']].map(r=>`<div class="reel"><img src="${IMG(r[0])}" alt="" loading="lazy"><span>▶ ${r[1]}</span></div>`).join('')}</div>
      <div class="vrow"><span class="tag-s"><i style="background:var(--ig)"></i>Instagram</span><span class="tag-s">♥ 9.6K</span><span class="tag-s">DMs 214</span></div>`,
    content:`<div class="vf"><img src="${IMG('resort')}" alt="" loading="lazy"><span class="br"></span><span class="rec"><i></i>REC</span><span class="tc">4K · 00:12</span><div class="shots"><span>Drone</span><span>Rooms</span><span>F&amp;B</span><span>Spa</span></div></div>`,
    web:`<div class="brw"><div class="brw-top"><i></i><i></i><i></i><span>yourhotel.com</span></div><div class="brw-hero"><img src="${IMG('hero')}" alt="" loading="lazy"><b>Stay where the hills begin</b><div class="brw-bk"><span>18 Oct → 20 Oct</span><span>2 guests</span><em>Book</em></div></div></div>
      <div class="ring" role="img" aria-label="Page speed score 96"><b>96<small>SPEED</small></b></div>`,
    ota:`<div class="vrow"><span class="vlab">Listing score</span><span class="tag-s hot">Page 1</span></div>
      <div class="ota">${[['Booking.com',58,94],['MakeMyTrip',51,90],['Agoda',62,88],['Airbnb',55,92]].map(o=>`<div class="ota-r"><span>${o[0]}</span><span class="t"><i style="width:${o[2]}%"></i><u style="left:${o[1]}%"></u></span><b>${o[2]}</b></div>`).join('')}</div>
      <div class="vrow" style="justify-content:flex-start;gap:5px;color:var(--muted)"><span class="tag-s"><i style="background:var(--muted)"></i>Before</span><span class="tag-s"><i style="background:#FD5C01"></i>After</span></div>`,
    auto:`<div class="vrow"><span class="vlab">Lead nurture sequence</span><span class="tag-s ok">Auto</span></div>
      <div class="seq"><div><span><i data-lucide="user-plus"></i></span>Lead</div><div class="wa"><span><i data-lucide="message-circle"></i></span>0 min</div><div><span><i data-lucide="mail"></i></span>Day 2</div><div><span><i data-lucide="gift"></i></span>Day 5</div><div class="on"><span><i data-lucide="badge-check"></i></span>Booked</div></div>
      <div class="msgs"><div class="m wa">Hi Priya! Valley View Suite is free on 24–26 Oct. Hold it for you?<small>WhatsApp · instant</small></div><div class="m">Your Diwali escape: breakfast + spa credit included<small>Email · day 2</small></div><div class="m wa">Last 2 suites left. 10% off if you book tonight 🎉<small>WhatsApp · day 5</small></div><span class="done">✓ Booked · ₹16,800</span></div>`,
    pre:`<div class="vrow"><div><span class="vlab">Bookings before opening</span><div class="vbig">1,240<em>waitlist</em></div></div></div>
      <svg class="vsvg" viewBox="0 0 300 76" preserveAspectRatio="none" aria-hidden="true"><path d="M6 68 C70 66 110 58 150 46 S240 14 294 8" fill="none" stroke="#FD5C01" stroke-width="2.5" vector-effect="non-scaling-stroke"/><g fill="var(--surface)" stroke="#FD5C01" stroke-width="2.5" vector-effect="non-scaling-stroke"><circle cx="40" cy="66" r="4"/><circle cx="120" cy="54" r="4"/><circle cx="210" cy="26" r="4"/></g><circle cx="294" cy="8" r="5" fill="#FD5C01"/></svg>
      <div class="vrow" style="font:600 .58rem var(--mono);color:var(--muted)"><span>T-90 Teaser</span><span>T-60 Waitlist</span><span>T-30 Offer</span><span style="color:var(--orange)">Open</span></div>`
  };
export const S=[
    ['Get found','Visibility',[['megaphone','Performance marketing','Google, Hotel Ads, Meta','perf'],['map-pin','Local SEO','Top of Google Maps','local'],['search','Website SEO','Organic bookings','seo'],['sparkles','AI search optimization','Found on ChatGPT & Gemini','ai']]],
    ['Get chosen','Brand',[['instagram','Social media','Reels, posts, DMs','social',1],['camera','Content creation','Photo & video shoots','content'],['monitor-smartphone','Website development','Built to convert','web']]],
    ['Get booked','Revenue',[['building-2','OTA management','Better listings, less commission','ota'],['workflow','Sales automation','Nurture every lead','auto',1],['party-popper','Pre-opening marketing','Demand from day one','pre']]]];
export const IND=[
    ['hotel','Hotels','Fill midweek rooms','Rooms','Early check-in possible on Friday?','Yes, from 11 AM for ₹1,000. Shall I add it?','wa','WhatsApp',['Hotel Ads','OTA','WhatsApp AI']],
    ['palmtree','Resorts','Sell packages, not nights','Rooms','Weekend package for 2 adults?','2 nights, all meals and a spa session: ₹21,500. Photos?','ig','Instagram DM',['Meta ads','Reels','Packages']],
    ['flower-2','Wellness','Programs that fill up','Retreats','What is in the 5-night detox?','Daily yoga, Ayurveda consult and sattvic meals. Here’s the PDF 📄','web','Web chat',['SEO','AI search','EazoMail']],
    ['home','Homestays & Airbnb','Direct, not just Airbnb','Stays','Is the host on-site?','Yes, Meera lives next door and cooks dinner 🍲','wa','WhatsApp',['Listings','Local SEO','Direct site']],
    ['castle','Villas','Whole-villa enquiries','Stays','Pool villa for 8 adults in December?','Free 20–23 Dec at ₹38,000/night. Hold it for 2 hours?','ig','Instagram DM',['Instagram','Website','Deposits']],
    ['tent','Glamping','Weekend demand all year','Stays','Is a bonfire included?','Yes, bonfire and stargazing every night 🔥','meta','Meta lead',['Reels','Creators','Google']],
    ['coffee','Cafés','Top of Maps nearby','F&B','Open till midnight today?','Till 1 AM on weekends ☕ See you soon!','google','Google Maps',['Local SEO','Reviews','Reels']],
    ['utensils','Restaurants','Full tables on weeknights','F&B','Table for 6 at 8 PM?','Reserved! Window table at 8 🍽️','wa','WhatsApp',['Google Maps','Meta ads','WhatsApp']],
    ['chef-hat','Cloud kitchens','Orders without the cut','F&B','Can I order on WhatsApp?','Yes! Menu below. Delivery in 35 min 🛵','wa','WhatsApp',['WhatsApp orders','Meta ads','Broadcasts']]];
export const CHC={wa:'var(--wa)',ig:'var(--ig)',web:'var(--src-web)',meta:'var(--meta)',google:'#FD5C01'};
export const R=[['Siddhi Vinayak Inn','Hotel','Very impressive and quick. They sorted out our MakeMyTrip listing problems.'],
    ['Vythiri Tea Valley','Resort · Wayanad','Really happy with the service. Always helpful and polite.'],
    ['Unnati Stayinn','Hotel','Excellent customer service and 24/7 support. Invaluable to our business.'],
    ['Tino Frangline','Hotelier','Ease of use, intuitive design and feature-rich tools. Absolutely top tier.'],
    ['Atinder Bajwa','Fielmente client','Our marketing partner since 2021. Professional, smooth, and they listen.'],
    ['Donald Wingell CFBE','Fielmente client · Ottawa','Adapted fast to a unique market and made a big impression.'],
    ['Naveen Kumar Sanga','Fielmente client','Handles all our social media and SEO. Great marketing results.'],
    ['Ward Wayanad','Stay · Wayanad','Outstanding support and a genuinely enjoyable collaboration.'],
    ['Abhishek Mishra','Hotelier','Amazing organisation. I recommend them 100%.']];
