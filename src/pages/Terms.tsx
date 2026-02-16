import { ArrowLeft, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Terms() {
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
            Terms of Service
          </h1>
          <p className="text-text-secondary mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                By accessing or using GenuineStack AI Voice services (the &quot;Service&quot;), you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, you may not access the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                2. Description of Service
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                GenuineStack provides AI-powered voice calling services for real estate professionals. 
                Our Service includes automated lead qualification, appointment scheduling, and call handling 
                through artificial intelligence technology.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                3. Account Registration
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                To use our Service, you must create an account. You agree to provide accurate, current, 
                and complete information during registration and to update such information to keep it 
                accurate, current, and complete.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                You are responsible for safeguarding the password that you use to access the Service 
                and for any activities or actions under your password.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                4. Payment Terms
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Service is offered on a subscription basis. You agree to pay all fees associated 
                with your selected plan. Fees are non-refundable except as required by law or as 
                explicitly stated in our refund policy.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Setup fees are due before service commencement. Monthly fees are billed in advance 
                on a recurring basis. Usage-based charges are billed in arrears.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                5. Acceptable Use
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You agree not to use the Service for any unlawful purpose or in any way that interrupts, 
                damages, or impairs the Service. Prohibited activities include:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
                <li>Using the Service to make unauthorized calls or spam</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Using the Service for any illegal or fraudulent purpose</li>
                <li>Interfering with other users&apos; access to the Service</li>
                <li>Reverse engineering or attempting to extract source code</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                6. Data and Privacy
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Your use of the Service is also governed by our Privacy Policy. By using the Service, 
                you consent to the collection and use of information as detailed in our Privacy Policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                7. Service Level Agreement
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We strive to maintain 99.9% uptime for our Service. However, we do not guarantee 
                uninterrupted access. Scheduled maintenance and unforeseen circumstances may result 
                in temporary service interruptions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                8. Termination
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We may terminate or suspend your account immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                You may cancel your subscription at any time. Upon cancellation, you will continue 
                to have access to the Service until the end of your current billing period.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                In no event shall GenuineStack, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, 
                consequential, or punitive damages arising out of or relating to your use of the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                10. Changes to Terms
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                We will provide notice of any material changes by posting the new Terms on this page.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-xl text-text-primary mb-4">
                11. Contact Us
              </h2>
              <p className="text-text-secondary leading-relaxed">
                If you have any questions about these Terms, please contact us at{' '}
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
