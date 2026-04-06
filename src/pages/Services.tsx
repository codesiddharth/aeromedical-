import { Plane, Users, Activity, Stethoscope, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

export default function Services() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const services = [
    {
      id: "air-ambulance",
      icon: Plane,
      title: "Air Ambulance (Charter Flights)",
      description: "Dedicated aircraft configured as flying intensive care units for critically ill patients.",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop",
      benefits: [
        "Rapid deployment (often within 2-4 hours)",
        "Direct routing avoiding layovers",
        "Full ICU capabilities on board",
        "Pressurized cabins for specific medical conditions"
      ],
      process: "From initial medical assessment to securing flight clearances and arranging ground transport, we handle the entire mission."
    },
    {
      id: "commercial-escort",
      icon: Users,
      title: "Medical Escort on Commercial Flights",
      description: "Cost-effective transport for stable patients requiring medical supervision during travel.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61ce2ed9ce?q=80&w=2000&auto=format&fit=crop",
      benefits: [
        "Significantly lower cost than charter flights",
        "Accompanied by a specialized doctor or nurse",
        "Assistance with airline medical clearances (MEDIF)",
        "Management of oxygen and medications during flight"
      ],
      process: "We secure necessary airline approvals, arrange business or first-class seating, and provide continuous medical monitoring."
    },
    {
      id: "bed-to-bed",
      icon: Activity,
      title: "Bed-to-Bed Patient Transfer",
      description: "Comprehensive end-to-end transport service ensuring continuous care.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
      benefits: [
        "Seamless transition between facilities",
        "Coordination of ground ambulances at origin and destination",
        "Direct handover between medical teams",
        "Zero logistical stress for the family"
      ],
      process: "Our team picks up the patient from the discharging hospital bed and does not leave their side until safely admitted to the receiving hospital."
    },
    {
      id: "emergency-assistance",
      icon: Stethoscope,
      title: "Emergency Medical Assistance",
      description: "Immediate support and coordination for medical emergencies abroad.",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2000&auto=format&fit=crop",
      benefits: [
        "24/7 multilingual operations center",
        "Hospital admission assistance",
        "Medical monitoring and translation services",
        "Liaison with treating doctors and family"
      ],
      process: "Upon contact, our medical directors assess the situation, consult with local physicians, and determine the safest course of action."
    },
    {
      id: "international-transport",
      icon: Globe,
      title: "International Patient Transport",
      description: "Specialized logistics for cross-border medical transfers.",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop",
      benefits: [
        "Expertise in international aviation regulations",
        "Assistance with visa and immigration clearances",
        "Coordination with embassies and consulates",
        "Global network of medical partners"
      ],
      process: "We navigate complex international protocols, ensuring all legal and medical requirements are met for cross-border transport."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div ref={heroRef} className="bg-primary-950 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <motion.img 
            style={{ y }}
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop" 
            alt="Airplane Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div {...fadeUp} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Comprehensive aeromedical solutions tailored to patient needs, ensuring safe transit worldwide.
          </p>
        </motion.div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>
                  <service.icon className="w-16 h-16 text-primary-600 mb-6 relative z-10" />
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 relative z-10">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 relative z-10">{service.description}</p>
                  
                  <div className="space-y-6 relative z-10">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-primary-600 mb-3">Key Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <span className="text-primary-500 mr-3 mt-1 text-lg leading-none">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-primary-600 mb-2">The Process</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{service.process}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="object-cover h-[500px] w-full transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary-50 py-20 border-t border-primary-100">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Unsure which service you need?</h2>
          <p className="text-lg text-gray-600 mb-8">Our medical directors are available 24/7 to evaluate the patient's condition and recommend the safest, most appropriate transport method.</p>
          <Link to="/contact" className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30">
            Request Medical Evaluation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
