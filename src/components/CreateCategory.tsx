import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../atoms";

interface IForm {
    category: string;
}

function CreateCategory() {
    const setCategories = useSetRecoilState(categoriesState);
    const { register, setValue, handleSubmit } = useForm<IForm>();
    const handleValid = ({ category }: IForm) => {
        setCategories((oldCategories) => [...oldCategories, category]);
        setValue("category", "");
    };
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register("category", {
                    required: "Please write a Category",
                })}
                placeholder="Write a category"
            />
            <button>Add</button>
        </form>
    );
}

export default CreateCategory;
