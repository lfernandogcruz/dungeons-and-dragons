import Archetype from './Archetype';

import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeInstances = 0;

  constructor(
    name: string,
  ) {
    super(name);
    this._energyType = 'stamina';
    Ranger._archetypeInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._archetypeInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;
