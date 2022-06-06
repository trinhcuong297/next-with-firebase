import { async } from "@firebase/util";
import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "../components/firebaseConfig";
import { off1, on1, on2, off2 } from "../components/firebaseSet";
import styles from "../styles/Home.module.css";
import { doc, onSnapshot } from "firebase/firestore";
import { collection, setDoc } from "firebase";

export default function Test() {
  return (
    <div>
      <button onClick={on1}>Led 1 on</button>
      <button onClick={off1}>Led 1 off</button>
      <button onClick={on2}>Led 2 on</button>
      <button onClick={off2}>Led 2 off</button>
    </div>
  );
}
