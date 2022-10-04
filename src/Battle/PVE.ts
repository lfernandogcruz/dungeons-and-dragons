import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _monsters: Monster[] | Fighter[] | SimpleFighter[];
  
  constructor(
    player: Fighter,
    monsters: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  public fight(): number {
    this._monsters.forEach((monster) => {
      this._player.attack(monster);
      monster.attack(this._player);
    });
    return this._player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;
