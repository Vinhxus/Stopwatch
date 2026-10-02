
import './index.css'
import { useState, useRef, useEffect } from 'react'

export default function App() {
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const startTimeRef = useRef(0)

  useEffect(() => {
    if (!isRunning) return;

    startTimeRef.current = Date.now() - elapsedTime;
    const timer = setInterval(() => {
      setElapsedTime(Date.now() - startTimeRef.current) // setElapsed each 10 milliseconds
    }, 10)

    return () => clearInterval(timer)
  }, [isRunning])

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  }

  const pad = (n: number) => String(n).padStart(2, '0')
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60) % 24)
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
  const seconds = Math.floor((elapsedTime / 1000) % 60)
  const centiseconds = Math.floor((elapsedTime % 1000) / 10)
  return(
    <div data-theme="lemonade" className="w-screen h-screen text-3xl flex flex-col justify-center items-center gap-10">
      <span className="text-8xl font-bold text-secondary"> Stopwatch </span>
      <div className="border-2 gap-5 border-black rounded-2xl w-150 h-80 flex justify-center items-center flex-col">
        <div className='text-8xl'>
          {pad(hours)}:{pad(minutes)}:{pad(seconds)}:{pad(centiseconds)}
        </div>
        <div className="flex gap-3">
          <button 
            className="cursor-pointer px-4 py-2 border font-bold rounded-2xl bg-green-500 text-white"
            onClick={start}
          >
            Start
          </button>
          <button 
            className="cursor-pointer px-4 py-2 border font-bold rounded-2xl bg-red-500 text-white"
            onClick={stop}
          >
            Stop
          </button>
          <button 
            className="cursor-pointer px-4 py-2 border font-bold rounded-2xl bg-blue-500 text-white"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

