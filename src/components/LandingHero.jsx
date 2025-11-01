"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "@/app/projects/styles/LandingHero.module.css";

export default function LandingPage() {
  const [activeFloorPlan, setActiveFloorPlan] = useState("1 BR");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const floorPlans = {
    "1 BR": {
      unit: "1 BEDROOM + 1 POWDER ROOM + 1 BALCONY",
      suite: "655.31 SQ.FT.",
      balcony: "60.28 SQ.FT.",
      total: "715.59 SQ.FT.",
    },
    "2 BR": {
      unit: "2 BEDROOMS + 2 BATHROOMS + 1 BALCONY",
      suite: "955.31 SQ.FT.",
      balcony: "80.28 SQ.FT.",
      total: "1035.59 SQ.FT.",
    },
    "3 BR": {
      unit: "3 BEDROOMS + 3 BATHROOMS + 1 BALCONY",
      suite: "1255.31 SQ.FT.",
      balcony: "100.28 SQ.FT.",
      total: "1355.59 SQ.FT.",
    },
  };

  const amenities = [
    { name: "Schools", icon: "🎓" },
    { name: "Shop", icon: "🛍️" },
    { name: "Dine", icon: "🍽️" },
    { name: "Grocery", icon: "🛒" },
    { name: "Attractions", icon: "🏛️" },
  ];

  const projects = [
    {
      name: "Sobha AquaCrest",
      type: "APARTMENTS",
      image:
        "https://images.unsplash.com/photo-1600585154526-1?auto=format&fit=crop&w=600&q=80",
      description: "Luxury waterfront apartments with panoramic sea views",
    },
    {
      name: "Skyscape Aura",
      type: "APARTMENTS",
      image:
        "https://images.unsplash.com/photo-1600585154526-2?auto=format&fit=crop&w=600&q=80",
      description: "Modern high-rise living in the heart of the city",
    },
    {
      name: "Sobha Hartland Greens",
      type: "VILLAS",
      image:
        "https://images.unsplash.com/photo-1600585154526-3?auto=format&fit=crop&w=600&q=80",
      description: "Spacious villas surrounded by lush green landscapes",
    },
    {
      name: "Palm Grove Villas",
      type: "VILLAS",
      image:
        "https://images.unsplash.com/photo-1600585154526-4?auto=format&fit=crop&w=600&q=80",
      description: "Exclusive villa community with private beach access",
    },
    {
      name: "Sobha SkyParks",
      type: "APARTMENTS",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      description: "Iconic towers offering sky-high luxury living",
    },
    {
      name: "Skyscape Avenue",
      type: "APARTMENTS",
      image:
        "https://images.unsplash.com/photo-1600585154526-5?auto=format&fit=crop&w=600&q=80",
      description: "Contemporary apartments in prime downtown location",
    },
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.container}>
      {/* ===== HERO SECTION WITH OVERLAPPING IMAGE ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="Sobha SkyParks"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>

        {/* OVERLAPPING PROJECT IMAGE - Exactly like Sobha */}
        <div className={styles.overlappingProject}>
          <div className={styles.projectImageWrapper}>
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
              alt="Sobha SkyParks Tower"
              width={500}
              height={600}
              className={styles.projectMainImage}
            />
            <div className={styles.projectTitleOverlay}>
              <h1>SOBHA</h1>
              <h2>SKYPARKS</h2>
            </div>
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.projectBadge}>
            <span>PREMIUM RESIDENTIAL TOWERS</span>
          </div>
          <h1 className={styles.heroTitle}>
            LIVE WHERE THE SKY
            <br />
            <span className={styles.titleAccent}>FEELS LIKE HOME</span>
          </h1>
          <p className={styles.heroDescription}>
            Rising over Sheikh Zayed Road, Sobha SkyParks brings together the
            best of city life and elevated calm. This 450-metre architectural
            icon places you at the heart of Dubai's most desired location.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.primaryBtn}>DOWNLOAD BROCHURE</button>
            <button className={styles.secondaryBtn}>REQUEST CALL BACK</button>
          </div>
        </div>

        <div className={styles.googleReview}>
          <div className={styles.reviewContent}>
            <div className={styles.googleLogo}>G</div>
            <div className={styles.reviewInfo}>
              <span>Google Reviews</span>
              <h4>Sobha Realty</h4>
              <p>
                <strong>4.7/5</strong> ★★★★★
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISUAL SYMPHONY SECTION ===== */}
      <section
        ref={sectionRef}
        className={`${styles.visualSymphony} ${
          isVisible ? styles.visible : ""
        }`}
      >
        <div className={styles.symphonyContainer}>
          <div className={styles.symphonyHeader}>
            <h2>A Visual Symphony</h2>
            <p>
              Choose from 1-3 bedroom residences and elegant duplexes, each
              offering sweeping views of the Arabian Sea and Downtown Dubai
              skyline. Here, every moment flows seamlessly between movement and
              stillness, between the pulse of the city and the quiet above the
              clouds.
            </p>
          </div>

          <div className={styles.symphonyGallery}>
            {/* Main Large Image */}
            <div className={styles.mainImageContainer}>
              <Image
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Interior"
                width={800}
                height={600}
                className={styles.mainImage}
              />
              <div className={styles.imageOverlay}>
                <h3>Elegant Living Spaces</h3>
                <p>Designed for modern luxury and comfort</p>
              </div>
            </div>

            {/* Side Images Grid */}
            <div className={styles.sideImages}>
              <div className={styles.sideImageItem}>
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80"
                  alt="Living Room"
                  width={280}
                  height={200}
                  className={styles.sideImage}
                />
                <div className={styles.imageCaption}>Living Area</div>
              </div>
              <div className={styles.sideImageItem}>
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80"
                  alt="Bedroom"
                  width={280}
                  height={200}
                  className={styles.sideImage}
                />
                <div className={styles.imageCaption}>Master Bedroom</div>
              </div>
              <div className={styles.sideImageItem}>
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80"
                  alt="Kitchen"
                  width={280}
                  height={200}
                  className={styles.sideImage}
                />
                <div className={styles.imageCaption}>Gourmet Kitchen</div>
              </div>
              <div className={styles.sideImageItem}>
                <Image
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80"
                  alt="Bathroom"
                  width={280}
                  height={200}
                  className={styles.sideImage}
                />
                <div className={styles.imageCaption}>Spa Bathroom</div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className={styles.featureHighlights}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🏙️</div>
              <h4>Panoramic Views</h4>
              <p>Stunning views of Downtown Dubai and Arabian Sea</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🎨</div>
              <h4>Premium Finishes</h4>
              <p>High-end materials and sophisticated design</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🌿</div>
              <h4>Green Spaces</h4>
              <p>Lush landscaping and tranquil environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FLOOR PLANS SECTION ===== */}
      <section className={styles.floorPlansSection}>
        <div className={styles.sectionHeader}>
          <h2>Floor Plans</h2>
          <p>Explore our carefully designed residential layouts</p>
        </div>

        <div className={styles.floorPlanTabs}>
          {["1 BR", "2 BR", "3 BR"].map((plan) => (
            <button
              key={plan}
              className={`${styles.planTab} ${
                activeFloorPlan === plan ? styles.active : ""
              }`}
              onClick={() => setActiveFloorPlan(plan)}
            >
              {plan}
            </button>
          ))}
        </div>

        <div className={styles.floorPlanContent}>
          <div className={styles.planDetails}>
            <div className={styles.planInfo}>
              <h4>{activeFloorPlan} Apartment (Type A)</h4>
              <div className={styles.planSpecs}>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>UNIT:</span>
                  <span className={styles.specValue}>
                    {floorPlans[activeFloorPlan].unit}
                  </span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>SUITE:</span>
                  <span className={styles.specValue}>
                    {floorPlans[activeFloorPlan].suite}
                  </span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>BALCONY:</span>
                  <span className={styles.specValue}>
                    {floorPlans[activeFloorPlan].balcony}
                  </span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>TOTAL:</span>
                  <span className={styles.specValue}>
                    {floorPlans[activeFloorPlan].total}
                  </span>
                </div>
              </div>
            </div>
            <button className={styles.floorPlanBtn}>DOWNLOAD FLOOR PLAN</button>
          </div>

          <div className={styles.planVisual}>
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Floor Plan"
              width={500}
              height={400}
              className={styles.planImage}
            />
          </div>
        </div>
      </section>

      {/* ===== AMENITIES SECTION ===== */}
      <section className={styles.amenitiesSection}>
        <div className={styles.sectionHeader}>
          <h2>Luxury That Elevates Every Moment</h2>
        </div>

        <div className={styles.amenitiesGrid}>
          {amenities.map((amenity, index) => (
            <div key={index} className={styles.amenityItem}>
              <div className={styles.amenityIcon}>{amenity.icon}</div>
              <span className={styles.amenityName}>{amenity.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS CAROUSEL SECTION ===== */}
      <section className={styles.projectsCarousel}>
        <div className={styles.sectionHeader}>
          <h2>OTHER EXCLUSIVE PROJECTS</h2>
          <p>Discover our premium real estate developments</p>
        </div>

        <div className={styles.carouselContainer}>
          <button className={styles.carouselArrow} onClick={prevProject}>
            ‹
          </button>

          <div className={styles.carouselTrack}>
            <div
              className={styles.carouselSlide}
              style={{
                transform: `translateX(-${currentProjectIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div key={index} className={styles.projectSlide}>
                  <div className={styles.projectImage}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={400}
                      className={styles.slideImage}
                    />
                  </div>
                  <div className={styles.projectInfo}>
                    <span className={styles.projectType}>{project.type}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <button className={styles.projectBtn}>VIEW PROJECT</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className={styles.carouselArrow} onClick={nextProject}>
            ›
          </button>
        </div>

        <div className={styles.carouselDots}>
          {projects.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentProjectIndex ? styles.active : ""
              }`}
              onClick={() => setCurrentProjectIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* ===== LOCATION SECTION ===== */}
      <section className={styles.locationSection}>
        <div className={styles.sectionHeader}>
          <h2>The Best Of The City, All Within Minutes</h2>
        </div>

        <div className={styles.locationContent}>
          <div className={styles.locationMap}>
            <Image
              src="https://images.unsplash.com/photo-1577083552431-6e5fd01988a3?auto=format&fit=crop&w=800&q=80"
              alt="Location Map"
              width={600}
              height={400}
              className={styles.mapImage}
            />
          </div>
          <div className={styles.locationInfo}>
            <h3>Prime Location</h3>
            <ul className={styles.locationList}>
              <li>• 5 mins to Dubai International Airport</li>
              <li>• 10 mins to Downtown Dubai</li>
              <li>• 15 mins to Dubai Marina</li>
              <li>• Walking distance to metro station</li>
              <li>• Close to major shopping malls</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>WE'D LOVE TO HEAR FROM YOU</h2>
            <div className={styles.pricing}>
              <h3>STARTING PRICES</h3>
              <div className={styles.priceList}>
                <span>AED 2.86 M*</span>
                <span>USD 784 K*</span>
                <span>EUR 699 K*</span>
                <span>GBP 606 K*</span>
              </div>
              <p className={styles.priceNote}>
                *Subject to inventory availability
              </p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3>Schedule a Viewing</h3>
            <form className={styles.form}>
              <input
                type="text"
                placeholder="Full Name"
                className={styles.formInput}
              />
              <input
                type="email"
                placeholder="Email Address"
                className={styles.formInput}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className={styles.formInput}
              />
              <select className={styles.formInput}>
                <option>Interested in 1 BR</option>
                <option>Interested in 2 BR</option>
                <option>Interested in 3 BR</option>
              </select>
              <button type="submit" className={styles.submitBtn}>
                REQUEST INFORMATION
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3>SOBHA REALTY</h3>
            <p>Creating timeless landmarks since 1995</p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4>PROJECTS</h4>
              <a href="#">Apartments</a>
              <a href="#">Villas</a>
              <a href="#">Penthouses</a>
            </div>
            <div className={styles.linkColumn}>
              <h4>COMPANY</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div className={styles.linkColumn}>
              <h4>LEGAL</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
