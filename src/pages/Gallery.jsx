import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = ['All', 'Rooftop', 'Ground Mount', 'Commercial', 'Agricultural']

// 🔴 REPLACE THESE IMAGE URLS WITH YOUR OWN IMAGES 🔴
// Upload your images to a hosting service (Imgur, Cloudinary, or your own server)
// Then replace the imageUrl below with your actual image links

const projects = [
  { 
    id: 1, 
    title: 'Residential Rooftop — Noida', 
    category: 'Rooftop', 
    size: '5 kW', 
    year: '2024', 
    imageUrl: 'https://agsolar.in/in1.jpg',
    placeholderEmoji: '🏠',
    color: '#F97316' 
  },
  { 
    id: 2, 
    title: 'Commercial Complex — Delhi', 
    category: 'Commercial', 
    size: '50 kW', 
    year: '2024', 
    imageUrl: 'https://agsolar.in/in5.jpg',
    placeholderEmoji: '🏢',
    color: '#3B82F6' 
  },
  { 
    id: 3, 
    title: 'Farm Solar Pump — Greater Noida', 
    category: 'Agricultural', 
    size: '7.5 HP', 
    year: '2023', 
    imageUrl: 'https://agsolar.in/solar1.jpeg',
    placeholderEmoji: '🌾',
    color: '#22C55E' 
  },
  { 
    id: 4, 
    title: 'Ground Mount — Ghaziabad', 
    category: 'Ground Mount', 
    size: '100 kW', 
    year: '2024', 
    imageUrl: 'https://agsolar.in/in4.jpg',
    placeholderEmoji: '🏔️',
    color: '#8B5CF6' 
  },
  { 
    id: 5, 
    title: 'Rooftop Villa — Noida', 
    category: 'Rooftop', 
    size: '10 kW', 
    year: '2023', 
    imageUrl: 'https://agsolar.in/rd2.webp',
    placeholderEmoji: '🏡',
    color: '#F97316' 
  },
  { 
    id: 6, 
    title: 'School Solar — Faridabad', 
    category: 'Commercial', 
    size: '20 kW', 
    year: '2023', 
    imageUrl: 'https://agsolar.in/rd1.webp',
    placeholderEmoji: '🏫',
    color: '#06B6D4' 
  },
  { 
    id: 7, 
    title: 'Agricultural Pump — UP', 
    category: 'Agricultural', 
    size: '5 HP', 
    year: '2024', 
    imageUrl: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=600&h=400&fit=crop',
    placeholderEmoji: '💧',
    color: '#22C55E' 
  },
  { 
    id: 8, 
    title: 'Industrial — Ghaziabad', 
    category: 'Commercial', 
    size: '200 kW', 
    year: '2024', 
    imageUrl: 'https://agsolar.in/rd3.webp',
    placeholderEmoji: '🏭',
    color: '#EF4444' 
  },
  { 
    id: 9, 
    title: 'Rooftop Apartment — Delhi', 
    category: 'Rooftop', 
    size: '15 kW', 
    year: '2023', 
    imageUrl: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&h=400&fit=crop',
    placeholderEmoji: '🏗️',
    color: '#F97316' 
  },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div style={{ paddingTop: 72, overflowX: 'hidden', width: '100%' }}>
      {/* Lightbox - FIXED for mobile */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 3000,
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(16px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 'clamp(16px, 5vw, 24px)',
            cursor: 'pointer',
          }}
        >
          <div onClick={e => e.stopPropagation()} style={{
            background: '#111',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 24,
            maxWidth: 600,
            width: '100%',
            overflow: 'hidden',
            animation: 'fadeUp 0.3s ease',
          }}>
            {/* Full Image in Lightbox */}
            <div style={{
              height: 'clamp(250px, 50vw, 350px)',
              backgroundImage: `url(${selected.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: selected.color,
                padding: '4px 12px',
                borderRadius: 20,
                fontSize: 'clamp(10px, 2.5vw, 11px)',
                fontWeight: 600,
                color: 'white',
              }}>
                {selected.category}
              </div>
            </div>
            <div style={{ padding: 'clamp(24px, 6vw, 32px)', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(18px, 5vw, 22px)', color: 'white', marginBottom: 12 }}>{selected.title}</h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(12px, 3vw, 16px)', flexWrap: 'wrap', marginBottom: 24 }}>
                <span style={{ padding: '6px 14px', background: `${selected.color}15`, border: `1px solid ${selected.color}40`, color: selected.color, borderRadius: 20, fontSize: 'clamp(12px, 3vw, 13px)' }}>
                  ⚡ {selected.size}
                </span>
                <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', borderRadius: 20, fontSize: 'clamp(12px, 3vw, 13px)' }}>
                  📅 {selected.year}
                </span>
              </div>
              <button onClick={() => setSelected(null)} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - FIXED */}
      <section style={{
        padding: 'clamp(60px, 15vw, 100px) clamp(16px, 5vw, 24px) clamp(40px, 10vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0A0A0A 0%, #0F172A 100%)',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&h=400&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.06,
        }} />
        <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(249,115,22,0.08)', top: -100, left: -100 }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', textAlign: 'center', zIndex: 2, width: '100%' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>✦ Our Work ✦</div>
          <h1 style={{
            fontFamily: 'Syne',
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: 'clamp(16px, 4vw, 24px)'
          }}>
            Project <span className="gradient-text">Gallery</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 'clamp(14px, 4vw, 18px)',
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Explore our completed solar installations across homes, businesses, farms, and industries.
          </p>
        </div>
      </section>

      {/* Filter Buttons - FIXED */}
      <section style={{ padding: '0 clamp(16px, 5vw, 24px) 64px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 'clamp(8px, 2vw, 12px)', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 22px)',
              borderRadius: 40,
              border: active === cat ? 'none' : '1px solid rgba(255,255,255,0.1)',
              background: active === cat ? 'linear-gradient(135deg, #F97316, #EA580C)' : 'rgba(255,255,255,0.03)',
              color: 'white',
              fontFamily: 'Syne',
              fontWeight: 600,
              fontSize: 'clamp(12px, 3vw, 14px)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}>{cat}</button>
          ))}
        </div>
      </section>

      {/* Projects Grid - FIXED */}
      <section style={{ padding: '0 clamp(16px, 5vw, 24px) 100px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(20px, 4vw, 24px)',
          }}>
            {filtered.map(project => (
              <div
                key={project.id}
                onClick={() => setSelected(project)}
                style={{
                  background: '#0D0D0D',
                  border: `1px solid ${project.color}25`,
                  borderRadius: 20,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'
                  e.currentTarget.style.borderColor = `${project.color}60`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = `${project.color}25`
                }}
              >
                {/* Project Image */}
                <div style={{
                  height: 'clamp(180px, 30vw, 220px)',
                  backgroundImage: `url(${project.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    background: project.color,
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: 'clamp(10px, 2.5vw, 11px)',
                    fontWeight: 600,
                    color: 'white',
                  }}>
                    {project.category}
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: 20,
                    padding: '4px 10px',
                    fontSize: 'clamp(11px, 2.5vw, 12px)',
                    color: 'white',
                  }}>
                    ⚡ {project.size}
                  </div>
                </div>
                
                {/* Project Info */}
                <div style={{ padding: 'clamp(16px, 4vw, 20px)' }}>
                  <h3 style={{
                    fontFamily: 'Syne',
                    fontWeight: 700,
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    color: 'white',
                    marginBottom: 8,
                    lineHeight: 1.3
                  }}>
                    {project.title}
                  </h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(11px, 2.5vw, 12px)' }}>
                      📅 {project.year}
                    </span>
                    <span style={{ color: project.color, fontSize: 'clamp(11px, 2.5vw, 12px)', fontWeight: 600 }}>
                      Click to view →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'clamp(60px, 15vw, 80px) 0', color: 'rgba(255,255,255,0.3)' }}>
              <div style={{ fontSize: 'clamp(40px, 10vw, 48px)', marginBottom: 16 }}>🔍</div>
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Banner - FIXED */}
      <section style={{
        padding: 'clamp(40px, 10vw, 80px) clamp(16px, 5vw, 24px)',
        background: '#0D0D0D',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
          gap: 'clamp(24px, 6vw, 32px)',
          textAlign: 'center'
        }}>
          {[
            { value: '1600+', label: 'Projects Completed', icon: '🏗️' },
            { value: '50+', label: 'Cities Covered', icon: '📍' },
            { value: '4.9★', label: 'Google Rating', icon: '⭐' },
            { value: '100%', label: 'Client Satisfaction', icon: '✅' },
          ].map((s, i) => (
            <div key={i} style={{ padding: 'clamp(16px, 4vw, 20px)' }}>
              <div style={{ fontSize: 'clamp(28px, 6vw, 36px)', marginBottom: 8 }}>{s.icon}</div>
              <div className="gradient-text" style={{ fontFamily: 'Syne', fontSize: 'clamp(24px, 6vw, 32px)', fontWeight: 800 }}>{s.value}</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(11px, 3vw, 13px)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner - FIXED */}
      <section style={{
        padding: 'clamp(40px, 8vw, 60px) clamp(16px, 5vw, 24px)',
        background: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=1920&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.04,
        }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(251,191,36,0.05))',
            border: '1px solid rgba(249,115,22,0.2)',
            borderRadius: 'clamp(24px, 5vw, 32px)',
            padding: 'clamp(24px, 6vw, 40px) clamp(20px, 5vw, 48px)',
          }}>
            <div style={{ fontSize: 'clamp(40px, 10vw, 48px)', marginBottom: 16 }}>📸</div>
            <h2 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(1.4rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: 'clamp(12px, 3vw, 16px)'
            }}>
              Want to See More Projects?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(13px, 3vw, 16px)', marginBottom: 'clamp(24px, 6vw, 32px)' }}>
              Contact us for a complete portfolio of our installations in your area.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(12px, 4vw, 16px)', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                ☀️ Get Free Consultation
              </Link>
              <a href="tel:+917011669314" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'transparent',
                border: '1px solid rgba(249,115,22,0.5)',
                padding: 'clamp(8px, 2.5vw, 10px) clamp(16px, 5vw, 24px)',
                borderRadius: 40,
                color: '#F97316',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: 'clamp(12px, 3vw, 14px)',
                transition: 'all 0.2s',
              }}>
                📞 +91 7011669314
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}