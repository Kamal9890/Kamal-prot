import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import "./Experience.scss"

gsap.registerPlugin(ScrollTrigger)

const TIMELINE = [
  {
    date: "Jan 2025 - Jun 2025",
    title: "Full Stack Developer (Training Program)",
    org: "Sheriyans Coding School",
    desc: "Completed an intensive full-stack development training program, building scalable web applications using React.js, Node.js, Express.js, and MongoDB, with a strong focus on real-world project development."
  },
  {
    date: "Aug 2023 - Sep 2025",
    title: "M.Tech — Computer Science and Engineering",
    org: "Technocrats Institute of Technology, Bhopal",
    desc: "Pursued a Master’s degree in Computer Science, strengthening core concepts in software development and system design. Graduated with a CGPA of 7.82."
  },
  {
    date: "Sep 2020 - Jul 2023",
    title: "B.E — Computer Science and Engineering",
    org: "University Institute of Technology, Barkatullah University, Bhopal",
    desc: "Built a strong foundation in programming, data structures, and web technologies. Graduated with a CGPA of 8.12."
  },
  {
    date: "Sep 2017 - Aug 2020",
    title: "Diploma — Computer Hardware and Maintenance",
    org: "Government Polytechnic College, Rewa",
    desc: "Gained practical knowledge of computer hardware, networking, and system maintenance. Completed with a CGPA of 7.49."
  }
]

export default function Experience() {

  const sectionRef = useRef(null)
  const timelineRef = useRef(null)
  const lineFillRef = useRef(null)

  useGSAP(() => {

    const items = gsap.utils.toArray(".tl-item", timelineRef.current)

    items.forEach((item) => {
      const card = item.querySelector(".tl-card")
      const dot = item.querySelector(".tl-dot")

      // safer initial state
      gsap.set(card, { opacity: 0.6, y: 40 })
      gsap.set(dot, { scale: 0.8, opacity: 0.6 })
    })

    gsap.set(lineFillRef.current, {
      scaleY: 0,
      transformOrigin: "top center"
    })

    gsap.to(lineFillRef.current, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 60%",
        scrub: true
      }
    })

    items.forEach((item) => {

      const card = item.querySelector(".tl-card")
      const dot = item.querySelector(".tl-dot")

      ScrollTrigger.create({
        trigger: item,
        start: "top 75%",

        onEnter: () => {

          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
          })

          gsap.to(dot, {
            scale: 1,
            opacity: 1,
            duration: 0.4
          })

          item.classList.add("is-active")
        },

        onLeaveBack: () => {

          gsap.to(card, {
            opacity: 0.6,
            y: 40,
            duration: 0.5
          })

          gsap.to(dot, {
            scale: 0.8,
            opacity: 0.6
          })

          item.classList.remove("is-active")
        }

      })

    })

  }, { scope: sectionRef })

  return (

    <section className="journey" id="timeline" ref={sectionRef}>

      <div className="journey-hero">
        <p className="journey-kicker">02.JOURNEY</p>
        <h1 className="journey-title">Professional Path</h1>

        <p className="journey-sub">
          A snapshot of my professional journey showcasing my education and development experience.
        </p>
      </div>

      <div className="timeline" ref={timelineRef}>

        <div className="timeline-line">
          <span className="timeline-line-bg"></span>
          <span className="timeline-line-fill" ref={lineFillRef}></span>
        </div>

        {TIMELINE.map((t, i) => {

          const side = i % 2 === 0 ? "left" : "right"

          return (

            <div className={`tl-item ${side}`} key={i}>

              <div className="tl-side tl-left">
                {side === "left" && (

                  <article className="tl-card">
                    <div className="tl-date">{t.date}</div>
                    <h3 className="tl-title">{t.title}</h3>
                    <p className="tl-org">{t.org}</p>
                    <p className="tl-desc">{t.desc}</p>
                  </article>

                )}
              </div>

              <div className="tl-center">
                <span className="tl-dot"></span>
              </div>

              <div className="tl-side tl-right">
                {side === "right" && (

                  <article className="tl-card">
                    <div className="tl-date">{t.date}</div>
                    <h3 className="tl-title">{t.title}</h3>
                    <p className="tl-org">{t.org}</p>
                    <p className="tl-desc">{t.desc}</p>
                  </article>

                )}
              </div>

            </div>

          )
        })}

      </div>

    </section>

  )
}