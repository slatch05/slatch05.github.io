import emailjs from '@emailjs/browser'
import { useRef } from 'react'

export function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) {
      console.error('Form reference is null.')
      return
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID || '',
        import.meta.env.VITE_TEMPLATE_ID || '',
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY || '',
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text)
          alert('Message sent successfully!')
        },
        (error) => {
          console.error('Error:', error.text)
          alert('Failed to send message. Please try again.')
        },
      ),
      formRef.current.reset()
  }
  return (
    <div className="mt-20">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="">
          <label
            htmlFor="name"
            className="text-5xl font-light sm:text-7xl lg:text-5xl xl:text-5xl 2xl:text-[5rem] "
          >
            Hey Harpreet, my name is
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="[your name]"
            required
            className="w-[15.5rem] border-none pl-1 text-5xl font-light text-[rgb(255,47,1)] placeholder-[rgb(255,47,1)]  sm:w-[30rem] sm:text-7xl lg:text-5xl xl:text-5xl 2xl:w-[25rem] 2xl:text-[5rem]"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-5xl font-light sm:text-7xl lg:text-5xl xl:text-5xl 2xl:text-[5rem] "
          >
            I would like to connect with you regarding a new project. You can
            reach me via email at
          </label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="[your email]"
            required
            className="w-[15.5rem] border-none pl-1 text-5xl font-light text-[rgb(255,47,1)] placeholder-[rgb(255,47,1)]  sm:w-[30rem] sm:text-7xl lg:text-5xl xl:text-5xl 2xl:w-[25rem] 2xl:text-[5rem]"
          />
          <br />
          <label
            htmlFor="message"
            className="text-5xl font-light sm:text-7xl lg:text-5xl xl:text-5xl 2xl:text-[5rem] "
          >
            Message
          </label>
          <input
            id="message"
            name="message"
            className="border-none pl-1 text-5xl font-light text-[rgb(255,47,1)] placeholder-[rgb(255,47,1)]  sm:text-7xl lg:text-5xl xl:text-5xl 2xl:text-[5rem]"
            placeholder="[any note]"
          ></input>
        </div>
        <button
          type="submit"
          className="mt-20 w-fit rounded-full border border-solid border-black px-2 text-center text-lg uppercase transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:text-4xl lg:text-xl xl:text-xl 2xl:text-2xl"
        >
          Send message
        </button>
      </form>
    </div>
  )
}
