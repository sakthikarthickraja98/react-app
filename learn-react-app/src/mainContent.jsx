import React,{Component} from "react";

export default class MainContent extends Component{
  state = {
      apptitle : "Blood-donate"
  };

  render(){
    return (
     <div className="border-bottom m-1 p-1">{this.state.apptitle}</div>
    );
  }
}