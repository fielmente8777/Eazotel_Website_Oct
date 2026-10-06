import { Sprites } from './components/Header.jsx'
import CurrentHome from './components/Current.jsx'
import './current.css'

// The homepage keeps the current eazotel.com structure and wording (components/Current.jsx)
// and adds the newer interactive visuals. The earlier redesign's sections still live in
// components/Hero.jsx, Platform.jsx, Sections.jsx and Interactive.jsx and are reused here.
export default function App() {
  return (
    <>
      <Sprites />
      <CurrentHome />
    </>
  )
}
