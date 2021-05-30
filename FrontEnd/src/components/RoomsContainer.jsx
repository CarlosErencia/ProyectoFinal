import React from 'react'
import RoomsFilter from './RoomsFilter';
import { withRoomConsumer } from '../context';
import Loading from './Loading';
import PersonList from '../../src/PersonList'

// El roomcontainer es el fitxer que fa la crida del personlist (on esta la llista de totes les habitacions) i el filtrat de les habitacions.

function RoomsContainer({context}){
    const{loading,sortedRooms,rooms} = context;
    if(loading)
    {
        return <Loading/>;
    }
    return(
        <>
            <RoomsFilter rooms={rooms}/>
            <PersonList></PersonList>
        </>
    );

}
export default withRoomConsumer(RoomsContainer)
