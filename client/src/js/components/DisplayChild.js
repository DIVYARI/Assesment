var React=require('react');

var DisplayChild=React.createClass({


 render:function(){

   return(
  <div>
<div className="list-group-item">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-1">
        {this.props.wave}
      </div>
      <div className="col-lg-1">
{this.props.name}
      </div>
     <div className="col-lg-2">
     {this.props.email}

            </div>
            <div className="col-lg-1">
            {this.props.exp}

                   </div>
                   <div className="col-lg-1">
                   {this.props.giturl}

                          </div>
                          <div className="col-lg-1">
                          {this.props.empcode}

                                 </div>
                                 <div className="col-lg-1">
                                 {this.props.empdep}

                                        </div>
                                        <div className="col-lg-1">
                                        {this.props.skill}

                                               </div>
          </div>
      </div>
   </div>


  </div>


   );

 }
});
module.exports=DisplayChild
