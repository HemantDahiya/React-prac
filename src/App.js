import Nav from './Component/TopBar';
import "./App.css"
import Foot from './Component/Footer';

import Cards from './Component/Cards';
// import { product } from './Component/Utils/Mocdata';
import { Component } from 'react';
import axios from 'axios';



// const App = () => consolse.log ();
class App extends Component {
  
  constructor(props){

    super(props);
     this.state={
      product :[],
      loader : true
    }
    console.log("Constructure")
  }

  componentDidMount(){
    console.log("componentDidMount")

    axios
    .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then( (res)=>this.setState
                ({product:res.data,loader :false})
            )
  }
 
 render(){ 
  console.log("Render")
  return (
    <div>
      < Nav />
      
      { this.state.loader ? (<h1>Loading...</h1>) : 
      (<div className= "card-flx">
        {this.state.product.map( (items,index) => < Cards  {... items} /> )}
        </div>
      )}
      
      < Foot />
      
    </div>
  );
}
}

export default App;
