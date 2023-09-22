import Words from './Words.jsx'

const Search = () => {
    return (
        <>
            <main>
                <input type="text" placeholder="Search the word" className="search" />
            </main>
            <Words />
        </>
    )
}

export default Search