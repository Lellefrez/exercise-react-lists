import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

function App() {
  const navList = [
    { name: "Home", url: "/home" },
    { name: "About", url: "/about" },
    { name: "Foods", url: "/foods" },
    { name: "Lifestyle", url: "/lifestyle" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <>
      <Navbar
        logoURL="https://www.upwork.com/catalog-images-resized/2083469b645fd98ceac90df33867b0f7/large@2x"
        navList={navList}
      />

      <Jumbotron />
    </>
  );
}
1;

export default App;
