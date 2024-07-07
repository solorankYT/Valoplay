import { Link } from 'react-router-dom';

function LineupsAgent(){
return(
    <div className="container content">
    <Link to="/" className="back-button text-start">Back</Link>
    <main className="pb-2">
      <div className="card">
        <div className="card-body text-center">
          <div className="row">
        
            <div className="col-md-3 mb-5">
              <Link to="/kjlineup" className="card-link">
              <img src="https://i.imgur.com/ga7tR38.png"
                  alt="Item 1"
                  className="img-fluid"
                />
                <p className="text-reset keania-one-regular h1 ">Kj</p>
              </Link>
            </div>
    
    
            <div className="col-md-3 mb-5">
              <Link to="/brimlineup" className="card-link ">
              <img src="https://i.imgur.com/TW9Hzrk.png"
                  alt="Item 1"
                  className="img-fluid "
                />
                <p className="text-reset keania-one-regular h1 ">Brimstone</p>
              </Link>
            </div>   
    
            <div className="col-md-3 ">
              <Link to="/sovalineup" className="card-link">
              <img src="https://i.imgur.com/BAKyc1b.png"
                  alt="Item 1"
                  className="img-fluid"
                />
                <p className="text-reset keania-one-regular h1 ">Sova</p>
              </Link>
            </div>
    
            <div className="col-md-3">
              <Link to="/viperlineup" className="card-link ">
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


export default LineupsAgent;