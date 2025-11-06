import { motion } from 'framer-motion'
import { Bell, MessageSquare, Shield, Zap, User, Building2, Send, Paperclip, Users } from 'lucide-react'
import { commFeatures, roleBadges, chatMessages } from '../data/content'

const iconMap = {
  '🔔': Bell,
  '💬': MessageSquare,
  '🛡️': Shield,
  '⚡': Zap,
}

const CommunicationSystem = () => {
  return (
    <section id="communication" className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.4) 0%, transparent 70%)',
            top: '20%',
            left: '5%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 mb-4"
            >
              <MessageSquare className="w-5 h-5 text-orange-500" />
              <span className="text-orange-500 font-semibold">Real-Time Communication</span>
            </motion.div>

            <h2 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_2px_30px_rgba(255,107,53,0.5)]">
              Instant Notifications & Smart Chat
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed">
              Never miss an important update. Our intelligent notification system keeps you
              informed while our role-based chat enables seamless communication.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {commFeatures.map((feature, index) => {
                const Icon = iconMap[feature.icon] || MessageSquare
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group p-5 glass-effect rounded-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <h4 className="font-bold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">{feature.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>

          </motion.div>

          {/* Chat Mockup */}
          <ChatMockup />
        </div>
      </div>
    </section>
  )
}

const ChatMockup = () => {
  const budgetConversation = [
    {
      id: 1,
      type: 'received',
      sender: 'Sarah (Influencer)',
      text: "Hi! I'm interested in your campaign. What budget range are you working with?",
      time: '10:23 AM',
      icon: User
    },
    {
      id: 2,
      type: 'sent',
      sender: 'Agency Owner',
      text: "Hello Sarah! We're looking at $5,000-$8,000 for this campaign. Does that work for you?",
      time: '10:25 AM',
      icon: Building2
    },
    {
      id: 3,
      type: 'received',
      sender: 'Sarah (Influencer)',
      text: "That's in my range! Can we discuss deliverables? I'm thinking 3 posts + 5 stories.",
      time: '10:27 AM',
      icon: User
    },
    {
      id: 4,
      type: 'sent',
      sender: 'Agency Owner',
      text: "Perfect! Let's go with $6,500 for that package. I'll send over the contract details.",
      time: '10:29 AM',
      icon: Building2
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="glass-effect rounded-2xl overflow-hidden max-w-md mx-auto border border-white/10 shadow-2xl"
    >
      {/* Header */}
      <div className="p-5 border-b border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-amber-500/5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/30 to-amber-500/30 flex items-center justify-center border border-orange-500/30">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
            </div>
            <div>
              <h5 className="font-bold text-white">Campaign Discussion</h5>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Both online
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="text-gray-400 hover:text-orange-500 transition-colors">
              <Bell className="w-5 h-5" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="text-gray-400 hover:text-orange-500 transition-colors">
              <Paperclip className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="p-5 space-y-5 min-h-[420px] bg-gradient-to-b from-gray-900/50 to-black/50">
        {budgetConversation.map((message, index) => {
          const Icon = message.icon
          return (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'} gap-3`}
            >
              {message.type === 'received' && (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
              )}
              <div className={`max-w-[75%] ${message.type === 'sent' ? 'text-right' : ''}`}>
                <div className="text-xs font-medium text-gray-400 mb-1.5">{message.sender}</div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-2xl ${
                    message.type === 'sent'
                      ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-[0_0_20px_rgba(255,107,53,0.3)]'
                      : 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 text-gray-100 border border-white/5'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </motion.div>
                <div className="text-xs text-gray-500 mt-1.5 flex items-center gap-1 justify-end">
                  <span>{message.time}</span>
                  {message.type === 'sent' && (
                    <span className="text-orange-500">✓✓</span>
                  )}
                </div>
              </div>
              {message.type === 'sent' && (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/30 to-amber-500/30 flex items-center justify-center flex-shrink-0 border border-orange-500/30">
                  <Icon className="w-5 h-5 text-orange-500" />
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/10 bg-gray-900/50">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 rounded-xl bg-gray-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors"
          />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_20px_rgba(255,107,53,0.4)] hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] transition-all duration-300 flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default CommunicationSystem
