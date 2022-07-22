import React, { useEffect, useState } from 'react'

const Portada = () => {
    return (
        <>
            <div className="card text-dark bg-info mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://scontent.fanf1-1.fna.fbcdn.net/v/t1.6435-9/131985601_10225169782575754_2567967691541808182_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHRgh0cXn8FpLEiOK9GyNf-Crg_rv8-CQ0KuD-u_z4JDfFxbQkNnr0PGZ_0pGdQv_ScJk8Yf96EVUTfTydJ0dHp&_nc_ohc=aopEIGvUU58AX8wJikd&_nc_ht=scontent.fanf1-1.fna&oh=00_AT_H9aTzLsFCyi7i35CabV1dedbwgOxATwgiQ4BY5fcBSg&oe=62FBF6E3" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Valentina Belén Astudillo Campaña</h2>
                            <p
                                className="card-text">Tengo 21 años.
                                <br />
                                <br />
                                Soy alumna del centro de formación técnica Inacap. Actualmente estoy cursando la carrera Analista Programador. Estoy en mi último semestre, ingresé a la carrera en el año 2020.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h1>Habilidades</h1>
            <li className="list-group-item list-group-item-info">Trabajo en Equipo.</li>
            <li className="list-group-item list-group-item-info">Creatividad e Innovación</li>
            <li className="list-group-item list-group-item-info">Pensamiento Analítico</li>
            <li className="list-group-item list-group-item-info">Flexibilidad</li>
            <br />
            <br />
        </>

    )
}

export default Portada