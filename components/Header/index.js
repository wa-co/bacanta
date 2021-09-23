import Head from "next/head";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { useState, useRef, useEffect, useContext } from "react";
import Fuse from "fuse.js";
import SearchBar from "./SearchBar";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__next");

const Header = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    document.body.classList.add("activeModal");
  }
  function closeModal() {
    setIsOpen(false);
    document.body.classList.remove("activeModal");
  }

  return (
    <>
      <header className="bg-[#1f1f1f] top-0 z-[49] flex h-[69px] items-center px-10 md:px-12 justify-between">
        <div className="flex items-center cursor-pointer space-x-4">
          <Image src="/logo.svg" width={40} height={40} />{" "}
          <h1 className="text-white font-medium">BACANTA</h1>
        </div>
        <FaSearch
          className="mr-6 text-[1rem] icon text-gray-500 hover:text-gray-300 left-0 cursor-pointer"
          onClick={openModal}
        />
      </header>
      <Modal
        className="Modal"
        overlayClassName="Overlay"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <SearchBar />
      </Modal>
    </>
  );
};

export default Header;
