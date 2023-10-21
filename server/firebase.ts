import { initializeApp, deleteApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOH3kQKkOV9JBUpakpEmNCmlwUrPTu3C4",
  authDomain: "formula-can-requests.firebaseapp.com",
  projectId: "formula-can-requests",
  storageBucket: "formula-can-requests.appspot.com",
  messagingSenderId: "611002026283",
  appId: "1:611002026283:web:1d599b5184f4dadba85d6e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

 export async function newRequest(name: string, id: string, format: string, length: string, origin: string){
  try {
    await setDoc(doc(db, "requests"), {
      messageName: name,
      messageID: id,
      idFormat: format,
      messageLength: length,
      originBoard: origin
    });
    console.log("New message " + name + " requested.");
  } catch (e) {
    console.error("Error sending new request " + name + ".");
    console.log(e);
  } finally {
        console.log("Done");
    }
}

newRequest("test", "test", "test", "test", "test")