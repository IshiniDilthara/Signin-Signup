import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './Signtype.css';
function SignupType(){
return(
    <div>
    
    <div class="splitb leftb">
  
    <Button component={Link} to="/SignupSeller" variant="contained" color="primary" >
  Sign up as Seller
</Button>

    </div>  
    
    <div class="splitb rightb"> 
   
    <Button component={Link} to="/SignupCustomer" variant="contained" color="primary" >
  Sign up as Customer
</Button>
</div>

</div>



);
}
export default SignupType;