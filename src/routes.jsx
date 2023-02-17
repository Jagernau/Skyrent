import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<AboutPage />} />
    </Routes>
  )
}

export default AppRoutes