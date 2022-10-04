abstract class Race {
  private _name: string;
  private _dexterity: number;
  _maxLifePoints?: number;
  
  constructor(
    name: string,
    dexterity: number,
  ) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public abstract get maxLifePoints(): number | unknown {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number | void {
    throw new Error('Not implemented');
  }
}

export default Race;
