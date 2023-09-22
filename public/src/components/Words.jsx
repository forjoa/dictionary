import { words } from '../constants/words.js'
import Word from './Word.jsx'

const Words = () => {

    return (
        <section>
            {words.map(word => {
                return (
                    <Word title={word.word} description={word.description} />
                )
            })}
        </section>
    )
}

export default Words