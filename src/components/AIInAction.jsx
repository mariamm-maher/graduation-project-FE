import { motion } from 'framer-motion'
import { aiBenefits } from '../data/content'

const AIInAction = () => {
  return (
    <section id="ai-action" className="py-24 bg-gradient-to-b from-dark-2 to-dark-1 relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
              AI in Action
            </h2>
            <p className="text-xl text-gray-400">
              See how our AI transforms your marketing strategy
            </p>

            <div className="space-y-6">
              {aiBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="text-3xl">{benefit.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-500">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <AIGraphic />
        </div>
      </div>
    </section>
  )
}

const AIGraphic = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <svg viewBox="0 0 300 400" className="w-full h-auto max-w-sm mx-auto text-primary">
        {/* Central Brain */}
        <motion.circle
          cx="150"
          cy="120"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Neurons */}
        {[[130, 105], [150, 95], [170, 105], [150, 130]].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="8"
            fill="currentColor"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
          />
        ))}

        {/* Connection Lines */}
        {[[150, 160, 80, 220], [150, 160, 150, 220], [150, 160, 220, 220]].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3, duration: 1 }}
          />
        ))}

        {/* Data Points */}
        {[80, 150, 220].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy="220"
            r="5"
            fill="currentColor"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ delay: i * 0.3, duration: 2, repeat: Infinity }}
          />
        ))}

        {/* Floating Elements */}
        {[
          { x: 60, y: 250, text: 'Data' },
          { x: 150, y: 260, text: 'Process' },
          { x: 240, y: 250, text: 'Output' }
        ].map((item, i) => (
          <g key={i}>
            <motion.rect
              x={item.x}
              y={item.y}
              width="40"
              height="30"
              rx="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              animate={{ y: [item.y, item.y - 10, item.y] }}
              transition={{ delay: i * 0.5, duration: 3, repeat: Infinity }}
            />
            <text
              x={item.x + 20}
              y={item.y + 20}
              textAnchor="middle"
              className="text-xs fill-current"
            >
              {item.text}
            </text>
          </g>
        ))}
      </svg>
    </motion.div>
  )
}

export default AIInAction
