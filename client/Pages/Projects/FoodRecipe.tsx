import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { DrawerMenu } from '../../components/DrawerMenu'

export function FoodRecipe() {
  return (
    <div>
      <div className="mt-20 flex flex-col sm:items-center lg:flex-row lg:items-start lg:justify-between">
        <div className="w-full px-5 text-lg sm:w-full sm:items-center sm:justify-center lg:w-[28rem] lg:items-start lg:justify-start 2xl:w-[60rem] 2xl:text-2xl">
          <div className="sm:text-center lg:text-start">
            <div className="sm:text-start">
              <Link
                to="/projects"
                className="w-full rounded-full border border-solid border-black px-2 py-1 text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-4xl lg:text-center lg:text-xl 2xl:text-2xl"
              >
                back to projects
              </Link>
            </div>
            <p className="mt-10 sm:text-5xl lg:text-2xl">Food Recipe</p>
            <hr className="border-t-1 my-5 border-black"></hr>
            <span className="font-light text-zinc-500 sm:text-xl lg:text-xs">
              Dev Academy
            </span>
            <p className="font-light uppercase sm:text-4xl lg:text-lg">
              Group project, 2024
            </p>
            <hr className="border-t-1 my-5 border-black"></hr>
            <span className="font-light text-zinc-500 sm:text-xl lg:text-xs">
              BackEnd, UI/UX, 2024
            </span>
            <p className="font-light uppercase sm:text-4xl lg:text-lg">
              Harpreet Singh Slatch
            </p>
            <hr className="border-t-1 my-5 border-black"></hr>
            <span className="font-light text-zinc-500 sm:text-xl lg:text-xs">
              Copyright
            </span>
            <p className="font-light uppercase sm:text-4xl lg:text-lg">
              © All Rights Reserved
            </p>
            <hr className="border-t-1 my-5 border-black"></hr>
            <div className="mt-8">
              <a
                href="https://github.com/slatch05/food-Recipes"
                className="ml-3 mt-7 w-fit rounded-full border border-solid border-black px-2 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-4xl lg:text-xl 2xl:text-2xl"
              >
                View code
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center lg:mt-0 lg:block">
          <img
            className="w-full border border-black sm:w-[fit] lg:w-[60rem] 2xl:w-[120rem]"
            src="/image/food/food1.png"
            alt="BiteShare-HomePage"
          />
        </div>
      </div>
      <p className="text-start font-light text-zinc-500 sm:mt-16 sm:text-lg lg:mt-20 lg:text-xs">
        Scroll to explore
      </p>
      <div className="mt-[2rem] flex w-full items-end sm:block lg:hidden">
        <div className="fixed right-7 w-fit rounded-full border border-solid border-black bg-white px-4 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-5xl lg:text-center ">
          <DrawerMenu />
        </div>
      </div>
      <div className="grid h-screen place-items-center font-light">
        <div className="mt-52 text-5xl sm:text-6xl xl:text-5xl 2xl:text-[5rem]">
          A food recipe website that helps users discover their favorite recipes
          from a wide variety of cuisines. The platform makes it simple and
          enjoyable to find and try the dishes you love.
        </div>
        <div className="w-[46rem] uppercase sm:mb-40 sm:text-xl lg:mb-40 lg:ml-96 lg:mt-8 lg:text-sm 2xl:text-lg">
          This project, completed as a Friday group collaboration by Harpreet,
          Nikki, and Gurwinder in just half a day, aimed to create a simple and
          user-friendly platform. Built using TypeScript, React, Node.js, and
          SQLite3, the web app combines a responsive frontend, efficient
          backend, and lightweight database management. The primary goal was to
          design a website where users can effortlessly search for and discover
          their favorite dishes from various cuisines. Despite the short
          timeframe, the team focused on creating an intuitive and engaging
          interface, showcasing their ability to deliver a functional and
          polished product in a limited timeframe.
        </div>
      </div>
      <div className="bg-violet-50 lg:m-[4rem]">
        <div className="mt-10 flex flex-col items-center justify-center sm:mb-4 lg:h-screen">
          <img
            className="w-[67rem] 2xl:w-[120rem] "
            src="/image/food/food2.png"
            alt="japFood-page"
          />
        </div>
        <div className="mt-10 flex flex-col items-center justify-center sm:mb-4 lg:h-screen">
          <img
            className="w-[67rem] 2xl:w-[120rem]"
            src="/image/food/food3.png"
            alt="japFood-page"
          />
        </div>
        <div className="mt-10 flex flex-col items-center justify-center sm:mb-4 lg:h-screen">
          <img
            className="w-[67rem] 2xl:w-[120rem]"
            src="/image/food/food4.png"
            alt="japFood-page"
          />
        </div>
      </div>

      <div className="mt-10 sm:text-center lg:text-right">
        <a
          href="#top"
          className="mt-7 w-fit rounded-full border border-solid border-black px-2 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-4xl lg:text-xl 2xl:text-2xl"
        >
          back to top
        </a>
      </div>
      <Footer />
    </div>
  )
}
