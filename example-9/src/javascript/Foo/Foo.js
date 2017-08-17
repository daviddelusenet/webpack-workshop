import {Component} from 'component-loader-js';

class Foo extends Component {

  constructor() {

    super(...arguments);
    console.info('Init Foo');

  }

  destroy() {

    super.destroy();

  }

}

export default Foo;
