import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, Phone, Bell, Shield } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      label: 'Services',
      items: [
        'Early Warning Systems',
        'Risk Assessment & Mapping',
        'Community Training Programs',
        'Emergency Response Coordination'
      ]
    },
    {
      label: 'Data & Insights',
      items: [
        'Real-Time Disaster Dashboard',
        'Historical Data & Analytics',
        'Research Publications',
        'API Documentation'
      ]
    },
    {
      label: 'Resources',
      items: [
        'Best Practices Library',
        'Training Materials',
        'Case Studies',
        'Webinars & Events'
      ]
    },
    {
      label: 'About',
      items: [
        'Our Mission & Impact',
        'Leadership Team',
        'Partners & Testimonials',
        'Careers'
      ]
    }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/90 backdrop-blur-glassmorphism shadow-elevated" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-accent" />
            <span className="font-display font-bold text-xl text-foreground">
              GuardianWeave
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                  {item.label}
                </button>
                
                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-0 w-64 bg-card border border-border rounded-lg shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2 p-4">
                  {item.items.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-card-hover rounded-md transition-colors"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-foreground">
              <Bell className="h-4 w-4 mr-2" />
              Live Alerts
            </Button>
            
            <Button variant="emergency" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Emergency: 24/7
            </Button>
            
            <Button variant="accent" size="sm">
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="py-4 space-y-4">
              {navigationItems.map((item, index) => (
                <div key={index} className="px-4">
                  <h3 className="font-medium text-foreground mb-2">{item.label}</h3>
                  <div className="space-y-1 pl-4">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="px-4 pt-4 border-t border-border space-y-2">
                <Button variant="emergency" size="sm" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency: 24/7
                </Button>
                <Button variant="accent" size="sm" className="w-full">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;