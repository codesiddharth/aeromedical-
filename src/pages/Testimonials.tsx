import { Star, Quote } from 'lucide-react';
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

export default function Testimonials() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "London to New Delhi",
      text: "When my father suffered a stroke in London, we were terrified. AeroMed handled everything from hospital discharge to the flight and admission in Delhi. The medical team was incredibly professional and compassionate. They truly saved his life.",
      rating: 5,
      avatarId: 11
    },
    {
      name: "Sarah Jenkins",
      location: "Dubai to Mumbai",
      text: "The level of care provided during my sister's transport was exceptional. The flight nurse never left her side, and the operations team kept us updated every hour. Highly recommend their services for anyone in a medical crisis abroad.",
      rating: 5,
      avatarId: 44
    },
    {
      name: "Dr. Amit Patel",
      location: "Referring Physician",
      text: "I have worked with several aeromedical companies, but AeroMed stands out for their clinical excellence. Their equipment is top-notch, and their doctors are highly skilled in aviation medicine. A trusted partner for critical transfers.",
      rating: 5,
      avatarId: 53
    },
    {
      name: "Elena Rodriguez",
      location: "Singapore to Chennai",
      text: "Seamless bed-to-bed transfer. We didn't have to worry about a single logistical detail. The commercial medical escort option they suggested was cost-effective and perfectly suited for my mother's stable condition.",
      rating: 5,
      avatarId: 47
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div ref={heroRef} className="bg-primary-950 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.img 
            style={{ y }}
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div {...fadeUp} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Patient Stories</h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Read what families and medical professionals say about their experience with AeroMed.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeUp} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative shadow-sm hover:shadow-md transition-shadow">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary-100" />
              <div className="flex space-x-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg italic mb-8 relative z-10 leading-relaxed">"{testimonial.text}"</p>
              <div className="relative z-10 flex items-center">
                <img 
                  src={`https://i.pravatar.cc/150?img=${testimonial.avatarId}`} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4 border-2 border-white shadow-sm" 
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-primary-600 font-medium">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
