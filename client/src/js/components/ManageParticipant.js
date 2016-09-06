var React=require('react');
var Display=require('./Display');
var ManageParticipant=React.createClass({
  getInitialState:function(){
  return ({empdata:[],wave:'wave',name:'name',email:'email',phone:'phone',giturl:'git',empcode:'code',empdep:'dep',empdesig:'desig',skill:'skill',exp:'exp'});
},

  saving:function(){
    $.ajax({
              url: '/save',
              dataType: 'json',
              contentType: "application/json",
              type: 'POST',
              data: JSON.stringify({wave:this.state.wave,name:this.state.name,email:this.state.email,phone:this.state.phone,giturl:this.state.giturl,empcode:this.state.empcode,empdep:this.state.empdep,empdesig:this.state.empdesig,skill:this.props.skill,exp:this.state.exp}),

        success: function(data)
        {
          console.log("Success");


        }.bind(this),

        error: function(xhr, status, err) {
          console.error("Error.."+err.toString());
        }.bind(this)
      });
  },
  handleSelect:function (e) {
    console.log(e.target.value);
    var w=e.target.value;
    this.setState({wave:w});
    //console.log(this.state.wave);
  },
  HandleName:function(e){
      var w=e.target.value;
      this.setState({name:w});
  },
  HandleEmail:function(e){
      var w=e.target.value;
      this.setState({email:w});
  },
  HandlePhone:function(e){
      var w=e.target.value;
      this.setState({phone:w});
  },
  HandleGit:function(e){
      var w=e.target.value;
      this.setState({giturl:w});
  },
  HandleCode:function(e){
      var w=e.target.value;
      this.setState({empcode:w});
  },
  HandleDep:function(e){
      var w=e.target.value;
      this.setState({empdep:w});
  },
  HandleDesig:function(e){
      var w=e.target.value;
      this.setState({empdesig:w});
  },
  HandleSkill:function(e){
      var w=e.target.value;
      this.setState({skill:w});
  },
  HandleExp:function(e){
      var w=e.target.value;
      this.setState({exp:w});
  },
render:function(){
//console.log(this.state);
console.log(this.state.empdata);
  return(
<div>

<div className="container">
<div className="form-group">
  <label className="control-label col-sm-2" htmlFor="wave">wave</label>
  <div className="col-sm-4">

    <select className="form-control" id="wave" onChange={this.handleSelect}>
  <option value="wave1" name='wave'>wave1</option>
  <option value="wave2" name='wave'>wave2</option>
  <option value="wave3" name='wave'>wave3</option>
  <option value="wave4" name='wave'>wave4</option>
</select>
  </div>
</div>

<div className="form-group">
  <label className="control-label col-sm-2" htmlFor="name">name</label>
  <div className="col-sm-4">
    <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={this.HandleName}/>
  </div>
</div>
  <div className="form-group">
    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
    <div className="col-sm-4">
      <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={this.HandleEmail}/>
    </div>
  </div>

  <div className="form-group">
    <label className="control-label col-sm-2" htmlFor="phone">phone</label>
    <div className="col-sm-4">
      <input type="text" className="form-control" id="phone" placeholder="Enter phone" onChange={this.HandlePhone}/>
    </div>
  </div>

  <div className="form-group">
    <label className="control-label col-sm-2" htmlFor="empcode">empcode</label>
    <div className="col-sm-4">
      <input type="text" className="form-control" id="empcode" placeholder="Enter code" onChange={this.HandleCode}/>
    </div>
  </div>


  <div className="form-group">
    <label className="control-label col-sm-2" htmlFor="empdep">empdep</label>
    <div className="col-sm-4">
      <input type="text" class="form-control" id="empdep" placeholder="Enter email" onChange={this.HandleDep}/>
    </div>
  </div>
  <div className="form-group">
    <label className="control-label col-sm-2" htmlFor="empdesig">empdesig</label>
    <div className="col-sm-4">
      <input type="text" class="form-control" id="empdesig" placeholder="Enter desig" onChange={this.HandleDesig}/>
    </div>
  </div>
  <div className="form-group">
    <label className="control-label col-sm-2" htmlFor="skill">skill</label>
    <div className="col-sm-4">

      <textarea className="form-control" id="skill" onChange={this.HandleSkill}></textarea>
    </div>
  </div>
  <div className="form-group">
    <label className="control-label col-sm-2" htmlFor="exp">exp</label>
    <div className="col-sm-4">

  <input type="text" className="form-control" id="exp" placeholder="Enter exp" onChange={this.HandleExp}/>
    </div>
  </div>
  <div className="form-group">
    <div className="col-sm-offset-2 col-sm-10">
      <button type="submit" className="btn btn-success" onClick={this.saving}>Submit</button>
    </div>
  </div>
</div>
<Display empdata={this.state.empdata}/>
</div>
  );
},
componentDidMount:function(){


         $.ajax({
                url: '/view',
                dataType: 'json',
                type: 'GET',


          success: function(response)
          {
            //console.log("Inside success"+JSON.stringify(this));
            this.setState({empdata:response});


            console.log("Success");

          //  alert("message sent");
          }.bind(this),
          async: false,
          error: function(xhr, status, err) {
            console.error("Error.."+err.toString());
          }.bind(this)
        });
},

});
module.exports=ManageParticipant
