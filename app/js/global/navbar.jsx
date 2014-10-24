/** @jsx React.DOM */

var React = require('react');

var NavbarLinks = React.createClass({
  render: function(){
    var navLinks = this.props.data.map(function(link){
      if (link.dropdown){
        var allDropdowns = link.dropdown_content.map(function(link){
          return(
              <li><a href={link.target}>{link.text}</a></li>
          );
        });
        var constructedDropdown = function(){
          console.log("test");
          return(
            <ul class="dropdown-menu" role="menu">

              {navLinks}
            </ul>
          );
        };
      }
      return(
        <li id={link.id} className={link.class}>
          <a className="navLinks dropdown-toggle" href={link.target} title={link.text} data-toggle={link.data}>
            <span className={link.icon + " hiddenCon"}></span> <span className="text">{link.text}</span>
          </a>
          <ul className="dropdown-menu" role="menu">
          {allDropdowns}
          </ul>
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
