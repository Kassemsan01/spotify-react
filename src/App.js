import './App.css';
import Header from '../src/Header/Header';
import Sidebar from '../src/Sidebar/Sidebar';
import Footer from '../src/Footer/Footer';
import Main from '../src/Main/Main';
function App() {
  return (
    <div>
    <Sidebar />
    <Header />
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
