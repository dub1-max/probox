"use client"
import dynamic from "next/dynamic";
import { useState } from 'react';
import { ArrowRight, Wifi, Monitor, Users, Coffee, Clock, Projector, Lock, UtensilsCrossed, Car, Phone, Mail, MapPin } from 'lucide-react';
import { CardsCarousel } from "./carousel"
import { TestimonialMain } from './testimonial';
import { Pin } from './pin';
import { CardsCarousel1 } from "./carousel2";
import GlowingEffectDemo from '@/components/ui/glowing-effect-demo';
import { ExpandableCardDemo } from "@/components/ui/ExpandableCardDemo";
import { motion } from "framer-motion";
import Image from "next/image";
import cmlogo from 'D:\\cm\\cm\\cm\\public\\cmlogo.png';

function App() {
  const [selectedSpace, setSelectedSpace] = useState('OPEN SPACE');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex items-center justify-between mb-16">
          <div className="text-2xl font-bold flex items-center gap-1">
            <img src="/pblogo.png" alt="Logo" className="h-25" />
          </div>
          <a href="http://www.bizdubai.ae" className="bg-[#02569f] text-white px-8 py-2 rounded-full flex items-center">
            Get In Touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </nav>

        <div className="text-left mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Pro Box</p>
          <h1 className="text-7xl font-bold mb-2">
            Business <span className="text-[#02569f]">centers</span>
            <br />and many more
          </h1>
        </div>

        <CardsCarousel1 />

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-left mb-12">
            <div className="text-left mb-12">
              <h1 className="text-7xl font-bold mb-2">
                <span className="text-[#02569f]">Premium Amenities</span>
                <br /> we offer
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-25">
            {[
              { icon: <Wifi className="w-8 h-8" />, label: 'High-Speed WIFI' },
              { icon: <Monitor className="w-8 h-8" />, label: 'Fully Furnished' },
              { icon: <Users className="w-8 h-8" />, label: 'Free DEWA' },
              { icon: <Coffee className="w-8 h-8" />, label: 'Conference Room' },
              { icon: <Clock className="w-8 h-8" />, label: '24 x 7 Access' },
              { icon: <Projector className="w-8 h-8" />, label: 'Dedicated Service Staff' },
              { icon: <Lock className="w-8 h-8" />, label: 'State-of-the-Art Facilities' },
              { icon: <UtensilsCrossed className="w-8 h-8" />, label: 'Free Beverages' },
              { icon: <Car className="w-8 h-8" />, label: 'Prime Location' },
            ].map((feature, index) => (
              <div key={index} className="text-center group cursor-pointer hover:scale-105 transition-transform">
                <div className="text-[#02569f] flex justify-center mb-3 bg-[#e2f0fa] p-4 rounded-lg group-hover:bg-[#d3e9f7] transition-colors">
                  {feature.icon}
                </div>
                <p className="font-medium text-sm">{feature.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Office collaboration"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute bottom-8 left-8 grid grid-cols-2 gap-4">
                <div className="bg-[#02569f] text-white p-6 rounded-lg">
                  <h3 className="text-4xl font-bold">300+</h3>
                  <p className="text-sm">SEATS AVAILABLE</p>
                </div>
                <div className="bg-gray-900 text-white p-6 rounded-lg">
                  <h3 className="text-4xl font-bold">10+</h3>
                  <p className="text-sm">MEETING ROOMS</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-sm uppercase tracking-wider text-gray-600 mb-4">Pro Box</h3>
              <h2 className="text-3xl font-bold mb-4">
                At Pro Box we offer flexible office solutions, including <br />
                <span className="text-[#02569f]">Fully-equipped offices, virtual offices with a prestigious address, and collaborative flexi desks.</span>
                <br /><br />Elevate your business with our prime location and professional support.
              </h2>

              <div className="space-y-6">
                {[
                  { icon: <Monitor className="w-5 h-5" />, label: 'State-of-the-Art Facilities ' },
                  { icon: <Coffee className="w-5 h-5" />, label: 'Free Beverages' },
                  { icon: <Car className="w-5 h-5" />, label: 'Prime Location' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-[#02569f] bg-[#e2f0fa] p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <p className="font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
              <a href="http://www.bizdubai.ae" className="inline-flex items-center text-[#02569f] font-medium mt-8 hover:gap-4 transition-all gap-2">
                LEARN MORE
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <div className="text-left mb-12">
          <h1 className="text-7xl font-bold mb-2">
            <span className="text-[#02569f]">At</span><br /> Pro Box
          </h1>
        </div>

        <ExpandableCardDemo />

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16 rounded-lg mb-20">
          <div className="text-center mb-12">
            <h3 className="text-sm uppercase tracking-wider text-gray-600">TESTIMONIALS</h3>
            <h2 className="text-3xl font-bold mt-2">
              We love to <span className="text-[#02569f]">hear</span> from our<br />customers
            </h2>
          </div>
          <div>
            <TestimonialMain />
          </div>
        </section>

        {/* Map Section */}
        <h2 className="text-4xl font-bold mb-4">
          Find Us<span className="text-[#02569f]">!</span><br />
        </h2>
        <section className="pt-10">
          <div className="px-4 xl:container">
            <iframe
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5441291055627!2d55.337489299999994!3d25.252275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d0001616bdd%3A0x689d9872e1f24e30!2sProbox%20Business%20Center!5e0!3m2!1sen!2snl!4v1744540081835!5m2!1sen!2sn"
            ></iframe>
          </div>
        </section>
        <br></br>
        {/* Contact Section */}
        <section id="support" className="mb-20 grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-600 mb-4">CONNECT WITH US</h3>
            <h2 className="text-4xl font-bold mb-4">
              Have questions? <span className="text-[#02569f]">Get</span><br />in touch!
            </h2>

            <div className="space-y-6">
              {[{ Icon: MapPin, label: "LOCATION", value: "Sarah Building - 305 - 43 2nd St - Al Garhoud - Dubai - United Arab Emirates" },
              { Icon: Phone, label: "CALL US", value: "+97142391476" },
              { Icon: Mail, label: "MAIL US", value: "info@example.com" }].map(({ Icon, label, value }, i) => (
                <div className="flex items-center gap-4" key={i}>
                  <div className="w-12 h-12 bg-[#e2f0fa] rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#02569f]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connect With Us square */}
          <motion.div
            className="relative p-8 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4 h-[30rem] w-[35rem] mx-auto overflow-hidden cursor-pointer"
            initial={{ scale: 0.95, opacity: 0.9 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div className="absolute inset-0 z-0" initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
              <Image
                src="https://i.postimg.cc/vZ8NCvn7/DSC08361.jpg"
                alt="Office background"
                fill
                className="opacity-50 object-cover"
                priority
              />
            </motion.div>

            <motion.div
              className="relative z-10 bg-white/80 p-8 rounded-lg backdrop-blur-sm w-full h-full flex flex-col items-center justify-center border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.h3 className="text-2xl font-bold text-center text-[#02569f] mb-2" whileHover={{ scale: 1.05 }}>
                Connect With Us
              </motion.h3>
              <motion.p className="text-center text-gray-600 mb-6" whileHover={{ scale: 1.02 }}>
                Let's discuss how we can help your business grow
              </motion.p>
              <motion.a
                href="https://www.bizdubai.ae/support"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#02569f] text-white rounded-full font-medium hover:bg-[#014b8b] transition-colors relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -10px rgba(2, 86, 159, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white opacity-0 hover:opacity-20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                />
                Enquire Now
              </motion.a>

              <motion.div
                className="absolute bottom-4 text-gray-400 text-sm flex items-center"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span>Click to connect</span>
                <motion.span
                  className="ml-1"
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                >
                  →
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </header>
    </div>
  );
}

export default App;
