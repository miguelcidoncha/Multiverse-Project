import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TabsHeader from './components/Tabs/Tabs.jsx'
import NavbarView from './components/Nav/Nav.jsx'
import NewCarousel from './components/Carousel/Carousel';
import MainBody from './components/Mainbody/Mainbody';
// import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TabsHeader />
    <NavbarView />
    <NewCarousel />
    <MainBody />
    {/* <Cards /> */}
    <Footer />
  </React.StrictMode>,
)
