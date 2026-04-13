import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = ['All', 'Solar Panels', 'Batteries', 'Inverters', 'Accessories']

// Product images mapping (using Unsplash solar-related images)
const productImages = {
  1: 'https://agsolar.in/s1.jpg',
  2: 'https://agsolar.in/s2.jpg',
  3: 'https://agsolar.in/s3.jpg',
  4: 'https://agsolar.in/s4.jpg',
  5: 'https://agsolar.in/s5.jpg',
  6: 'https://agsolar.in/s6.jpg',
}

const products = [
  {
    id: 1,
    name: 'Hybrid Solar Complete Setup',
    category: 'Accessories',
    tag: 'Bestseller',
    tagColor: '#F97316',
    desc: 'Complete hybrid solar kit with panels, inverter, and battery storage.',
    price: 75000,
    originalPrice: 100000,
    discount: 25,
    rating: 4.8,
    reviews: 24,
    inStock: true,
    emoji: '⚡',
  },
  {
    id: 2,
    name: 'Luminous Complete Solar Setup',
    category: 'Accessories',
    tag: 'Popular',
    tagColor: '#22C55E',
    desc: 'Off-grid solar system kit by Luminous — reliable and efficient.',
    price: 65000,
    originalPrice: 100000,
    discount: 35,
    rating: 4.7,
    reviews: 18,
    inStock: true,
    emoji: '🔋',
  },
  {
    id: 3,
    name: 'Off-Grid Solar System Kit',
    category: 'Accessories',
    tag: 'New',
    tagColor: '#3B82F6',
    desc: 'Complete off-grid solar kit for homes and small businesses.',
    price: 54999,
    originalPrice: 99999,
    discount: 45,
    rating: 4.9,
    reviews: 32,
    inStock: true,
    emoji: '☀️',
  },
  {
    id: 4,
    name: 'Smarten Off-Grid Complete Kit',
    category: 'Inverters',
    tag: null,
    tagColor: null,
    desc: 'Smarten brand off-grid complete solar setup kit.',
    price: 38499,
    originalPrice: 38499,
    discount: 0,
    rating: 4.5,
    reviews: 8,
    inStock: false,
    emoji: '🔌',
  },
  {
    id: 5,
    name: 'UTL On-Grid Inverter',
    category: 'Inverters',
    tag: null,
    tagColor: null,
    desc: 'UTL brand on-grid solar inverter — trusted & reliable.',
    price: 39499,
    originalPrice: 39499,
    discount: 0,
    rating: 4.6,
    reviews: 8,
    inStock: false,
    emoji: '⚙️',
  },
  {
    id: 6,
    name: 'UTL Solar Panel',
    category: 'Solar Panels',
    tag: null,
    tagColor: null,
    desc: 'High-efficiency UTL solar panel for residential and commercial use.',
    price: 65499,
    originalPrice: 65499,
    discount: 0,
    rating: 4.7,
    reviews: 8,
    inStock: false,
    emoji: '🌞',
  },
]

function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN')
}

export default function EShop() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [checkoutDetails, setCheckoutDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id))
  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return removeFromCart(id)
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: newQty } : i))
  }

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const shipping = subtotal > 0 ? 0 : 0 // Free shipping
  const tax = subtotal * 0.18 // 18% GST
  const total = subtotal + shipping + tax
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)

  const handleCheckoutChange = (e) => {
    setCheckoutDetails({ ...checkoutDetails, [e.target.name]: e.target.value })
  }

  const sendOrderToWhatsApp = () => {
    if (!checkoutDetails.name || !checkoutDetails.phone || !checkoutDetails.address) {
      alert('Please fill in all required checkout fields')
      return
    }

    // Format order items
    const orderItems = cart.map(item => 
      `${item.name} x ${item.qty} = ${formatPrice(item.price * item.qty)}`
    ).join('\n')

    const message = `🛒 *NEW SOLAR ORDER* 🛒

━━━━━━━━━━━━━━━━━━━━━━
📋 *CUSTOMER DETAILS*
━━━━━━━━━━━━━━━━━━━━━━
Name: ${checkoutDetails.name}
Email: ${checkoutDetails.email || 'Not provided'}
Phone: ${checkoutDetails.phone}
Address: ${checkoutDetails.address}

━━━━━━━━━━━━━━━━━━━━━━
🛍️ *ORDER ITEMS*
━━━━━━━━━━━━━━━━━━━━━━
${orderItems}

━━━━━━━━━━━━━━━━━━━━━━
💰 *ORDER SUMMARY*
━━━━━━━━━━━━━━━━━━━━━━
Subtotal: ${formatPrice(subtotal)}
Shipping: ${formatPrice(shipping)}
Tax (18% GST): ${formatPrice(tax)}
━━━━━━━━━━━━━━━━━━━━━━
*TOTAL: ${formatPrice(total)}*
━━━━━━━━━━━━━━━━━━━━━━

Thank you for shopping with AG Solar! 🌞`

    window.open(`https://wa.me/917011669314?text=${encodeURIComponent(message)}`, '_blank')
    
    // Reset cart and checkout after order
    setCart([])
    setCheckoutDetails({ name: '', email: '', phone: '', address: '' })
    setShowCart(false)
  }

  return (
    <div style={{ paddingTop: 72, overflowX: 'hidden', width: '100%' }}>
      {/* Cart sidebar - FIXED for mobile */}
      {showCart && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          display: 'flex', justifyContent: 'flex-end',
        }}>
          <div onClick={() => setShowCart(false)} style={{ flex: 1, background: 'rgba(0,0,0,0.6)' }} />
          <div style={{
            width: 'min(480px, 90vw)',
            background: '#111',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', flexDirection: 'column',
            height: '100%', overflowY: 'auto',
          }}>
            <div style={{ padding: 'clamp(16px, 4vw, 24px)', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(18px, 4vw, 20px)', color: 'white' }}>Your Cart ({cartCount})</h3>
              <button onClick={() => setShowCart(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: 20 }}>✕</button>
            </div>
            
            {cart.length === 0 ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.3)', padding: 'clamp(20px, 5vw, 40px)', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(40px, 10vw, 48px)', marginBottom: 16 }}>🛒</div>
                <p>Your cart is empty</p>
                <button onClick={() => setShowCart(false)} className="btn-primary" style={{ marginTop: 20 }}>Continue Shopping</button>
              </div>
            ) : (
              <>
                <div style={{ flex: 1, padding: 'clamp(16px, 4vw, 24px)', overflowY: 'auto' }}>
                  {/* Cart Items */}
                  {cart.map(item => (
                    <div key={item.id} style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 12, padding: 'clamp(12px, 3vw, 16px)',
                      marginBottom: 12,
                    }}>
                      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <img 
                          src={productImages[item.id]} 
                          alt={item.name}
                          style={{ width: 60, height: 60, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }}
                        />
                        <div style={{ flex: 1, minWidth: '150px' }}>
                          <div style={{ fontFamily: 'Syne', fontWeight: 700, color: 'white', fontSize: 'clamp(13px, 3vw, 14px)', marginBottom: 4 }}>{item.name}</div>
                          <div style={{ color: '#F97316', fontWeight: 600, fontSize: 'clamp(12px, 3vw, 13px)' }}>{formatPrice(item.price)}</div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
                            <button 
                              onClick={() => updateQuantity(item.id, item.qty - 1)}
                              style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 4, padding: '4px 8px', cursor: 'pointer', color: 'white' }}
                            >-</button>
                            <span style={{ color: 'white', fontSize: 14 }}>{item.qty}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.qty + 1)}
                              style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 4, padding: '4px 8px', cursor: 'pointer', color: 'white' }}
                            >+</button>
                          </div>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#EF4444', borderRadius: 6, padding: '4px 8px', cursor: 'pointer', fontSize: 12 }}>✕</button>
                      </div>
                    </div>
                  ))}

                  {/* Checkout Form */}
                  <div style={{ marginTop: 24 }}>
                    <h4 style={{ fontFamily: 'Syne', fontWeight: 700, color: 'white', marginBottom: 16 }}>Checkout Details</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={checkoutDetails.name}
                        onChange={handleCheckoutChange}
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '12px', color: 'white', fontSize: 'clamp(13px, 3vw, 14px)', outline: 'none', width: '100%' }}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={checkoutDetails.email}
                        onChange={handleCheckoutChange}
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '12px', color: 'white', fontSize: 'clamp(13px, 3vw, 14px)', outline: 'none', width: '100%' }}
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={checkoutDetails.phone}
                        onChange={handleCheckoutChange}
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '12px', color: 'white', fontSize: 'clamp(13px, 3vw, 14px)', outline: 'none', width: '100%' }}
                      />
                      <textarea
                        name="address"
                        placeholder="Delivery Address *"
                        value={checkoutDetails.address}
                        onChange={handleCheckoutChange}
                        rows={3}
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '12px', color: 'white', fontSize: 'clamp(13px, 3vw, 14px)', outline: 'none', resize: 'vertical', width: '100%' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div style={{ padding: 'clamp(16px, 4vw, 24px)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(13px, 3vw, 14px)' }}>Subtotal</span>
                      <span style={{ color: 'white' }}>{formatPrice(subtotal)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(13px, 3vw, 14px)' }}>Shipping</span>
                      <span style={{ color: 'white' }}>{formatPrice(shipping)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(13px, 3vw, 14px)' }}>Tax (18% GST)</span>
                      <span style={{ color: 'white' }}>{formatPrice(tax)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.08)', flexWrap: 'wrap', gap: 8 }}>
                      <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(16px, 4vw, 18px)', color: 'white' }}>Total</span>
                      <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(16px, 4vw, 18px)', color: '#F97316' }}>{formatPrice(total)}</span>
                    </div>
                  </div>
                  <button onClick={sendOrderToWhatsApp} className="btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%' }}>
                    📱 Place Order on WhatsApp
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Hero - FIXED */}
      <section style={{ padding: 'clamp(60px, 15vw, 100px) clamp(16px, 5vw, 24px) clamp(40px, 10vw, 80px)', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(249,115,22,0.08)', top: -100, right: -100 }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="section-label">Solar Shop</div>
            <h1 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: 16
            }}>
              Solar <span className="gradient-text">Products</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(14px, 3vw, 17px)' }}>
              High-quality solar products for your home and business
            </p>
          </div>
          <button onClick={() => setShowCart(true)} style={{
            background: 'rgba(249,115,22,0.1)',
            border: '1px solid rgba(249,115,22,0.3)',
            color: 'white',
            padding: 'clamp(12px, 3vw, 14px) clamp(20px, 5vw, 28px)',
            borderRadius: 12,
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 12,
            fontFamily: 'Syne', fontWeight: 700, fontSize: 'clamp(13px, 3vw, 15px)',
          }}>
            🛒 Cart
            {cartCount > 0 && (
              <span style={{
                background: '#F97316',
                color: 'white',
                borderRadius: '50%',
                width: 22, height: 22,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 800,
              }}>{cartCount}</span>
            )}
          </button>
        </div>
      </section>

      {/* Filter tabs - FIXED */}
      <section style={{ padding: '0 clamp(16px, 5vw, 24px) 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 'clamp(8px, 2vw, 12px)', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 22px)',
              borderRadius: 40,
              border: activeCategory === cat ? 'none' : '1px solid rgba(255,255,255,0.1)',
              background: activeCategory === cat ? 'linear-gradient(135deg, #F97316, #EA580C)' : 'rgba(255,255,255,0.03)',
              color: 'white',
              fontFamily: 'Syne', fontWeight: 600, fontSize: 'clamp(12px, 3vw, 14px)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products grid - FIXED */}
      <section style={{ padding: '0 clamp(16px, 5vw, 24px) 100px', background: '#0D0D0D' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', paddingTop: 40, width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(20px, 4vw, 24px)'
          }}>
            {filtered.map(product => (
              <div key={product.id} className="glass-card" style={{
                padding: 'clamp(20px, 5vw, 28px)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s',
                opacity: product.inStock ? 1 : 0.65,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => product.inStock && (e.currentTarget.style.transform = 'translateY(-6px)')}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Tags */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
                  {product.tag ? (
                    <span style={{
                      background: `${product.tagColor}15`,
                      border: `1px solid ${product.tagColor}40`,
                      color: product.tagColor,
                      padding: '3px 10px', borderRadius: 20,
                      fontSize: 'clamp(9px, 2.5vw, 10px)', fontWeight: 700, letterSpacing: '0.08em',
                    }}>{product.tag}</span>
                  ) : <span />}
                  {!product.inStock && (
                    <span style={{
                      background: 'rgba(239,68,68,0.1)',
                      border: '1px solid rgba(239,68,68,0.3)',
                      color: '#EF4444',
                      padding: '3px 10px', borderRadius: 20,
                      fontSize: 'clamp(9px, 2.5vw, 10px)', fontWeight: 700,
                    }}>Out of Stock</span>
                  )}
                </div>

                {/* Product Image */}
                <div style={{
                  marginBottom: 16,
                  borderRadius: 12,
                  overflow: 'hidden',
                  background: 'rgba(0,0,0,0.3)',
                }}>
                  <img 
                    src={productImages[product.id]} 
                    alt={product.name}
                    style={{ 
                      width: '100%', 
                      height: 'clamp(140px, 30vw, 180px)', 
                      objectFit: 'cover',
                      transition: 'transform 0.3s',
                    }}
                    onMouseEnter={e => product.inStock && (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>

                {/* Info */}
                <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(16px, 4vw, 17px)', color: 'white', marginBottom: 8 }}>{product.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(12px, 2.5vw, 13px)', lineHeight: 1.5, marginBottom: 16 }}>{product.desc}</p>

                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
                  <span style={{ color: '#FBBF24', fontSize: 'clamp(12px, 3vw, 13px)' }}>★</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(12px, 3vw, 13px)' }}>{product.rating} ({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 12px)', marginBottom: 20, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(18px, 5vw, 22px)', color: 'white' }}>
                    {formatPrice(product.price)}
                  </span>
                  {product.discount > 0 && (
                    <>
                      <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 'clamp(12px, 3vw, 14px)', textDecoration: 'line-through' }}>
                        {formatPrice(product.originalPrice)}
                      </span>
                      <span style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', color: '#22C55E', padding: '2px 8px', borderRadius: 20, fontSize: 'clamp(10px, 2.5vw, 11px)', fontWeight: 700 }}>
                        {product.discount}% off
                      </span>
                    </>
                  )}
                </div>

                {/* Add to cart */}
                {product.inStock ? (
                  <button onClick={() => addToCart(product)} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 'clamp(13px, 3vw, 14px)', marginTop: 'auto' }}>
                    🛒 Add to Cart
                  </button>
                ) : (
                  <Link to="/contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: 'clamp(13px, 3vw, 14px)', textAlign: 'center', marginTop: 'auto' }}>
                    Notify Me
                  </Link>
                )}
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
              Need Help Choosing?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(13px, 3vw, 16px)', marginBottom: 'clamp(24px, 6vw, 32px)' }}>
              Our solar experts are ready to help you select the perfect products for your needs.
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