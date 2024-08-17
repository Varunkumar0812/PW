function About() {
  return (
    <div className="p-4 sm:p-20 min-h-full flex flex-col justify-center">
      <div className="flex justify-between items-center mb-5">
        <div className="text-4xl font-bold">About </div>
        <a
          href="https://drive.google.com/file/d/1n74_yoXjfeqYvntBoIIAELrXmW7BfMDx/view?usp=sharing"
          className="bg-[#BFCFE7] border-4 border-[#0C356A] px-4 py-2 rounded-md hover:scale-[1.05] transition ease-in-out hover:bg-[#00A9FF]"
        >
          My Resume
        </a>
      </div>
      <ul className="flex flex-col text-sm md:text-lg text-justify pt-5">
        👋 Hello! I'm Varunkumar R, a Computer Science student at Anna
        University, Chennai. With a strong foundation in problem-solving and a
        knack for creative development, I've worked on diverse projects across
        the spectrum of web development.
        <br />
        <br />
        🚀 Proficient in languages like Python, JavaScript, TypeScript and Java, I've
        developed many frontend projects and some full-stack projects
        too, mastering technologies such as React, Vue JS, Adonis JS, Node.js, Express and MongoDB. I
        constantly practice problem solving on platforms like LeetCode,
        HackerRank and Geeksforgeeks.
        <br />
        <br />
        🤖 So far, I have improved my expertise on full-stack development, In the
        following years I am eager to explore other fields like DevOps, Microservices, etc,
        I am actively learning from the tech community and eager to contribute to some open source projects
      </ul>
    </div>
  );
}

export default About;
