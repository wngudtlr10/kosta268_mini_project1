import React from "react";
import { useForm } from "react-hook-form";
import "./SignUpForm.css";
import { Link } from "react-router-dom";
import "../../errors/NotFound.js";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isSubmitted, errors }, //중복 방지
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // 회원가입 처리 로직 추가
  };

  return (
    <div className="login-page">
      <div className="form">
        <h2 className="login-h2"> 오늘의 봉사 </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <input
            type="text"
            placeholder="ID"
            name="id"
            // {...register({
            //   required: "아이디를 입력해주세요.",
            //   pattern: {
            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            //     message: "유효한 이메일 주소를 입력해주세요.",
            //   },
            // })}
          />
          <input
            type="text"
            placeholder="username"
            name="username"
            //{...register("username", { required: true })}
          />
          {/* {errorMessage.name && <span>이름은 필수 입력 항목입니다.</span>} */}
          <input
            type="password"
            placeholder="password"
            name="password"
            // {...register("password", { required: true })}
          />
          {/* {errors.name && <span>비밀번호는 필수 입력 항목입니다.</span>} */}
          <input
            type="date"
            placeholder="0000-00-00"
            name="birthdate"
            // {...register({
            //   required: "생년월일을 입력해주세요.",
            //   minLength: {
            //     value: 6,
            //     message: "생년월일은 최소 6자 이상이어야 합니다.",
            //   },
            // })}
            //{...register("date", { required: true})}
          />
          {/* {errors.name && <span>생년월일는 필수 입력 항목입니다.</span>} */}
          {/* <input
            type="text"
            placeholder="sex"
            name="sex"
            //{...register("sex", { required: true})}
          /> */}
          <input
            type="email"
            placeholder="email@test.com"
            name="email"
            //{...register("email", { required: true})}
          />

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
