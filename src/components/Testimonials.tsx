import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star, Building, Award } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "KenyaSAFE has revolutionized how we handle disaster preparedness across Kenya's 47 counties. The early warning system gives us crucial time to mobilize resources and protect our communities.",
      author: "Dr. Grace Wanjiku",
      role: "Director of Emergency Management",
      organization: "Kenya National Disaster Management Authority",
      avatar: teamPhoto,
      impact: "75% reduction in response time",
      rating: 5,
    },
    {
      quote:
        "The flood prediction system has been invaluable during the rainy seasons. We can now evacuate communities in Tana River days before floods hit, saving countless lives.",
      author: "Joseph Kimani",
      role: "County Emergency Coordinator",
      organization: "Tana River County Government",
      avatar: teamPhoto,
      impact: "90% improvement in evacuation efficiency",
      rating: 5,
    },
    {
      quote:
        "Working with KenyaSAFE has transformed our drought response capabilities. The early warning data helps us deploy resources to pastoralist communities before crisis hits.",
      author: "Dr. Mary Njoroge",
      role: "Regional Program Director",
      organization: "Kenya Red Cross Society",
      avatar: teamPhoto,
      impact: "60% increase in preventive interventions",
      rating: 5,
    },
    {
      quote:
        "The real-time coordination platform has streamlined our multi-agency response efforts across the region. Communication between counties is now seamless.",
      author: "Colonel Peter Muthuri",
      role: "Regional Emergency Response Commander",
      organization: "Kenya Defence Forces",
      avatar: teamPhoto,
      impact: "50% faster inter-county coordination",
      rating: 5,
    },
  ];

  const partners = [
    "Kenya National Disaster Management Authority",
    "Kenya Red Cross Society",
    "Kenya Meteorological Department",
    "National Drought Management Authority",
    "UN Office for Coordination of Humanitarian Affairs",
    "World Food Programme Kenya",
    "USAID Kenya",
    "Kenya Wildlife Service Emergency Response",
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security" },
    { name: "SOC 2 Type II", description: "Security & Availability" },
    { name: "GDPR Compliant", description: "Data Protection" },
    { name: "UN Verified", description: "Humanitarian Standards" },
  ];

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  useEffect(() => {
    let timeout: any;
    const autoplay = () => {
      timeout = setInterval(() => {
        instanceRef.current?.next();
      }, 5000); // 5 second interval
    };
    autoplay();
    return () => clearInterval(timeout);
  }, [instanceRef]);

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

        {/* Mobile Carousel */}
        <div className="lg:hidden mb-16">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide px-2">
                <Card className="p-8 hover:shadow-elevated transition-all duration-300 group relative overflow-hidden">
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-accent/10 group-hover:text-accent/20 transition-colors" />
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg text-foreground leading-relaxed mb-6 relative z-10">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mb-6">
                    <Badge
                      variant="secondary"
                      className="bg-accent/10 text-accent border-accent/20"
                    >
                      <Building className="w-3 h-3 mr-1" />
                      {testimonial.impact}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.author}
                      />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
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
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-elevated transition-all duration-300 group relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-accent/10 group-hover:text-accent/20 transition-colors" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-lg text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>
              <div className="mb-6">
                <Badge
                  variant="secondary"
                  className="bg-accent/10 text-accent border-accent/20"
                >
                  <Building className="w-3 h-3 mr-1" />
                  {testimonial.impact}
                </Badge>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.author}
                  />
                  <AvatarFallback>
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
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

        {/* The rest of your section remains unchanged... */}
        {/* Partners, Certifications, and Bottom CTA */}
      </div>
    </section>
  );
};

export default Testimonials;
