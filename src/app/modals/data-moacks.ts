import { ProjectModal } from "./project.modal";

export let projectsDB: ProjectModal[] = [

    {
        carousel_name: "master_app",
        name: "Web Application Management",
        description: "Allows a company to manage each of the applications it offers to its customers. Another function is to allow the company to restrict the access of the customer, by his IP address, to other applications. Gives a global view of all company applications with some statistical graphs.",
        is_mobile: false,
        is_web: true,
        link_url: "",
        technologies: [
            "C#", 
            ".Net Core MVC", 
            ".Net Core API", 
            "SQL Server", 
            "xUnit"
        ],
        images_app: [
            "active;assets/icons/interfaces.png",
            ";assets/icons/interfaces.png",
            ";assets/icons/interfaces.png",
        ],
    },
    {
        carousel_name: "licence_app",
        name: "Fleet Management",
        description: "A management platform that allows an organization to manage their fleet vehicle and everything around such as insurances and vehicle vignette as well as the employees, drivers and their roles. It also shows, on a map, in real-time, the location of each driver when they start their missions.",
        is_mobile: true,
        is_web: true,
        link_url: "https://www.m-test-ang.tk/login",
        technologies: [
            "PHP", 
            "Laravel",
            "NativeScript",  
            "MySql",
            "Firebase",
            "GMap API"
        ],
        images_app: [
            "active;assets/icons/Detail-Missions.png",
            ";assets/icons/Detail-Missions.png",
            ";assets/icons/interfaces.png",
        ],
    }
] 
