import { Avatar } from "@nextui-org/react";
import me from '../imgs/profile_photo.jpg'

const Footer = () => {
    return (
        <footer>
            <span>¡Danos una estrella en GitHub!⭐</span>
            <span>Este sitio fue hecho por Joaquin Trujillo</span>
            <Avatar isBordered color="primary" src={me} className="mt-2"/>
        </footer>
    )
}

export default Footer