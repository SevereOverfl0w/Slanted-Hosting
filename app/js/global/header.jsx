/** @jsx React.DOM */

var React = require('react');
var Navbar = require('./navbar.jsx');

/*jshint ignore:start*/
var HeaderIconFeatures = React.createClass({
  render: function(){
    var iconFeatures = this.props.icon.map(function(iconFeature){
      return(
        <li>
          <a href={iconFeature.target} title={iconFeature.text}>
            <span className={iconFeature.icon}></span><br />
            <span className="smaller">{iconFeature.text}</span>
          </a>
        </li>
      );
    });
    return(
      <ul className="iconFeatures">
        {iconFeatures}
      </ul>
    );
  }
});
/*jshint ignore:end*/

/*jshint ignore:start*/
var Header = React.createClass({
  getInitialState: function(){
    return{
      data : {},
      icon : []
    };
  },
  loadNavbarJSON: function() {
    $.ajax({
      url: "app/js/configs/main.json",
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
  loadIconJSON: function() {
    $.ajax({
      url: "app/js/configs/headerFeatures.json",
      dataType: 'json',
      success: function(data) {
        this.setState({
          icon: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.loadNavbarJSON();
    this.loadIconJSON();
  },
  render: function(){
    return(
      <div className="header">
        <HeaderIconFeatures icon={this.state.icon}/>
        <video className="bgvid" loop autoPlay>
          <source src="app/vid/back.mp4" type="video/mp4" />
        </video>
        <h1 className="slogan">
          {this.state.data.slogan}<br />
          <span className="subSlogan">{this.state.data.subSlogan}</span>
        </h1>
        <Navbar />
      </div>
    );
  }
});
/*jshint ignore:end*/

module.exports = Header;
