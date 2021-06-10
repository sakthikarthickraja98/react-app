import React,{Component} from "react";

export default class MainContent extends Component{
  state = {
      pagetitle : "Blood-donate",
      donerscount : 160
  };

  render(){
    return (
    <div>
     <h4 className="border-bottom m-1 p-1">{this.state.pagetitle}
     <span className="badge-secondary m-2">{this.state.donerscount}</span>
     
     <button className="btn btn-info" onClick={this.onrefreshclick}>Refresh</button>
     
     </h4>
     </div>
    );
  }

  //excutes when user click on refresh button
  onrefreshclick(){
      console.log("Refresh Clicked")
  }
}