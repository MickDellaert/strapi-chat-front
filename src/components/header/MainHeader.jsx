const MainHeader = () => {
  const mainHeaderTitle = "Strapi React Chat App";
  return (
    <div className="flex flex-col justify-center items-center h-1/8 w-full rounded-t-lg bg-indigo-300">
      <h2 className="text-3xl font-bold text-indigo-900 h-10">
        {mainHeaderTitle}
      </h2>
    </div>
  );
};

export default MainHeader;
