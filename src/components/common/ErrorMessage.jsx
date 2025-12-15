import { errorImage } from "../../assets";

export const ErrorMessage = ({error}) => {
return (
  <div className="flex flex-col items-center">
    <p className="w-2/3 text-center p-2 bg-red-500 text-text-inverse font-medium rounded-md">
      {error}
    </p>
  </div>
);
}

export const ErrorPageMessage = () => {
  return (
    <div className="flex flex-row gap-8 justify-center items-center min-h-screen">
      <img src={errorImage} alt="Error Image" className="w-xs rounded-full"/>
      <h1 className="text-text-gray text-5xl font-bold font-poppins">404 - Page not Found</h1>
    </div>
  );
}