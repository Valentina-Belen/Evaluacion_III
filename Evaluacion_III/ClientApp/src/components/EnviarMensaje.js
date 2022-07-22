import React, { useState, useEffect } from 'react'

const usuariosPorDefecto = [
    { nombres: "Valentina Astudillo", mensaje: "Hola", like: false, saludo: true },
    { nombres: "Enrique Palacios", mensaje: "Buenas tardes!", like: true, saludo: false }
]

const EnviarMensaje = () => {
    const [usuarios, setUsuarios] = useState(usuariosPorDefecto)
    const [nombres, setNombres] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [like, setLike] = useState(false)
    const [saludo, setSaludo] = useState(false)

    useEffect(() => {
        let copiaUsuarios = [...usuarios]
        const nuevoUsuario = {
            nombres: "Catalina Chávez",
            mensaje: "Saludos!",
            like: true,
            saludo: true
        }
        copiaUsuarios.push(nuevoUsuario)
        setUsuarios(copiaUsuarios)
    }, [])

    const handleNombres = (evento) => {
        setNombres(evento.target.value)
    }

    const handleMensaje = (evento) => {
        setMensaje(evento.target.value)
    }

    const handleLike = (evento) => {
        setLike(!like)
    }

    const handleSaludo = (evento) => {
        setSaludo(!saludo)
    }

    const handleIngresoUsuario = (evento) => {
        console.log("Se precionó el botón") 
        const nuevoUsuario = {
            nombres: nombres,
            mensaje: mensaje,
            like: like,
            saludo: saludo
        }
        let copiaUsuarios = [...usuarios]
        copiaUsuarios.push(nuevoUsuario)
        setUsuarios(copiaUsuarios)
    }

    return (
        <>
            <div className="card text-dark bg-info mb-3">
                <div className="container-fluid">
                    <div className="col-5">
                        <div className="row">
                            <div className="text-center">
                                <h1>Enviar mensaje:</h1>
                            </div>
                        </div>

                        <div className="row">
                            <div>
                                <label htmlFor="nombres">Nombre:</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={handleNombres}
                                    value={nombres}
                                    name="nombres"
                                    id="nombres"
                                />
                                <br />
                            </div>

                            <div>
                                <label htmlFor="mensaje">Mensaje:</label>
                                <textarea
                                    className="form-control"
                                    type="text"
                                    onChange={handleMensaje}
                                    value={mensaje}
                                    name="mensaje"
                                    id="mensaje"
                                />
                            </div>

                            <div>
                                <br />
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={like}
                                        onChange={handleLike}
                                        name="like"
                                        id="like" />
                                    <label
                                        className="form-check-label"
                                        htmlFor="like">
                                        Dar like 👍
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={saludo}
                                        onChange={handleSaludo}
                                        name="saludo"
                                        id="saludo" />
                                    <label
                                        className="form-check-label"
                                        htmlFor="saludo">
                                        Enviar saludos 👋
                                    </label>
                                </div>
                            </div>

                            <div className="col-12 justify-content-start mt-3">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={handleIngresoUsuario}
                                >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                            <h1>Mensajes recibidos:</h1>
                        </div>
                    </div>
                    <div className="row mt-12">
                        <div className="col-12">
                            <table className="table table-info table-striped">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Reacciones</th>
                                        <th>Mensaje</th>    
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map((usuario) => {
                                        return (
                                            <tr>
                                                <td>{usuario.nombres}</td>
                                                
                                                <td colspan='1'>
                                                    {usuario.like ?
                                                        "👍" :
                                                        ""
                                                    }

                                                    {usuario.saludo ?
                                                        "👋​" :
                                                        ""
                                                    }
                                                </td>

                                                <td>{usuario.mensaje}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <hr />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnviarMensaje