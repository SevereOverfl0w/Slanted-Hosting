/** @jsx React.DOM */

var React           = require('react'),
    Header          = require('./global/header.jsx'),
    SkewedFeatures  = require('./home/features.jsx'),
    Footer          = require('./global/footer.jsx'),
    Products        = require('./home/products.jsx');

var Page = React.createClass({
  render: function(){
    return(
      <div className="fullSizeWrapper">
        <Header />
        <SkewedFeatures />
        <Products />
        <Footer />
      </div>
    );
  }
});

React.renderComponent(
  <Page />,
  document.getElementById('render')
);
