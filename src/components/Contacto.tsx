import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

interface FormData {
  nombre: string;
  email: string;
  empresa: string;
  mensaje: string;
}

// ⚠️ Reemplaza esto con tu ID de Formspree (ejemplo: 'xpzgvkrq')
const FORMSPREE_ID = 'mljdyqjg';

export function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          empresa: formData.empresa,
          mensaje: formData.mensaje,
          _subject: `Contacto MFO - ${formData.empresa || formData.nombre}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', email: '', empresa: '', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="contact section wrap">
      <div className="contact-box">
        <div>
          <div className="section-kicker" style={{ color: 'var(--lime)' }}>
            07 / CONTACTO
          </div>
          <h2 style={{ color: '#ffffff' }}>
            ¿Tenemos una oportunidad<br />
            <i style={{ color: '#ffffff' }}>para construir juntos?</i>
          </h2>
          <p>
            Si buscás un partner para desarrollar una marca en Argentina o explorar una oportunidad en bienestar, dejanos tu mensaje.
          </p>

          <div className="contact-info">
            <a href="mailto:info@grupomfo.com.ar">
              <Mail size={17} /> info@grupomfo.com.ar
            </a>
            <span>
              <MapPin size={17} /> Tandil · Buenos Aires · Argentina
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre y Apellido *"
              required
              value={formData.nombre}
              onChange={handleInputChange}
              disabled={status === 'submitting'}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico *"
              required
              value={formData.email}
              onChange={handleInputChange}
              disabled={status === 'submitting'}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="empresa"
              placeholder="Empresa / Marca"
              value={formData.empresa}
              onChange={handleInputChange}
              disabled={status === 'submitting'}
            />
          </div>
          <div className="form-group">
            <textarea
              name="mensaje"
              rows={4}
              placeholder="Escribí tu mensaje *"
              required
              value={formData.mensaje}
              onChange={handleInputChange}
              disabled={status === 'submitting'}
            />
          </div>

          {status === 'success' && (
            <div style={{ color: 'var(--lime)', fontSize: '0.9rem', marginBottom: '12px' }}>
              ✓ Mensaje enviado con éxito. Te responderemos a la brevedad.
            </div>
          )}

          {status === 'error' && (
            <div style={{ color: '#f87171', fontSize: '0.9rem', marginBottom: '12px' }}>
              ✕ Hubo un error al enviar. Por favor reintentá.
            </div>
          )}

          <button 
            type="submit" 
            className="light-button"
            disabled={status === 'submitting'}
            style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
          >
            {status === 'submitting' ? 'Enviando...' : (
              <>
                Enviar mensaje <Send size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
