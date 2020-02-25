import React from 'react';
import {Component} from 'react';
import logo from './logo.png';
import './Home.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Home extends Component{
    render(){
        return(
          <div>
            <div className="Cover">
            </div>
            <div className="content">
              <p>أنظمة غيمة (Cloud Systems): مؤسّسة سعوديّة تقدّم حلولاً سحابيّةً مستفيدةً من الحوسبة السحابيّة
                 (Cloud Computing) والحوسبة دون خادم (Serverless Computing)، وتهتم بالبيانات الضخمة (Big Data)، وتشجّع ثقافة العمل عن بُعد
                  (Remote)، وتقدّم تدريبًا صيفيًّا استثنائيًا في حقولٍ ذات علاقة.</p>
            </div>
         </div>
        );
      }
    }

export default Home;
