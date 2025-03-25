import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils";

const Note = () => {
const [notes, setUser] = useState([]);

useEffect(()=>{
    getUsers();
}, []);

const getUsers = async () => {
    const response = await axios.get(`${BASE_URL}/notes`);
    setUser(response.data);
}


const deleteUser = async (id) =>{
    try {
        await axios.delete(`${BASE_URL}/note/${id}`)
        getUsers()
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={`add`} className="button is-success">Add Note</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Isi</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note, index) => (
                        <tr key={note.id}>
                        <td>{index + 1}</td>
                        <td>{note.judul}</td>
                        <td>{note.isi}</td>
                        <td>
                            <Link to={`edit/${note.id}`} className="button is-small is-info">Edit</Link>
                            <button onClick={()=> deleteUser(note.id)} className="button is-small is-danger">Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Note