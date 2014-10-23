/** @jsx React.DOM */

var React = require('react');

var NavbarLinks = React.createClass({
  render: function(){
    var navLinks = this.props.data.map(function(link){
      var dropdown = function(){
        if(typeof(link.dropdown) !== 'undefined'){
          return(
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li class="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          );
        }
      };
      return(
        <li id={link.id} className={link.class}>
          <a className="navLinks" href={link.target} title={link.text}>
            <span className={link.icon + " hiddenCon"}></span> <span className="text">{link.text}</span>
          </a>
          {dropdown}
        </li>
      );
    });
    return(
      <ul className="nav navbar-nav">
        {navLinks}
      </ul>
    )
  }
});

var Navbar = React.createClass({
  getInitialState: function(){
    return{
      data : []
    };
  },
  loadNavbarJSON: function() {
    $.ajax({
      url: "configs/navbar.json",
      dataType: 'json',
      success: function(data) {
        this.setState({
          data: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.loadNavbarJSON();
  },
  render: function(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="btn btn-primary sidebarToggler">
              <img src="app/img/logo.png" width="100"/>
            </button>
          </div>
          <NavbarLinks data={this.state.data} />
        </div>
      </nav>
    );
  }
});


module.exports = Navbar;
