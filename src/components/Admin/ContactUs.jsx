import { db } from "../../lib/firebase";
import { useEffect, useState } from "react";
import { ref, getDatabase, get, set, child } from "firebase/database";
import {
  getStorage,
  ref as sref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export default function ContatUs() {
 // const db = getDatabase(app);
  const dbref = ref(db);
  const storage = getStorage();
  const [updated, setUpdated] = useState(false);
  const [data, setData] = useState([]);
  const [add, setAdd] = useState();
  const [email, setEmail] = useState();
  const [info, setInfo] = useState();
  const [tel, setTel] = useState();
  const [imgurl, setImgurl] = useState();
  const [newfile, setnewfile] = useState([]);
  const [imgprev, setImgprev] = useState();
 
  useEffect(() => {
    if (data.length === 0)
      get(child(dbref, "ContactUs/"))
        .then((snapshot) => snapshot.val())
        .then((data) => {setData(data);
          return data
        }).then((data) => {
          setAdd(data["Address"])
          setEmail(data["Email"])
          setInfo(data["Information"])
          setTel(data["Tel"])
          setImgurl(data["QRcode"])
          setImgprev(data["QRcode"])
        });
      console.log(data);
      
    }, [data]);
    async function Push() {
      let Uurl = imgurl
      console.log("fileslen : ", newfile)
      if(newfile.length != 0){
      const storageRef = sref(storage, "QRcode/"+newfile[0].name);
    await uploadBytes(storageRef, newfile[0]).then((snapshot) => {
        console.log("QRcode Uploaded");
      });
      await getDownloadURL(sref(storage, "QRcode/"+newfile[0].name))
      .then((url) => {
        setImgurl(url)
        console.log("Url Updated")
        Uurl = url
      });
    } 
    console.log(Uurl)
      set(ref(db, "ContactUs/"), {
        Address : add,
        Email : email,
        Information : info,
        Tel : tel,
        QRcode : Uurl,
      }).catch(alert);
      setUpdated(true)
    }; 
  return( 
  <><h1 className="text-green-800 font-medium text-center text-4xl ">Contact Page</h1>
  
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
              <h1 className="text-2xl mt-4 font-bold">1. QRcode</h1>
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
            <h1 className="text-xl font-bold p-2">Address:</h1>
              <div className="ml-2">
              <textarea
            value={add}
            className="w-full h-72 border-2 border-golden p-4 bg-gray-200"
            onChange={(e) => setAdd(e.target.value)}
            placeholder="Enter the Address here"
          /></div>
              <h1 className="text-xl font-bold p-2">Email:</h1>
      
              <input
            value={email}
            className="w-auto h-12 border-2 border-golden p-4 bg-gray-200 ml-2"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email ID here"
          /> 
          
          <h1 className="text-xl font-bold p-2">Information:</h1>
      
              <input
            value={info}
            className="w-auto h-12 border-2 border-golden p-4 bg-gray-200 ml-2"
            onChange={(e) => setInfo(e.target.value)}
            placeholder="Enter the Information here"
          />
          
          <h1 className="text-xl font-bold p-2">Telephone:</h1>
      
              <input
            value={tel}
            className="w-auto h-12 border-2 border-golden p-4 bg-gray-200 ml-2"
            onChange={(e) => setTel(e.target.value)}
            placeholder="Enter the Telephone here"
          />
          
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
