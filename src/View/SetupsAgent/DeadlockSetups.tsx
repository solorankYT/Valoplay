import { Link } from 'react-router-dom';

function DeadlockSetups(){
return(
<div className="container content">
<Link to="/setups" className="back-button text-start">Back</Link>
<main className="pb-2">
  <div className="card">
    <div className="card-body text-center">
      <div className="row">
        <div className="col-md-4 mb-5">
          <Link to="https://www.youtube.com/watch?v=U_llSvMFFzg" target='_blank' className="card-link">
          <img src="https://i.imgur.com/Am0jwRe.png"
              alt="Item 1"
              className="img-fluid"
            />
            <p className="text-reset keania-one-regular h1 ">Ascent</p>
          </Link>
        </div>
        <div className="col-md-4  mb-5">
          <Link to="https://www.youtube.com/watch?v=UZf0y1gI0_c" target='_blank' className="card-link ">
          <img src="https://i.imgur.com/igtXvfH.png"
              alt="Item 1"
              className="img-fluid  "
            />
            <p className="text-reset keania-one-regular h1 ">Icebox</p>
          </Link>
        </div>

        <div className="col-md-4 mb-5">
          <Link to="https://youtube.com/clip/Ugkxsag2avIWNqzJCGRuJKJAbJmxhMiWRK8L?feature=shared" target='_blank' className="card-link ">
          <img src="https://i.imgur.com/SYqssvB.png"
              alt="Item 1"
              className="img-fluid "
            />
            <p className="text-reset keania-one-regular h1 ">Lotus</p>
          </Link>
        </div>   

        <div className="col-md-4 ">
          <Link to="https://www.youtube.com/watch?v=qnOBYBzhdzM" target='_blank' className="card-link">
          <img src="https://i.imgur.com/ZqylkrX.png"
              alt="Item 1"
              className="img-fluid"
            />
            <p className="text-reset keania-one-regular h1 ">Haven</p>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="https://www.youtube.com/watch?v=7oiqHoLNPtk" target='_blank' className="card-link ">
          <img src="https://i.imgur.com/SBUhudM.png"
              alt="Item 1"
              className="img-fluid "
            />
            <p className="text-reset keania-one-regular h1 ">Split</p>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="https://www.youtube.com/watch?v=KO887iXd1ns" target='_blank' className="card-link ">
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

export default DeadlockSetups;