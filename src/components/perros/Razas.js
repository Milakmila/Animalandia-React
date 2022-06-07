import './Razas.css';
import ModalRazas from './ModalRazas';

function Razas(props){
return (
<div className='card mb-3'>
    <div className='row g-0'>
        <div className='col-md-4'>
            <img src={props.p2} className="img-fluid rounded-star" alt={props.p3} />
        </div>
        <div className='col-md-8'>
            <div className='card-body'>
                <h5 className='card-title'>{props.p3}</h5>
                <p className='card-text'>{props.p4}</p>
                <button className='btn btn-morado'data-bs-toggle="modal" data-bs-target={'#id${props.p1}'}>Ver más</button>
            </div>
        </div>
    </div>
    <ModalRazas pm1={'id${props.p1}'} pm2={props.p3} pm3={props.p5}pm4={props.p6} />
</div>
);
}

export default Razas;