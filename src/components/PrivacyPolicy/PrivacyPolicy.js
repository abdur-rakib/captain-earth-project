import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import maskot from "../../styles/img/maskot.png";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header className="newsfeed">
        <Link to="/" className="newsfeed__logo-box">
          <img src={maskot} alt="Logo" className="newsfeed__logo" />
        </Link>
      </header>
      {/* <!-- NAVIGATION SECTION --> */}

      <section className="privacy__policy">
        <div className="privacy__policy-head">
          <h1>Privacy and policy</h1>
          <h2>for Captain Earth</h2>
        </div>

        {/* <!-- DESCRIPTION --> */}
        <div className="privacy__policy-desc">
          <p>
            At captain-earth, accessible from{" "}
            <a href="https://captain-earth.com/">here</a> one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that are collected and
            recorded by captain-earth and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>
          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collected in captain-earth. This policy is
            not applicable to any information collected offline or via channels
            other than this website.
          </p>
        </div>

        {/* <!-- CONSENT --> */}
        <div className="privacy__policy-consent">
          <h1 className="policy-heading">Consent</h1>
          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>
        </div>

        {/* <!-- INFORMATION WE COLLECT --> */}
        <div className="privacy__policy-info_collect">
          <h1 className="policy-heading" data-text="loader">
            Information we collect
          </h1>
          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, the contents of the
            message and/or attachments you may send us, and any other
            information you may choose to provide.
          </p>
          <p>
            When you register for an Account, we may ask for your contact
            information, including items such as name and email address.
          </p>
        </div>

        {/* <!-- How stored data will be used & shared --> */}
        <div className="privacy__policy-info_collect">
          <h1 className="policy-heading">
            How stored data will be used & shared
          </h1>
          <ul>
            <li>Our data storage will be encrypted & inaccessible</li>
            <li>
              No information of user will be compromised that can cause harm to
              that respective user
            </li>
            <li>
              No data on any user will be shared with any third party member,
              without proper consent of the user.
            </li>
          </ul>
        </div>

        {/* <!-- HOW E USE YOUR INFORMATION --> */}
        <div className="privacy__policy-info_collect">
          <h1 className="policy-heading">How we use your information</h1>
          <p>We use the information we collect in various ways, including:</p>
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>
        </div>

        {/* <!-- LOG FILES --> */}
        <div className="privacy__policy-log">
          <h1 className="policy-heading">Log Files</h1>
          <p>
            captain-earth follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files includes internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </p>
        </div>

        {/* <!-- COOKIES AND WEB BEANCONS --> */}
        <div className="privacy__policy-cookies">
          <h1 className="policy-heading">Cookies and Web Beacons</h1>
          <p>
            Like any other website, captain-earth uses 'cookies'. These cookies
            are used to store information including visitors' preferences, and
            the pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information
          </p>
          <p>
            For more general information on cookies, please read
            <a href="https://www.cookieconsent.com/what-are-cookies/">
              What Are Cookies
            </a>
          </p>
        </div>

        {/* <!-- Advertising Partners Privacy Policies --> */}
        <div className="privacy__policy-advertising">
          <h1 className="policy-heading">
            Advertising Partners Privacy Policies
          </h1>
          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of captain-earth.
          </p>
          <p>
            Third-party ad servers or ad networks use technologies like cookies,
            JavaScript, or Web Beacons that are used in their respective
            advertisements and links that appear on captain-earth, which are
            sent directly to users' browsers. They automatically receive your IP
            address when this occurs. These technologies are used to measure the
            effectiveness of their advertising campaigns and/or to personalize
            the advertising content that you see on websites that you visit.
          </p>
          <p>
            Note that captain-earth has no access to or control over these
            cookies that are used by third-party advertisers.
          </p>
        </div>

        {/* <!-- THIRD-PARTY PRIVACY POLICY --> */}
        <div className="privacy__policy-advertising">
          <h1 className="policy-heading">Third-Party Privacy Policies</h1>
          <p>
            captain-earth's Privacy Policy does not apply to other advertisers
            or websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.
          </p>
          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </p>
        </div>

        {/* <!-- CCPA PRIVACY RIGHT --> */}
        <div className="privacy__policy-ccpa">
          <h1 className="policy-heading">
            CCPA Privacy Rights{" "}
            <span>(Do Not Sell My Personal Information)</span>
          </h1>
          <p>
            Under the CCPA, among other rights, California consumers have the
            right to:
          </p>
          <ul>
            <li>
              Request that a business that collects a consumer's personal data
              disclose the categories and specific pieces of personal data that
              a business has collected about consumers.
            </li>
            <li>
              Request that a business deletes any personal data about the
              consumer that a business has collected.
            </li>
            <li>
              Request that a business that sells a consumer's personal data, not
              sell the consumer's personal data.
            </li>
            <li>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </li>
          </ul>
        </div>

        {/* <!-- GDPR Data Protection Rights --> */}
        <div className="privacy__policy-gdp">
          <h1 className="policy-heading">GDPR Data Protection Rights</h1>
          <p>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <ul>
            <li>
              <span>The right to access –</span> You have the right to request
              copies of your personal data. We may charge you a small fee for
              this service.
            </li>
            <li>
              <span>The right to rectification –</span> You have the right to
              request that we correct any information you believe is inaccurate.
              You also have the right to request that we complete the
              information you believe is incomplete.
            </li>
            <li>
              <span>The right to erasure –</span> You have the right to request
              that we erase your personal data, under certain conditions.
            </li>
            <li>
              <span>The right to restrict processing –</span> You have the right
              to request that we restrict the processing of your personal data,
              under certain conditions.
            </li>
            <li>
              <span>The right to object to processing –</span> You have the
              right to object to our processing of your personal data, under
              certain conditions.
            </li>
            <li>
              <span>The right to data portability –</span> You have the right to
              request that we transfer the data that we have collected to
              another organization, or directly to you, under certain
              conditions.
            </li>
          </ul>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
        </div>

        {/* <!-- Children's Information --> */}
        <div className="privacy__policy-childInfo">
          <h1 className="policy-heading">Children's Information</h1>
          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>
          <p>
            captain-earth does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
