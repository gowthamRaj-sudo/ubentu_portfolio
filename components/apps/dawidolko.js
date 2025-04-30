import React, { Component } from "react";
import ReactGA from "react-ga4";

export class AboutDawidolko extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => {},
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      education: <Education />,
      skills: <Skills />,
      // projects: <Projects />,
      resume: <Resume />,
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.send({
      hitType: "pageview",
      page: `/${screen}`,
      title: "Custom Title",
    });

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }>
          <img
            className=" w-3 md:w-4"
            alt="about gowthamraj"
            src="./themes/Yaru/status/about.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }>
          <img
            className=" w-3 md:w-4"
            alt="gowthamraj' education"
            src="./themes/Yaru/status/education.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }>
          <img
            className=" w-3 md:w-4"
            alt="gowthamraj's skills"
            src="./themes/Yaru/status/skills.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }>
          <img
            className=" w-3 md:w-4"
            alt="gowthamraj's resume"
            src="./themes/Yaru/status/download.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
        <div className="my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex">
          <iframe
            src="https://github.com/sponsors/dawidolko/button"
            title="Sponsor gowthamraj"
            width={"100%"}
            height={"100%"}></iframe>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }>
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutDawidolko;

export const displayAboutDawidolko = () => {
  return <AboutDawidolko />;
};

function About() {
  return (
    <>
      <div className="w-20 md:w-28 my-4 bg-white rounded-full">
        <img
          className="w-full"
          src="./images/logos/bitmoji.JPG"
          alt="gowthamraj Patel Logo"
        />
      </div>
      <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
        <div>
          my name is <span className="font-bold">Gowtham Raj</span> ,
        </div>
        <div className="font-normal ml-1">
          I'm a{" "}
          <span className="text-pink-600 font-bold">Full Stack Developer!</span>
        </div>
      </div>
      <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className=" list-pc">
          I'm <span className=" font-medium">Currently working </span> as
          a full stack developer at {" "}
          <u className=" cursor-pointer ">
            {" "}
            <a
              href="https://www.mayavaramchits.com/"
              target={"_blank"}>
              the mayavaram finacial chits corporation limited
            </a>{" "}
          </u>
          , and i have around 2.5 years of professional experience
           {/* ( Hit me
          up{" "}
          <a className="text-underline" href="mailto:poczta@dawidolko.pl">
            <u>@poczta@dawidolko.pl</u>
          </a>{" "}
          :) ) */}
        </li>
        <li className=" mt-3 list-building">
          {" "}
         I mainly work with technologies like React.js, Next.js for the frontend and Node.js,with nest.js,mongoDb,Postgresql on the backend. 
         I'm Currently learning Devops tools like Docker,Aws, and CI/CD practice to improve my deployment skills.
        </li>
        <li className=" mt-3 list-time">
          {" "}
         I'm passinate about solving real-workd problems through clean and efficient code.{" "}
          {/* <a
            href="https://www.youtube.com/channel/UCLoOFd2JRTF5_CI3EUq-uCw"
            target="_blank"
            rel="noreferrer">
            {" "}
            dawidolko's videos.
          </a> */}
          One of the project i'm proud of its UnicoinDCX, a Cryptocurreny exchange  platform, Where
          i contributed to both frontend and backend features-including Secure User authentication, transaction module and synamic dashboard components. 
        </li>
        <li className=" mt-3 list-star">
          {" "}
          And I also have interest in Deep Learning & Computer Vision!
        </li>
      </ul>
    </>
  );
}
function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
          Madras University - Pursing
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">JAN ( 2024 ) - DEC ( 2025 )</div>
          <div className=" text-sm md:text-base">MSC - IT ( Information Technologies )</div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            {/* GPA &nbsp; 5.0/5.0 */}
          </div>
        </li>
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
           Hindustan Collage Of Arts & Science 
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2015 - 2018</div>
          <div className=" text-sm md:text-base">BCA ( Computer Application )</div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            {/* CGPA &nbsp; 8.0/10 */}
          </div>
        </li>
      </ul>
    </>
  );
}
function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          I've worked with a wide variety of programming languages & frameworks.
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            My areas of expertise are{" "}
            <strong className="text-ubt-gedit-orange">
              front-end & Backend , React.js , Next.js, Node.js,MongoDb, Postgresql,Aws
            </strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are my most frequently used</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Languages , Tools & DataBases
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Frameworks & Libraries
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
              alt="dawidolko javascript"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=ffffff"
              alt="dawidolko c++"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=ffffff"
              alt="dawidolko python"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Redis-DC382D?style=flat&logo=redis&logoColor=ffffff
"
              alt="dawidolko dart"
            />
            <a
              href="https://www.google.com/search?q=is+html+a+language%3F"
              target="_blank"
              rel="noreferrer">
              <img
                title="yes it's a language!"
                className="m-1"
                src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff"
                alt="dawidolko HTML"
              />
            </a>
            <img
              src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"
              alt="dawidolko SASS"
              className="m-1"
            />
           
            <img
              src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff"
              alt="dawidolko git"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff"
              alt="dawidolko firebase"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-AWS-232F3E?style=flat&logo=amazonaws&logoColor=white"
              alt="dawidolko firebase"
              className="m-1"
            />
             <img
              src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white"
              alt="dawidolko firebase"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white"
              alt="dawidolko firebase"
              className="m-1"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className=" m-1"
              src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff"
              alt="dawidolko next"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff"
              alt="dawidolko react"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white"
              alt="dawidolko flutter"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
              alt="dawidolko tailwind css"
            />
            <img
              src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff"
              alt="dawidolko node.js"
              className="m-1"
            />
             <img
              src="https://img.shields.io/badge/MUI-0081CB?style=flat&logo=material-ui&logoColor=white
"
              alt="dawidolko SASS"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white"
              alt="dawidolko jquery"
              className="m-1"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white"
              alt="dawidolko redux"
            />
          </div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <span> And of course,</span>{" "}
          <img
            className=" inline ml-1"
            src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff"
            alt="dawidolko linux"
          />{" "}
          <span>!</span>
        </li>
      </ul>
    </>
  );
}
function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src="./files/gowtham-Resume.pdf"
      title="dawidolko resume"
      frameBorder="0"></iframe>
  );
}
