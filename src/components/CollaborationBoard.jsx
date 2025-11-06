import { motion } from 'framer-motion'
import { Users, TrendingUp, CheckCircle2, Clock, DollarSign, Target, Star, AlertCircle } from 'lucide-react'
import { boardFeatures, kanbanColumns } from '../data/content'

const CollaborationBoard = () => {
  return (
    <section id="collaboration" className="py-32 bg-gradient-to-b from-[#29140b] to-black relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.4) 0%, transparent 70%)',
            top: '10%',
            right: '10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.4) 0%, transparent 70%)',
            bottom: '10%',
            left: '10%',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 mb-6"
          >
            <Users className="w-5 h-5 text-orange-500" />
            <span className="text-orange-500 font-semibold">Collaboration Hub</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-[0_2px_30px_rgba(255,107,53,0.5)]">
            Influencer Collaboration Board
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
            Seamlessly manage partnerships, contracts, and campaigns
          </p>
        </motion.div>

        {/* Kanban Board */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {kanbanColumns.map((column, index) => (
            <KanbanColumn key={column.id} column={column} index={index} />
          ))}
        </div>

      
      </div>
    </section>
  )
}

const KanbanColumn = ({ column, index }) => {
  const getColumnIcon = (title) => {
    if (title.includes('Pending')) return Clock
    if (title.includes('Active')) return TrendingUp
    if (title.includes('Completed')) return CheckCircle2
    return Users
  }

  const Icon = getColumnIcon(column.title)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="glass-effect rounded-2xl p-6 space-y-5 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-colors duration-300"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-orange-500" />
          </div>
          <h4 className="font-bold text-white text-lg">{column.title}</h4>
        </div>
        <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-500 text-sm font-semibold">
          {column.count}
        </span>
      </div>

      {column.cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + i * 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-5 border border-white/5 hover:border-orange-500/30 transition-all duration-300 cursor-pointer min-h-[180px] flex flex-col"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-orange-500/5 to-amber-500/5" />
          
          <div className="relative z-10 flex flex-col h-full">
            {/* Header with tags */}
            <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-500 border border-orange-500/30">
                <Target className="w-3 h-3" />
                {card.tag}
              </span>
              {card.priority && (
                <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium ${
                  card.priority === 'high' 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  <AlertCircle className="w-3 h-3" />
                  {card.priority === 'high' ? 'High Priority' : 'Medium'}
                </span>
              )}
              {card.status && (
                <span className="inline-flex items-center gap-1 text-green-400 text-xs font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  {card.status}
                </span>
              )}
            </div>

            {/* Title */}
            <h5 className="text-base font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
              {card.title}
            </h5>

            {/* Meta info with icons */}
            <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-4 mt-auto">
              {Object.entries(card.meta).map(([key, value], i) => (
                <span key={i} className="inline-flex items-center gap-1.5">
                  {key.includes('budget') || key.includes('revenue') ? (
                    <DollarSign className="w-3.5 h-3.5 text-green-400" />
                  ) : key.includes('reach') || key.includes('followers') ? (
                    <Users className="w-3.5 h-3.5 text-blue-400" />
                  ) : (
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                  )}
                  {value}
                </span>
              ))}
            </div>

            {/* Progress bar */}
            {card.progress && (
              <div className="mt-auto pt-3">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Progress</span>
                  <span className="font-semibold text-orange-500">{card.progress}%</span>
                </div>
                <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-[0_0_12px_rgba(255,107,53,0.6)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${card.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default CollaborationBoard
