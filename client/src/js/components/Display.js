var React=require('react');
var DisplayChild=require('./DisplayChild');

var Display=React.createClass({

  render:function(){
    console.log("in child"+this.props.empdata);
    var msg= this.props.empdata.map(function(e){




      return(

            <DisplayChild name={e.name} email={e.email} wave={e.wave} phone={e.phone} empdep={e.empdep} empcode={e.empcode} skill={e.skill} exp={e.exp} giturl={e.giturl} id={e._id}></DisplayChild>

      );


        },this);

    return(
     <div>



          <p>  {msg}</p>



        </div>

    );
  }
});
module.exports=Display
