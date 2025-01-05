const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex p-10">
        <p className="font-firasans font-bold text-3xl cursor-pointer">
          DevBuddy 🧑‍💻
        </p>
      </div>
      <div className="font-firasans text-3xl">Something went wrong... ☹️</div>
    </div>
  );
};

export default Error;
