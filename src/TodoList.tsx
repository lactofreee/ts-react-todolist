import { useForm } from "react-hook-form";
import styled from "styled-components";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  max-width: 400px;
  gap: 40px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const LoginInput = styled.input``;

const AddBtn = styled.button`
  border-radius: 1px solid white;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

const TodoList = () => {
  // const [toDo, settoDo] = useState("");
  // const onChange = (event: React.FormEvent<HTMLLoginInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   settoDo(value);
  // };

  // const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(toDo);

  // }

  // return (
  //   <div>
  //     <form onSubmit={onSubmit}>
  //       <LoginInput
  //         onChange={onChange}
  //         value={toDo}
  //         placeholder="write what to do"
  //       />
  //       <button>add</button>
  //     </form>
  //   </div>
  // );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const onValid = (data: any) => {
    if (data.password !== data.password_check) {
      setError(
        "password_check",
        { message: "passwords are not the same" },
        { shouldFocus: true }
      );
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit(onValid)}>
        <InputWrapper>
          <LoginInput
            {...register("email", {
              required: "email adress is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
                message: "invalide form",
              },
            })}
            placeholder="email"
          />
          {errors.email && (
            <ErrorMessage>{errors.email.message as string}</ErrorMessage>
          )}
          <LoginInput
            {...register("firstName", { required: "firstName is required" })}
            placeholder="firstName"
          />
          {errors.firstName && (
            <ErrorMessage>{errors.firstName.message as string}</ErrorMessage>
          )}
          <LoginInput
            {...register("lastName", { required: "lastName is required" })}
            placeholder="lastName"
          />
          {errors.lastName && (
            <ErrorMessage>{errors.lastName.message as string}</ErrorMessage>
          )}
          <LoginInput
            {...register("userName", { required: "userName is required" })}
            placeholder="userName"
          />
          {errors.userName && (
            <ErrorMessage>{errors.userName.message as string}</ErrorMessage>
          )}
          <LoginInput
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 12,
                message: "your password is too short!",
              },
            })}
            placeholder="password"
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message as string}</ErrorMessage>
          )}
          <LoginInput
            {...register("password_check", {
              required: "password is required",
              minLength: {
                value: 12,
                message: "your password is too short!",
              },
            })}
            placeholder="password_check"
          />
          {errors.password_check && (
            <ErrorMessage>
              {errors.password_check.message as string}
            </ErrorMessage>
          )}
        </InputWrapper>
        <AddBtn>sign up</AddBtn>
      </LoginForm>
    </div>
  );
};

export default TodoList;
