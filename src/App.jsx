
import { Routes,Route } from 'react-router-dom';
import Landing from '@/Pages/Landing';
import Admin from '@/Pages/Admin'



function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/administrador' element={<Admin />} />
    </Routes>
  );
}

export default App;