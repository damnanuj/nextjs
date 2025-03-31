import Image from "next/image";
import "./styles.css";

const Card = () => {
  return (
 
      <div className="nft w-full h-[400px] rounded-3xl">
        <div className="main cursor-pointer">
          <Image
            className="tokenImage w-full rounded-3xl"
            src="https://media.atlys.com/b2c/clp/Japan%20CLP/japan-card.png?updatedAt=1738670701905"
            alt="NFT"
            width={400}
            height={300}
          />
          <div className=" mt-2 flex justify-between items-center">
            <h2 className="font-semibold text-black">Japan</h2>
            <p className="text-black">₹2,340</p>
          </div>
          <p className="description text-black">Get on 23 Apr, 09:52 PM</p>
          <div className="tokenInfo">
            <div className="price ">&#x2708; 2 direct flights from ₹56k</div>
            <div className="duration">
            
              
            </div>
          </div>
         
        </div>
        <div className="logo-background"></div>
      </div>
   
  );
};

export default Card;
