import Sidenav from "../partials/Sidenav";

const Home = () => {
  document.title = "SCSDB | Homepage";
  return (
    <>
    <Sidenav/>
      <div className="w-[80%] h-full bg-[#1F1E24]"></div>
    </>
  );
};

export default Home;
