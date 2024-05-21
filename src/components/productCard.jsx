const productCard = ({ tab }) => {
  return (
    <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tabs__content-item  px-5 py-5 h-[300px] flex flex-col items-center pb-10 gap-2 ${
            activeTab === index ? "active" : "hidden"
          }`}
        >
          <img
            class="w-auto h-24 mb-3 l shadow-lg"
            src={tab.logo}
            alt="Partner"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {tab.title}
          </h5>
          <p className="text-sm text-wrap">{tab.content}</p>
        </div>
      ))}
    </div>
  );
};

export default productCard;
