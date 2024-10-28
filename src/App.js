import logo from './logo.svg';
import './App.css';
import { H1Tag, ImgStu, ImgVamsi, PTag } from './const';
import { Navigation } from './navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Users } from './Users';
import { Protected } from './protected';
import { NotFound } from './NotFound';
import { Login } from './login';
import { SignUp } from './signup';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navigation />
        </header>
        <main className='main'>
          <Routes>
            <Route element={<Protected />}>
              <Route path='/home' element={<Home />} />
              <Route path='/users' element={<Users />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </main>


      </div>
    </BrowserRouter>

  );
}

export default App;