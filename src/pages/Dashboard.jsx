import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12">
          {/* Welcome Message */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-block">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
                Welcome, my lovey! ✨
              </h1>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              <p className="font-medium">
                To my most beautiful girl I know,
              </p>
              
              <p className="text-gray-600">
                I wanted to create something special just for you! a place where I can share my feelings, 
                the songs that make me think of you, and moments that remind me how incredibly lucky I am 
                to have you in my life.
              </p>
              
              <p className="text-gray-600">
                Every day with you feels like a beautiful melody, and I wanted to capture that feeling here. 
                This is my way of showing you how much you mean to me, how you've touched my heart in ways 
                I never imagined possible.
              </p>
              
              <p className="text-gray-600">
                Take your time exploring, and know that everything here is made with love, just for you. 
                You deserve all the beautiful things in the world, and I hope this brings a smile to your face.
              </p>
              
              <p className="font-semibold text-pink-600 mt-6">
                Made with genuine love - Lee 💕
              </p>
            </div>

            {/* Message For You Button */}
            {/* <div className="mt-8">
              <button
                onClick={() => navigate('/flower')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 text-lg sm:text-xl"
              >
                Flowers for you 💕
              </button>
            </div> */}

            {/* Decorative elements */}
            <div className="flex justify-center space-x-2 mt-8">
              <span className="text-3xl animate-bounce" style={{ animationDelay: '0s' }}>💐</span>
              <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>🌹</span>
              <span className="text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌸</span>
              <span className="text-3xl animate-bounce" style={{ animationDelay: '0.6s' }}>🌺</span>
              <span className="text-3xl animate-bounce" style={{ animationDelay: '0.8s' }}>🌻</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

