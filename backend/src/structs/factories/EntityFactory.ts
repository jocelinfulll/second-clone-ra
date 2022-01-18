import {v4 as uuidv4} from 'uuid'



// function isEntity(v: any) {
//     return (v).id !== undefined;
//   }
  

function isEqual(a, b?): boolean {
    if (b === undefined) {
      return false;
    }
  
    if (Object.is(a, b)) {
      return true;
    }
  
    if (!b.id) {
      return false;
    }
  
    return a.id === b.id;
  }
  

export namespace EntityFactory {
    export const create = (
        entityProps
    ) =>({
        errors: [],
        id: entityProps.id ?? uuidv4(),
        createdAt: entityProps.createdAt ?? new Date().toISOString(),
        function (b?): boolean {
            return isEqual(this, b);
          }
    })
}