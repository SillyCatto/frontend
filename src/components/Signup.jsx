const Signup = () => {
  function Logo() {
    return (
      <div className="flex flex-col justify-center h-screen gap-4">
        <p className="font-firasans font-bold text-4xl">DevBuddy 🧑‍💻</p>
        <p className="font-firasans text-2xl font-semibold">
          Signup now and connect with your dev buddies
        </p>
      </div>
    );
  }

  return (
    <div>
      <Logo />
    </div>
  );
};

export default Signup;
