var React = require('react');
var ReactDOM=require('react-dom');
var {browserHistory,Route,Router,IndexRoute}=require('react-router');
var Home = require('./components/Home');
var NavBar = require('./components/NavBar');
var GetEmpById = require('./components/GetEmpById');
var ManageParticipant = require('./components/ManageParticipant');

var MainComponent=React.createClass({
render:function(){
  return(
    <div>
<NavBar/>
<br></br><br></br>
    {this.props.children}
</div>

  );
}

});
ReactDOM.render(
<Router history={browserHistory}>
  <Route path="/" component={MainComponent}>
  <Route path="/home" component={Home}/>
  <IndexRoute component={Home}/>
  <Route path="/manageparticipant" component={ManageParticipant}/>
  <Route path="/getelementbyid" component={GetEmpById}/>

  </Route>
</Router>,document.getElementById('app')
);
