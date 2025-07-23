import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import LiveDashboard from '@/components/LiveDashboard';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <LiveDashboard />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;