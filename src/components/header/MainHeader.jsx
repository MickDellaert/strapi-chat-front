const MainHeader = () => {
  const mainHeaderTitle = "Strapi React Chat App";
  return (
    <div className="flex flex-col justify-center items-center h-1/8 w-full rounded-t-lg bg-fuchsia-900">
      <h2 className="text-3xl font-bold text-white h-10">{mainHeaderTitle}</h2>
    </div>
  );
};

export default MainHeader;
