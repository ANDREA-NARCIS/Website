import React from "react";
import gaurav from "../assets/gaurav_avatar.png";
import lucky from "../assets/lucky_avatar.png";

const About = () => {
  document.getElementsByTagName("title")[0].text = "About";

  return (
    <main className="about">
      <h1>
        <b>ABOUT US</b>
      </h1>
      <div>
        <div className="gaurav">
          <div className="handles">
            <a href="https://www.linkedin.com/in/gaurav-panwar-85822a22b/">
              <i
                class="fa-brands fa-linkedin fa-lg"
                style={{ color: "#7371fc" }}
              ></i>
            </a>
            <a href="https://github.com/TheToadSannin">
              <i
                class="fa-brands fa-github fa-lg"
                style={{ color: "#7371fc" }}
              ></i>
            </a>
          </div>
          <div>
            <h2>
              Akshat <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shrivastava
            </h2>
            <p>programmer, Data Analyst and chess lover</p>
          </div>
          <img src={gaurav} alt="gaurav" />
        </div>

        <div className="lucky">
          <img src={lucky} alt="" />
          <div>
            <h2>
              Andrea <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Narcis
            </h2>
            <p>programmer, designer and anime lover</p>
          </div>
          <div className="handles">
            <a href="https://www.linkedin.com/in/lucky-bairagi-7aa96a242/">
              <i
                class="fa-brands fa-linkedin fa-lg"
                style={{ color: "#7371fc" }}
              ></i>
            </a>
            <a href="https://github.com/RudraSama">
              <i
                class="fa-brands fa-github fa-lg"
                style={{ color: "#7371fc" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
