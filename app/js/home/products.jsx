/**@jsx React.DOM */

var React = require('react');

var Product = React.createClass({
  render: function(){
    return(
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
  			<div className="offer offer-success">
  				<div className="shape">
  					<div className="shape-text">
  						$21.99
  					</div>
  				</div>
  				<div className="offer-content">
  					<h3 className="lead">
  						A success offer
  					</h3>
  					<p>
  						And a little description.
  						<br /> and so one

  					</p>
            <button className="ghosty ghosty_alt">
              Buy Now
            </button>
  				</div>
  			</div>
  		</div>
    );
  }
});

/*jshint ignore:start*/
var Products = React.createClass({
  render: function(){
    return(
    <div className="products skew-pos">
      <a id="gethosted"></a>
      <div className="skew-neg">
        <div className="container">
          <h1>Get Hosted</h1>
          <Product />
        </div>
      </div>
    </div>
    );
  }
});
/*jshint ignore:end*/

module.exports = Products;
