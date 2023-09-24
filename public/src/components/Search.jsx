import { useState } from 'react'
import Words from './Words.jsx'
import Word from './Word.jsx'
import { words } from '../constants/words.js'

import { Accordion, AccordionItem } from '@nextui-org/react'

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
                    <Accordion variant="splitted">
                        {wordsSearched.map((ws, index) => (
                            <AccordionItem key={index} title={ws.word} className="!bg-gray-700 bg-opacity-40 !text-white">
                                <p className='text-black w-full'>{ws.description}</p>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
            )}
        </>
    )
}

export default Search
