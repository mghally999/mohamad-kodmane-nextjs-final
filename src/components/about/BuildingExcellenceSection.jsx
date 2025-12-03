"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BuildingExcellenceSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const statRefs = useRef([]);

  const setStatRef = (el, index) => {
    if (!el) return;
    statRefs.current[index] = el;
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left title
      gsap.fromTo(
        leftRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Right paragraph
      gsap.fromTo(
        rightRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats cards
      gsap.fromTo(
        statRefs.current,
        { x: -60, y: 30, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Counters
      statRefs.current.forEach((box) => {
        if (!box) return;
        const span = box.querySelector("[data-count-span]");
        const target = Number(span?.dataset.countValue || 0);
        if (!span || !target) return;

        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power1.out",
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            toggleActions: "restart none none reset",
          },
          onUpdate: () => {
            span.textContent = Math.floor(counter.value).toString();
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        padding: "100px 0",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px",
          opacity: 0.6,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* TOP ROW – HEADING + TEXT */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "120px",
            gap: "60px",
          }}
        >
          <div ref={leftRef} style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#1a1a1a",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Real Estate Decisions
              <br />
              That Build Wealth,
              <br />
              Not Just Properties
            </h2>
          </div>

          <div ref={rightRef} style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "#4a4a4a",
                margin: 0,
                fontWeight: 400,
              }}
            >
              At <strong>Mohamad Kodmani Real Estate Brokerage</strong>, we do
              not simply sell units; we design complete investment strategies.
              Every recommendation is based on transparent information,
              realistic market analysis and a clear plan that balances capital
              appreciation, rental income and risk. In just two years, our team
              has helped investors close more than{" "}
              <strong>AED 170 million</strong> in transactions with{" "}
              <strong>returns above 8% annually</strong>, by entering the right
              projects at the right time.
            </p>
          </div>
        </div>

        {/* BOTTOM ROW – STATS */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* 1 – YEARS OF EXPERIENCE */}
          <div
            style={{ flex: "1 1 300px", minWidth: "280px" }}
            ref={(el) => setStatRef(el, 0)}
          >
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.05)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <Image
                  src="/icons/experience.svg"
                  alt="Experience icon"
                  width={40}
                  height={40}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>

              <div
                style={{
                  width: "100%",
                  height: "2px",
                  background: "linear-gradient(90deg, #667eea, #764ba2)",
                  margin: "24px 0",
                  opacity: 0.3,
                }}
              />

              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    margin: "0 0 12px 0",
                    lineHeight: 1.1,
                  }}
                >
                  <span
                    data-count-span
                    data-count-value="19"
                    style={{ display: "inline-block", minWidth: "40px" }}
                  >
                    19
                  </span>
                  +
                  <span style={{ fontSize: "1.4rem", marginLeft: "4px" }}>
                    years
                  </span>
                </h3>
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  Of entrepreneurial and real estate experience across multiple
                  sectors.
                </span>
              </div>
            </div>
          </div>

          {/* 2 – SALES VOLUME */}
          <div
            style={{ flex: "1 1 300px", minWidth: "280px" }}
            ref={(el) => setStatRef(el, 1)}
          >
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.05)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <Image
                  src="/icons/sales.svg"
                  alt="Sales volume icon"
                  width={40}
                  height={40}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>

              <div
                style={{
                  width: "100%",
                  height: "2px",
                  background: "linear-gradient(90deg, #f093fb, #f5576c)",
                  margin: "24px 0",
                  opacity: 0.3,
                }}
              />

              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    margin: "0 0 12px 0",
                    lineHeight: 1.1,
                  }}
                >
                  AED{" "}
                  <span
                    data-count-span
                    data-count-value="170"
                    style={{ display: "inline-block", minWidth: "60px" }}
                  >
                    170
                  </span>
                  M+
                </h3>
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  Transaction volume closed for investors in just two years.
                </span>
              </div>
            </div>
          </div>

          {/* 3 – RETURNS */}
          <div
            style={{ flex: "1 1 300px", minWidth: "280px" }}
            ref={(el) => setStatRef(el, 2)}
          >
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.05)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <Image
                  src="/icons/returns.svg"
                  alt="Investment returns icon"
                  width={40}
                  height={40}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>

              <div
                style={{
                  width: "100%",
                  height: "2px",
                  background: "linear-gradient(90deg, #4facfe, #00f2fe)",
                  margin: "24px 0",
                  opacity: 0.3,
                }}
              />

              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    margin: "0 0 12px 0",
                    lineHeight: 1.1,
                  }}
                >
                  <span
                    data-count-span
                    data-count-value="8"
                    style={{ display: "inline-block", minWidth: "30px" }}
                  >
                    8
                  </span>
                  %+
                </h3>
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  Targeted annual returns on structured investment strategies
                  with controlled risk.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div
          style={{
            width: "100px",
            height: "4px",
            background: "linear-gradient(90deg, #667eea, #764ba2)",
            margin: "80px auto 0 auto",
            borderRadius: "2px",
          }}
        />
      </div>
    </section>
  );
}
