// src/sections/AllWork.jsx

import { Link } from "react-router-dom";
import DeviceMockup from "../components/DeviceMockup.jsx";

import { projects } from "./projectsData.js";



export default function AllWork() {

  const additionalProjects = projects.filter((p) => !p.featured);



  if (additionalProjects.length === 0) {

    // If you don't have more than 6 yet, you can either hide this

    // or just return null.

    return null;

  }



  return (

    <section

      id="all-work"

      className="section pt-12 pb-20 border-t border-[color:var(--line)]"

      aria-labelledby="all-work-heading"

    >

      <div className="container">

        <header className="max-w-xl">

          <p className="text-[0.65rem] uppercase tracking-[0.25em] opacity-70 mb-2">

            More projects

          </p>

          <h2

            id="all-work-heading"

            className="text-xl md:text-2xl font-semibold"

          >

            More of my work

          </h2>

          <p className="mt-3 text-sm opacity-90">

            A few extra builds and experiments that show how I think about

            layout, semantics, and front end implementation.

          </p>

        </header>



        <div className="mt-8 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

          {additionalProjects.map((project, index) => {

            const mockupType = (index + 1) % 3 === 0 ? "phone" : "laptop";



            return (

              <article

                key={project.slug}

                className="flex flex-col gap-3"

                aria-label={project.name}

              >

                <Link

                  to={`/work/${project.slug}`}

                  className="group flex flex-col gap-3"

                >

                  <div className="flex justify-center">

                    <DeviceMockup

                      type={mockupType}

                      alt={project.name}

                      className="scale-[0.95] transition-transform duration-150 group-hover:-translate-y-1 group-hover:drop-shadow-lg"

                    />

                  </div>



                  <div>

                    <h3 className="text-sm font-semibold group-hover:opacity-100 opacity-95">

                      {project.name}

                    </h3>



                    {project.role && (

                      <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] opacity-70">

                        {project.role}

                      </p>

                    )}



                    {project.description && (

                      <p className="mt-2 text-xs opacity-80 leading-relaxed">

                        {project.description}

                      </p>

                    )}



                    {project.stack && project.stack.length > 0 && (

                      <p className="mt-2 text-[0.7rem] opacity-70">

                        {project.stack.join(" · ")}

                      </p>

                    )}



                    <p className="mt-2 text-xs font-medium underline opacity-80 group-hover:opacity-100">

                      View case study →

                    </p>

                  </div>

                </Link>

              </article>

            );

          })}

        </div>

      </div>

    </section>

  );

}

