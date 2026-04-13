import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const services = [
  {
    title: 'Rooftop Solar Installation',
    tag: 'Most Popular',
    tagColor: '#F97316',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&h=400&fit=crop',
    features: ['On-grid and off-grid systems', 'Residential & commercial', 'Custom solutions', 'Full commissioning'],
    desc: 'Transform your unused rooftop into a power generation unit. We handle everything from site assessment to final commissioning.',
  },
  {
    title: 'Tin Shade Solar Installation',
    tag: 'Dual Purpose',
    tagColor: '#3B82F6',
    icon: '🌿',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
    features: ['Shade + power generation', 'Agricultural applications', 'Weather-resistant designs', 'Long-term performance'],
    desc: 'Our solar shade solutions provide both protection and power generation, perfect for farms, parking lots, and outdoor areas.',
  },
  {
    title: 'Ground Solar Installation',
    tag: 'Large Scale',
    tagColor: '#22C55E',
    icon: '🏔️',
    image: 'https://enerparc.in/wp-content/uploads/2024/08/div.overlay-2.webp',
    features: ['Ideal for open land', 'High-capacity systems', 'Optimal tilt adjustments', 'Maximum efficiency'],
    desc: 'For properties with available land, our ground-mounted systems offer excellent efficiency with customizable configurations.',
  },
  {
    title: 'Solar System Maintenance',
    tag: 'Ongoing',
    tagColor: '#8B5CF6',
    icon: '🔧',
    image: 'https://www.inertialelectric.com/Content/files/contentImages/Solar/SolarMaintenance.jpg',
    features: ['Regular cleaning', 'Performance monitoring', 'Warranty support', 'Emergency services'],
    desc: 'Keep your solar system at peak efficiency with our maintenance packages. Scheduled visits and emergency support included.',
  },
  {
    title: 'Solar Pump Installation',
    tag: 'Agricultural',
    tagColor: '#06B6D4',
    icon: '💧',
    image: 'https://alpexsolar.com/resources/wp-content/uploads/2025/10/Untitled-1-2.webp',
    features: ['Irrigation solutions', 'DC and AC pumps', 'Remote monitoring', 'Farm & garden systems'],
    desc: 'Reliable water pumping solutions powered by solar energy, designed for farms, gardens, and remote water supply needs.',
  },
  {
    title: 'VFD & Solar Integration',
    tag: 'Industrial',
    tagColor: '#EF4444',
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
    features: ['Motor control solutions', 'Energy savings up to 40%', 'Industrial applications', 'VFD + solar combo'],
    desc: 'Combine Variable Frequency Drives with solar power for optimal motor control and maximum energy efficiency in industrial use.',
  },
]

const systemTypes = [
  {
    title: 'Off-Grid System',
    icon: '🔋',
    color: '#22C55E',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
    desc: 'Completely independent from the power grid. Uses solar panels + batteries. Ideal for remote locations or areas with power cuts.',
    pros: ['No electricity bill', 'Power during outages', 'Complete independence', 'Ideal for remote areas'],
  },
  {
    title: 'On-Grid System',
    icon: '⚡',
    color: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&h=400&fit=crop',
    desc: 'Connected to the utility grid. Export excess power and earn credits (net metering). Best for urban homes and businesses.',
    pros: ['Net metering credits', 'Lower initial cost', 'No battery needed', 'Government subsidy eligible'],
  },
  {
    title: 'Hybrid System',
    icon: '☀️',
    color: '#F97316',
    image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=600&h=400&fit=crop',
    desc: 'Best of both worlds — grid connected with battery backup. Uninterrupted power with maximum savings.',
    pros: ['Backup power', 'Grid + battery', 'Maximum savings', 'Future-proof setup'],
  },
]

const benefits = [
  { icon: '🏅', title: 'Certified Experts', desc: 'Certified solar professionals with extensive industry experience.' },
  { icon: '⚡', title: 'Quality Equipment', desc: 'Tier-1 solar components from reputable manufacturers only.' },
  { icon: '🛡️', title: 'Comprehensive Warranty', desc: '25-year performance warranty on panels, 10-year on other parts.' },
  { icon: '💰', title: 'Cost Savings', desc: 'Reduce your electricity bills by up to 90% with efficient systems.' },
  { icon: '📞', title: '24/7 Support', desc: 'Round-the-clock customer support for all your solar needs.' },
  { icon: '🌱', title: 'Eco-Friendly', desc: 'Reduce carbon footprint with clean, renewable energy sources.' },
]

function FadeInOnScroll({ children }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease-out' }}>
      {children}
    </div>
  )
}

export default function Services() {
  return (
    <div style={{ paddingTop: 72, overflowX: 'hidden', width: '100%' }}>
      {/* Hero Section - FIXED */}
      <section style={{
        padding: 'clamp(60px, 15vw, 120px) clamp(16px, 5vw, 24px) clamp(60px, 10vw, 100px)',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0A0A0A 0%, #0F172A 100%)',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
        }} />
        <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(249,115,22,0.1)', top: -100, right: -100 }} />
        <div className="glow-orb" style={{ width: 300, height: 300, background: 'rgba(34,197,94,0.05)', bottom: -50, left: -50 }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', textAlign: 'center', zIndex: 2, width: '100%' }}>
          <div className="section-label" style={{ justifyContent: 'center', animation: 'fadeUp 0.6s ease-out' }}>✦ What We Do ✦</div>
          <h1 style={{
            fontFamily: 'Syne',
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: 'clamp(16px, 4vw, 24px)',
            animation: 'fadeUp 0.6s ease-out 0.1s both',
          }}>
            Our Solar <span className="gradient-text">Services</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 'clamp(14px, 4vw, 18px)',
            maxWidth: 560,
            margin: '0 auto',
            lineHeight: 1.6,
            animation: 'fadeUp 0.6s ease-out 0.2s both',
          }}>
            Comprehensive solar solutions tailored to your specific needs — from consultation to installation and lifetime support.
          </p>
        </div>
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* Services Grid - FIXED */}
      <section style={{ padding: 'clamp(40px, 10vw, 80px) clamp(16px, 5vw, 24px)', background: '#0D0D0D' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(24px, 5vw, 28px)'
          }}>
            {services.map((s, i) => (
              <FadeInOnScroll key={i}>
                <div className="glass-card" style={{
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
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
                    height: 'clamp(160px, 30vw, 200px)',
                    backgroundImage: `url(${s.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      background: `${s.tagColor}`,
                      padding: '4px 12px',
                      borderRadius: 20,
                      fontSize: 'clamp(10px, 2.5vw, 11px)',
                      fontWeight: 600,
                      color: 'white',
                    }}>
                      {s.tag}
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: 16,
                      left: 16,
                      background: 'rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: 40,
                      padding: '6px 14px',
                      fontSize: 'clamp(20px, 5vw, 24px)',
                    }}>
                      {s.icon}
                    </div>
                  </div>
                  <div style={{ padding: 'clamp(20px, 5vw, 28px)', flex: 1 }}>
                    <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(18px, 4vw, 20px)', color: 'white', marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(13px, 3vw, 14px)', lineHeight: 1.6, marginBottom: 20 }}>{s.desc}</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
                      {s.features.map((f, j) => (
                        <li key={j} style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(12px, 2.5vw, 13px)' }}>
                          <span style={{ color: '#22C55E', flexShrink: 0 }}>✓</span> <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: 13, display: 'inline-block' }}>
                      Get Quote →
                    </Link>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* System Types - FIXED */}
      <section style={{
        padding: 'clamp(50px, 10vw, 100px) clamp(16px, 5vw, 24px)',
        background: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          right: -100,
          top: '20%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(249,115,22,0.08), transparent)',
          borderRadius: '50%',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 10vw, 64px)' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>System Types</div>
            <h2 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(1.8rem, 6vw, 3rem)',
              fontWeight: 800,
              color: 'white'
            }}>
              Choose Your Solar System
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(14px, 3vw, 16px)', maxWidth: 500, margin: '16px auto 0' }}>
              Select the perfect solar solution for your energy needs
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(24px, 5vw, 32px)'
          }}>
            {systemTypes.map((sys, i) => (
              <FadeInOnScroll key={i}>
                <div style={{
                  borderRadius: 20,
                  overflow: 'hidden',
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{
                    height: 'clamp(150px, 25vw, 180px)',
                    backgroundImage: `url(${sys.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                  }}>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(135deg, ${sys.color}40, transparent)`,
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: 16,
                      left: 16,
                      fontSize: 'clamp(28px, 6vw, 36px)',
                    }}>
                      {sys.icon}
                    </div>
                  </div>
                  <div style={{
                    padding: 'clamp(20px, 5vw, 28px)',
                    background: `linear-gradient(135deg, rgba(${sys.color === '#22C55E' ? '34,197,94' : sys.color === '#3B82F6' ? '59,130,246' : '249,115,22'},0.1) 0%, transparent 60%)`,
                    border: `1px solid ${sys.color}25`,
                    borderTop: 'none',
                    borderRadius: '0 0 20px 20px',
                    flex: 1,
                  }}>
                    <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(18px, 4vw, 22px)', color: 'white', marginBottom: 12 }}>{sys.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(13px, 3vw, 14px)', lineHeight: 1.6, marginBottom: 20 }}>{sys.desc}</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {sys.pros.map((p, j) => (
                        <li key={j} style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(12px, 2.5vw, 13px)' }}>
                          <span style={{ color: sys.color, flexShrink: 0 }}>●</span> <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - FIXED */}
      <section style={{
        padding: 'clamp(50px, 10vw, 100px) clamp(16px, 5vw, 24px)',
        background: '#0D0D0D',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          left: '-10%',
          bottom: '10%',
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(34,197,94,0.06), transparent)',
          borderRadius: '50%',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 10vw, 64px)' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Why Choose Us</div>
            <h2 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(1.8rem, 6vw, 3rem)',
              fontWeight: 800,
              color: 'white'
            }}>
              Why Choose Our Services?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(14px, 3vw, 16px)', maxWidth: 500, margin: '16px auto 0' }}>
              What makes AG Solar the trusted choice for thousands of customers
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(20px, 4vw, 24px)'
          }}>
            {benefits.map((b, i) => (
              <FadeInOnScroll key={i}>
                <div className="glass-card" style={{
                  padding: 'clamp(20px, 5vw, 28px)',
                  display: 'flex',
                  gap: 'clamp(12px, 3vw, 16px)',
                  alignItems: 'flex-start',
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                  flexWrap: 'wrap',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateX(6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
                  <div style={{
                    width: 'clamp(45px, 10vw, 50px)',
                    height: 'clamp(45px, 10vw, 50px)',
                    background: 'rgba(249,115,22,0.1)',
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(22px, 5vw, 26px)',
                    flexShrink: 0,
                  }}>{b.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 'clamp(14px, 3.5vw, 16px)', color: 'white', marginBottom: 6 }}>{b.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(12px, 2.5vw, 13px)', lineHeight: 1.5 }}>{b.desc}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
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
              Ready to Start Your Solar Journey?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(13px, 3vw, 16px)', marginBottom: 'clamp(24px, 6vw, 32px)' }}>
              Get a free site assessment and customized quote within 24 hours.
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