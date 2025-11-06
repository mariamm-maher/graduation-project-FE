export const features = [
  {
    id: 1,
    title: 'AI Content Generation',
    description: 'Create compelling social media posts, captions, and hashtags in seconds using advanced generative AI tailored to your brand voice.',
    icon: 'brain',
    features: [
      'Smart hashtag suggestions',
      'Brand voice customization',
      'Multi-language support'
    ],
        image: '../assets/AI-Content.png'
  },
  {
    id: 2,
    title: 'Multi-Channel Management',
    description: 'Schedule and publish content across Instagram, Facebook, Twitter, LinkedIn, and TikTok from a single unified dashboard.',
    icon: 'layout-grid',
    features: [
      'Unified scheduling',
      'Cross-platform analytics',
      'Optimal posting times'
    ],
        image: '../assets/multi.jpeg'
  },
  {
    id: 3,
    title: 'Influencer & Agency Marketplace',
    description: 'Connect directly with vetted influencers and marketing agencies. Collaborate, negotiate, and manage partnerships seamlessly.',
    icon: 'users',
    features: [
      'Verified influencers',
      'Direct messaging',
      'Contract management'
    ],
    image: '../assets/market.jpeg'
  },
   {
    id: 4,
    title: 'Smart Scheduling',
    description: 'Optimize posting times based on AI analysis of your audience behavior and engagement patterns across all platforms.',
    icon: 'calendar',
    features: [
      'Best time recommendations',
      'Auto-scheduling',
      'Bulk content planning'
    ],
    image: '../assets/smart.jpeg'
  }

]

export const plannerFeatures = [
  {
    icon: '🎯',
    title: 'Smart Content Calendar',
    description: 'AI generates optimized posting schedules based on your audience behavior patterns'
  },
  {
    icon: '📈',
    title: 'Budget Optimization',
    description: 'Intelligent budget allocation across channels for maximum ROI'
  },
  {
    icon: '🎨',
    title: 'Content Themes & Ideas',
    description: 'Get creative campaign concepts and content ideas tailored to your niche'
  },
  {
    icon: '⚡',
    title: 'Instant Strategy Reports',
    description: 'Download complete strategy documents and presentation-ready reports'
  }
]

export const boardFeatures = [
  {
    icon: '📋',
    title: 'Visual Project Management',
    description: 'Drag-and-drop Kanban board to track influencer partnerships from proposal to completion'
  },
  {
    icon: '✍️',
    title: 'Smart Contracts',
    description: 'Generate, send, and manage contracts with e-signature integration'
  },
  {
    icon: '📊',
    title: 'Performance Tracking',
    description: 'Monitor deliverables, engagement metrics, and ROI for each collaboration'
  },
  {
    icon: '💬',
    title: 'Integrated Communication',
    description: 'Chat directly with influencers, share files, and get real-time notifications'
  }
]

export const commFeatures = [
  {
    icon: '🔔',
    title: 'Smart Notifications',
    description: 'Campaign updates, engagement alerts, payment notifications'
  },
  {
    icon: '💬',
    title: 'Multi-Role Chat',
    description: 'Separate channels for brands, influencers, and agency teams'
  },
  {
    icon: '📁',
    title: 'File Sharing',
    description: 'Share media assets, contracts, and campaign briefs instantly'
  },
  {
    icon: '🔒',
    title: 'Secure Messaging',
    description: 'End-to-end encryption for all communications'
  }
]

export const aiBenefits = [
  {
    icon: '🎯',
    title: 'Smart Targeting',
    description: 'AI analyzes audience data to identify your ideal customer profiles and delivers content that resonates.'
  },
  {
    icon: '📈',
    title: 'Predictive Analytics',
    description: 'Forecast trends and campaign outcomes before they happen with machine learning predictions.'
  },
  {
    icon: '⚡',
    title: 'Instant Optimization',
    description: 'Real-time AI adjustments ensure your campaigns always perform at their peak capacity.'
  },
  {
    icon: '🔄',
    title: 'Continuous Learning',
    description: 'Our AI learns from every campaign to provide better recommendations over time.'
  }
]

export const marketplaceCards = [
  {
    title: 'Top Influencers',
    description: 'Access thousands of verified influencers across industries. Filter by niche, audience size, and engagement rates.',
    stats: [
      { value: '50K+', label: 'Influencers' },
      { value: '98%', label: 'Verified' }
    ],
    buttonText: 'Explore Influencers'
  },
  {
    title: 'Marketing Agencies',
    description: 'Partner with experienced agencies specializing in social media marketing, content creation, and campaign management.',
    stats: [
      { value: '1.2K+', label: 'Agencies' },
      { value: '4.8★', label: 'Avg Rating' }
    ],
    buttonText: 'Find Agencies'
  },
  {
    title: 'Direct Communication',
    description: 'Built-in messaging system for seamless collaboration. Negotiate rates, discuss campaigns, and manage contracts.',
    stats: [
      { value: '24/7', label: 'Support' },
      { value: '<1hr', label: 'Avg Response' }
    ],
    buttonText: 'Start Messaging'
  }
]

export const heroStats = [
  { value: 50000, label: 'Active Users' },
  { value: 1000000, label: 'Posts Generated' },
  { value: 98, label: 'Satisfaction Rate', suffix: '%' }
]

export const trustBadges = [
  { icon: '✓', text: 'AI-Powered' },
  { icon: '✓', text: 'Data-Driven' },
  { icon: '✓', text: 'Multi-Channel' }
]

export const roleBadges = [
  { icon: '👔', text: 'Brand Manager', type: 'brand' },
  { icon: '⭐', text: 'Influencer', type: 'influencer' },
  { icon: '🏢', text: 'Agency', type: 'agency' },
  { icon: '⚙️', text: 'Admin', type: 'admin' }
]

export const kanbanColumns = [
  {
    id: 1,
    title: 'Proposals',
    count: 8,
    cards: [
      {
        tag: 'Fashion',
        priority: 'high',
        title: 'Summer Collection Launch',
        meta: { person: '👤 Sarah Johnson', budget: '💰 $5K' }
      },
      {
        tag: 'Tech',
        priority: 'medium',
        title: 'Product Review Campaign',
        meta: { person: '👤 Mike Chen', budget: '💰 $3.5K' }
      }
    ]
  },
  {
    id: 2,
    title: 'In Progress',
    count: 5,
    cards: [
      {
        tag: 'Fitness',
        priority: 'high',
        title: 'Wellness Challenge',
        meta: { person: '👤 Alex Rivera', time: '📅 5 days left' },
        progress: 65
      }
    ]
  },
  {
    id: 3,
    title: 'Completed',
    count: 12,
    cards: [
      {
        tag: 'Food',
        status: '✓',
        title: 'Restaurant Opening',
        meta: { person: '👤 Emma Davis', rating: '⭐ 4.9' },
        completed: true
      }
    ]
  }
]

export const chatMessages = [
  {
    id: 1,
    sender: 'Sarah (Influencer)',
    text: 'Just posted the content! Check it out 📸',
    time: '2 min ago',
    type: 'received'
  },
  {
    id: 2,
    sender: 'You (Brand Manager)',
    text: 'Looks amazing! Great engagement already 🎉',
    time: '1 min ago',
    type: 'sent'
  },
  {
    id: 3,
    sender: 'Alex (Agency)',
    text: 'Performance is exceeding projections by 24% 📊',
    time: 'Just now',
    type: 'received'
  }
]

export const dashboardCards = [
  {
    id: 1,
    title: 'Engagement Rate',
    value: '+24.5%',
    trend: '↑ 24.5% from last week',
    type: 'line'
  },
  {
    id: 2,
    title: 'Total Reach',
    value: '245.8K',
    trend: '↑ 18.2% from last month',
    type: 'bar'
  },
  {
    id: 3,
    title: 'Followers Growth',
    value: '+1,240',
    trend: '↑ 31.7% this month',
    type: 'bubble'
  },
  {
    id: 4,
    title: 'Conversions',
    value: '3,847',
    trend: '↑ 15.3% vs target',
    type: 'line'
  },
  {
    id: 5,
    title: 'Top Content',
    value: 'Video',
    trend: null,
    type: 'bars',
    bars: [
      { label: 'Video Posts', value: 95 },
      { label: 'Carousel', value: 78 },
      { label: 'Reels', value: 88 }
    ]
  },
  {
    id: 6,
    title: 'Campaign ROI',
    value: '342%',
    trend: 'Above target by 42%',
    type: 'gauge'
  }
]
