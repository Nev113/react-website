import { useState } from 'react'
import Header from './components/Header'
import Description from './components/Description'


function App() {
    const persons = ['Nev113', 'Agus', 'Zeva'];
    const [likes, setLikes] = useState(0);
    return (
        <>
        <Header />
        <button onClick={() => setLikes(likes + 1)}>Likes ({likes})</button>
        <ul>
            {persons.map((person, index) => (
                <li key={index}>{person}</li>
            ))}
        </ul>
        <Description author='Nev113'/>
        </>
    )
}

export default App
