/** @jsx React.DOM */

var React = require('react');
var Header = require('./home/header.jsx');
var SkewedFeatures = require('./home/features.jsx');

var Page = React.createClass({
  render: function(){
    return(
      <div className="fullSizeWrapper">
        <Header />
        <SkewedFeatures />
      </div>
    );
  }
});

React.renderComponent(
  <Page />,
  document.getElementById('render')
);
