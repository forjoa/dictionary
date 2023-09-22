
const Word = ({ title , description }) => {
    console.log(title ,':', description)
    return (
        <details>
            <summary>{title}</summary>
            <p>{description}</p>
        </details>
    )
}

export default Word