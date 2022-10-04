import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _racesInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._racesInstances += 1;
  }

  public static createdRacesInstances(): number {
    return Dwarf._racesInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
