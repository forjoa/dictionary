import { useState } from 'react'

const Word = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDetails = () => {
        setIsOpen(!isOpen)
    }

    return (
        <details className={`${isOpen ? 'open' : ''}`} onClick={toggleDetails}>
            <summary>{title}</summary>
            <p>{description}</p>
        </details>
    )
}

export default Word