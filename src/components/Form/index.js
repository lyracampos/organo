import { useState } from 'react'
import Button from '../Button'
import TextField from '../TextField'
import DropdownList from '../DropdownList'
import './Form.css'

const Form = (props) => {

    const teams = [
        'Backend developer',
        'Frontend developer',
        'Data science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Management'
    ]

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onContributorCreated({
            name,
            role,
            image,
            team
        })
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    required={true}
                    label="Name"
                    placeholder="type your name" 
                    value={name}
                    onChange={value => setName(value)}
                />
                <TextField
                    required={true}
                    label="Role"
                    placeholder="type your role" 
                    value={role}
                    onChange={value => setRole(value)}
                />
                <TextField
                    label="Image"
                    placeholder="type the image address" 
                    value={image}
                    onChange={value => setImage(value)}
                />
                <DropdownList
                    required={true}
                    label="Time" 
                    itens={teams}
                    value={team}
                    onChange={value => setTeam(value)}
                />
                <Button>
                    Create
                </Button>
            </form>
        </section>
    )
}

export default Form
