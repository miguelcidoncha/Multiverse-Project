import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import './Avatar.css'; 

function Avatars() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <h5>Image</h5>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                </div>

                <div className="flex-auto">
                    <h5>Badge</h5>
                    <Avatar className="p-overlay-badge" image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge">
                        <Badge value="4" severity="danger" />
                    </Avatar>
                </div>
            </div>
        </div>
    )
}
        
export default Avatars;