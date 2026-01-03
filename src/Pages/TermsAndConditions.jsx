import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our
            car rental services. By accessing or using our platform, you agree
            to be bound by these terms.
          </p>

          <div className="space-y-10 text-gray-700">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                1. Eligibility
              </h2>
              <p>
                Users must be at least 18 years old and possess a valid driving
                license to rent a vehicle. By registering on our platform, you
                confirm that the information provided is accurate and complete.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                2. Booking & Reservation
              </h2>
              <p>
                All bookings are subject to vehicle availability. A booking is
                confirmed only after successful submission and confirmation
                through our platform. We reserve the right to cancel bookings
                due to unavailability or policy violations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                3. Pricing & Payments
              </h2>
              <p>
                Rental prices are displayed per day and may vary based on
                vehicle type, location, and availability. Any additional fees
                will be clearly communicated before confirmation. We do not
                support hidden charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                4. Vehicle Usage
              </h2>
              <p>
                Rented vehicles must be used responsibly and strictly for
                lawful purposes. Any damage, loss, or misuse of the vehicle
                during the rental period will be the renter’s responsibility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                5. Cancellations & Refunds
              </h2>
              <p>
                Users may cancel bookings according to the cancellation policy
                specified at the time of booking. Refund eligibility depends
                on cancellation timing and rental conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                6. User Accounts
              </h2>
              <p>
                Users are responsible for maintaining the confidentiality of
                their account credentials. Any activity performed through the
                account will be considered authorized by the account holder.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                We are not responsible for indirect, incidental, or
                consequential damages arising from the use of our services,
                including vehicle unavailability or technical issues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                8. Modifications to Terms
              </h2>
              <p>
                We reserve the right to update or modify these terms at any
                time. Continued use of the platform after changes indicates
                acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                9. Contact Information
              </h2>
              <p>
                If you have any questions regarding these terms, please contact
                our support team through the Help & Support page.
              </p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TermsAndConditions
