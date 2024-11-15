import { useEffect, useRef } from "react";
import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link.js";
import Image from "next/image.js";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingWorkflow = () => {
  const workflowWrapper = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          var workflow_section_3 = workflowWrapper.current;
          if (workflow_section_3) {
            let duration = 1,
              sections = gsap.utils.toArray(".wf_panel"),
              sectionIncrement = duration / (sections.length - 1),
              tl = gsap.timeline({
                scrollTrigger: {
                  trigger: ".workflow__wrapper-3",
                  pin: true,
                  scrub: 1,
                  start: "top top",
                  end: "+=5000",
                },
              });

            tl.to(sections, {
              xPercent: -100 * (sections.length - 1),
              duration: duration,
              ease: "none",
            });

            sections.forEach((section, index) => {
              let tween = gsap.from(section, {
                opacity: 0,
                scale: 0.6,
                duration: 0.5,
                force3D: true,
                paused: true,
              });
              addSectionCallbacks(tl, {
                start: sectionIncrement * (index - 0.99),
                end: sectionIncrement * (index + 0.99),
                onEnter: () => tween.play(),
                onLeave: () => tween.reverse(),
                onEnterBack: () => tween.play(),
                onLeaveBack: () => tween.reverse(),
              });
              index || tween.progress(1);
            });

            function addSectionCallbacks(
              timeline,
              { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }
            ) {
              let trackDirection = (animation) => {
                  let onUpdate = animation.eventCallback("onUpdate"),
                    prevTime = animation.time();
                  animation.direction = animation.reversed() ? -1 : 1;
                  animation.eventCallback("onUpdate", () => {
                    let time = animation.time();
                    if (prevTime !== time) {
                      animation.direction = time < prevTime ? -1 : 1;
                      prevTime = time;
                    }
                    onUpdate && onUpdate.call(animation);
                  });
                },
                empty = (v) => v;
              timeline.direction || trackDirection(timeline);
              start >= 0 &&
                timeline.add(
                  () =>
                    ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(
                      param
                    ),
                  start
                );
              end <= timeline.duration() &&
                timeline.add(
                  () =>
                    ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(
                      param
                    ),
                  end
                );
            }
          }
          for (let i = 1; i < 5; i++) {
            gsap.from(gsap.utils.toArray(`.count${i}`), {
              textContent: 0,
              duration: 1,
              delay: 3,
              ease: Power1.easeIn,
              snap: { textContent: 1 },
              stagger: 1,
              scrollTrigger: {
                trigger: ".counter__number",
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
      <section className="workflow__area-3">
        <div className="workflow__wrapper-3" ref={workflowWrapper}>
          

        <div className="choose-wrapper wf_panel">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="choose-title-wrapper">
                    <h2 className="choose-title title-anim" style={{fontSize:"100px"}}>
                      steps in Digital Marketing
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="research__area wf_panel pt-150">
  <div className="container inner_content">
    <div className="row">
      {/* Left Column: Content */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 text-center">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title">
            Step 01
          </h2>
          <h3 className="sec-title">
          Research & Strategy Development
          </h3>
          <p>
          We dive deep into our customers’ world to uncover insights, crafting strategies that feel like they were made just for them.
          </p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 pt-5">
        <div className="image-wrapper img-fluid">
          <img 
            src="https://img.freepik.com/free-photo/group-businesspeople-planning-social-media-application_23-2147847539.jpg?t=st=1731578107~exp=1731581707~hmac=341b48ffc394cf3115b09b864cf651b8fa39003029a3a51c179a7344c9b076a8&w=996" 
            alt="Campaign Execution & Promotion" 
            style={{ width: "400px", height: "300px", borderRadius: "8px" }} // Adjust as needed
          />
        </div>
      </div>
    </div>
  </div>
</div>

          <div className="research__area wf_panel pt-150">
  <div className="container inner_content">
    <div className="row">
      {/* Left Column: Content */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 text-center">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title">
            Step 02
          </h2>
          <h3 className="sec-title">
          	Content Creation & Optimization
          </h3>
          <p>
          We tell stories that matter, designing content that not only captures attention but also connects on a personal level with our customers.

          </p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 pt-5">
        <div className="image-wrapper">
          <img 
            src="https://img.freepik.com/free-photo/group-diverse-people-brainstorming-together_53876-31193.jpg?t=st=1731578640~exp=1731582240~hmac=23b4ae421bbf911ac30e1876d351db36c335c9841a7915cb53ca1c7ab70082b9&w=996" 
            alt="Campaign Execution & Promotion" 
            style={{ width: "400px", height: "300px", borderRadius: "8px" }} // Adjust as needed
          />
        </div>
      </div>
    </div>
  </div>
</div>

         


          <div className="research__area wf_panel pt-150">
  <div className="container inner_content">
    <div className="row">
      {/* Left Column: Content */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 text-center">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title">
            Step 03
          </h2>
          <h3 className="sec-title">
            Campaign Execution & Promotion
          </h3>
          <p>
          We launch campaigns that speak directly to our customers' hearts, delivering value when and where they need it most.
          </p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 pt-5">
        <div className="image-wrapper">
          <img 
            src="https://img.freepik.com/free-photo/woman-holding-instagram-like-icon-with-his-friends-showing-thumbup-sign_23-2147847475.jpg?t=st=1731578802~exp=1731582402~hmac=e4187e03b9b8867ced33e4d8094fa6a3324ac7fd14431f9c476ac88ee342211d&w=996" 
            alt="Campaign Execution & Promotion" 
            style={{ width: "400px", height: "300px", borderRadius: "8px" }} // Adjust as needed
          />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="research__area wf_panel pt-150">
  <div className="container inner_content">
    <div className="row">
      {/* Left Column: Content */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 text-center">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title">
            Step 04
          </h2>
          <h3 className="sec-title">
          Analytics, Monitoring & Optimization
          </h3>
          <p>
        We track the pulse of our customers’ journey, constantly refining our approach to keep them engaged, satisfied, and coming back for more.
          </p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="col-xxl-6 col-xl-6 col-lg-6 pt-5">
        <div className="image-wrapper">
          <img 
            src="https://img.freepik.com/free-photo/people-using-digital-device-while-meeting_23-2149085923.jpg?t=st=1731578950~exp=1731582550~hmac=d91c3fb28659a86ce3d512423a2da85d7b8c3ed052253717b3846bdd9e250451&w=996" 
            alt="Campaign Execution & Promotion" 
            style={{ width: "400px", height: "300px", borderRadius: "8px" }} // Adjust as needed
          />
        </div>
      </div>
    </div>
  </div>
</div>

         
         
         


          {/* CTA area start */}
          
          {/* CTA area end */}
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingWorkflow;
