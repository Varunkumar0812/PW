function About() {
  return (
    <div className="p-4 sm:p-20">
      <div className="flex justify-between items-center mb-5">
        <div className="text-4xl font-bold">About </div>
        <a
          href="https://drive.google.com/file/d/1BtqBhvKrCM5_g9dTh_CPk-riKqZQmX2B/view?usp=sharing"
          className="bg-[#BFCFE7] border-4 border-[#0C356A] px-4 py-2 rounded-md hover:scale-[1.05] transition ease-in-out hover:bg-[#00A9FF]"
        >
          Download Resume
        </a>
      </div>
      <ul className="flex flex-col text-sm md:text-lg text-justify pt-5">
        👋 Hello! I'm Varunkumar R, a Computer Science student at Anna
        University, Chennai. With a strong foundation in problem-solving and a
        knack for creative development, I've worked on diverse projects across
        the spectrum of web development.
        <br />
        <br />
        🚀 Proficient in languages like Python, JavaScript, and Java, I've
        developed quite a few frontend projects and some full-stack projects
        too, mastering technologies such as React, Node.js, and MongoDB. I
        constantly practice problem solving on platforms like LeetCode and
        HackerRank.
        <br />
        <br />
        🤖 So far, I have improved my expertise on web development, In the
        following years I am eager to explore the field of Machine Learning and
        Artificial Intelligence, I've ventured into building basic ML models and
        am now hungry for more. From studying fundamental concepts to working
        with frameworks like TensorFlow and PyTorch, I am trying to delve deep
        to Artificial Intelligence concepts and technologies.
        <br />
        <br />I am actively looking forward for any internship opportunities in
        Web development or ML & AI to gain some valuable industrial experience.
        🌐✨
      </ul>
    </div>
  );
}

export default About;
