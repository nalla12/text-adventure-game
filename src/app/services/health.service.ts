import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  private hp: number = 100;
  public onHpUpdateEvent = new EventEmitter<number>();

  constructor() {}

  get Hp() {
    return this.hp;
  }

  set Hp(value: number) {
    this.hp = value;
  }

  resetHp() {
    this.hp = 100;
  }

  public decreaseHp(value: number) {
    this.hp -= Number(value);
    this.onHpUpdateEvent.emit(this.hp);
  }

  public increaseHp(value: number) {
    this.hp += Number(value);
    this.onHpUpdateEvent.emit(this.hp);
  }
}
