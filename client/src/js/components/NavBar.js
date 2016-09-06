var React=require('react');
var {Link}=require('react-router');
var NavBar=React.createClass({
  render:function(){
    return(

<div className="container-fluid">
  <ul className="nav navbar-nav">
    <li><Link to="/home">Home7</Link></li>
    <li><Link to="/manageparticipant">ManageParticipant</Link></li>
    <li><Link to="/getelementbyid">get element by id</Link></li>

  </ul>
</div>
  );
  }
});
module.exports=NavBar
