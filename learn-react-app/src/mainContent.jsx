import React,{Component} from "react";

export default class MainContent extends Component{
  state = {
      pagetitle : "Blood-donate",
      donarscount : 160,
      donardetails:[
          {id:1,name:"Kadir",phone:923456789,address:{city:"Chennai"}},
          {id:2,name:"Anand",phone:946456789,address:{city:"Madurai"}},
          {id:3,name:"Sankar",phone:963456789,address:{city:"Coimbatore"}},
          {id:4,name:"Ram",phone:985456789,address:{city:"Banglore"}},
          {id:5,name:"KKumar",phone:923456789,address:{city:"Pune"}},
      ]
  };

  render(){
    return (
    <div>
     <h4 className="border-bottom m-1 p-1">{this.state.pagetitle}
     <span className="badge-secondary m-2">{this.state.donarscount}</span>
     
     <button className="btn btn-info" onClick={this.onrefreshclick}>Refresh</button>
     
     </h4>

     <table className="table">
         <thead>
            <tr>
                <th>Doner ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>City</th>
            </tr>
         </thead>
         <tbody>
            {
            this.state.donardetails.map((cust)=>{
            return(   
                 <tr key={cust.id}>
                 <td>{cust.id}</td>
                 <td>{cust.name}</td>
                 <td>{cust.phone}</td>
                 <td>{cust.address.city}</td>
             </tr>
            );
            })
            }
             
         </tbody>
     </table>
     </div>
    );
  }

  //excutes when user click on refresh button
  onrefreshclick = () => {
    this.setState({
        donarscount:340
    });
  }
}