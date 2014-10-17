/** @jsx React.DOM */

var React = require('react');

var FeaturesList = React.createClass({
  render: function(){
    var featuresList = this.props.data.map(function(feat){
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
      data : []
    };
  },
  loadNavbarJSON: function() {
    $.ajax({
      url: "app/js/configs/homepageFeatures.json",
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
  componentDidMount: function(){
    this.loadNavbarJSON();
  },
  render: function(){
    return(
      <div className="primary">
        <div className="skew-pos slanty">
          <div className="skew-neg">
            <FeaturesList data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SkewedFeatures;
