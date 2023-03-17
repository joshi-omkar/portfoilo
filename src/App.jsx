import './App.css'
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Dashboard/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Projects/Project'
import Blogs from './components/Blogs/Blogs'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" exact element={<Project />} />
          <Route path="/blogs" exact element={<Blogs />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
