import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

// Profil fotoğrafı import'u (alternatif yöntem)
const profilPhoto = process.env.PUBLIC_URL + '/mustafa_bosnali.jpg';

const Hero: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/mustafabsnl',
      icon: Github,
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mustafa-bosnal%C4%B1-3003452a4/',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:mustafabosnali03@gmail.com',
      icon: Mail,
      color: 'hover:text-red-600'
    }
  ];

  // CV indirme fonksiyonu
  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/mustafa_bosnali_CV.pdf';
    link.download = 'mustafa_bosnali_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-dark-bg">
      {/* Dekoratif 1 ve 0'lar */}
      {Array.from({ length: 18 }).map((_, i) => {
        // Daha geniş ve seyrek konumlandırma
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
            className={`absolute ${top} ${left} ${size} ${color} ${opacity} select-none font-bold pointer-events-none z-0`}
          >
            {digit}
          </motion.div>
        );
      })}
      <div className="flex flex-col items-center justify-center w-full relative z-10">
        <div className="rounded-3xl p-12 bg-white shadow-[0_0_24px_0_#00f6ff99] border border-neon-blue max-w-3xl w-full mx-auto flex flex-col items-center gap-8 mt-24 mb-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 mb-4">
            {/* Profil fotoğrafı */}
            <img src={profilPhoto} alt="Mustafa Bosnalı" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 text-center">Mustafa Bosnalı</h1>
          <h2 className="text-3xl md:text-4xl text-gray-900 font-medium text-center">Backend Developer</h2>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto leading-relaxed text-center">Karmaşık sistemleri sadeleştirmeyi, arka planda sorunsuz çalışan yapılar inşa etmeyi hedefleyen bir backend geliştiricisiyim.</p>
        </div>
        {/* Sosyal ikonlar ve butonlar */}
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-row items-center justify-center gap-6 mb-4">
            {/* Sosyal ikonlar: GitHub, LinkedIn, Mail */}
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-5 rounded-3xl bg-white shadow-xl ${link.color} transition-all duration-300 hover:shadow-2xl`}
              >
                <link.icon size={36} />
              </motion.a>
            ))}
          </div>
          <div className="flex flex-row items-center justify-center gap-6">
            {/* Butonlar: CV indir, İletişime Geç */}
            <button
              onClick={handleCVDownload}
              className="px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white rounded-3xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-4 text-xl"
            >
              <Download size={28} />
              <span>CV İndir</span>
            </button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white rounded-3xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-4 text-xl"
            >
              <Mail size={28} />
              <span>İletişime Geç</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;