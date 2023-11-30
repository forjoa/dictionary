import linkedinIcon from '../imgs/linkedin.svg'
import githubIcon from '../imgs/github.svg'
import twitterIcon from '../imgs/twitter.svg'

const Navigator = () => {
    return (
        <header>
            <h1>Programming Dictionary</h1>
            <div className="icons">
                <a
                    href='https://www.linkedin.com/in/joaquin-trujillo-851547254/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={linkedinIcon} />
                </a>
                <a
                    href='https://github.com/forjoa'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={githubIcon} />
                </a>
                <a
                    href='https://twitter.com/loveujoa'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={twitterIcon} />
                </a>
            </div>
        </header>
    )
}

export default Navigator