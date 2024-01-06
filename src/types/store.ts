import {Updateable} from './updateable';

export interface ComponentStore<T> extends Updateable<T> {
  hasEntity(id: number): boolean;
  getComponent(id: number): T | undefined;
  getComponents(): T[];
  getItems(): [number, T][];
  insert(id: number, component: T): ComponentStore<T>;
  remove(id: number): ComponentStore<T>;
  length(): number;
}

export default ComponentStore;
