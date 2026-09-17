import Logo from "../assets/Logo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-5">
        <img src={Logo} alt="Hommender" className="w-40" />

        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-700" />

        <p className="text-lg font-medium text-blue-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
