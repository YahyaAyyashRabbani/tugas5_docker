import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from "../utils";

const EditNote = () => {
const [judul, setJudul] = useState("");
const [isi, setIsi] = useState("");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() => {
    getNoteById();
}, []);

const updateNote = async (e) =>{
    e.preventDefault();
    try {
        await axios.put(`${BASE_URL}/note/${id}`, {
            judul,
            isi
        });
        navigate("/")
    } catch (error) {
        console.log(error);
    }
}

const getNoteById = async () =>{
    const response = await axios.get(`${BASE_URL}/notes/${id}`);
    setJudul(response.data.judul);
    setIsi(response.data.isi);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateNote}>
                <div className="field">
                    <label className="label">Judul</label>
                    <div className="control">
                        <input type="text" className="input" value = {judul} onChange={(e)=> setJudul(e.target.value)} placeholder='Judul'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Isi</label>
                    <div className="control">
                        <input type="text" className="input" value = {isi} onChange={(e)=> setIsi(e.target.value)} placeholder='Isi'/>
                    </div>
                </div>
                <div className="field">
                   <button type="submit" className="button is-success">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditNote