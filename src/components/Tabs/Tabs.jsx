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
{/* <div>
  <img src="https://res.cloudinary.com/duwenv0yr/image/upload/v1692957145/LogoMultiverse_qop0xe.png" alt="logo" />
</div> */}

      <Tab eventKey="home2" title="Home">

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