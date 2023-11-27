import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignatureForm from './SignatureForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signature" element={<SignatureForm />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
