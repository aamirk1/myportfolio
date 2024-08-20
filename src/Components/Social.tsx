import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Social=()=>{

    const socialLinks = [{link:"https://github.com/aamirk1", icon:IconBrandGithub}, {link:"https://in.linkedin.com/in/aamirkhan131", icon:IconBrandLinkedin},];
    const socialIcons = socialLinks.map((socialLinks) => {
        return <a href={`${socialLinks.link}`} target="_blank" className="font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
        <socialLinks.icon className="-rotate-90" size={30} />
    </a>
    })


    return <div className="flex text-textColor items-center gap-10 fixed bottom-40 -left-32 rotate-90">
    {socialIcons}
    <hr className="border-[2px] w-40 rounded-full  bg-textColor border-textColor" />
</div>
}

export default Social;