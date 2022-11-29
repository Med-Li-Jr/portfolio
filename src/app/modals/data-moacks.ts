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
            ".Net Core MVC", 
            ".Net Core Web API", 
            "SQL Server", 
        ],
        images_app: [
            "active;https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/master1.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/master2.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/master3.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/master4.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/master5.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/master6.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/master7.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/master8.png",
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
        link_url: "https://med-li-jr.github.io/fleetapp",
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
            "active;https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/licence1.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/licence2.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/licence3.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/licence3a.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/licence4.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/licence5.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/licence6.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/licence6a.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/licence7.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/licence7a.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/licence8.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/licence9.png",
        ],
    },
    {
        carousel_name: "spotify_app",
        name: "Spotify Music Web App",
        description: `
            A music app that allows a user to list, search, stream tracks (songs) and get other data from his spotify account.
            He can search tracks, see Recommendations/Liked/Recently Played Tracks, also can see his Albums, Artists, Playlists and Podcast saved.
        `,
        is_mobile: false,
        is_web: true,
        link_url: "https://med-li-jr.github.io/spotifyapp/",
        technologies: [
            "Bootstrap",
            "Angular",
            "Spotify API",
        ],
        images_app: [
            "active;https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/spotify1.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/spotify2.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/spotify3.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/spotify4.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/spotify5.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/spotify6.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/spotify7.png",
        ],
    }
] 

export let sideProjectsDB: ProjectModal[] = [
/*
    {
        carousel_name: "fleet_app",
        name: "Fleet App",
        description: `A version of the 'Fleet Management' project developed with other technologies.`,
        is_mobile: true,
        is_web: true,
        link_url: "",
        technologies: [
            "PHP", 
            "Laravel",
            "NativeScript",  
            "MySql",
            "Firebase",
            "GMap API"
        ],
        images_app: [
        ],
    },*/
    {
        carousel_name: "uber_app",
        name: "Ride-Hailing App",
        description: `
        Two android apps, one for the driver and one for the rider. It allows a rider to see, on a map, all available drivers within a certain radius around him.
        It shows also to the rider, an invoice for his trip before sending a request to the driver and after the trip ends.
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
        images_app: [
            "active;https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/uber1.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/uber3.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/uber5.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/uber8.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/uber10.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/uber11.png",
            ";https://raw.githubusercontent.com/Med-Li-Jr/images_demo/main/portfolio/uber12.png",
        ],
    },
    {
        carousel_name: "construction_app",
        name: "Construction App",
        description: `Allows a contractor to manage construction operations on his sites.
        From the equipment management to employee management and their schedule management.`,
        is_mobile: true,
        is_web: false,
        link_url: "http://www.fleetapp.tk",
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
