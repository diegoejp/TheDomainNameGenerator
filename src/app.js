/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let myDiv = document.querySelector("#myDiv");

  for (let pro in pronoun) {
    for (let ad in adj) {
      for (let no in noun) {
        //console.log(pronoun[pro]+adj[ad]+noun[no]);
        let p = document.createElement("P");
        p.innerHTML = pronoun[pro] + adj[ad] + noun[no] + ".com";
        myDiv.appendChild(p);
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
