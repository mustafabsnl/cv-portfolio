import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, User, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative bg-dark-bg py-12">
      {/* Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 text-3xl opacity-30"
      >
        🛩️
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 right-10 text-2xl opacity-30"
      >
        🚀
      </motion.div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-end w-full gap-0 md:gap-16 md:pr-24">

          {/* Mustafa BOSNALI ve Hızlı Linkler yan yana */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:pl-8 w-full md:w-1/3"
          >
            <h3 className="text-3xl font-bold text-velvet-blue">
              Mustafa BOSNALI
            </h3>
            <p className="text-neon-beige leading-relaxed text-lg">
            Backend teknolojilerine ilgi duyan, kendini geliştirmeye açık bir yazılım geliştirici adayıyım. Java ile nesne yönelimli projeler geliştiriyor, otomasyon sistemleri ve savunma sanayiine yönelik güvenli, ölçeklenebilir çözümler üretmeyi hedefliyorum.


            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#home"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-gradient-to-r from-green-400/30 to-gray-900/30 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <User size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mustafa-bosnal%C4%B1-3003452a4/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:mustafabosnali03@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 w-full md:w-1/4"
          >
            <h3 className="text-2xl font-semibold text-white">
              Hızlı Linkler
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Ana Sayfa', href: '#home' },
                { name: 'Hakkımda', href: '#about' },
                { name: 'Deneyim', href: '#experience' },
                { name: 'Yetenekler', href: '#skills' },
                { name: 'Projeler', href: '#projects' },
                { name: 'İletişim', href: '#contact' }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-lg"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 w-full md:w-1/4"
          >
            <h3 className="text-2xl font-semibold text-white">
              İletişim
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">mustafabosnali03@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">Yeni projeler için açık</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-lg">
            © {currentYear} Mustafa BOSNALI. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-400 text-lg mt-4 md:mt-0">
  
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 