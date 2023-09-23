import { useState } from 'react'
import Words from './Words.jsx'
import Word from './Word.jsx'
import { words } from '../constants/words.js'

// normalize text 
const normalizeText = (text) => {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
}

const Search = () => {
    const [search, setSearch] = useState('')
    const [wordsSearched, setWordsSearched] = useState([])

    const handleChange = (event) => {
        const searchTerm = normalizeText(event.target.value)
        setSearch(searchTerm)

        // filter key word to search them
        const filteredWords = words.filter(word => normalizeText(word.word).includes(searchTerm));
        setWordsSearched(filteredWords);
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
            {search && (
                <section>
                    {wordsSearched.map((ws, index) => (
                        <Word key={index} title={ws.word} description={ws.description} />
                    ))}
                </section>
            )}
        </>
    )
}

export default Search
