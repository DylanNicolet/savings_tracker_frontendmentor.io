import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from './pages/homepage/Homepage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
