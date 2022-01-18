export interface List<E> {
    add: (item: E) => void;
    getNewItems: () => E[];
}