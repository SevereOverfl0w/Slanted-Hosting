/** @jsx React.DOM */

var React = require('react');

/*jshint ignore:start */
var FooterSitemap = React.createClass({
  render: function(){
    return(
      <ul>

      </ul>
    );
  }
});
/*jshint ignore:end */

/*jshint ignore:start */
var Footer = React.createClass({
  render: function(){
    return(
      <footer>
        <FooterSitemap />
      </footer>
    );
  }
});
/*jshint ignore:end */


module.exports = Footer;
