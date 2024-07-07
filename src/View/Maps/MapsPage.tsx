import { Link } from 'react-router-dom';


function MapsPage(){
return(
<div className="container content">
<Link to="/" className="back-button text-start">Back</Link>
<main className="pb-2">
  <div className="card">
    <div className="card-body text-center">
      <div className="row">
    
        <div className="col-md-4 mb-5">
          <Link to="/ascent" className="card-link">
          <img src="https://i.imgur.com/Am0jwRe.png"
              alt="Item 1"
              className="img-fluid"
            />
            <p className="text-reset keania-one-regular h1 ">Ascent</p>
          </Link>
        </div>

        <div className="col-md-4  mb-5">
          <Link to="/icebox" className="card-link ">
          <img src="https://i.imgur.com/igtXvfH.png"
              alt="Item 1"
              className="img-fluid  "
            />
            <p className="text-reset keania-one-regular h1 ">Icebox</p>
          </Link>
        </div>

        <div className="col-md-4 mb-5">
          <Link to="/Lotus" className="card-link ">
          <img src="https://i.imgur.com/SYqssvB.png"
              alt="Item 1"
              className="img-fluid "
            />
            <p className="text-reset keania-one-regular h1 ">Lotus</p>
          </Link>
        </div>   

        <div className="col-md-4 ">
          <Link to="/haven" className="card-link">
          <img src="https://i.imgur.com/ZqylkrX.png"
              alt="Item 1"
              className="img-fluid"
            />
            <p className="text-reset keania-one-regular h1 ">Haven</p>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/split" className="card-link ">
          <img src="https://i.imgur.com/SBUhudM.png"
              alt="Item 1"
              className="img-fluid "
            />
            <p className="text-reset keania-one-regular h1 ">Split</p>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/bind" className="card-link ">
          <img src="https://i.imgur.com/QBwAdpp.png"
              alt="Item 1"
              className="img-fluid "
            />
            <p className="text-reset keania-one-regular h1 ">Bind</p>
          </Link>
        </div>
     </div>
    </div>
  </div>
</main>
</div>

);
};

export default MapsPage;