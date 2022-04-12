import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './components/Home/Landing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Landing />} />
      </Route>
    </Routes>
  )
}

export default App
