import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Swal from 'sweetalert2'
function CrearPokemon(){

    const parametros = useParams();

    const url1 = `${import.meta.env.VITE_CRUD_URL}/crearpokemon`
    const url2 = `${import.meta.env.VITE_CRUD_URL}/actualizarpokemon`
    const [nombre,setNombre] = useState('')
    const [peso,setPeso] = useState('')
    const [tipo,setTipo] = useState('')
    const [imagen,setImagen] = useState('')

    useEffect(()=>{
        
        async function getPokemon(){

            if(parametros.id == undefined){
                return;
            }

            await axios({
                url: `${url1}/${parametros.id}`,
                method: "get"
            }).then((response)=>{
                setNombre(response.data.name)
                setPeso(response.data.height)
                setTipo(response.data.type)
                setImagen(response.data.ThumbnailImage)
            })
        }
        
        getPokemon()
    },[])

    const changeNombre = (evt) => {
        setNombre(evt.target.value)
    }
    const changeImagen = (evt) => {
        setImagen(evt.target.value)
    }

    const changePeso = (evt) => {
        setPeso(evt.target.value)
    }

    const changeTipo = (evt) => {
        setTipo(evt.target.value)
    }

    const guardarPokemon = (evt) => {
        evt.preventDefault();
    
        let method = "post";
        let liga = url1
    
        if(parametros.id !== undefined){
            method = "put"
            liga = `${url2}/${parametros.id}`
        }
        Swal.showLoading()
        axios({
            url: liga,
            method: method,
            data:{
                "name": nombre,
                "height": peso,
                "type": tipo,
                "ThumbnailImage": imagen,
            }
        }).then((response)=>{
            Swal.close()
            console.log(response)
        })
    }

    return(
        <div className="container">
            <h1 className="my-5 is-size-4">Vista de creacion de usuarios</h1>
            <form onSubmit={guardarPokemon}>
                <div>
                    <label>Nombre</label>
                    
                    <input className="input" onChange={changeNombre} type="text" placeholder="Nombre Pokemon" value={nombre} ></input>
                </div>
                <div>
                    <label>Peso</label>
                    <input className="input" onChange={changePeso} type="text" placeholder="Peso de Pokemon" value={peso}></input>
                </div>
                <div>
                    <label>Tipo</label>
                    <input className="input" onChange={changeTipo} type="text" placeholder="Tipo de Pokemon" value={tipo}></input>
                </div>
                <div>
                    <label>Imagen</label>
                    <input className="input" onChange={changeImagen} type="text" placeholder="Ingresa una url de una imagen" value={imagen}></input>
                </div>
                <button className="mt-5 button is-link">Guardar</button>
            </form>
        </div>
    )
}

export default CrearPokemon;