import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ServiceElementV3 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation__services2 = gsap.utils.toArray(
          ".animation__service-2 .service__item-2"
        );
        gsap.set(animation__services2, {
          opacity: 0,
          x: -30,
        });

        if (animation__services2) {
          if (device_width < 1023) {
            animation__services2.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 1,
                x: 0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.to(".animation__service-2 .service__item-2", {
              scrollTrigger: {
                trigger: ".animation__service-2",
                start: "top center+=200",
                markers: false,
              },
              opacity: 1,
              x: 0,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-2 pt-130 pb-110">
      <div className="container">
  <div className="row">
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
      <div className="sec-text text-anim">
        <p>
          Our team will deliver fast, impactful results to give you a reason to celebrate, but we’re also dedicated to ensuring your brand thrives over the long haul with steady, sustainable growth.
        </p>
      </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
      <div className="sec-title-wrapper">
        <h2 className="sec-title title-anim">
          Let’s leverage the power of digital marketing to grow your brand.
        </h2>
      </div>
    </div>

    
  </div>

  {/* Service Items in 2x2 Grid */}
  <div className="row pt-140">
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
      <div className="service__item-2">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#5f6368"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg>
          <h3 className="service__title-2">
            Proven <br /> Expertise
          </h3>
          <p style={{width:"400px"}}>
            Our team of experienced digital marketers specializes in creating tailored strategies that drive real results. Whether it's SEO, paid media, or content marketing, we have the knowledge and skills to grow your brand effectively.
          </p>
        </div>
      </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
      <div className="service__item-2">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#5f6368"><path d="M284-277h60v-205h-60v205Zm332 0h60v-420h-60v420Zm-166 0h60v-118h-60v118Zm0-205h60v-60h-60v60ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"/></svg>
          <h3 className="service__title-2">
            Data-Driven <br /> Approach
          </h3>
          <p style={{width:"400px"}}>
            We believe in making decisions based on data. Our campaigns are continuously optimized using performance metrics to ensure maximum ROI and sustainable growth for your brand.
          </p>
        </div>
      </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 pt-5">
      <div className="service__item-2">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#5f6368"><path d="M120-840h330v330H120v-330Zm60 59v188-188Zm330-59h330v330H510v-330Zm83 59v188-188ZM120-450h330v330H120v-330Zm60 81v189-189Zm465-81h60v135h135v60H705v135h-60v-135H510v-60h135v-135Zm-75-330v210h210v-210H570Zm-390 0v210h210v-210H180Zm0 390v210h210v-210H180Z"/></svg>
          <h3 className="service__title-2">
            Customized <br /> Solutions
          </h3>
          <p style={{width:"400px"}}>
            At Rook, we understand that every business is unique. We work closely with you to develop a digital marketing strategy that's aligned with your specific goals, ensuring the best possible outcome for your brand.
          </p>
        </div>
      </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 pt-5">
      <div className="service__item-2">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#5f6368"><path d="M360-266h230q14 0 23.5-6t16.5-18l78-182q2-5 3.5-15t1.5-15v-24q0-14-6.5-20.5T686-553H472l29-138q2-8 0-15t-7-12l-21-22-161 174-8 16q-4 8-4 17v207q0 23 18 41.5t42 18.5ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
          <h3 className="service__title-2">
            End-to-End <br /> Support
          </h3>
          <p style={{
  maxWidth: "400px", // Sets a maximum width for larger screens
  width: "100%",     // Allows the element to take full width on smaller screens
}}>
  From strategy development to execution and ongoing optimization, we provide comprehensive support at every step of the process. You’ll have a dedicated team behind you, working to ensure both immediate results and long-term success.
</p>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>
    </>
  );
};

export default ServiceElementV3;
