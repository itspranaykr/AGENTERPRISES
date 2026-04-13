import { Link } from 'react-router-dom'

export default function Footer() {

  const boxStyle = {
    width: 36,
    height: 36,
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    fontSize: 14,
    transition: 'all 0.3s ease',
  };

  return (
    <footer style={{
      background: '#080808',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 24px) clamp(24px, 5vw, 32px)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>

        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 'clamp(32px, 6vw, 48px)',
          marginBottom: 'clamp(40px, 8vw, 64px)',
        }}>

          {/* Brand */}
          <div style={{ maxWidth: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
              
              {/* Logo */}
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 9,
                overflow: 'hidden',
                flexShrink: 0,
              }}>
                <img 
                  src="https://agsolar.in/logo.webp"
                  alt="AG Solar Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div>
                <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(15px, 4vw, 17px)', color: 'white' }}>
                  A|G ENTERPRISES
                </div>
                <div style={{ fontSize: 'clamp(8px, 3vw, 10px)', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>
                  SOLAR SOLUTIONS
                </div>
              </div>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(13px, 3vw, 14px)', lineHeight: 1.7, marginBottom: 24 }}>
              Leading solar energy solutions provider since 2020, committed to a sustainable future for every home and business.
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/Agsolarsolutionsindia" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={boxStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(249,115,22,0.1)';
                  e.currentTarget.style.borderColor = '#F97316';
                  e.currentTarget.style.color = '#F97316';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H17l-.5 3h-2.7v7A10 10 0 0 0 22 12"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/agsolarsolutionsindia/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={boxStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(249,115,22,0.1)';
                  e.currentTarget.style.borderColor = '#F97316';
                  e.currentTarget.style.color = '#F97316';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
                </svg>
              </a>

              {/* Twitter (X) */}
              <a 
                href="https://x.com/AGsolarIndia" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={boxStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(249,115,22,0.1)';
                  e.currentTarget.style.borderColor = '#F97316';
                  e.currentTarget.style.color = '#F97316';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h3l-7.5 8.6L22 22h-6l-4.7-6.2L5 22H2l8-9.2L2 2h6l4.2 5.6L18 2z"/>
                </svg>
              </a>

              {/* YouTube - FIXED: Added proper link */}
              <a 
                href="https://www.youtube.com/@AGsolarIndia" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={boxStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(249,115,22,0.1)';
                  e.currentTarget.style.borderColor = '#F97316';
                  e.currentTarget.style.color = '#F97316';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 7s-.2-1.7-.8-2.5c-.7-.9-1.5-.9-1.9-1C17.6 3 12 3 12 3h0s-5.6 0-8.3.5c-.4.1-1.2.1-1.9 1C1.2 5.3 1 7 1 7S1 8.7 1 10.4v1.2C1 13.3 1 15 1 15s.2 1.7.8 2.5c.7.9 1.7.9 2.1 1 1.5.1 8.1.5 8.1.5s5.6 0 8.3-.5c.4-.1 1.2-.1 1.9-1 .6-.8.8-2.5.8-2.5s0-1.7 0-3.4v-1.2C23 8.7 23 7 23 7zM10 14V8l5 3-5 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 'clamp(13px, 4vw, 14px)', color: 'white', marginBottom: 20 }}>
              QUICK LINKS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, padding: 0 }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'E-Shop', path: '/eshop' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Blog', path: '/blog' },
              ].map(item => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    style={{ 
                      color: 'rgba(255,255,255,0.45)', 
                      textDecoration: 'none',
                      fontSize: 'clamp(13px, 3vw, 14px)',
                      display: 'inline-block',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F97316'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    → {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 'clamp(13px, 4vw, 14px)', color: 'white', marginBottom: 20 }}>
              SERVICES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, padding: 0 }}>
              {['Rooftop Installation', 'Ground Mounting', 'Off-Grid Systems', 'On-Grid Systems', 'Hybrid Systems', 'Solar Maintenance'].map(s => (
                <li key={s}>
                  <Link 
                    to="/services" 
                    style={{ 
                      color: 'rgba(255,255,255,0.45)', 
                      textDecoration: 'none',
                      fontSize: 'clamp(13px, 3vw, 14px)',
                      display: 'inline-block',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F97316'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    → {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - FIXED: Better mobile layout */}
          <div>
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 'clamp(13px, 4vw, 14px)', color: 'white', marginBottom: 20 }}>
              CONTACT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: '📍', text: 'Pusta Road, Sector 121, Noida, UP, India' },
                { icon: '📞', text: '+91 7011669314' },
                { icon: '✉️', text: 'agsolarsolutions008@gmail.com' },
                { icon: '🕐', text: 'Mon–Sun: 9AM – 10PM' },
              ].map(item => (
                <div key={item.icon} style={{ 
                  display: 'flex', 
                  gap: 'clamp(8px, 3vw, 12px)',
                  flexWrap: 'wrap',
                }}>
                  <span style={{ flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ 
                    color: 'rgba(255,255,255,0.45)', 
                    fontSize: 'clamp(13px, 3vw, 14px)',
                    wordBreak: 'break-word',
                    flex: 1,
                  }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom - FIXED: Better mobile alignment */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 28,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          textAlign: 'center',
        }}>
          <p style={{ 
            color: 'rgba(255,255,255,0.3)', 
            fontSize: 'clamp(11px, 3vw, 13px)',
            margin: 0,
          }}>
            © 2024 A|G Enterprises. All rights reserved.
          </p>
          
          {/* Optional: Add a back to top button for better UX */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 8,
              padding: '8px 16px',
              color: 'rgba(255,255,255,0.5)',
              fontSize: 'clamp(11px, 3vw, 12px)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'inherit',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(249,115,22,0.1)';
              e.currentTarget.style.borderColor = '#F97316';
              e.currentTarget.style.color = '#F97316';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
            }}
          >
            ↑ Back to Top
          </button>
        </div>

      </div>
    </footer>
  )
}