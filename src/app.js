/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let myDiv = document.querySelector("#myDiv");
  let divino = document.querySelector("#div1");

  for (let pro in pronoun) {
    for (let ad in adj) {
      for (let no in noun) {
        //console.log(pronoun[pro]+adj[ad]+noun[no]);
        let p = document.createElement("P");
        let p1 = document.createElement("P");
        p.innerHTML = pronoun[pro] + adj[ad] + noun[no] + ".com";
        p1.innerHTML = pronoun[pro] + adj[ad] + noun[no] + ".es";

        myDiv.appendChild(p);
        divino.appendChild(p1);
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
