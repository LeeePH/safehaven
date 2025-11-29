import Navbar from '../components/Navbar'

function VideoCollection() {
  // Sample videos - replace these with your actual MP4 file paths
  const videos = [
    {
      id: 1,
      title: "Tiktok Dance Requested by my LOML <3",
      url: "/videos/tikitok.mp4" // Replace with actual MP4 file path
    },
    // {
    //   id: 2,
    //   title: "Memories Together",
    //   url: "/videos/memories-together.mp4"
    // },
    // {
    //   id: 3,
    //   title: "Special Moments",
    //   url: "/videos/special-moments.mp4"
    // },
    // {
    //   id: 4,
    //   title: "Our Journey",
    //   url: "/videos/our-journey.mp4"
    // }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
            Video Collection 💕
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Special moments and memories captured just for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-full">
                <video
                  controls
                  className="w-full rounded-t-2xl"
                  style={{
                    maxHeight: '400px',
                    objectFit: 'contain'
                  }}
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {videos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">More videos coming soon! 💕</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoCollection

