import { navlink } from "../constants";
import stc_logo from "/logo.png";
import Button from "../components/Button";

const Nav = () => {
  return (
    <nav className="w-full flex flex-row flex-1 justify-center items-center bg-white  px-10 py-2">
      <div class="bg-white flex flex-1 items-center space-x-8">
        <div>
          <a href="#home" className="flex flex-1 items-center space-x-1">
            <img src={stc_logo} alt="stc-logo" width="50rem" className="" />

            <p className="border-l-2 border-black pl-2 uppercase font-semibold text-xl font-roboto text-black_text">
              shellsoft
            </p>
          </a>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-1 gap-5">
            {navlink.map((item) => (
              <li
                key={item.label}
                className="text-black_text font-montserrat font-semibold hover:text-secondary"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" flex flex-1 justify-end items-center ">
        <Button
          name="Contact Us"
          bg_color="bg-green"
          destination="#contact-us"
        />
      </div>
    </nav>
  );
};

export default Nav;
