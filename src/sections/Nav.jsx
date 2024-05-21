import { navlink } from "../constants";
import { logo } from "../assets/images";
import Button from "../components/Button";
const Nav = () => {
  return (
    <nav className="w-full flex flex-row flex-1 justify-center items-center bg-white  px-10 py-2">
      <div class="bg-white flex flex-1 items-center justify-start">
        <div>
          <ul className="flex flex-1 gap-5">
            {navlink.map((item) => (
              <li
                key={item.label}
                className="text-black font-montserrat font-semibold hover:text-secondary"
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
