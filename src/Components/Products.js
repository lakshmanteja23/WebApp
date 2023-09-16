import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Products = ()=>{
    const navigate = useNavigate()
return(
<>
<div>
<input type='search' placeholder='Search products'/>
</div>

<nav>
<Link to={'featured'}>features  </Link>

<Link to={'new'}>  new</Link>
</nav>
<Outlet/>
<button onClick={() => navigate(-1)}>Back</button>
</>
);


}