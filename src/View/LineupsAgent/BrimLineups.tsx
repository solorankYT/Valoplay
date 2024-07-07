import { Link } from 'react-router-dom';

function BrimLineups(){
return(
<div className="container content">
<Link to="/lineups" className="back-button text-start">Back</Link>
<main className="pb-2">
  <div className="card">
    <div className="card-body text-center">
      <div className="row">
        <div className="col-md-4 mb-5">
          <Link to="https://www.youtube.com/watch?v=YD0L3nbWrh4&ab_channel=Snapiex" target='_blank' className="card-link">
          <img src="https://i.imgur.com/Am0jwRe.png"
              alt="Item 1"
              className="img-fluid"
            />
            <p className="text-reset keania-one-regular h1 ">Ascent</p>
          </Link>
        </div>
        <div className="col-md-4  mb-5">
          <Link to="https://www.youtube.com/watch?v=BmMNEe3QI0I&ab_channel=B3astplaysYT" target='_blank' className="card-link ">
          <img src="https://i.imgur.com/igtXvfH.png"
              alt="Item 1"
              className="img-fluid  "
            />
            <p className="text-reset keania-one-regular h1 ">Icebox</p>
          </Link>
        </div>

        <div className="col-md-4 mb-5">
          <Link to="https://www.youtube.com/watch?v=dqRikWERfc4&ab_channel=Snapiex" target='_blank' className="card-link ">
          <img src="https://i.imgur.com/SYqssvB.png"
              alt="Item 1"
              className="img-fluid "
            />
            <p className="text-reset keania-one-regular h1 ">Lotus</p>
          </Link>
        </div>   

        <div className="col-md-4 ">
          <Link to="https://www.youtube.com/watch?v=4fJiPeI8_HU&ab_channel=Snapiex" target='_blank' className="card-link">
          <img src="https://i.imgur.com/ZqylkrX.png"
              alt="Item 1"
              className="img-fluid"
            />
            <p className="text-reset keania-one-regular h1 ">Haven</p>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="https://www.youtube.com/watch?v=ffopLLNJfkQ&ab_channel=Tseeky-ProValorantLineups" target='_blank' className="card-link ">
          <img src="https://i.imgur.com/SBUhudM.png"
              alt="Item 1"
              className="img-fluid "
            />
            <p className="text-reset keania-one-regular h1 ">Split</p>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="https://www.youtube.com/watch?v=5qfkHX02Hwc&ab_channel=Snapiex" target='_blank' className="card-link ">
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

export default BrimLineups;