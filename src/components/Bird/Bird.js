import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove } from '@fortawesome/free-solid-svg-icons'

const Bird = (props) => {
    const { id, name, img, Family, color, price } = props.bird;
    return (
        <div className="col-4">
            <div className="card mb-3">
                <div className="row">
                    <div className="col-12">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-12 ">
                        <div className="card-body text-center ">
                            <p className="card-title h4">Name:{name}</p>
                            <p className="card-text h5">ID:{id}</p>
                            <p className="card-text h5">Family:{Family}</p>
                            <p className="card-text h5">Color:{color}</p>
                            <p className="card-text h5 ">Price:{price}</p>
                            <button onClick={() => props.showBird(props.bird)} className="btn btn-info  "><FontAwesomeIcon icon={faDove} />Select Bird</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Bird;