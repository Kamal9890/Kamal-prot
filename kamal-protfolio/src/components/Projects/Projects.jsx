import React from 'react'
import './Projects.scss'

const PROJECTS = [
    {
        title: "MERN E-Commerce Platform",
        desc: "Built a full-stack e-commerce application with user authentication, product management, cart system, and secure checkout functionality.",
        image: "/assets/images/common/sambad.png",
        tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
        links: [
            { label: "Live Demo", href: "https://sambaad-mart-gqe6.vercel.app/", icon: "↗" },
            { label: "Source Code", href: "https://github.com/Kamal9890/Sambaad-Mart", icon: "💻" }
        ]
    },

    {
        title: "Tomoto Website",
        desc: "Developed a modern food delivery UI inspired by Zomato with responsive design, restaurant listings, filters, and smooth user experience.",
        image: "/assets/images/common/tomoto.png",
        tags: ["React", "CSS", "API Integration", "Responsive Design"],
        links: [
            { label: "Live Demo", href: "https://foods-website-green.vercel.app/", icon: "↗" },
            { label: "Source Code", href: "https://github.com/Kamal9890/tomoto-website", icon: "💻" }
        ]
    },

    {
        title: "YouTube Clone",
        desc: "Created a YouTube clone with video streaming, search functionality, category filters, and dynamic video rendering using APIs.",
        image: "/assets/images/common/vidtube.png",
        tags: ["React", "YouTube API", "Axios", "Tailwind CSS"],
        links: [
            { label: "Live Demo", href: "https://youtube-clone-tau-lyart.vercel.app/", icon: "↗" },
            { label: "Source Code", href: "https://github.com/Kamal9890/youtubeClone", icon: "💻" }
        ]
    },

    {
        title: "Digital Agency Website",
        desc: "Designed a high-end animated agency website with modern UI, smooth scroll animations, and interactive sections using GSAP.",
        image: "/assets/images/common/digital-agency.png",
        tags: ["React", "GSAP", "ScrollTrigger", "SCSS", "UI/UX"],
        links: [
            { label: "Live Demo", href: "https://agency-io-woad.vercel.app/", icon: "↗" },
            { label: "Source Code", href: "https://github.com/Kamal9890/agency.io", icon: "💻" }
        ]
    }
];



export default function Projects() {

    return (
        <section className="projects" id="projects">
            <div className="sectionHeader">
                <p className="sectionKicker">04. PROJECTS</p>
                <h2 className="sectionTitle">PROJECTS</h2>
                <p className="sectionSub">
                    Here are some of my projects that showcase my skills and experience in web development.
                    Each project demonstrates my ability to create responsive, user-friendly, and visually appealing applications using modern technologies and best practices.
                    Feel free to explore the live demos and source code to see how I bring ideas to life through code.
                </p>
            </div>
            <div className="projectsGrid">
                {
                    PROJECTS.map((p) => {
                        return (
                            <article className="projectsCard" key={p.title}>
                            <div className="projectMedia">
                                <img src={p.image} alt="" loading='lazy' />
                                <div className="projectMediaOverlay"></div>
                            </div>

                            <div className="projectBody">
                                <h3 className="projectTitle">{p.title}</h3>
                                <p className="projectDesc">{p.desc}</p>

                                <div className="projectTags">
                                    {p.tags.map((t) => (
                                        <span className="tag" key={t}>
                                            {t}

                                        </span>
                                    ))}
                                </div>

                                <div className="projectFooter">
                                    {p.links.map((l) => (
                                        <a href={l.href} target='_blank' rel='norreferrer' className='projectLink' key={l.label}
                                        >
                                            <span className="icon"> {l.icon}</span>
                                            {l.label}
                                        </a>


                                    ))}
                                </div>
                            </div>
                        </article>
                        )

                    })
                }
            </div>
        </section>
    )

}