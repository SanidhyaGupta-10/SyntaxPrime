"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen  text-gray-100 px-6 md:px-16 py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-lg">
          This Privacy Policy explains how <span className="font-semibold">SyntaxPrime</span> collects, uses, and protects your information when you use our Notes and Roadmaps platform.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">
            1. Information We Collect
          </h2>
          <p className="text-xl text-gray-200">
            We may collect personal information such as your name, email address, and usage data when you interact with our platform. This helps us provide better services and improve your experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">
            2. How We Use Information
          </h2>
          <p className="text-xl text-gray-200">
            The information collected is used to enhance the functionality of SyntaxPrime, personalize your experience, send updates or notes, and analyze website traffic. We do not sell your data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">
            3. Cookies and Tracking
          </h2>
          <p className="text-xl text-gray-200">
            SyntaxPrime uses cookies and similar tracking technologies to monitor site activity, improve performance, and remember preferences. You can disable cookies in your browser settings, but some features may not work properly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">
            4. Data Security
          </h2>
          <p className="text-xl text-gray-200">
            We implement reasonable technical and organizational measures to protect your data from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">
            5. Third-Party Services
          </h2>
          <p className="text-xl text-gray-200">
            We may use third-party services to operate our platform, such as analytics or cloud hosting. These services follow strict privacy standards, and we are not responsible for their individual privacy practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">
            6. Your Rights
          </h2>
          <p className="text-xl text-gray-200">
            You have the right to access, correct, or delete your personal information. You can contact us at <span className="text-purple-300">support@syntaxprime.com</span> for any privacy-related inquiries.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">
            7. Changes to This Policy
          </h2>
          <p className="text-xl text-gray-200">
            SyntaxPrime may update this Privacy Policy from time to time. We recommend checking this page periodically to stay informed about any changes.
          </p>
        </section>

        <section>
          <p className="text-center text-gray-400 mt-10 text-2xl">
            &copy; {new Date().getFullYear()} SyntaxPrime. All rights reserved.
          </p>
        </section>
      </div>
    </div>
  );
}
