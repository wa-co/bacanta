import { IoSearch, IoClose } from "react-icons/io5";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import MoonLoader from "react-spinners/MoonLoader";
import Fuse from "fuse.js";
import { useDebounce } from "../../hooks/debouncehook";
import Book from "./Book";

const data = [
  {
    id: 1,
    title: "Plumb",
    author: "Liviu Rebreanu",
    image: "/books/ion.jpg",
  },
  {
    id: 3,
    title: "Harap-Alb",
    author: "Liviu Rebreanu",
    image: "/books/ion.jpg",
  },
  {
    id: 4,
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
];

const SearchBar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const [input, setInput] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const isEmpty = !filteredData || filteredData.length === 0 || input === "";
  const fuse = new Fuse(data, {
    keys: ["title", "author"],
    includeScore: true,
  });

  const searchBook = () => {
    if (!input || input.trim() == "") return;
    setLoading(true);
    const results = fuse
      .search(input)
      .filter((item) => item.score < 0.3)
      .map(({ item }) => item);
    setFilteredData(results);

    setLoading(false);
  };

  const collapse = () => {
    setExpanded(false);
    setLoading(false);
    setFilteredData([]);
    setInput("");
    if (inputRef.current) inputRef.current.value = "";
  };
  const expand = () => {
    setExpanded(true);
  };

  const containerVariants = {
    expanded: {
      height: "24em",
    },
    collapsed: {
      height: "5em",
    },
  };

  const containerTranisition = { type: "spring", damping: 22, stiffness: 150 };

  useEffect(() => {
    if (isClickedOutside) collapse();
  }, [isClickedOutside]);

  useDebounce(input, 500, searchBook);

  return (
    <>
      <motion.div
        className="sb-container mt-20"
        variants={containerVariants}
        animate={isExpanded ? "expanded" : "collapsed"}
        transition={containerTranisition}
        ref={parentRef}
      >
        <div className="si-container">
          <span className="sicon">
            <IoSearch />
          </span>
          <input
            type="text"
            placeholder="Autori, opere"
            className="si"
            value={input}
            ref={inputRef}
            onFocus={setExpanded}
            onChange={(e) => {
              e.preventDefault();
              setInput(e.target.value);
            }}
          />
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                key="close-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="cicon"
                onClick={collapse}
              >
                <IoClose />
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        {isExpanded && <span className="line" />}
        {isExpanded && (
          <div className="scontent">
            {isLoading && (
              <div className="loading">
                <MoonLoader loading color="#00f" size={20} />
              </div>
            )}
            {!isLoading && !isEmpty && (
              <>
                {filteredData.map((item, index) => {
                  return (
                    <Book
                      key={index}
                      image={item.image}
                      name={item.title}
                      author={item.author}
                    />
                  );
                })}
              </>
            )}
          </div>
        )}
      </motion.div>
    </>
  );
};

export default SearchBar;
