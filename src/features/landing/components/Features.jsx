import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Brain, LayoutGrid, BarChart3, Users, Calendar, Zap } from 'lucide-react'
import { features } from '../../../data/content'

const iconMap = {
  brain: Brain,
  'layout-grid': LayoutGrid,
  'bar-chart-3': BarChart3,
  users: Users,
  calendar: Calendar,
  zap: Zap,
}

const Features = () => {
  return (
    <section id="features" className="relative bg-gradient-to-b from-dark-1 to-dark-2 overflow-hidden">
      {/* Section Header */}
      <div className="relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto px-6"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-[0_2px_30px_rgba(255,107,53,0.5)]">
            Powerful Features
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience the future of social media marketing
          </p>
        </motion.div>
      </div>

      {/* Parallax Scenes (First 3) */}
      {features.slice(0, 2).map((feature, index) => (
        <ParallaxScene key={feature.id} feature={feature} index={index} />
      ))}

      {/* Scrollytelling Scenes (Last 2) */}
      <ScrollytellingScenes features={features.slice(2, 4)} />

      {/* Background Decoration */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  )
}

// Parallax Scene Component (for first 3 features)
const ParallaxScene = ({ feature, index }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const Icon = iconMap[feature.icon]
  
  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8])
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const isEven = index % 2 === 0

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-6"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
          {/* Image Side */}
          <motion.div
            style={{ y: imageY, scale: imageScale, opacity }}
            className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-effect">
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-orange-600/15 to-gray-900" />
              
              {/* Image */}
              {feature.image && (
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              )}
              
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-20" />
            </div>

            {/* Floating icon badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center shadow-[0_0_60px_rgba(255,107,53,0.6)]"
            >
              <Icon className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            style={{ y: textY, opacity }}
            className={`space-y-8 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-2xl font-bold text-primary">0{index + 1}</span>
              </div>

              {/* Title */}
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl">
                {feature.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-4 pt-4">
                {feature.features.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 text-gray-300"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-amber-500 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Fade-In Scene Component (for last 2 features)
const ScrollytellingScenes = ({ features }) => {
  return (
    <div className="relative">
      {features.map((feature, index) => {
        const Icon = iconMap[feature.icon]
        const isEven = index % 2 === 0

        return (
          <div 
            key={feature.id}
            className="relative min-h-screen flex items-center justify-center py-32 px-6"
          >
            <div className="max-w-[1400px] mx-auto w-full">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                  className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-effect">
                    {/* Placeholder gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-orange-600/15 to-gray-900" />
                    
                    {/* Image */}
                    {feature.image && (
                      <motion.img
                        src={feature.image}
                        alt={feature.title}
                        className="absolute inset-0 w-full h-full object-cover z-10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                    
                    {/* Glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-20" />
                  </div>

                  {/* Floating icon badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-[0_0_60px_rgba(255,107,53,0.6)] z-30"
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </motion.div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                  className={`space-y-8 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                >
                  <div className="space-y-6">
                    {/* Number badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30">
                      <span className="text-2xl font-bold text-orange-500">0{index + 3}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl">
                      {feature.description}
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-4 pt-4">
                      {feature.features && feature.features.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                          className="flex items-start gap-4 text-gray-300"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex-shrink-0" />
                          <span className="text-lg">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Features
