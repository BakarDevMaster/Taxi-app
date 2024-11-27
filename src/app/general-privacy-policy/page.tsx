// pages/privacy-policy.js

import React from 'react';
import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Ride Click</title>
        <meta
          name="description"
          content="Read the Privacy Policy for Ride Click."
        />
      </Head>
      <div className="bg-white text-gray-800">
        <div className="max-w-3xl mx-auto py-12 px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8 text-center">
            Effective Date: <span className="font-medium">[Insert Date]</span>
          </p>

          <div className="space-y-8">
            <p className="leading-relaxed">
              Ride Click (“we,” “our,” or “us”) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our
              platform, including our website, mobile applications, and
              associated services. By using Ride Click, you agree to the terms
              of this Privacy Policy. If you do not agree, please do not use our
              services.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Information We Collect
              </h2>
              <p className="leading-relaxed">
                We may collect the following types of information to provide and
                improve our services:
              </p>

              {/* Subsection 1.1 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  1.1 Personal Information
                </h3>
                <p className="leading-relaxed">
                  When you register or use Ride Click, we may collect:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Payment information (e.g., credit card details)</li>
                  <li>Profile picture (optional)</li>
                </ul>
              </div>

              {/* Subsection 1.2 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  1.2 Non-Personal Information
                </h3>
                <p className="leading-relaxed">
                  We may collect non-identifiable information, including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Operating system</li>
                  <li>IP address</li>
                  <li>Location data (with your permission)</li>
                  <li>Usage statistics</li>
                </ul>
              </div>

              {/* Subsection 1.3 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">1.3 Location Data</h3>
                <p className="leading-relaxed">
                  With your explicit consent, we may collect location data to
                  facilitate services such as ride booking, real-time driver
                  tracking, and route optimization. You can manage location
                  permissions through your device settings.
                </p>
              </div>

              {/* Subsection 1.4 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  1.4 Cookies and Tracking Technologies
                </h3>
                <p className="leading-relaxed">
                  We use cookies, web beacons, and similar tracking technologies
                  to enhance your experience and analyze platform usage.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  <strong>Service Delivery:</strong> To provide and manage our
                  taxi booking and fleet management services.
                </li>
                <li>
                  <strong>Account Management:</strong> To create, maintain, and
                  secure user accounts.
                </li>
                <li>
                  <strong>Payment Processing:</strong> To process payments and
                  handle refunds.
                </li>
                <li>
                  <strong>Customer Support:</strong> To respond to inquiries and
                  provide support.
                </li>
                <li>
                  <strong>Personalization:</strong> To customize your experience
                  based on preferences and past interactions.
                </li>
                <li>
                  <strong>Marketing and Communication:</strong> To send
                  promotional materials, updates, and offers, where permitted.
                </li>
                <li>
                  <strong>Analytics and Improvements:</strong> To analyze usage
                  patterns and improve our platform.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with legal
                  obligations or respond to lawful requests.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. How We Share Your Information
              </h2>
              <p className="leading-relaxed">
                We do not sell your information. However, we may share your
                information with:
              </p>

              {/* Subsection 3.1 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  3.1 Service Providers
                </h3>
                <p className="leading-relaxed">
                  Third-party vendors who assist in delivering services,
                  including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Payment processors</li>
                  <li>Mapping and navigation providers</li>
                  <li>Marketing agencies</li>
                </ul>
              </div>

              {/* Subsection 3.2 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  3.2 Business Partners
                </h3>
                <p className="leading-relaxed">
                  Partners who collaborate with Ride Click for business
                  development and promotional purposes.
                </p>
              </div>

              {/* Subsection 3.3 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  3.3 Legal Obligations
                </h3>
                <p className="leading-relaxed">
                  We may disclose your information if required to:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Comply with legal processes or government requests.</li>
                  <li>Enforce our Terms and Conditions.</li>
                  <li>
                    Protect the rights, property, or safety of Ride Click, users,
                    or others.
                  </li>
                </ul>
              </div>

              {/* Subsection 3.4 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  3.4 Corporate Transactions
                </h3>
                <p className="leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your
                  information may be transferred as part of the transaction.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your information only for as long as necessary to:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Fulfill the purposes outlined in this Privacy Policy.</li>
                <li>Comply with legal and regulatory obligations.</li>
                <li>Resolve disputes and enforce our agreements.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Security of Your Information
              </h2>
              <p className="leading-relaxed">
                We take reasonable measures to protect your information from
                unauthorized access, disclosure, or destruction. These measures
                include:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Encryption of sensitive data (e.g., payment information).</li>
                <li>Regular security assessments.</li>
                <li>
                  Secure servers and restricted access to sensitive information.
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                While we strive to protect your data, no security measure is
                completely foolproof. You acknowledge that you provide your
                information at your own risk.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Your Rights and Choices
              </h2>

              {/* Subsection 6.1 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  6.1 Access and Correction
                </h3>
                <p className="leading-relaxed">
                  You can access and update your personal information through
                  your Ride Click account.
                </p>
              </div>

              {/* Subsection 6.2 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">6.2 Data Portability</h3>
                <p className="leading-relaxed">
                  Where applicable, you may request a copy of your data in a
                  portable format.
                </p>
              </div>

              {/* Subsection 6.3 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">6.3 Data Deletion</h3>
                <p className="leading-relaxed">
                  You can request that we delete your personal information,
                  subject to legal or contractual obligations.
                </p>
              </div>

              {/* Subsection 6.4 */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  6.4 Opt-Out of Marketing Communications
                </h3>
                <p className="leading-relaxed">
                  You can unsubscribe from marketing emails or notifications by
                  following the opt-out instructions provided.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="leading-relaxed">
                Ride Click uses cookies to enhance your experience. You can
                manage cookies through your browser settings. Note that disabling
                cookies may affect platform functionality.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our platform may contain links to third-party websites or
                services. We are not responsible for the privacy practices of
                these external sites. We encourage you to review their privacy
                policies.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Children’s Privacy</h2>
              <p className="leading-relaxed">
                Ride Click is not intended for children under the age of 13. We
                do not knowingly collect personal information from children. If
                we become aware of such collection, we will delete the
                information promptly.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                10. International Data Transfers
              </h2>
              <p className="leading-relaxed">
                If you are accessing Ride Click from outside [Insert Country],
                your information may be transferred to and processed in countries
                with different data protection laws. By using the platform, you
                consent to such transfers.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes
                in our practices or legal requirements. Updates will be posted on
                our platform with a revised “Effective Date.”
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions or concerns about this Privacy Policy
                or your data, please contact us at:
              </p>
              <p className="mt-4 leading-relaxed">
                <strong>Ride Click Support Team</strong>
                <br />
                Email: <span className="underline">[Insert Email Address]</span>
                <br />
                Phone: <span className="underline">[Insert Phone Number]</span>
                <br />
                Address: <span className="underline">[Insert Office Address]</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
