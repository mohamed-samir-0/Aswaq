import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const scroll = () => {
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        window.scrollTo(0, 0)
      }
    }

    // ⬅️ 
    setTimeout(scroll, 100)

  }, [pathname, hash])

  return null
}