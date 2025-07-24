import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, User, MessageSquare, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailto = `mailto:mustafabosnali03@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Ad Soyad: ${formData.name}\nE-posta: ${formData.email}\n\nMesaj:\n${formData.message}`
    )}`;

    window.location.href = mailto;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-dark-bg min-h-screen relative overflow-hidden">
      {/* Dekoratif 1 ve 0'lar */}
      {Array.from({ length: 18 }).map((_, i) => {
        const tops = [
          "top-2", "top-8", "top-14", "top-20", "top-28", "top-36", "top-44", "top-52", "top-60", "top-1/6", "top-1/4", "top-1/3", "top-1/2", "top-2/3", "top-3/4", "top-5/6"
        ];
        const lefts = [
          "left-2", "left-8", "left-14", "left-20", "left-28", "left-36", "left-44", "left-52", "left-60", "left-1/6", "left-1/4", "left-1/3", "left-1/2", "left-2/3", "left-3/4", "left-5/6", "right-2", "right-8", "right-14", "right-20", "right-28", "right-36", "right-44", "right-52", "right-60"
        ];
        const sizes = ["text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl"];
        const colors = ["text-cyan-300", "text-blue-300", "text-cyan-400", "text-blue-400", "text-cyan-200", "text-blue-200"];
        const opacities = ["opacity-60", "opacity-70", "opacity-80"];
        const yAnim = Math.random() > 0.5 ? { y: [0, Math.floor(Math.random()*40)-20, 0] } : { x: [0, Math.floor(Math.random()*40)-20, 0] };
        const duration = 6 + Math.random() * 6;
        const top = tops[Math.floor(Math.random() * tops.length)];
        const left = lefts[Math.floor(Math.random() * lefts.length)];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const opacity = opacities[Math.floor(Math.random() * opacities.length)];
        const digit = Math.random() > 0.5 ? "1" : "0";
        return (
          <motion.div
            key={i}
            animate={yAnim}
            transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute ${top} ${left} ${size} ${color} ${opacity} select-none font-bold pointer-events-none`}
          >
            {digit}
          </motion.div>
        );
      })}
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl font-bold text-white mb-8">İletişim</h2>
          <p className="text-2xl text-gray-900 max-w-5xl mx-auto leading-relaxed">Benimle iletişime geçmek için aşağıdaki formu kullanabilirsiniz</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-3xl p-16 bg-white shadow-[0_0_24px_0_#00f6ff99] border border-neon-blue flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-900 rounded-3xl flex items-center justify-center shadow-lg mx-auto mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-semibold text-gray-900 mb-4">Mesaj Gönder</h3>
            <p className="text-xl text-gray-900 leading-relaxed mb-8">Projeleriniz hakkında konuşmak veya işbirliği yapmak için benimle iletişime geçin</p>
            {/* Form alanları burada */}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
                    Ad Soyad
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-900" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:border-gray-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
                    E-posta
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-900" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:border-gray-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="E-posta adresiniz"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <label htmlFor="subject" className="block text-lg font-semibold text-gray-700 mb-2">
                  Konu
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-900" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:border-gray-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Mesaj konusu"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">
                  Mesaj
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 w-6 h-6 text-gray-900" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:border-gray-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-center pt-8"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-3 px-12 py-5 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-3xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto"
                >
                  <Send size={24} />
                  <span>Mesaj Gönder</span>
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 