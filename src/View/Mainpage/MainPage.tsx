import { Link } from 'react-router-dom';

function MainPage()  {
  return (
    <div className="container content">
      <main className="pb-2">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <Link to="maps" className="card-link text-center">
                  <img
                    src="./tierlistBanner.png"
                    alt="Item 1"
                    className="img-fluid"
                  />
          
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="lineups" className="card-link display-4 text-center">
                  <img
                    src="./lineupsBanner.png"
                    alt="Item 2"
                    className="img-fluid"
                  />
                 
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="setups" className="card-link display-4 text-center">
                  <img
                    src="./setupsBanner.png"
                    alt="Item 3"
                    className="img-fluid"
                  />
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;