import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './Signtype.css';
function SigninType(){
return(
    <div>
    
    <div className="splitb leftb">
  
    <Button component={Link} to="/SigninSeller" variant="contained" color="primary" >
  Sign in as Seller
</Button>

    </div>  
    
    <div className="splitb rightb"> 
   
    <Button component={Link} to="/SigninCustomer" variant="contained" color="primary" >
  Sign in as Customer
</Button>
</div>

</div>



);
}
export default SigninType;