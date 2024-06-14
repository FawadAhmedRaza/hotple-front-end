
import { Carousel } from "flowbite-react";
import Image from "next/image";
import H4 from "../ui/Typography/h4";

const FlowbiteCaresoul=({data})=> {
    console.log(data)
  return (
    <div className=" sm:h-40 xl:h-40 2xl:h-40 w-full rounded-lg ">
        <H4>
        메뉴
        </H4>
      <Carousel>
        {/* {
            data?.map((item,ind)=>{
                console.log("itme in new caresoul",item)
                return ( */}
                <Image height={300} width={70} src="/assets/images/burger.webp"/> 
                {/* <Image height={300} width={100} src="/assets/images/burger.webp"/> 
                <Image height={300} width={100} src="/assets/images/burger.webp"/>  */}
            {/* )})
        } */}
      </Carousel>
      </div>
  );
}
export default FlowbiteCaresoul


