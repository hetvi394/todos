import { Link } from "react-router-dom";
import './Home.css'
const Home = () => {
 
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome Home!</h1>
      <Link className="home-link" to="/register">
        Go Register First!
      </Link>
    </div>
  );
};

export default Home;
