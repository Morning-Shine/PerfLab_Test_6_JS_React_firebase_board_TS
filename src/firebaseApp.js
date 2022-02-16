import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { Guid } from "js-guid";

export const app = initializeApp(firebaseConfig);

const db = getFirestore();

export async function writeNewTicket(
  userId,
  userName,
  userAvatar,
  title,
  priority,
  decr,
  isOpen
) {
  const id = Guid.newGuid().StringGuid.replaceAll("-", "");
  await setDoc(doc(collection(db, "tickets"), id), {
    user: { userId, userName, userAvatar },
    taskId: id,
    title,
    priority,
    decr,
    date: new Date().getTime(),
    isOpen,
  });
}

export async function readTicket(id) {
  // const ticketRef = collection(db, "tickets");
  // const queryTicket = query(ticketRef, where("taskId", "==", id));
  // const ticket = await getDocs(queryTicket);
  // return ticket.docs[0].data();
  //const docRef = doc(collection(db, "tickets"));
  
  try {
    const docSnap = await getDoc(doc(collection(db, "tickets"), id));
    return docSnap.data();
  } catch (err) {
    return err;
  }
}

export async function updateTicket(id, title, priority, decr) {
  try {
    await updateDoc(doc(collection(db, "tickets"), id), {
      title,
      priority,
      decr,
      date: new Date().getTime(),
    });
  } catch (err) {
    console.log("ERROR in updateTicket:", err);
  }
}

export async function deleteTicket(id) {
  try {
    await deleteDoc(doc(collection(db, "tickets"), id));
  } catch (err) {
    console.log("ERROR in deleteTicket:", err);
  }
}

export async function closeTicket(id) {
  await updateDoc(doc(collection(db, "tickets"), id), {
    isOpen: false,
  });
  try {
  } catch (err) {
    console.log("ERROR in closeTicket:", err);
  }
}
