/**
 * Created by idan on 15/05/2017.
 */
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() tabClick = new EventEmitter<string>();

  tabClicked(tabName: string) {
    this.tabClick.emit(tabName);
  }
}
