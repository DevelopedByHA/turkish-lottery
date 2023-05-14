import { useModalContext } from '@/context/modal-context';
import Image from 'next/image';
import { FC, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsTrash } from 'react-icons/bs';
type ImageInputProps = {
  setImage: (image: string) => void;
  image: string;
};
const ImageInput: FC<ImageInputProps> = ({ image, setImage }) => {
  const { setOpenModal } = useModalContext();

  return (
    <div className="bg-offbase group  h-full w-full cursor-pointer  overflow-hidden  rounded-2xl border-4 border-white text-white transition-colors duration-300 ease-in-out hover:border-indigo-500 ">
      <div
        className="relative h-full w-full"
        onClick={() => setOpenModal(true)}
      >
        {image && (
          <div
            onClick={() => setImage('')}
            className="group absolute inset-0 z-50 grid place-content-center bg-black bg-opacity-0 transition-colors duration-300 ease-in-out hover:bg-opacity-60"
          >
            <BsTrash className="h-6 w-6 text-indigo-500 opacity-0 transition-opacity  duration-300 ease-in-out group-hover:opacity-100 " />
          </div>
        )}

        <div className="relative flex h-full min-h-[248px] w-full  flex-col items-center justify-center sm:py-16 ">
          {image ? (
            <div>
              <Image src={image} alt="prize" fill />
            </div>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-20 fill-current transition-colors duration-300 ease-in-out group-hover:text-indigo-500"
              >
                <path d="M384 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm120 16c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z"></path>
              </svg>
              <p className="mt-3 text-xl font-bold  transition-colors duration-300 ease-in-out group-hover:text-indigo-500">
                Choose NFT for Raffle
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
