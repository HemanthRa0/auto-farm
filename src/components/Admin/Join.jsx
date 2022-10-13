import { db } from "../../lib/firebase";
import { useEffect, useState } from "react";
import { ref, getDatabase, get, set, child } from "firebase/database";

import {
  getStorage,
  ref as sref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export default function Join() {
 // const db = getDatabase(app);
  const dbref = ref(db);
  const storage = getStorage();
  const [updated, setUpdated] = useState(false);
  const [data, setData] = useState([]);
  const [det, setDet] = useState();
  const [tagl, setTagL] = useState();
  const [imgurl, setImgurl] = useState();
  const [newfile, setnewfile] = useState([]);
  const [imgprev, setImgprev] = useState();
 
  useEffect(() => {
    if (data.length === 0)
      get(child(dbref, "Join/"))
        .then((snapshot) => snapshot.val())
        .then((data) => {setData(data);
          return data
        }).then((data) => {
          setDet(data["Detail"])
          setTagL(data["Tagline"])
          setImgurl(data["Image"])
          setImgprev(data["Image"])
        });
      console.log(data);
      
    }, [data]);
    async function Push() {
      let Uurl = imgurl
      console.log("fileslen : ", newfile)
      if(newfile.length != 0){
      const storageRef = sref(storage, "Join/"+newfile[0].name);
    await uploadBytes(storageRef, newfile[0]).then((snapshot) => {
        console.log("Image Uploaded");
      });
      await getDownloadURL(sref(storage, "Join/"+newfile[0].name))
      .then((url) => {
        setImgurl(url)
        console.log("Url Updated")
        Uurl = url
      });
    } 
    console.log(Uurl)
      set(ref(db, "Join/"), {
        Detail : det,
        Tagline : tagl,
        Image : Uurl,
      }).catch(alert);
      setUpdated(true)
    }; 
  return( 
  <><h1 className="text-green-800 font-medium text-center text-4xl ">Join Page</h1>
  
    <form
        action="#"
        onSubmit={(e) => {
        e.preventDefault();
          Push();
        return false;
        }}
        className="flex flex-col md:flex-row justify-center items-center ml-12 md:gap-12 gap-20 mt-28 -mr-8 mb-10"
      >
        <div className=" md:w-full sm:w-full h-auto w-auto md:mr-12">
          <div className="">
            <div
              className="shadow-xl flex flex-col px-8 overflow-hidden py-8 bg-gray-100"
              method="post"
            > {updated && (<p className="text-green-800 font-medium text-center text-lg">Updated Successfully</p>)}
              <h1 className="text-2xl mt-4 font-bold">1. Image</h1>
              <div className="bg-golden border-golden border-2 md:h-64 md:w-72 ml-2">
              <img src={imgprev} key={imgprev} alt="Picture" className="w-full h-full"/>
              </div>
              <label
              htmlFor="imageuploader"
              className="cursor-pointer h-12 md:w-72 pt-4 text-xl text-white font-bold bg-green-800 ml-2"
            ><center>
              <h2>Upload</h2></center>
            </label>
              <input 
                id="imageuploader"
                className="hidden"
                placeholder="image"
                type={"file"}
                onChange={(e) => {
                  setnewfile([e.target.files[0]])
                  console.log(e.target.files[0])
                  setImgprev(
                    URL.createObjectURL(e.target.files[0]));
                }}

              />
              <h1 className="text-2xl font-bold">2. Text Box</h1>
              <h1 className="text-xl font-bold p-2">Title:</h1>
      
              <textarea
            value={tagl}
            className="w-auto h-24 border-2 border-golden p-4 bg-gray-200 ml-2"
            onChange={(e) => setTagL(e.target.value)}
            placeholder="Enter the Title here"
          /> 
          <h1 className="text-xl font-bold p-2">Story Text:</h1>
              <div className="ml-2">
              <textarea
            value={det}
            className="w-full h-72 border-2 border-golden p-4 bg-gray-200"
            onChange={(e) => setDet(e.target.value)}
            placeholder="Enter the text here"
          /></div>
              <div className="flex flex-col items-center justify-center">
                <button
                  type="submit"
                  className="px-6 w-1/2 mt-8 py-3 tracking-widest  bg-gray-300 text-green-800 font-light focus:bg-green-800 hover:bg-green-800 hover:text-white focus:text-white text-s font-medium flex flex-row justify-center items-center"
                >
                  Update
                </button>
                {updated && (<p className="text-green-800 font-medium text-center text-xs">Updated Successfully</p>)}
              </div>
            </div>
          </div>
        </div>
      </form>
  </>
  );
}
