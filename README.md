# SNA
Node.js and React based Demo Project for SkyNet

Scss is placed with each corresponding component, and imported in the component's js.

Bundled using webpack, which handles es6, jsx, and scss conversion

App is composed of:
  Components: React components to be rendered for pages.
  public: This folder holds static files that are served by express;
  Routes: Corresponding js for views. Handle Loading an initial component and rendering
  Utilities: Functions that components can import and use. Currently only includes a module for formatting dates
  Views: The views that are served by Express. Currently only includes index, which handles displaying all information


There are definitely a lot of features that need to be added. A few good features that I couldn't get to could be:
  -Saving last searched location and showing that location on load instead of asking for location first.
  -Replacing large libraries. Chart.js and rc-slider are pretty big, and can definitely be replaced with something more lightweight (assuming the full app doesn't need to use those libraries to their fullest);
  -Optimization of components and data model with Redux.
  -More responsive css, specifically for the daily table. The table should only display 2 or so listings per row after a certain min screen width.
  -Allow searching of lat/longs as well
  -Google Maps currently isn't async or deferred.
  -Redirecting all links that aren't to the homepage to either a nice 404 page or to home.
  -TESTING! Seriously. Enzyme/Mocha would be pretty good.

Really cool weather icons from https://codepen.io/joshbader/pen/EjXgqr
