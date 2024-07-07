import { Link } from 'react-router-dom';
function Lotus(){
    return(
    <div className="container content">
      <Link to="/maps" className="back-button text-start">Back</Link>
      <div className="text-center">
        <h1 className="keania-one-regular text-secondary">Lotus</h1>
        <img className="img-tierlist" src="https://i.imgur.com/LBQ67d0.png"></img>
        </div>
    </div>
    );
    }
    export default Lotus;