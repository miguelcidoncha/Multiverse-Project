import './MainBody.css';
import Cards from '../Cards/Cards.jsx';

function MainBody() {
    return (
<div className="background-body">
 
    <div className='subtitle' id='new'>Novedades</div>
    <Cards />
    <div className='subtitle' id='sold'>Lo más vendido</div>
    <div id='add'>
        <h2>¡Mola ser friki!</h2>
        
    </div>
    <div id='advenger'><img  src='https://res.cloudinary.com/dit2zhtwz/image/upload/v1692982385/Break-wall_nxpsov.png'></img></div>

</div>
    );
}

export default MainBody;