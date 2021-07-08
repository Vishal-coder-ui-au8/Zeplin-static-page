import React from "react";
import Header from "./components/container1";
import Top from "./components/conatiner2";
import Middle from "./components/container3";
import Semi from './components/container4';
import Bottom from "./components/container5";
class App extends React.Component { 
  render() {      
    return (
      <div>
          <Header />
          <Top /> 
          <Middle />
          <Semi />
          <Bottom />
      </div>
    );
  }
}
export default App;
