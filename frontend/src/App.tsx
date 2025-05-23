import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DevicePage from './pages/DevicePage';
import { DeviceProvider } from './context/DeviceContext';
import CreateDevicePage from './pages/CreateDevicePage';

function App() {
  return (
    <DeviceProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/device/:id" element={<DevicePage />} />
          <Route path='/device/create' element={<CreateDevicePage />} />
        </Routes>
      </BrowserRouter>
    </DeviceProvider>
  );
}

export default App;
