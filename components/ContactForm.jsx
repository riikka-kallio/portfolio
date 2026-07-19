import { useState, useRef } from "react";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const loadedAtRef = useRef(Date.now());

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: email,
          message: message,
          honeypot: honeypot,
          loadedAt: loadedAtRef.current,
        }),
      });

      const data = await res.json();

      if (res.ok && data.status === 'success') {
        alert('I have received your message. I will reach out to you as soon as possible.');
        setFullName('');
        setEmail('');
        setMessage('');
        setSent(true);
        setTimeout(() => setSent(false), 3000);
      } else {
        alert('Oops. Something went wrong. Please try again.');
      }
    } catch (error) {
      console.log(error);
      alert('Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <h2>Contact Form</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Honeypot: hidden from real users, filled by bots */}
          <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <button type="submit" className="contact-form-btn" disabled={sent}>
            {sent ? 'Sent' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
