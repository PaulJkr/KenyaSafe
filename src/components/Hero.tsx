import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, AlertTriangle, Users, Globe, TrendingUp } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const stats = [
    { label: 'Organizations Trust Us', value: '150+', icon: Users },
    { label: 'Countries Covered', value: '85+', icon: Globe },
    { label: 'Prediction Accuracy', value: '89%', icon: TrendingUp },
    { label: 'Active Alerts Today', value: '12', icon: AlertTriangle }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,194,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,194,212,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Trusted by 150+ Organizations Worldwide
          </Badge>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-white mb-6 animate-fade-in">
            <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              Predict. Prepare.
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-accent">
              Protect.
            </span>
          </h1>

          {/* Supporting Tagline */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            AI-Powered Early Warning Systems for Resilient Communities
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="group">
              <AlertTriangle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Activate Live Alerts
            </Button>
            
            <Button variant="glass" size="xl" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View Demo
            </Button>
            
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
              Partner With Us
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <stat.icon className="w-8 h-8 text-accent mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;