import Header from "./components/Header"
import Footer from "./components/Footer"
import Food from "./components/Food"
import Card from "./components/card-components/Card"
import Navbar from "./components/Navbar"
import Button from "./components/buttons/Button"

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Card />
      <Card />
      <Card />
      <Card />
      <hr/>
      <Food />
      <Button />
      <Footer />
    </>
  )
}

export default App
