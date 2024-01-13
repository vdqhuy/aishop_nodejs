import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/clientSite/homeSite/Home';
import About from './pages/clientSite/aboutSite/About';



function App() {
    return (
        <div className='home'>
            <Router>
                <Routes>
                    <Route path="/" exact Component={Home}/>
                    <Route path="/client" exact Component={Home}/>
                    <Route path="/client/home" exact Component={Home}/>
                    <Route path="/client/about" exact Component={About}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App