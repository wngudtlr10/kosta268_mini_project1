import React from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import "../../errors/NotFound.js";

function Login() {
  const {
    register,
    handleSubmit,
    watch, // input값 반환
    formState: { isSubmitting, isSubmitted, errors }, //중복제출 방지, true:비활성, false:활성
  } = useForm();

  const onSubmit = async (data) => {
    //비동기함수
    await new Promise((r) => setTimeout(r, 1000)); //Promise를 생성하며, setTimeout을 사용하여 1초 후에 이 Promise를 해결(resolve)
    // alert(JSON.stringify(data));
    console.log(data);
    alert("제출되었습니다.");
  };

  return (
    <div className="login-page">
      <div className="form">
        <h2 className="login-h2"> 오늘의 봉사 </h2>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="id">아이디</label>
          <input
            id="id"
            type="text"
            placeholder="id"
            name="id"
            aria-Invalid={
              isSubmitted ? (errors.id ? "true" : "false") : undefined
            }
            {...register("id", {
              required: "id는 필수 입력입니다.",
              pattern: {
                value: /^[a-zA-Z0-9]{5,15}$/,
                message: "아이디는 5~15자의 영숫자로 이루어져야 합니다.",
              },
            })}
          />
          {errors.id && <span>이름은 필수 입력 항목입니다.</span>}

          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            aria-Invalid={
              //submit -> password가 유효성검사 통과했을 때 비활성화 제출
              isSubmitted ? (errors.password ? "true" : "false") : undefined
            }
            {...register("password", {
              required: "password는 필수 입력입니다.",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message:
                  "비밀번호는 8자리 이상, 대문자, 소문자, 숫자 각각 1개 이상 포함해야 합니다.",
              },
            })}
          />
          {errors.password && <span>비밀번호는 필수 입력 항목입니다.</span>}

          <button type="submit" disabled={isSubmitting}>
            login
          </button>

          <p className="message">
            회원이 아니신가요? <Link to="/Signup">회원가입</Link>
          </p>
          <p className="message">
            <Link to="FindID">ID찾기</Link> |{" "}
            <Link to="FindPW">비밀번호 찾기</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
