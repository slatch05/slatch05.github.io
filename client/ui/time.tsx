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
      <p className="uppercase sm:text-2xl lg:text-base">
        New Zealand, Auckland ({time})
      </p>
    </div>
  )
}
