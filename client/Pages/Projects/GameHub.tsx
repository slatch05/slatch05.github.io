import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export function GameHub() {
  return (
    <div>
      <div className="mt-20 flex flex-col sm:items-center lg:flex-row lg:items-start lg:justify-between">
        <div className="w-full px-5 text-lg sm:w-full sm:items-center sm:justify-center lg:w-[28rem] lg:items-start lg:justify-start 2xl:w-[60rem] 2xl:text-2xl">
          <div className="sm:text-center lg:text-start">
            <div className="sm:text-start">
              <Link
                to="/projects"
                className="w-full rounded-full border border-solid border-black px-2 py-1 text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-3xl lg:text-center lg:text-xl 2xl:text-2xl"
              >
                back to projects
              </Link>
            </div>

            <p className="mt-10 sm:text-4xl lg:text-2xl">Game Hub</p>
            <hr className="border-t-1 my-5 border-black" />
            <span className="font-light text-zinc-500 sm:text-lg lg:text-xs">
              Remote
            </span>
            <p className="font-light uppercase sm:text-3xl lg:text-lg">
              Personal project, 2024
            </p>
            <hr className="border-t-1 my-5 border-black" />
            <span className="font-light text-zinc-500 sm:text-lg lg:text-xs">
              FrontEnd, BackEnd, UI/UX, 2024
            </span>
            <p className="font-light uppercase sm:text-3xl lg:text-lg">
              Harpreet Singh Slatch
            </p>
            <hr className="border-t-1 my-5 border-black" />
            <span className="font-light text-zinc-500 sm:text-lg lg:text-xs">
              Copyright
            </span>
            <p className="font-light uppercase sm:text-3xl lg:text-lg">
              © All Rights Reserved
            </p>
            <hr className="border-t-1 my-5 border-black" />
            <div className="flex sm:items-center sm:justify-center lg:items-start lg:justify-start">
              <p className="rounded-full bg-[rgb(255,47,1)] px-2 py-1 text-lg text-white sm:w-fit sm:text-3xl lg:w-fit  lg:text-lg 2xl:text-2xl">
                Under construction
              </p>
            </div>

            <p className="mt-3 text-base sm:text-3xl lg:text-start lg:text-lg 2xl:text-2xl">
              Exciting things are on the way!
            </p>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center lg:mt-0 lg:block">
          <img
            className="w-full sm:w-[fit] lg:w-[60rem] 2xl:w-[120rem]"
            src="/image/game-hub/gameHub.png"
            alt="GameHub-HomePage"
          />
        </div>
      </div>
      <p className="text-start font-light text-zinc-500 sm:mt-16 sm:text-lg lg:mt-20 lg:text-xs">
        Scroll to explore
      </p>
      <div className="grid h-screen place-items-center font-light">
        <div className="mt-52 text-5xl sm:text-6xl xl:text-5xl 2xl:text-[5rem]">
          Game Hub is a web application offering a collection of amazing
          mini-games designed for simple, engaging, and entertaining
          experiences. It’s your go-to platform for fun and relaxation!
        </div>
        <div className="w-[46rem] uppercase sm:mb-40 sm:text-xl lg:mb-40 lg:ml-96 lg:mt-8 lg:text-sm 2xl:text-lg">
          I’m passionate about game development, and this personal project
          reflects that enthusiasm. The goal was to create a minimalist,
          user-friendly website to host a variety of engaging mini-games while
          also providing a platform for gaming enthusiasts to purchase
          high-quality gaming mice and keyboards. <br /> <br />
          Built using TypeScript, React, Node.js, Express, and SQLite3, this web
          app seamlessly integrates a responsive frontend, robust backend logic,
          and efficient data management. Designed to provide a smooth and
          immersive user experience, it showcases my skills in combining modern
          web technologies with a focus on simplicity and functionality. <br />{' '}
          <br /> This project is not just about games—it’s about crafting a
          platform that brings joy, connection, and the tools gamers need for an
          enhanced gaming experience.
        </div>
      </div>
      <div className="bg-violet-50 lg:m-[4rem]">
        <div className="mt-10 flex flex-col items-center justify-center sm:mb-4 lg:h-screen">
          <img
            className="w-[67rem] rounded-xl 2xl:w-[120rem]"
            src="/image/game-hub/gameHub3.png"
            alt="request-page"
          />
        </div>
        <div className="flex flex-col items-center justify-center sm:mb-4 lg:h-screen">
          <img
            className="w-[67rem] rounded-xl 2xl:w-[120rem]"
            src="/image/game-hub/gameHub4.png"
            alt="request-page"
          />
        </div>
      </div>
      <div className="m-[4rem] bg-sky-50">
        <div className="mt-10 flex flex-col items-center justify-center sm:mb-4 lg:h-screen">
          <img
            className="w-[67rem] rounded-xl 2xl:w-[120rem]"
            src="/image/game-hub/gameHub2.png"
            alt="request-page"
          />
        </div>
        <div className="flex flex-col items-center justify-center sm:mb-4 lg:h-screen">
          <img
            className="w-[67rem] rounded-xl 2xl:w-[120rem]"
            src="/image/game-hub/gameHub5.png"
            alt="request-page"
          />
        </div>
      </div>
      <div className="sm:text-center lg:text-right">
        <a
          href="#top"
          className="mt-7 w-fit rounded-full border border-solid border-black px-2 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-3xl lg:text-xl 2xl:text-2xl"
        >
          back to top
        </a>
      </div>
      <Footer />
    </div>
  )
}
