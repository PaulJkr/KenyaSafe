import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote, Star, Building, Award } from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "GuardianWeave's early warning system has transformed our disaster preparedness capabilities. We now have 72-hour advance notice that has saved countless lives and resources.",
      author: "Dr. Sarah Chen",
      role: "Director of Emergency Management",
      organization: "Singapore Civil Defence Force",
      avatar: teamPhoto,
      impact: "89% reduction in response time",
      rating: 5
    },
    {
      quote: "The granular risk mapping and assessment tools have revolutionized how we approach community resilience planning. The data accuracy and visualization capabilities are unmatched.",
      author: "Michael Rodriguez",
      role: "Emergency Operations Coordinator",
      organization: "FEMA Regional Office",
      avatar: teamPhoto,
      impact: "50% improvement in resource allocation",
      rating: 5
    },
    {
      quote: "Our partnership with GuardianWeave has enabled us to train over 15,000 community volunteers. The VR simulation training is incredibly effective and engaging.",
      author: "Dr. Amara Okafor",
      role: "Regional Program Director",
      organization: "International Red Cross",
      avatar: teamPhoto,
      impact: "300% increase in volunteer retention",
      rating: 5
    },
    {
      quote: "The real-time coordination platform has streamlined our multi-agency response efforts. What used to take hours now happens in minutes.",
      author: "Colonel James Mitchell",
      role: "Emergency Response Commander",
      organization: "UK Emergency Services",
      avatar: teamPhoto,
      impact: "60% faster multi-agency coordination",
      rating: 5
    }
  ];

  const partners = [
    "United Nations OCHA", "World Bank", "Red Cross", "FEMA", 
    "European Emergency Response", "Asian Disaster Preparedness Center",
    "WHO Emergency Program", "UNESCO Disaster Risk Reduction"
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security" },
    { name: "SOC 2 Type II", description: "Security & Availability" },
    { name: "GDPR Compliant", description: "Data Protection" },
    { name: "UN Verified", description: "Humanitarian Standards" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Award className="w-4 h-4 mr-2" />
            Trusted Worldwide
          </Badge>
          
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Leading Organizations
            <span className="text-accent block">Trust Our Platform</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From government agencies to international NGOs, see how our platform 
            is making communities safer and more resilient worldwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-elevated transition-all duration-300 group relative overflow-hidden">
              {/* Background Quote */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-accent/10 group-hover:text-accent/20 transition-colors" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Impact Metric */}
              <div className="mb-6">
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  <Building className="w-3 h-3 mr-1" />
                  {testimonial.impact}
                </Badge>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm font-medium text-accent">
                    {testimonial.organization}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Partner Organizations */}
        <div className="mb-16">
          <h3 className="font-display font-semibold text-2xl text-center text-foreground mb-8">
            Trusted by Leading Organizations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg hover:bg-card-hover transition-colors group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Building className="w-8 h-8 text-accent" />
                </div>
                <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-display font-semibold text-2xl text-center text-foreground mb-8">
            Security & Compliance Certifications
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-shadow group">
                <div className="w-12 h-12 bg-gradient-to-br from-success/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-success" />
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {cert.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {cert.description}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 lg:p-12 border border-accent/20">
            <h3 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Join the Global Network
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Become part of a worldwide community dedicated to building resilient, 
              prepared communities through cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Card className="p-4 bg-card hover:bg-card-hover transition-colors">
                <div className="text-2xl font-bold text-accent">150+</div>
                <div className="text-sm text-muted-foreground">Organizations</div>
              </Card>
              <Card className="p-4 bg-card hover:bg-card-hover transition-colors">
                <div className="text-2xl font-bold text-accent">85+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </Card>
              <Card className="p-4 bg-card hover:bg-card-hover transition-colors">
                <div className="text-2xl font-bold text-accent">50K+</div>
                <div className="text-sm text-muted-foreground">Lives Protected</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;