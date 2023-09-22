import { useState } from 'react'
import Words from './Words.jsx'
import Word from './Word.jsx'

const Search = () => {
    const [search, setSearch] = useState('')

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <>
            <main>
                <input 
                    type="text" 
                    placeholder="Buscar la palabra" 
                    className="search" 
                    value={search}
                    onChange={handleChange}
                />
            </main>
            {!search && <Words />}
            
        </>
    )
}

export default Search