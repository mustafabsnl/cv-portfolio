import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Teknofest Uluslar Arası İHA Yarışması',
      description: [
        'Yüksek verimlilik, aerodinamik kararlılık ve uzun menzil hedefleri doğrultusunda tasarladığımız İHA’mız; keşif, gözetleme ve görev odaklı uçuş senaryolarında yüksek performans göstermektedir.',
        '',
        'Yerli ve özgün yazılım altyapımız sayesinde uçuş kontrolü, görev planlaması ve otonom rota takibi gibi süreçler başarıyla yürütülmektedir. Hafif gövde yapısı, optimize edilmiş kanat tasarımı ve gelişmiş kontrol algoritmaları sayesinde hem enerji verimliliği hem de uçuş kararlılığı sağlanmıştır.',
        '',
        'TEKNOFEST kapsamında ortaya koyduğumuz bu proje; ekip çalışması, disiplinlerarası mühendislik bilgisi ve gerçek saha koşullarına uygun çözümlerle tasarlanmış, ülkemizin havacılık ve savunma teknolojilerine katkı sağlayacak niteliktedir.'
      ].join('\n\n'),
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      technologies: ['Ubuntu', 'ROS Noetic', 'Gazebo', 'Mission Planner', 'Ardupilot', "MAVROS", "MAVLink", "TurtleBot3"],
      category: 'blockchain',
      emoji: '🔗'
    }
  ];

  const filteredProjects = projects;

  return (
    <section id="projects" className="py-32 bg-dark-bg min-h-screen relative overflow-hidden">
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
            Projeler
          </h2>
          <p className="text-2xl text-white/80 max-w-5xl mx-auto leading-relaxed">
            Geliştirdiğim yenilikçi projeler ve teknolojik çözümler
          </p>
        </motion.div>

        {/* Category Filter - Only "Tümü" */}

        {/* Projects Grid */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl overflow-hidden card-hover bg-white shadow-[0_0_24px_0_#00f6ff99] border border-neon-blue transition-transform duration-300"
              >
                {/* Project Image */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                </div>

                {/* Project Content */}
                <div className="p-12">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-900 mb-6"
                  >
                    {project.title}
                  </motion.h3>

                  {/* Açıklama */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    {project.description.split('\n\n').map((line, idx) => (
                      <p key={idx} className="text-lg text-gray-600 leading-relaxed mb-4">{line}</p>
                    ))}
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Kullanılan Teknolojiler
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="px-4 py-2 bg-gradient-to-r from-neon-beige to-velvet-blue text-velvet-navy border border-neon-beige rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Projects Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="rounded-3xl p-16 bg-white shadow-[0_0_24px_0_#00f6ff99] border border-neon-blue card-hover transition-transform duration-300">
            <h3 className="text-4xl font-semibold text-gray-900 mb-10 text-center">
              Proje Oluşturma Aşamalarım
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: '💡',
                  title: 'Analiz',
                  description: 'Proje kapsamını derinlemesine inceleme'
                },
                {
                  icon: '🎨',
                  title: 'Tasarım',
                  description: 'kullanıcı dostu tasarım'
                },
                {
                  icon: '⚡',
                  title: 'Geliştirme',
                  description: 'Yenilikçi araçlarla güçlü kodlar'
                },
                {
                  icon: '🚀',
                  title: 'Deploy',
                  description: 'Sorunsuz ve optimize edilmiş dağıtım'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-white rounded-3xl border border-gray-200 text-gray-900"
                >
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <h4 className="text-2xl font-semibold mb-4">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 