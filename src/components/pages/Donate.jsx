import React from "react";
import { Button } from "../Button";
import "../styles/Donate.css";

const Donate = () => {
  return (
    <div className="donate-container">
      {/* Parallax Background Cover (reused from sponsors style) */}
      <img src="/images/members.jpg" alt="Support Us" className="sponsor-cover sponsor-img" />

      <div className="donate-header-section">
        <h1 className="donate-title">Support The Black Knights</h1>
        <p className="donate-subtitle">
          Empowering future STEM leaders, engineers, and innovators of FRC Team 2036.
        </p>
      </div>

      <div className="donate-content-grid">
        {/* Left Side: 501c3 & Alternatives */}
        <div className="donate-info-column">
          <div className="donate-card glass-card non-profit-card">
            <div className="card-header">

              <h2>Tax-Deductible Donation</h2>
            </div>
            <p>
              The Black Knights Robotics is a registered 501(c)(3) tax-exempt nonprofit organization.
              Your contributions directly fund robot development, shop machinery, competition registrations, and regional travels, helping make STEM education accessible to all students.
            </p>
            <div className="card-details">
              <div className="detail-item">
                <strong>Tax Exemption:</strong> Donations are 100% tax-deductible to the fullest extent permitted by U.S. law.
              </div>
              <div className="detail-item">
                <strong>Employer Matching:</strong> Many employers match charitable contributions to 501(c)(3) organizations, instantly doubling your impact. Ask your HR department if your company participates!
              </div>
              <div className="detail-item">
                <strong>Official Receipt:</strong> An official tax receipt will be sent to your email immediately upon successful completion of your online donation.
              </div>
            </div>
          </div>

          <div className="donate-card glass-card cash-check-card">
            <h2>Donate by Cash or Check</h2>
            <p>
              We deeply appreciate alternative forms of support. If you prefer to send a check or donate in cash, please coordinate with us. A W-9 form can be provided upon request.
            </p>
            <div className="check-instructions">
              <p><strong>Make checks payable to:</strong></p>
              <div className="payee-box">BLACK KNIGHTS ROBOTICS</div>
              <p style={{ marginTop: "15px" }}><strong>Mailing Address:</strong></p>
              <address className="mailing-address">
                Black Knights Robotics<br />
                5765 Arapahoe Ave<br />
                Boulder, CO 80303
              </address>
              <p style={{ marginTop: "15px" }}>
                Please email us at <a href="mailto:blackknights2036@gmail.com">blackknights2036@gmail.com</a> to let us know a check is on the way!
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Zeffy Online Donation */}
        <div className="donate-widget-column">
          <div className="donate-card glass-card zeffy-widget-card">
            <div className="widget-header">
              <h2>Secure Online Donation</h2>
              <p className="zeffy-notice">
                We use <strong>Zeffy</strong> now. Zeffy is a specialized platform for non-profits that charges <strong>0% platform fees</strong>, ensuring 100% of your generous gift goes directly to support our students.
              </p>
            </div>

            <div className="zeffy-iframe-wrapper">
              <iframe
                title="Zeffy Donation Form"
                src="https://www.zeffy.com/en-US/ticketing/black-knights-robotics"
                allow="payment"
                className="zeffy-iframe"
                loading="lazy"
              />
            </div>

            <div className="widget-fallback">
              <p>Form not loading properly? You can donate directly on Zeffy:</p>
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
                linkTo="https://www.zeffy.com/en-US/ticketing/black-knights-robotics"
              >
                Donate on Zeffy Site
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsorship Tiers Section (team4414 style) */}
      <div className="sponsorship-tiers-section">
        <h2 className="section-title">Annual Sponsorship Tiers</h2>
        <p className="section-subtitle">
          Partner with Team 2036 to inspire the next generation of innovators. Logo sizes scale up with higher tiers.
        </p>

        <div className="tiers-grid">
          {/* Family/Individual Tier */}
          <div className="tier-card family-tier">
            <div className="tier-header">
              <h3>Family / Individual</h3>
              <div className="tier-price">&lt; $500</div>
            </div>
            <ul className="tier-benefits">
              <li>
                <span className="benefit-bullet">•</span> Name displayed in our family sponsors directory
              </li>
              <li>
                <span className="benefit-bullet">•</span> Periodic team newsletter updates
              </li>
              <li>
                <span className="benefit-bullet">•</span> Invitation to our annual team open house
              </li>
            </ul>
          </div>

          {/* Bronze Tier */}
          <div className="tier-card bronze-tier">
            <div className="tier-header">
              <h3>Bronze Sponsor</h3>
              <div className="tier-price">$500 – $999</div>
            </div>
            <ul className="tier-benefits">
              <li>
                <span className="benefit-bullet">•</span> Family or Business name featured on our website
              </li>
              <li>
                <span className="benefit-bullet">•</span> Family or Business name placed on our competition robot
              </li>
              <li>
                <span className="benefit-bullet">•</span> Small logo featured on team banner in the pits
              </li>
              <li>
                <span className="benefit-bullet">•</span> All Individual Tier benefits included
              </li>
            </ul>
          </div>

          {/* Silver Tier */}
          <div className="tier-card silver-tier">
            <div className="tier-header">
              <h3>Silver Sponsor</h3>
              <div className="tier-price">$1,000 – $2,999</div>
            </div>
            <ul className="tier-benefits">
              <li>
                <span className="benefit-bullet">•</span> Business logo displayed on our official website
              </li>
              <li>
                <span className="benefit-bullet">•</span> Business logo placed on our active competition robot
              </li>
              <li>
                <span className="benefit-bullet">•</span> Medium logo printed on our official team t-shirts
              </li>
              <li>
                <span className="benefit-bullet">•</span> Custom sponsor plaque for display at your office
              </li>
            </ul>
          </div>

          {/* Gold Tier */}
          <div className="tier-card gold-tier">
            <div className="tier-header">
              <span className="tier-badge">Premier Partner</span>
              <h3>Gold Sponsor</h3>
              <div className="tier-price">$3,000+</div>
            </div>
            <ul className="tier-benefits">
              <li>
                <span className="benefit-bullet">•</span> Large, prominent logo featured on website home & sponsor pages
              </li>
              <li>
                <span className="benefit-bullet">•</span> Large logo in prime placement on our competition robot
              </li>
              <li>
                <span className="benefit-bullet">•</span> Large logo printed at the top of our team t-shirts
              </li>
              <li>
                <span className="benefit-bullet">•</span> Business announced at competitions as a primary sponsor
              </li>
              <li>
                <span className="benefit-bullet">•</span> Direct promotion across our social media platforms
              </li>
            </ul>
          </div>
        </div>

        <div className="sponsorship-note">
          <p>
            * Logo and name placement sizing is proportional to the tier level. We also accept in-kind donations of machinery, tools, raw materials, electronics, or mentorship services.
            For custom partnerships, corporate sponsorships, or in-kind donations, please contact our team leadership directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
