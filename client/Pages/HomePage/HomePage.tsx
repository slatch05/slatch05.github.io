export function HomePage() {
  return (
    <div className="mt-32">
      <div className="flex flex-row-reverse lg:flex-col lg:items-center lg:text-center">
        {/* Image Section */}
        <div className="w-50 lg:w-50 2xl:w-70 h-auto sm:w-80 md:w-60 xl:w-60">
          <img
            className="h-auto w-full object-cover"
            src="/image/slatch-2.png"
            alt="my-pic"
          />
        </div>
        {/* Text Section */}
        <div className=" flex items-center justify-start lg:ml-0 lg:mt-20">
          <h1 className="text-left font-nohemiLight sm:text-[20vw] sm:leading-[1.1] md:text-[13vw] lg:text-[13vw] xl:text-[13vw] 2xl:text-[13vw]">
            Harpreet Slatch
          </h1>
        </div>
      </div>
      <div className="mt-[40rem] w-[24rem] text-pretty sm:block sm:text-3xl lg:hidden lg:text-center lg:text-xl 2xl:text-2xl">
        I’m always ready for new projects and collaborations!
        <div className="mt-8">
          <a
            className="w-fit rounded-full border border-solid border-black px-2 py-1 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-4xl lg:text-center lg:text-xl 2xl:text-2xl"
            href="mailto: blue_slatch@icloud.com"
          >
            BLUE_SLATCH@ICLOUD.COM
          </a>
        </div>
      </div>
    </div>
  )
}
