// src/sections/WorkShowcase.jsx

import { Link } from "react-router-dom";
import DeviceMockup from "../components/DeviceMockup.jsx";

import { projects } from "./projectsData.js";



export default function WorkShowcase() {

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);
  // slice is just a safety guard in case you mark 8 as featured later



  return (

    <section

      id="projects"

      className="section pt-20 pb-20"

      aria-labelledby="work-heading"

    >

      <div className="container lg:grid lg:grid-cols-[300px_1fr] lg:gap-24 xl:gap-32">

        {/* Left intro column */}

        <div className="mb-10 lg:mb-0 lg:sticky lg:top-0 self-start">

          <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-70 mb-3">

            Portfolio · Frontend · Automation

          </p>



          <h1

            id="work-heading"

            className="text-3xl md:text-[2.4rem] font-semibold leading-tight mb-4"

          >

            Hello!

            <br />

            I&apos;m Nick

            <br />

            I&apos;m a Developer.

          </h1>



          <p className="text-sm md:text-[0.95rem] max-w-xs leading-[1.55] opacity-90">

            I like connecting the dots between design and implementation. I

            build clean UIs, wire them to real data and tools, and use

            automation or AI when it actually makes people&apos;s lives easier.

          </p>



          <p className="text-[0.68rem] uppercase tracking-[0.22em] mt-6 opacity-60">

            Selected work

          </p>

          <div className="mt-2 mb-6 h-px w-24 bg-[color:var(--line)]" />

        </div>



        {/* Right project gallery – 6 featured */}

        <div className="grid gap-16 sm:grid-cols-2 xl:grid-cols-3 mt-24 lg:mt-28">

          {featuredProjects.map((project, index) => {

            const mockupType = (index + 1) % 3 === 0 ? "phone" : "laptop";



            return (

              <article

                key={project.slug}

                className="flex flex-col items-center text-center gap-3"

                aria-label={project.name}

              >

                <Link

                  to={`/work/${project.slug}`}

                  className="group flex flex-col items-center text-center gap-3"

                >

                  <DeviceMockup

                    type={mockupType}

                    alt={project.name}

                    className="scale-[1.05] transition-transform duration-150 group-hover:-translate-y-1 group-hover:drop-shadow-lg"

                  />

                  <p className="text-xs font-medium tracking-tight group-hover:opacity-100 opacity-90">

                    {project.name}

                  </p>

                </Link>

              </article>

            );

          })}



          {/* if you have fewer than 6 for now, grid still behaves */}

        </div>

      </div>



      {/* View all work link */}

      <div className="container mt-10">

        <Link

          to="/work"

          className="text-sm font-medium underline opacity-80 hover:opacity-100"

        >

          View more work →

        </Link>

      </div>

    </section>

  );

}
