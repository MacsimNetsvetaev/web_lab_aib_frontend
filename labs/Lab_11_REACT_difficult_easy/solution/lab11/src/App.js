import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './routes/Main'
import About from './routes/About'
import { useState } from 'react';

function App() {

  const [todoData, setData] = useState([
    {
        date: new Date(2023, 11, 27), 
        tasks: ['Зачет по моему любимому предмету'], 
        desc: ['💖💖💖'], 
        time: ['9:00'],
    },
])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main todoData={todoData}/>}/>
        <Route path='/about/:day/:year/:month' element={<About todoData={todoData} setData={setData}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
