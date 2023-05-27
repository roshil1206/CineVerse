
import './App.css';
import Scroll from './components/Scroll';
import BookingWindow from './components/BookingWindow';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ position: "fixed", width: "100%" }}>
          <Header />
        </div>

        <Scroll>
          <BookingWindow />
        </Scroll>
      </div>

      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
