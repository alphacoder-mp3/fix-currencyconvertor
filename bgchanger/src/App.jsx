import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor("red")} className="outline-0 px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className="outline-0 px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("blue")} className="outline-0 px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("white")} className="outline-0 px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>White</button>
          <button onClick={() => setColor("black")} className="outline-0 px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => setColor("grey")} className="outline-0 px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "grey"}}>Grey</button>
        </div>
      </div>
    </div>
  )
}

export default App
