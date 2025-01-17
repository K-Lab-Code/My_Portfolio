// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';
import {useEffect} from 'react'
import Navbar from './Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  useEffect(()=>{
    const path = location.href;
    if(path.indexOf('/portfolio')!=-1){
      try {
        document.getElementById('active').id = '';
        }
        catch(err){console.error(err);}
        document.getElementsByClassName('nav2')[0].id = "active";
    } else if(path.indexOf('/contactme')!=-1){
      try {
        document.getElementById('active').id = '';
        }
        catch(err){console.error(err);}
        document.getElementsByClassName('nav3')[0].id = "active";
    } else if(path.indexOf('/resume')!=-1){
      try {
        document.getElementById('active').id = '';
        }
        catch(err){console.error(err);}
        document.getElementsByClassName('nav4')[0].id = "active";
    } else {
      try {
        document.getElementById('active').id = '';
        }
        catch(err){console.error(err);}
        document.getElementsByClassName('nav1')[0].id = "active";
    }
  });
  function highlight(event) {
    try {
    document.getElementById('active').id = '';
    }
    catch(err){console.error(err);}
    event.currentTarget.id ='active';
  }
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light nav1" to="/" id='active' onClick={highlight}>
          About Me
        </Link>,
        <Link key={2} className="nav-link text-light nav2" to="/portfolio" onClick={highlight}>
          Portfolio
        </Link>,
         <Link key={3} className="nav-link text-light nav3" to="/contactme" onClick={highlight}>
         Contact
       </Link>,
        <Link key={4} className="nav-link text-light nav4" to="/resume" onClick={highlight}>
        Resume
      </Link>,
      ]}
    />
  );
}
