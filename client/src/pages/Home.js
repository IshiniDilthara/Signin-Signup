
import Button from '@material-ui/core/Button';
import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';



function Home(){
return(
  <div>
      <div>
      <nav>

      </nav>
      </div>
      <div class="split left">
    
   <img src="http://unblast.com/wp-content/uploads/2020/04/Online-Shopping-Illustration.jpg" alt="pic"    style={{
              width: 600,
              height: 500,
              
              
            }}/>  
      </div>  
      
      <div class="split right"> 
     
  <div className='first'>
  <h1>DY Tracker</h1>
  <br></br>
<br></br>
</div>
<div className='second'>
<Button component={Link} to="/SigninType" variant="contained" color="primary">
  Sign in
</Button>
<br></br>
<br></br>
<Button component={Link} to="/SignupType" variant="contained" color="primary">
  Sign up
</Button>
  </div>
  </div>
  </div>
  
   

);


}
export default Home;

