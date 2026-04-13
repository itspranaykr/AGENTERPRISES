import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'E-Shop', path: '/eshop' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(10,10,10,0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px',
        height: 'clamp(64px, 10vh, 72px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
      }}>
        {/* Logo - ENLARGED & RESPONSIVE */}
        <Link to="/" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px', 
          textDecoration: 'none',
          flexShrink: 0,
        }}>
          <div style={{
            width: 'clamp(50px, 10vw, 70px)',
            height: 'clamp(50px, 10vw, 70px)',
            borderRadius: 8,
            overflow: 'hidden',
            flexShrink: 0,
            background: 'rgba(255,255,255,0.05)',
            padding: '4px',
          }}>
            <img 
              src="https://agsolar.in/logo.webp" 
              alt="AG Solar Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ 
              fontFamily: 'Syne', 
              fontWeight: 800, 
              fontSize: 'clamp(14px, 5vw, 20px)', 
              color: 'white', 
              lineHeight: 1.1,
              whiteSpace: 'nowrap',
            }}>
              A|G ENTERPRISES
            </div>
            <div style={{ 
              fontSize: 'clamp(8px, 2.5vw, 11px)', 
              color: 'rgba(255,255,255,0.4)', 
              letterSpacing: '0.1em', 
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
            }}>
              SOLAR SOLUTIONS
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 'clamp(20px, 2.5vw, 40px)',
        }}>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              style={{
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                whiteSpace: 'nowrap',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px, 2vw, 20px)' }}>
          {/* Desktop Get Quote button */}
          <Link 
            to="/contact" 
            className="btn-primary desktop-quote"
            style={{ 
              padding: 'clamp(10px, 1.8vw, 12px) clamp(20px, 2.5vw, 28px)', 
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onClick={() => setMenuOpen(false)}
          >
            📞 Get Quote
          </Link>

          {/* Mobile-only Call/Contact Icon Button */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {/* Call button */}
           

            {/* WhatsApp button */}
            <a 
              href="https://wa.me/917011669314"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-wa-icon"
              style={{ 
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                borderRadius: '8px',
                padding: '8px',
                textDecoration: 'none',
                color: 'white',
                fontSize: '18px',
                minWidth: '38px',
                height: '38px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              💬
            </a>

            
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 8,
              padding: '8px 10px',
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: 4,
              flexShrink: 0,
            }}
            aria-label="Menu"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: 20,
                height: 2,
                background: 'white',
                borderRadius: 2,
                transition: 'all 0.3s',
                transformOrigin: 'center',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(4px, 4px)' : i === 2 ? 'rotate(-45deg) translate(4px, -4px)' : 'scaleX(0)'
                  : 'none',
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: 'clamp(64px, 10vh, 72px)',
          left: 0,
          right: 0,
          background: 'rgba(10,10,10,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '20px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          maxHeight: 'calc(100vh - 72px)',
          overflowY: 'auto',
          zIndex: 999,
        }}>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                color: location.pathname === item.path ? '#F97316' : 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontFamily: 'Syne',
                fontWeight: 600,
                fontSize: 'clamp(16px, 4vw, 18px)',
                padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                transition: 'color 0.2s',
              }}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Mobile menu action buttons */}
          <div style={{
            display: 'flex',
            gap: '12px',
            marginTop: '16px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}>
            <a 
              href="tel:+917011669314"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #22C55E, #16A34A)',
                padding: '12px',
                borderRadius: '10px',
                color: 'white',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              📞 Call Now
            </a>
            <Link 
              to="/contact"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #F97316, #EA580C)',
                padding: '12px',
                borderRadius: '10px',
                color: 'white',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
              }}
              onClick={() => setMenuOpen(false)}
            >
              📄 Get Quote
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
          .desktop-quote {
            display: none !important;
          }
          .mobile-call-icon,
          .mobile-wa-icon,
          .mobile-quote-icon {
            display: flex !important;
          }
        }
        
        @media (min-width: 769px) {
          .hamburger {
            display: none !important;
          }
          .desktop-nav {
            display: flex !important;
          }
          .desktop-quote {
            display: inline-flex !important;
          }
          .mobile-call-icon,
          .mobile-wa-icon,
          .mobile-quote-icon {
            display: none !important;
          }
        }
        
        /* Tablet devices */
        @media (max-width: 768px) and (min-width: 481px) {
          .mobile-call-icon,
          .mobile-wa-icon,
          .mobile-quote-icon {
            min-width: 42px !important;
            height: 42px !important;
            font-size: 20px !important;
          }
        }
        
        /* Mobile devices */
        @media (max-width: 480px) {
          .mobile-call-icon,
          .mobile-wa-icon,
          .mobile-quote-icon {
            min-width: 36px !important;
            height: 36px !important;
            font-size: 16px !important;
          }
        }
        
        /* Very small devices */
        @media (max-width: 380px) {
          .mobile-call-icon,
          .mobile-wa-icon,
          .mobile-quote-icon {
            min-width: 32px !important;
            height: 32px !important;
            font-size: 14px !important;
          }
        }
      `}</style>
    </header>
  )
}