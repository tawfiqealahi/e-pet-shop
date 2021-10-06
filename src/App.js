import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div style={{"backgroundColor": "rgba(0, 0, 0, 0.06)"}} >
     <Header></Header>
    <Shop></Shop>
    </div>
  );
}

export default App;
