import { words } from '../constants/words.js'
import Word from './Word.jsx'

import { Accordion, AccordionItem } from "@nextui-org/react";

const Words = () => {

    return (
        <section>
            <Accordion variant="splitted" >
                {words.map((ws, index) => (
                    <AccordionItem key={index} title={ws.word} className="bg-gray-700 text-white">
                        <p className='text-black'>{ws.description}</p>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

export default Words