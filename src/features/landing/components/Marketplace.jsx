import { motion } from 'framer-motion'
import { marketplaceCards } from '../../../data/content'

const Marketplace = () => {
  return (
    <section id="marketplace" className="py-24 bg-gradient-to-b from-dark-2 to-dark-1 relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Connect With Influencers & Agencies
          </h2>
          <p className="text-xl text-gray-400">
            Our global marketplace of vetted professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {marketplaceCards.map((card, index) => (
            <MarketplaceCard key={index} card={card} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 p-12 glass-effect rounded-2xl max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-white">Ready to grow your network?</h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Join thousands of brands and agencies using MarketAI to collaborate and create
            amazing campaigns.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-gradient-orange text-white font-semibold shadow-[0_4px_16px_rgba(255,107,53,0.5)] hover:shadow-[0_8px_28px_rgba(255,107,53,0.7)] transition-all duration-300"
          >
            Access Marketplace
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

const MarketplaceCard = ({ card, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -8 }}
      className="p-8 glass-effect glass-effect-hover rounded-xl space-y-6"
    >
      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-3xl">
        {index === 0 ? '👥' : index === 1 ? '🏢' : '💬'}
      </div>

      <h3 className="text-2xl font-bold text-white">{card.title}</h3>
      <p className="text-gray-400 leading-relaxed">{card.description}</p>

      <div className="flex gap-8">
        {card.stats.map((stat, i) => (
          <div key={i}>
            <div className="text-2xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-6 py-3 rounded-lg glass-effect hover:bg-primary/15 hover:border-primary/50 text-white font-medium transition-all duration-300"
      >
        {card.buttonText}
      </motion.button>
    </motion.div>
  )
}

export default Marketplace
