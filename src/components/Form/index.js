import TextField from '../TextField'
import DropdownList from '../DropdownList'
import Button from '../Button'
import './Form.css'

const onSave = (event) => {
    event.preventDefault()
    console.log("posting form")
}

const Form = () => {
    const teams = [
        'Backend development',
        'Frontend development',
        'Data science',
        'Devops',
        'UX & Design',
        'Mobile',
        'Management'
    ]
    
    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Fill the fields below to add a new colab</h2>
                <TextField required="true" label="Name" placeholder="insert your name"/>
                <TextField required="true" label="Role"  placeholder="insert your role"/>
                <TextField label="Image"  placeholder="insert image address"/>
                <DropdownList required="true" label="teams" itens={teams}/>
                <Button>
                    Create
                </Button>
            </form>
        </section>
    )
}

export default Form