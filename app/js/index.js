/** @jsx React.DOM */

/*jshint ignore:start */
var Header = React.createClass({
  render: function(){
    return(
      <div className="header">
        test
      </div>
    );
  }
});
/*jshint ignore:end */

/*jshint ignore:start */
React.renderComponent(
  <Header />,
  document.getElementById('render')
);
/*jshint ignore:end */
