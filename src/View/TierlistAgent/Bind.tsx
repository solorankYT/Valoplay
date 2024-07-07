import { Link } from 'react-router-dom';
function Bind(){
    return(
    <div className="container content">
      <Link to="/maps" className="back-button text-start">Back</Link>
      <div className="text-center">
        <h1 className="keania-one-regular text-secondary">Bind</h1>
        <img className="img-tierlist" src="https://i.imgur.com/BX7MOWj.png"></img>
        </div>
    </div>
    );
    }
    export default Bind;