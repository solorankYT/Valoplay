import { Link } from 'react-router-dom';

function SetupsAgent(){
return(
<div className="container content">
<Link to="/" className="back-button text-start">Back</Link>
    <main className="pb-2">
      <div className="card">
        <div className="card-body text-center">
          <div className="row">
        
            <div className="col-md-3 mb-5">
              <Link to="/kjsetup" className="card-link">
              <img src="https://i.imgur.com/ga7tR38.png"
                  alt="Item 1"
                  className="img-fluid"
                />
                <p className="text-reset keania-one-regular h1 ">Kj</p>
              </Link>
            </div>
    
    
            <div className="col-md-3 mb-5">
              <Link to="/cyphersetup" className="card-link ">
              <img src="https://i.imgur.com/3L1lAfP.png"
                  alt="Item 1"
                  className="img-fluid "
                />
                <p className="text-reset keania-one-regular h1 ">Cypher</p>
              </Link>
            </div>   
    
            <div className="col-md-3 ">
              <Link to="/deadlocksetup" className="card-link">
              <img src="https://i.imgur.com/vM4M8Rt.png"
                  alt="Item 1"
                  className="img-fluid"
                />
                <p className="text-reset keania-one-regular h1 ">Deadlock</p>
              </Link>
            </div>
    
            <div className="col-md-3">
              <Link to="/vipersetup" className="card-link ">
              <img src="https://i.imgur.com/tv7wEzv.png"
                  alt="Item 1"
                  className="img-fluid "
                />
                <p className="text-reset keania-one-regular h1 ">Viper</p>
              </Link>
            </div>
         </div>
        </div>
      </div>
    </main>
    </div>
  );
};

export default SetupsAgent;