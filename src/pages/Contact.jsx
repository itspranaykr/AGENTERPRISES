import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    subject: '', 
    message: '' 
  })

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'solar-installation', label: 'Solar Installation' },
    { value: 'maintenance', label: 'Maintenance & Service' },
    { value: 'battery', label: 'Battery Solutions' },
    { value: 'commercial', label: 'Commercial Project' },
    { value: 'subsidy', label: 'Government Subsidy' },
    { value: 'other', label: 'Other' }
  ]

  const faqs = [
    {
      question: "How long does a solar installation take?",
      answer: "Residential installations typically take 3-7 days, depending on the system size and complexity. Commercial installations may take 2-4 weeks. We provide a detailed timeline during the consultation phase."
    },
    {
      question: "What maintenance do solar panels require?",
      answer: "Solar panels require minimal maintenance. We recommend cleaning them every 6 months and checking for any debris or shading issues. We offer maintenance packages to ensure optimal performance."
    },
    {
      question: "Do you provide financing options?",
      answer: "Yes, we offer various financing options including EMI plans, loans through partner banks, and lease options. We can help you choose the best financial solution for your needs."
    },
    {
      question: "What warranties do you offer?",
      answer: "We provide 25-year performance warranty on panels, 10-year warranty on inverters, and 5-year workmanship warranty. Our products come with manufacturer warranties as well."
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: 'f', url: 'https://www.facebook.com/Agsolarsolutionsindia', color: '#1877F2' },
    { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/agsolarsolutionsindia/', color: '#E4405F' },
    { name: 'X (Twitter)', icon: '🐦', url: 'https://x.com/AGsolarIndia', color: '#1DA1F2' },
    { name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com/company/agsolar', color: '#0A66C2' },
    { name: 'YouTube', icon: '▶️', url: 'https://youtube.com/@agsolar', color: '#FF0000' },
    { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/917011669314', color: '#25D366' }
  ]

  const [openFaq, setOpenFaq] = useState(null)

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  
  const submit = e => {
    e.preventDefault()
    const selectedSubject = subjectOptions.find(opt => opt.value === form.subject)?.label || form.subject
    const msg = `NEW CONTACT INQUIRY FROM WEBSITE

━━━━━━━━━━━━━━━━━━━━━━
📋 CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Subject: ${selectedSubject}
Message: ${form.message}
━━━━━━━━━━━━━━━━━━━━━━
Sent via Contact Form`

    window.open(`https://wa.me/917011669314?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div style={{ paddingTop: 72, overflowX: 'hidden', width: '100%' }}>
      {/* Hero Section */}
      <section style={{ padding: 'clamp(60px, 15vw, 100px) clamp(16px, 5vw, 24px) clamp(40px, 10vw, 80px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div className="section-label">Get In Touch</div>
          <h1 style={{
            fontFamily: 'Syne',
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            fontWeight: 800,
            color: 'white',
            marginBottom: 'clamp(16px, 4vw, 24px)'
          }}>
            Contact <span className="gradient-text">Us</span>
          </h1>
          
          {/* Contact Form and Info Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(32px, 6vw, 64px)',
            marginBottom: 'clamp(40px, 10vw, 80px)'
          }}>
            {/* Form */}
            <div>
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <input 
                  name="name" 
                  type="text" 
                  placeholder="Your Name"
                  value={form.name} 
                  onChange={handle} 
                  required
                  style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10, padding:'clamp(12px, 3vw, 14px) clamp(14px, 4vw, 18px)', color:'white', fontSize:'clamp(13px, 3vw, 15px)', outline:'none', fontFamily:'DM Sans', width:'100%' }}
                />
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Email Address"
                  value={form.email} 
                  onChange={handle} 
                  required
                  style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10, padding:'clamp(12px, 3vw, 14px) clamp(14px, 4vw, 18px)', color:'white', fontSize:'clamp(13px, 3vw, 15px)', outline:'none', fontFamily:'DM Sans', width:'100%' }}
                />
                <input 
                  name="phone" 
                  type="tel" 
                  placeholder="Phone Number"
                  value={form.phone} 
                  onChange={handle} 
                  required
                  style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10, padding:'clamp(12px, 3vw, 14px) clamp(14px, 4vw, 18px)', color:'white', fontSize:'clamp(13px, 3vw, 15px)', outline:'none', fontFamily:'DM Sans', width:'100%' }}
                />
                
                {/* Subject Dropdown */}
                <select 
                  name="subject" 
                  value={form.subject} 
                  onChange={handle} 
                  required
                  style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10, padding:'clamp(12px, 3vw, 14px) clamp(14px, 4vw, 18px)', color:'white', fontSize:'clamp(13px, 3vw, 15px)', outline:'none', fontFamily:'DM Sans', cursor:'pointer', width:'100%' }}
                >
                  <option value="" disabled style={{ background:'#1a1a1a' }}>Select Subject</option>
                  {subjectOptions.map(option => (
                    <option key={option.value} value={option.value} style={{ background:'#1a1a1a' }}>
                      {option.label}
                    </option>
                  ))}
                </select>
                
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  value={form.message}
                  onChange={handle} 
                  required 
                  rows={5}
                  style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10, padding:'clamp(12px, 3vw, 14px) clamp(14px, 4vw, 18px)', color:'white', fontSize:'clamp(13px, 3vw, 15px)', outline:'none', fontFamily:'DM Sans', resize:'vertical', width:'100%' }}
                />
                <button type="submit" className="btn-primary" style={{ justifyContent:'center' }}>📱 Send to WhatsApp</button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 4vw, 24px)' }}>
              {[
                { icon:'📍', label:'Address', value:'Chotpur Rd, near Kali mata mandir, Bahlolpur, Noida, Uttar Pradesh 201301' },
                { icon:'📞', label:'Phone', value:'+91 7011669314' },
                { icon:'✉️', label:'Email', value:'agsolarsolutions008@gmail.com' },
                { icon:'🕐', label:'Hours', value:'Mon–Sun: 9AM – 10PM' },
              ].map(item => (
                <div key={item.label} className="glass-card" style={{ padding: 'clamp(16px, 4vw, 24px)', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <div style={{ fontSize: 'clamp(24px, 6vw, 28px)', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ color:'rgba(255,255,255,0.4)', fontSize:'clamp(11px, 3vw, 12px)', marginBottom:4 }}>{item.label}</div>
                    <div style={{ color:'white', fontFamily:'Syne', fontWeight:600, fontSize:'clamp(13px, 3vw, 14px)', wordBreak:'break-word' }}>{item.value}</div>
                  </div>
                </div>
              ))}
              
              {/* GSTIN & Registration and Social Media Side by Side */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                gap: 'clamp(16px, 4vw, 24px)'
              }}>
                {/* GSTIN & Registration */}
                <div className="glass-card" style={{ padding: 'clamp(16px, 4vw, 24px)' }}>
                  <div style={{ fontFamily:'Syne', fontWeight:700, color:'white', marginBottom:12, fontSize:'clamp(14px, 3.5vw, 16px)' }}>GSTIN & Registration</div>
                  <div style={{ color:'rgba(255,255,255,0.4)', fontSize:'clamp(12px, 3vw, 13px)', lineHeight:1.8, wordBreak:'break-word' }}>
                    GSTIN: 09EGKPK865H1ZS<br/>
                    MSME: UDYAM-UP-29-0138813
                  </div>
                </div>

                {/* Social Media Section */}
                <div className="glass-card" style={{ padding: 'clamp(16px, 4vw, 24px)' }}>
                  <div style={{ fontFamily:'Syne', fontWeight:700, color:'white', marginBottom:16, textAlign:'center', fontSize:'clamp(14px, 3.5vw, 16px)' }}>
                    Connect With Us
                  </div>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gap: 'clamp(8px, 2vw, 12px)'
                  }}>
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 6,
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: 8,
                          padding: 'clamp(8px, 2vw, 10px) clamp(4px, 1.5vw, 6px)',
                          textDecoration: 'none',
                          transition: 'all 0.3s',
                          fontSize: 'clamp(9px, 2.5vw, 11px)',
                          fontWeight: 500,
                          color: 'white',
                          textAlign: 'center'
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = `${social.color}20`
                          e.currentTarget.style.borderColor = social.color
                          e.currentTarget.style.transform = 'translateY(-3px)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                          e.currentTarget.style.transform = 'translateY(0)'
                        }}
                      >
                        <span style={{ 
                          fontSize: social.name === 'Facebook' || social.name === 'LinkedIn' ? 'clamp(18px, 4vw, 20px)' : 'clamp(20px, 5vw, 22px)',
                          fontWeight: social.name === 'Facebook' || social.name === 'LinkedIn' ? 'bold' : 'normal'
                        }}>
                          {social.icon}
                        </span>
                        <span style={{ fontSize: 'clamp(8px, 2vw, 10px)' }}>{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Need Quick Support Button */}
              <div className="glass-card" style={{ padding: 'clamp(16px, 4vw, 24px)', textAlign: 'center' }}>
                <div style={{ fontFamily:'Syne', fontWeight:700, color:'white', marginBottom:12, fontSize:'clamp(14px, 3.5vw, 16px)' }}>Need Quick Support?</div>
                <a 
                  href="tel:+917011669314"
                  style={{ 
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #F97316, #EA580C)',
                    color: 'white',
                    padding: 'clamp(8px, 2vw, 10px) clamp(20px, 5vw, 24px)',
                    borderRadius: 10,
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: 'clamp(13px, 3vw, 14px)',
                    marginTop: 8,
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  📞 Call Us Now
                </a>
              </div>
            </div>
          </div>

          {/* Google Map Section - UPDATED with CORRECT LOCATION */}
          <div style={{ marginBottom: 'clamp(40px, 10vw, 80px)' }}>
            <h2 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(1.3rem, 5vw, 2rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: 'clamp(24px, 6vw, 32px)',
              textAlign: 'center'
            }}>
              Our <span className="gradient-text">Location</span>
            </h2>
            <div className="glass-card" style={{ padding: 0, overflow: 'hidden', borderRadius: 24 }}>
              {/* 
                UPDATED MAP: Using your exact Google Maps embed code
                - Location: AG SOLAR SOLUTIONS, Chotpur Rd, near Kali mata mandir, Bahlolpur, Noida
                - Map shows correct pin/marker at your office location
                - Responsive width (100%) with proper height
              */}
              <iframe
                title="AG Solar Solutions - Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8129724212104!2d77.401796375288!3d28.605387075679584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef007ab95247%3A0x232ae599bacf2e07!2sAG%20SOLAR%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1776062665087!5m2!1sen!2sin"
                width="100%"
                height="clamp(350px, 50vw, 450px)"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div style={{ padding: 'clamp(16px, 4vw, 20px)', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', background: 'rgba(0,0,0,0.3)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(12px, 4vw, 24px)', flexWrap: 'wrap' }}>
                  <a 
                    href="https://maps.app.goo.gl/StZxeU3MBhwKZewT7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#F97316', 
                      textDecoration: 'none', 
                      fontSize: 'clamp(13px, 3.5vw, 15px)',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      background: 'rgba(249,115,22,0.1)',
                      padding: '8px 16px',
                      borderRadius: 30,
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(249,115,22,0.2)'
                      e.currentTarget.style.transform = 'scale(1.02)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(249,115,22,0.1)'
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    📍 Open in Google Maps for Directions
                  </a>
                  <a 
                    href="https://maps.app.goo.gl/4iP5v9rZ9c5DiKuDA"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none', 
                      fontSize: 'clamp(13px, 3.5vw, 15px)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    🚗 Get Driving Directions
                  </a>
                </div>
                <div style={{ 
                  marginTop: 12, 
                  fontSize: 'clamp(11px, 3vw, 13px)', 
                  color: 'rgba(255,255,255,0.5)',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 16,
                  flexWrap: 'wrap'
                }}>
                  <span>📍 Landmark: Near Kali Mata Mandir</span>
                  <span>📍 Location: Chotpur Road, Bahlolpur</span>
                  <span>🏢 A|G ENTERPRISES Office</span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 style={{
              fontFamily: 'Syne',
              fontSize: 'clamp(1.3rem, 5vw, 2rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: 'clamp(24px, 6vw, 32px)',
              textAlign: 'center'
            }}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 3vw, 16px)' }}>
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                  <button
                    onClick={() => toggleFaq(index)}
                    style={{
                      width: '100%',
                      padding: 'clamp(16px, 4vw, 20px) clamp(20px, 5vw, 24px)',
                      background: 'transparent',
                      border: 'none',
                      color: 'white',
                      fontSize: 'clamp(14px, 3.5vw, 18px)',
                      fontWeight: 600,
                      fontFamily: 'Syne',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 12,
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <span>{faq.question}</span>
                    <span style={{ 
                      fontSize: 'clamp(18px, 4vw, 24px)', 
                      transition: 'transform 0.3s',
                      transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0)',
                      flexShrink: 0
                    }}>
                      ▼
                    </span>
                  </button>
                  <div style={{
                    maxHeight: openFaq === index ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease-out',
                    borderTop: openFaq === index ? '1px solid rgba(255,255,255,0.1)' : 'none'
                  }}>
                    <div style={{ padding: 'clamp(16px, 4vw, 20px) clamp(20px, 5vw, 24px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontSize: 'clamp(13px, 3vw, 15px)' }}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
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