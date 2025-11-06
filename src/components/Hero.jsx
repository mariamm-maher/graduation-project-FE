import { motion } from 'framer-motion'
import { useCounter, useInView } from '../hooks/useScrollEffects'
import { heroStats, trustBadges } from '../data/content'
import { Rocket, CheckCircle2, BarChart3, Target, Smartphone, Zap, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-dark-1 via-dark-2/50 to-dark-1 pt-20">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-[100px] opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.45) 0%, transparent 70%)',
            top: '15%',
            left: '15%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-[100px] opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(255,140,66,0.4) 0%, transparent 70%)',
            top: '20%',
            right: '15%',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center min-h-[90vh] py-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-primary"
              >
                <Rocket className="w-4 h-4" />
              </motion.div>
              <span className="text-sm font-semibold text-primary">
                The Future of Social Media Marketing
              </span>
            </motion.div>

            {/* Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight"
              >
                <span className="block text-white">Transform Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-orange">
                  Social Presence
                </span>
                <span className="block text-white">Into Real Results</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed"
              >
                Stop juggling multiple platforms and drowning in content calendars. 
                MarketAI's intelligent automation handles the heavy lifting while you 
                focus on what matters—growing your brand and connecting with your audience.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-gradient-orange text-white font-semibold shadow-[0_4px_16px_rgba(255,107,53,0.5)] hover:shadow-[0_8px_28px_rgba(255,107,53,0.7)] transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Start Free Trial
                  <span>→</span>
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl glass-effect backdrop-blur-md text-white font-semibold hover:bg-primary/15 hover:border-primary/50 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" fill="currentColor" />
                  Watch Demo
                </span>
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {trustBadges.map((badge, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm hover:bg-white/10 transition-colors duration-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {badge.text}
                </motion.span>
              ))}
            </motion.div>

       
          </motion.div>

          {/* Right Content - Video */}
          <HeroMedia />
        </div>
      </div>

 

      {/* Decorative Waves */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-32">
          <motion.path
            d="M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z"
            fill="rgba(255,107,53,0.1)"
            animate={{ d: [
              'M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z',
              'M0,120 Q300,80 600,120 T1200,120 L1200,400 L0,400 Z',
              'M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z',
            ]}}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    </section>
  )
}




// Hero Media Component
const HeroMedia = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Video Container */}
        <div className="relative rounded-[32px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3),0_30px_60px_rgba(255,107,53,0.25)]">
          <video
            className="w-full h-auto rounded-[32px]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/gemini.mp4" type="video/mp4" />
          </video>

          {/* Glass Frame Overlay */}
          <div className="absolute inset-0 rounded-[32px] border-2 border-primary/40 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary-light/12 rounded-[32px]" />
          </div>
        </div>

        {/* Glow Ring */}
        <motion.div
          className="absolute -inset-5 rounded-[40px] blur-[35px] opacity-70 -z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(255,107,53,0.4), rgba(255,167,38,0.35), rgba(255,140,66,0.4))',
          }}
          animate={{ opacity: [0.6, 0.8, 0.6], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating Elements */}
        <FloatingElement icon={<BarChart3 className="w-6 h-6" />} index={0} />
        <FloatingElement icon={<Target className="w-6 h-6" />} index={1} />
        <FloatingElement icon={<Smartphone className="w-6 h-6" />} index={2} />
        <FloatingElement icon={<Zap className="w-6 h-6" />} index={3} />
      </motion.div>
    </motion.div>
  )
}

// Floating Element Component
const FloatingElement = ({ icon, index }) => {
  const positions = [
    { top: '10%', left: '-10%' },
    { top: '20%', right: '-10%' },
    { bottom: '30%', left: '-10%' },
    { bottom: '20%', right: '-10%' },
  ]

  return (
    <motion.div
      className="absolute w-14 h-14 rounded-full glass-effect backdrop-blur-md flex items-center justify-center text-primary shadow-lg hover:shadow-primary/50"
      style={positions[index]}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, 0, -10, 0],
      }}
      transition={{
        duration: 4 + index,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.5,
      }}
      whileHover={{ scale: 1.3, rotate: 360 }}
    >
      {icon}
    </motion.div>
  )
}


export default Hero
