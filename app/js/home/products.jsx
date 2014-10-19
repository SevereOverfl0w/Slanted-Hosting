/**@jsx React.DOM */

var React = require('react');

/*jshint ignore:start*/
var Products = React.createClass({
  render: function(){
    return(
    <div className="products skew-pos">
      <a id="gethosted"></a>
      <div className="skew-neg">
        <div className="container">
          <h1>Get Hosted</h1>
        </div>
      </div>
    </div>
    );
  }
});
/*jshint ignore:end*/

module.exports = Products;
