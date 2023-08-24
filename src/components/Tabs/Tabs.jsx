import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Tabs.css';

function TabsHeader() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      // fill
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Registro/Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="❤️">
        Tab content for your Liks
      </Tab>
      <Tab eventKey="contact" title="😁😎🤩" >
        Tab content for user
      </Tab>
      <Tab eventKey="Carrito" title="🛒" >
        Tab content for markets
      </Tab>
    </Tabs>
  );
}

export default TabsHeader;