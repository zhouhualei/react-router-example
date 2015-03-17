var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Header = React.createClass({
  render: function () {
    return (
    <header>
      <ul>
        <li><Link to="app">Dashboard</Link></li>
        <li><Link to="inbox">Inbox</Link></li>
        <li><Link to="calendar">Calendar</Link></li>
      </ul>
      Logged in as Jane
    </header>
    );
  }
});

var Inbox = React.createClass({
  render: function () {
    return (
      <div>
        <span>Inbox</span>
      </div>
    );
  }
});

var Calendar = React.createClass({
  render: function () {
    return (
      <div>
        <span>Calendar</span>
      </div>
    );
  }
});

var Dashboard = React.createClass({
  render: function () {
    return (
      <div>
        <span>Dashboard</span>
      </div>
    );
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox}/>
    <Route name="calendar" handler={Calendar}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
