import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "recoil-persist", // this key is using to store data in local storage
    storage: localStorage, // configure which storage will be used to store the data
    converter: JSON, // configure how values will be serialized/deserialized in storage
});

export enum DefaultCategories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}

export interface IToDo {
    text: string;
    id: number;
    category: string;
}

export const categoryState = atom<string>({
    key: "category",
    default: DefaultCategories.TO_DO,
});

export const categoriesState = atom<string[]>({
    key: "categories",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    },
});

export const categoriesSelector = selector({
    key: "categoriesSelector",
    get: ({ get }) => {
        const categories = get(categoriesState);
        return [
            DefaultCategories.TO_DO,
            DefaultCategories.DOING,
            DefaultCategories.DONE,
            ...categories,
        ];
    },
});
