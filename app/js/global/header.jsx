/** @jsx React.DOM */

var React = require('react');
var Navbar = require('./navbar.jsx');


$.fn.gotoAnchor = function(anchor) {
    location.href = '#' + this.selector;
};

/*jshint ignore:start*/
var ContinueBtn = React.createClass({
  render: function(){
    return(
      <div className="continueBtnWrapper">
        <button onClick={this.props.handleClick} className="ghosty">
          Get Hosted!
        </button>
      </div>
    );
  }
});
/*jshint ignore:end*/

/*jshint ignore:start*/
var HeaderIconFeatures = React.createClass({
  render: function(){
    var iconFeatures = this.props.icon.map(function(iconFeature){
      return(
        <li>
            <span className={iconFeature.icon}></span><br />
            <span className="smaller">{iconFeature.text}</span>
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
  loadIconJSON: function() {
    $.ajax({
      url: "configs/headerFeatures.json",
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
  handleClick: function(){
    $('gethosted').gotoAnchor();
  },
  render: function(){
    return(
      <div className="header">
        <HeaderIconFeatures icon={this.state.icon}/>
        <ContinueBtn handleClick={this.handleClick} />
        <video className="bgvid" loop autoPlay>

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
