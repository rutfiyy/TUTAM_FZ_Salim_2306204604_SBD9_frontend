import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import CreateCard from './pages/create';
import EditCardPage from './pages/edit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCard />} />
          <Route path="/edit" element={<EditCardPage />} /> {/* Static route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;