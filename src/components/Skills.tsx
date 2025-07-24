import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Zap } from 'lucide-react';

type Skill = { name: string; level: number };
type Category = {
  name: string;
  icon: React.ElementType;
  color: string;
  skills: Skill[];
};

// SkillCategoryCard yardımcı bileşeni
const SkillCategoryCard: React.FC<{ category: Category }> = ({ category }) => (
  <motion.div
    initial={{ opacity: 0, x: 0 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: false, amount: 0.3 }}
    whileHover={{ scale: 1.05 }}
    className="rounded-3xl p-10 card-hover bg-white shadow-[0_0_24px_0_#00f6ff99] border border-neon-blue transition-transform duration-300"
  >
    <div className="flex items-center space-x-4 mb-10">
      <div className={`w-18 h-18 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
        <category.icon className="w-9 h-9 text-gray-900" />
      </div>
      <h3 className="text-3xl font-semibold text-gray-900">
        {category.name}
      </h3>
    </div>
    <div className="space-y-8">
      {category.skills.map((skill: Skill, skillIndex: number) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
          viewport={{ once: false }}
          className="space-y-4"
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">
              {skill.name}
            </span>
            <span className="text-lg font-semibold text-purple-600">
              {skill.level}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: skillIndex * 0.1 }}
              viewport={{ once: false }}
              className="h-4 bg-gradient-to-r from-neon-beige to-velvet-blue rounded-full shadow-lg"
            />
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: 'Frontend Geliştirme',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React', level: 70 },
        { name: 'TypeScript', level: 65 },
        { name: 'JavaScript', level: 70 },
        { name: 'HTML5', level: 85 },
        { name: 'CSS3', level: 85 }
      ]
    },
    {
      name: 'Backend Geliştirme',
      icon: Database,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Java', level: 75 },
        { name: 'Spring Boot', level: 77 },
        { name: 'Python', level: 80 },
        { name: 'C/C++', level: 75 },
        { name: 'REST APIs', level: 75 },
        { name: 'Tailwind CSS', level: 75 }
      ]
    },
    {
      name: 'Veritabanları',
      icon: Zap,
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'Microsoft SQL Server', level: 70 }
      ]
    }
  ];

  const centeredCategories = [
    {
      name: 'Otomasyon Sistemleri',
      icon: Globe,
      color: 'from-indigo-500 to-indigo-600',
      skills: [
        { name: 'TIA Portal', level: 70 },
        { name: 'WinCC Unified', level: 65 }
      ]
    },
    {
      name: 'Robotics & OS',
      icon: Globe,
      color: 'from-indigo-500 to-indigo-600',
      skills: [
        { name: 'ROS', level: 85 },
        { name: 'Gazebo', level: 75 },
        { name: 'Ubuntu', level: 90 },
        { name: 'Misson Planner', level: 75 }
      ]
    },
    {
      name: 'Araçlar',
      icon: Code,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Git', level: 70 },
        { name: 'GitHub', level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-dark-bg min-h-screen relative overflow-hidden">
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
      <motion.div animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-24 left-1/3 text-3xl text-cyan-300 opacity-70 select-none font-bold">1</motion.div>
      <motion.div animate={{ y: [0, 12, 0], scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-1/4 text-2xl text-blue-300 opacity-70 select-none font-bold">0</motion.div>
      <motion.div animate={{ x: [0, 10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-32 right-1/3 text-4xl text-cyan-200 opacity-60 select-none font-bold">1</motion.div>
      <motion.div animate={{ y: [0, -8, 0], scale: [1, 1.08, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-16 left-1/5 text-2xl text-blue-200 opacity-70 select-none font-bold">0</motion.div>
      <motion.div animate={{ x: [0, -12, 0], scale: [1, 1.05, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 right-1/4 text-3xl text-cyan-400 opacity-70 select-none font-bold">1</motion.div>
      <motion.div animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 left-1/2 text-4xl text-blue-400 opacity-70 select-none font-bold">0</motion.div>
      <motion.div animate={{ x: [0, -8, 0], scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/3 right-1/5 text-2xl text-cyan-200 opacity-60 select-none font-bold">1</motion.div>
      <motion.div animate={{ x: [0, 8, 0], scale: [1, 1.08, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/5 left-1/6 text-3xl text-blue-300 opacity-70 select-none font-bold">0</motion.div>
      <motion.div animate={{ y: [0, 8, 0], scale: [1, 1.07, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 right-1/2 text-2xl text-cyan-300 opacity-60 select-none font-bold">1</motion.div>
      <motion.div animate={{ x: [0, -10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/4 left-1/3 text-3xl text-blue-200 opacity-70 select-none font-bold">0</motion.div>
      <motion.div animate={{ y: [0, -12, 0], scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/3 right-1/5 text-2xl text-cyan-400 opacity-60 select-none font-bold">1</motion.div>
      <motion.div animate={{ x: [0, 12, 0], scale: [1, 1.09, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/6 left-1/2 text-3xl text-blue-400 opacity-70 select-none font-bold">0</motion.div>
      <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.06, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/6 right-1/4 text-2xl text-cyan-200 opacity-60 select-none font-bold">1</motion.div>
      <motion.div animate={{ y: [0, -7, 0], scale: [1, 1.04, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/6 right-1/6 text-2xl text-blue-400 opacity-60 select-none font-bold">0</motion.div>
      <motion.div animate={{ x: [0, 7, 0], scale: [1, 1.07, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/8 left-1/5 text-3xl text-cyan-300 opacity-70 select-none font-bold">1</motion.div>
      <motion.div animate={{ y: [0, 9, 0], scale: [1, 1.08, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/8 right-1/3 text-2xl text-blue-200 opacity-60 select-none font-bold">0</motion.div>
      <motion.div animate={{ x: [0, -9, 0], scale: [1, 1.06, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/7 left-1/7 text-3xl text-cyan-400 opacity-70 select-none font-bold">1</motion.div>
      <motion.div animate={{ y: [0, 11, 0], scale: [1, 1.09, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/7 right-1/7 text-2xl text-blue-300 opacity-60 select-none font-bold">0</motion.div>
      <motion.div animate={{ x: [0, 11, 0], scale: [1, 1.08, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/9 left-1/8 text-3xl text-cyan-200 opacity-70 select-none font-bold">1</motion.div>
      <motion.div animate={{ y: [0, -11, 0], scale: [1, 1.07, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/9 right-1/8 text-2xl text-blue-400 opacity-60 select-none font-bold">0</motion.div>
      <motion.div animate={{ x: [0, -13, 0], scale: [1, 1.09, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/10 left-1/9 text-3xl text-cyan-300 opacity-70 select-none font-bold">1</motion.div>
      <motion.div animate={{ y: [0, 13, 0], scale: [1, 1.1, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/10 right-1/9 text-2xl text-blue-200 opacity-60 select-none font-bold">0</motion.div>
      <motion.div animate={{ x: [0, 13, 0], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/11 left-1/10 text-3xl text-cyan-400 opacity-70 select-none font-bold">1</motion.div>
      <motion.div animate={{ y: [0, -13, 0], scale: [1, 1.1, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/11 right-1/10 text-2xl text-blue-300 opacity-60 select-none font-bold">0</motion.div>
      <motion.div animate={{ x: [0, -14, 0], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/12 left-1/11 text-3xl text-cyan-200 opacity-70 select-none font-bold">1</motion.div>
      <motion.div animate={{ y: [0, 14, 0], scale: [1, 1.1, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/12 right-1/11 text-2xl text-blue-400 opacity-60 select-none font-bold">0</motion.div>
      
      
      {/* Decorative Elements - Enlarged */}
      <motion.div
        animate={{
          y: [0, -35, 0],
          rotate: [0, 25, -25, 0],
          scale: [1, 1.7, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 text-5xl opacity-60 flex items-center gap-2"
      >
        
      </motion.div>
      <motion.div
        animate={{
          y: [0, 45, 0],
          rotate: [0, -30, 30, 0],
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 right-32 text-4xl opacity-70 flex items-center gap-2"
      >
        
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 left-1/4 text-3xl flex items-center gap-2"
      >
        
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 2.2, 1],
          opacity: [0.4, 1, 0.4],
          rotate: [360, 0, 360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-24 right-1/4 text-4xl flex items-center gap-2"
      >
        
      </motion.div>
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -35, 35, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-64 left-1/3 text-5xl opacity-50 flex items-center gap-2"
      >
      
      </motion.div>
      <motion.div
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/5 text-4xl opacity-60 flex items-center gap-2"
      >
        <span className="mr-2">0</span>🛰️
      </motion.div>
      <motion.div
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 right-1/5 text-4xl opacity-60 flex items-center gap-2"
      >
    
      </motion.div>

      <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl font-bold text-white mb-8">
            Yetenekler
          </h2>
          <p className="text-2xl text-white max-w-5xl mx-auto leading-relaxed">
            Yazılım geliştirme yolculuğumda edindiğim teknik ve kişisel yetenekler
          </p>
        </motion.div>

        {/* Üst sıra: Backend, Frontend, Robotics ve Alt sıra: Veritabanları, Araçlar, Otomasyon Sistemleri */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
            {/* Backend Geliştirme */}
            <SkillCategoryCard category={skillCategories[1]} />
            {/* Frontend Geliştirme */}
            <SkillCategoryCard category={skillCategories[0]} />
            {/* Robotics & OS */}
            <SkillCategoryCard category={centeredCategories[1]} />
          </div>
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
            {/* Veritabanları */}
            <SkillCategoryCard category={skillCategories[2]} />
            {/* Araçlar */}
            <SkillCategoryCard category={centeredCategories[2]} />
            {/* Otomasyon Sistemleri */}
            <SkillCategoryCard category={centeredCategories[0]} />
          </div>
        </div>

        {/* En altta Ek Yetenekler */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
          className="mt-24"
        >
          <div className="rounded-3xl p-10 card-hover bg-white shadow-[0_0_24px_0_#00f6ff99] border border-neon-blue transition-transform duration-300">
            <h3 className="text-4xl font-semibold text-gray-900 mb-12">
              Ek Yetenekler
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="space-y-8">
                <h4 className="text-3xl font-medium text-gray-900">Diller</h4>
                <div className="space-y-6">
                  {[
                    { name: 'İngilizce', level: 'Orta Seviye' }
                  ].map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: false }}
                      className="flex justify-between items-center p-6 bg-white rounded-3xl border border-gray-200 text-gray-900 transition-transform duration-300 hover:scale-105"
                    >
                      <span className="text-gray-700 text-xl font-medium">{lang.name}</span>
                      <span className="text-sm text-purple-600 font-bold">{lang.level}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-3xl font-medium text-gray-900">Araçlar</h4>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    'VS Code', 'Postman', 'IntelliJ IDEA', 'Swagger',
                    'Git', 'GitHub', 'Jira', 'Tia Portal', 'WinCC Unified', 'Ubuntu'
                  ].map((tool, index) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: false }}
                      className="skill-badge text-center bg-white border border-gray-200 text-gray-900 text-lg font-semibold py-4 px-6 rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-3xl font-medium text-gray-900">Sertifikalar</h4>
                <div className="space-y-6">
                  {[
                    'BTK B1 Seviye İngilizce Sertifikası',
                    'BTK JAVA ile Programlamaya Giriş Sertifikası',
                    'BTK C Programlama Dili Sertifikası',
                    'BTK Python Programlama Dili Sertifikası'
                  ].map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: false }}
                      className="flex items-center space-x-4 p-6 bg-white border border-gray-200 rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                      <span className="text-lg text-gray-900 font-medium">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 