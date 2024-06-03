import styled from "styled-components";
import CreateToDoForm from "./CreateToDoForm";
import ToDo from "./ToDo";
import { useRecoilValue } from "recoil";
import { toDoState } from "../RecoilAtom/Atom";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
  margin-top: 20px;
  gap: 10px;
`;

const Title = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const ToDoCard = styled.ul`
  color: white;
  font-size: 14px;
  background-color: #64748b;
  padding: 6px 8px;
`;

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);
  return (
    <Container>
      <Title>To Dos</Title>
      <CreateToDoForm />
      <ToDoCard>
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo}></ToDo> //text={toDo.text} category={toDo.category} id={toDo.id} 축약해서 표현==> {...toDo}
      ))}
    </ToDoCard>
    </Container>
  );
};

export default ToDoList;
