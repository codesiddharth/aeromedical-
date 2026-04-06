import { ArrowRight, Plane, Shield, Clock, Globe2, Activity, Users, PhoneCall } from 'lucide-react';
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
  transition: { staggerChildren: 0.2 }
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 0]);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-primary-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ y, opacity }}
            src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2074&auto=format&fit=crop"
            alt="Air Ambulance"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-800/50 rounded-full px-4 py-2 mb-8 border border-primary-700 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium text-primary-100">Available 24/7 for Global Emergencies</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6">
              Global Aeromedical Assistance You Can <span className="text-primary-400">Trust</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              With over 30 years of excellence, we provide safe, rapid, and reliable patient transport via charter and commercial airlines worldwide.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-primary-500/30"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Get Immediate Assistance</span>
              </Link>
              <Link
                to="/services"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-gray-100 relative z-20 -mt-10 mx-4 sm:mx-6 lg:mx-8 rounded-2xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-gray-100"
          >
            {[
              { number: "30+", label: "Years Experience" },
              { number: "150+", label: "Countries Covered" },
              { number: "10k+", label: "Patients Transported" },
              { number: "24/7", label: "Operations Center" }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeUp} className="text-center px-4">
                <div className="text-4xl font-heading font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Comprehensive Medical Transport Solutions</h3>
            <p className="text-lg text-gray-600">
              We offer end-to-end medical evacuation services tailored to the patient's specific condition and location.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Plane,
                title: "Air Ambulance Charter",
                desc: "Dedicated ICU-equipped aircraft with specialized medical teams for critical patient transport worldwide."
              },
              {
                icon: Users,
                title: "Commercial Medical Escort",
                desc: "Cost-effective transport on commercial airlines with a dedicated doctor or nurse for stable patients."
              },
              {
                icon: Activity,
                title: "Bed-to-Bed Transfer",
                desc: "Seamless transport from the discharging hospital bed directly to the receiving hospital bed."
              }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-heading font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link to="/services" className="text-primary-600 font-medium flex items-center hover:text-primary-700">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary-100 rounded-3xl transform -rotate-3 scale-105 z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
                alt="Medical Team"
                className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Why Choose AeroMed</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Uncompromising Safety & Care</h3>
              <p className="text-lg text-gray-600 mb-8">
                When every second counts, experience matters. Our team of aviation and medical experts ensures the highest standards of care during transit.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Shield, title: "Medical Excellence", desc: "Highly trained ICU doctors and flight nurses on every mission." },
                  { icon: Globe2, title: "Global Network", desc: "Extensive network of partners ensuring smooth international clearances." },
                  { icon: Clock, title: "Rapid Response", desc: "Wheels up in as little as 2 hours from confirmation for critical cases." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 bg-primary-50 p-3 rounded-lg group-hover:bg-primary-100 transition-colors">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      <p className="mt-1 text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61ce2ed9ce?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <motion.div {...fadeUp} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Need Immediate Medical Transport?</h2>
          <p className="text-primary-100 text-lg mb-10">
            Our operations center is standing by 24/7 to assist you. Contact us now for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="tel:+911123456789" className="bg-white text-primary-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 w-full sm:w-auto justify-center shadow-xl">
              <PhoneCall className="w-5 h-5" />
              <span>+91 11 2345 6789</span>
            </a>
            <Link to="/contact" className="bg-primary-700 text-white border border-primary-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-800 transition-colors w-full sm:w-auto justify-center flex shadow-xl">
              Request a Quote
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
