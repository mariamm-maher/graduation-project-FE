import Hero from '../components/Hero'
import Features from '../components/Features'
import CampaignPlanner from '../components/CampaignPlanner'
import CollaborationBoard from '../components/CollaborationBoard'
import CommunicationSystem from '../components/CommunicationSystem'
import AnalyticsDashboard from '../components/AnalyticsDashboard'
import Footer from '../components/Footer'
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
