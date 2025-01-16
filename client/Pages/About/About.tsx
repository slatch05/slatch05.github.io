export function About() {
  return (
    <div className="mt-20">
      <div>
        <div className="text-5xl font-light sm:text-5xl xl:text-5xl 2xl:text-[5rem]">
          I’m a full-stack web developer. I specialize in creating dynamic,{' '}
          user-friendly web applications using
          <span className="mx-2 text-[rgb(255,47,1)] ">
            tools like React, TypeScript, JS, Node.js, and REST APIs,
          </span>
          delivering efficient and visually engaging solutions.
        </div>
        <div className="mt-32 flex justify-between">
          <div className="grid grid-cols-1 gap-2">
            <img
              className="h-auto w-24 sm:w-24"
              src="/image/Preet/preet-3.png"
              alt="preet"
            />{' '}
            <img
              className="h-auto w-24 sm:w-24"
              src="/image/Preet/preet-2.png"
              alt="preet"
            />{' '}
            <img
              className="h-auto w-24 sm:w-24"
              src="/image/Preet/preet-1.png"
              alt="preet"
            />
          </div>
          <div className="mt-8 sm:mt-0">
            <div className="w-full text-sm font-light uppercase sm:w-[45rem] lg:w-[50rem] 2xl:text-lg">
              My journey into development started with years of leadership
              experience, where I managed teams, optimized processes, and solved
              challenges creatively. This background has shaped my approach to
              web development, where I focus on creating efficient,
              user-centered solutions.I specialize in technologies like React,
              Node.js, JS, Tailwind, TypeScript, SQLite3 and REST APIs, which I
              use to build applications that are not only functional but also
              visually appealing and intuitive. <br />
              <br />
              My training includes over 800 hours of immersive coding boot camp
              experience, where I worked collaboratively in team settings,
              solving complex challenges using Agile methodologies. I thrive on
              continuous learning and problem-solving, and I aim to deliver
              impactful digital experiences that align with both user needs and
              business goals.
              <br />
              <br />
              Let’s connect and create something incredible together!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
