import { Link } from 'react-router-dom';
function Breeze(){
    return(
    <div className="container content">
      <Link to="/maps" className="back-button text-start">Back</Link>
      <div className="text-center">
        <h1 className="keania-one-regular text-secondary">Breeze</h1>
        <img className="img-tierlist" src="https://i.imgur.com/1Zr6tws.png"></img>
        </div>
    </div>
    );
    }
    export default Breeze;