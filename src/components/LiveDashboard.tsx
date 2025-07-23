import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  AlertTriangle, 
  Users, 
  MapPin, 
  TrendingUp,
  Clock,
  Globe,
  Zap,
  Shield,
  RefreshCw
} from 'lucide-react';
import dashboardIllustration from '@/assets/dashboard-illustration.jpg';

const LiveDashboard = () => {
  const [activeAlerts, setActiveAlerts] = useState(12);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlerts(prev => prev + Math.floor(Math.random() * 3) - 1);
      setLastUpdate(new Date());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const alerts = [
    {
      id: 1,
      type: 'Flood Warning',
      location: 'Tana River County',
      severity: 'High',
      magnitude: 'Level 4',
      population: '120K',
      time: '15 min ago',
      color: 'alert'
    },
    {
      id: 2,
      type: 'Drought Alert',
      location: 'Turkana County',
      severity: 'Medium',
      magnitude: 'Level 3',
      population: '250K',
      time: '1 hour ago',
      color: 'warning'
    },
    {
      id: 3,
      type: 'Landslide Risk',
      location: 'Murang\'a County',
      severity: 'High',
      magnitude: 'Critical Zone',
      population: '45K',
      time: '2 hours ago',
      color: 'alert'
    },
    {
      id: 4,
      type: 'Locust Swarm',
      location: 'Marsabit County',
      severity: 'Medium',
      magnitude: 'Dense Swarm',
      population: '80K',
      time: '4 hours ago',
      color: 'warning'
    }
  ];

  const kpis = [
    {
      label: 'Population at Risk',
      value: '5.2M',
      change: '+12%',
      icon: Users,
      trend: 'up'
    },
    {
      label: 'Active Alerts',
      value: activeAlerts.toString(),
      change: 'Live',
      icon: AlertTriangle,
      trend: 'neutral'
    },
    {
      label: 'Response Teams',
      value: '38',
      change: '+5',
      icon: Shield,
      trend: 'up'
    },
    {
      label: 'Prediction Accuracy',
      value: '89.2%',
      change: '+2.1%',
      icon: TrendingUp,
      trend: 'up'
    }
  ];

  const regions = [
    { name: 'Central Kenya', risk: 'Medium', alerts: 2, color: 'warning' },
    { name: 'Coast Region', risk: 'High', alerts: 3, color: 'alert' },
    { name: 'Northern Kenya', risk: 'High', alerts: 4, color: 'alert' },
    { name: 'Western Kenya', risk: 'Low', alerts: 1, color: 'success' },
    { name: 'Eastern Kenya', risk: 'Medium', alerts: 2, color: 'warning' },
    { name: 'Rift Valley', risk: 'Medium', alerts: 3, color: 'warning' }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'alert';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'secondary';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Activity className="w-4 h-4 mr-2" />
            Live Data Dashboard
          </Badge>
          
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Real-Time Global
            <span className="text-accent block">Disaster Monitoring</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay informed with our comprehensive real-time dashboard tracking disasters, 
            response efforts, and community safety metrics worldwide.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            Last updated: {lastUpdate.toLocaleTimeString()}
            <Button variant="ghost" size="sm" className="ml-2">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* KPIs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <kpi.icon className="w-8 h-8 text-accent" />
                <Badge 
                  variant={kpi.trend === 'up' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {kpi.change}
                </Badge>
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {kpi.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {kpi.label}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Alerts */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-xl text-foreground">
                  Active Alerts
                </h3>
                <Badge variant="outline">
                  <Globe className="w-3 h-3 mr-1" />
                  Global
                </Badge>
              </div>

              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div 
                    key={alert.id}
                    className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-card-hover transition-colors"
                  >
                    <div className={`w-3 h-3 rounded-full bg-${alert.color} animate-pulse`} />
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground">
                          {alert.type}
                        </span>
                        <Badge 
                          variant={getSeverityColor(alert.severity) as any}
                          className="text-xs"
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {alert.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {alert.population} at risk
                        </span>
                        <span>{alert.magnitude}</span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      {alert.time}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Button variant="outline" className="w-full">
                  View Full Dashboard
                </Button>
              </div>
            </Card>
          </div>

          {/* Regional Overview */}
          <div>
            <Card className="p-6 mb-6">
              <h3 className="font-semibold text-xl text-foreground mb-6">
                Regional Risk Status
              </h3>

              <div className="space-y-4">
                {regions.map((region, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">
                        {region.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {region.alerts} active alerts
                      </div>
                    </div>
                    <Badge variant={region.color as any}>
                      {region.risk}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold text-xl text-foreground mb-4">
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                <Button variant="accent" size="sm" className="w-full">
                  <Zap className="w-4 h-4 mr-2" />
                  Issue Alert
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <Activity className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="ghost" size="sm" className="w-full">
                  <Globe className="w-4 h-4 mr-2" />
                  Global Map
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Data Visualization */}
        <div className="mt-12">
          <Card className="overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="font-semibold text-xl text-foreground">
                Global Disaster Impact Visualization
              </h3>
              <p className="text-muted-foreground mt-2">
                Interactive data visualization showing global disaster patterns and response effectiveness
              </p>
            </div>
            
            <div className="relative h-96 bg-gradient-to-br from-accent/5 to-primary/5">
              <img 
                src={dashboardIllustration}
                alt="Data Visualization Dashboard"
                className="w-full h-full object-cover opacity-80"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Button variant="hero" size="lg">
                    <Activity className="w-5 h-5 mr-2" />
                    Launch Interactive Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LiveDashboard;