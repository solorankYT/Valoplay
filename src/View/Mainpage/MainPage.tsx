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
                    src="https://i.imgur.com/vfvpIlc.png"
                    alt="Item 1"
                    className="img-fluid"
                  />
                  <p className="text-reset keania-one-regular display-4 text-center">Tier List</p>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="lineups" className="card-link display-4 text-center">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BODhkN2U1YzYtODQzZC00MTc5LTlmMmYtYjQ2ZGU2ZmM4YzJkXkEyXkFqcGdeQXVyMTE0MTc4MjU2._V1_FMjpg_UX1000_.jpg"
                    alt="Item 2"
                    className="img-fluid"
                  />
                  <p className="text-reset keania-one-regular">LINEUPS</p>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="setups" className="card-link display-4 text-center">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BODhkN2U1YzYtODQzZC00MTc5LTlmMmYtYjQ2ZGU2ZmM4YzJkXkEyXkFqcGdeQXVyMTE0MTc4MjU2._V1_FMjpg_UX1000_.jpg"
                    alt="Item 3"
                    className="img-fluid"
                  />
                  <p className="text-reset keania-one-regular">SETUPS</p>
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