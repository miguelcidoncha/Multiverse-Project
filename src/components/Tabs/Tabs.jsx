import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Tabs.css';

function TabsHeader() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      // fill
    >
      <Tab eventKey="home" title="Home">
       
      </Tab>
      <Tab eventKey="profile" title="Registro/Profile">
      
      </Tab>
      <Tab eventKey="longer-tab" title="❤️">
        
      </Tab>
      <Tab eventKey="contact" title="😁😎🤩" >
     
      </Tab>
      <Tab eventKey="Carrito" title="🛒" >

      </Tab>
    </Tabs>
  );
}

export default TabsHeader;