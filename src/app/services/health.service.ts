import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HealthService {
  private hp: number = 100;

  constructor() {}

  get Hp() {
    return this.hp;
  }

  set Hp(value: number) {
    this.hp = value;
  }

  calcHp(damage: number) {
    this.hp = this.hp - damage;
    return this.hp;
  }

  resetHp() {
    this.hp = 100;
  }
}
