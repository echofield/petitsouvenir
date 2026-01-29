/**
 * Petit Souvenir — Contribute (/contribute)
 * Leave a trace. No rules, no promise, no timeline.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { supabase } from '../../utils/supabase/client';

const serif = 'Cormorant Garamond, Georgia, serif';
const sans = 'Inter, sans-serif';
const green = '#0E3F2F';
const muted = { color: '#2B2B2B', opacity: 0.7 };

const TYPE_OPTIONS = [
  { value: 'Hotel', label: 'Hotel' },
  { value: 'Table', label: 'Table' },
  { value: 'Café', label: 'Café' },
  { value: 'Bookshop', label: 'Bookshop' },
  { value: 'Culture', label: 'Culture' },
  { value: 'Care', label: 'Care' },
  { value: 'Other', label: 'Other' },
];

const ARCHETYPE_OPTIONS = [
  { value: 'bohemian', label: 'Bohemian' },
  { value: 'other', label: 'Other' },
];

const labelStyle = {
  display: 'block' as const,
  fontFamily: sans,
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color: '#2B2B2B',
  opacity: 0.6,
  marginBottom: 6,
};

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  fontFamily: serif,
  fontSize: 15,
  fontWeight: 300,
  color: '#2B2B2B',
  background: 'transparent',
  border: '0.5px solid rgba(14, 63, 47, 0.2)',
  marginBottom: 20,
};

export default function Contribute() {
  const navigate = useNavigate();
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [gesture, setGesture] = useState('');
  const [archetypes, setArchetypes] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleArchetype = (v: string) => {
    setArchetypes((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const { error: err } = await supabase.from('partner_requests').insert({
        type: type.trim(),
        name: name.trim(),
        address: address.trim(),
        website: website.trim() || null,
        contact_email: contactEmail.trim(),
        gesture: gesture.trim(),
        archetypes: archetypes.length ? archetypes : [],
        notes: notes.trim() || null,
      });
      if (err) throw err;
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not leave trace.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <BackButton onBack={() => navigate('/')} label="Back" />
      <section
        style={{
          maxWidth: 640,
          margin: '0 auto',
          padding: '120px 40px 80px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: serif,
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: green,
            marginBottom: 12,
            lineHeight: 1.3,
          }}
        >
          Contribute
        </h1>
        <p
          style={{
            fontFamily: serif,
            fontSize: 17,
            fontWeight: 300,
            fontStyle: 'italic',
            ...muted,
            marginBottom: 48,
            lineHeight: 1.6,
          }}
        >
          Some gestures belong to the city more than to commerce.
        </p>

        <div
          style={{
            textAlign: 'center',
            maxWidth: 480,
            margin: '0 auto 48px',
            fontFamily: serif,
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 1.9,
            ...muted,
          }}
        >
          <p style={{ marginBottom: 12 }}>Some places offer more than what appears on the menu.</p>
          <p style={{ marginBottom: 12 }}>A gesture.</p>
          <p style={{ marginBottom: 12 }}>A way of welcoming.</p>
          <p style={{ marginBottom: 12 }}>A detail that cannot be copied.</p>
          <p style={{ marginBottom: 12 }}>
            If your place carries something of that nature, you may leave a trace below.
          </p>
          <p style={{ marginBottom: 0 }}>That&rsquo;s it.</p>
        </div>

        {submitted ? (
          <p
            style={{
              fontFamily: serif,
              fontSize: 18,
              fontWeight: 400,
              color: green,
              lineHeight: 1.6,
            }}
          >
            Trace left.
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ textAlign: 'left', maxWidth: 480, margin: '0 auto' }}>
            <label style={labelStyle}>Nature of the place</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              style={inputStyle}
            >
              <option value="">—</option>
              {TYPE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>

            <label style={labelStyle}>Place name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />

            <label style={labelStyle}>Where it is</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              style={inputStyle}
            />

            <label style={labelStyle}>Website (if any)</label>
            <input
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="https://"
              style={inputStyle}
            />

            <label style={labelStyle}>A way to reach you</label>
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
              style={inputStyle}
            />

            <label style={labelStyle}>Is there a gesture your place already carries?</label>
            <textarea
              value={gesture}
              onChange={(e) => setGesture(e.target.value)}
              required
              rows={4}
              style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }}
            />

            <label style={labelStyle}>Which world does it resonate with?</label>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
              {ARCHETYPE_OPTIONS.map((o) => (
                <label
                  key={o.value}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: serif,
                    fontSize: 15,
                    fontWeight: 300,
                    color: '#2B2B2B',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={archetypes.includes(o.value)}
                    onChange={() => toggleArchetype(o.value)}
                  />
                  {o.label}
                </label>
              ))}
            </div>

            <label style={labelStyle}>Anything else you wish to share</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              style={{ ...inputStyle, resize: 'vertical', minHeight: 60 }}
            />

            {error && (
              <p style={{ fontFamily: sans, fontSize: 12, color: '#8b3a3a', marginBottom: 16 }}>{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              style={{
                fontFamily: sans,
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '14px 28px',
                background: 'transparent',
                color: green,
                border: '0.5px solid rgba(14, 63, 47, 0.3)',
                cursor: submitting ? 'wait' : 'pointer',
                opacity: submitting ? 0.7 : 1,
                transition: 'all 400ms ease',
              }}
            >
              {submitting ? 'Leaving…' : 'Leave a trace'}
            </button>
          </form>
        )}
      </section>
    </>
  );
}
