// Import the styling
import './../scss/App.scss';

// Import the ComponentLoader
import ComponentLoader      from 'component-loader-js';

// Import the components
import ComponentA           from 'ComponentA/ComponentA';
import ComponentB           from 'ComponentB/ComponentB';

// Scan for components on page load
document.addEventListener('DOMContentLoaded', () => {

  const componentLoader = new ComponentLoader({
    ComponentA,
    ComponentB
  });

  // Call scan() to instantiate any components found in the DOM
  componentLoader.scan();

  if (module.hot) {
    module.hot.accept(function(err) {
      if (err) {
        console.error(err);
      }
    })
  }

});
