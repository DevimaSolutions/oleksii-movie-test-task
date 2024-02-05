export type IRecursiveObject = {
  [key: string]: IRecursiveObject;
};

export interface IToFormDataConfig {
  indices: boolean;
  nullsAsUndefineds: boolean;
  booleansAsIntegers: boolean;
  allowEmptyArrays: boolean;
}
