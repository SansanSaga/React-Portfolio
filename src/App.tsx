import Contacts from "./components/Contacts"
import Jumbotron from "./components/Jumbotron"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
      <Jumbotron />
      <Sidebar />
      <Services />
      <Portfolio />
      <Contacts />
    </>
  )
}

export default App
