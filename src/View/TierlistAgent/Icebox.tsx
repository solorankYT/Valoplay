import { Link } from 'react-router-dom';
function Icebox(){
    return(
    <div className="container content">
      <Link to="/maps" className="back-button text-start">Back</Link>
      <div className="text-center">
        <h1 className="keania-one-regular text-secondary">Icebox</h1>
        <img className="img-tierlist" src="https://i.imgur.com/0RVRFIP.png"></img>
        </div>
    </div>
    );
    }
    export default Icebox;