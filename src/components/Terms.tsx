import { useEffect } from "react";
export default function Terms() {
    // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-900 px-6 md:px-20 py-16 leading-relaxed mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Term & Conditions
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Welcome to Myskript Infotech LLP! These terms and conditions outline the
          rules and regulations for the use of our website and services
        </p>

        {/* Effective Info */}
        <div className="mb-12 text-lg text-gray-700 space-y-2">
          <p>
            <span className="font-bold">Effective Date:</span> 01 July 2025
          </p>
          <p>
            <span className="font-bold">Legal Entity:</span> Myskript Infotech
          </p>
          <p>
            <span className="font-bold">Website:</span>{" "}
            <a
              href="https://www.myskript.io"
              className="text-blue-600 underline"
            >
              www.myskript.io
            </a>
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">1. Introduction</h2>
          <p className="text-lg">
            Myskript.io, operated by Myskript Infotech (“we”, “us”, “our”), is
            committed to protecting your privacy. This Privacy Policy outlines
            how we collect, use, store, and disclose your personal information
            when you visit our website or use any of our services.
          </p>
          <p className="mt-4 text-lg">
            By accessing or using our services, you acknowledge that you have
            read, understood, and agree to this Privacy Policy.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            2. Information We Collect
          </h2>
          <p className="text-lg mb-4">
            We collect the following types of information:
          </p>

          <h3 className="font-semibold text-xl mb-2">a) Personal Information</h3>
          <p className="text-lg mb-2">
            When you register or interact with our platform, we may collect:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg space-y-1 mb-6">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name</li>
            <li>Billing information (processed securely via third-party gateways)</li>
            <li>Login credentials (hashed and encrypted)</li>
          </ul>

          <h3 className="font-semibold text-xl mb-2">b) Technical Information</h3>
          <p className="text-lg mb-2">We automatically collect:</p>
          <ul className="list-disc list-inside ml-6 text-lg space-y-1 mb-6">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Pages visited, time spent, and clickstream data</li>
          </ul>

          <h3 className="font-semibold text-xl mb-2"> Third-Party Integrations</h3>
          <p className="text-lg">
            If you connect your account with third-party tools (e.g., WhatsApp
            API, Google, Facebook, Stripe), we may collect additional data
            authorized by those platforms.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside ml-6 text-lg space-y-2">
            <li>To deliver and manage your account and services</li>
            <li>To process transactions and send billing notifications</li>
            <li>To respond to support queries or customer service needs</li>
            <li>To improve our website and services based on user feedback</li>
            <li>
              To send important updates, service-related announcements, or
              marketing (you may opt out)
            </li>
            <li>To comply with legal obligations or protect our rights</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            4. Data Sharing & Disclosure
          </h2>
          <p className="text-lg mb-4">
            We <span className="font-semibold">do not sell or rent</span> your
            personal data. We may share your data only under the following
            circumstances:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg space-y-2">
            <li>
              With trusted third-party service providers (e.g., payment
              processors, email delivery tools, analytics providers) under
              confidentiality agreements
            </li>
            <li>
              As required by law (legal proceedings, government requests,
              enforcement of Terms & Conditions)
            </li>
            <li>
              In case of a merger, acquisition, or asset sale, where your
              information may be transferred under similar privacy obligations
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            5. Cookies and Tracking Technologies
          </h2>
          <p className="text-lg mb-4">
            We use cookies and similar technologies (like tracking pixels) to:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg space-y-2">
            <li>Keep you logged in across sessions</li>
            <li>Analyze user behavior for improvements</li>
            <li>Remember your preferences</li>
            <li>Show relevant content or advertisements (if applicable)</li>
          </ul>
          <p className="text-lg mt-4">
            You can control or disable cookies through your browser settings.
            Disabling cookies may limit certain functionality.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            6. Third-Party Tools and Services
          </h2>
          <p className="text-lg">
            Myskript.io integrates with several third-party tools (e.g., WhatsApp
            API, Google, Facebook, Stripe, Twilio, SendGrid). While we work with
            reputable providers, we are <span className="font-semibold">not responsible</span> for how these third
            parties handle your data. Please review their privacy policies
            before enabling such integrations.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            7. Data Storage & Security
          </h2>
          <p className="text-lg mb-4">
            We take reasonable technical and organizational measures to
            safeguard your information from loss, misuse, unauthorized access,
            or disclosure. These include:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg space-y-2">
            <li>Encrypted data transfer (HTTPS/SSL)</li>
            <li>Secure cloud infrastructure and access control</li>
            <li>Role-based access and audit logs</li>
          </ul>
          <p className="text-lg mt-4">
            However, no internet-based service is completely secure, and we
            cannot guarantee absolute protection.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">8. Data Retention</h2>
          <p className="text-lg mb-4">We retain your personal data:</p>
          <ul className="list-disc list-inside ml-6 text-lg space-y-2">
            <li>As long as your account is active</li>
            <li>As needed to comply with legal obligations</li>
            <li>
              Until you request account deletion (unless otherwise required by
              law)
            </li>
          </ul>
          <p className="text-lg mt-4">
            Upon deletion, we securely erase or anonymize your data wherever
            feasible.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">9. Your Rights</h2>
          <p className="text-lg mb-4">
            You have the following rights regarding your data:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg space-y-2">
            <li>
              <span className="font-semibold">Access:</span> Request what
              personal data we hold about you
            </li>
            <li>
              <span className="font-semibold">Correction:</span> Update
              incorrect or outdated information
            </li>
            <li>
              <span className="font-semibold">Deletion:</span> Request deletion
              of your data (unless required by law)
            </li>
            <li>
              <span className="font-semibold">Objection:</span> Opt-out of
              processing or marketing emails
            </li>
            <li>
              <span className="font-semibold">Data Portability:</span> Request a
              copy of your data in a portable format
            </li>
          </ul>
          <p className="text-lg mt-4">
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:connect@myskript.io"
              className="text-blue-600 underline"
            >
              connect@myskript.io
            </a>
            .
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            10. Children’s Privacy
          </h2>
          <p className="text-lg">
            Our services are not intended for children under the age of 18. We
            do not knowingly collect data from minors. If you believe a child
            has provided us their data, please contact us immediately.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            11. Changes to This Policy
          </h2>
          <p className="text-lg">
            We may update this Privacy Policy at any time. Changes will be
            posted on this page with a revised “Effective Date.” Your continued
            use of the Services constitutes acceptance of the revised policy.
          </p>
        </section>

        {/* Section 12 */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">12. Governing Law</h2>
          <p className="text-lg">
            This Privacy Policy is governed by the laws of{" "}
            <span className="font-semibold">India</span>, and any disputes shall
            be subject to the jurisdiction of courts located in{" "}
            <span className="font-semibold">Pune, Maharashtra, India</span>.
          </p>
        </section>

        {/* Section 13 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">13. Contact Us</h2>
          <p className="text-lg">
            If you have any questions, requests, or complaints regarding this
            Privacy Policy, please reach out to us at:
          </p>
          <div className="mt-4 space-y-2 text-lg">
            <p>
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:connect@myskript.io"
                className="text-blue-600 underline"
              >
                connect@myskript.io
              </a>
            </p>
            <p>
              <span className="font-bold">Legal Entity:</span> Myskript Infotech
            </p>
            <p>
              <span className="font-bold">Website:</span>{" "}
              <a
                href="https://www.myskript.io"
                className="text-blue-600 underline"
              >
                www.myskript.io
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
