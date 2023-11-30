import { useState, useEffect } from "react"

import Home from "./components/Home"
import Thanks from "./components/Thanks";
import Load from "./components/Load";

// firebase
import { collection, getDocs, addDoc } from "firebase/firestore"
import { db } from "./firebase"

function App() {
  const [pag, setPag] = useState(1);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        await getDocs(collection(db, "questions")).then((querySnapshot)=>{               
          const newData = querySnapshot.docs
          .map((doc) => ({...doc.data(), id: doc.id }));
  
          setQuestions(newData);
        });
      } catch (error) {
        console.log(error);
      }
    }

    getData()
    setTimeout(() => setLoading(false), 5000);
  }, []);

  async function submit() {
    try {
      const newDoc = await addDoc(collection(db, "respuests"), {
        question1: data["1"],
        question2: data["2"],
        question3: data["3"],
        question4: data["4"],
        question5: data["5"],
        question6: data["6"]
      });
      console.log(newDoc);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {loading ? <Load/> :
      (pag === questions.length + 1 ? <Thanks submit={submit}/> :
      <Home pag={pag} setPag={setPag} questions={questions} data={data} setData={setData}/>)}
    </>
  )
}

export default App