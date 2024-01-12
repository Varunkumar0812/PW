function Experience() {
  return (
    <div className="p-4 sm:p-10">
      <div className="text-4xl font-bold mb-5">Experience</div>
      <ul className="flex flex-col px-5 py-5">
        <ol class="relative border-s border-gray-400">
          <li class="ms-4">
            <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              July 2023 - August 2023
            </time>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
              Web Development Internship
            </h3>
            <p class="mb-2 text-base font-semibold text-gray-500 dark:text-gray-400">
              Code Casa
            </p>
            <p class="mb-4 text-base dark:text-gray-400">
              <strong>Summary : </strong>
              <br />
              Online internship focused on web development with daily assigned
              tasks and opportunities for skill acquisition in React Js, HTML,
              CSS and JavaScript
              <br />
              <strong>Skills Acquired : </strong>
              <br /> Proficiency in React Js, utilizing it for creating dynamic
              and interactive user interfaces. Developed and styled web pages
              using HTML, CSS and JavaScript, ensuring responsive design and
              cross-browser opportunity.
            </p>
          </li>
        </ol>
      </ul>
    </div>
  );
}

export default Experience;
