import {
  collection,
  addDoc,
  getDoc,
  doc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { db } from "./firebase.js";

const params = new URLSearchParams(window.location.search);
const incomingId = params.get("id");

let receivedFromName = null;

const fromText = document.getElementById("fromText");

if (incomingId) {
  const ref = doc(db, "wishes", incomingId);
  getDoc(ref).then(snap => {
    if (snap.exists()) {
      receivedFromName = snap.data().senderName;
      fromText.innerText = `${receivedFromName} wishes you a Happy New Year 🎉`;
    }
  });
}

window.generate = async function () {
  const senderName = document.getElementById("nameInput").value.trim();
  if (!senderName) return alert("Enter your name");

  const docRef = await addDoc(collection(db, "wishes"), {
    senderName: senderName,
    receivedFrom: receivedFromName || "Direct Visit",
    createdAt: serverTimestamp(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    userAgent: navigator.userAgent
  });

  const link =
    `${window.location.origin}${window.location.pathname}?id=${docRef.id}`;

  document.getElementById("result").innerText = link;

  if (navigator.share) {
    navigator.share({
      title: "Happy New Year 2026",
      text: `${senderName} sent you a New Year wish 🎆`,
      url: link
    });
  }
};
