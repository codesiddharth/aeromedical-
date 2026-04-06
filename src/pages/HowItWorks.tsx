import { PhoneCall, FileText, PlaneTakeoff, HeartPulse, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

export default function HowItWorks() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const steps = [
    {
      icon: PhoneCall,
      title: "1. Contact & Initial Assessment",
      description: "Reach out to our 24/7 operations center. We gather basic patient details, current location, and destination to provide an immediate preliminary assessment and cost estimate."
    },
    {
      icon: FileText,
      title: "2. Comprehensive Medical Evaluation",
      description: "Our medical director consults with the treating physicians to assess the patient's fitness to fly. We determine the required medical equipment and personnel (e.g., ICU doctor, flight nurse)."
    },
    {
      icon: PlaneTakeoff,
      title: "3. Transport Planning & Logistics",
      description: "We handle all logistics: securing aircraft, obtaining flight clearances, arranging ground ambulances at both ends, and coordinating hospital admissions."
    },
    {
      icon: HeartPulse,
      title: "4. Execution & In-Flight Care",
      description: "Our medical team takes over care at the discharging hospital. During the flight, they provide continuous ICU-level monitoring and treatment, keeping the family updated."
    },
    {
      icon: Home,
      title: "5. Safe Delivery & Handover",
      description: "Upon arrival, we transport the patient via ground ambulance to the receiving facility, providing a detailed medical handover to the new treating team."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div ref={heroRef} className="bg-primary-950 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <motion.img 
            style={{ y }}
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop" 
            alt="Medical Team Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div {...fadeUp} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">How It Works</h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            A streamlined, stress-free process designed to handle complex logistics while you focus on your loved one.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
           <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop" 
            alt="Medical Team in Action" 
            className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Icon Circle */}
                <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-lg">
                  <step.icon className="w-6 h-6 text-primary-600" />
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-20 border-t border-gray-100">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Ready to initiate a transfer?</h2>
          <Link to="/contact" className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30">
            Start the Process Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
