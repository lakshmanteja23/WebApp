
import { useNavigate } from "react-router-dom";
export default function Cards({firstName , lastName , email}) {
    const navigate = useNavigate()
    return (
        <div>
            <h2>First Name : {firstName}</h2>
            <h2>Last Name : {lastName}</h2>
            <h2>Email : {email}</h2>
            <hr/>
            <button onClick={()=>navigate(-1)}>Go To Login Screen</button>
            <button onClick={() => navigate('order-summary')}>Place Order</button>
            <button onClick={()=> navigate('products')}>Products</button>

            <button onClick={()=> navigate('users')}>Users </button>
            <button onClick={()=> navigate('about')}>About </button>
        </div>
    );
}