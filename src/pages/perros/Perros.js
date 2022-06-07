
import Navbar from "../../components/navbar/Navbar";
import { getAll } from "../../components/perros/Perros";
import Razas from '../../components/perros/Razas';
import './Perros.css'

function Perros() {
    const perros = getAll();
    return (
        <div>
           
            <Navbar />
            <div className="container">
                <h1>Listado de perros</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        perros.map(p=>(
                            <Razas 
                            p1={p.id}
                            p2={p.raza}
                            p3={p.thumbnail}
                            p4={p.imagen}
                            p5={p.descripcion}
                            p6={p.acercade}
                            p7={p.pais}
                            p8={p.tamaño}
                            p9={p.vida}/>
                        ))
                    }
                </div>
            </div>
           
        </div>
    )
}

export default Perros;