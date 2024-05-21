const Button = ({ name, bg_color, border, destination }) => {
  const handleClick = () => {
    window.location.href = destination; // Replace with your actual URL
  };
  return (
    <button
      type="button"
      class={`text-white ${bg_color} ${border} hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
