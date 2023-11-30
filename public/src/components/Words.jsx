import { words } from '../constants/words.js'
import Word from './Word.jsx'

const Words = () => {

    return (
        <section>
            {words.slice(0, 10).map((ws, index) => (
                <Word key={index} title={ws.word} description={ws.description} />
            ))}
        </section>
    )
}

export default Words