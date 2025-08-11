import { categoriesState, DefaultCategories, IToDo, toDoState } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const categories = useRecoilValue(categoriesState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = { id, text, category: name as any };
            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1),
            ];
        });
    };
    return (
        <li>
            <span>{text}</span>
            {category !== DefaultCategories.TO_DO && (
                <button name={DefaultCategories.TO_DO} onClick={onClick}>
                    To Do
                </button>
            )}
            {category !== DefaultCategories.DOING && (
                <button name={DefaultCategories.DOING} onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== DefaultCategories.DONE && (
                <button name={DefaultCategories.DONE} onClick={onClick}>
                    Done
                </button>
            )}
            {categories.map(
                (cate) =>
                    category !== cate && (
                        <button name={cate} onClick={onClick}>
                            {cate}
                        </button>
                    ),
            )}
        </li>
    );
}

export default ToDo;
