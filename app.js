import {addDoc, db, app, collection,getDocs,doc,updateDoc,deleteDoc} from "./firebase.js"

const addData = async()=>{
        try {
            const docRef = await addDoc(collection(db , "User") , {
                fullNmae : "Kamlesh Kumar",
                age:23,
                caste:"malhi"


            } )
            console.log(docRef)

        } catch (error) {
            console.log("Error",error.code)
            
        }
    }    
//Read Data
    const getDataHandler = async () => {
        
        try {
            const getshot = await getDocs(collection(db, "User"));
            getshot.forEach((doc)=>{
                console.log("Get data",doc.data());
            })
            

        } catch (error) {
            console.log("error",error.code)
            
        }
    }
    //update data
    const updatehandler = async ()=>{
        try {
            await updateDoc(doc(db, "User", "d3T4iPLTK0yZUGZFEEGL"),{
                fullNmae :"kapil",
                age:26,
                caste:"gujrati"
                
            });
            console.log("Updated........");
            
        } catch (error) {
            console.log("error",error.code)
            
        }
    }
    //delete data
      const deletehandler = async()=>{
        try {
            await deleteDoc(doc(db, "User", "d3T4iPLTK0yZUGZFEEGL"));
            console.log("DELETED DATA....")
        } catch (error) {
            console.log("error",error.code)
            
        }
      }

    
   








//event
window.addData = addData;
window.getDataHandler = getDataHandler;
window.updatehandler = updatehandler;
window.deletehandler = deletehandler;
