import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Numbers from './sections/Numbers';
import About from './sections/About';
import ForWho from './sections/ForWho';
import Steps from './sections/Steps';
import Conditions from './sections/Conditions';
import Partnerships from './sections/Partnerships';
import Brands from './sections/Brands';
import Feedback from './sections/Feedback';
import CTA from './sections/CTA';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <main>
        <Hero />
        <Numbers />
        <About />
        <ForWho />
        <Steps />
        <Conditions />
        <Partnerships />
        <Brands />
        <Feedback />
        <CTA />
      </main>
      <div className="mt-[80px] max-1024:mt-[8px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
