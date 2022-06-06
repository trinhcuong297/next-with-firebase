import { async } from "@firebase/util";
import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "../components/firebaseConfig";
import { off1, on1, on2, off2 } from "../components/firebaseSet";
import styles from "../styles/Home.module.css";

export default function Home() {
  var aba;
  var dbreturn = [];
  function updateDbReturn(data, a) {
    a = data;
    dbreturn.splice(0);
    for (let key in a) {
      if (a.hasOwnProperty(key)) {
        dbreturn.push(`${key}: ${a[key]}`);
      }
    }
    console.log(dbreturn);
  }
  onValue(ref(db), (snapshot) => {
    updateDbReturn(snapshot.val().Led, aba);
  });

  return (
    <div>
      {dbreturn.map((a, index) => {
        return <h1 key={index}>{a}</h1>;
      })}
      <button onClick={on1}>Led 1 on</button>
      <button onClick={off1}>Led 1 off</button>
      <button onClick={on2}>Led 2 on</button>
      <button onClick={off2}>Led 2 off</button>
    </div>
  );
}
