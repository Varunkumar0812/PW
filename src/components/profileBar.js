<<<<<<< HEAD
import Profile from "../assests/profile-white-bg.png";
import ProfileData from "../data/profile-data.json";
import SocialMediaLinks from "./social-media";

function ProfileBar() {
  return (
    <div className="w-full md:w-[450px] h-full rounded-t-md md:rounded-tr-none md:rounded-l-md bg-[#00A9FF]">
      <div className="w-full h-full rounded-t-md md:rounded-tr-none md:rounded-l-md px-2 py-5 overflow-auto cursor-default">
        <div className="flex justify-center">
          <img
            src={Profile}
            alt="my-face"
            className="w-60 h-80 rounded-md shadow-lg hover:shadow-2xl hover:scale-[1.01] transition ease-in-out"
          />
        </div>
        <div className="text-center mt-6">
          <div className="text-3xl font-bold text-black drop-shadow-lg shadow-black">
            {ProfileData.name}
          </div>
          <div className="text-md mt-4">{ProfileData.titles}</div>
        </div>

        <div className="text-center mt-8">
          <div className="text-lg font-bold">Contact Me : </div>
          <a
            href="mailto:varunkumarceg@gmail.com"
            className="text-md mt-2 cursor-pointer hover:text-[#0C356A] hover:font-semibold "
          >
            {ProfileData.email}
          </a>
          <div className="text-md mt-2">{ProfileData.phone}</div>
        </div>

        <SocialMediaLinks />
      </div>
    </div>
  );
}

export default ProfileBar;
=======
import Profile from "../assests/profile-white-bg.png";
import ProfileData from "../data/profile-data.json";
import SocialMediaLinks from "./social-media";

function ProfileBar() {
  return (
    <div className="w-full md:w-[450px] h-full rounded-t-md md:rounded-tr-none md:rounded-l-md bg-[#00A9FF]">
      <div className="w-full h-full rounded-t-md md:rounded-tr-none md:rounded-l-md px-2 py-5 overflow-auto cursor-default">
        <div className="flex justify-center">
          <img
            src={Profile}
            alt="my-face"
            className="w-60 h-80 rounded-md shadow-lg hover:shadow-2xl hover:scale-[1.01] transition ease-in-out"
          />
        </div>
        <div className="text-center mt-6">
          <div className="text-3xl font-bold text-black drop-shadow-lg shadow-black">
            {ProfileData.name}
          </div>
          <div className="text-md mt-4">{ProfileData.titles}</div>
        </div>

        <div className="text-center mt-8">
          <div className="text-lg font-bold">Contact Me : </div>
          <a
            href="mailto:varunkumarceg@gmail.com"
            className="text-md mt-2 cursor-pointer hover:text-[#0C356A] hover:font-semibold "
          >
            {ProfileData.email}
          </a>
          <div className="text-md mt-2">{ProfileData.phone}</div>
        </div>

        <SocialMediaLinks />
      </div>
    </div>
  );
}

export default ProfileBar;
>>>>>>> 57d424dfcdf03edd5bf3aa9e7c7135b457611039
