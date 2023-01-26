import { collection, FieldValue } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from './firebaseConfig'
import { getDocs, addDoc, doc, deleteDoc} from "firebase/firestore"
import { async } from "@firebase/util";

const Complaints = () => {

    const [complaints, setComplaints] = useState([]);
    const complaintsCollectionRef = collection(db, "Complaints");

    useEffect(() => {
        const getComplaints = async () => {
          const data = await getDocs(complaintsCollectionRef)
          setComplaints(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getComplaints();
      }, []
    
      )

      const deleteComplaint = async(id) => {
        const complaintDoc = doc(db,"Complaints", id);
        await deleteDoc(complaintDoc);
        window.location.reload(false);
      }

    return (
        <div className="container-fluid" style={{ padding: 30 }}>
        <h1 >Complaints</h1>
        <h5> "Total Complaints submitted till now: {complaints.length}"</h5>

        <br/>

        <table class="table table-hover table-bordered">
        <thead >
          <tr>

            <th scope="col">Name</th>
            <th scope="col">Complaint</th>
            <th scope="col">Delete</th>

          </tr>
        </thead>

        <tbody>
          {complaints.map((complaint) => {
            return (
              <tr>
                <td>
                  <div>
                    <p>{complaint.Name}</p>
                  </div>
                </td>                
                <td>
                  <div>
                    <p>{complaint.Complaint}</p>
                  </div>
                </td>
                <td>
                  <button type="button" class="btn btn-danger" onClick = {() => deleteComplaint(complaint.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>


      </table>
      <br/>
      <h6><i>*Delete the complaints if resolved!</i></h6>
    </div>
    )

}

export default Complaints