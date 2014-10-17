/** @jsx React.DOM */

var React = require('react');

var FeaturesList = React.createClass({
  render: function(){
    var featuresList = this.props.features.map(function(feat){
      return(
        <div className="panel panel-default feat">
          <div className="panel-heading"><span className={feat.icon}></span> {feat.text}</div>
          <div className="panel-body">
            {feat.subtext}
          </div>
        </div>
      );
    });
    return(
      <div className="featuresList">
        {featuresList}
      </div>
    );
  }
});

var SkewedFeatures = React.createClass({
  getInitialState: function(){
    return{
      features : []
    };
  },
  loadFeaturesJSON: function() {
    $.ajax({
      url: "app/js/configs/homepageFeatures.json",
      dataType: 'json',
      success: function(data) {
        this.setState({
          features: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.loadFeaturesJSON();
  },
  render: function(){
    return(
      <div className="primary">
        <div className="skew-pos slanty">
          <div className="skew-neg">
            <FeaturesList features={this.state.features} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SkewedFeatures;
