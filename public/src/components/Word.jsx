
const Word = ({ title , description }) => {
    
    return (
        <details>
            <summary>{title}</summary>
            <p>{description}</p>
        </details>
    )
}

export default Word