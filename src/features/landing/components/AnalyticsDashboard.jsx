import { motion } from 'framer-motion'
import { dashboardCards } from '../../../data/content'

const AnalyticsDashboard = () => {
  return (
    <section id="analytics" className="py-24 bg-dark-1 relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Powerful Analytics Dashboard
          </h2>
          <p className="text-xl text-gray-400">
            Track every metric that matters to your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card, index) => (
            <DashboardCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const DashboardCard = ({ card, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="p-6 glass-effect rounded-xl space-y-4"
    >
      <div className="flex justify-between items-start">
        <h4 className="font-semibold text-white">{card.title}</h4>
        <span className="text-2xl font-bold text-primary">{card.value}</span>
      </div>

      {card.type === 'line' && <LineChart />}
      {card.type === 'bar' && <BarChart />}
      {card.type === 'bubble' && <BubbleChart />}
      {card.type === 'bars' && <HorizontalBars bars={card.bars} />}
      {card.type === 'gauge' && <GaugeChart />}

      {card.trend && (
        <p className="text-sm text-gray-500">{card.trend}</p>
      )}
    </motion.div>
  )
}

const LineChart = () => (
  <svg viewBox="0 0 200 80" className="w-full h-16">
    <motion.polyline
      points="10,60 40,40 70,50 100,20 130,30 160,10 190,15"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-primary"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    />
    {[10, 40, 100, 190].map((x, i) => (
      <circle key={i} cx={x} cy={[60, 40, 20, 15][i]} r="3" className="fill-primary" />
    ))}
  </svg>
)

const BarChart = () => (
  <svg viewBox="0 0 200 80" className="w-full h-16">
    {[10, 40, 70, 100, 130, 160].map((x, i) => {
      const heights = [30, 50, 60, 70, 55, 40]
      return (
        <motion.rect
          key={i}
          x={x}
          y={80 - heights[i]}
          width="20"
          height={heights[i]}
          className="fill-primary"
          initial={{ height: 0, y: 80 }}
          whileInView={{ height: heights[i], y: 80 - heights[i] }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        />
      )
    })}
  </svg>
)

const BubbleChart = () => (
  <svg viewBox="0 0 200 80" className="w-full h-16">
    {[[30, 50, 8], [60, 40, 10], [90, 30, 12], [120, 25, 14], [150, 35, 12], [180, 45, 10]].map(([cx, cy, r], i) => (
      <motion.circle
        key={i}
        cx={cx}
        cy={cy}
        r={r}
        className="fill-primary"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
      />
    ))}
  </svg>
)

const HorizontalBars = ({ bars }) => (
  <div className="space-y-3">
    {bars.map((bar, i) => (
      <div key={i}>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-500">{bar.label}</span>
          <span className="text-primary">{bar.value}%</span>
        </div>
        <div className="h-2 bg-dark-2 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-orange"
            initial={{ width: 0 }}
            whileInView={{ width: `${bar.value}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 1 }}
          />
        </div>
      </div>
    ))}
  </div>
)

const GaugeChart = () => (
  <svg viewBox="0 0 180 100" className="w-full h-20">
    <path
      d="M 20 80 A 60 60 0 0 1 160 80"
      fill="none"
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="12"
      strokeLinecap="round"
    />
    <motion.path
      d="M 20 80 A 60 60 0 0 1 140 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
      className="text-primary"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    />
    <circle cx="90" cy="80" r="4" className="fill-primary" />
  </svg>
)

export default AnalyticsDashboard
