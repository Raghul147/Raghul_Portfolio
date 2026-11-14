import { useState } from 'react';
import { profile } from '../data.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = `Project enquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget || 'Not specified'}\n\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const whatsapp = `https://wa.me/${profile.phoneIntl}?text=${encodeURIComponent("Hi Raghul, I saw your portfolio and I'd like to discuss a project.")}`;

  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div className="contact__info reveal">
          <span className="eyebrow">Contact</span>
          <h2>Let's build something together.</h2>
          <p>Tell me about your project and I'll get back to you within 24 hours.</p>
          <div className="contact__cards">
            <a className="contact__card" href={`tel:+${profile.phoneIntl}`}>
              <span>📞</span>
              <div><small>Call</small><strong>+91 {profile.phone}</strong></div>
            </a>
            <a className="contact__card" href={whatsapp} target="_blank" rel="noreferrer">
              <span>💬</span>
              <div><small>WhatsApp</small><strong>Chat with me</strong></div>
            </a>
            <a className="contact__card" href={`mailto:${profile.email}`}>
              <span>✉️</span>
              <div><small>Email</small><strong>{profile.email}</strong></div>
            </a>
          </div>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <form className="contact__form reveal" onSubmit={submit}>
          <label>
            Your name
            <input name="name" value={form.name} onChange={update} required placeholder="John Doe" />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={update} required placeholder="john@company.com" />
          </label>
          <label>
            Budget (optional)
            <select name="budget" value={form.budget} onChange={update}>
              <option value="">Select a range</option>
              <option>Under ₹25,000</option>
              <option>₹25,000 – ₹75,000</option>
              <option>₹75,000 – ₹2,00,000</option>
              <option>₹2,00,000+</option>
            </select>
          </label>
          <label>
            Project details
            <textarea name="message" rows="5" value={form.message} onChange={update} required placeholder="What would you like to build?" />
          </label>
          <button className="btn btn--primary btn--block" type="submit">Send enquiry</button>
        </form>
      </div>
    </section>
  );
}
