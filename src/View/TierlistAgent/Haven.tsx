import { Link } from 'react-router-dom';
function Haven(){
    return(
    <div className="container content">
      <Link to="/maps" className="back-button text-start">Back</Link>
      <div className="text-center">
        <h1 className="keania-one-regular text-secondary">Haven</h1>
        <img className="img-tierlist" src="https://i.imgur.com/7tD1KoF.jpeg"></img>
        </div>
    </div>
    );
    }
    export default Haven;