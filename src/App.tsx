import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import One from './Pages/Home/One';
import Two from './Pages/Home/Two';
import Three from './Pages/Home/Three';
import Four from './Pages/Home/Four';
import Five from './Pages/Home/Five';
import NotAllowed from './Pages/NotAllowed';
import CourseOne from './Pages/Cert/Course1';
import CourseTwo from './Pages/Cert/Course2';
import CourseThree from './Pages/Cert/Course3';
import CourseFour from './Pages/Cert/Course4';
import Course5 from './Pages/Cert/Course5';
import AddEmail from './Pages/Admin/AddEmail';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<One />} />
          <Route path='/Two' element={<Two />} />
          <Route path='/Three' element={<Three />} />
          <Route path='/Four' element={<Four />} />
          <Route path='/CourseOne' element={<CourseOne />} />
          <Route path='/CourseTwo' element={<CourseTwo />} />
          <Route path='/CourseThree' element={<CourseThree />} />
          <Route path='/CourseFour' element={<CourseFour />} />
          <Route path='/Five' element={<Five />} />
          <Route path='/course5' element={<Course5 />} />
          <Route path='/NotAllowed' element={<NotAllowed />} />
          <Route path='/addEmail' element={<AddEmail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
