/** @jsx React.DOM */

/* Navigation start */

var NavbarLinks = React.createClass({
  render: function(){
    var navLinks = this.props.data.map(function(link){
      return(
        <li id={link.id} className={link.class}>
          <a className="navLinks" href={link.target} title={link.text}>
            <span className={link.icon + " hiddenCon"}></span> <span className="text">{link.text}</span>
          </a>
        </li>
      );
    });
    return(
      <ul className="nav navbar-nav">
        {navLinks}
      </ul>
    )
  }
});

var NavbarBrand = React.createClass({
  getInitialState: function(){
    return{
      data : {}
    };
  },
  loadNavbarJSON: function() {
    $.ajax({
      url: "app/js/configs/main.json",
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
      <a className="navbar-brand" href="#">{this.state.data}</a>
    );
  }
});

var Navbar = React.createClass({
  getInitialState: function(){
    return{
      data : []
    };
  },
  loadNavbarJSON: function() {
    $.ajax({
      url: "app/js/configs/navbar.json",
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
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="btn btn-primary sidebarToggler"><span className="ion-navicon-round"></span></button>
          </div>
          <NavbarLinks data={this.state.data} />
        </div>
      </nav>
    );
  }
});

/* Navigation End */



var HeaderWelcome = React.createClass({
  render: function(){
    return(
      <p>test</p>
    );
  }
});


/*



/* Header Start */

var Header = React.createClass({
  getInitialState: function(){
    return{
      data : {}
    };
  },
  loadNavbarJSON: function() {
    $.ajax({
      url: "app/js/configs/main.json",
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
      <div className="header">
        <video className="bgvid" loop autoPlay>
          <source src="app/vid/back.mp4" type="video/mp4" />
        </video>
        <h1 className="slogan">
          {this.state.data.slogan}
        </h1>
        <Navbar />
      </div>
    );
  }
});

/*Header End */

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


var Page = React.createClass({
  render: function(){
    return(
      <div className="fullSizeWrapper">
        <Header />
        <SkewedFeatures />
      </div>
    );
  }
});

React.renderComponent(
  <Page />,
  document.getElementById('render')
);
