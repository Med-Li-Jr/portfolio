import { ProjectModal } from "./project.modal";

export let projectsDB: ProjectModal[] = [

    {
        carousel_name: "master_app",
        name: "Web Application Management",
        description: `Allows a company to manage the usage of each of the applications it offers to its customers.
                     It also allows the company to restrict the access of the customer, by his IP address, to other applications and 
                     gives a global view of those applications with some graphs.`,
        is_mobile: false,
        is_web: true,
        link_url: "",
        technologies: [
            "C#", 
            ".Net Core MVC/API", 
            "SQL Server", 
        ],
        // version: 1,
        // technologies2: [],
        images_app: [
            "active;assets/icons/master1.png",
            ";assets/icons/master2.png",
            ";assets/icons/master3.png",
            ";assets/icons/master4.png",
            ";assets/icons/master5.png",
            ";assets/icons/master6.png",
            ";assets/icons/master7.png",
            ";assets/icons/master8.png",
        ],
    },
    {
        carousel_name: "licence_app",
        name: "Fleet Management",
        description: `A management platform that allows an organization to manage their fleet vehicle and 
        everything around such as insurances and vehicle vignette as well as the employees, drivers and their roles. 
        It also shows, on a map, in real-time, the location of each driver when they start their missions.`,
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
        // version: 2,
        // technologies2: [
        //     "C#", 
        //     ".Net Core API",
        //     "Angular",  
        //     "Flutter",  
        //     "Sql Server",
        //     "Firebase",
        //     "MapBox API"
        // ],
        images_app: [
            "active;assets/icons/licence1.png",
            ";assets/icons/licence2.png",
            ";assets/icons/licence3.png",
            ";assets/icons/licence3a.png",
            ";assets/icons/licence4.png",
            ";assets/icons/licence5.png",
            ";assets/icons/licence6.png",
            ";assets/icons/licence6a.png",
            ";assets/icons/licence7.png",
            ";assets/icons/licence7a.png",
            ";assets/icons/licence8.png",
            ";assets/icons/licence9.png",
        ],
    },
    {
        carousel_name: "uber_app",
        name: "Ride-Hailing App",
        description: `
        An android app where a user can see, on a map, all available drivers within a certain radius around him.
        It shows the user, an invoice for his trip before sending a request to the driver and after the trip ends.
        `,
        is_mobile: true,
        is_web: false,
        link_url: "",
        technologies: [
            "JAVA", 
            "Android Studio",
            "Firebase",  
            "GMap API"
        ],
        // version: 1,
        // technologies2: [],
        images_app: [
            "active;assets/icons/uber1.png",
            // ";assets/icons/uber2.png",
            ";assets/icons/uber3.png",
            // ";assets/icons/uber4.png",
            ";assets/icons/uber5.png",
            // ";assets/icons/uber6.png",
            // ";assets/icons/uber7.png",
            ";assets/icons/uber8.png",
            // ";assets/icons/uber9.png",
            ";assets/icons/uber10.png",
            ";assets/icons/uber11.png",
            ";assets/icons/uber12.png",
        ],
    }
] 

export let sideProjectsDB: ProjectModal[] = [

    {
        carousel_name: "fleet_app",
        name: "Fleet App",
        description: `A new short version of the 'Fleet Management' project developed with new technologies.`,
        is_mobile: true,
        is_web: true,
        link_url: "",
        technologies: [
            "C#", 
            ".Net Core API", 
            "Angular", 
            "Flutter", 
            "SQL Server", 
            "Firebase", 
            "MapBox API", 
        ],
        images_app: [
        ],
    },
    {
        carousel_name: "construction_app",
        name: "Construction App",
        description: `Allows a contractor to manage construction operations on his sites.
        From the equipment management to employee management and their schedule management.`,
        is_mobile: true,
        is_web: false,
        link_url: "https://www.m-test-ang.tk/login",
        technologies: [
            "JAVA",
            "Android Studio",
            "Firebase",
        ],
        images_app: [
        ],
    },
    {
        carousel_name: "real_estate_app",
        name: "Real Estate App",
        description: `Allows a entity to manage its real estate assets.
        From invoice management to tenant rent management. It also allows an individual to search
        for properties to rent with specific criteria.`,
        is_mobile: true,
        is_web: false,
        link_url: "",
        technologies: [
            "JAVA",
            "Android Studio",
            "Laravel",
            "MySQL",
        ],
        images_app: [
        ],
    }
] 
