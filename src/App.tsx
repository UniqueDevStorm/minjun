import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Java from './assets/icons/Java.svg';
import PremierePro from './assets/icons/PremierePro.svg';
import Nodejs from './assets/icons/Nodejs.svg';
import HTML from './assets/icons/HTML.svg';
import CSS from './assets/icons/CSS.svg';
import Photoshop from './assets/icons/Photoshop.svg';

import Utility from "./components/utility";
import Experience from "./components/experience";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white">
      <div id="Home" />
      <nav className="w-full py-10 flex items-center justify-between sm:px-24 px-10 sticky top-0 backdrop-blur-xl backdrop-saturate-[100%]">
        <a href="/">
          <span className="text-white font-normal sm:text-4xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-red-600">
            MinJun
          </span>
        </a>
        <div className="sm:flex hidden gap-10">
          <AnchorLink href="#Home">
            <h1 className="font-light sm:text-2xl">Home</h1>
          </AnchorLink>
          <AnchorLink href="#Service">
            <h1 className="font-light sm:text-2xl">Service</h1>
          </AnchorLink>
          <AnchorLink href="#Skills">
            <h1 className="font-light sm:text-2xl">Skills</h1>
          </AnchorLink>
        </div>
        <div className='sm:hidden flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="w-[30px] h-[30px]"
               viewBox="0 0 16 16">
            <path fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
      </nav>
      <div className="sm:flex block sm:items-center sm:pt-20 sm:pb-56 py-32">
        <div className="w-max mx-auto">
          <h1 className="sm:text-6xl text-3xl sm:mt-0 mt-5 font-medium whitespace-nowrap">
            My name is MinJun.
          </h1>
          <h2 className="sm:text-4xl text-2xl font-light sm:mt-6 mt-1 sm:w-[50vw] w-[60vw]">
            There are some mistakes without software and big problems, but from the time of students, I would like to encourage you to lead well without any major problems in development, and we will continue to develop and lead well without any major problems.
          </h2>
        </div>
        <img
          src='https://media.discordapp.net/attachments/851436152052645959/947554719482654832/7517D346-5540-4D3E-82E5-BF8FF6A51A16.jpg?width=545&height=897'
          alt=""
          className="sm:w-[441.45px] sm:h-[726.57px] w-[100px] h-[100px] rounded mx-auto sm:block hidden"
          draggable={false}
        />
      </div>
      <div className="w-full sm:flex hidden justify-between pb-[3.49rem]">
        <div className="flex gap-8 w-[1024px] mx-auto">
          <a href="https://github.com/UniqueDevStorm/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-[30px] w-[30px]"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100010888537979">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-[30px] w-[30px]"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
          <a href="https://twitter.com/D_evStorm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-[30px] w-[30px]"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/d_evstorm/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-[30px] w-[30px]"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
        </div>
        <a
          href="mailto:me@devstorm.kr"
          className="text-xl font-light w-[300px] mx-auto text-right"
        >
          miniqueen3710@gmail.com
        </a>
      </div>
      <div id="Service" />
      <div className="py-28 sm:px-40 px-8">
        <h1 className="font-black sm:text-[3.75rem] text-5xl">What I do?</h1>
      </div>
      <div className="pb-28 sm:px-40 px-8">
        <h1 className="font-black text-[3.75rem]">Skills</h1>
        <div className="sm:block hidden">
          <div className="block">
            <div className="mt-12 flex gap-40">
              <Utility icon={Java} name="Java" />
              <Utility icon={Nodejs} name="Nodejs" />
              <Utility icon={HTML} name="HTML5" />
            </div>
            <div className="mt-12 flex gap-40">
              <Utility icon={CSS} name="CSS3" />
            </div>
          </div>
          <div className="my-8 border-b border-slate-600 w-[50vw] h-0.5" />
          <div className="flex gap-40">
            <Utility icon={PremierePro} name="Premiere Pro" />
            <Utility icon={Photoshop} name="Photoshop" />
          </div>
        </div>
      </div>
      <div id="Skills" />
      <div className="pb-28 sm:px-40 px-8">
        <h1 className="font-black sm:text-[3.75rem] text-5xl">Experience</h1>
        <Experience
          title="MinJun Discord - CEO"
          period="(August 21, 2021 - Present)"
          description={
            "In our position, it is divided into frontend and back end, and I will lead well without any major problems and grow\n" +
              "more without any major problems. February 28, 2022"
          }
        />
        <Experience
          title="MinJun Community - CEO"
          period="(August 21, 2021 - Present)"
          description={
            "It leads well to the community without any problems, and there are mistakes, but it achieves great success with\n" +
              "the will and ability to do it,\n" +
              "and we will lead well without problems in the community as much management and help according to your ability! Creation Date June 21, 2021"
          }
        />
      </div>
    </div>
  );
};

export default Home;
