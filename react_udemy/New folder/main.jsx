import { post } from "./post.jsx";

function feed() {
  console.log("This is from FEED!");
  post();
  post();
}

feed();
