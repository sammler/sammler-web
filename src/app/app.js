import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'app'
})
@View({
  template: `<div>Hello from Angular2!</div>`
})
export default class App {

}

bootstrap(App);
