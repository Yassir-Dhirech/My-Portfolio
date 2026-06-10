import projectOne from "../assets/project-1.png"
import projectTwo from "../assets/project-2.png"

const projects = {
    1:{
        title:"ADEI ENSA Fès — Student Platform",
        image: projectOne,
        description : (
            <>
            <p>
                Centralised platform for 1,800+ students at ENSA Fès. I came up with
                the idea, defined the scope, and co-developed it. Academic tracks,
                student clubs, club president accounts, class rep accounts, and a
                feedback system — all in one place.
            </p>
            </>
        ),
        stack:["Java","React.js","Node.js"],
        live:true,
        github: "https://github.com/adeiensafes/ADEI-Website",
        demo: "https://adei-ensaf.ma"

    },
    2:{
        title:"Rotaract Club ENSA Fès — Club Platform",
        image: projectTwo,
        description : (
            <>
            <p>
                Built solo from wireframes to deployment. Not just a showcase —
                    a platform the team uses daily. Event management, project gallery,
                    team directory, donation info, bilingual FR/EN, and an admin
                    interface to update content without touching code.
            </p>
            </>
        ),
        github: "https://github.com/Yassir-Dhirech/-rotaract-webiste",
        demo: "https://rotaract-club.adei-ensaf.ma"

    },
    3:{
        title:"Job Search Platform — ENSA Fès",
        image: "",
        description : (
            <>
            <p>
                Web platform centralising job offers and CV management for
                candidates and recruiters. Built with .NET MVC — CV uploads,
                job posting, tracking, and role-based authentication.
                Collaborative academic project validated by supervising professor.
            </p>
            </>
        ),
        github: "https://github.com/Yassir-Dhirech",
        demo: null
    }
}

export default projects;