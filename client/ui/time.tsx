import moment from 'moment-timezone'
import { useEffect, useState } from 'react'

export function Time() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const nzTime = moment().tz('Pacific/Auckland').format('hh:mm A')
      setTime(nzTime)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div>
      <p className="uppercase sm:text-3xl lg:text-base 2xl:text-xl">
        New Zealand, AKL ({time})
      </p>
    </div>
  )
}
