import React from 'react'
import BaseColaboradores from '../data/BaseColaboradores';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import { useState } from 'react';

const AddEmpl = () => {
    const [lista, setLista] = useState(BaseColaboradores)
    const [nombre, setName] = useState('')
    const [email, setEmail] = useState('')
    const [listaResp, setListOriginal] = useState(BaseColaboradores)
    const iName = document.querySelector('#iName')
    const iEmail = document.querySelector('#iEmail')

    const enviarFormulario = (e) => {
        let idNumber = lista.length + 1
        if (nombre === '' || email === '') {
            e.preventDefault()
        } else {
            e.preventDefault()
            setLista([...lista, { id: (idNumber++).toString(), nombre: nombre, correo: email }])
            setListOriginal([...listaResp, { id: (idNumber++).toString(), nombre: nombre, correo: email }])
            iName.value = ''
            iEmail.value = ''
        }
    }

    const getName = (e) => {
        setName(e.target.value)
    }

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const filterUsers = (e) => {
        const keyword = e.target.value.toLowerCase();
        if (e.target.value !== '') {
            const filtered_users = lista.filter((user) => {
                return (user.nombre).toLowerCase().indexOf(keyword) > -1;

            });
            setLista(filtered_users);
        } else {
            setLista(listaResp)
            console.log(lista)
        }
    }

    return (
        <div className='text-white p-5'>
            <div className='p-5'>
                <h4>Buscador de Colaboradores</h4>
                <Form.Control type="search" placeholder="Buscar colaborador" className='searchInput col-4' onChange={filterUsers} />
            </div>
            <form action="submit" className='p-3' onSubmit={enviarFormulario}>
                <Form.Group className="mb-3">
                    <Form.Label className='pt-1'><h5>Nombre del Colaborador</h5></Form.Label>
                    <Form.Control className='mb-3' type="text" placeholder="Ingresa un nombre" onChange={getName} id='iName' />
                    <Form.Label className='pt-1'><h5>Email del Colaborador</h5></Form.Label>
                    <Form.Control type="text" placeholder="Ingresa un email" onChange={getEmail} id='iEmail' />
                </Form.Group>
                <Button variant="success" className='mt-2 text-center' type="submit">
                    Agregar colaborador
                </Button>
            </form>

            <Row>
                <table>
                    <thead>
                        <tr className='text-ligth'>
                            <th>id</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista.map(colab =>
                            <tr key={colab.id}>
                                <td className='tdCenter'> {colab.id} </td>
                                <td> {colab.nombre} </td>
                                <td> {colab.correo} </td>
                            </tr>)}
                    </tbody>
                </table>
            </Row>
        </div>
    )
}
export default AddEmpl