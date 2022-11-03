import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState()
  const apiCall = async () => {
    const res = value !== '' && await axios.get(`https://www.breakingbadapi.com/api/characters?name=${value}`)
    setDebouncedValue(res?.data[0]?.img || '')
  }

  useEffect(() => {
    const handler = setTimeout(() => { apiCall() }, delay)
    return () => { clearTimeout(handler) }
  }, [value])
  return debouncedValue
}

const Debounce = () => {
  const [value, setValue] = useState('')
  const debounceHook = UseDebounce(value, 1000)

  return (
    <>
      <img src={debounceHook} alt='character image' loading='lazy' />
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  )
}

export default Debounce
