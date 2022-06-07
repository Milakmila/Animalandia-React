import ModalRazas from './ModalRazas';
import './Razas.css';

function Razas(props) {
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src={props.p3} className="card-img-top" alt={props.p2} />
                    <div className="card-body">
                        <h5 className="card-title">{props.p2}</h5>
                        <p className="card-text">{props.p5}</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${props.p1}`}>
                            Ver mas
                        </button>
                        <ModalRazas
                        pm1={`id${props.p1}`}
                        pm2={props.p2}
                        pm3={props.p3}
                        pm4={props.p4}
                        pm5={props.p5}
                        pm6={props.p6}
                        pm7={props.p7}
                        pm8={props.p8}
                        pm9={props.p9}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Razas;

/*<div className='card mb-3'>
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
</div> */