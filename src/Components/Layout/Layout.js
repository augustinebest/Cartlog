import React from 'react';
import Navigation from '../Navigation/Navigation';

class Layout extends React.Component {
//    state = {
//        authenticated : false
//    }
   render() {
    // const myComponent =  this.state.authenticated = true ? <Navigation /> :<div> "Please log in to get started"</div> 
    // console.log(myComponent);   
        return (
                  <div>
                      {/* {myComponent} */}
                      <Navigation />
                    </div>  
        )
    }
}

export default Layout;