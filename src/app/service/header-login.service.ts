import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeaderLoginService {
  public eventBus:Subject<string> = new Subject<string>();

  constructor() { }

}
