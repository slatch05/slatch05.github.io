import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { DrawerMenu } from '../../components/DrawerMenu'

export function BiteShare() {
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

            <p className="mt-10 sm:text-5xl lg:text-2xl">Bite-Share</p>
            <hr className="border-t-1 my-5 border-black"></hr>
            <span className="font-light text-zinc-500 sm:text-xl lg:text-xs">
              Dev Academy
            </span>
            <p className="font-light uppercase sm:text-4xl lg:text-lg">
              Group Project, 2024
            </p>
            <hr className="border-t-1 my-5 border-black"></hr>
            <span className="font-light text-zinc-500 sm:text-xl lg:text-xs">
              FrontEnd Lead & UI/UX
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
                href="https://bite-share-pohutukawa24.devacademy.nz"
                className="mt-7 w-fit rounded-full border border-solid border-black px-2 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-4xl lg:text-xl 2xl:text-2xl"
              >
                Live website
              </a>
              <a
                href="https://github.com/slatch05/bite-share"
                className="ml-3 w-fit rounded-full border border-solid border-black px-2 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-4xl lg:text-xl 2xl:text-2xl"
              >
                View code
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center lg:mt-0 lg:block">
          <img
            className="w-full border border-black sm:w-[fit] lg:w-[60rem] 2xl:w-[120rem]"
            src="/image/bite-share/biteShare1.png"
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
          Bite-Share is a web application designed to strengthen community
          connections by connecting individuals or organizations willing to
          donate food with those in need.
        </div>
        <div className="w-[46rem] uppercase sm:mb-40 sm:text-xl lg:mb-40 lg:ml-96 lg:mt-8 lg:text-sm 2xl:text-lg">
          {' '}
          This project was a collaborative effort by Henry, Gurwinder, and
          Harpreet, aimed at creating a minimalist and user-friendly website to
          facilitate food sharing within the community. It features a simple
          interface for sharing meals, a static messaging system for user
          communication, and essential CRUD operations to ensure seamless
          interactions. <br /> <br /> Built using TypeScript, React, Node.js,
          Express, and SQLite3, the web app combines a responsive frontend,
          efficient backend logic, and lightweight data management. By reducing
          food waste and providing a means to help those in need, this project
          underscores the team’s commitment to functionality, simplicity, and
          social impact.
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="mb-10 flex w-1/3 flex-row items-center justify-center p-5">
          <img
            className="mr-4 border-2 border-black bg-black"
            src="/image/bite-share/give1.png"
            alt="give-page "
          />
          <img
            className="mr-4 border-2 border-black bg-black"
            src="/image/bite-share/give2.png"
            alt="give-page "
          />
          <img
            className="mr-4 border-2 border-black bg-black"
            src="/image/bite-share/give3.png"
            alt="give-page "
          />
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <img
          className="border-2 border-black sm:w-fit lg:w-3/4"
          src="/image/bite-share/biteShare3.png"
          alt="request-page"
        />
      </div>
      <div className="mt-20 flex items-center justify-center">
        <img
          className="border-2 border-black sm:w-fit lg:w-3/4"
          src="/image/bite-share/biteShare4.png"
          alt="text-page"
        />
      </div>
      <div className="mb-10 mt-20 flex justify-center">
        <div className="flex items-center gap-3 p-5 sm:w-3/4 sm:flex-col sm:justify-center md:w-2/3 lg:w-1/2 lg:flex-row">
          <img
            className="border-2 border-black"
            src="/image/bite-share/biteShare5.png"
            alt="text-page"
          />
          <img
            className="border-2 border-black"
            src="/image/bite-share/biteShare6.png"
            alt="text-page"
          />
        </div>
      </div>
      <div className="sm:text-center lg:text-right">
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
