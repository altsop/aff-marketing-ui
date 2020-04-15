import '../../../assets/scss/sidebar.scss';
import { bindable } from 'aurelia-framework';

export class AffAdminSidebar {

  @bindable current;

  AffAdminSidebar() {
    this.opened = true;
  }

  navigateTo(navigateNext) {
    this.current = navigateNext;
  }

  slide() {
    this.opened = !this.opened;
  }

}
