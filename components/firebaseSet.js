import { db } from "../components/firebaseConfig";
import { ref, update } from "firebase/database";

export function on1() {
  update(ref(db, "Led"), {
    Led1: "1",
  });
}

export function off1() {
  update(ref(db, "Led"), {
    Led1: "0",
  });
}

export function on2() {
  update(ref(db, "Led"), {
    Led2: "1",
  });
}

export function off2() {
  update(ref(db, "Led"), {
    Led2: "0",
  });
}
