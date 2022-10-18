import { Server } from "http";
import app from "./app";

//App Port
const PORT = process.env.PORT || 3000;

//App Server
const server: Server = app.listen(PORT, () => {
  console.log(`App listning on port ${PORT}`);
});
