import AnimatedSection from '@/components/AnimatedSection';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero';
import ImageHero from '@/assets/images/hero.jpg'
import ServiceCard from '@/components/ServiceCard';
import IntroduccionCalibration from '@/components/IntroduccionCalibration'
import SearchDevices from '@/components/SearchDevices'
import AcreditedMagnitudes from '@/components/AcreditedMagnitudes';
import CredibilitySection from '@/components/CredibilitySection';
import Footer from '@/components/Footer';
import SliderCarousel from '@/components/SliderCarousel';
import About from '@/Sections/About';
import AddedValue from '@/Sections/AddedValue';
import Accreditations from '@/Sections/Accreditations';
import Accreditations2 from '@/Sections/Accreditations2';
import QualityPolicy from '@/Sections/QualityPolicy';

export default function Landing(){
    return (
         <div className="min-h-screen bg-gray-50 w-full">
      <Header />
      <main className="pt-0 lg:pt-0  h-screen">

        <Hero backgroundImage={ImageHero}/>
        <div className="bg-gradient-to-b from-green-100 via-white to-green-200">
        <About className=""/>
        <QualityPolicy />
        <Accreditations />|
        <SearchDevices />

    
        </div>

        {/* <SliderCarousel  /> */}
        {/* <CredibilitySection />
        <SearchDevices /> */}
        <Footer />
      </main>
    </div>
    )
}