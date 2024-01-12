import DogBreedIdentification from "../assests/dog-vision.png";
import NatoursApp from "../assests/natours-app.png";
import HousePrediction from "../assests/house-prediction.png";
import DiabetesPrediction from "../assests/diabetes-prediction.png";
import CampusHallBooking from "../assests/campus-hall-booking.png";
import CGPACalculator from "../assests/cgpa-calculator.png";
import DeptOfMaths from "../assests/dept-of-maths.png";
import EtaxConsultancy from "../assests/etax-consultancy.png";
import HireMeApp from "../assests/hire-me-app.png";
import RegisterLogin from "../assests/registration-login-java.png";
import SignalsRepresentations from "../assests/signals-representations.png";
import TemperatureConv from "../assests/temperature-convertor.png";
import TicTacToe from "../assests/tic-tac-toe.png";
import UserAlbums from "../assests/user-albums-collections.png";

function Projects() {
  const colorCodes = [
    {
      title: "HTML/CSS",
      color: "rgb(214, 94, 2",
    },
    {
      title: "JavaScript",
      color: "rgb(221, 170, 2",
    },
    {
      title: "Java",
      color: "rgb(224, 6, 119",
    },
    {
      title: "Python",
      color: "rgb(5, 1, 127",
    },
    {
      title: "React Js",
      color: "rgb(26, 163, 242",
    },
    {
      title: "Node.js",
      color: "rgb(56, 196, 21",
    },
    {
      title: "Express",
      color: "rgb(124, 124, 124",
    },
    {
      title: "MongoDB",
      color: "rgb(12, 135, 22",
    },
    {
      title: "Redux",
      color: "rgb(51, 7, 132",
    },
    {
      title: "RESTful API",
      color: "rgb(242, 24, 242",
    },
    {
      title: "Tkinter",
      color: "rgb(165, 39, 1",
    },
    {
      title: "JSPs",
      color: "rgb(209, 209, 29",
    },
    {
      title: "Servlets",
      color: "rgb(198, 67, 1",
    },
    {
      title: "ML",
      color: "rgb(16, 93, 181",
    },
    {
      title: "MySQL",
      color: "rgb(92, 17, 158",
    },
    {
      title: "Tensorflow",
      color: "rgb(199, 206, 6",
    },
    {
      title: "Pug",
      color: "rgb(1, 103, 117",
    },
  ];

  const projects = [
    {
      title: "Natours",
      link: "https://github.com/Varunkumar0812/Natours",
      photo: NatoursApp,
      content:
        "A full stack tour management system built using Node.js, Express and MongoDB",
      deploymentLink: "https://natours-app-lsi1.onrender.com/",
      badges: ["Node.js", "Express", "MongoDB", "Pug"],
    },
    {
      title: "Dog Breed Identification",
      link: "",
      photo: DogBreedIdentification,
      content:
        "End-to-End building of a machine learning model that identifies the breed of the dog given the image of the dog.",
      deploymentLink:
        "https://colab.research.google.com/drive/11Mbw_i7wjQ3aMK8y7qReqohblka7tGLL?usp=sharing",
      badges: ["Python", "ML", "Tensorflow"],
    },
    {
      title: "House Price Prediction",
      link: "https://github.com/Varunkumar0812/House-Price-Prediction",
      photo: HousePrediction,
      content:
        "Built a model to predict the price of house, experimented with various classification algorithms.",
      deploymentLink: "",
      badges: ["Python", "ML"],
    },
    {
      title: "Diabetes Prediction",
      link: "https://github.com/Varunkumar0812/Diabetes-Prediction",
      photo: DiabetesPrediction,
      content:
        "Explored the diabetes dataset of patients and experimented with various classification and regression algorithms to predict the likelihood of diabetes for a patient.",
      deploymentLink: "",
      badges: ["Python", "ML"],
    },
    {
      title: "Campus Hall Booking System",
      link: "https://github.com/Varunkumar0812/hall-booking-frontend",
      photo: CampusHallBooking,
      content:
        "A Full stack hall booking system developed following fundamental software development principles. ",
      deploymentLink: "https://hall-booking-frontend.vercel.app/",
      badges: ["React Js", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "User Albums Collections",
      link: "https://github.com/Varunkumar0812/User-Albums-Collections-Client",
      photo: UserAlbums,
      content:
        "Simulates a User Photo Storage implmented with React using Redux Toolkit. Async Thunks and Redux Query Tool for state management. JSON Webserver to store data, includes APIs to fecth data.",
      deploymentLink: "https://user-albums-collections-client.vercel.app/",
      badges: ["React Js", "Redux", "RESTful API"],
    },
    {
      title: "HireMe - Job Portal System",
      link: "https://github.com/Varunkumar0812/HireMe_A-Java-Webapp",
      photo: HireMeApp,
      content:
        "A Job portal web application built using primitive Java Web tools like JSPs and Servlets.",
      deploymentLink: "",
      badges: ["Java", "JSPs", "Servlets", "MySQL"],
    },
    {
      title: "Registration & Login System",
      link: "https://github.com/Varunkumar0812/Registration-Login-System-Web-Based",
      photo: RegisterLogin,
      content:
        "Simulation of registration and login authorization in Java using JSPs and Servlets.",
      deploymentLink: "",
      badges: ["Java", "JSPs", "Servlets", "HTML/CSS", "MySQL"],
    },
    {
      title: "ETAX Consultancy - Landing Page",
      link: "https://github.com/Varunkumar0812/ETAX-Consultancy_A-Landing-Page",
      photo: EtaxConsultancy,
      content:
        "A simple, responsive landing page for a tax consulting corporation.",
      deploymentLink:
        "https://varunkumar0812.github.io/ETAX-Consultancy_A-Landing-Page/",
      badges: ["HTML/CSS", "JavaScript"],
    },
    {
      title: "AU Department of Mathematics",
      link: "https://github.com/Varunkumar0812/AU-Department-of-Mathematics",
      photo: DeptOfMaths,
      content:
        "A clone of the Department of Mathematics website of Anna University.",
      deploymentLink:
        "https://varunkumar0812.github.io/AU-Department-of-Mathematics/",
      badges: ["HTML/CSS", "JavaScript"],
    },
    {
      title: "Temperature Convertor",
      link: "https://github.com/Varunkumar0812/Temperature-Convertor",
      photo: TemperatureConv,
      content: "Simple Temperature-Convertor from Celsius to Fahrenheit",
      deploymentLink: "https://varunkumar0812.github.io/Temperature-Convertor",
      badges: ["HTML/CSS", "JavaScript"],
    },
    {
      title: "Signals Operations Visualization",
      link: "https://github.com/Varunkumar0812/Signals-Operations-Visualization",
      photo: SignalsRepresentations,
      content:
        "A Python application that provides graphical visualization of the sin Signal and the results of basic operations such as Amplitude Scaling, Time Scaling, Time Shifting and Time Reversal",
      deploymentLink: "",
      badges: ["Python", "Tkinter"],
    },
    {
      title: "CGPA Calculator",
      link: "https://github.com/Varunkumar0812/CGPA-Calculator",
      photo: CGPACalculator,
      content:
        "A Python Application to calculate the CGPA to my course, M.Sc Integrated Computer Science.",
      deploymentLink: "",
      badges: ["Python", "Tkinter"],
    },
    {
      title: "Tic-Tac-Toe Game",
      link: "https://github.com/Varunkumar0812/Tic-Tac-Toe",
      photo: TicTacToe,
      content: "A basic game in Python using Tkinter module for GUI.",
      deploymentLink: "",
      badges: ["Python", "Tkinter"],
    },
  ];

  const items = colorCodes.map((a) => a.title);
  const badgeClass =
    "inline-flex items-center rounded-md px-2 m-0.5 py-1 text-xs font-medium text-black border border-3";

  const renderedItems = projects.map((item) => {
    const renderedBadges = item.badges.map((badge) => {
      const color = colorCodes[items.indexOf(badge)].color;

      return (
        <span
          className={badgeClass}
          style={{
            backgroundColor: color + ", 0.30)",
            color: color,
            borderColor: color + ", 0.75)",
          }}
        >
          {badge}
        </span>
      );
    });

    return (
      <div className="w-full md:w-1/2 my-2 sm:px-2 lg:w-1/3 ">
        <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
          <a href={item.link}>
            <img
              class="h-40 w-full object-contain rounded-t-lg"
              src={item.photo}
              alt={item.photo}
            />
          </a>
          <div class="p-4 min-h-52">
            <a href={item.link}>
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">
                {item.title}
              </h5>
            </a>
            <div className="w-full flex flex-wrap h-7 overflow-hidden">
              {renderedBadges}
            </div>
            <p class="mb-3 mt-3 h-14 text-sm font-normal text-gray-700 overflow-hidden">
              {item.content}
            </p>
            {item.deploymentLink !== "" && (
              <a
                href={item.deploymentLink}
                className="text-blue-500 hover:underline hover:text-blue-800"
              >
                View Deployment
              </a>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="p-4 sm:p-10">
      <div className="text-4xl font-bold mb-5">Projects </div>
      <div className="flex flex-wrap">{renderedItems}</div>
    </div>
  );
}

export default Projects;
