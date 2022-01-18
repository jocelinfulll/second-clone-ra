export interface Entity {
    errors: EntityErrors[];
    id: string;
    createdAt: string;
    equals: (b?: Entity) => boolean;
}
  