import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _racesInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._racesInstances += 1;
  }

  public static createdRacesInstances(): number {
    return Orc._racesInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
