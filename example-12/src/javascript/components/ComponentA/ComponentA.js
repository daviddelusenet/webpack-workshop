import {Component} from 'component-loader-js';

class ComponentA extends Component {

  constructor() {

    super(...arguments);
    console.info('Init Component A');

  }

  destroy() {

    super.destroy();

  }

}

export default ComponentA;
