import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ItemPage from './Pages/ItemPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/item/" element={<ItemPage />} />
      <Route path="/item/:pk" element={<ItemPage />} />
    </Routes>
  )
}

export default AppRoutes
