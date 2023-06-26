"use client";

import Image from "next/image";
import Picture from "/public/picture.png";
import { motion } from "framer-motion";
import Footer from "/components/Footer";


function About() {
  return (
    <>
      <motion.main
        className="about"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.75,

        }}
      >
        <section className="section">
          <div className="section-heading">
            <h1>About</h1>
            <h2>This comprises my experience in tech, from content creation to web, mobile development, and UI/UX design. I don’t just code or design. I also build and create problem solving products and insightful content.</h2>
          </div>

          <div className="profile">
            <div>
              <Image className="about-img" src={Picture} width="473" height="580" />
            </div>

            <div className="bio">

              <h2>Ezediniru Daniel</h2>

              <p>Hi, I am a Frontend Engineer and a Product Designer passionate about solving real-life problems through technological skills.</p>
              <p>A developer and designer with an entrepreneurship mindset. I approach every project with a creative and analytical mindset following the industry’s standard, looking forward to the exciting challenges that lie ahead.</p>

              <a href="/contact" className="button">Get In Touch</a>
            </div>

          </div>
        </section>

        <section className="section">

          <div className="inner-heading">
            <h1>Education & Experience</h1>
            <h2>This comprises of my academic experiences and achievements.</h2>
          </div>


          <div className="background-container">

          <div class="background-tl-container">
              <h3>Work Experience</h3>
              <ul class="tl">
                <li class="tl-item">
                  <div class="timestamp">
                    Sept 2022 - Aug 2023
                  </div>
                  <div class="item-title">Lead at Google Developer Student Club</div>
                  <div class="item-detail">Managing the tech community of over 300 techies, including Developers, Designers, Writers, Marketers, and more.</div>
                  <div class="item-detail">I host physical and virtual events, including hackathons, technical workshops, boot camps, and tech talks.</div>
                </li>

                <li class="tl-item">
                  <div class="timestamp">
                    June 2022 - May 2023
                  </div>
                  <div class="item-title">Head of Content and Web developer<br />at TechGruv</div>
                  <div class="item-detail">Built a blog site from scratch in 2021</div>
                  <div class="item-detail">I managed the content creation from, newsletters, videos, blogs, and articles.</div>
                </li>

                <li class="tl-item">
                  <div class="timestamp">
                    March 2021 - June 2021
                  </div>
                  <div class="item-title">Frontend Dev at NewGraceMedia</div>
                  <div class="item-detail">Handled the frontend web development and UI design for this media company</div>
                  <div class="item-detail">Created a solid sales funnel to convert customers/sales directly from the website</div>
                </li>

                <li class="tl-item">
                  <div class="timestamp">
                    July 2020 - August 2021
                  </div>
                  <div class="item-title">Content Creator at Scooper News</div>
                  <div class="item-detail">Developed and researched on graphics designs and infographics for all content I created for Scooper News.</div>
                  <div class="item-detail">Developed a content calendar and posting schedule while carefully following all instructions given, crossed 2 million views with my content.</div>
                </li>

                <li class="tl-item">
                  <div class="timestamp">
                    Sept 2019 - October 2020
                  </div>
                  <div class="item-title">Content Writer at Opera News</div>
                  <div class="item-detail">Conducted research, edited and proofread written articles before publication</div>
                  <div class="item-detail">Collaborated with other creators to drive the SEO and ranking to 2,568 in category rank with a monthly visit of 2.5 million readers.</div>
                </li>

              </ul>

            </div>


            <div class="background-tl-container">
              <h3>Certfication/Achievements</h3>
              <ul class="tl">
              <li class="tl-item">
                  <div class="timestamp">
                    Jan 2023 - Present
                  </div>
                  <div class="item-title">Open Source Builder and Contributor</div>
                  <div class="item-detail">Built an Open Source Product recently, and i'm active open source contributor.</div>
                </li>

                <li class="tl-item">
                  <div class="timestamp">
                    March 2023
                  </div>
                  <div class="item-title">Co-covened TechBurst 2023</div>
                  <div class="item-detail">Co-covened a large scale tech event, of over 200 attendees, high profile speakers and topics.</div>
                </li>

                <li class="tl-item">
                  <div class="timestamp">
                    Sept 2022 - Aug 2023
                  </div>
                  <div class="item-title">Community Manager</div>
                  <div class="item-detail">Managing tech community of over 300 techies of different level of expertise.</div>
                </li>

                <li class="tl-item">
                  <div class="timestamp">
                    May 2023
                  </div>
                  <div class="item-title">JavaScript Data Structure and Algorithm</div>
                  <div class="item-detail">A well-structured course/certificate from Freecodecamp.</div>
                </li>

                <li class="tl-item">
                  <div class="timestamp">
                    Jan 2020 - Dec 2024
                  </div>
                  <div class="item-title">B.ENG in Electrical,Electronics Engineering</div>
                  <div class="item-detail">A Bachelor Degree in Engineering in view(Second Class Upper).</div>
                </li>

                <li class="tl-item">
                  <div class="timestamp">
                    Present
                  </div>
                  <div class="item-title">Entrepreneurship</div>
                  <div class="item-detail">As a developer, I also have solid understanding of how business works, a second-time entrepreneur.</div>
                </li>

              </ul>

            </div>





          </div>
        </section>




        <section className="section">

          <div className="inner-heading">
            <h1>Skills/Tools</h1>
            <h2>My skills and tools I build with.</h2>
          </div>

          <div className="skills-wrapper">
            <div className="skills">
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=HTML5&color=E34F26&logo=HTML5&logoColor=FFFFFF&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=CSS3&color=1572B6&logo=CSS3&logoColor=FFFFFF&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=JavaScript&color=222222&logo=JavaScript&logoColor=F7DF1E&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Bootstrap&color=7952B3&logo=Bootstrap&logoColor=FFFFFF&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Tailwind+CSS&color=222222&logo=Tailwind+CSS&logoColor=06B6D4&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Jamstack&color=F0047F&logo=Jamstack&logoColor=FFFFFF&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Git&color=F05032&logo=Git&logoColor=FFFFFF&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=React&color=222222&logo=React&logoColor=61DAFB&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Next.js&color=000000&logo=Next.js&logoColor=FFFFFF&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Flutter&color=02569B&logo=Flutter&logoColor=FFFFFF&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Dart&color=0175C2&logo=Dart&logoColor=FFFFFF&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=MongoDB&color=47A248&logo=MongoDB&logoColor=FFFFFF&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Firebase&color=222222&logo=Firebase&logoColor=FFCA28&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Supabase&color=222222&logo=Supabase&logoColor=3ECF8E&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Python&color=3776AB&logo=Python&logoColor=FFFFFF&label=" />
              <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Figma&color=F24E1E&logo=Figma&logoColor=FFFFFF&label=" />
            </div>
          </div>
        </section>
      </motion.main >
      <Footer />
    </>
  );
}

export default About;
