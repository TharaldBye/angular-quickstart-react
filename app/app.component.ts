import {Component, OnInit} from '@angular/core';
import HelloComponent from './hello-component';
import {HelloComponentProperties} from "./hello-component-properties.model";

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} <react-component [component]="myComponent" [properties]="myProperties"></react-component></h1>`
})
export class AppComponent {
  name = 'Angular';

  myComponent = HelloComponent;
  myProperties: HelloComponentProperties = new HelloComponentProperties('Hello world!!!', 'react component');
}
