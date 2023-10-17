import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../errors/NotFound.js";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors }, //중복제출 방지, true:비활성, false:활성
  } = useForm();
  const navigate = useNavigate();

  const [userid, setuserid] = useState("");
  const [password, setpassword] = useState("");

  const onSubmit = async (data) => {
    const { userid, password } = data;
    try {
      const response = await axios.get(
        `http://localhost:3000/user?userid=${userid}`
      );

      if (response.data.length > 0) {
        const user = response.data[0]; // 첫번째로 일치하는 사용자 정보를 가져옴

        if (user.password === password) {
          alert("로그인 성공!");
          navigate("/");
        } else {
          alert("로그인 실패! 비밀번호가 일치하지 않습니다.");
          console.log(data);
          console.log(response.data);
        }
      } else {
        alert("로그인 실패! 해당 아이디가 존재하지 않습니다.");
        console.log(data);
        console.log(response.data);
      }
    } catch (error) {
      alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <h2 className="login-h2"> 오늘의 봉사 </h2>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="userid"
            name="userid"
            // aria-Invalid={
            //   isSubmitted ? (errors.userid ? "true" : "false") : undefined
            // }
            {...register("userid", {
              required: "id는 필수 입력사항입니다.",
              pattern: {
                value: /^[a-zA-Z0-9]{5,15}$/,
                message: "아이디는 5~15자의 영숫자로 이루어져야 합니다.",
              },
            })}
          />
          {errors.userid && <span>id는 필수 입력 항목입니다.</span>}

          <input
            type="password"
            placeholder="password"
            name="password"
            // aria-Invalid={
            //   //submit -> password가 유효성검사 통과했을 때 비활성화 제출
            //   isSubmitted ? (errors.password ? "true" : "false") : undefined
            // }
            {...register("password", {
              required: "password는 필수 입력사항입니다.",
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
