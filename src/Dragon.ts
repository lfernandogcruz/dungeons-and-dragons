import Fighter, { SimpleFighter } from './Fighter';
import Monster from './Monster';

class Dragon extends Monster {
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    super();
    this._lifePoints = 999;
    this._strength = 499;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this.strength;
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints;
    this._lifePoints -= damage;
    if (this._lifePoints < 1) this._lifePoints = -1;
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter | Fighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }
}

export default Dragon;
