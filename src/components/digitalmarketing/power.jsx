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
        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#0096d4"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg>
      
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
        <svg id="Layer_5" enable-background="new 0 0 64 64" fill="#0096d4" height="70" viewBox="0 0 64 64" width="70" xmlns="http://www.w3.org/2000/svg"><path d="m18.289 43.742c2.227-1.422 3.711-3.909 3.711-6.742 0-4.411-3.589-8-8-8s-8 3.589-8 8c0 2.833 1.484 5.32 3.711 6.742-5.064 1.778-8.711 6.594-8.711 12.258v7h26v-7c0-5.664-3.647-10.48-8.711-12.258zm-10.289-6.742c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm6.972 18.614-.972.972-.972-.972.707-10.6c.089-.003.176-.014.265-.014s.176.011.265.013zm10.028 5.386h-3v-8h-2v8h-12v-8h-2v8h-3v-5c0-5.282 3.743-9.703 8.715-10.758l-.743 11.144 3.028 3.028 3.028-3.028-.743-11.144c4.972 1.055 8.715 5.476 8.715 10.758z"/><path d="m50 7c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/><path d="m63 10.219-2.416-.603 1.281-2.134-5.345-5.348-2.136 1.281-.603-2.415h-7.562l-.603 2.416-2.136-1.282-5.346 5.347 1.281 2.134-2.415.604v7.562l2.415.603-1.28 2.135 5.346 5.347 2.136-1.281.602 2.415h7.562l.603-2.416 2.136 1.281.843-.844 1.028 4.454c-.834.535-1.391 1.464-1.391 2.525 0 .311.061.606.15.888l-3.488 2.616c-.477-.317-1.048-.504-1.662-.504-.807 0-1.537.324-2.077.844l-2.96-1.48c.015-.121.037-.24.037-.364 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .462.113.894.301 1.285l-4.015 4.015c-.392-.187-.824-.3-1.286-.3-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-.462-.113-.894-.301-1.285l4.015-4.015c.392.187.824.3 1.286.3.807 0 1.537-.324 2.077-.844l2.96 1.48c-.015.121-.037.24-.037.364 0 1.654 1.346 3 3 3s3-1.346 3-3c0-.311-.061-.606-.149-.888l3.489-2.617c.475.318 1.046.505 1.66.505 1.654 0 3-1.346 3-3 0-1.537-1.166-2.793-2.658-2.965l-1.311-5.681 2.834-2.835-1.28-2.135 2.415-.603zm-27 32.781c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1zm8-8c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1zm8 4c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1zm8-8c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm1-14.781-1.949.487-.534.202-.465 1.142 1.296 2.16-3.139 3.138-2.159-1.296-1.22.503-.611 2.445h-4.438l-.611-2.446-1.22-.503-2.159 1.296-3.139-3.138 1.296-2.16-.496-1.218-2.452-.612v-4.438l1.949-.487.535-.203.464-1.142-1.296-2.158 3.139-3.138 2.159 1.296 1.22-.503.611-2.446h4.438l.611 2.446 1.22.503 2.159-1.296 3.139 3.138-1.296 2.158.496 1.22 2.452.612z"/><path d="m33 63h6v-16h-6zm2-14h2v12h-2z"/><path d="m41 63h6v-24h-6zm2-22h2v20h-2z"/><path d="m49 63h6v-20h-6zm2-18h2v16h-2z"/><path d="m57 63h6v-26h-6zm2-24h2v22h-2z"/><path d="m10 27h25v-11c0-3.86-3.141-7-7-7h-18c-3.859 0-7 3.14-7 7v4c0 3.86 3.141 7 7 7zm-5-11c0-2.757 2.243-5 5-5h18c2.757 0 5 2.243 5 5v9h-23c-2.757 0-5-2.243-5-5z"/><path d="m7 13h2v2h-2z"/><path d="m11 13h2v2h-2z"/><path d="m15 13h16v2h-16z"/><path d="m7 17h24v2h-24z"/><path d="m7 21h24v2h-24z"/><path d="m50 11c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1z"/></svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#0096d4"><path d="M120-840h330v330H120v-330Zm60 59v188-188Zm330-59h330v330H510v-330Zm83 59v188-188ZM120-450h330v330H120v-330Zm60 81v189-189Zm465-81h60v135h135v60H705v135h-60v-135H510v-60h135v-135Zm-75-330v210h210v-210H570Zm-390 0v210h210v-210H180Zm0 390v210h210v-210H180Z"/></svg>
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
        <svg fill="#0096d4"  id="Layer_1" height="70" viewBox="0 0 64 64" width="70" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m45 32a2 2 0 0 0 2 2 7 7 0 0 1 0 14h-17.2a10 10 0 1 0 0 4h17.2a11 11 0 0 0 0-22 2 2 0 0 0 -2 2zm-25 24a6 6 0 1 1 6-6 6 6 0 0 1 -6 6z"/><path d="m17 34h17.17l-.59.59a2 2 0 1 0 2.83 2.83l4-4a2 2 0 0 0 .25-.31s.05-.1.08-.15a1.17 1.17 0 0 0 .16-.39c0-.06 0-.11.05-.17a2 2 0 0 0 0-.78c0-.06 0-.11-.05-.17a1.17 1.17 0 0 0 -.16-.39c0-.05-.05-.1-.08-.15a2 2 0 0 0 -.25-.31l-4-4a2 2 0 0 0 -2.83 2.83l.59.59h-17.17a7 7 0 0 1 0-14h17.2a10 10 0 1 0 0-4h-17.2a11 11 0 0 0 0 22zm27-26a6 6 0 1 1 -6 6 6 6 0 0 1 6-6z"/><path d="m20.59 47.59-1.65 1.65a2 2 0 0 0 -2.35 3.18l1 1a2 2 0 0 0 2.83 0l3-3a2 2 0 0 0 -2.83-2.83z"/></svg>
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
