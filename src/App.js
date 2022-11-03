import './App.css'
import UseToggleCompoment from './Hooks/useToggle'
import Jokes from './Hooks/useRandomJoke'
import Debounce from './Hooks/useDebounce'

function App() {
  return (
    <>
      <div className='mainDiv'>
        <div className='items'>
          <p>Tooggle Hook</p>
          <UseToggleCompoment />
        </div>
        <hr />
        <div className='items'>
          <p>Random jokes Hook</p>
          <Jokes/>
        </div>
        <div className='items '>
          <p>Debounce Hook</p>
          <Debounce/>
        </div>
      </div>
    </>
  )
}

export default App
