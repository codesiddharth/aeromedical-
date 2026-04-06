import { Globe2, MapPin, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.15 }
};

export default function GlobalReach() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div ref={heroRef} className="bg-primary-950 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <motion.img 
            style={{ y }}
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" 
            alt="Globe Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div {...fadeUp} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Global Reach</h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Operating across borders, continents, and time zones to bring patients home safely.
          </p>
        </motion.div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Worldwide Operations, Local Expertise</h2>
              <p className="text-lg text-gray-600 mb-6">
                Based in New Delhi, India, our strategic location allows us to serve as a vital hub connecting Asia, the Middle East, Europe, and beyond. We have successfully executed complex aeromedical missions in over 150 countries.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our global network of aviation partners, ground handling agents, and international medical facilities ensures that no matter where an emergency occurs, AeroMed can reach you.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <Globe2 className="w-8 h-8 text-primary-600 mb-3" />
                  <h4 className="font-bold text-gray-900 text-2xl">150+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Countries Served</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <Navigation className="w-8 h-8 text-primary-600 mb-3" />
                  <h4 className="font-bold text-gray-900 text-2xl">24/7</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Flight Clearances</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61ce2ed9ce?q=80&w=2000&auto=format&fit=crop"
                alt="Airplane over clouds"
                className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-xl max-w-xs border border-gray-100 hidden md:block">
                <MapPin className="w-8 h-8 text-primary-600 mb-2" />
                <h3 className="font-bold text-gray-900">Headquarters</h3>
                <p className="text-sm text-gray-600">New Delhi, India</p>
                <p className="text-xs text-gray-500 mt-2">Coordinating global missions 24/7/365</p>
              </div>
            </motion.div>
          </div>

          {/* Regional Coverage */}
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Major Regions Covered</h3>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {['Asia Pacific', 'Middle East & Africa', 'Europe', 'Americas'].map((region) => (
              <motion.div key={region} variants={fadeUp} className="bg-white border border-gray-200 p-8 rounded-2xl text-center hover:border-primary-500 hover:shadow-lg transition-all cursor-default">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">{region}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Comprehensive coverage including remote locations and major medical hubs.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <motion.div {...fadeUp} className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Need an International Transfer?</h2>
          <p className="text-primary-200 mb-10 text-lg">Our international desk handles all visa, immigration, and aviation clearances.</p>
          <Link to="/contact" className="inline-block bg-white text-primary-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-colors shadow-xl">
            Contact International Desk
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
