import { FormLayoutProps } from "../../types/types";
import Bg from "../assets/Form.bg.jpg";

const FormLayout: React.FC<FormLayoutProps> = ({
  title,
  children,
  onSubmit,
}) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md sm:max-w-lg bg-white bg-opacity-90 rounded-lg shadow-lg p-6 sm:p-8 space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          {title}
        </h2>
        {children}
      </form>
    </div>
  );
};

export default FormLayout;
