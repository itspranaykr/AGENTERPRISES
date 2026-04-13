import { useState } from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    category: 'Solar Basics',
    color: '#F97316',
    title: 'What is a Solar Panel? How Does it Work?',
    excerpt: 'A solar panel is a collection of photovoltaic cells that convert sunlight into electricity. These cells are arranged in a grid-like pattern on the surface of solar panels, making them efficient power generators.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    emoji: '☀️',
    link: '/blog/solar-basics',
    externalLink: 'https://www.nationalgrid.com/stories/energy-explained/how-does-solar-power-work'
  },
  {
    id: 2,
    category: 'Batteries',
    color: '#3B82F6',
    title: 'Everything You Need to Know About Lithium Batteries',
    excerpt: 'Batteries that have lithium as their anode are called lithium batteries. The charge moves from anode to cathode during discharge. Lithium batteries have revolutionized solar energy storage since the 1980s.',
    date: 'Feb 28, 2024',
    readTime: '7 min read',
    emoji: '🔋',
    link: '/blog/lithium-batteries',
    externalLink: 'https://www.cei.washington.edu/research/energy-storage/lithium-ion-battery/'
  },
  {
    id: 3,
    category: 'Inverters',
    color: '#22C55E',
    title: 'Solar Inverters: The Heart of Your Solar System',
    excerpt: 'A Solar Inverter converts direct current (DC) from solar panels into alternating current (AC) used by domestic and commercial appliances. It is one of the most critical components of any solar power system.',
    date: 'Jan 20, 2024',
    readTime: '6 min read',
    emoji: '⚡',
    link: '/blog/solar-inverters',
    externalLink: 'https://natlawreview.com/press-releases/powering-future-growatt-expands-its-leadership-solar-energy-across-uae'
  },
  {
    id: 4,
    category: 'Government Schemes',
    color: '#8B5CF6',
    title: 'PM Surya Ghar Scheme: Get 40% Solar Subsidy in 2024',
    excerpt: 'The government launched PM Surya Ghar Muft Bijli Yojana to provide free electricity to 1 crore households. Learn how to apply and get up to 40% subsidy on your residential solar installation.',
    date: 'Dec 10, 2023',
    readTime: '8 min read',
    emoji: '🏛️',
    link: '/blog/pm-surya-ghar',
    externalLink: 'https://www.myscheme.gov.in/schemes/pmsgmb'
  },
  {
    id: 5,
    category: 'Maintenance',
    color: '#06B6D4',
    title: 'How to Maintain Your Solar System for Maximum Efficiency',
    excerpt: 'Regular maintenance is key to keeping your solar panels at peak performance. Learn the best practices for panel cleaning, inverter monitoring, and battery care to ensure long-term savings.',
    date: 'Nov 5, 2023',
    readTime: '4 min read',
    emoji: '🔧',
    link: '/blog/solar-maintenance',
    externalLink: 'https://www.tatapower.com/blogs/solar-panel-maintenance-guide-efficiency-tips-and-lifespan-benefits'
  },
  {
    id: 6,
    category: 'Savings',
    color: '#EF4444',
    title: 'How Much Can You Really Save with Solar in India?',
    excerpt: 'With electricity prices rising every year, going solar makes more financial sense than ever. A typical 5kW system in North India can save ₹80,000–₹1,20,000 annually on electricity bills.',
    date: 'Oct 18, 2023',
    readTime: '6 min read',
    emoji: '💰',
    link: '/blog/solar-savings',
    externalLink: 'https://www.tatapower.com/blogs/how-going-solar-turns-energy-costs-into-tax-benefits-in-india'
  },
]

// Helper component for read button
const ReadButton = ({ post }) => {
  const handleClick = () => {
    if (post.externalLink) {
      window.open(post.externalLink, '_blank', 'noopener noreferrer')
    }
  }

  if (post.externalLink) {
    return (
      <button 
        className="btn-primary"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      >
        Read Article on External Site →
      </button>
    )
  }

  return (
    <Link to={post.link} style={{ textDecoration: 'none' }}>
      <button className="btn-primary">Read Article →</button>
    </Link>
  )
}

// Helper component for card read link
const CardReadLink = ({ post }) => {
  const handleClick = () => {
    if (post.externalLink) {
      window.open(post.externalLink, '_blank', 'noopener noreferrer')
    }
  }

  if (post.externalLink) {
    return (
      <span 
        onClick={handleClick}
        style={{ 
          color: post.color, 
          fontSize: 14, 
          fontWeight: 600,
          cursor: 'pointer',
          textDecoration: 'none'
        }}
      >
        Read on External Site →
      </span>
    )
  }

  return (
    <Link to={post.link} style={{ textDecoration: 'none' }}>
      <span style={{ color: post.color, fontSize: 14, fontWeight: 600 }}>Read →</span>
    </Link>
  )
}

export default function Blog() {
  const [featured, ...rest] = posts
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async () => {
    // Validate email
    if (!email) {
      setMessage('Please enter your email address')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    setIsLoading(true)
    setMessage('')

    try {
      const subject = `New Newsletter Subscription: ${email}`
      const body = `New subscriber email: ${email}\n\nSubscribed at: ${new Date().toLocaleString()}`
      window.location.href = `mailto:itspranaykr26@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      setMessage('Thank you for subscribing! Check your email client to confirm.')
      
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]')
      if (!subscribers.includes(email)) {
        subscribers.push(email)
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers))
      }
      
      setEmail('')
      setTimeout(() => setMessage(''), 5000)
    } catch (error) {
      setMessage('Error subscribing. Please try again.')
      setTimeout(() => setMessage(''), 3000)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe()
    }
  }

  return (
    <div style={{ paddingTop: 72, overflowX: 'hidden', width: '100%' }}>
      {/* Hero - FIXED */}
      <section style={{
        padding: 'clamp(60px, 15vw, 100px) clamp(16px, 5vw, 24px) clamp(40px, 10vw, 80px)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(249,115,22,0.08)', top: -100, right: -100 }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', textAlign: 'center', width: '100%' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Knowledge Hub</div>
          <h1 style={{
            fontFamily: 'Syne',
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: 'clamp(16px, 4vw, 24px)'
          }}>
            Solar <span className="gradient-text">Blog</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: 'clamp(14px, 4vw, 18px)',
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Guides, tips, and the latest updates from the world of solar energy — all in one place.
          </p>
        </div>
      </section>

      {/* Featured post - FIXED */}
      <section style={{ padding: '0 clamp(16px, 5vw, 24px) 80px', background: '#0D0D0D' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', paddingTop: 40, width: '100%' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(251,191,36,0.05))',
            border: '1px solid rgba(249,115,22,0.2)',
            borderRadius: 24,
            padding: 'clamp(24px, 6vw, 48px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(24px, 6vw, 48px)',
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                background: `${featured.color}15`,
                border: `1px solid ${featured.color}40`,
                color: featured.color,
                padding: '4px 12px',
                borderRadius: 20,
                fontSize: 'clamp(10px, 2.5vw, 11px)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                marginBottom: 20,
              }}>{featured.category}</div>
              <h2 style={{
                fontFamily: 'Syne',
                fontWeight: 800,
                fontSize: 'clamp(1.3rem, 5vw, 2.2rem)',
                color: 'white',
                lineHeight: 1.2,
                marginBottom: 16
              }}>
                {featured.title}
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: 'clamp(13px, 3vw, 15px)',
                lineHeight: 1.7,
                marginBottom: 28
              }}>
                {featured.excerpt}
              </p>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 28, flexWrap: 'wrap' }}>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 'clamp(12px, 3vw, 13px)' }}>📅 {featured.date}</span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 'clamp(12px, 3vw, 13px)' }}>⏱ {featured.readTime}</span>
              </div>
              <ReadButton post={featured} />
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'clamp(80px, 20vw, 120px)',
              filter: 'drop-shadow(0 0 30px rgba(249,115,22,0.3))',
            }}>
              {featured.emoji}
            </div>
          </div>
        </div>
      </section>

      {/* All posts - FIXED */}
      <section style={{ padding: '0 clamp(16px, 5vw, 24px) 100px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <h2 style={{
            fontFamily: 'Syne',
            fontWeight: 800,
            fontSize: 'clamp(22px, 5vw, 28px)',
            color: 'white',
            marginBottom: 'clamp(24px, 6vw, 32px)'
          }}>More Articles</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(20px, 4vw, 24px)'
          }}>
            {rest.map(post => (
              <div key={post.id} className="glass-card" style={{
                padding: 'clamp(20px, 5vw, 28px)',
                transition: 'transform 0.3s',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
                  <span style={{
                    background: `${post.color}15`,
                    border: `1px solid ${post.color}40`,
                    color: post.color,
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: 'clamp(9px, 2.5vw, 10px)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                  }}>{post.category}</span>
                  <span style={{ fontSize: 'clamp(28px, 6vw, 32px)' }}>{post.emoji}</span>
                </div>
                <h3 style={{
                  fontFamily: 'Syne',
                  fontWeight: 800,
                  fontSize: 'clamp(15px, 4vw, 17px)',
                  color: 'white',
                  marginBottom: 12,
                  lineHeight: 1.3
                }}>
                  {post.title}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: 'clamp(12px, 2.5vw, 13px)',
                  lineHeight: 1.6,
                  marginBottom: 20,
                  flex: 1
                }}>
                  {post.excerpt.slice(0, 120)}...
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 'clamp(11px, 2.5vw, 12px)' }}>📅 {post.date}</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 'clamp(11px, 2.5vw, 12px)' }}>⏱ {post.readTime}</span>
                  </div>
                  <CardReadLink post={post} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA - FIXED */}
      <section style={{ padding: 'clamp(40px, 10vw, 80px) clamp(16px, 5vw, 24px)', background: '#0D0D0D' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', width: '100%' }}>
          <div style={{ fontSize: 'clamp(32px, 8vw, 40px)', marginBottom: 20 }}>📧</div>
          <h2 style={{
            fontFamily: 'Syne',
            fontWeight: 800,
            fontSize: 'clamp(22px, 5vw, 28px)',
            color: 'white',
            marginBottom: 'clamp(12px, 3vw, 12px)'
          }}>
            Stay Updated on Solar
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: 'clamp(13px, 3vw, 15px)',
            marginBottom: 'clamp(24px, 6vw, 32px)'
          }}>
            Get the latest solar tips, scheme updates, and industry news delivered to your inbox.
          </p>
          <div style={{ display: 'flex', gap: 12, maxWidth: 440, margin: '0 auto', flexDirection: 'column', width: '100%' }}>
            <div style={{ display: 'flex', gap: 12, flexDirection: 'row', flexWrap: 'wrap' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  minWidth: '200px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  padding: 'clamp(12px, 3vw, 14px) clamp(14px, 4vw, 18px)',
                  color: 'white',
                  fontSize: 'clamp(13px, 3vw, 14px)',
                  outline: 'none',
                  fontFamily: 'DM Sans',
                }}
              />
              <button 
                className="btn-primary" 
                onClick={handleSubscribe}
                disabled={isLoading}
                style={{ 
                  whiteSpace: 'nowrap',
                  opacity: isLoading ? 0.7 : 1,
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  padding: 'clamp(10px, 2.5vw, 12px) clamp(20px, 5vw, 28px)',
                }}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {message && (
              <div style={{
                marginTop: 12,
                padding: 'clamp(8px, 2vw, 10px)',
                borderRadius: 8,
                background: message.includes('Thank you') ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                color: message.includes('Thank you') ? '#22C55E' : '#EF4444',
                fontSize: 'clamp(12px, 3vw, 13px)',
                textAlign: 'center',
                wordBreak: 'break-word',
              }}>
                {message}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}