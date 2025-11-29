import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Dashboard from './pages/Dashboard'
import Songs from './pages/Songs'
import VideoCollection from './pages/VideoCollection'
import Flower from './pages/Flower'
import PersistentAudioPlayer from './components/PersistentAudioPlayer'

function App() {
  return (
    <Router>
      <PersistentAudioPlayer />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/songs" element={<Songs />} />
        <Route path="/dashboard/video-collection" element={<VideoCollection />} />
        <Route path="/flower" element={<Flower key="flower" />} />
      </Routes>
    </Router>
  )
}

export default App

