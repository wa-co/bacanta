import Image from "next/image";
import { useRouter } from "next/dist/client/router";


const CarteThumbnail = ({ result }) => {
  const router = useRouter();

  return (
    <div
      className="flex min-w-[250px] min-h-[170px] md:min-w-[220px] md:min-h-[520px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl"
      onClick={() => router.push(`/book/${result.id}`)}
    >
      <Image
        src={result.image}
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 transform transition duration-500 hover:scale-110"
      />
    </div>
  );
};

export default CarteThumbnail;
