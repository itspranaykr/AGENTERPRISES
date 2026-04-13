import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const team = [
  {
    name: 'Gunjesh Singh',
    role: 'Founder & CEO',
    exp: '10+ years in renewable energy',
    image: 'https://agsolar.in/founder.jpeg',
    quote: 'Making solar accessible for every Indian home'
  },
  {
    name: 'Priya Patel',
    role: 'Technical Director',
    exp: 'Solar expert with 8+ years, PhD Photovoltaics',
    image: 'https://agsolar.in/t1.png',
    quote: 'Innovation drives our solar solutions'
  },
  {
    name: 'Vikram Singh',
    role: 'Operations Head',
    exp: 'Project management, 500+ installs/year',
    image: 'https://agsolar.in/technical.jpeg',
    quote: 'Quality execution on every project'
  },
]

const whyUs = [
  { num: '01', title: 'Expert Team', desc: 'Certified engineers & technicians with decades of combined experience.', icon: '👨‍🔧' },
  { num: '02', title: 'Quality Products', desc: 'Only Tier-1 solar panels and components from reputed international brands.', icon: '⭐' },
  { num: '03', title: '25-Year Warranty', desc: 'Performance warranty on panels + 10-year warranty on other components.', icon: '🛡️' },
  { num: '04', title: 'End-to-End Service', desc: 'From consultation to installation and maintenance — we handle everything.', icon: '🔄' },
  { num: '05', title: 'Govt. Approved', desc: 'Empaneled with PM Surya Ghar and various government subsidy programs.', icon: '🏛️' },
  { num: '06', title: '24/7 Support', desc: 'Round-the-clock customer support and emergency maintenance services.', icon: '📞' },
]

const milestones = [
  { year: '2020', title: 'Company Founded', desc: 'Started with a vision of clean energy for all' },
  { year: '2021', title: 'First 100 Installations', desc: 'Reached milestone of 100 successful projects' },
  { year: '2022', title: 'Expanded to 5 Cities', desc: 'Grew operations across NCR region' },
  { year: '2023', title: '500+ Installations', desc: 'Crossed 500 solar systems installed' },
  { year: '2024', title: '1600+ Projects', desc: 'Became leading solar provider in North India' },
]

export default function About() {
  const [activeMilestone, setActiveMilestone] = useState(2)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMilestone(prev => (prev + 1) % milestones.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ paddingTop: 72, overflowX: 'hidden', width: '100%' }}>
      {/* Hero Section - FIXED */}
      <section style={{
        padding: 'clamp(60px, 15vw, 120px) clamp(16px, 5vw, 24px) clamp(60px, 10vw, 100px)',
        position: 'relative',
        background: 'linear-gradient(125deg, #0A0A0A 0%, #0F172A 100%)',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1000&h=800&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
        }} />
        <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(249,115,22,0.12)', top: -50, left: -50 }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="animate-fadeUp">
            <div className="section-label" style={{ marginBottom: 16 }}>✦ About AG Solar Solutions ✦</div>
            <h1 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(2rem, 8vw, 5rem)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: 'clamp(16px, 4vw, 24px)',
              maxWidth: 700
            }}>
              Powering a{' '}
              <span style={{
                background: 'linear-gradient(135deg, #F97316, #FBBF24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Sustainable<br />Future</span>
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: 'clamp(14px, 4vw, 18px)',
              maxWidth: 560,
              lineHeight: 1.6
            }}>
              Since 2020, we've been leading the solar revolution with innovative solutions and an unwavering commitment to excellence across North India.
            </p>
            <div style={{ display: 'flex', gap: 'clamp(12px, 4vw, 16px)', marginTop: 'clamp(32px, 8vw, 40px)', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Start Your Solar Journey →</Link>
              <a href="#story" className="btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - FIXED */}
      <div style={{
        background: '#0D0D0D',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: 'clamp(32px, 8vw, 40px) clamp(16px, 5vw, 24px)',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 'clamp(24px, 6vw, 32px)',
          textAlign: 'center'
        }}>
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '1600+', label: 'Projects Completed' },
            { value: '50+', label: 'Cities Served' },
            { value: '98%', label: 'Customer Satisfaction' },
          ].map((stat, i) => (
            <div key={i} style={{ flex: 1, minWidth: 'clamp(100px, 25vw, 120px)' }}>
              <div style={{ fontFamily: 'Syne', fontSize: 'clamp(28px, 6vw, 36px)', fontWeight: 800, color: '#F97316' }}>{stat.value}</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(11px, 3vw, 13px)', marginTop: 6 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section with Timeline - FIXED */}
      <section id="story" style={{ padding: 'clamp(50px, 10vw, 100px) clamp(16px, 5vw, 24px)', background: '#0A0A0A' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(40px, 8vw, 60px)',
            alignItems: 'center'
          }}>
            <div>
              <div className="section-label">Our Journey</div>
              <h2 style={{
                fontFamily: 'Syne',
                fontSize: 'clamp(1.8rem, 6vw, 3.2rem)',
                fontWeight: 800,
                color: 'white',
                marginBottom: 'clamp(16px, 4vw, 24px)'
              }}>
                From Vision to<br />Solar Revolution
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(14px, 3vw, 16px)', lineHeight: 1.7, marginBottom: 20 }}>
                Founded in 2020, AG Enterprises Solar Solutions began with a simple yet powerful vision: make clean, renewable energy accessible to every household and business in India.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(14px, 3vw, 16px)', lineHeight: 1.7, marginBottom: 32 }}>
                Today, we're proud to be one of North India's fastest-growing solar providers, having installed over 1,600 systems and helping customers save over ₹5 crores on electricity bills.
              </p>
              <div style={{ display: 'flex', gap: 'clamp(12px, 4vw, 20px)', flexWrap: 'wrap' }}>
                {[
                  { icon: '🏆', text: 'Award Winning Service' },
                  { icon: '⭐', text: '4.9 Star Rating' },
                  { icon: '✅', text: 'ISO Certified' },
                ].map((badge, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.03)', padding: '8px 16px', borderRadius: 40, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 'clamp(16px, 4vw, 18px)' }}>{badge.icon}</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(11px, 3vw, 13px)' }}>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(251,191,36,0.05))',
              borderRadius: 24,
              padding: 'clamp(24px, 6vw, 32px)',
              border: '1px solid rgba(249,115,22,0.2)',
            }}>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 700, color: 'white', marginBottom: 24, fontSize: 'clamp(18px, 4vw, 20px)' }}>Our Milestones</h3>
              <div style={{ position: 'relative', paddingLeft: 30 }}>
                <div style={{ position: 'absolute', left: 8, top: 0, bottom: 0, width: 2, background: 'rgba(249,115,22,0.3)' }} />
                {milestones.map((m, i) => (
                  <div key={i} style={{ position: 'relative', marginBottom: 32 }}>
                    <div style={{
                      position: 'absolute',
                      left: -26,
                      top: 4,
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      background: i === activeMilestone ? '#F97316' : 'rgba(249,115,22,0.3)',
                      transition: 'all 0.3s ease',
                    }} />
                    <div style={{ color: '#F97316', fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: 600, marginBottom: 4 }}>{m.year}</div>
                    <div style={{ color: 'white', fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 600, marginBottom: 4 }}>{m.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(11px, 2.5vw, 13px)' }}>{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Cards - FIXED */}
      <section style={{ padding: 'clamp(50px, 10vw, 100px) clamp(16px, 5vw, 24px)', background: '#0D0D0D' }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(24px, 5vw, 32px)',
          width: '100%'
        }}>
          {/* Mission Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(34,197,94,0.02))',
            border: '1px solid rgba(34,197,94,0.2)',
            borderRadius: 24,
            padding: 'clamp(32px, 6vw, 48px)',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ fontSize: 'clamp(40px, 8vw, 48px)', marginBottom: 20 }}>🎯</div>
            <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(24px, 5vw, 28px)', color: 'white', marginBottom: 20 }}>Our Mission</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {['Reduce greenhouse gas emissions', 'Minimize dependence on fossil fuels', 'Promote long-term sustainability', 'Lower energy costs for all'].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <span style={{ color: '#22C55E', fontSize: 12 }}>✓</span>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(13px, 3vw, 15px)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(249,115,22,0.08), rgba(251,191,36,0.02))',
            border: '1px solid rgba(249,115,22,0.2)',
            borderRadius: 24,
            padding: 'clamp(32px, 6vw, 48px)',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ fontSize: 'clamp(40px, 8vw, 48px)', marginBottom: 20 }}>🔭</div>
            <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(24px, 5vw, 28px)', color: 'white', marginBottom: 20 }}>Our Vision</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(14px, 3vw, 16px)', lineHeight: 1.7, marginBottom: 24 }}>
              To lead India's transition to clean energy by making solar power accessible, affordable, and reliable for every home and business.
            </p>
            <div style={{
              background: 'rgba(249,115,22,0.1)',
              padding: 'clamp(12px, 3vw, 16px)',
              borderRadius: 16,
              borderLeft: '3px solid #F97316',
            }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(12px, 3vw, 14px)', fontStyle: 'italic' }}>
                "Empowering India with the power of the sun — today and for generations to come."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - FIXED */}
      <section style={{ padding: 'clamp(50px, 10vw, 100px) clamp(16px, 5vw, 24px)', background: '#0A0A0A' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 10vw, 64px)' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Why Choose Us</div>
            <h2 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(1.8rem, 6vw, 3rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: 16
            }}>
              The AG Solar Advantage
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(14px, 3vw, 16px)', maxWidth: 600, margin: '0 auto' }}>
              What makes us the trusted choice for thousands of customers across North India
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(20px, 4vw, 24px)'
          }}>
            {whyUs.map((item, i) => (
              <div key={i} className="glass-card" style={{
                padding: 'clamp(20px, 4vw, 28px)',
                display: 'flex',
                gap: 20,
                transition: 'all 0.3s',
                cursor: 'pointer',
                flexWrap: 'wrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateX(8px)'
                e.currentTarget.style.borderLeft = `3px solid #F97316`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.borderLeft = '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{
                  width: 'clamp(50px, 10vw, 60px)',
                  height: 'clamp(50px, 10vw, 60px)',
                  background: 'rgba(249,115,22,0.1)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(24px, 5vw, 28px)',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 'clamp(16px, 4vw, 18px)', color: 'white', marginBottom: 8 }}>{item.title}</div>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(12px, 3vw, 14px)', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - FIXED */}
      <section style={{ padding: 'clamp(50px, 10vw, 100px) clamp(16px, 5vw, 24px)', background: '#0D0D0D' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 10vw, 64px)' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Leadership Team</div>
            <h2 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(1.8rem, 6vw, 3rem)',
              fontWeight: 800,
              color: 'white'
            }}>
              Meet Our Experts
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(14px, 3vw, 16px)', maxWidth: 500, margin: '16px auto 0' }}>
              Passionate professionals driving India's solar revolution
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(24px, 5vw, 32px)'
          }}>
            {team.map((member, i) => (
              <div key={i} className="glass-card" style={{
                overflow: 'hidden',
                transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{
                  height: 'clamp(240px, 40vw, 280px)',
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    padding: 20,
                  }}>
                    <div style={{ fontSize: 36, marginBottom: 8 }}>{member.emoji}</div>
                  </div>
                </div>
                <div style={{ padding: 'clamp(20px, 5vw, 24px)', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(18px, 4vw, 20px)', color: 'white', marginBottom: 4 }}>{member.name}</h3>
                  <div style={{ color: '#F97316', fontSize: 'clamp(11px, 3vw, 13px)', fontWeight: 600, marginBottom: 8 }}>{member.role}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(11px, 3vw, 13px)', marginBottom: 12 }}>{member.exp}</div>
                  <div style={{
                    background: 'rgba(249,115,22,0.1)',
                    padding: '10px 16px',
                    borderRadius: 20,
                    fontSize: 'clamp(11px, 3vw, 12px)',
                    color: 'rgba(255,255,255,0.6)',
                    fontStyle: 'italic',
                  }}>
                    "{member.quote}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications - FIXED */}
      <section style={{ padding: 'clamp(50px, 10vw, 100px) clamp(16px, 5vw, 24px)', background: '#0A0A0A' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 8vw, 48px)' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Credentials</div>
            <h2 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(1.8rem, 6vw, 3rem)',
              fontWeight: 800,
              color: 'white'
            }}>
              Registered & Certified
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'clamp(20px, 4vw, 24px)'
          }}>
            {[
              { label: 'GSTIN', value: '09EGKPK865H1ZS', icon: '🏛️', color: '#F97316' },
              { label: 'MSME Registration', value: 'UDYAM-UP-29-0138813', icon: '🏭', color: '#FBBF24' },
              { label: 'Electrical License', value: 'EC12345', icon: '⚡', color: '#22C55E' },
              { label: 'Solar Certification', value: 'SI78901', icon: '☀️', color: '#3B82F6' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ padding: 'clamp(24px, 5vw, 32px)', textAlign: 'center', transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{
                  width: 'clamp(60px, 12vw, 70px)',
                  height: 'clamp(60px, 12vw, 70px)',
                  background: `rgba(${item.color === '#F97316' ? '249,115,22' : item.color === '#FBBF24' ? '251,191,36' : item.color === '#22C55E' ? '34,197,94' : '59,130,246'}, 0.1)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <div style={{ fontSize: 'clamp(28px, 6vw, 32px)' }}>{item.icon}</div>
                </div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(10px, 2.5vw, 11px)', letterSpacing: '0.1em', marginBottom: 8 }}>{item.label}</div>
                <div style={{ fontFamily: 'Syne', fontWeight: 700, color: item.color, fontSize: 'clamp(12px, 3vw, 14px)', wordBreak: 'break-word' }}>{item.value}</div>
              </div>
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
              Ready to Join the Solar Revolution?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(13px, 3vw, 16px)', marginBottom: 'clamp(24px, 6vw, 32px)' }}>
              Get a free consultation and custom quote for your home or business today.
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