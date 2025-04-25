import About from "./components/About";
import Blog from "./components/Blog";
import ClientSection from "./components/ClientSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestProduct from "./components/LatestProduct";
import Offer from "./components/Offer";

const { Component } = require("react");

class App extends Component {
  render() {
    return <>
      <Header/>
      <LatestProduct/>
      <Offer/>
      <Blog/>
      <ClientSection/>
      <About/>
      <Footer/>
    </>
  }
}

export default App;