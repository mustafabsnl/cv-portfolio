import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Mail as MailIcon } from 'lucide-react';

const references = [
  {
    name: 'Yakup Emre AKALIN',
    email: 'emre.akalin@altinay.com',
    title: 'ALTINAY Technology Group şirketinde Area Manager'
  }
];

const References: React.FC = () => {
  return (
    <section id="references" className="py-12 pb-16 bg-dark-bg relative overflow-hidden">
      {/* Dekoratif 1 ve 0'lar */}
      {Array.from({ length: 12 }).map((_, i) => {
        const tops = [
          "top-2", "top-8", "top-14", "top-20", "top-28", "top-36", "top-44", "top-52", "top-60", "top-1/6", "top-1/4", "top-1/3", "top-1/2"
        ];
        const lefts = [
          "left-2", "left-8", "left-14", "left-20", "left-28", "left-36", "left-44", "left-52", "left-60", "left-1/6", "left-1/4", "left-1/3", "left-1/2", "right-2", "right-8", "right-14", "right-20"
        ];
        const sizes = ["text-2xl", "text-3xl", "text-4xl", "text-5xl"];
        const colors = ["text-blue-300", "text-blue-400", "text-blue-200"];
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
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-6xl font-bold text-white mb-8">Referanslar</h2>
          <p className="text-2xl text-gray-900 max-w-5xl mx-auto leading-relaxed">Hakkımda söylenenler ve işbirliği yapılan kişilerden alınan referanslar</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-4">
          {references.map((ref, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 0, scale: 1.05 }}
              transition={{ duration: 0.6, type: 'spring' }}
              viewport={{ once: true }}
              className="rounded-2xl p-12 bg-white shadow-[0_0_24px_0_#00f6ff99] border-2 border-neon-blue flex flex-col items-center max-w-xl mx-auto"
            >
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mb-2">
                <User className="w-10 h-10 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-900 mb-1">{ref.name}</span>
              <span className="text-base italic text-gray-500 mb-1">{ref.title}</span>
              <a href={`mailto:${ref.email}`} className="flex items-center gap-2 text-blue-700 hover:underline mt-2">
                <MailIcon className="w-5 h-5" />
                <span>{ref.email}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References; 