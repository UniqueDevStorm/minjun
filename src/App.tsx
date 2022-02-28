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
      <div className="sm:flex block sm:items-center sm:py-56 py-32">
        <div className="w-max mx-auto">
          <h1 className="sm:text-6xl text-3xl sm:mt-0 mt-5 font-medium whitespace-nowrap">
            My name is MinJun.
          </h1>
          <h2 className="sm:text-4xl text-2xl font-light sm:mt-6 mt-1 sm:w-[50vw] w-[60vw]">
            There are some mistakes without software and big problems, but from the time of students, I would like to encourage you to lead well without any major problems in development, and we will continue to develop and lead well without any major problems.
          </h2>
        </div>
        <img
          src='https://media.discordapp.net/attachments/851436152052645959/947840239416791071/unknown.png'
          alt=""
          className="sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] rounded mx-auto sm:block hidden"
          draggable={false}
        />
      </div>
      <div className="w-full sm:flex hidden justify-between pb-[3.49rem]">
        <div className="flex gap-8 w-[1024px] mx-auto">
          <a href="https://github.com/minjun224">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-[30px] w-[30px]"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a href="https://discord.gg/HWdtpN2Bg7">
            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor"
                 className="h-[30px] w-[30px]"
                 viewBox="0 0 16 16">
              <path
                  d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
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
