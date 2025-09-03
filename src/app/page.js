"use client";

import React, { useState } from "react";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link href="/">
            <Image
              src="/logo.avif"
              alt="Showrun Logo"
              className="navbar-logo"
              width={120}
              height={50}
            />
          </Link>
        </div>
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a href="#signup" className="nav-button">
            Sign Up
          </a>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Header/Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text animate-fade-in">
            <h1>
              The Ultimate Workflow Solution for Unscripted Content Creators
            </h1>
            <p>
              Everything you need to create better work with less effort:
              integrated into a single app. Liberate yourself from mundane
              bureaucracy and turbocharge collaboration with real-time sync and
              notification.
            </p>
            <button className="cta-button">SIGN UP FOR FREE</button>
          </div>
          <div className="hero-image animate-slide-up">
          <Image
              src="https://img.freepik.com/free-photo/man-filming-with-professional-camera_23-2149066348.jpg"
              alt="Camera Operator"
              width={600}
              height={400}
              unoptimized
            />

          </div>
        </div>
      </header>

      {/* Empowering Content Creators Section */}
      <section className="section" id="features">
        <div className="card animate-fade-in">
          <h2>Empowering Content Creators</h2>
          <p className="section-subtitle">
            Empowering storytellers to tell great stories
          </p>
          <p>
            From fireside to cyberspace, we have always shared stories to make
            sense of the world. Creating unscripted content – bringing important
            stories to light – is a noble calling but a difficult job.
          </p>
          <p>
            Managing a project requires production crews to juggle an untidy
            assortment of unrelated applications. They must repeat manual tasks
            and monitor multiple information sources to stay up-to-date.
          </p>
          <p>
            Showrun changes the game. Everything, for everyone, secure, in one
            place, in real time, in the palm of your hand. Tame the bureaucratic
            chaos. Save time, stretch budgets, minimize errors, reduce stress.
          </p>
          <button className="cta-button">GET EARLY ACCESS</button>
        </div>
      </section>

      {/* Stop Working with One Hand Tied Section */}
      <section className="section section-alt">
        <div className="card animate-slide-up">
          <h2>Stop Working with One Hand Tied Behind Your Back</h2>
          <p>
            Production workflow applications are focused on scripted content with
            a script-first workflow. For unscripted content, the workflow is
            reversed, demanding a bespoke solution. Say hello to Showrun.
          </p>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Scripted</th>
                  <th>Unscripted</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Workflow</td>
                  <td>Everything starts with the script.</td>
                  <td>Scripting happens in post-production.</td>
                </tr>
                <tr>
                  <td>Crew</td>
                  <td>Larger teams of 30+.</td>
                  <td>Smaller nuclear teams of 2-15.</td>
                </tr>
                <tr>
                  <td>Scheduling</td>
                  <td>Predetermined, controlled, runs to clock.</td>
                  <td>Contributor or situation dependent, free-rolling.</td>
                </tr>
                <tr>
                  <td>Talent</td>
                  <td>Professional, trained artists.</td>
                  <td>General public, non-artists.</td>
                </tr>
                <tr>
                  <td>Locations</td>
                  <td>Often a single location per day.</td>
                  <td>Often multiple locations per day.</td>
                </tr>
                <tr>
                  <td>Compliance</td>
                  <td>Talent and locations contracted prior to shoot.</td>
                  <td>
                    Releases signed on the spot, during or after shoot.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Content Production Efficiency Section */}
      <section className="section">
        <div className="card animate-fade-in">
          <h2>Content Production Efficiency</h2>
          <p>
            Having data scattered between different applications is the source
            of unscripted production nightmares. With Showrun, you can sleep
            easy.
          </p>
          <p>
            Everyone becomes an active user, which is especially important when
            every member of a small production team must adopt multiple roles.
          </p>
          <p>
            The entire team can use the same application for different
            functions, and all relevant data is shared, so everyone is up to
            date with everything all the time.
          </p>
        </div>
      </section>

      {/* Say Goodbye to Silos Section */}
      <section className="section section-alt">
        <div className="card animate-slide-up">
          <h2>Say Goodbye to Silos & Hello to Efficiency</h2>
          <h3>Stay in Touch and Up to Date</h3>
          <p>
            Two of the most significant headaches in any production are
            coordinating communication between different roles and functions and
            ensuring everyone is up to date.
          </p>
          <p>
            Showrun facilitates instant and constant communication between every
            member of the team, with chat and message functionality always
            available, enabling collaborative work across all tools.
          </p>
          <p>
            All notifications are automated within the app, eliminating the need
            to chase email trails or scattergun SMS efforts.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <h2 className="animate-fade-in">Content Production Made Easy</h2>
        <div className="stats-grid">
          <div className="stat-card animate-slide-up">
            <div className="stat-number">25</div>
            <p>Years Experience</p>
          </div>
          <div
            className="stat-card animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="stat-number">260</div>
            <p>Credits Globally</p>
          </div>
          <div
            className="stat-card animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="stat-number">65</div>
            <p>International Awards</p>
          </div>
        </div>
      </section>

      {/* Built By Section */}
      <section className="section section-alt" id="about">
        <div className="card animate-fade-in">
          <h2>Built by and for Unscripted Content Creators</h2>
          <p>
            We know your pain. Showrun was founded and developed by a group of
            unscripted broadcast professionals.
          </p>
          <p>
            Having developed workflow optimisation solutions adopted by many
            industry professionals and used by respected broadcasters such as
            National Geographic, Discovery, Channel News Asia, HBO, Netflix, and
            the BBC, the founders wanted to create the definitive integrated
            community platform and application for unscripted content creation.
          </p>
          <p>
            Working with renowned technology and development partners Microsoft
            and Futura Tech Labs, Showrun was designed from the ground up to
            deliver workflow optimisation tailored to the needs of independent
            creators, freelance professionals, production houses, and
            broadcasters.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-form">
            <h3>Free Priority Access</h3>
            <p>
              Showrun beta is scheduled for launch in 2025. If you want to be
              one of the first to benefit from this ground-breaking technology,
              get in touch today.
            </p>
            <div className="form-grid">
              <input
                type="text"
                placeholder="First name"
                className="form-input"
              />
              <input
                type="text"
                placeholder="Last name"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Email"
                className="form-input form-email"
              />
              <button className="cta-button">SEND NOW</button>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-logo">
              <Image
                src="/logo.avif"
                alt="Showrun Logo"
                className="footer-logo-img"
                width={120}
                height={50}
              />
            </div>
            <div className="footer-links-list">
              <a href="#features">Find out more</a>
              <a href="#terms">Terms & Conditions</a>
              <a href="#privacy">Privacy Notice</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>COPYRIGHT 2025 SHOWRUN PTE LTD</p>
        </div>
      </footer>
    </div>
  );
}
