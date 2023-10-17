const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(bodyParser.json()); // body-parser를 사용하여 JSON 요청 본문을 파싱합니다.

// 로그인 요청 처리
server.post("/login", (req, res) => {
  let db = router.db; // db.json에 접근
  let user = db
    .get("user")
    .find({ id: req.body.id, password: req.body.password })
    .value();

  if (user) {
    res.json({ success: true, message: "로그인 성공!" });
  } else {
    res.json({ success: false, message: "ID 또는 비밀번호가 잘못되었습니다." });
  }
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
