import CarteThumbnail from "../CarteThumbnail";
import Carousel from "react-elastic-carousel";

const Collection = ({ title }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  const results = [
    {
      id: 1,
      title: "Ion",
      author: "Liviu Rebreanu",
      image: "/books/ion.jpg",
    },
    {
      id: 2,

      title: "Moara cu Noroc",
      author: "Ioan Slavici",
      image: "/books/moaracunoroc.jpg",
    },
    {
      id: 3,

      title: "Moara cu Noroc",
      author: "Ioan Slavici",
      image: "/books/moaracunoroc.jpg",
    },
    {
      id: 4,

      title: "Moara cu Noroc",
      author: "Ioan Slavici",
      image: "/books/moaracunoroc.jpg",
    },
    {
      id: 5,

      title: "Moara cu Noroc",
      author: "Ioan Slavici",
      image: "/books/moaracunoroc.jpg",
    },
    {
      id: 6,

      title: "Moara cu Noroc",
      author: "Ioan Slavici",
      image: "/books/moaracunoroc.jpg",
    },
    {
      id: 7,
      title: "Moara cu Noroc",
      author: "Ioan Slavici",
      image: "/books/moaracunoroc.jpg",
    },
  ];

  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-medium text-[1.5rem]">{title}</h2>
      <Carousel
        showArrows = {false}
        breakPoints={breakPoints}
        className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2"
      >
        {results.map((result) => (
          <CarteThumbnail key={result.id} result={result} />
        ))}
      </Carousel>
    </div>
  );
};

export default Collection;
