import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../RecoilAtom/Atom";
import reset from "styled-reset";

const ToDoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

interface IForm {
  toDo: string;
  default: [];
}

function CreateToDoForm() {
  const { register, handleSubmit, reset } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const onValid = (data: IForm) => {
    setToDos((prev) => [
      { text: data.toDo, id: Date.now(), category: "TO_DO" },
      ...prev,
    ]);
    reset();
  };
  return (
    <ToDoForm onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", {
          required: "please write your plan",
        })}
        placeholder="write what to do"
      />
      <button>add</button>
    </ToDoForm>
  );
}

export default CreateToDoForm;
