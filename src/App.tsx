import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane, Map, Calendar, ChevronRight, Menu, Search, Globe, Phone } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);


  // Track scroll for navbar frosted glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const navLinks = ['Home', 'Destinations', 'Flight Tickets', 'Experiences', 'About'];

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1.5rem 2rem',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Golden Wings Logo" style={{ height: '60px', objectFit: 'contain' }} />
        </div>

        <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="nav-desktop">
          {navLinks.map((link, i) => (
            <a key={i} href={`#${link.toLowerCase()}`} style={{ color: 'var(--color-white)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
               onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
               onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-white)'}
            >
              {link}
            </a>
          ))}
          <button className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>Book Now</button>
        </div>

        <button className="menu-btn" style={{ background: 'transparent', border: 'none', color: 'white', display: 'flex', cursor: 'pointer' }}>
          <Menu size={28} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Parallax Background */}
        <motion.div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '120%',
          y: yBg,
          backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&fm=webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2
        }}>
          {/* Dark Overlay */}
          <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(10,25,47,0.3) 0%, rgba(10,25,47,0.8) 100%)' }} />
        </motion.div>

        {/* Massive Background Text behind main subjects */}
        <motion.div style={{ position: 'absolute', zIndex: -1, pointerEvents: 'none', width: '100%', textAlign: 'center', top: '50%', transform: 'translateY(-50%)', opacity: opacityHeroText }}>
          <h1 className="text-stroke" style={{ fontSize: 'min(24vw, 30rem)', lineHeight: 0.8, margin: 0, letterSpacing: '-0.05em', userSelect: 'none' }}>
            DUBAI
          </h1>
        </motion.div>

        <div className="container" style={{ position: 'relative', zIndex: 1, marginTop: '5vh' }}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ maxWidth: '600px' }}
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '60px' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ height: '2px', background: 'var(--color-accent)', marginBottom: '1.5rem' }} 
            />
            <h2 style={{ color: 'var(--color-white)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Experience The<br />
              <span style={{ color: 'var(--color-accent)' }}>Elite Side</span> of Travel.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '450px', lineHeight: 1.6 }}>
              Bespoke tour packages and premium flight ticketing services tailored for those who accept nothing but perfection.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary">Explore Packages</button>
              <button className="btn-outline">Flight Tickets</button>
            </div>
          </motion.div>
        </div>

        {/* Floating Glass Booking Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-panel hero-booking"
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '5%',
            padding: '2rem',
            borderRadius: '24px',
            width: 'min(400px, 90vw)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            zIndex: 10
          }}
        >
          <h3 style={{ color: 'var(--color-white)', fontSize: '1.2rem', fontFamily: 'var(--font-sans)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={18} color="var(--color-accent)" /> Quick Consultation
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="Your Destination" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontFamily: 'var(--font-sans)' }} />
            <div style={{ display: 'flex', gap: '1rem' }}>
               <input type="date" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontFamily: 'var(--font-sans)', colorScheme: 'dark' }} />
            </div>
            <button className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              Find Flights <Globe size={18} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Interlude */}
      <section style={{ padding: '6rem 0', background: 'var(--color-primary)', color: 'var(--color-white)', position: 'relative' }}>
         <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
             
             {[
               { icon: <Map size={40} />, title: "Curated Tours", desc: "Access exclusive locations across Dubai with our VIP itineraries." },
               { icon: <Plane size={40} />, title: "Premium Flights", desc: "First-class & business class bookings with seamless travel processing." },
               { icon: <Calendar size={40} />, title: "Concierge Services", desc: "24/7 dedicated support to manage every aspect of your journey." }
             ].map((service, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: index * 0.2 }}
                 style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
               >
                 <div style={{ color: 'var(--color-accent)' }}>
                   {service.icon}
                 </div>
                 <div>
                   <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: 'var(--color-white)' }}>{service.title}</h3>
                   <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontSize: '0.95rem' }}>{service.desc}</p>
                 </div>
               </motion.div>
             ))}

           </div>
         </div>
      </section>

      {/* Featured Destinations (Asymmetrical Grid) */}
      <section id="destinations" style={{ padding: '8rem 0', background: 'var(--color-bg)', position: 'relative' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '4rem', textAlign: 'center' }}
          >
            <h2 style={{ fontSize: '3rem', color: 'var(--color-primary)' }}>Luxury Destinations</h2>
            <div style={{ height: '2px', width: '80px', background: 'var(--color-accent)', margin: '1rem auto' }} />
            <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>Curated experiences across the UAE and globally, reserved for the discerning traveler.</p>
          </motion.div>

          <div className="dest-grid" style={{ display: 'grid', gap: '2rem', minHeight: '600px' }}>
            {/* Large Feature Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="dest-main"
              style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}
            >
              <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(10,25,47,0.9) 0%, transparent 60%)', zIndex: 1 }} />
              <img src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=2070&auto=format&fit=crop&fm=webp" loading="lazy" alt="Maldives" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="zoom-hover" />
              <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2.5rem', zIndex: 2, color: 'white' }}>
                <span style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Premium Package</span>
                <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', margin: '1rem 0 0.5rem 0' }}>Maldives Escape</h3>
                <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>7 Nights exclusive water villa experience with private seaplane transfers.</p>
                <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>View Details <ChevronRight size={16} /></button>
              </div>
            </motion.div>

            <div className="dest-side" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Secondary Card 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ flex: 1, position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}
              >
                <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(10,25,47,0.9) 0%, transparent 60%)', zIndex: 1 }} />
                <img src="https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=1974&auto=format&fit=crop&fm=webp" loading="lazy" alt="Dubai Safari" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="zoom-hover" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem', zIndex: 2, color: 'white' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', margin: '0 0 0.5rem 0' }}>Dubai Desert Safari</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>VIP private vintage land rover tour and dining under stars.</p>
                </div>
              </motion.div>

              {/* Secondary Card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ flex: 1, position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}
              >
                <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(10,25,47,0.9) 0%, transparent 60%)', zIndex: 1 }} />
                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2070&auto=format&fit=crop&fm=webp" loading="lazy" alt="Paris" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="zoom-hover" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem', zIndex: 2, color: 'white' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', margin: '0 0 0.5rem 0' }}>European Grandeur</h3>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Tailored luxury tour across Paris, Rome, and Zurich.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Flight Tickets Boarding Pass Style Section */}
      <section id="flights" style={{ padding: '8rem 0', background: 'var(--color-bg-alt)', position: 'relative', overflow: 'hidden' }}>
        {/* Background Decorative element */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', border: '1px solid var(--color-accent)', borderRadius: '50%', opacity: 0.1 }} />
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ flex: '1 1 400px' }}
            >
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--color-primary)', lineHeight: 1.1, marginBottom: '1.5rem' }}>First Class Booking <br/><span style={{ color: 'var(--color-accent)' }}>Reimagined.</span></h2>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Skip the hassle. Our dedicated team finds the most optimal routes, priority boarding passes, and exclusive lounge access for your travels globally.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {['24/7 Global Ticketing Support', 'Business & First Class Specialists', 'Charter Flight Arrangements'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-primary)', fontWeight: 500 }}>
                    <div style={{ background: 'var(--color-accent-light)', padding: '0.2rem', borderRadius: '50%' }}>
                      <Plane size={14} color="var(--color-primary)" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="btn-primary" style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <Search size={18} /> Search Flights
              </button>
            </motion.div>

            {/* Creative Boarding Pass UI Element */}
            <motion.div 
              initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="boarding-pass"
              style={{ flex: '1 1 500px', background: 'var(--color-white)', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', display: 'flex', overflow: 'hidden', position: 'relative' }}
            >
              <div className="boarding-stub" style={{ background: 'var(--color-primary)' }} />
              <div style={{ padding: '3rem 2rem', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px dashed #E5E7EB', paddingBottom: '1rem' }}>
                  <div>
                    <span style={{ color: 'var(--color-text-light)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Passenger</span>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', margin: 0 }}>V.I.P GUEST</h4>
                  </div>
                  <Plane size={32} color="var(--color-accent)" />
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <div>
                    <h2 style={{ fontSize: '3rem', margin: 0, color: 'var(--color-primary)' }}>DXB</h2>
                    <span style={{ color: 'var(--color-text-light)' }}>Dubai, UAE</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, padding: '0 1rem' }}>
                    <Plane size={24} color="var(--color-accent)" style={{ marginBottom: '0.5rem' }} />
                    <div style={{ width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }} />
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <h2 style={{ fontSize: '3rem', margin: 0, color: 'var(--color-primary)' }}>JFK</h2>
                    <span style={{ color: 'var(--color-text-light)' }}>New York, USA</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--color-bg-alt)', padding: '1.5rem', borderRadius: '12px' }}>
                  <div>
                    <span style={{ color: 'var(--color-text-light)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Terminal</span>
                    <h4 style={{ margin: 0 }}>1</h4>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-text-light)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Gate</span>
                    <h4 style={{ margin: 0 }}>A24</h4>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-text-light)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Class</span>
                    <h4 style={{ margin: 0, color: 'var(--color-accent)' }}>FIRST</h4>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Experiences Interlude (Animated) */}
      <section style={{ padding: '8rem 0', background: 'var(--color-bg)', overflow: 'hidden' }}>
        <div className="container">
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             style={{ 
               position: 'relative', 
               borderRadius: '32px', 
               overflow: 'hidden', 
               minHeight: '400px', 
               display: 'flex', 
               alignItems: 'center', 
               justifyContent: 'center',
               boxShadow: 'var(--shadow-lg)'
             }}
           >
             <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: 'url(https://images.unsplash.com/photo-1565619623253-3392330a6c6e?q=80&w=2070&auto=format&fit=crop&fm=webp)', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', zIndex: 1 }} />
             <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(10,25,47,0.6)', zIndex: 2 }} />
             <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '2rem' }}>
               <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1rem' }}>Elevate Your Perspective</h2>
               <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '500px', margin: '0 auto 2rem auto', fontSize: '1.1rem' }}>Chartered helicopters, private yachts, and exclusive access to Dubai's most guarded secrets.</p>
               <button className="btn-primary">Discover More</button>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Travel Blog Section */}
      <section id="experiences" style={{ padding: '6rem 0', background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '3rem', color: 'var(--color-primary)', margin: 0 }}>Journal</h2>
              <p style={{ color: 'var(--color-text-light)', marginTop: '0.5rem' }}>Insights and inspirations for the elite traveler.</p>
            </div>
            <button className="btn-outline" style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>View All Posts</button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop&fm=webp", title: "Top 5 Private Beaches in Dubai", cat: "Destinations" },
              { img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop&fm=webp", title: "The Ultimate Guide to First Class", cat: "Aviation" },
              { img: "https://images.unsplash.com/photo-1546272989-40c92939c6c2?q=80&w=800&auto=format&fit=crop&fm=webp", title: "Michelin Star Dining in the Desert", cat: "Gastronomy" }
            ].map((blog, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                style={{ background: 'var(--color-white)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                   <img src={blog.img} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="zoom-hover" loading="lazy" />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{blog.cat}</span>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary)', margin: '0.5rem 0 1rem 0' }}>{blog.title}</h3>
                  <a href="#" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem' }}>Read Article <ChevronRight size={14} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Form */}
      <section id="about" style={{ padding: '8rem 0', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Tailor Your Journey</h2>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: 1.6 }}>Connect directly with our dedicated concierges. We orchestrate travel masterpieces built specifically for you.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-primary)' }}>
                  <div style={{ background: 'var(--color-bg-alt)', padding: '1rem', borderRadius: '50%' }}><Phone size={20} color="var(--color-accent)" /></div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Direct Line</span>
                    <strong>0555924663</strong>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel contact-form"
              style={{ background: 'var(--color-white)', padding: '3rem', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', zIndex: 10 }}
            >
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <input type="text" placeholder="First Name" required style={{ flex: 1, padding: '1rem', background: 'var(--color-bg-alt)', border: 'none', borderRadius: '8px', fontFamily: 'var(--font-sans)' }} />
                  <input type="text" placeholder="Last Name" required style={{ flex: 1, padding: '1rem', background: 'var(--color-bg-alt)', border: 'none', borderRadius: '8px', fontFamily: 'var(--font-sans)' }} />
                </div>
                <input type="email" placeholder="Email Address" required style={{ padding: '1rem', background: 'var(--color-bg-alt)', border: 'none', borderRadius: '8px', fontFamily: 'var(--font-sans)', width: '100%' }} />
                <textarea placeholder="Tell us about your dream journey..." rows={4} required style={{ padding: '1rem', background: 'var(--color-bg-alt)', border: 'none', borderRadius: '8px', fontFamily: 'var(--font-sans)', width: '100%', resize: 'vertical' }}></textarea>
                <button className="btn-primary" type="submit" style={{ width: '100%' }}>Submit Inquiry</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--color-primary)', color: 'var(--color-white)', padding: '6rem 0 2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <img src="/logo.png" alt="Golden Wings Logo" style={{ height: '70px', objectFit: 'contain' }} />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '300px' }}>
                Setting the highest standard of luxury travel and bespoke experiences globally, headquartered in the heart of Dubai.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Services</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Tour Packages</a></li>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Flight Tickets</a></li>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Global Visa</a></li>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Hotel Bookings</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Contact</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>
                <li>Dubai, United Arab Emirates</li>
                <li>goldenwingstourism@gmail.com</li>
                <li>0555924663</li>
              </ul>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Golden Wings Tourism. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((social, i) => (
                <a key={i} href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-white)'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>{social}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles that can't be easily put in inline-styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .nav-desktop { display: flex !important; }
        .menu-btn { display: none !important; }
        .dest-grid { grid-template-columns: repeat(12, 1fr); }
        .dest-main { grid-column: span 7; }
        .dest-side { grid-column: span 5; }
        .boarding-pass { flex-direction: row; }
        .boarding-stub { width: 2rem; height: auto; }
        
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .menu-btn { display: flex !important; }
          .hero-section { flex-direction: column !important; justify-content: flex-start !important; padding-top: 120px !important; height: auto !important; min-height: 100vh !important; }
          .glass-panel { position: relative !important; right: auto !important; bottom: auto !important; margin: 2rem 0 !important; width: 100% !important; padding: 1.5rem !important; box-sizing: border-box !important; }
          .dest-grid { grid-template-columns: 1fr; }
          .dest-main { grid-column: span 1; min-height: 400px; }
          .dest-side { grid-column: span 1; }
          .boarding-pass { flex-direction: column !important; flex: 1 1 100% !important; }
          .boarding-stub { width: 100% !important; height: 1.5rem !important; }
          h1.text-stroke { font-size: min(40vw, 15rem) !important; margin-top: 20vh; }
          .container { padding: 0 1.5rem !important; width: 100% !important; box-sizing: border-box !important; margin: 0 auto; overflow-x: hidden; }
          body, html { overflow-x: hidden; max-width: 100vw; }
        }
        @media (max-width: 600px) {
          .boarding-pass > div:last-child { padding: 1.5rem 1rem !important; }
          .boarding-pass h2 { font-size: 2rem !important; }
          h2 { font-size: 2.2rem !important; }
          section { padding: 4rem 0 !important; }
          .dest-grid { gap: 1rem !important; }
        }
        .hero-booking input::placeholder { color: rgba(255,255,255,0.5); }
        .contact-form input::placeholder, .contact-form textarea::placeholder { color: rgba(10,25,47,0.5); }
        .contact-form input, .contact-form textarea { color: var(--color-primary); }
        input:focus, textarea:focus { outline: 1px solid var(--color-accent); }
      `}} />

    </div>
  );
}

export default App;
