import './App.css';
import FirstPage from './component/firstPage/FirstPage';
import FivePage from './component/fivePage/FivePage';
import FourPage from './component/fourPage/FourPage';
import SecondPage from './component/secondPage/SecondPage';
import ThirdPage from './component/thirdPage/ThirdPage';

function App() {
  return (
    <div className='appContainer'>
    <FirstPage />
    <SecondPage />
    <ThirdPage />
    <FourPage />
    <FivePage />
    </div>
  );
}

export default App;
