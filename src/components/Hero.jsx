"use client";
import React from "react";

export default function Hero() {
  return (
    <>
      <section className="hero-section">
        <img
          src="/logo.jpg"
          alt="Mohamad Kodmane Real Estate"
          className="hero-logo"
        />
        <h1 className="hero-title">Luxury Real Estate in Dubai</h1>
        <p className="hero-text">
          Discover exclusive properties, high-end investments, and unmatched
          opportunities across Dubai’s most prestigious locations.
        </p>
      </section>

      <style jsx>{`
        .hero-section {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(to bottom, #1b1b1b, #0f0f0f);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 100px 20px;
          box-sizing: border-box;
        }

        .hero-logo {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin-bottom: 20px;
          object-fit: cover;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
        }

        .hero-title {
          color: #d4af37;
          font-family: "Playfair Display", serif;
          font-size: 2.5rem;
          margin: 10px 0;
          letter-spacing: 1px;
        }

        .hero-text {
          color: #bfbfbf;
          max-width: 600px;
          font-size: 1rem;
          margin-top: 10px;
          line-height: 1.6;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 2.2rem;
          }
          .hero-text {
            font-size: 0.95rem;
            max-width: 500px;
          }
          .hero-logo {
            width: 130px;
            height: 130px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 15px;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-text {
            font-size: 0.9rem;
            max-width: 450px;
          }
          .hero-logo {
            width: 120px;
            height: 120px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 60px 10px;
          }
          .hero-title {
            font-size: 1.8rem;
          }
          .hero-text {
            font-size: 0.85rem;
            max-width: 90%;
          }
          .hero-logo {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </>
  );
}
