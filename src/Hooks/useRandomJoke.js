import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const useRandomJoke = (firstName, lastName) => {
  const [joke, setJoke] = useState('')
  const fetchJoke = async () => {
    const jokesRes = await axios.get(`https://api.chucknorris.io/jokes/random`)
    const jokeValue = jokesRes.data.value
    setJoke(jokeValue)
  }
  useEffect(() => {
    fetchJoke()
  }, [firstName, lastName])
  return joke
}

const Jokes = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
  
    const joke = useRandomJoke(firstName, lastName)
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const genrateJokes = (e) => {
      e.preventDefault()
      setFirstName(firstNameRef.current.value)
      setlastName(lastNameRef.current.value)
      firstNameRef.current.value = ''
      lastNameRef.current.value = ''
    }
    return (
      <>
        <form>
          <input type='text' ref={firstNameRef} />
          <input type='text' ref={lastNameRef} />
          <button onClick={genrateJokes}>Add</button>
        </form>
        {joke}
      </>
    )
  }
  
  export default Jokes
