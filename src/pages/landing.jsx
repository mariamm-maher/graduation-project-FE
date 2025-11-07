import Hero from '../features/landing/components/Hero'
import Features from '../features/landing/components/Features'
import CampaignPlanner from '../features/landing/components/CampaignPlanner'
import CollaborationBoard from '../features/landing/components/CollaborationBoard'
import CommunicationSystem from '../features/landing/components/CommunicationSystem'
import AnalyticsDashboard from '../features/landing/components/AnalyticsDashboard'
import Footer from '../features/landing/components/Footer'
import ScrollProgress from '../components/ui/ScrollProgress'

function LandingPage() {
  return (
    <div className="App">
      <ScrollProgress />
      <Hero />
      <Features />
      <CampaignPlanner />
      <CollaborationBoard />
      <CommunicationSystem />
      <AnalyticsDashboard />
      <Footer />
    </div>
  )
}

export default LandingPage
