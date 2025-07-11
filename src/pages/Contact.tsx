// src/pages/Contact.tsx
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_lc7haxo',
        'template_4j1mtul',
        form.current,
        'MqkqeRWso-JGuzZYB'
      ).then(() => {
        alert("Gửi email thành công!");
        form.current?.reset();
      }, (error) => {
        alert("Lỗi khi gửi email: " + error.text);
      });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Liên hệ với chúng tôi</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Email của bạn:</label>
          <input type="email" name="from_email" required />

          <label>Nội dung:</label>
          <textarea name="message" rows={6} required />

          <button type="submit">Gửi</button>
        </form>
      </div>

      <div className="contact-info">
        <h3>Email liên hệ:</h3>
        <ul>
          <li>📧 luoiconnhamn562@gmail.com</li>
          <li>📧 longxuyendinhcao@gmail.com</li>
          <li>📧 gougleowner@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
