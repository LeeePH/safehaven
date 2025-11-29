import Navbar from '../components/Navbar'

function Songs() {
  // Sample songs - replace these with your actual MP3 file paths
  const songs = [
    {
      id: 1,
      title: "Perfect",
      url: "/songs/perfect.mp3" // Replace with actual MP3 file path
    },
    {
      id: 2,
      title: "All of Me",
      url: "/songs/allofme.mp3"
    },
    {
      id: 3,
      title: "At My Worst",
      url: "/songs/atmyworst.mp3"
    },
    {
      id: 4,
      title: "Thinking Out Loud",
      url: "/songs/thinkingoutloud.mp3"
    },
    {
      id: 5,
      title: "A Thousand Years",
      url: "/songs/thousandyears.mp3"
    },
    {
      id: 6,
      title: "Make You Feel My Love",
      url: "/songs/makeyoufeelmylove.mp3"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 pb-24">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
            Songs That Remind Me of You 💕
          </h1>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {songs.map((song) => (
            <div
              key={song.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{song.title}</h3>
              <audio
                controls
                className="w-full"
                style={{
                  height: '50px'
                }}
                onPlay={(e) => {
                  // Stop the local audio and play in persistent player instead
                  e.target.pause()
                  window.dispatchEvent(new CustomEvent('playSong', {
                    detail: { song }
                  }))
                }}
              >
                <source src={song.url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Songs
