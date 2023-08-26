import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css"; 
import TabsHeader from './components/Tabs/Tabs.jsx'
import NavbarView from './components/Nav/Nav.jsx'
import NewCarousel from './components/Carousel/Carousel';
import Stars from './components/Rating/Rating';
// import MainBody from './components/Mainbody/Mainbody';
// import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer.jsx';
import Avatars from './components/Avatars/Avatar';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TabsHeader />
    <NavbarView />
    <NewCarousel />
    <Avatars />
    <Stars />
    {/* <MainBody /> */}
    {/* <Cards /> */}
    <Footer />
  </React.StrictMode>,
)
