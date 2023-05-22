import Header from './components/Header'
import ShowCase from './components/ShowCase'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Space from './components/Space'
import './style.css'

function App() {
  return (
    <div>
      <Header/>
      <ShowCase/>
      <About/>
      <Space/>
      <Work/>
      <Space/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
