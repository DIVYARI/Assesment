var React=require('react');
var GetEmpById=React.createClass({
  getInitialState:function(){
    return({empcodecheck:''})
  },
  getidsave:function(e){
this.setState({empcodecheck:e.target.value});
  },
  getid:function(){

             $.ajax({
                    url: '/getting',
                    dataType: 'json',
                    type: 'PUT',
                    data:this.state,

              success: function(response)
              {
                //console.log("Inside success"+JSON.stringify(this));



                console.log("Success");

              //  alert("message sent");
              }.bind(this),
              
              error: function(xhr, status, err) {
                console.error("Error.."+err.toString());
              }.bind(this)
            });
  },
render:function(){
  return(
    <div>
emp code:<input type="text" id="empcode" onChange={this.getidsave}/>
<button type="button" onClick={this.getid}>submit</button>
</div>
  );
}

});
module.exports=GetEmpById
