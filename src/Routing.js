import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Main/Home";
import New from "./pages/Main/New";
import Edit from "./pages/Main/Edit";
import Detail from "./pages/Main/Detail";
import Introduce from "./pages/Main/Introduce";

const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* path에 아무것도 없을 때는 Home페이지로 */}
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/detail" element={<Detail />} />

          {/* 형식: 로그인/회원가입/마이페이지 라우팅 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Routing;
