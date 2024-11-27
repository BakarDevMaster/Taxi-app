// app/terms/page.jsx

import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <div id="top" className="container mx-auto px-4 py-12 scroll-smooth">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
        Terms &amp; Conditions
      </h1>

      {/* Effective Date */}
      <p className="text-gray-500 text-center mb-8">Effective Date: 25-11-2024</p>

      {/* Table of Contents */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-2">
          {[
            { id: 'definitions', title: '1. Definitions' },
            { id: 'eligibility', title: '2. Eligibility' },
            { id: 'account-registration', title: '3. Account Registration' },
            { id: 'user-responsibilities', title: '4. User Responsibilities' },
            { id: 'services-provided', title: '5. Services Provided by Ride Click' },
            { id: 'payment-terms', title: '6. Payment Terms' },
            { id: 'license', title: '7. License and Intellectual Property' },
            { id: 'privacy-policy', title: '8. Privacy Policy' },
            { id: 'limitations-liability', title: '9. Limitations of Liability' },
            { id: 'indemnification', title: '10. Indemnification' },
            { id: 'suspension-termination', title: '11. Suspension and Termination' },
            { id: 'third-party-services', title: '12. Third-Party Services' },
            { id: 'dispute-resolution', title: '13. Dispute Resolution' },
            { id: 'governing-law', title: '14. Governing Law' },
            { id: 'modifications-terms', title: '15. Modifications to Terms' },
            { id: 'contact-information', title: '16. Contact Information' },
            { id: 'entire-agreement', title: '17. Entire Agreement' },
          ].map((section) => (
            <li key={section.id}>
              <Link href={`#${section.id}`}>
                <span className="text-blue-600 hover:underline transition-colors duration-200">
                  {section.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-3xl mx-auto">
        {/* Section 1 */}
        <h2 id="definitions" className="text-2xl font-semibold mb-4">
          1. Definitions
        </h2>
        <p>
          <strong>1.1 Ride Click:</strong> Refers to the taxi booking software and all associated
          services offered by the Ride Click platform.
        </p>
        <p>
          <strong>1.2 User:</strong> Refers to individuals or entities using the platform, including
          passengers, drivers, operators, and fleet owners.
        </p>
        <p>
          <strong>1.3 Services:</strong> Refers to the functionalities provided by Ride Click, such as
          ride booking, driver management, dispatching, and fleet management.
        </p>
        <p>
          <strong>1.4 Content:</strong> Refers to any text, images, graphics, software, or other
          materials made available on the Ride Click platform.
        </p>

        {/* Section 2 */}
        <h2 id="eligibility" className="text-2xl font-semibold mb-4 mt-8">
          2. Eligibility
        </h2>
        <p>
          <strong>2.1</strong> You must be at least 18 years old to use the Ride Click platform.
        </p>
        <p>
          <strong>2.2</strong> By agreeing to these Terms, you represent that you are legally capable
          of entering into a binding agreement.
        </p>
        <p>
          <strong>2.3</strong> If you are using Ride Click on behalf of a business entity, you warrant
          that you have the authority to bind the entity to these Terms.
        </p>

        {/* Section 3 */}
        <h2 id="account-registration" className="text-2xl font-semibold mb-4 mt-8">
          3. Account Registration
        </h2>
        <p>
          <strong>3.1</strong> Users must create an account to access certain features of Ride Click.
        </p>
        <p>
          <strong>3.2</strong> You agree to provide accurate, current, and complete information during
          the registration process and to update your information as necessary.
        </p>
        <p>
          <strong>3.3</strong> You are responsible for maintaining the confidentiality of your account
          credentials and agree to notify Ride Click immediately of any unauthorized use of your
          account.
        </p>

        {/* Section 4 */}
        <h2 id="user-responsibilities" className="text-2xl font-semibold mb-4 mt-8">
          4. User Responsibilities
        </h2>
        <p>
          <strong>4.1</strong> Users must use Ride Click only for lawful purposes and in compliance
          with applicable laws and regulations.
        </p>
        <p>
          <strong>4.2</strong> You agree not to:
        </p>
        <ul className="list-disc pl-5">
          <li>Misuse the platform by attempting to hack or interfere with its functionality.</li>
          <li>
            Upload or distribute any content that is illegal, harmful, or violates intellectual
            property rights.
          </li>
          <li>Use the platform to defraud or mislead other users.</li>
        </ul>
        <p>
          <strong>4.3</strong> You are solely responsible for the activities conducted through your
          account.
        </p>

        {/* Section 5 */}
        <h2 id="services-provided" className="text-2xl font-semibold mb-4 mt-8">
          5. Services Provided by Ride Click
        </h2>
        <p>
          <strong>5.1 Software Licensing:</strong> Ride Click provides software tools to support
          ride-hailing, dispatching, and fleet management.
        </p>
        <p>
          <strong>5.2 Driver and Customer Apps:</strong> Ride Click offers apps for drivers and
          passengers to facilitate seamless ride booking and management.
        </p>
        <p>
          <strong>5.3 Analytics and Reporting:</strong> The platform provides data-driven insights to
          help users optimize operations.
        </p>

        {/* Section 6 */}
        <h2 id="payment-terms" className="text-2xl font-semibold mb-4 mt-8">
          6. Payment Terms
        </h2>
        <p>
          <strong>6.1</strong> Pricing for Ride Click services will be detailed in a separate agreement
          or subscription plan selected by the user.
        </p>
        <p>
          <strong>6.2</strong> Users are responsible for all fees and charges incurred under their
          account, including any applicable taxes.
        </p>
        <p>
          <strong>6.3</strong> Payment must be made via the methods provided by Ride Click, and all
          transactions are final unless otherwise stated in these Terms.
        </p>
        <p>
          <strong>6.4</strong> In case of non-payment or failed transactions, Ride Click reserves the
          right to suspend or terminate access to its services.
        </p>

        {/* Section 7 */}
        <h2 id="license" className="text-2xl font-semibold mb-4 mt-8">
          7. License and Intellectual Property
        </h2>
        <p>
          <strong>7.1</strong> Ride Click grants users a non-exclusive, non-transferable, revocable
          license to access and use its platform for lawful purposes.
        </p>
        <p>
          <strong>7.2</strong> All content, trademarks, logos, and other intellectual property on Ride
          Click are owned by or licensed to Ride Click. Users may not copy, distribute, or modify any
          content without prior written consent.
        </p>
        <p>
          <strong>7.3</strong> Users retain ownership of any content they upload to Ride Click but grant
          the platform a worldwide, royalty-free license to use such content for service-related
          purposes.
        </p>

        {/* Section 8 */}
        <h2 id="privacy-policy" className="text-2xl font-semibold mb-4 mt-8">
          8. Privacy Policy
        </h2>
        <p>
          <strong>8.1</strong> Your use of Ride Click is governed by our Privacy Policy, which outlines
          how we collect, use, and protect your data. By using the platform, you agree to the terms of
          the Privacy Policy.
        </p>
        <p>
          <strong>8.2</strong> Ride Click may share your data with third-party service providers only to
          the extent necessary to deliver its services.
        </p>

        {/* Section 9 */}
        <h2 id="limitations-liability" className="text-2xl font-semibold mb-4 mt-8">
          9. Limitations of Liability
        </h2>
        <p>
          <strong>9.1</strong> Ride Click is provided “as is” and “as available,” without any warranties
          of any kind, either express or implied.
        </p>
        <p>
          <strong>9.2</strong> To the maximum extent permitted by law, Ride Click shall not be liable
          for:
        </p>
        <ul className="list-disc pl-5">
          <li>
            Indirect, incidental, or consequential damages arising from your use of the platform.
          </li>
          <li>Loss of data, revenue, or profits.</li>
          <li>Technical issues, delays, or interruptions in service.</li>
        </ul>
        <p>
          <strong>9.3</strong> Ride Click’s total liability under these Terms is limited to the amount
          paid by you for its services in the 12 months preceding the claim.
        </p>

        {/* Section 10 */}
        <h2 id="indemnification" className="text-2xl font-semibold mb-4 mt-8">
          10. Indemnification
        </h2>
        <p>
          <strong>10.1</strong> You agree to indemnify and hold harmless Ride Click, its affiliates, and
          its employees from any claims, damages, or expenses arising from your use of the platform,
          violation of these Terms, or infringement of third-party rights.
        </p>

        {/* Section 11 */}
        <h2 id="suspension-termination" className="text-2xl font-semibold mb-4 mt-8">
          11. Suspension and Termination
        </h2>
        <p>
          <strong>11.1</strong> Ride Click reserves the right to suspend or terminate your account at its
          sole discretion, including but not limited to:
        </p>
        <ul className="list-disc pl-5">
          <li>Breach of these Terms.</li>
          <li>Misuse of the platform.</li>
          <li>Non-payment of fees.</li>
        </ul>
        <p>
          <strong>11.2</strong> Users may terminate their account by providing written notice to Ride
          Click. Termination does not absolve you of any outstanding payments or obligations under these
          Terms.
        </p>

        {/* Section 12 */}
        <h2 id="third-party-services" className="text-2xl font-semibold mb-4 mt-8">
          12. Third-Party Services
        </h2>
        <p>
          <strong>12.1</strong> Ride Click may integrate with third-party services for payment
          processing, mapping, and other functionalities.
        </p>
        <p>
          <strong>12.2</strong> Ride Click is not responsible for the availability or performance of
          third-party services and disclaims all liability related to their use.
        </p>

        {/* Section 13 */}
        <h2 id="dispute-resolution" className="text-2xl font-semibold mb-4 mt-8">
          13. Dispute Resolution
        </h2>
        <p>
          <strong>13.1</strong> Any disputes arising out of or relating to these Terms shall first be
          attempted to be resolved through negotiation.
        </p>
        <p>
          <strong>13.2</strong> If negotiation fails, disputes shall be resolved through binding
          arbitration in accordance with [Insert Jurisdiction] law.
        </p>

        {/* Section 14 */}
        <h2 id="governing-law" className="text-2xl font-semibold mb-4 mt-8">
          14. Governing Law
        </h2>
        <p>
          <strong>14.1</strong> These Terms are governed by and construed in accordance with the laws of
          [Insert Jurisdiction].
        </p>
        <p>
          <strong>14.2</strong> Users agree to submit to the exclusive jurisdiction of the courts in
          [Insert Jurisdiction] for any disputes not resolved through arbitration.
        </p>

        {/* Section 15 */}
        <h2 id="modifications-terms" className="text-2xl font-semibold mb-4 mt-8">
          15. Modifications to Terms
        </h2>
        <p>
          <strong>15.1</strong> Ride Click reserves the right to modify these Terms at any time.
        </p>
        <p>
          <strong>15.2</strong> Changes will be communicated via email or through the platform, and
          continued use of Ride Click after modifications constitutes acceptance of the revised Terms.
        </p>

        {/* Section 16 */}
        <h2 id="contact-information" className="text-2xl font-semibold mb-4 mt-8">
          16. Contact Information
        </h2>
        <p>For any questions or concerns about these Terms, please contact:</p>
        <p>
          <strong>Ride Click Support Team</strong>
        </p>
        <p>Email: [Insert Contact Email]</p>
        <p>Phone: [Insert Contact Number]</p>

        {/* Section 17 */}
        <h2 id="entire-agreement" className="text-2xl font-semibold mb-4 mt-8">
          17. Entire Agreement
        </h2>
        <p>
          These Terms, along with the Privacy Policy and any other agreements referenced herein,
          constitute the entire agreement between you and Ride Click regarding the use of its services.
        </p>

        {/* Back to Top Button */}
        <div className="text-right mt-8">
          <Link href="#top">
            <span className="text-blue-600 hover:underline transition-colors duration-200">
              Back to Top
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
