function About() {
  return (
    <div className="p-4 sm:p-20 min-h-full flex flex-col justify-center">
      <div className="flex justify-between items-center mb-5">
        <div className="text-4xl font-bold">About </div>
        <a
          href="https://drive.google.com/file/d/1cY6u2hfK9LtbyaaurTBJgdmhHvkrU-Ky/view?usp=sharing"
          className="bg-light border-4 border-medium px-4 py-2 rounded-md hover:scale-[1.05] transition ease-in-out hover:bg-dark hover:text-white"
        >
          My Resume
        </a>
      </div>
      <ul className="flex flex-col text-sm md:text-lg text-justify pt-5">
        👋 Hi, I’m Varunkumar R, a Computer Science major from Chennai 🇮🇳 with 2
        years of experience in software development. I have worked on a wide
        range of development projects and completed a 6-month Software
        Development Internship at NGP Websmart 💻, where I honed my skills in
        building scalable and user-friendly applications.
        <br />
        <br />
        I’m a highly organized and detail-oriented individual 🗂️ — I plan and
        structure every task I take on, ensuring timely and high-quality
        delivery ✅. I take pride in my work and always strive to achieve
        excellence ✨ in every project.
        <br />
        <br />
        Beyond my professional experience, I am passionate about continuous
        learning 📚 and constantly explore emerging trends 🚀 and technologies
        in the field. I am always ready to take on new challenges 🎯 and enjoy
        solving complex problems through innovative solutions 💡.
        <br />
        <br />
        Whether working independently 🧑‍💻 or collaborating within a team 🤝, I
        bring a positive mindset, strong work ethic 💪, and a drive to
        contribute meaningfully to any project.
      </ul>
    </div>
  );
}

export default About;
