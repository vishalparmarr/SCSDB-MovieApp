import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold flex flex-row">
        <img src="/logo.svg" alt="SCSDB" className="w-5 mr-2" />
        <span className="text-2xl">SCSDB</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link className="link">
          <i className="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link className="link">
          <i className="ri-bard-fill mr-2"></i>Popular
        </Link>
        <Link className="link">
          <i className="ri-movie-2-fill mr-2"></i>Movies
        </Link>
        <Link className="link">
          <i className="ri-tv-2-fill mr-2"></i>TV Shows
        </Link>
        <Link className="link">
        <i className="ri-team-fill mr-2"></i>People</Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Website Information
        </h1>
        <Link className="link">
          <i className="ri-information-fill mr-2"></i>
          About
        </Link>
        <Link className="link">
          <i className="ri-phone-fill mr-2"></i>Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
