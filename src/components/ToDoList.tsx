import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import {
    DefaultCategories,
    categoryState,
    toDoSelector,
    categoriesState,
    categoriesSelector,
} from "../atoms";
import ToDo from "./ToDo";
import styled from "styled-components";
import CreateCategory from "./CreateCategory";
import Category from "./Category";

const ToDoListDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    div {
        width: 50%;
    }
`;

function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const categories = useRecoilValue(categoriesState);
    const allCategories = useRecoilValue(categoriesSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };
    return (
        <ToDoListDiv>
            <div>
                <h1>To Dos</h1>
                <hr />
                <select value={category} onInput={onInput}>
                    <option value={DefaultCategories.TO_DO}>To Do</option>
                    <option value={DefaultCategories.DOING}>Doing</option>
                    <option value={DefaultCategories.DONE}>Done</option>
                    {categories.map((cate) => (
                        <option key={cate} value={cate}>
                            {cate}
                        </option>
                    ))}
                </select>
                <CreateToDo />
                {toDos?.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </div>
            <div>
                <h1>Categories</h1>
                <hr />
                <CreateCategory />
                <hr />
                {allCategories?.map((cate, index) => (
                    <Category key={`${cate}-${index}`} text={cate} />
                ))}
            </div>
        </ToDoListDiv>
    );
}

export default ToDoList;
