import Header from "./components/Header"
import Footer from "./components/Footer"
import Food from "./components/Food"
import Card from "./components/card-components/Card"
import Navbar from "./components/Navbar"
import Button from "./components/buttons/Button"
import Student from "./components/Student";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <>
      {/*<Header />*/}
      {/*<Navbar />*/}
      {/*<Card />*/}
      {/*<Card />*/}
      {/*<Card />*/}
      {/*<Card />*/}
      {/*<hr/>*/}
      {/*<Food />*/}
      {/*<Button />*/}
      {/*<Student name={"Nitesh"} age={30} isStudent={true} />*/}
      {/*<Student name={"Patrick"} age={15} isStudent={true} />*/}
      {/*<Student/>*/}
      {/*<Footer />*/}
      <UserGreeting isLoggedIn={false} username={"BroCode"}/>
    </>
  )
}

export default App
