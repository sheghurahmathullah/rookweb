import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Blog11 from "../../../public/assets/imgs/blog/1/1.webp";
import Blog12 from "../../../public/assets/imgs/blog/1/2.webp";
import Blog13 from "../../../public/assets/imgs/blog/1/3.webp";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyBlog = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item");
          blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            blogTl.to(item, {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".blog__animation .blog__item", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item",
              start: "top center+=300",
              markers: false,
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.3,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="blog__area no-pb blog__animation">
        <div className="container g-0 line pt-150 pb-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title">recent blog</h2>
                <h3 className="sec-title">News insignt</h3>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog11}
                        alt="blog 11 image"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog11}
                        alt="blog 11 image"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/category">UI Design</Link> . 02 May 2019
                </h4>
                <h5>
                  <Link href="/blog-details" className="blog__title">
                    Ways of lying to yourself about your new relationship.
                  </Link>
                </h5>
                <Link href="/blog-details" className="blog__btn">
                  Read More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog12}
                        alt="blog 12 image"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog12}
                        alt="blog 12 image"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/category">UI Design</Link> . 02 May 2019
                </h4>
                <h5>
                  <Link href="/blog-details" className="blog__title">
                    How to manage a talented and successful de sign team
                  </Link>
                </h5>
                <Link href="/blog-details" className="blog__btn">
                  Read More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <article className="blog__item">
                <div className="blog__img-wrapper">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog13}
                        alt="Blog Thumbnail"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={Blog13}
                        alt="Blog Thumbnail"
                      />
                    </div>
                  </Link>
                </div>
                <h4 className="blog__meta">
                  <Link href="/category">UI Design</Link> . 02 May 2019
                </h4>
                <h5>
                  <Link href="/blog-details" className="blog__title">
                    How to bring fold to your startup company with Axtra
                  </Link>
                </h5>
                <Link href="/blog-details" className="blog__btn">
                  Read More{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyBlog;
