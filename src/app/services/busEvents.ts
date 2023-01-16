import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class BusService {
  private token = new BehaviorSubject<string>('');

  sendToken = this.token.asObservable();

  constructor() {}

  transferToken(token: string): void{
    this.token.next(token);
  }
}
