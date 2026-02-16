import { ArrowLeft, Phone, Shield, Lock, Server, Eye, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All call data and customer information is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.',
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Our infrastructure is hosted on enterprise-grade cloud providers with SOC 2 Type II and ISO 27001 certifications.',
  },
  {
    icon: Eye,
    title: 'Access Controls',
    description: 'Role-based access control (RBAC) ensures users only access data they are authorized to view. Multi-factor authentication is required.',
  },
  {
    icon: Shield,
    title: 'DDoS Protection',
    description: 'Advanced DDoS mitigation protects our services from attacks, ensuring 99.9% uptime availability.',
  },
  {
    icon: FileCheck,
    title: 'Regular Audits',
    description: 'We conduct regular security audits, penetration testing, and vulnerability assessments by third-party security firms.',
  },
];

export default function Security() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Header */}
      <header className="border-b border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet to-violet-dark flex items-center justify-center">
                <Phone className="w-4 h-4 text-navy" />
              </div>
              <span className="font-heading font-bold text-lg text-text-primary">
                GenuineStack
              </span>
            </a>
            <a href="/">
              <Button variant="outline" className="border-white/20 text-text-primary hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-radial from-violet/10 via-transparent to-transparent opacity-50" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-violet/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-violet" />
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
              Security at GenuineStack
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              We take security seriously. Your data and your customers&apos; data are protected 
              by industry-leading security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-12 lg:pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-violet/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-violet" />
                </div>
                <h3 className="font-heading font-semibold text-text-primary mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mb-8 text-center">
            Compliance & Certifications
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="font-heading font-semibold text-text-primary mb-3">
                SOC 2 Type II
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We maintain SOC 2 Type II compliance, demonstrating our commitment to security, 
                availability, processing integrity, confidentiality, and privacy.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="font-heading font-semibold text-text-primary mb-3">
                GDPR Compliance
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Our platform is designed to help you comply with GDPR requirements, including 
                data subject rights, data processing agreements, and breach notification.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="font-heading font-semibold text-text-primary mb-3">
                CCPA Compliance
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We respect California consumers&apos; privacy rights and provide tools to help 
                you comply with CCPA requirements.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="font-heading font-semibold text-text-primary mb-3">
                TCPA Compliance
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Our AI calling system is designed with TCPA compliance in mind, helping you 
                maintain proper consent and opt-out handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Handling Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mb-8">
            How We Handle Your Data
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="font-heading font-semibold text-text-primary mb-3">
                Call Recordings
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Call recordings are encrypted and stored securely. By default, recordings are retained 
                for 90 days. You can configure custom retention periods or request immediate deletion 
                of specific recordings.
              </p>
              <ul className="list-disc list-inside text-text-secondary text-sm space-y-1">
                <li>Encrypted at rest with AES-256</li>
                <li>Access logged and audited</li>
                <li>Configurable retention policies</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="font-heading font-semibold text-text-primary mb-3">
                Customer Data
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Customer contact information and conversation data is stored securely and only 
                used to provide our Service. We do not sell or share this data with third parties 
                for marketing purposes.
              </p>
              <ul className="list-disc list-inside text-text-secondary text-sm space-y-1">
                <li>Role-based access controls</li>
                <li>Data minimization principles</li>
                <li>Regular access reviews</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="font-heading font-semibold text-text-primary mb-3">
                API and Integrations
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                All API communications are encrypted using TLS 1.3. API keys are securely hashed 
                and can be rotated at any time from your dashboard.
              </p>
              <ul className="list-disc list-inside text-text-secondary text-sm space-y-1">
                <li>API key authentication required</li>
                <li>Rate limiting to prevent abuse</li>
                <li>Request logging for audit trails</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mb-8">
            Incident Response
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            We have a comprehensive incident response plan in place to quickly identify, contain, 
            and remediate security incidents. Our team is on call 24/7 to respond to potential threats.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-violet/10 border border-violet/20 text-center">
              <div className="font-heading font-bold text-2xl text-violet mb-1">&lt; 1 hour</div>
              <div className="text-text-secondary text-sm">Initial Response Time</div>
            </div>
            <div className="p-4 rounded-xl bg-violet/10 border border-violet/20 text-center">
              <div className="font-heading font-bold text-2xl text-violet mb-1">24/7</div>
              <div className="text-text-secondary text-sm">Security Monitoring</div>
            </div>
            <div className="p-4 rounded-xl bg-violet/10 border border-violet/20 text-center">
              <div className="font-heading font-bold text-2xl text-violet mb-1">Quarterly</div>
              <div className="text-text-secondary text-sm">Penetration Tests</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mb-4">
            Report a Security Issue
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            If you believe you&apos;ve found a security vulnerability, please report it to us immediately. 
            We take all reports seriously and will investigate promptly.
          </p>
          <a 
            href="mailto:security@genuinestack.com"
            className="inline-flex items-center gap-2 text-violet hover:text-violet-light font-medium transition-colors"
          >
            security@genuinestack.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} GenuineStack AI Automation. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/terms" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
                Terms
              </a>
              <a href="/privacy" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
                Privacy
              </a>
              <a href="/security" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
