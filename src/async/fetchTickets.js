//TODO добавить отбор для from
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, where } from "firebase/firestore";
import {
  query,
  orderBy,
  collection,
  doc,
  limit,
  startAt,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const db = getFirestore();

let unsubscriber;

export function fetchTickets(setState, limit, from) {
  const ticketsRef = collection(db, "tickets");
  const ticketsQuery = query(
    ticketsRef,
    orderBy("date", "desc")
    //limit(8)
    //startAt(from),
  );
  unsubscriber = onSnapshot(ticketsQuery, (querySnapshot) =>
    setState(querySnapshot.docs.map((doc) => doc.data()))
  );
}

export function unsubscribeSnapshot() {
  unsubscriber();
}

/*при смене функций также вносить изменения в TableWrapper и TableBasic*/
/* export const fetchTickets = createAsyncThunk(
  "firebaseDataLoading/fetchTickets",
  async function (rangeNumbers, thunkAPI) {
    const ticketsRef = collection(db, "tickets");
    const ticketsQuery = query(
      ticketsRef,
      orderBy("date", "desc"),
      //startAt(3),
      limit(rangeNumbers.limit)
    );
    const ticketsSnapshot = await getDocs(ticketsQuery);
    let tickets = [];
    ticketsSnapshot.forEach(doc => {
      tickets.push(doc.data());
    });
    return tickets;
  }
);*/

export const calcAllUncompletedTickets = createAsyncThunk(
  "firebaseDataLoading/calcAllUncompletedTickets",
  async function (_, thunkAPI) {
    const tickets = { high: 0, normal: 0, low: 0 };
    const ticketsRef = collection(db, "tickets");

    const queryHigh = query(
      ticketsRef,
      where("isOpen", "==", true),
      where("priority", "==", "high")
    );
    const queryNormal = query(
      ticketsRef,
      where("isOpen", "==", true),
      where("priority", "==", "normal")
    );
    const queryLow = query(
      ticketsRef,
      where("isOpen", "==", true),
      where("priority", "==", "low")
    );
    const ticketsHigh = await getDocs(queryHigh);
    const ticketsNormal = await getDocs(queryNormal);
    const ticketsLow = await getDocs(queryLow);
    tickets.high = ticketsHigh.size;
    tickets.normal = ticketsNormal.size;
    tickets.low = ticketsLow.size;
    return tickets;
  }
);

export const calcUserUncompletedTickets = createAsyncThunk(
  "firebaseDataLoading/calcUserUncompletedTickets",
  async function (user, thunkAPI) {
    const tickets = { high: 0, normal: 0, low: 0 };
    const ticketsRef = collection(db, "tickets");

    const queryHigh = query(
      ticketsRef,
      where("isOpen", "==", true),
      where("priority", "==", "high"),
      where("user.userId", "==", user)
    );
    const queryNormal = query(
      ticketsRef,
      where("isOpen", "==", true),
      where("priority", "==", "normal"),
      where("user.userId", "==", user)
    );
    const queryLow = query(
      ticketsRef,
      where("isOpen", "==", true),
      where("priority", "==", "low"),
      where("user.userId", "==", user)
    );
    const ticketsHigh = await getDocs(queryHigh);
    const ticketsNormal = await getDocs(queryNormal);
    const ticketsLow = await getDocs(queryLow);
    tickets.high = ticketsHigh.size;
    tickets.normal = ticketsNormal.size;
    tickets.low = ticketsLow.size;
    return tickets;
  }
);

export const totalTickets = createAsyncThunk(
  "firebaseDataLoading/totalTickets",
  async function (user, thunkAPI) {
    const tickets = { total: 0, totalThisUser: 0 };
    const ticketsRef = collection(db, "tickets");
    const queryAll = query(ticketsRef);
    const queryCurrentUser = query(
      ticketsRef,
      where("user.userId", "==", user)
    );
    const ticketsAll = await getDocs(queryAll);
    const ticketsCurrentUser = await getDocs(queryCurrentUser);
    tickets.total = ticketsAll.size;
    tickets.totalThisUser = ticketsCurrentUser.size;
    return tickets;
  }
);
