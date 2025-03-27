import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import homcss from "./../Pages/Home.module.css";
import heroImg from "./../assets/Paramee_pofile.png";
// import portfolioImg01 from "./../assets/tab-image-1.png";
// import portfolioImg02 from "./../assets/tab-image-2.png";
// import portfolioImg03 from "./../assets/tab-image-3.png";
// import portfolioImg04 from "./../assets/tab-image-4.png";
// import portfolioImg05 from "./../assets/tab-image-5.png";
// import portfolioImg06 from "./../assets/tab-image-6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
// import testimonialImg01 from "./../assets/rev1.png";
// import testimonialImg02 from "./../assets/client-img-1.jpg";

import galleryImg01 from "./../assets/car.png";
import galleryImg02 from "./../assets/IMG20201026112255.jpg";
import galleryImg03 from "./../assets/IMG20230201171716.jpg";
import galleryImg04 from "./../assets/S__26075149.jpg";
function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dz9phoo",
        "template_cd2mx7q",
        form.current,
        "EBi9Y-FcWMWSifVaS"
      )
      .then((result) => {
        console.log("SUCCESS!", result.text);
        alert("ส่งอีเมลสำเร็จ!");
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        alert("การส่งอีเมลล้มเหลว!");
      });
  };
  return (
    <div id="Home" className={homcss.container}>
      <div className={homcss.home_wrapper}>
        <div className={homcss.home_content}>
          <small>My Portfolio</small>
          <h2>
            Paramee <span>Sriphueak</span>
          </h2>
          <p>
            I am a passionate and dedicated student pursuing a Bachelor of
            Industrial Technology in Electronics Computer Technology at King
            Mongkut's University of Technology North Bangkok (KMUTNB).
          </p>
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1pUYNG7VorH2kSEghJ3iEcmvvu5QxLMEM/view?usp=sharing",
                "_blank"
              )
            }
          >
            Resume <i className="ri-arrow-right-line"></i>
          </button>
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1KV58v3fN8SGiSkmxsjmeUM6s9-yu8oVg/view?usp=sharing",
                "_blank"
              )
            }
          >
            Transcript <i className="ri-arrow-right-line"></i>
          </button>
        </div>
        <div className={homcss.home_image}>
          <img src={heroImg} alt="hero-image" />

          <span></span>
        </div>
      </div>
      <p className={homcss.portfolioText}>
        My <span>Portfolio</span> is a collection of my creative and technical
        projects since. from <span>2018</span>
      </p>

      <div id="About" className={homcss.about_wrapper}>
        <div className={homcss.experience_cards}>
          <div className={homcss.card}>
            <h2>INTERESTS</h2>
            <h3></h3>
          </div>
          <div className={homcss.card}>
            {/* <i className="ri-lock-line"></i> */}
            <h3>Embedded systems and microcontroller applications.</h3>
            <p></p>
          </div>
        </div>
        <div className={homcss.about_content}>
          <small>EDUCATION</small>
          <h2> </h2>

          <div className={homcss.about_cards}>
            <div className={homcss.about_card}>
              <div>
                <i className="ri-instance-line"></i>
                <h3>2018-2023</h3>
              </div>
              <p>
                High Vocational Certificate (Computer Hardware) and Vocational
                Certificate (Computer Technology) Samut Songkhram Technical
                College
              </p>
            </div>
            <div className={homcss.about_card}>
              <div>
                <i className="ri-trophy-line"></i>
                <h3>2023-2025</h3>
              </div>
              <p>
                Bachelor of Industrial Technology (Electronics Computer
                Technology) King Mongkut's University of Technology North
                Bangkok (KMUTNB)
              </p>
            </div>
          </div>
          <button>
            Read More <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>

      {/* <div className={homcss.Portfolio_wrapper}>
        <small>Latest Portfolio</small>
        <h2>Transforming Ideas into Exceptional</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vitae
          ratione optio tenetur iste, ullam alias dignissimos magni minus
          corrupti!
        </p>
        <div className={homcss.Portfolio_cards}>
          <div className={homcss.Portfolio_card}>
            <img src={portfolioImg01} alt="portfolioImg" />

            <div className={homcss.portfolio_content}>
              <p>Development</p>
              <h3>A Portfolio of Innovation</h3>
            </div>
          </div>
          <div className={homcss.Portfolio_card}>
            <img src={portfolioImg02} alt="portfolioImg" />

            <div className={homcss.portfolio_content}>
              <p>Development</p>
              <h3>A Portfolio of Creations</h3>
            </div>
          </div>
          <div className={homcss.Portfolio_card}>
            <img src={portfolioImg03} alt="portfolioImg" />

            <div className={homcss.portfolio_content}>
              <p>Development</p>
              <h3>A Story of Innovation</h3>
            </div>
          </div>
          <div className={homcss.Portfolio_card}>
            <img src={portfolioImg04} alt="portfolioImg" />

            <div className={homcss.portfolio_content}>
              <p>Development</p>
              <h3>A Story of Innovation</h3>
            </div>
          </div>
          <div className={homcss.Portfolio_card}>
            <img src={portfolioImg05} alt="portfolioImg" />

            <div className={homcss.portfolio_content}>
              <p>Development</p>
              <h3>A Showcase of My Portfolio</h3>
            </div>
          </div>
          <div className={homcss.Portfolio_card}>
            <img src={portfolioImg06} alt="portfolioImg" />

            <div className={homcss.portfolio_content}>
              <p>Development</p>
              <h3>A Portfolio of Innovation</h3>
            </div>
          </div>
        </div>
      </div> */}

      <div id="Expertise" className={homcss.Expertise_wrapper}>
        <small>My Expertise</small>
        <h2>Elevated Designs Personalized the Best Experienes</h2>
        <div className={homcss.Expertise_card}>
          <div className={homcss.Expertise_card_Title}>
            <img
              src="https://cdn.simpleicons.org/cplusplus/00599C"
              width="50"
            />
            <h3>C++</h3>
          </div>

          <span>85%</span>

          <p>I like to use it in projects and small projects.</p>
        </div>
        <div className={homcss.Expertise_card}>
          <div className={homcss.Expertise_card_Title}>
            <img src="https://cdn.simpleicons.org/python/3776AB" width="50" />
            <h3>Python</h3>
          </div>

          <span>70%</span>

          <p>
            I like writing it to create gui and many things on raspberry pi.
          </p>
        </div>
        <div className={homcss.Expertise_card}>
          <div className={homcss.Expertise_card_Title}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              width="50"
            />

            <h3>JAVA</h3>
          </div>

          <span>80%</span>

          <p>It's in the class and I quite like it.</p>
        </div>
        <div className={homcss.Expertise_card}>
          <div className={homcss.Expertise_card_Title}>
            <img src="https://cdn.simpleicons.org/html5/E34F26" width="50" />
            <h3>HTML</h3>
          </div>

          <span>60%</span>

          <p>Works, but can still be improved further.</p>
        </div>
        <div className={homcss.Expertise_card}>
          <div className={homcss.Expertise_card_Title}>
            <img src="https://cdn.simpleicons.org/css3/1572B6" width="50" />
            <h3>CSS</h3>
          </div>

          <span>60%</span>

          <p>Works, but can still be improved further.</p>
        </div>
        <div className={homcss.Expertise_card}>
          <div className={homcss.Expertise_card_Title}>
            <img src="https://cdn.simpleicons.org/php/777BB4" width="50" />
            <h3>PHP</h3>
          </div>

          <span>60%</span>

          <p>Works, but can still be improved further.</p>
        </div>
        <div className={homcss.Expertise_card}>
          <div className={homcss.Expertise_card_Title}>
            <img src="https://cdn.simpleicons.org/react/61DAFB" width="50" />
            <h3>React</h3>
          </div>

          <span>65%</span>

          <p>Have basic understanding and can create small projects. </p>
        </div>
      </div>

      {/* <div className={homcss.testimonials_wrapper}>
        <small>What Our Clients Say's</small>
        <h2>Bringing Dreams to Life Through</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos est natus
          deserunt alias ullam nisi, rerum dicta recusandae dolore atque vero
          corrupti, repellat quibusdam doloribus, odio aspernatur porro impedit
          accusantium.
        </p>

        <div className={homcss.swiper_wrapper}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              788: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className={homcss.testimonials_card}>
                <div className={homcss.profile_testimonial}>
                  <img src={testimonialImg01} alt="testimonial Img" />
                  <h3>
                    Theresa Weeb <span>UI/ UX Designer</span>
                  </h3>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem quos doloribus deleniti deserunt? Reiciendis,
                  explicabo ab dignissimos molestias suscipit, eum fugit, saepe
                  eveniet nobis sapiente a facilis facere velit natus!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={homcss.testimonials_card}>
                <div className={homcss.profile_testimonial}>
                  <img src={testimonialImg02} alt="testimonial Img" />
                  <h3>
                    Theresa Weeb <span>UI/ UX Designer</span>
                  </h3>
                </div>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Delectus, rerum praesentium itaque quam, cumque modi earum
                  velit quia, eius labore accusantium culpa quis. Iure ullam
                  numquam aperiam, quo sit eligendi!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={homcss.testimonials_card}>
                <div className={homcss.profile_testimonial}>
                  <img src={testimonialImg01} alt="testimonial Img" />
                  <h3>
                    Theresa Weeb <span>UI/ UX Designer</span>
                  </h3>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem quos doloribus deleniti deserunt? Reiciendis,
                  explicabo ab dignissimos molestias suscipit, eum fugit, saepe
                  eveniet nobis sapiente a facilis facere velit natus!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={homcss.testimonials_card}>
                <div className={homcss.profile_testimonial}>
                  <img src={testimonialImg02} alt="testimonial Img" />
                  <h3>
                    Theresa Weeb <span>UI/ UX Designer</span>
                  </h3>
                </div>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Delectus, rerum praesentium itaque quam, cumque modi earum
                  velit quia, eius labore accusantium culpa quis. Iure ullam
                  numquam aperiam, quo sit eligendi!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}

      <div id="Project" className={homcss.Gallery_wrapper}>
        <small>projects</small>
        <h2>My past projects and sub-projects</h2>

        <div className={homcss.Gallery_cards}>
          <div className={homcss.Gallery_card}>
            <img src={galleryImg01} alt="Gallery Img" />

            <div className={homcss.gallery_content}>
              <h3>Line following robot</h3>
              <div>
                <span>2019</span>
                <span>Esp32</span>
              </div>
              <button>
                View Design <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
          <div className={homcss.Gallery_card}>
            <img src={galleryImg02} alt="Gallery Img" />

            <div className={homcss.gallery_content}>
              <h3>Cartesian Robot</h3>
              <div>
                <span>2021</span>
                <span>arduino</span>
              </div>
              <button>
                View Design <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
          <div className={homcss.Gallery_card}>
            <img src={galleryImg03} alt="Gallery Img" />

            <div className={homcss.gallery_content}>
              <h3>Object Sorting Demonstration Set</h3>
              <div>
                <span>2023</span>
                <span>Raspberry Pi</span>
                <span>arduino</span>
              </div>
              <button>
                View Design <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
          <div className={homcss.Gallery_card}>
            <img src={galleryImg04} alt="Gallery Img" />

            <div className={homcss.gallery_content}>
              <h3>Automatic lunch box packing robot</h3>
              <div>
                <span>2026</span>
                <span>Raspberry Pi</span>
                <span>arduino</span>
                <span>Ai</span>
              </div>
              <button>
                View Design <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="Contact" className={homcss.contact_wrapper}>
        <div className={homcss.contact_content}>
          <h2>Get Ready to Create Great</h2>

          <div className={homcss.details}>
            <div className={homcss.contact_info}>
              <i className="ri-mail-line"></i>
              <p>
                E-Mail : <span>parameeking1313@gmail.com</span>
              </p>
            </div>
            <div className={homcss.contact_info}>
              <i className="ri-map-pin-line"></i>
              <p>
                Location :{" "}
                <span>
                  292/790 B-24 ถ.รัชดาภิเษก แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900
                </span>
              </p>
            </div>
            <div className={homcss.contact_info}>
              <i className="ri-phone-line"></i>
              <p>
                Contact : <span>+66 905206410</span>
              </p>
            </div>
          </div>
        </div>
        <div className={homcss.contact_form}>
          <h2>Get in Touch</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className={homcss.input_wrapper}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
              <input
                type="text"
                name="user_phone"
                placeholder="Your Phone"
                required
              />
            </div>
            <div className={homcss.input_wrapper}>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message :"
              required
            ></textarea>
            <button type="submit">
              Appointment Now <i className="ri-arrow-right-line"></i>
            </button>
          </form>
        </div>
      </div>

      <div className={homcss.footer_wrapper}>
        <div className={homcss.footer_links}>
          <div className={homcss.logo}>
            <span>Jenni</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            tempora!
          </p>

          <div className={homcss.social}>
            <i className="ri-facebook-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-youtube-line"></i>
          </div>
        </div>
        <div className={homcss.footer_links}>
          <h3>Quick Link</h3>

          <p>
            <a href="#">About Me</a>
          </p>
          <p>
            <a href="#">Service</a>
          </p>
          <p>
            <a href="#">Contact Us</a>
          </p>
          <p>
            <a href="#">Blog Post</a>
          </p>
          <p>
            <a href="#">Pricing</a>
          </p>
        </div>
        <div className={homcss.footer_links}>
          <h3>Contact</h3>
          <p>
            <i className="ri-phone-line">+66 905206410</i>
          </p>
          <p>
            <i className="ri-map-pin-line">
              292/790 B-24 ถ.รัชดาภิเษก แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900
            </i>
          </p>
          <p>
            <i className="ri-map-pin-line">parameeking1313@gmail.com</i>
          </p>
        </div>
        <div className={homcss.footer_links}>
          <h3>Newslatter</h3>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

          <input type="text" placeholder="Your Email" />
          <button>
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
