import { FormLayoutProps } from "../../types/types";
import Bg from "../assets/Form.bg.jpg";

const FormLayout: React.FC<FormLayoutProps> = ({
  title,
  children,
  onSubmit,
}) => {
  return (
    <div
      className="page-container-col"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <form
        onSubmit={onSubmit}
        className="p-6 rounded-lg space-y-4 "
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "50%",
          padding: "30px",
          opacity: "0.9",
        }}
      >
        <h2 className="font-bold text-4xl text-center mb-6">{title}</h2>
        {children}
      </form>
    </div>
  );
};

export default FormLayout;
