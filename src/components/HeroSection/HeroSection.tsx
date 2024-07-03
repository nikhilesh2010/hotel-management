import ClientComponent from "../Header/ClientComponent"
import { heading1, section2 } from "../Header/ServerComponent"

const HeroSection = () => {
    return (
        <ClientComponent heading1={heading1} section2={section2}></ClientComponent>
    )
}

export default HeroSection