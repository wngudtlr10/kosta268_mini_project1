import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Main/Home";
import New from "./pages/Main/New";
import Edit from "./pages/Main/Edit";
import Detail from "./pages/Main/Detail";
import Introduce from "./pages/Main/Introduce";
import LoginForm from "./pages/Login/LoginForm";
import SignUpForm from "./pages/SignUp/SignUpForm";
import NotFound from "./errors/NotFound";
import FindID from "./pages/Login/FindID";
import FindPW from "./pages/Login/FindPW";
import MyPage from "./pages/Main/mypage";
import UserList from "./pages/User/UserList";
import Logout from "./pages/Logout/Logout";
import LogoutForm from "./pages/Logout/LogoutForm";
import Cart from "./pages/Main/cart";

const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* path에 아무것도 없을 때는 Home페이지로 */}
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/mypage/cart" element={<Cart />} />

          {/* 형식: 로그인/회원가입/아이디찾기,비밀번호찾기, 마이페이지, 로그아웃 라우팅 */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/findid" element={<FindID />} />
          <Route path="/findpw" element={<FindPW />} />

          <Route path="/logout" element={<Logout />} />
          <Route path="/logoutform" element={<LogoutForm />} />

          <Route path="/userlist" element={<UserList />} />

          {/* 404 NOT FOUND */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Routing;
