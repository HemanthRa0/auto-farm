import { db } from "../../lib/firebase";
import { useEffect, useState } from "react";
import { ref, get, child } from "firebase/database";

export default function Query() {
 // const db = getDatabase(app);
  const dbref = ref(db);
  const [data, setData] = useState([]);
 
  useEffect(() => {
    if (data.length === 0)
      get(child(dbref, "Enquery/"))
        .then((snapshot) => snapshot.val())
        .then((data) => setData(data));
    }, []);
    console.log("Qdata", data);
    return (
        <div className="pt-10 pb-5 px-5">
          <table id="customers">
            <thead>
              <tr className="bg-green-800 text-white">
                <td>Email</td>
                <td>Phone</td>
                <td>Query</td>
              </tr>
            </thead>
            <tbody>
                  <tr>
                    <td>{data.Email}</td>
                    <td>{data.Phone}</td>
                    <td>{data.Query}</td>
                  </tr>
            </tbody>
          </table>
          <style global jsx>{`
           #customers {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }
          
          #customers td, #customers th {
            border: 1px solid #ddd;
            padding: 8px;
          }
          
          #customers tr:nth-child(even){background-color: #f2f2f2;}
          
          #customers tr:hover {background-color: #ddd;}
          
          #customers th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #04AA6D;
            color: white;
          } 
          `}</style>
        </div>
      )
}

