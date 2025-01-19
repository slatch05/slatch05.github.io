import { DrawerMenu } from '../../components/DrawerMenu'

export function HomePage() {
  return (
    <div className="mt-32">
      <div className="flex flex-col-reverse lg:flex-col lg:items-center lg:text-center">
        {/* Image Section */}
        <div className="w-50 lg:w-50 md:w-50 h-auto sm:mt-[20rem] sm:w-80 lg:mt-[0rem] xl:w-60 2xl:w-80 ">
          <div className="flex w-full items-end sm:block lg:hidden">
            <div className=" fixed right-7 mt-[27rem] w-fit rounded-full border border-solid border-black px-4 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-5xl lg:text-center ">
              <DrawerMenu />
            </div>
          </div>
          <img
            className="mb-10 mt-5 h-auto w-full object-cover sm:mb-12 sm:mt-8 md:mb-16 md:mt-12 lg:mb-20 lg:mt-16 xl:mb-3 xl:mt-3 2xl:mb-40 2xl:mt-40"
            src="/image/slatch-2.png"
            alt="my-pic"
          />
        </div>

        <div className="mt-[4rem] w-[24rem] text-pretty sm:block sm:text-3xl lg:hidden lg:text-center lg:text-xl 2xl:text-2xl">
          I’m always ready for new projects and collaborations!
          <div className="mt-8">
            <a
              className="w-fit rounded-full border border-solid border-black px-4 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-5xl lg:text-center "
              href="mailto: blue_slatch@icloud.com"
            >
              BLUE_SLATCH@ICLOUD.COM
            </a>
          </div>
        </div>
        {/* Text Section */}
        <div className=" flex items-center justify-start lg:mt-32">
          <h1 className="text-left font-nohemiLight sm:text-[20vw] sm:leading-[1.1] md:text-[16vw] lg:text-[13vw] xl:text-[13vw] 2xl:text-[13vw]">
            Harpreet Slatch
          </h1>
        </div>
      </div>
    </div>
  )
}
