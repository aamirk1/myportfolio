import { Anchor } from "@mantine/core";

const Header = () => {
    return (
        <nav>
            <h1>Portfolio</h1>
            <div>
            <Anchor href="#about" underline="never">About</Anchor>
            <Anchor href="#skills" underline="never">Skills</Anchor>
            <Anchor href="#experience" underline="never">Experience</Anchor>
            <Anchor href="#work" underline="never">Work</Anchor>
            <Anchor href="#contact" underline="never">Wontact</Anchor>
            </div>
        </nav>
    );
}

export default Header;