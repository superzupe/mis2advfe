import { useNavigate } from "react-router-dom"

const HeaderAuth = () => {
const navigate = useNavigate();

  return (
    <div className="flex flex-row gap-2">
      <ButtonAuth
        onClick={() => navigate("/login")}
        label="login"
        textColor="text-text-inverse"
        bg="bg-btn-tertiary"
        bgHover="bg-btn-tertiary-hover"
      />

      {/* ini muncul di desktop aja */}
      <div className="hidden md:flex">
        <ButtonAuth
          onClick={() => navigate("/register")}
          label="register"
          textColor="text-text-inverse"
          bg="bg-btn-tertiary-light"
          bgHover="bg-btn-tertiary-light-hover"
        />
      </div>
    
    </div>
  );
}

const ButtonAuth = ({onClick, label, textColor, bg, bgHover}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-semibold text-sm md:text-base ${textColor} ${bg} hover:${bgHover} rounded-md cursor-pointer transition-all duration-300 ease-in-out`}
    >
      {label}
    </button>
  );
}

export default HeaderAuth;