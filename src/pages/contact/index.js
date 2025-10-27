import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  // Optional: read LinkedIn from content_option.contactConfig.LINKEDIN
  // Example to add in content_option.js:
  // export const contactConfig = { ..., LINKEDIN: "https://www.linkedin.com/in/your-handle/" }
  const linkedinUrl = contactConfig?.LINKEDIN || "";

  return (
    <HelmetProvider>
      <Container className="contact-wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Hero */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="10">
            <h1 className="display-4 mb-3 contact-title">Let’s Connect</h1>
            <p className="lead contact-subtitle">
              I’m open to collaborations, freelance projects, and ambitious ideas.
              Whether it’s brand design, web experiences, AI-powered tools, or robotics—
              tell me what you’re building and let’s make something memorable together.
            </p>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Contact Cards */}
        <Row className="g-4 sec_sp">
  <div className="contact-card contact-card--glow w-100">
          <span className="dot dot-gray" />
      <span className="dot dot-red" />
     <h3 className="color_sec mb-2">Get in touch</h3>
    <p className="muted mb-4">Let’s build something elegant and effective.</p>

    <p className="mb-3">
      I’m a creative designer and marketing specialist experienced in Canva, Photoshop,
      and modern AI tools. My mission is to craft stylish, high-impact content that
      helps businesses and personal brands stand out and grow.
    </p>

    <h5 className="mt-4 mb-2">What I can help with</h5>
    <ul className="pretty-list">
      <li>Logo & brand identity</li>
      <li>Business cards, banners, and marketing materials</li>
      <li>Website & landing page design</li>
      <li>Creative social content (TikTok, Instagram, etc.)</li>
      <li>Professional presentations (business, academic, investment)</li>
      <li>Photo retouching & ad image preparation</li>
      <li>SEO optimization for visuals and text</li>
      <li>Comprehensive marketing strategies for brand promotion</li>
    </ul>

    <h5 className="mt-4 mb-2">My strengths</h5>
    <ul className="pretty-list">
      <li>Personalized approach & attention to detail</li>
      <li>Creativity + AI-driven innovation</li>
      <li>Fast, high-quality delivery</li>
      <li>Flexibility and openness to revisions</li>
      <li>Adapting visuals & text for different cultures and languages</li>
    </ul>

    <div className="tag-row mt-3">
      <span className="badge-chip">Branding</span>
      <span className="badge-chip">UI/UX</span>
      <span className="badge-chip">Presentations</span>
      <span className="badge-chip">SEO</span>
      <span className="badge-chip">AI Design</span>
    </div>

    <p className="mt-4 mb-0">
      I’m open to collaboration and exciting new projects—let’s create something that inspires and sells!
    </p>

     {contactConfig?.LINKEDIN && (
      <a
        className="btn btn-linkedin btn-shine"
        href={contactConfig.LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="lnk-icon" aria-hidden>in</span>
        Connect on LinkedIn
      </a>
    )}
  </div>

        </Row>

        {/* Optional Extras */}
        <Row className="g-4">
          <Col lg="12">
            <div className="contact-note">
              <h4 className="mb-2">What to include in your first message</h4>
              <ul className="contact-bullets">
                <li>Project type (website, portfolio, brand, app, automation, AI/robotics)</li>
                <li>Scope & goals (what success looks like)</li>
                <li>Deadline & budget range</li>
                <li>References (links, styles, competitors you like)</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default ContactUs;
