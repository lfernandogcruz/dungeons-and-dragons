import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _racesInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._racesInstances += 1;
  }

  public static createdRacesInstances(): number {
    return Elf._racesInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
