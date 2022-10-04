import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
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

  public attack(enemy: SimpleFighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }
}

export default Monster;
