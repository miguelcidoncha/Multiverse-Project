import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TabsHeader from './components/Tabs/Tabs.jsx'
import NavbarView from './components/Nav/Nav'
import MainBody from './components/Mainbody/Mainbody';

// import NewCarousel from './components/Carousel/Carousel';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TabsHeader />
    <NavbarView />
    <MainBody/>
    {/* <NewCarousel /> */}
  </React.StrictMode>,
)
