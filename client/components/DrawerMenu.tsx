import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  // DrawerFooter,
  DrawerHeader,
  // DrawerTitle,
  DrawerTrigger,
} from '../ui/dawer'

// import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { Time } from '../ui/time'

export function DrawerMenu() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>Menu</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerDescription>
              <div className="mb-10 flex flex-row justify-between ">
                <div>
                  <span className="text-gray-400 sm:text-2xl lg:text-sm 2xl:text-base">
                    Harpreet Singh Slatch
                  </span>
                  <p className="uppercase sm:text-3xl lg:text-base">
                    Full stack developer
                  </p>
                </div>
                <div>
                  <span className="text-gray-400 sm:text-2xl lg:text-sm 2xl:text-base">
                    Location
                  </span>
                  <Time />
                </div>
              </div>
            </DrawerDescription>
            <DrawerDescription>
              {' '}
              <div className="mt-20">
                <span className="text-5xl text-gray-400">Sitemap</span>
                <hr className="border-t-1 my-5 border-white"></hr>
                <div className="mt-10 flex flex-wrap gap-20 uppercase">
                  <Link to="/" className="text-5xl">
                    Index
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link to="/about" className="text-5xl">
                    About
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link to="/projects" className="text-5xl">
                    Projects [3]
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link to="/contact" className="text-5xl">
                    Contact
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              </div>
            </DrawerDescription>

            <DrawerDescription>
              <div className="mt-20">
                <span className="text-5xl text-gray-400 ">
                  Let&apos;s connect
                </span>
                <hr className="border-t-1 my-5 border-white"></hr>
                <div className="mt-10 flex flex-wrap gap-20 uppercase">
                  <a
                    href="https://sg.docs.wps.com/l/cIOaDnq-fAualvrsG?utm_source=wps_office_mac&utm_medium=comp_border_bar&utm_content=link&v=v2"
                    className="text-5xl"
                  >
                    Resume
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a href="https://github.com/slatch05" className="text-5xl">
                    Github
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/harpreet-singh-slatch-894b94168/"
                    className="text-5xl"
                  >
                    LinkedIn
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
                  </a>

                  <a href="mailto:blue_slatch@icloud.com" className="text-5xl">
                    Email
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[rgb(255,47,1)] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>
            </DrawerDescription>
          </DrawerHeader>

          <DrawerClose>
            <div className=" mt-[24rem] flex w-full items-end sm:block lg:hidden">
              <div className="absolute right-7 w-fit rounded-full border border-solid border-white bg-white px-4 py-1 text-center uppercase  text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-5xl lg:text-center ">
                close
              </div>
            </div>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
      ,
    </div>
  )
}
