// Bringing in the required import from 'react-router-dom'
import Nav from './Navigation.jsx';

export default function Header() {
  // The Navbar component will render each of the Link elements in the links prop
  return (
    <header>
    <h1>Kalab Smith</h1>
    <Nav/>
    </header>
  );
}