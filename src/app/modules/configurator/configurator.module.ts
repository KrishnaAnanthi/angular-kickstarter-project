import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NodeSelectorComponent} from './components/node-selector/node-selector.component';
import {ConfiguratorComponent} from '@configurator/configurator.component';

@NgModule({
  declarations: [NodeSelectorComponent, ConfiguratorComponent],
  imports: [CommonModule],
  exports: [NodeSelectorComponent, ConfiguratorComponent],
})
export class ConfiguratorModule {}
