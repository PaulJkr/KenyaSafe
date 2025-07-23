import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Globe,
  FileText,
  Users,
  AlertTriangle,
  Download
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Early Warning Systems', href: '#services' },
    { label: 'Risk Assessment', href: '#services' },
    { label: 'Community Training', href: '#services' },
    { label: 'Emergency Response', href: '#services' },
    { label: 'Live Dashboard', href: '#dashboard' },
    { label: 'Case Studies', href: '#resources' }
  ];

  const resources = [
    { label: 'Best Practices Guide', icon: FileText },
    { label: 'API Documentation', icon: Globe },
    { label: 'Training Materials', icon: Users },
    { label: 'Research Publications', icon: Download }
  ];

  const emergencyContacts = [
    { label: 'Global Emergency Hotline', number: '+1-800-GUARDIAN', available: '24/7' },
    { label: 'Technical Support', number: '+1-800-TECH-911', available: '24/7' },
    { label: 'Partnership Inquiries', number: '+1-800-PARTNER', available: 'Business Hours' }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#', followers: '25K' },
    { icon: Twitter, label: 'Twitter', href: '#', followers: '48K' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', followers: '32K' },
    { icon: Youtube, label: 'YouTube', href: '#', followers: '15K' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Emergency Contact Banner */}
      <div className="bg-alert py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 animate-pulse" />
              <span className="font-semibold text-alert-foreground">
                Emergency Situation? Get Immediate Help
              </span>
            </div>
            <Button variant="glass" size="lg" className="bg-white/20 hover:bg-white/30">
              <Phone className="w-5 h-5 mr-2" />
              Call +1-800-GUARDIAN
              <Badge variant="secondary" className="ml-2 bg-white/20">24/7</Badge>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="h-8 w-8 text-accent" />
                <span className="font-display font-bold text-2xl">
                  GuardianWeave
                </span>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Leading the future of disaster preparedness through AI-powered 
                early warning systems and comprehensive emergency management solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Global Headquarters, Innovation District</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>contact@guardianweave.org</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>24/7 Emergency Operations Center</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Resources</h3>
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm group"
                  >
                    <resource.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {resource.label}
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h4 className="font-medium mb-4">Stay Informed</h4>
                <p className="text-sm text-primary-foreground/70 mb-4">
                  Get the latest disaster alerts and preparedness insights.
                </p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button variant="accent" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Emergency Contacts</h3>
              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="font-medium text-sm mb-1">
                      {contact.label}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-semibold">
                        {contact.number}
                      </span>
                      <Badge variant="secondary" className="text-xs bg-white/10">
                        {contact.available}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Our Mission</h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-2 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm group"
                    >
                      <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium">{social.label}</div>
                        <div className="text-xs text-primary-foreground/60">{social.followers}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-primary-foreground/70">
              <span>© 2024 GuardianWeave. All rights reserved.</span>
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Accessibility</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-success/20 text-success">
                <Shield className="w-3 h-3 mr-1" />
                ISO 27001 Certified
              </Badge>
              <Badge variant="secondary" className="bg-accent/20 text-accent">
                <Globe className="w-3 h-3 mr-1" />
                GDPR Compliant
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;