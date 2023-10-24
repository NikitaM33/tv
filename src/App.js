import { Routes, Route } from 'react-router-dom'
import { Main, PromoZone } from './components';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/promo" element={<PromoZone />} />
      </Routes>
    </div>
  );
}

export default App;
