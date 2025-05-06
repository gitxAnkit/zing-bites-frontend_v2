import hero from "../assets/heroImage.jpg";

const Hero = () => {
  return (
    <div className="bg-black">
      <img src={hero} className="w-full max-h-[500px] object-cover " />
    </div>
  );
};

export default Hero;
