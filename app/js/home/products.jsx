/**@jsx React.DOM */

var React = require('react');

var Product = React.createClass({
  render: function(){
    var Products = this.props.products.map(function(product){
      var Links = product.specs.split(',').map(function(link){
        return(
            <li>
              {link}
            </li>
          );
      });
      return(
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="offer offer-success">
            <div className="shape">
              <div className="shape-text">
                {product.price}
              </div>
            </div>
            <div className="offer-content">
              <h3 className="lead">
                {product.name}
              </h3>
              <p>
                {Links}
              </p>
              <a href={product.link}>
                <button className="ghosty ghosty_alt">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        </div>
      );
    });
    return(
      <div className="container">
        {Products}
      </div>
    );
  }
});

/*jshint ignore:start*/
var Products = React.createClass({
  getInitialState: function(){
    return{
      products : []
    };
  },
  loadProductsJSON: function() {
    $.ajax({
      url: "configs/products.json",
      dataType: 'json',
      success: function(data) {
        this.setState({
          products: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.loadProductsJSON();
  },
  render: function(){
    return(
    <div className="products skew-pos">
      <a id="gethosted"></a>
      <div className="skew-neg">
        <div className="container">
          <h1>Get Hosted</h1>
          <Product products={this.state.products}/>
        </div>
      </div>
    </div>
    );
  }
});
/*jshint ignore:end*/

module.exports = Products;
