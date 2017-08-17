import {Component} from 'component-loader-js';

class Bar extends Component {

  constructor() {

    super(...arguments);
    console.info('Init Bar');

  }

  destroy() {

    super.destroy();

  }

}

export default Bar;
