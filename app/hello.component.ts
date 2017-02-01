import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Component, Input} from '@angular/core';
import {HelloComponentProperties} from './hello-component-properties.model';

@Component({
  selector: 'react-component',
  template: '<div [id]="id">wrapper</div>'
  ,
  inputs: ['component', 'props']
})
export class ReactComponent {
  @Input() component: any;
  @Input() properties: HelloComponentProperties;

  id: string;
  domElement: any;

  ngOnInit() {
    this.id = 'id';
  }

  ngAfterViewInit() {
    this.domElement = document.getElementById(this.id.toString());
    this.renderReactComponent();
  }

  ngOnChanges() {
    if (this.domElement) {
      this.renderReactComponent();
    }
  }

  renderReactComponent() {
    ReactDom.render(React.createElement(this.component, this.properties), this.domElement);
  }
}
