import {Component} from 'component-loader-js';

class ComponentB extends Component {

  constructor() {

    super(...arguments);
    console.info('Init Component B');

  }

  destroy() {

    super.destroy();

  }

}

export default ComponentB;
