/** @jsx React.DOM */

var conf = {
    companyName: "Page Name"
  };

var NavbarLinks = React.createClass({
  render: function(){
    var navLinks = this.props.data.map(function(link){
      return(
        <li id={link.id} className={link.class}>
          <a href={link.target}>
            {link.text}
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
        <div className="container-fluid container">
          <div className="navbar-header">
            <NavbarBrand />
          </div>
          <NavbarLinks data={this.state.data} />
        </div>
      </nav>
    );
  }
});

var Header = React.createClass({
  render: function(){
    return(
      <Navbar />
    );
  }
});

React.renderComponent(
  <Header />,
  document.getElementById('render')
);
