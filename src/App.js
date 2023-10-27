import { Routes, Route } from 'react-router-dom'
import { Main, PromoZone, FinalScreen } from './components';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/promo" element={<PromoZone />} />
        <Route path="/final" element={<FinalScreen />} />
      </Routes>
    </div>
  );
}

export default App;
