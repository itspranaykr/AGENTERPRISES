import { useState, useEffect, useRef } from 'react'

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hello! I'm AgSolar Assistant. How can I help you with solar solutions today?" }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  // Close chat on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [open])

  // ✅ CONNECTED TO YOUR BACKEND
  const sendToGPT = async (userMessage) => {
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
      })

      if (!response.ok) throw new Error('API failed')

      const data = await response.json()

      setMessages(prev => [
        ...prev,
        { from: 'bot', text: data.reply }
      ])

    } catch (error) {
      console.error('Error:', error)

      const fallbackReply = getFallbackReply(userMessage)

      setMessages(prev => [
        ...prev,
        { from: 'bot', text: fallbackReply }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // ✅ FALLBACK (if backend fails)
  const getFallbackReply = (msg) => {
    const m = msg.toLowerCase()

    if (m.includes('price') || m.includes('cost')) {
      return "Our solar systems start from ₹54,999. Contact us at +91 7011669314 for a custom quote."
    }

    if (m.includes('install') || m.includes('time')) {
      return "Installation takes 3–7 days. Call +91 7011669314 to schedule."
    }

    if (m.includes('subsidy')) {
      return "Government subsidy up to 40% available under PM Surya Ghar scheme."
    }

    if (m.includes('service') || m.includes('maintenance')) {
      return "Maintenance starts from ₹3,000/year including cleaning & inspection."
    }

    return "Please share more details or call +91 7011669314 for assistance."
  }

  const send = async () => {
    if (!input.trim() || isLoading) return

    const userMsg = input.trim()

    setMessages(prev => [
      ...prev,
      { from: 'user', text: userMsg }
    ])

    setInput('')
    await sendToGPT(userMsg)
  }

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .pulse {
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }

        /* Hide scrollbar but keep functionality */
        .chat-messages::-webkit-scrollbar {
          width: 4px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: #F97316;
          border-radius: 4px;
        }
      `}</style>

      {/* BUTTON - FIXED for mobile touch */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat with us"
        style={{
          position: 'fixed',
          bottom: 'clamp(16px, 4vw, 28px)',
          right: 'clamp(16px, 4vw, 28px)',
          width: 'clamp(50px, 12vw, 60px)',
          height: 'clamp(50px, 12vw, 60px)',
          borderRadius: '50%',
          background: '#F97316',
          border: 'none',
          cursor: 'pointer',
          color: 'white',
          fontSize: 'clamp(20px, 5vw, 24px)',
          zIndex: 9999,
          boxShadow: '0 4px 20px rgba(249,115,22,0.4)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'
          e.currentTarget.style.boxShadow = '0 6px 25px rgba(249,115,22,0.6)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(249,115,22,0.4)'
        }}
      >
        {open ? '✕' : '☀️'}
      </button>

      {/* CHAT BOX - FULLY RESPONSIVE */}
      {open && (
        <>
          {/* Backdrop overlay for mobile - closes chat when clicking outside */}
          <div
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 9997,
              display: 'block',
            }}
          />
          
          <div style={{
            position: 'fixed',
            bottom: 'clamp(80px, 15vw, 100px)',
            right: 'clamp(16px, 4vw, 28px)',
            left: 'clamp(16px, 4vw, auto)',
            width: 'min(400px, calc(100vw - 32px))',
            height: 'min(600px, calc(100vh - 120px))',
            background: '#111',
            borderRadius: 'clamp(12px, 3vw, 16px)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 9998,
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.1)',
            animation: 'fadeUp 0.3s ease',
          }}>

            {/* HEADER - FIXED */}
            <div style={{
              background: '#F97316',
              padding: 'clamp(10px, 3vw, 12px)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span>AgSolar Assistant {isLoading && ' (Typing...)'}</span>
              {/* Close button for mobile */}
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  fontSize: 'clamp(18px, 4vw, 20px)',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>

            {/* MESSAGES - FIXED scrolling */}
            <div className="chat-messages" style={{
              flex: 1,
              padding: 'clamp(10px, 3vw, 12px)',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(6px, 2vw, 8px)',
            }}>
              {messages.map((msg, i) => (
                <div key={i} style={{
                  textAlign: msg.from === 'user' ? 'right' : 'left',
                  maxWidth: '85%',
                  alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                }}>
                  <span style={{
                    display: 'inline-block',
                    padding: 'clamp(8px, 2.5vw, 10px) clamp(12px, 3vw, 14px)',
                    borderRadius: 'clamp(10px, 2.5vw, 12px)',
                    background: msg.from === 'user' ? '#F97316' : '#333',
                    color: 'white',
                    fontSize: 'clamp(12px, 3vw, 13px)',
                    lineHeight: 1.5,
                    wordBreak: 'break-word',
                    maxWidth: '100%',
                  }}>
                    {msg.text}
                  </span>
                </div>
              ))}

              {isLoading && (
                <div style={{ textAlign: 'left' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: 'clamp(8px, 2.5vw, 10px) clamp(12px, 3vw, 14px)',
                    borderRadius: 'clamp(10px, 2.5vw, 12px)',
                    background: '#333',
                    color: 'white',
                    fontSize: 'clamp(12px, 3vw, 13px)',
                  }}>
                    <span className="pulse">Typing...</span>
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* QUICK BUTTONS - FIXED wrapping */}
            <div style={{
              padding: 'clamp(8px, 2vw, 10px)',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(4px, 1.5vw, 6px)',
            }}>
              {['Price', 'Subsidy', 'Installation', 'Maintenance', 'Warranty', 'Contact'].map(q => (
                <button key={q}
                  onClick={() => {
                    if (isLoading) return
                    setMessages(prev => [...prev, { from: 'user', text: q }])
                    sendToGPT(q)
                  }}
                  style={{
                    padding: 'clamp(6px, 2vw, 8px) clamp(10px, 2.5vw, 12px)',
                    background: '#222',
                    color: '#F97316',
                    border: '1px solid #F97316',
                    borderRadius: 'clamp(16px, 4vw, 20px)',
                    cursor: 'pointer',
                    fontSize: 'clamp(10px, 2.5vw, 11px)',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#F97316'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#222'
                    e.currentTarget.style.color = '#F97316'
                  }}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* INPUT - FIXED for mobile */}
            <div style={{
              display: 'flex',
              padding: 'clamp(10px, 3vw, 12px)',
              gap: 'clamp(8px, 2vw, 10px)',
              background: '#111',
            }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Ask me anything..."
                style={{
                  flex: 1,
                  padding: 'clamp(10px, 3vw, 12px)',
                  borderRadius: 'clamp(8px, 2vw, 10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'white',
                  fontSize: 'clamp(13px, 3vw, 14px)',
                  outline: 'none',
                }}
              />

              <button onClick={send} style={{
                background: '#F97316',
                color: 'white',
                border: 'none',
                padding: 'clamp(10px, 3vw, 12px)',
                borderRadius: 'clamp(8px, 2vw, 10px)',
                cursor: 'pointer',
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 'clamp(44px, 12vw, 50px)',
              }}>
                →
              </button>
            </div>

            {/* Optional: Quick contact button */}
            <div style={{
              padding: 'clamp(6px, 2vw, 8px)',
              textAlign: 'center',
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <a
                href="tel:+917011669314"
                style={{
                  color: '#F97316',
                  textDecoration: 'none',
                  fontSize: 'clamp(11px, 2.5vw, 12px)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                📞 Need immediate help? Call us
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}