import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { icon: Mail, label: 'Email', value: 'mustafabosnali03@gmail.com' },
    { icon: Phone, label: 'Telefon', value: '+90 542 593 3448' },
    { icon: MapPin, label: 'Konum', value: 'Afyonkarahisar, Türkiye' },
  ];

  const education = [
    {
      degree: 'Bilgisayar Mühendisliği',
      school: 'Selçuk Üniversitesi',
      period: '2023 - 2027',
      gpa: '3.33',
      description: 'Bilgisayar bilimleri, algoritma analizi ve yazılım geliştirme konularında kapsamlı eğitim.'
    }
  ];

  const interests = [
    'Backend Geliştirme',
    'Yapay Zeka',
    'Görüntü İşleme',
    'Veri Bilimi',
    'Makine Öğrenmesi',
    'Robotik',
    'ROS (Robot Operating System)',
    'Otonom \n Sistemler'
  ];

  return (
    <section id="about" className="py-32 bg-dark-bg min-h-screen relative overflow-hidden">
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
          <h2 className="text-6xl font-bold text-white mb-8">
            Hakkımda
          </h2>
          <p className="text-2xl text-white max-w-5xl mx-auto leading-relaxed">
          Akıllı sistemler, yapay zeka, makine öğrenmesi ve görüntü işleme gibi ileri teknolojiler üzerine çalışan; farklı sektörlerdeki gerçek dünya problemlerine yenilikçi yazılım çözümleri geliştirmeyi hedefleyen bir yazılım geliştiricisiyim.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Sol Sütun */}
          <div className="flex flex-col gap-10">
            {/* Ben Kimim? */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl p-12 card-hover bg-white shadow-[0_0_24px_0_#00f6ff99] border border-neon-blue transition-transform duration-300 hover:scale-105">
                <h3 className="text-4xl font-semibold text-gray-900 mb-10">
                  Ben Kimim?
                </h3>
                <div className="space-y-8 text-gray-600 leading-relaxed text-xl">
                  <p>
                    Konya Selçuk Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. 
                    Eğitim hayatımın başından itibaren savunma sanayii ve yazılım geliştirme alanlarında kendimi geliştirmeye odaklandım..
                  </p>
                  <p>
                    Python programlama dili ile model geliştirme ve görüntü işleme konularında deneyim sahibiyim. TEKNOFEST kapsamında sabit kanatlı İHA projelerinde görev aldım. 
                    ROS ve Ubuntu ortamında çalışma tecrübesine sahibim.
                  </p>
                  <p>
                    Savunma sanayii odaklı firmalarda gönüllü ve kısa dönem proje deneyimleri kazandım. Ayrıca otomasyon projelerinde yer alma fırsatı buldum. 
                    Yazılım geliştirme ve savunma sanayii alanlarında kendimi geliştirmeye devam ediyor, kariyerimi bu doğrultuda şekillendirmeyi hedefliyorum.
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Kişisel Bilgiler */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl p-12 card-hover bg-white shadow-[0_0_24px_0_#00f6ff99] border border-neon-blue transition-transform duration-300 hover:scale-105">
                <h3 className="text-4xl font-semibold text-gray-900 mb-10 flex items-center">
                  Kişisel Bilgiler
                </h3>
                <div className="space-y-8 text-gray-900">
                  {personalInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-8"
                    >
                      <div className="flex-shrink-0 w-18 h-18 bg-gradient-to-r from-green-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                        <info.icon className="w-9 h-9 text-gray-900" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-500">{info.label}</p>
                        <p className="text-xl text-gray-900 font-semibold">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          {/* Sağ Sütun */}
          <div className="flex flex-col gap-10">
            {/* İlgi Alanlarım */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl p-12 card-hover bg-white shadow-[0_0_24px_0_#00f6ff99] border border-neon-blue transition-transform duration-300 hover:scale-105">
                <h3 className="text-4xl font-semibold text-gray-900 mb-10">
                  İlgi Alanlarım
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className={`skill-badge text-center bg-gradient-to-r from-green-100 to-gray-200 text-gray-900 border-gray-300 text-xl font-semibold py-6 px-8 rounded-3xl shadow-lg transition-all duration-300${interest.includes('Otonom') ? ' whitespace-pre-line' : ''}`}
                    >
                      {interest}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            {/* Eğitim */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl p-12 card-hover bg-white shadow-[0_0_24px_0_#00f6ff99] border border-neon-blue transition-transform duration-300 hover:scale-105">
                <h3 className="text-4xl font-semibold text-gray-900 mb-10 flex items-center">
                  <GraduationCap className="w-10 h-10 text-gray-900 mr-5" />
                  Eğitim
                </h3>
                <div className="space-y-10">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="timeline-item"
                    >
                      <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-300">
                        <h4 className="text-3xl font-semibold text-gray-900 mb-4">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-900 font-bold text-xl mb-4">
                          {edu.school}
                        </p>
                        <div className="flex items-center space-x-6 mb-6">
                          <p className="text-base text-gray-500 font-medium">
                            {edu.period}
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-semibold text-gray-900">GPA:</span>
                            <span className="text-xl font-bold text-gray-900">{edu.gpa}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Key Strengths - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="rounded-3xl p-12 card-hover bg-white shadow-[0_0_24px_0_#00f6ff99] border border-neon-blue transition-transform duration-300 hover:scale-105">
            <h3 className="text-4xl font-semibold text-gray-900 mb-12 text-center">
              Yeteneklerim
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                'Analitik Düşünme',
                'Ekip Çalışması',
                'Gelişim Odaklı',
                'Planlama ve Organizasyon',
                'Liderlik',
                'Özgüvenli Tutum'
              ].map((strength, index) => (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="skill-badge text-center bg-gradient-to-r from-green-100 to-gray-200 text-gray-900 border-gray-300 text-xl font-semibold py-6 px-8 rounded-3xl shadow-lg transition-all duration-300"
                >
                  {strength}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 