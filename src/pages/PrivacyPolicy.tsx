import Bg from "../assets/Form.bg.jpg";
const PrivacyPolicy = () => {
  return (
    <div
      className="page-container-col"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="scroll-container">
        {" "}
        <h2 className="header-two">Privacy Policy</h2>
        <h3 className="header-three">1. Introduction</h3>
        <p className="text-gray-700 mb-4">
          At Hommender, we value the privacy of our users. This Privacy Policy
          outlines how we collect, use, store, and protect your personal
          information. By using our services, you agree to the terms outlined in
          this policy.
        </p>
        <h3 className="header-three">2. Information We Collect</h3>
        <p className="text-gray-700 mb-4">
          We collect personal information in the following ways:
        </p>
        <ul className="rules-list">
          <li className="text-gray-700">
            <strong>Account Information:</strong> When creating an account, we
            collect your name, email address, phone number, and other details
            you provide.
          </li>
          <li className="text-gray-700">
            <strong>Service Requests:</strong> Information related to the
            services you request, including details about the project, preferred
            service providers, and payment information.
          </li>
          <li className="text-gray-700">
            <strong>Payment Information:</strong> When you make a payment, we
            collect payment details, such as your credit card or bank account
            information (through secure third-party payment processors).
          </li>
          <li className="text-gray-700">
            <strong>Usage Data:</strong> We collect information about your
            interactions with our platform, including IP addresses, browser
            types, and activity logs for improving user experience.
          </li>
        </ul>
        <h3 className="header-three">3. How We Use Your Information</h3>
        <p className="text-gray-700 mb-4">
          The information we collect is used for the following purposes:
        </p>
        <ul className="rules-list">
          <li className="text-gray-700">
            <strong>To Provide Services:</strong> To process service requests,
            match clients with service providers, and facilitate communication
            between users.
          </li>
          <li className="text-gray-700">
            <strong>To Improve Our Services:</strong> To analyze user behavior,
            preferences, and feedback to improve the platform’s functionality
            and user experience.
          </li>
          <li className="text-gray-700">
            <strong>To Process Payments:</strong> To manage transactions and
            ensure secure processing of payments.
          </li>
          <li className="text-gray-700">
            <strong>To Communicate With You:</strong> To send you important
            updates, including service notifications, promotional offers, and
            customer support messages.
          </li>
        </ul>
        <h3 className="header-three">4. Data Protection</h3>
        <p className="text-gray-700 mb-4">
          We take the security of your personal information seriously and
          implement appropriate measures to safeguard it. These measures
          include:
        </p>
        <ul className="rules-list">
          <li className="text-gray-700">
            Secure data storage and encryption methods.
          </li>
          <li className="text-gray-700">
            Regular security audits to detect potential vulnerabilities.
          </li>
          <li className="text-gray-700">
            Limiting access to personal information to authorized personnel
            only.
          </li>
        </ul>
        <h3 className="header-three">5. Sharing Your Information</h3>
        <p className="text-gray-700 mb-4">
          We do not sell, rent, or trade your personal information to third
          parties. However, we may share your information in the following
          circumstances:
        </p>
        <ul className="rules-list">
          <li className="text-gray-700">
            <strong>With Service Providers:</strong> To complete service
            requests, we share necessary details with service providers,
            including contact information and project specifics.
          </li>
          <li className="text-gray-700">
            <strong>With Third-Party Vendors:</strong> We may share your data
            with trusted third-party vendors who assist us with payment
            processing, customer support, and other services. These vendors are
            obligated to protect your information.
          </li>
          <li className="text-gray-700">
            <strong>For Legal Reasons:</strong> If required by law, we may share
            your information to comply with legal processes or protect our
            rights, safety, or property.
          </li>
        </ul>
        <h3 className="header-three">6. Your Rights</h3>
        <p className="text-gray-700 mb-4">
          You have the following rights regarding your personal information:
        </p>
        <ul className="rules-list">
          <li className="text-gray-700">
            <strong>Access:</strong> You may request access to the personal
            information we hold about you.
          </li>
          <li className="text-gray-700">
            <strong>Correction:</strong> You may update or correct inaccurate or
            incomplete information.
          </li>
          <li className="text-gray-700">
            <strong>Deletion:</strong> You may request the deletion of your
            account or personal data, subject to legal requirements.
          </li>
          <li className="text-gray-700">
            <strong>Opt-Out:</strong> You may opt out of receiving marketing
            communications from us at any time.
          </li>
        </ul>
        <h3 className="header-three">7. Cookies and Tracking Technologies</h3>
        <p className="text-gray-700 mb-4">
          We use cookies and similar tracking technologies to enhance your
          experience on our platform. These technologies help us analyze user
          behavior, improve site functionality, and deliver personalized
          content.
        </p>
        <h3 className="header-three">8. Changes to This Privacy Policy</h3>
        <p className="text-gray-700 mb-4">
          We reserve the right to modify this Privacy Policy at any time. Any
          changes will be communicated to users through the platform or email,
          and we encourage you to review the policy periodically.
        </p>
        <h3 className="header-three">9. Contact Us</h3>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns regarding this Privacy Policy or
          your personal information, please contact us at:
        </p>
        <p className="text-gray-700 mb-4">
          Email: boleksy14@gmail.com <br />
          Address: Główna 12/69, 58-309 Wałbrzych
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
