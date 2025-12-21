import Header from "./components/Header"
import Footer from "./components/Footer"
import Food from "./components/Food"

function App() {
  return (
    <>
      <Header />
      <nav>
        <ul>
          <li><a href="Home">Home</a></li>
          <li><a href="About">About</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>
      </nav>
      <hr/>
      <Food />
      <Footer />
    </>
  )
}

export default App
