import { ArrowLeft, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Privacy() {
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

      {/* Content */}
      <main className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-8">
            Privacy Policy
          </h1>
          <p className="text-text-secondary mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                1. Introduction
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                GenuineStack AI Automation (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you use our AI voice calling service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                2. Information We Collect
              </h2>
              <h3 className="font-medium text-text-primary mb-2">Personal Information</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                <li>Register for an account</li>
                <li>Sign up for our services</li>
                <li>Contact our support team</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mb-4">
                This information may include your name, email address, phone number, company name, 
                and payment information.
              </p>

              <h3 className="font-medium text-text-primary mb-2">Call Data</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                As part of our Service, we collect and process:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                <li>Call recordings and transcripts</li>
                <li>Caller phone numbers</li>
                <li>Call duration and timestamps</li>
                <li>Conversation outcomes and notes</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Understand how users interact with our Service</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                4. Information Sharing
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We do not sell or rent your personal information to third parties. We may share 
                information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your consent</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                5. Data Security
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                These measures include:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication requirements</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                6. Data Retention
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required or 
                permitted by law. Call recordings are typically retained for 90 days unless you 
                request earlier deletion or subscribe to extended retention.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                7. Your Rights
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mb-4">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:hello@genuinestack.com" className="text-violet hover:underline">
                  hello@genuinestack.com
                </a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                8. Cookies and Tracking
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our Service 
                and hold certain information. You can instruct your browser to refuse all cookies 
                or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                9. Third-Party Integrations
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Service integrates with third-party platforms such as CRMs and calendar systems. 
                Your use of these integrations is subject to the privacy policies of those third parties.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                10. Children&apos;s Privacy
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Service is not intended for use by children under the age of 18. We do not 
                knowingly collect personal information from children under 18.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                11. Changes to This Policy
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                12. Contact Us
              </h2>
              <p className="text-text-secondary leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:hello@genuinestack.com" className="text-violet hover:underline">
                  hello@genuinestack.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

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
