// Libraries
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

// Routes
import LandingPage from './routes'
import AboutPage from './routes/AboutPage/AboutPage'

function App() {
  return (
    <Router>

      <Routes>

        <Route path='/' element={<LandingPage />}>
          <Route path='/about' element={<AboutPage />}/>
        </Route>

      </Routes>

    </Router>
  )
}

export default App
