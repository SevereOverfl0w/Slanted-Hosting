/** @jsx React.DOM */

var React = require('react');

/*jshint ignore:start */
var FooterSitemap = React.createClass({
  render: function(){
    var sitemap = this.props.sitemap.map(function(link){
      return(
        <li>
          <a href={link.target}>
            {link.text}
          </a>
        </li>
      );
    });
    return(
      <div>
        <h4>Sitemap</h4>
        <ul>
          {sitemap}
        </ul>
      </div>
    );
  }
});
/*jshint ignore:end */

//Fix this later to pull from JSON
/* jshint ignore:start */
var LimitedLiability = React.createClass({
  render: function(){
    return(
      <div>
        <h4>Acixs, LLC</h4>
        <p>Acixs, LLC is a limited liability company based out of Key West, FL.</p>
        <p>770 APPLEYARD DR.<br />
        4H<br />
        TALLAHASSEE, FL 32304</p>
        <a href="http://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail/DocumentNumber/flal-l13000177210-f4e6a7a4-da0f-44c3-93d9-00dbdffcea0f/L13000177210/Page1">
          View LLC
        </a>
      </div>
    );
  }
});
/*jshint ignore:end */

/* jshint ignore:start */
var Promotions = React.createClass({
  render: function(){
    return(
      <div>
        <h4>Promotions</h4>
        <img src="app/img/promo.svg" width="250"/>
      </div>
    );
  }
});
/*jshint ignore:end */

/*jshint ignore:start */
var MadeWithLove = React.createClass({
  render: function(){
    return(
      <p>
        Made with <span className="ion-heart"></span> by <a href="http://32dev.com">Matt Wisniewski</a>.
      </p>
    );
  }
});
/*jshint ignore:end */

/*jshint ignore:start */
var Footer = React.createClass({
  getInitialState: function(){
    return{
      sitemap: [],
      footer: {}
    };
  },
  loadJSON: function(){
    $.ajax({
      url: 'configs/sitemap.json',
      dataType: 'json',
      success: function(data){
        this.setState({
          sitemap: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  loadOtherJSON: function(){
    $.ajax({
      url: 'configs/footer.json',
      dataType: 'json',
      success: function(data){
        this.setState({
          footer: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.loadJSON();
  },
  render: function(){
    return(
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <FooterSitemap sitemap={this.state.sitemap}/>
            </div>
            <div className="col-sm-3">
              <LimitedLiability footer={this.state.footer} />
            </div>
            <div className="col-sm-6">
              <Promotions />
            </div>
          </div>
          <div className="row withlove">
            <MadeWithLove />
          </div>
        </div>
      </footer>
    );
  }
});
/*jshint ignore:end */


module.exports = Footer;
