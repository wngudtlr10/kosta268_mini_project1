import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./SignUpForm.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../../errors/NotFound.js";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitted, errors }, //중복 방지
  } = useForm();

  const navigate = useNavigate();
  const [userid, setUserid] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post("http://localhost:3000/user", formData);
      if (
        response &&
        response.formData &&
        typeof response.formData === "object"
      ) {
        const { userid, username, password, email } = response.formData;
        // ... rest of your code
      }

      alert("회원가입 성공!");
      console.log(formData);
      navigate("/login"); //로그인 페이지로 리다이렉트
    } catch (error) {
      console.error("Error during signup:", error);
      alert("회원가입 실패 폼 내용을 초기화합니다.");
      console.log(formData);
      reset(); //회원가입폼 초기화
    }
  };

  return (
    <div className="signup-page">
      <div className="form">
        <h2 className="signup-h2"> 오늘의 봉사 </h2>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="userId"
            name="userid"
            onChange={(e) => setUserid(e.target.value)}
            {...register("userid", {
              required: "id는 필수 입력사항입니다.",
              pattern: {
                value: /^[a-zA-Z0-9]{5,15}$/,
                message: "아이디는 5-15자의 영숫자로 이루어져야 합니다.",
              },
            })}
          />
          {errors.id && <span>id는 필수 입력 항목입니다.</span>}

          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            aria-Invalid={
              //submit -> password가 유효성검사 통과했을 때 비활성화 제출
              isSubmitted ? (errors.uesrname ? "true" : "false") : undefined
            }
            {...register("username", {
              required: "username은 필수 입력사항입니다.",
              pattern: {
                value: /^[가-힣]{1,5}$/,
                message: "username은 1-5자의 한글로 이루어져야 합니다.",
              },
            })}
          />
          {errors.id && <span>username은 필수 입력 항목입니다.</span>}

          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            aria-Invalid={
              //submit -> password가 유효성검사 통과했을 때 비활성화 제출
              isSubmitted ? (errors.password ? "true" : "false") : undefined
            }
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

          {/* <input
            type="date"
            placeholder="0000-00-00"
            name="birthdate"
            aria-Invalid={
              //submit -> password가 유효성검사 통과했을 때 비활성화 제출
              isSubmitted ? (errors.birthdate ? "true" : "false") : undefined
            }
            {...register("birthdate", {
              required: "생년월일은 필수 입력사항입니다.",
              pattern: {
                value: /^\d{4}-\d{2}-\d{2}$/,
                message: "생년월일은 YYYY-MM-DD 형식으로 입력해야 합니다.",
              },
            })}
          />
          {errors.birthdate && <span>{errors.birthdate.message}</span>} */}

          <input
            type="email"
            placeholder="email@test.com"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            aria-Invalid={
              //submit -> password가 유효성검사 통과했을 때 비활성화 제출
              isSubmitted ? (errors.email ? "true" : "false") : undefined
            }
            {...register("email", {
              required: "이메일은 필수 입력사항입니다.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "유효한 이메일 형식으로 입력해주세요.",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <div className="radio-box">
            {/* 중복 없음 : 둘 중 하나 선택 */}
            <label htmlFor="man">남</label>
            <input type="radio" name="gender" value="man" id="man" checked />

            <label htmlFor="woman">여</label>
            <input type="radio" name="gender" value="woman" id="woman" />
          </div>

          <button type="submit">SignUp</button>
          <p className="message">
            이미 회원이신가요? <Link to="/Login">로그인</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
