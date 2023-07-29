import { connect as _connect, connection } from "mongoose";

const connect = () => {
  _connect("mongodb://localhost:27017/sprta_server")
    .catch(err => console.log(err));
};

connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});

export default connect;