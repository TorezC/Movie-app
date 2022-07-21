import './App.css';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import Search from './components/Search/Search';

function App() {
  return (
    <div>
      <Header/>
      <div className="slide-img">
        <p>Watch something incredible.</p>
      </div>
      <div className='container'>
        <Search/>
        <Movies/>
      </div>
    </div>
  );
}

export default App;
