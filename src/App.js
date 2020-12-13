import React from 'react';
import logo from './logo.svg';



import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';





//import DashboardComponent from './DashboardComponent';
//import Apitokentesting from './Apitokentesting';

// import Users from './Users';
// import UsersEdit from './UsersEdit';
// import List from './components/list';
// import Userscart from './Userscart';
// import Carts from './Carts';
import Coached from './Coached';

function App() {
  return (
    <Router>
    <div className="App">
      
    <Switch>
    
         
         
           {/* <Route path="/dashboard">
            
            <DashboardComponent></DashboardComponent>
          </Route> */}
          {/* <Route path="/users">
            
            <Users></Users>
          </Route>
          <Route path="/list">
            
            <List></List>
          </Route>
          <Route path="/cart">
            
            <Userscart></Userscart>
          </Route>

          <Route path="/items">
            
            <Carts></Carts>
          </Route>

          <Route path="/usersedit/:id">
            
            <UsersEdit></UsersEdit>
          </Route> */}

          <Route path="/coached">
            <Coached></Coached>
            </Route>
            <Route path="/">
            
            <Coached></Coached>
          </Route>
          {/* <Route path="/">
            
          <Userscart></Userscart>
          </Route> */}
         
      </Switch>
   
    </div>
    </Router>
  );
}

export default App;
