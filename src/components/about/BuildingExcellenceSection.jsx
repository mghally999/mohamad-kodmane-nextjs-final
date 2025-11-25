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
      // 1) LEFT TITLE – slide in once, stay; disappear only when scrolling back up
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
            // onEnter, onLeave, onEnterBack, onLeaveBack
            toggleActions: "play none none reverse",
            //  👆 play when entering from bottom, do nothing when leaving
            //  while going down, reverse only when leaving back (scrolling up)
          },
        }
      );

      // 2) RIGHT PARAGRAPH – same logic, from the right
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

      // 3) STATS – come 1 by 1 from left/bottom and then stay
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

      // 4) COUNTERS – restart each time you enter, reset when you go back above
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
            // enter from bottom = restart animation
            // leave back above = reset to 0
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
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
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
              Building
              <br />
              Excellence for
              <br />
              Generations
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
              At Mohamad Kodmani Real Real Estate Brokers , we pride ourselves
              on uncompromising standards. Our focus on craftsmanship, detail
              and long-term thinking is at the heart of everything we do. While
              others may consider minor details to be unimportant, we understand
              how these small decisions come together to create an extraordinary
              living and investing experience.
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
          {/* 1 – LAND AREA */}
          <div
            style={{
              flex: "1 1 300px",
              minWidth: "280px",
            }}
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
                  src="/icons/land-area.svg"
                  alt="Land area icon"
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
                  ~
                  <span
                    data-count-span
                    data-count-value="8"
                    style={{ display: "inline-block", minWidth: "40px" }}
                  >
                    8
                  </span>
                  Mn
                </h3>
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  Square Feet of Land Area Developed
                </span>
              </div>
            </div>
          </div>

          {/* 2 – EMPLOYEES */}
          <div
            style={{
              flex: "1 1 300px",
              minWidth: "280px",
            }}
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
                  src="/icons/employees.svg"
                  alt="Employees icon"
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
                  ~
                  <span
                    data-count-span
                    data-count-value="3000"
                    style={{ display: "inline-block", minWidth: "60px" }}
                  >
                    3000
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
                  Employees as of 2024
                </span>
              </div>
            </div>
          </div>

          {/* 3 – MARKET SHARE */}
          <div
            style={{
              flex: "1 1 300px",
              minWidth: "280px",
            }}
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
                  src="/icons/pie-chart.svg"
                  alt="Market share icon"
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
                  ~
                  <span
                    data-count-span
                    data-count-value="10"
                    style={{ display: "inline-block", minWidth: "30px" }}
                  >
                    10
                  </span>
                  %
                </h3>
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  Market Share in Dubai
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
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
