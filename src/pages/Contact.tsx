import { Phone, Mail, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

export default function Contact() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div ref={heroRef} className="bg-primary-950 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <motion.img 
            style={{ y }}
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2000&auto=format&fit=crop" 
            alt="Customer Support Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div {...fadeUp} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Our operations center is available 24/7/365 for medical emergencies and transport inquiries.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-red-50 border border-red-100 p-8 rounded-3xl shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-bold text-red-900">24/7 Emergency Line</h3>
              </div>
              <a href="tel:+911123456789" className="text-3xl font-bold text-red-600 hover:text-red-700 block">
                +91 11 2345 6789
              </a>
              <p className="text-sm text-red-800 mt-3">Call immediately for urgent medical transport needs.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">General Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-50 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="mt-1">
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:ops@aeromedical.in" className="text-gray-600 hover:text-primary-600">ops@aeromedical.in</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-50 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="mt-1">
                    <p className="font-medium text-gray-900">Headquarters</p>
                    <p className="text-gray-600">123 Safdarjung Enclave,<br />New Delhi, 110029, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-50 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="mt-1">
                    <p className="font-medium text-gray-900">Operations Hours</p>
                    <p className="text-gray-600">24 Hours a Day<br />7 Days a Week</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Request a Quote / Consultation</h2>
              <p className="text-gray-600 mb-8 text-lg">Please provide as much detail as possible so our medical team can assess the situation accurately.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" required />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Location (City/Country) *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Destination (City/Country) *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Patient's Brief Medical Condition *</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" required></textarea>
                </div>

                <button type="submit" className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 text-lg mt-4">
                  Submit Request
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">We respect your privacy. All medical information is kept strictly confidential.</p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
