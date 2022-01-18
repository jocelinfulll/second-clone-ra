import {ListFactory} from './ListFactory'

export namespace RecoveryListFactory {
    export function create(recoveries?) {
        return {
          ...ListFactory.create(recoveries)
        };
      }
}