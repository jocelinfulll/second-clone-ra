import { EntityFactory } from "./EntityFactory";
import { RecoveryListFactory } from './RecoveryListFactory'

export namespace FileFactory {
  export const create = (props, entityProps) => {
    const entity = EntityFactory.create(entityProps);

    return {
      ...entity,
      name: props.name,
      path: props.path,
      type: props.type,
      userId: props.userId,
      recoveries: props.recoveries ?? RecoveryListFactory.create([])
    };
  };
}
