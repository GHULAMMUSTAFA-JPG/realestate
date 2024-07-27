import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesData = [
    {
      image: "/images/bg/tall-bg1.jpg",
      heading: "Immigration visa Consulting",
      description: "Expert Guidance for a Seamless Immigration Journey",
      features: [
        "Expert Legal Support",
        "Meeting Your Unique Needs",
        "Tailored Immigration Solutions",
      ],
    },
    {
      image: "/images/bg/tall-bg2.jpg",
      heading: "Visa Application Assistance",
      description: "Streamlined Process for Hassle-Free Application",
      features: [
        "Personalized Advice",
        "Comprehensive Support",
        "Success-Driven Approach",
      ],
    },
    {
      image: "/images/bg/tall-bg3.jpg",
      heading: "Global Visa Solutions",
      description: "Navigating International Visa Requirements",
      features: ["Global Reach", "Expert Knowledge", "Efficient Processing"],
    },
    // Add more slides as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slidesData.length]);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section
      className="hero hero__style-one bg_img"
      style={{ backgroundImage: `url(${slidesData[currentSlide].image})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="hero__content">
              {/* Header */}
              <Slide direction="up" triggerOnce={false} duration={1200}>
                <h1>
                  {slidesData[currentSlide].heading
                    .split(" ")
                    .map((word, i) => (
                      <React.Fragment key={i}>
                        {word}
                        {i !==
                          slidesData[currentSlide].heading.split(" ").length -
                            1 && <br />}
                      </React.Fragment>
                    ))}
                </h1>
              </Slide>
              {/* Description */}
              <Slide direction="up" triggerOnce={false} duration={1400}>
                <p>{slidesData[currentSlide].description}</p>
              </Slide>
              <ul className="xb-list list-unstyled mt-40 mb-60">
                {/* List */}
                {slidesData[currentSlide].features.map((feature, i) => (
                  <Slide
                    key={i}
                    direction="up"
                    triggerOnce={false}
                    duration={1600 + i * 200}
                  >
                    <li>
                      <i className="far fa-check"></i>
                      {feature}
                    </li>
                  </Slide>
                ))}
              </ul>
              {/* Buttons */}
              <Slide direction="up" triggerOnce={false} duration={1800}>
                <div>
                  <div className="btns">
                    <Link
                      onClick={ClickHandler}
                      className="thm-btn"
                      href="/contact"
                    >
                      Book Appointment
                    </Link>
                    <Link
                      onClick={ClickHandler}
                      className="thm-btn thm-btn--white"
                      href="/about"
                    >
                      Read Story
                    </Link>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
