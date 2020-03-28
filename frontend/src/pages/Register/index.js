import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Register() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [whatsapp, setWhatsapp] = useState('')
    let [city, setCity] = useState('')
    let [uf, setUF] = useState('')

    let history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()

        let data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        await api.post('ongs', data)
          .then((res) => {
            alert(`Seu ID de acesso: ${res.data.id}`)
            history.push('/')
          })
          .catch( () => {
              alert("Erro ao cadastrar") 
          })
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o logon
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                      placeholder="Nome da ONG"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                    <input 
                      type="email" 
                      placeholder="E-mail" 
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                      placeholder="WhatsApp"
                      value={whatsapp}
                      onChange={e => setWhatsapp(e.target.value)}
                    />
                    
                    <div className="input-group">
                        <input 
                          placeholder="Cidade" 
                          value={city}
                          onChange={e => setCity(e.target.value)}
                        />
                        <input 
                          placeholder="UF" 
                          style={{ width: 80 }} 
                          value={uf}
                          onChange={e => setUF(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}