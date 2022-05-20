import { Routes, Route, Link } from 'react-router-dom';

// Standard imports 
import Layout from './components/Layout/Layout';
import Landing from './components/Home/Landing';

// Auth imports 
import AuthLayout from './components/Layout/AuthLayout';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Landing />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
