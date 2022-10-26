
import { Modal, Navbar } from 'react-bootstrap';
import './App.css';
import Cards from './components/Cards';
import FrontPage from './components/FrontPage';
import MiddeleNav from './components/MiddeleNav';
import NavBar from './components/Navbar';
import Page10 from './components/Page10';
import Page11 from './components/Page11';
import Page20 from './components/Page20';
import Page22 from './components/Page22';
import Rightbar from './components/Rightbar';
import Sample from './components/Sample';
import SideNav from './components/SideNav';
import SideNavbar from './components/SideNavbar';

function App() {
  return (
    <div className="App">

      <layout>
        <layout><NavBar /></layout>
        <div className='row'>
        <div className='col-md-2'><SideNavbar /></div>
        {/* <div className='col-md-10'> <Cards/> </div> */}
        {/* <div className='col-md-10'> <Page22/> </div> */}
        <div className='col-md-10'> <Page11/> </div>
        {/* <div className='col-md-2'><Rightbar/></div> */}
        {/* <Page10/> */}
    </div>
       </layout >
     {/* <Sample/>  */}
    {/* < Modal /> */}
    </div >
  );
}

export default App;
