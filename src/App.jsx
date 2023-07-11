
import './App.css'
import pic from "./assets/imgg_cr.png"
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  return(
    <div className='container'>
      <img src={pic} width="300px"/>
      <section>
        <Main />
        <Footer />
      </section>
    </div>
    

  )
}

export default App
