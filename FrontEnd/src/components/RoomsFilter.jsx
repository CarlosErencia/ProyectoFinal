import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context';
import Title from '../components/Title';
//to get all unique value

// El roomfilter simplement es el fitxer que s'encarrega de filtrar les habitacions del fitxer PersonList.js segons els parametres que li indiquem, aquest fitxer el crida el RoomContainer.jsx 

const getUnique = (items,value) => {
return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
    handleChange , type ,capacity ,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
    } = context;

    //get unique type
    let types = getUnique(rooms,'type');
    //get all
    types = ['all',...types];
    
    //map to jsx
    types = types.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
    });
    let people = getUnique(rooms,'capacity');
    people = people.map((item,index) => {
    return <option key={index} value={item}>{item}</option>
    })
    return (
        <div className="container mt-5">
            <Title title="Busca la habitación adaptada a tus gustos" />
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label htmlFor="type">Tipo de habitación</label>
                        <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                            {types}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="capacity">Huéspedes</label>
                        <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                            {people}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Precio: {price}</label>
                        <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                    </div>
                </div>
                <div className="col-md-4 col-12 ml-auto">
                    <div className="custom-control custom-checkbox my-5">
                        <input type="checkbox" className="custom-control-input" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast" className="custom-control-label">Desayuno</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets" className="custom-control-label">Admiten Mascotas</label>
                    </div>
                    <div className="input-group my-5">
                        <label htmlFor="size" className="mr-3">Tamaño Habitación</label>
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="form-control" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="form-control" />
                    </div>
                </div>
            </div>
        </div>
    )
}
