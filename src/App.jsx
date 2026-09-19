import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import CustomOrder from './components/CustomOrder'
import OnlineApplications from './components/OnlineApplications'
import About from './components/About'
import Contact from './components/Contact'
import LocationMap from './components/LocationMap'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><Services /><WhyChooseUs /><Gallery /><CustomOrder /><OnlineApplications /><About /><Contact /><LocationMap />
      </main>
      <Footer />
      <WhatsAppButton floating message="Hello BABA PRINTING POINT, I would like to ask about your printing services." />
    </>)
}
