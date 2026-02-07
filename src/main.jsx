import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Conditionalrendering from './component/Conditionalrendering.jsx'
import Student from './component/Student.jsx'
import Setcount from'./component/Setcount.jsx'
import Ternary from './component/Setcount.jsx'
import Stu from './component/Stu.jsx'
import Course from './component/Course.jsx'
import Fruits from './component/Fruits.jsx'
import Even from './component/Even.jsx'
import Marks from './component/Marks.jsx'
import Studen from './component/Studen.jsx'
import Form from './component/Form.jsx'
import New from './component/New.jsx'
import Sd from './component/Sd.jsx'
import Watch from './component/Watch.jsx'
import UseEffectApi from './component/UseEffectApi.jsx'
import UseRef from './component/UseRef.jsx'
import For from './component/For.jsx'
import Use from './component/Use.jsx'
import UseCall from './Router/UseCall.jsx'
import UseCallBackList from './Router/UseCallBackList.jsx'
import MiniChat from './Router/MiniChat.jsx'
import Exam from './Practice/Exam.jsx'
import Like from './Practice/Like.jsx'
import Apple from './ApInt/Apple.jsx'
import Blog from './Router/Blog.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App/>  <Greeting/> <Conditionalrendering/><Student/>
  </StrictMode> ,<Setcount/>,<Ternary/>,<Stu/>,<Course/>,<Fruits/>,
<Even/> , <Marks/> ,<Studen/> ,<Form/> , <New/>,<Sd/>,<Watch/> , <UseEffectApi/>,<UseRef/>,<For/>,<Use/> , <UseCall/>,<UseCallBackList/>,<MiniChat/>,<Exam/>,<Blog/>,<Apple/>
)
 