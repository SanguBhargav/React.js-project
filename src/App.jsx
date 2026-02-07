import React from 'react'
import Greeting from './Greeting.jsx'//
 import Conditionalrendering from './component/Conditionalrendering.jsx'//
import Student from './component/Student.jsx'//
import Setcount from './component/Setcount.jsx'//
import Ternary from './component/Ternary.jsx'//
import Stu from './component/Stu.jsx'//
import Course from './component/Course.jsx'//
import Fruits from './component/Fruits.jsx'
import Even from './component/Even.jsx'//
import Marks from './component/Marks.jsx'//
import Studen from './component/Studen.jsx'//
import Form from './component/Form.jsx'//
import New from './component/New.jsx'//
import Sd from './component/Sd.jsx'//
import "./component/Helio.css"//
import Watch from './component/Watch.jsx'//
import "./component/Timer.css"//
import UseEffectApi from './component/UseEffectApi.jsx'//
import UseRef from './component/UseRef.jsx'//
import For from './component/For.jsx'//
import Use from './component/Use.jsx'//
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'//
import Home from "./Router/Home"//
import About from "./Router/About"//
import Services from "./Router/Services"//
import Contact from "./Router/Contact"//
import AppDevelopment from "./Router/AppDevelopment.jsx"//
import WebDevelopment from "./Router/WebDevelopment.jsx"//
import UseCall from './Router/UseCall.jsx'//
import UseCallBackList from './Router/UseCallBackList.jsx'//
import MiniChat from './Router/MiniChat.jsx'//
import Exam from './Practice/Exam.jsx'//
import Like from './Practice/Like.jsx'//
import List from './Router/List.jsx'//
import Blog from './Router/Blog.jsx'//
import ComponentA from './Practice/ComponentA.jsx'//
import Effec from './Practice/Effec.jsx'//
import TicTacToe from './Router/TicTacToe.jsx'//
import Ref from './Practice/Ref.jsx'//
import Re from './Practice/Re.jsx'//
import Call from './Practice/Call.jsx'//

import Mygoal from './ApInt/Mygoal.jsx'//
import Reff from './Practice/Reff.jsx'//
import Back from './Practice/Back.jsx'//
import Apple from './ApInt/Apple.jsx'
import HideOutput from './component/HideOutput.jsx'
export default function App() {
  
/* const students=["helio","hlo","hi"]*/
  

  return (
    <div>
      {/*<h1>Student Details</h1>*/}

     {/*<Student
        name="Swami"
        course="CSE"
        age={19}
        gender="Male"
        college="JNTU"
        city="Hyderabad"
        state="Telangana"
        mobile="9876543210"
        email="swami@gmail.com"
        year={2026}
      />

      <Student
        name="Rahul"
        course="ECE"
        age={20}
        gender="Male"
        college="IIT Delhi"
        city="Delhi"
        state="Delhi"
        mobile="9123456780"
        email="rahul@gmail.com"
        year={2025}
      />

      <Student
        name="Priya"
        course="IT"
        age={21}
        gender="Female"
        college="Anna University"
        city="Chennai"
        state="Tamil Nadu"
        mobile="9988776655"
        email="priya@gmail.com"
        year={2024}
      />

      <Student
        name="Karthik"
        course="MECH"
        age={22}
        gender="Male"
        college="VTU"
        city="Bangalore"
        state="Karnataka"
        mobile="9000011111"
        email="karthik@gmail.com"
        year={2023}
      />

      <Student
        name="Sneha"
        course="CIVIL"
        age={23}
        gender="Female"
        college="Osmania University"
        city="Hyderabad"
        state="Telangana"
        mobile="9555544444"
        email="sneha@gmail.com"
        year={2022}/>


       <Setcount/> <Ternary/><Stu name="helio" age={3}/>
      <Course course="React"/> <Fruits/> <Even />
      <Marks marks={70}/> < Studen students={students}/>
  <Form /> <New/>
  <Sd
        name="Swami"
        course="CSE"
        age={19}
        gender="Male"
        college="JNTU"
        city="Hyderabad"
        state="Telangana"
        mobile="9876543210"
        email="swami@gmail.com"
        year={2026}
      />
 {/*<Watch/> */} {/*<UseEffectApi/>*/} {/*<UseRef/>*/} {/*<For /> */}{/*<Use/>*/} {/*<MiniChat/>*/}
{/*<div className="hello">*/}
  

{/*<BrowserRouter>

<Link to={"/Home"}>Home</Link>
  <Link to={"/About"}>About</Link>
  <Link to={"/Services"}>Services</Link>
  <Link to={"/Contact"}>Contact</Link>
<Routes>
  <Route path="/Home" element={<Home/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Services" element={<Services/>}/>
  <Route path="/AppDevelopment" element={<AppDevelopment/>}/>
  <Route path="/WebDevelopment" element={<WebDevelopment/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/list" element={<List />} />
 <Route path="/Blogs/:id" element={<Blog />} />
</Routes>
</BrowserRouter>*/}  {/*<UseCall/> <Exam/> <Like/> <ComponentA/> <Effec/> <TicTacToe /> <Ref/> <Re/> <Call/>*/} <Apple/> {/*<Mygoal/> <Reff/> <Back/> <HideOutput/>*/}

{/*</div>*/}


    </div>
  )
}

