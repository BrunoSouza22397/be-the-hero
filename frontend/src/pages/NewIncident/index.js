import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')
    let [value, setValue] = useState('')

    let ongId = localStorage.getItem('ongId')

    let history = useHistory()

    async function handleNewIncident(e) {
        e.preventDefault()

        let data = {
            title,
            description,
            value
        }

        await api.post('incidents', data, {
            headers: {
                Authorization: ongId
            }
        }).then(() => {
            history.push('/profile')
        })
        .catch(() => {
            alert('Erro ao cadastrar caso, tente novamente.')
        })
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                      placeholder="Título do caso"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                      placeholder="Descrição"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                      placeholder="Valor em reais"
                      value={value}
                      onChange={e => setValue(e.target.value)}
                    />

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}