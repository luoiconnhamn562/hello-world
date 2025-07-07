import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='hn.jpg'>
        <a href="https://www.youtube.com/@luoicon1567" target="_blank">
          <img src="./ytlogo.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://discord.gg/zQZ6DCWZ" target="_blank">
          <img src="./discord-icon.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello World, this is my first website. 
  
      </h1>
       <h2>My name is Nguyễn Nhật Long, who known as Luoicon. 
  
      </h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        above this line is a mini counter game, you can try by click on it!
      
        </p>
      </div>
      <p className="read-the-docs">
        Just a small hello, I'm ready to create a nice web for myself
      </p>
    </>
  )
}

export default App
