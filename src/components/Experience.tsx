import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Yaz Stajı',
      company: 'Bilgi Teknolojileri ve İletişim Kurumu',
      location: 'Ankara, Türkiye',
      period: 'Haziran 2025 - Temmuz 2025',
      description: [
        'Web geliştirme ve yazılım projelerinde aktif rol aldım',
        'Modern teknolojiler ile kullanıcı dostu arayüzler geliştirdim',
        'Ekip çalışması ve proje yönetimi deneyimi kazandım',
        'Kod kalitesi ve test süreçlerinde katkıda bulundum'
      ],
      technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL']
    },
    {
      title: 'Yaz Stajı',
      company: 'SAFMAK Saf Makina San. ve Tic. A.Ş.',
      location: 'İstanbul, Türkiye',
      period: 'Haziran 2025 - Haziran 2025',
      description: [
        'Siemens S7-1200/1500 PLC’ler ile otomasyon projeleri geliştirdim',
        'HMI panelleri ve WinCC SCADA arayüzleri üzerinde çalıştım',
        'Algoritma geliştirme süreçlerine katkı sağladım',
        'Sistem performansını ve doğruluğunu artırmaya yönelik çalışmalar yürüttüm',
        'Endüstriyel otomasyon sistemlerinin yapısını ve işleyişini yerinde deneyimledim'
      ],
      technologies: ['TIA Portal', 'WinCC Unified', 'Ladder (LAD), FBD, SCL', 'S7-1200 / S7-1500 PLC']
    },
    {
      title: 'Yaz Stajı',
      company: 'Anayurt Savunma ve Teknoloji',
      location: 'Ankara, Türkiye',
      period: 'Haziran 2024 - Ağustos 2024',
      description: [
        'Python ile ses ve dosya formatlarını dönüştüren, yerel sunucuda çalışan bir yazılım geliştirdim',
        'QT framework kullanarak sesin frekans ve diğer özelliklerini analiz eden bir projede yer aldım',
        'Python ile gerçek zamanlı mesajlaşma ve dosya paylaşımı özelliklerine sahip, web tabanlı bir uygulama geliştirdim',
        'Geliştirdiğim uygulamada kullanıcı verilerini güvenli bir şekilde veritabanında depoladım'
      ]
      ,
      technologies: ['Python', 'PyQt / Qt', 'Django', 'Microsoft SQL Server', 'PHP']
    }
  ];

  return (
    <section id="experience" className="py-32 bg-dark-bg min-h-screen relative overflow-hidden">
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
      {/* Decorative Elements - Enlarged */}
      
      
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl font-bold text-white mb-8">
            Deneyim
          </h2>
          <p className="text-2xl text-white/80 max-w-5xl mx-auto leading-relaxed">
          Kariyerim ve staj süreçlerimde kazandığım temel deneyimler
          </p>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.07, boxShadow: '0 0 32px 0 #00f6ff99', borderColor: '#00f6ff' }}
              className="rounded-3xl p-12 card-hover bg-white shadow-[0_0_24px_0_#00f6ff99] border border-neon-blue transition-transform duration-300"
              style={{ borderWidth: 2 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Experience Header */}
                <div className="lg:col-span-1">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                        <Briefcase className="w-8 h-8 text-gray-900" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Building className="w-6 h-6 text-gray-900" />
                        <span className="text-xl text-gray-700 font-semibold">
                          {exp.company}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <MapPin className="w-6 h-6 text-gray-600" />
                        <span className="text-lg text-gray-600">
                          {exp.location}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Calendar className="w-6 h-6 text-gray-600" />
                        <span className="text-lg text-gray-600 font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="lg:col-span-2">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-6">
                      Deneyimler ve Kazanımlar
                      </h4>
                      <ul className="space-y-4">
                        {exp.description.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-4 text-lg text-gray-700 leading-relaxed"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-green-100 to-gray-200 rounded-full mt-3 flex-shrink-0"></div>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-6">
                        Kullanılan Teknolojiler
                      </h4>
                      <div className="flex flex-wrap gap-4">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="px-6 py-3 bg-gradient-to-r from-green-100 to-gray-200 text-gray-900 border border-gray-300 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 