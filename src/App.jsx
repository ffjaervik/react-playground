import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Home from './components/Home';
import SignaturePage from './components/SignaturePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signature" element={<SignaturePage />} />
      </Routes>
    </Router>
  );
}

export default App;
