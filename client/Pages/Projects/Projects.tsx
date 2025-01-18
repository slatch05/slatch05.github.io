import { Link } from 'react-router-dom'
import { DrawerMenu } from '../../components/DrawerMenu'

export function Projects() {
  return (
    <div className="mt-20">
      <h1 className="font-light sm:w-full sm:text-center sm:text-6xl lg:w-auto lg:text-left lg:text-5xl 2xl:text-[5rem]">
        Selected projects (2024 - present)
      </h1>

      <div className="flex flex-col sm:items-center sm:justify-center lg:items-start lg:justify-start xl:items-start xl:justify-start 2xl:items-start 2xl:justify-start">
        <div className="flex gap-10 font-light sm:w-[40rem] sm:flex-col sm:items-center lg:w-[90rem] lg:flex-row lg:items-start ">
          <div className="mt-10 flex flex-col border border-black p-5 sm:w-[28rem] lg:w-[20rem] xl:w-[20rem] 2xl:w-[25rem]">
            <img
              className="shadow-sm sm:h-[20rem] sm:w-[25rem] lg:h-52 lg:w-72  2xl:h-[18rem] 2xl:w-[30rem]"
              src="/image/game-hub/gameHub.png"
              alt="gamehub-homepage"
            />
            <span className="mt-2 font-extralight sm:text-lg lg:text-sm 2xl:text-base ">
              FrontEnd, BackEnd, UI/UX, 2024
            </span>
            <span className="uppercase sm:text-3xl lg:text-lg 2xl:text-2xl">
              game hub
            </span>
            <Link
              className=" mt-7 w-fit rounded-full border border-solid border-black  px-2  text-center uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-4xl lg:text-base 2xl:text-xl"
              to="/gamehub"
            >
              view case
            </Link>
          </div>
          <div className="mt-10 flex flex-col border border-black p-5 sm:w-[28rem] lg:w-[20rem] xl:w-[20rem] 2xl:w-[25rem]">
            <img
              className="shadow-sm sm:h-[20rem] sm:w-[25rem] lg:h-52 lg:w-72 2xl:h-[18rem] 2xl:w-[30rem]"
              src="/image/bite-share/biteShare1.png"
              alt="biteshare-homepage"
            />
            <span className="mt-2 font-extralight sm:text-lg lg:text-sm 2xl:text-base ">
              FrontEnd Lead, UI/UX, 2024
            </span>
            <span className="uppercase sm:text-3xl lg:text-lg 2xl:text-2xl">
              Bite share
            </span>
            <Link
              className=" mt-7 w-fit rounded-full border border-solid border-black   px-2 text-center uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-4xl lg:text-base 2xl:text-xl"
              to="/biteshare"
            >
              view case
            </Link>
          </div>
          <div className="flex w-full items-end sm:block lg:hidden">
            <div className="fixed right-7 w-fit rounded-full border border-solid border-black px-6 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-5xl lg:text-center ">
              <DrawerMenu />
            </div>
          </div>
          <div className="flex flex-col border border-black p-5 sm:w-[28rem] lg:mt-10 lg:w-[20rem] xl:w-[20rem] 2xl:w-[25rem]">
            <img
              className="shadow-sm sm:h-[20rem] sm:w-[25rem] lg:h-52 lg:w-72 2xl:h-[18rem] 2xl:w-[30rem]"
              src="/image/food/food1.png"
              alt="gamehub-homepage"
            />
            <span className="mt-2 font-extralight sm:text-lg lg:text-sm">
              FrontEnd, BackEnd, UI/UX, 2024
            </span>
            <span className="uppercase sm:text-3xl lg:text-lg 2xl:text-2xl">
              Food Recipe
            </span>
            <Link
              className=" mt-7 w-fit rounded-full border border-solid border-black  px-2 text-center uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-4xl lg:text-base 2xl:text-xl"
              to="/foodrecipe"
            >
              view case
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
