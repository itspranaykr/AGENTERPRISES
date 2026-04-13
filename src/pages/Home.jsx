import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function CountUp({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const observed = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true
        let start = 0
        const step = end / (duration / 16)
        const timer = setInterval(() => {
          start += step
          if (start >= end) { setCount(end); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 16)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 1090, suffix: '+', label: 'Happy Customers' },
  { value: 1600, suffix: '+', label: 'Projects Completed' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Cities Covered' },
]

const systems = [
  {
    title: 'Off-Grid Solar',
    tag: 'Independent',
    icon: '🔋',
    desc: 'Completely independent power supply using solar panels and battery storage. Perfect for areas with unreliable grid connectivity.',
    color: '#22C55E',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop',
    badge: '🔋 Battery Storage'
  },
  {
    title: 'On-Grid Solar',
    tag: 'Grid-Tied',
    icon: '⚡',
    desc: 'Connected to the utility grid. Export excess power and earn credits. Ideal for urban homes and businesses with reliable grid access.',
    color: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&h=500&fit=crop',
    badge: '⚡ Net Metering'
  },
  {
    title: 'Hybrid Solar',
    tag: 'Best of Both',
    icon: '☀️',
    desc: 'Combines grid connectivity with battery backup. Enjoy uninterrupted power with maximum savings and flexibility.',
    color: '#F97316',
    image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&h=500&fit=crop',
    badge: '☀️ 24/7 Power'
  },
]

const cities = [
  { name: 'Noida', img: 'https://webkolek.com/admin/latestupdate/uploads/The%20Rise%20of%20Noida:%20From%20Industrial%20Hub%20to%20Smart%20City_1760088840.jpg' },
  { name: 'Ghaziabad', img: 'https://www.starestate.in/api/star_estate/ProjectBannerImage/2025-09-18_12-51-06_Prestige_City_Desk.webp' },
  { name: 'Delhi', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop' },
  { name: 'Greater Noida', img: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweruAjxGJDx14QC95lWha8XbvbrbXjbl021GmJAVwH1RDUeNntaagUwdKicEtgidqvdLw9YlJH68CGZkgvq0t0THLDeY9qwuKsP12AED8mZFObCwLj1p2adTSS5RBuDxNo4ePp-1gw=w675-h390-n-k-no' },
]

const testimonials = [
  {
    name: 'Arun Bhati',
    role: 'Homeowner, Noida',
    text: 'I installed 5kw Solar System (off-grid)Work properly. Installation team is very Good. Highly recommend this particular AG solar to anyone looking for a great experience!',
    rating: 5,
  },
  {
    name: 'Tushar Kashyap',
    role: 'CEO, Silk Company',
    text: 'I am install last month 2kw Good staff and humble behavior i am prefer my family person also get done ag solar!',
    rating: 5,
  },
  {
    name: 'Rishav Sharma',
    role: 'Factory Owner, Ghaziabad',
    text: 'This solar solution provide best solar in budget .. The service is too good and fast secure work and reliable . Thanks to giving me best solar system for my home ...',
    rating: 5,
  },
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      {/* ───── HERO SECTION - FIXED ───── */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 72,
        background: 'linear-gradient(135deg, #0A0A0A 0%, #0F172A 100%)',
      }}>
        {/* Subtle background pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
        }} />
        
        <div className="glow-orb" style={{ width: 600, height: 600, background: 'rgba(249,115,22,0.1)', top: -100, right: -100 }} />
        <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(251,191,36,0.05)', bottom: 100, left: -100 }} />
        
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px, 10vw, 80px) clamp(16px, 5vw, 24px)', position: 'relative', width: '100%', zIndex: 2 }}>
          {/* FIXED: Responsive grid that stacks on mobile */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: 'clamp(32px, 8vw, 64px)',
            alignItems: 'center',
          }}>
            <div className="animate-fadeUp">
              <div className="section-label">Renewable Energy Solutions Since 2020</div>
              <h1 style={{
                fontFamily: 'Syne',
                fontSize: 'clamp(2rem, 8vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'white',
                marginBottom: 'clamp(16px, 4vw, 24px)',
              }}>
                Harness the{' '}
                <span className="gradient-text">Power of<br className="hide-desktop" /> the Sun</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(14px, 3vw, 18px)', lineHeight: 1.6, marginBottom: 'clamp(24px, 5vw, 40px)', maxWidth: 480 }}>
                AG Solar Solutions delivers sustainable, cost-effective solar energy systems for homes and businesses across North India. Save up to 90% on electricity bills.
              </p>
              <div style={{ display: 'flex', gap: 'clamp(12px, 4vw, 16px)', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">☀️ Get Free Quote</Link>
                <Link to="/services" className="btn-secondary">Explore Services →</Link>
              </div>
              <div style={{ display: 'flex', gap: 'clamp(16px, 5vw, 24px)', marginTop: 'clamp(32px, 8vw, 48px)', flexWrap: 'wrap' }}>
                {['GOVT. Approved', 'MSME Registered', '25-Yr Warranty'].map(b => (
                  <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(11px, 3vw, 13px)' }}>
                    <span style={{ color: '#22C55E', fontSize: 'clamp(14px, 3vw, 16px)' }}>✓</span> {b}
                  </div>
                ))}
              </div>
            </div>
            
            {/* FIXED: Hero animation that doesn't overflow */}
            <div className="animate-float" style={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div style={{
                width: 'min(420px, 80vw)',
                height: 'min(420px, 80vw)',
                background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ fontSize: 'clamp(80px, 20vw, 140px)', filter: 'drop-shadow(0 0 40px rgba(249,115,22,0.4))' }}>☀️</div>
                <div className="animate-spin-slow" style={{
                  position: 'absolute',
                  width: '100%', height: '100%',
                  border: '1px dashed rgba(249,115,22,0.15)',
                  borderRadius: '50%',
                }} />
                
                {/* FIXED: Responsive badges that don't overlap */}
                <div style={{
                  position: 'absolute',
                  top: '5%',
                  left: '5%',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(249,115,22,0.2)',
                  borderRadius: 40,
                  padding: 'clamp(4px, 2vw, 8px) clamp(8px, 3vw, 16px)',
                  color: 'white',
                  fontSize: 'clamp(8px, 2.5vw, 12px)',
                  fontFamily: 'Syne',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}>
                  ₹0 Electricity Bill
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '5%',
                  right: '5%',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(249,115,22,0.2)',
                  borderRadius: 40,
                  padding: 'clamp(4px, 2vw, 8px) clamp(8px, 3vw, 16px)',
                  color: 'white',
                  fontSize: 'clamp(8px, 2.5vw, 12px)',
                  fontFamily: 'Syne',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}>
                  90% Savings
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '15%',
                  left: '0%',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(249,115,22,0.2)',
                  borderRadius: 40,
                  padding: 'clamp(4px, 2vw, 8px) clamp(8px, 3vw, 16px)',
                  color: 'white',
                  fontSize: 'clamp(8px, 2.5vw, 12px)',
                  fontFamily: 'Syne',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}>
                  25yr Warranty
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          zIndex: 2,
        }}>
          <div style={{
            width: 24, height: 38,
            border: '2px solid rgba(255,255,255,0.15)',
            borderRadius: 12,
            display: 'flex', justifyContent: 'center', paddingTop: 6,
          }}>
            <div style={{
              width: 4, height: 8,
              background: '#F97316',
              borderRadius: 2,
              animation: 'float 1.5s ease-in-out infinite',
            }} />
          </div>
        </div>
      </section>

      {/* ───── STATS SECTION - FIXED ───── */}
      <section style={{ padding: 'clamp(40px, 10vw, 80px) clamp(16px, 5vw, 24px)', background: '#0D0D0D', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
            gap: 'clamp(24px, 6vw, 32px)',
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div className="stat-number gradient-text" style={{ fontSize: 'clamp(2rem, 8vw, 4rem)' }}>
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(11px, 3vw, 14px)', marginTop: 8, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── ABOUT SECTION - FIXED ───── */}
      <section style={{ padding: 'clamp(50px, 10vw, 100px) clamp(16px, 5vw, 24px)', background: '#0A0A0A' }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(40px, 8vw, 80px)',
          alignItems: 'center',
        }}>
          <div>
            <div className="section-label">About AG Solar Solutions</div>
            <h2 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(1.8rem, 6vw, 3rem)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.2,
              marginBottom: 'clamp(16px, 4vw, 24px)'
            }}>
              Your Trusted Solar<br />Partner Since 2020
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(14px, 3vw, 16px)', lineHeight: 1.7, marginBottom: 24 }}>
              Founded in 2020, AG Enterprises Solar Solutions began with a simple vision: to make clean, renewable energy accessible to everyone. What started as a small team has grown into a leading solar energy provider across North India.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(14px, 3vw, 16px)', lineHeight: 1.7, marginBottom: 36 }}>
              We've installed over 1,600 solar systems, helping thousands of customers reduce their carbon footprint and save millions on electricity costs.
            </p>
            <Link to="/about" className="btn-primary">Learn Our Story →</Link>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            gap: 'clamp(12px, 3vw, 16px)',
          }}>
            {[
              { icon: '🏅', title: 'GOVT. Approved', desc: 'Empaneled with PM Surya Ghar scheme' },
              { icon: '🏭', title: 'MSME Registered', desc: 'UDYAM-UP-29-0138813' },
              { icon: '⚙️', title: 'Certified Experts', desc: 'Trained & certified solar engineers' },
              { icon: '🛡️', title: '25-Yr Warranty', desc: 'Performance guarantee on panels' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ padding: 'clamp(16px, 4vw, 24px)' }}>
                <div style={{ fontSize: 'clamp(24px, 6vw, 28px)', marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 'clamp(13px, 3vw, 15px)', color: 'white', marginBottom: 6 }}>{item.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(11px, 2.5vw, 13px)', lineHeight: 1.4 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SYSTEM TYPES - FIXED ───── */}
      <section style={{ padding: 'clamp(50px, 10vw, 100px) clamp(16px, 5vw, 24px)', background: '#0D0D0D' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 10vw, 64px)' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Solar Systems</div>
            <h2 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(1.8rem, 6vw, 3rem)',
              fontWeight: 800,
              color: 'white'
            }}>
              Comprehensive Solutions<br className="hide-mobile" /> For Every Need
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(24px, 5vw, 32px)',
          }}>
            {systems.map((s, i) => (
              <div key={i} className="glass-card" style={{
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{
                  height: 'clamp(180px, 30vw, 220px)',
                  backgroundImage: `url(${s.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    background: s.color,
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: 'clamp(10px, 2.5vw, 12px)',
                    fontWeight: 600,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                    {s.badge}
                  </div>
                </div>
                <div style={{ padding: 'clamp(20px, 5vw, 28px)', flex: 1 }}>
                  <div style={{
                    display: 'inline-block',
                    background: `${s.color}15`,
                    border: `1px solid ${s.color}40`,
                    color: s.color,
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: 'clamp(10px, 2.5vw, 11px)',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    marginBottom: 16,
                  }}>
                    {s.tag}
                  </div>
                  <div style={{ fontSize: 'clamp(32px, 8vw, 40px)', marginBottom: 12 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(20px, 5vw, 24px)', color: 'white', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(13px, 3vw, 14px)', lineHeight: 1.6, marginBottom: 24 }}>{s.desc}</p>
                  <Link to="/services" style={{
                    color: s.color,
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: 14,
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CITIES SECTION - FIXED ───── */}
      <section style={{ padding: 'clamp(50px, 10vw, 100px) clamp(16px, 5vw, 24px)', background: '#0A0A0A' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 8vw, 48px)' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Service Areas</div>
            <h2 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(1.8rem, 6vw, 3rem)',
              fontWeight: 800,
              color: 'white'
            }}>
              Cities We Serve
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: 'clamp(16px, 4vw, 24px)',
          }}>
            {cities.map((city, i) => (
              <div key={i} style={{
                borderRadius: 16,
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'rgba(249,115,22,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              }}>
                <div style={{
                  height: 'clamp(140px, 30vw, 160px)',
                  backgroundImage: `url(${city.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }} />
                <div style={{ padding: 'clamp(16px, 4vw, 20px)', textAlign: 'center' }}>
                  <div style={{ color: 'white', fontFamily: 'Syne', fontWeight: 700, fontSize: 'clamp(16px, 4vw, 18px)' }}>📍 {city.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS - FIXED ───── */}
      <section style={{ padding: 'clamp(50px, 10vw, 100px) clamp(16px, 5vw, 24px)', background: '#0D0D0D' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 8vw, 64px)' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Testimonials</div>
            <h2 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(1.8rem, 6vw, 3rem)',
              fontWeight: 800,
              color: 'white'
            }}>
              What Our Clients Say
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
              <span style={{ color: '#FBBF24', fontSize: 'clamp(14px, 4vw, 18px)' }}>★★★★★</span>
              <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(11px, 3vw, 14px)' }}>4.8 rating based on 48 Google reviews</span>
            </div>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', width: '100%' }}>
            <div className="glass-card" style={{ padding: 'clamp(24px, 8vw, 48px)', position: 'relative' }}>
              <div style={{ fontSize: 'clamp(32px, 8vw, 48px)', color: 'rgba(249,115,22,0.2)', fontFamily: 'serif', marginBottom: 24 }}>"</div>
              <p style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: 'clamp(14px, 4vw, 18px)',
                lineHeight: 1.6,
                marginBottom: 32,
                fontStyle: 'italic'
              }}>
                {testimonials[activeTestimonial].text}
              </p>
              <div>
                <div style={{ fontFamily: 'Syne', fontWeight: 700, color: 'white', fontSize: 'clamp(14px, 4vw, 16px)' }}>
                  {testimonials[activeTestimonial].name}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(11px, 3vw, 13px)', marginTop: 4 }}>
                  {testimonials[activeTestimonial].role}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)} style={{
                    width: i === activeTestimonial ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === activeTestimonial ? '#F97316' : 'rgba(255,255,255,0.1)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }} />
                ))}
              </div>
              <div style={{ marginTop: 'clamp(24px, 6vw, 40px)' }}>
                <a 
                  href="https://www.google.com/search?sca_esv=5b6140ddc92cc316&sxsrf=ANbL-n7fAZ4f4lfLjX6vUmjopN5y30v-nw:1776009859023&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVLQBrtzGIudyLkjjOps2NKvrEGCVy2FH1GVnSvV9e5EoA_FIwz-RLMA8YqBN82ei2djquymbWW_ppdCrEHc--Ccq1ND-GZB55PEIQLZX-0aWn7VCQ%3D%3D&q=AG+SOLAR+SOLUTIONS+Reviews&sa=X&ved=2ahUKEwie2Y6m2OiTAxVrzjgGHU2ZBGkQ0bkNegQIMRAH&biw=1536&bih=730&dpr=1.25" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    background: 'linear-gradient(135deg, #F97316, #EA580C)',
                    padding: 'clamp(10px, 3vw, 12px) clamp(20px, 5vw, 28px)',
                    borderRadius: 40,
                    color: 'white',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: 'clamp(12px, 3vw, 14px)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    boxShadow: '0 4px 15px rgba(249,115,22,0.25)',
                  }}>
                  ⭐ Write a Review on Google
                </a>
              </div>
            </div>
          </div>
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
            <div style={{ fontSize: 'clamp(32px, 8vw, 40px)', marginBottom: 12 }}>☀️</div>
            <h2 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(1.4rem, 5vw, 2.5rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: 'clamp(12px, 3vw, 16px)'
            }}>
              Ready to Go Solar?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(13px, 3vw, 16px)', marginBottom: 'clamp(24px, 6vw, 32px)' }}>
              Join 500+ satisfied customers. Get a free consultation and custom quote today.
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
    </div>
  )
}