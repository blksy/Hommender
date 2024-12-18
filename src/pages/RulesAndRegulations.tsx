import Bg from "../assets/Form.bg.jpg";

const RulesAndRegulations = () => {
  return (
    <div
      className="page-container-col"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="scroll-container">
        <h2 className="header-two">1. User Responsibilities</h2>
        <ul className="rules-list">
          <li className="text-gray-700">
            <strong>Accuracy of Information:</strong> Users must provide
            accurate and truthful information when creating profiles or
            submitting service requests. Any false or misleading information may
            result in the suspension or removal of your account.
          </li>
          <li className="text-gray-700">
            <strong>Respectful Behavior:</strong> We expect all users to behave
            respectfully and professionally. Discriminatory, harassing, or
            inappropriate behavior will not be tolerated and may lead to the
            suspension of the account.
          </li>
          <li className="text-gray-700">
            <strong>Compliance with Local Laws:</strong> Users are required to
            comply with all applicable local laws, including building codes,
            safety regulations, and environmental standards when completing
            renovation projects.
          </li>
        </ul>

        <h2 className="header-two">2. Service Requests</h2>
        <ul className="rules-list">
          <li className="text-gray-700">
            <strong>Creating a Request:</strong> When creating a request for
            home renovation services, clients must clearly describe the job,
            provide relevant details (e.g., scope of work, materials needed,
            deadlines), and select the appropriate category (e.g., fixing,
            cleaning, electrical work, plumbing, etc.).
          </li>
          <li className="text-gray-700">
            <strong>Request Modifications:</strong> Clients can modify their
            requests if needed, but changes should be communicated to the
            service provider as soon as possible to avoid confusion.
          </li>
          <li className="text-gray-700">
            <strong>Service Timeframes:</strong> All clients and service
            providers are encouraged to agree upon reasonable timeframes for
            completing the work. Any delays should be communicated promptly.
          </li>
          <li className="text-gray-700">
            <strong>Payment Terms:</strong> Payment terms for services must be
            agreed upon before work begins. Payments should be made according to
            the payment schedule provided by the service provider.
          </li>
        </ul>

        <h2 className="header-two">3. Service Providers</h2>
        <ul className="rules-list">
          <li className="text-gray-700">
            <strong>Qualifications:</strong> Service providers must have the
            appropriate qualifications, licenses, or experience to perform the
            services they offer. This includes certifications for specialized
            work such as electrical or plumbing services.
          </li>
          <li className="text-gray-700">
            <strong>Conduct:</strong> Service providers should maintain a
            professional appearance and demeanor while on the job site. They
            must also follow safety protocols to ensure a safe working
            environment.
          </li>
          <li className="text-gray-700">
            <strong>Quality of Work:</strong> Service providers are expected to
            complete their tasks to the highest standards. If a client is
            unsatisfied with the work completed, they have the right to request
            revisions within a reasonable timeframe.
          </li>
          <li className="text-gray-700">
            <strong>Availability:</strong> Service providers must communicate
            their availability and ensure they can meet the timelines set for
            the requested job.
          </li>
        </ul>

        <h2 className="header-two">4. Safety Standards</h2>
        <ul className="rules-list">
          <li className="text-gray-700">
            <strong>Health and Safety:</strong> Both clients and service
            providers must prioritize health and safety at all times. Service
            providers should follow all industry-standard safety procedures,
            especially when handling hazardous materials or working in
            potentially dangerous environments.
          </li>
          <li className="text-gray-700">
            <strong>COVID-19 Protocols:</strong> All users must adhere to
            COVID-19 safety guidelines, including wearing masks, maintaining
            social distancing, and sanitizing work areas as appropriate.
          </li>
        </ul>

        <h2 className="header-two">5. Service Categories</h2>
        <h3 className="header-three">
          Our platform covers a wide range of services related to home
          renovation, including but not limited to:
        </h3>
        <ul className="rules-list">
          <li className="text-gray-700">
            Home Fixing: General repairs (e.g., drywall, windows, doors),
            Painting and refinishing, Flooring installation and repair,
            Carpentry work.
          </li>
          <li className="text-gray-700">
            Cleaning Services: Post-renovation cleaning, Deep cleaning of living
            spaces, Carpet and upholstery cleaning.
          </li>
          <li className="text-gray-700">
            Specialized Renovations: Kitchen and bathroom remodeling, Electrical
            work (e.g., lighting installation, wiring repairs), Plumbing (e.g.,
            pipe repairs, faucet installations), HVAC system maintenance and
            repair.
          </li>
        </ul>

        <h2 className="header-two">6. Disputes and Resolution</h2>
        <ul className="rules-list">
          <li className="text-gray-700">
            <strong>Dispute Resolution:</strong> If a dispute arises between a
            client and a service provider, both parties are encouraged to
            resolve the issue amicably. If necessary, our platform will assist
            in mediation. We will review all disputes and offer support to come
            to a fair resolution.
          </li>
          <li className="text-gray-700">
            <strong>Refunds and Cancellations:</strong> Clients may request a
            cancellation of services before work begins. Refunds are only
            applicable when a service provider fails to deliver the agreed-upon
            work or the work is deemed unsatisfactory.
          </li>
        </ul>

        <h2 className="header-two">7. Privacy and Data Protection</h2>
        <ul className="rules-list">
          <li className="text-gray-700">
            <strong>Personal Information:</strong> Users must provide valid
            contact information to facilitate communication. We will not share
            or sell personal data to third parties without your consent. All
            personal data is handled in accordance with our privacy policy.
          </li>
          <li className="text-gray-700">
            <strong>Confidentiality:</strong> Any confidential information
            shared between clients and service providers during the renovation
            process should be kept private.
          </li>
        </ul>

        <h2 className="header-two">8. Payment and Fees</h2>
        <ul className="rules-list">
          <li className="text-gray-700">
            <strong>Pricing:</strong> Prices for services are set by the service
            providers. Clients and service providers should agree on the pricing
            before the job starts. Any additional costs must be discussed and
            approved beforehand.
          </li>
          <li className="text-gray-700">
            <strong>Transaction Fees:</strong> The platform may charge a small
            transaction fee for processing payments. Service providers should be
            aware of any applicable service fees and factor them into their
            pricing.
          </li>
          <li className="text-gray-700">
            <strong>Payment Methods:</strong> Payments should be made through
            the portal using the supported payment methods (credit card, bank
            transfer, etc.). Cash transactions are discouraged for safety and
            transparency reasons.
          </li>
        </ul>

        <h2 className="header-two">9. Termination of Services</h2>
        <ul className="rules-list">
          <li className="text-gray-700">
            <strong>Termination by Clients:</strong> Clients may terminate the
            service agreement if the service provider fails to meet agreed
            terms. However, termination should be done within a reasonable time
            frame and be based on valid reasons.
          </li>
          <li className="text-gray-700">
            <strong>Termination by Service Providers:</strong> Service providers
            can terminate the agreement if a client is consistently
            uncooperative or fails to provide the necessary materials or access
            to the property.
          </li>
        </ul>

        <h2 className="header-two">10. Changes to Rules and Regulations</h2>
        <ul className="rules-list">
          <li className="text-gray-700">
            <strong>Modification of Rules:</strong> We reserve the right to
            modify or update these rules and regulations at any time. Any
            changes will be communicated to users through the portal or email,
            and users are encouraged to review them periodically.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default RulesAndRegulations;
