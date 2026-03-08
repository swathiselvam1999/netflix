import { useNavigate } from "react-router-dom";
import "./style.css";

function Dashboard(){

const navigate = useNavigate();

function handleLogout(){
navigate("/");
}

return(

<div className="dashboard-container">

<h1>Welcome to Dashboard 🎉</h1>

<p>You have successfully Signed In.</p>

<button className="logout-btn" onClick={handleLogout}>
Go to Home ←
</button>

</div>

);

}

export default Dashboard;