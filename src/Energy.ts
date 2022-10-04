type EnergyType = 'mana' | 'stamina' ;

interface Energy {
  type_: EnergyType;
  amount: number;
}

export { EnergyType };

export default Energy;
