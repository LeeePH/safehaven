import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate()
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const SECRET_CODE = '143'

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '*':
        return firstValue * secondValue
      case '/':
        return firstValue / secondValue
      case '=':
        return secondValue
      default:
        return secondValue
    }
  }

  const performCalculation = () => {
    // Check for secret code - if display shows exactly "143", navigate to dashboard
    if (display === SECRET_CODE) {
      navigate('/dashboard')
      return
    }

    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    } else {
      // If no operation, just check if display is the secret code
      if (display === SECRET_CODE) {
        navigate('/dashboard')
      }
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute inset-0 night"></div>
      
      {/* Welcome Message */}
      <div className="relative z-10 text-center mb-6 sm:mb-8 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
          Hello my lovey! 💕
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-pink-200 mb-2">
          I have something special for you
        </p>
        <p className="text-base sm:text-lg md:text-xl text-purple-200">
          Try to figure out the secret code HAHAHA hint: 3 numbers 
        </p>
      </div>

      {/* Calculator */}
      <div className="relative z-10 bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-sm mx-4">
        {/* Display */}
        <div className="bg-gray-900 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
          <div className="text-right text-2xl sm:text-3xl md:text-4xl font-mono text-white overflow-x-auto">
            {display}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {/* Row 1 */}
          <button
            onClick={clear}
            className="col-span-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            Clear
          </button>
          <button
            onClick={() => inputOperation('/')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            ÷
          </button>
          <button
            onClick={() => inputOperation('*')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            ×
          </button>

          {/* Row 2 */}
          <button
            onClick={() => inputNumber(7)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            7
          </button>
          <button
            onClick={() => inputNumber(8)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            8
          </button>
          <button
            onClick={() => inputNumber(9)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            9
          </button>
          <button
            onClick={() => inputOperation('-')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            −
          </button>

          {/* Row 3 */}
          <button
            onClick={() => inputNumber(4)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            4
          </button>
          <button
            onClick={() => inputNumber(5)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            5
          </button>
          <button
            onClick={() => inputNumber(6)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            6
          </button>
          <button
            onClick={() => inputOperation('+')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            +
          </button>

          {/* Row 4 */}
          <button
            onClick={() => inputNumber(1)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            1
          </button>
          <button
            onClick={() => inputNumber(2)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            2
          </button>
          <button
            onClick={() => inputNumber(3)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            3
          </button>
          <button
            onClick={performCalculation}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 row-span-2 text-sm sm:text-base"
          >
            =
          </button>

          {/* Row 5 */}
          <button
            onClick={() => inputNumber(0)}
            className="col-span-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            0
          </button>
          <button
            onClick={inputDecimal}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 sm:py-4 px-2 sm:px-4 rounded-lg transition-colors duration-200 active:scale-95 text-sm sm:text-base"
          >
            .
          </button>
        </div>
      </div>
    </div>
  )
}

export default Welcome

