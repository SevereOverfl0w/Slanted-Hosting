/**@jsx React.DOM */

var React = require('react');

var StaffList = React.createClass({
  render: function(){
    var allstaff = this.props.staffMem.map(function(staffMember){
      return(
        <div className="avatar">
         <a href={staffMember.link} target="_blank" data-toggle="tooltip" data-placement="top" title={staffMember.name}>
          <img src={staffMember.image} className="user"/>
         </a>
         <br/>
         <h5>{staffMember.name}<br />
          <span className="title">{staffMember.title}</span>
         </h5>
        </div>
      );
    });
    return(
      <div className="staff">
        {allstaff}
      </div>
    );
  }
});

var Staff = React.createClass({
  getInitialState: function(){
    return{
      staff: []
    };
  },
  loadJSON: function(){
    $.ajax({
      url: 'configs/staff.json',
      dataType: 'json',
      success: function(data){
        this.setState({
          staff: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.loadJSON();
  },
  render: function(){
    return(
      <div className="primary">
        <div className="staff skew-pos">
          <div className="container skew-neg">
            <h1>The people who make us great</h1>
            <StaffList staffMem={this.state.staff}/>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Staff;
