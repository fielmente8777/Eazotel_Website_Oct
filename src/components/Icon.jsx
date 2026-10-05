import { useLayoutEffect, useRef } from 'react'
import {
  AlarmClockOff, ArrowRight, BarChart3, BadgeCheck, Bot, Building2, CalendarCheck, Camera, Castle, Check, ChefHat,
  ChevronLeft, ChevronRight, Coffee, Compass, ConciergeBell, Flower2, Globe, Home, Hotel, Inbox, IndianRupee,
  LayoutDashboard, LayoutTemplate, Mail, MapPin, Megaphone, MegaphoneOff, Menu, MessageCircle, MessagesSquare,
  MonitorSmartphone, Moon, MousePointerClick, Package, Palmtree, PartyPopper, Percent, Phone, RefreshCw, Repeat,
  Rocket, Search, Send, Smartphone, Sparkles, Star, Target, Tent, TrendingUp, Utensils, Wallet, Workflow, X, Zap,
} from 'lucide-react'
import {
  createElement as lucideEl, BadgeCheck as vBadgeCheck, Bot as vBot, Check as vCheck, Gift as vGift,
  IndianRupee as vIndianRupee, Mail as vMail, MessageCircle as vMessageCircle, Sparkles as vSparkles,
  UserCheck as vUserCheck, UserPlus as vUserPlus,
} from 'lucide'

// Lucide 1.x dropped brand icons, so Instagram is drawn here in the same stroke style.
function Instagram({ size = 24, strokeWidth = 2, ...rest }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const MAP = {
  'alarm-clock-off': AlarmClockOff, 'arrow-right': ArrowRight, 'bar-chart-3': BarChart3, 'badge-check': BadgeCheck, bot: Bot,
  'building-2': Building2, 'calendar-check': CalendarCheck, camera: Camera, castle: Castle, check: Check,
  'chef-hat': ChefHat, 'chevron-left': ChevronLeft, 'chevron-right': ChevronRight, coffee: Coffee,
  compass: Compass, 'concierge-bell': ConciergeBell, 'flower-2': Flower2, globe: Globe, home: Home,
  hotel: Hotel, inbox: Inbox, 'indian-rupee': IndianRupee, instagram: Instagram,
  'layout-dashboard': LayoutDashboard, 'layout-template': LayoutTemplate, mail: Mail, 'map-pin': MapPin,
  megaphone: Megaphone, 'megaphone-off': MegaphoneOff, menu: Menu, 'message-circle': MessageCircle,
  'messages-square': MessagesSquare, 'monitor-smartphone': MonitorSmartphone, moon: Moon,
  'mouse-pointer-click': MousePointerClick, package: Package, palmtree: Palmtree, 'party-popper': PartyPopper,
  percent: Percent, phone: Phone, 'refresh-cw': RefreshCw, repeat: Repeat, rocket: Rocket, search: Search,
  send: Send, smartphone: Smartphone, sparkles: Sparkles, star: Star, target: Target, tent: Tent,
  'trending-up': TrendingUp, utensils: Utensils, wallet: Wallet, workflow: Workflow, x: X, zap: Zap,
}

/** <Icon n="badge-check"/> — keeps the data-lucide attribute so the original CSS sizing rules apply. */
export function Icon({ n, ...rest }) {
  const C = MAP[n]
  if (!C) return null
  return <C data-lucide={n} aria-hidden="true" {...rest} />
}

const VANILLA = {
  'badge-check': vBadgeCheck, bot: vBot, check: vCheck, gift: vGift, 'indian-rupee': vIndianRupee,
  mail: vMail, 'message-circle': vMessageCircle, sparkles: vSparkles, 'user-check': vUserCheck, 'user-plus': vUserPlus,
}

const PHOTOS = {
  'ph-hero': ['hero', 'center 40%'], 'ph-resort': ['resort', 'center 60%'], 'ph-boutique': ['boutique', 'center 30%'],
  'ph-glamp': ['glamping', 'center 55%'], 'ph-group': ['group', 'center 30%'], 'ph-content': ['team', 'center 40%'],
  'ph-villa': ['villa', 'center 32%'],
}

function sceneFor(className = '') {
  const k = Object.keys(PHOTOS).find(c => className.split(' ').includes(c))
  return k ? PHOTOS[k] : null
}

/** A .photo block with its background scene image. */
export function Photo({ className, children, ...rest }) {
  const s = sceneFor(className)
  return (
    <div className={className} {...rest}>
      {s && <img className="scene" src={`/img/${s[0]}.webp`} alt="" loading="lazy" decoding="async" style={{ objectPosition: s[1] }} />}
      {children}
    </div>
  )
}

/**
 * Renders a static HTML mock (product screens, charts). After each render it swaps
 * <i data-lucide> placeholders for real SVG icons and adds scene images to .photo blocks.
 */
export function Html({ html, as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return
    root.querySelectorAll('i[data-lucide]').forEach(i => {
      const name = i.getAttribute('data-lucide')
      const node = VANILLA[name]
      if (!node) return
      const svg = lucideEl(node)
      svg.setAttribute('data-lucide', name)
      svg.setAttribute('aria-hidden', 'true')
      const st = i.getAttribute('style')
      if (st) svg.setAttribute('style', st)
      i.replaceWith(svg)
    })
    root.querySelectorAll('.photo').forEach(el => {
      const s = sceneFor(el.className)
      if (!s || el.querySelector(':scope > img.scene')) return
      const im = document.createElement('img')
      im.className = 'scene'; im.alt = ''; im.loading = 'lazy'; im.decoding = 'async'
      im.src = `/img/${s[0]}.webp`; im.style.objectPosition = s[1]
      el.prepend(im)
    })
  }, [html])
  return <Tag ref={ref} {...rest} dangerouslySetInnerHTML={{ __html: html }} />
}
