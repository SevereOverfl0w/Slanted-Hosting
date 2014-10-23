/** @jsx React.DOM */

var React           = require('react'),
    Header          = require('./global/header.jsx'),
    SkewedFeatures  = require('./home/features.jsx'),
    Footer          = require('./global/footer.jsx'),
    Products        = require('./home/products.jsx'),
    StaffList       = require('./home/staff.jsx');

/*jshint ignore:start*/
var Page = React.createClass({
  render: function(){
    return(
      <div className="fullSizeWrapper">
        <Header />
        <SkewedFeatures />
        <Products />
        <div className="stylizedSpacer">

        </div>
        <StaffList />
        <Footer />
      </div>
    );
  }
});

React.renderComponent(
  <Page />,
  document.getElementById('render')
);
/*jshint ignore:end*/
