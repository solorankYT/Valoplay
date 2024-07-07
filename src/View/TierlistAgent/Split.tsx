import { Link } from 'react-router-dom';
function Split(){
    return(
    <div className="container content">
      <Link to="/maps" className="back-button text-start">Back</Link>
      <div className="text-center">
        <h1 className="keania-one-regular">Split</h1>
        <img className="img-tierlist" src="https://i.imgur.com/BvtwFjI.png"></img>
        </div>
    </div>
    );
    }
    export default Split;