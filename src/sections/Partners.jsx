import Tabs from "../components/Tab";
import { products } from "../constants";

export const Partners = () => {
  return (
    <div className=" flex flex-col gap-10	 px-[50px] pb-[100px] " id="partners">
      <h1 className="text-3xl text-black_text font-roboto font-semibold uppercase">
        our trusted partners
      </h1>
      {/* <Tabs tabs={products} /> */}
      <div className="grid grid-rows-3 grid-flow-col space-y-2 gap-2">
        {products.map((product, index) => (
          <div className=" text-primary">
            <h2 className="font-montserrat font-bold text-2xl uppercase">
              {product.title}
            </h2>

            {/* <img
              src={product.logo}
              alt="partner's logo"
              width="20%"
              className="hidden group-hover:block"
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};
