/** @jsx React.DOM */

var React = require('react');

var NavbarLinks = React.createClass({
  render: function(){
    var navLinks = this.props.data.map(function(link){
      return(
        <li id={link.id} className={link.class}>
          <a className="navLinks" href={link.target} title={link.text}>
            <span className={link.icon + " hiddenCon"}></span> <span className="text">{link.text}</span>
          </a>
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

var NavbarBrand = React.createClass({
  getInitialState: function(){
    return{
      data : {}
    };
  },
  loadNavbarJSON: function() {
    $.ajax({
      url: "configs/main.json",
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
      <a className="navbar-brand" href="#">{this.state.data}</a>
    );
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
