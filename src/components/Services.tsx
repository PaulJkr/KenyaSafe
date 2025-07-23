import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Radar, 
  Map, 
  GraduationCap, 
  Radio, 
  ArrowRight,
  Zap,
  Target,
  Shield
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Radar,
      title: 'Early Warning Systems',
      description: 'AI-powered predictions 72 hours ahead of natural disasters with machine learning algorithms analyzing satellite data, weather patterns, and historical events.',
      metric: '89% accuracy rate',
      features: ['Satellite Integration', '72-hour Forecasts', 'Multi-hazard Detection', 'Real-time Monitoring'],
      gradient: 'from-accent to-accent-hover'
    },
    {
      icon: Map,
      title: 'Risk Assessment & Mapping',
      description: 'Granular risk analysis for informed decision-making with detailed vulnerability assessments and interactive mapping tools.',
      metric: '1km resolution mapping',
      features: ['High-resolution Maps', 'Vulnerability Analysis', 'Climate Modeling', 'Risk Scenarios'],
      gradient: 'from-primary to-primary-hover'
    },
    {
      icon: GraduationCap,
      title: 'Community Training',
      description: 'Immersive preparedness education through VR simulations, workshops, and certification programs for communities and professionals.',
      metric: '50K+ people trained',
      features: ['VR Simulations', 'Certification Programs', 'Workshop Materials', 'Online Learning'],
      gradient: 'from-success to-green-600'
    },
    {
      icon: Radio,
      title: 'Emergency Response',
      description: 'Real-time response coordination connecting emergency services, NGOs, and communities through our integrated command system.',
      metric: '24/7 operations center',
      features: ['Command Center', 'Multi-agency Coordination', 'Resource Tracking', 'Communication Hub'],
      gradient: 'from-alert to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Core Services
          </Badge>
          
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Comprehensive Disaster
            <span className="text-accent block">Management Solutions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From prediction to response, our integrated platform provides end-to-end disaster management 
            capabilities trusted by governments and organizations worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-card hover:bg-card-hover border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-elevated hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="p-8">
                {/* Icon & Metric */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    <Target className="w-3 h-3 mr-1" />
                    {service.metric}
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-2xl text-foreground mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Zap className="w-3 h-3 text-accent mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  variant="ghost" 
                  className="group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 w-full"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="font-display font-bold text-3xl lg:text-4xl mb-4">
              Ready to Build Resilience?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join leading organizations worldwide in creating safer, more prepared communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="glass" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;