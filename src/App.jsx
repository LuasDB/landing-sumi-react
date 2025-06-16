import AnimatedSection from './components/AnimatedSection';
import Header from './components/Header/Header';
import Hero from './components/Hero';
import ImageHero from '@/assets/images/hero.jpg'
import ServiceCard from './components/ServiceCard';
import IntroduccionCalibration from '@/components/IntroduccionCalibration'
import SearchDevices from '@/components/SearchDevices'
import AcreditedMagnitudes from './components/AcreditedMagnitudes';
import CredibilitySection from './components/CredibilitySection';
import Footer from './components/Footer';

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>

        <Hero backgroundImage={ImageHero}/>
        <CredibilitySection />
        <SearchDevices />
        <Footer />
      </main>
    </div>
  );
}

export default App;