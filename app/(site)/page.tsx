import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div
      className="
      flex
      h-[100vh]    
      justify-center      
      bg-gray-100 
      overflow-hidden
      "
    >
      <div className="w-full h-full sm:hidden">
        <Image
          alt="logo-img-left"
          height="500"
          width="500"
          className="w-full h-full object-cover"
          src={"/images/logo-img-left.png"}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Image
          alt="logo"
          height={"500"}
          width={"500"}
          className="w-[200px] h-[234px] object-cover lg:mt-12"
          src={"/images/logo.png"}
        />
        <AuthForm />
      </div>
    </div>
  );
}
