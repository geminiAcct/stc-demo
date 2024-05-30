import Tabs from "../components/Tab";
import { products } from "../constants";

export const Partners = () => {
  return (
    <div
      className="h-screen flex flex-col gap-10	 px-[50px] py-[50px] "
      id="partners"
    >
      <h1 className="text-3xl font-roboto font-semibold uppercase">
        our trusted partners
      </h1>
      <Tabs tabs={products} />
    </div>
  );
};
