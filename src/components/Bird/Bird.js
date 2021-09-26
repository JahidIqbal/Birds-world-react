import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove } from '@fortawesome/free-solid-svg-icons'

const Bird = (props) => {
    console.log(props.bird);
    const { id, name, img, color, price } = props.bird;
    return (
        <div className="col-4">
            <div className="card mb-3">
                <div className="row">
                    <div className="col-12">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-12 ">
                        <div className="card-body text-center ">
                            <h5 className="card-title">name:{name}</h5>
                            <p className="card-text">id:{id}</p>
                            <p className="card-text">color:{color}</p>
                            <p className="card-text">price:{price}</p>
                            <button onClick={() => props.showBird(props.bird)} className="btn btn-info  "><FontAwesomeIcon icon={faDove} />Select Bird</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Bird;