/**@jsx React.DOM */

var React = require('react');

/*jshint ignore:start*/
var Product = React.createClass({
  render: function(){
    var Products = this.props.products.map(function(product){
      var Specs = product.specs.split(',').map(function(specs){
        return(
            <li>
              {specs}
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
                <ul>
                  {Specs}
                </ul>
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
/*jshint ignore:end*/

/*jshint ignore:start*/

var MinecraftButton = React.createClass({
  render: function(){
    return(
      <li onClick={this.props.onClick}>
        <span data-serviceType="Minecraft" className="ion-cube icon"></span><br />
        Minecraft
      </li>
    );
  }
});

var WebHostingButton = React.createClass({
  render: function(){
    return(
      <li onClick={this.props.onClick}>
        <span data-serviceType="WebHosting" className="ion-ios7-world icon"></span><br />
        Web Hosting
      </li>
    );
  }
});

var VPSHostingButton = React.createClass({
  render: function(){
    return(
      <li onClick={this.props.onClick}>
        <span data-serviceType="VPSHosting" className="ion-cloud icon"></span><br />
        VPS Hosting
      </li>
    );
  }
});

/*jshint ignore:end*/


/*jshint ignore:start*/
var Products = React.createClass({
  getInitialState: function(){
    return{
      products : []
    };
  },
  loadMinecraftJSON: function() {
    $.ajax({
      url: "configs/productsMinecraft.json",
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
  loadVPSJSON: function() {
    $.ajax({
      url: "configs/productsVPS.json",
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
  loadWebJSON: function() {
    $.ajax({
      url: "configs/productsWeb.json",
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
    this.loadMinecraftJSON();
  },
  render: function(){
    return(
    <div className="products skew-pos">
      <a id="gethosted"></a>
      <div className="skew-neg">
        <div className="container">
          <h1>Get Hosted</h1><br /><br /><br />
            <ul className="productSelection">
              <MinecraftButton onClick={this.loadMinecraftJSON} />
              <WebHostingButton onClick={this.loadWebJSON} />
              <VPSHostingButton onClick={this.loadVPSJSON} />
            </ul>
            <Product products={this.state.products}/>
        </div>
      </div>
    </div>
    );
  }
});
/*jshint ignore:end*/

module.exports = Products;
