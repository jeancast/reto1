import React, {useState} from 'react';
import { Users } from '../modelo/usuario.class';
import Usuarios from './Usuarios';

const UserList = () => {
    const [defaultUser, setUserList] = useState([
        new Users('Jefferson', 'Castillo', 'jeffer29120@gmail.com', false)]);
    const changeState = (id) => {
        const updateList = [...defaultUser];
        const lastUser = updateList[updateList.length - 1];
        lastUser.conectado = !lastUser.conectado;

        setUserList(updateList);
    }
    return (
        <div>
            <div>Lista de usuarios</div>
            <button onClick={changeState}>Cambiar estado</button>
            {defaultUser.map((user, index) => (
                <Usuarios key={index} user={user} />
            ))}
        </div>
    );
}

export default UserList;
