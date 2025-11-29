import { useState, useEffect, useRef } from 'react'

function PersistentAudioPlayer() {
  const [currentSong, setCurrentSong] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  // Listen for play events from anywhere in the app
  useEffect(() => {
    const handlePlaySong = (event) => {
      const { song } = event.detail
      if (song) {
        setCurrentSong(song)
        setIsPlaying(true)
        // Use requestAnimationFrame to ensure DOM is updated
        requestAnimationFrame(() => {
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.load() // Reload the audio source
              audioRef.current.play().then(() => {
                setIsPlaying(true)
              }).catch(err => {
                console.error('Error playing audio:', err)
                setIsPlaying(false)
              })
            }
          }, 50)
        })
      }
    }

    const handleStopSong = () => {
      if (audioRef.current) {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    }

    window.addEventListener('playSong', handlePlaySong)
    window.addEventListener('stopSong', handleStopSong)

    return () => {
      window.removeEventListener('playSong', handlePlaySong)
      window.removeEventListener('stopSong', handleStopSong)
    }
  }, [])

  const handleEnded = () => {
    setIsPlaying(false)
    setCurrentSong(null)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handleLoadedData = () => {
    // Auto-play when data is loaded
    if (audioRef.current && currentSong) {
      audioRef.current.play().catch(err => {
        console.error('Error auto-playing audio:', err)
      })
    }
  }

  if (!currentSong) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-600 shadow-2xl z-50 border-t-2 border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎵</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm sm:text-base truncate">
                {currentSong.title}
              </p>
              <p className="text-white/80 text-xs">Now Playing</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <audio
              ref={audioRef}
              src={currentSong.url}
              onEnded={handleEnded}
              onPause={handlePause}
              onPlay={handlePlay}
              onLoadedData={handleLoadedData}
              className="hidden"
            />
            <button
              onClick={() => {
                if (audioRef.current) {
                  if (isPlaying) {
                    audioRef.current.pause()
                  } else {
                    audioRef.current.play()
                  }
                }
              }}
              className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <button
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.pause()
                  audioRef.current.currentTime = 0
                }
                setIsPlaying(false)
                setCurrentSong(null)
                window.dispatchEvent(new CustomEvent('stopSong'))
              }}
              className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              aria-label="Stop"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersistentAudioPlayer

