import Image from 'next/image';
import { FC, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsTrash } from 'react-icons/bs';
type ImageInputProps = {
  setFile: (image: File | null) => void;
  file: File | null;
};
const ImageInput: FC<ImageInputProps> = ({ setFile, file }) => {
  const onDropAccepted = async (files: File[]) => {
    setFile(files[0]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
    },
    onDropAccepted,
    maxFiles: 1,
    maxSize: 1000000,
  });
  return (
    <div className="rounded-2xl overflow-hidden  text-white border-4 border-white  hover:border-indigo-500  transition-colors duration-300 ease-in-out bg-offbase cursor-pointer group w-full h-full ">
      <div {...getRootProps()} className="w-full h-full relative">
        {file ? (
          <div
            onClick={() => setFile(null)}
            className="absolute group inset-0 z-50 bg-opacity-0 bg-black hover:bg-opacity-60 transition-colors duration-300 ease-in-out grid place-content-center"
          >
            <BsTrash className="w-6 h-6 text-indigo-500 opacity-0 group-hover:opacity-100  duration-300 ease-in-out transition-opacity " />
          </div>
        ) : (
          <input {...getInputProps()} />
        )}

        <div className="flex flex-col relative w-full h-full  sm:py-16 justify-center items-center min-h-[248px] ">
          {file ? (
            <div>
              <Image src={URL.createObjectURL(file)} alt="prize" fill />
            </div>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current w-20 group-hover:text-indigo-500 transition-colors duration-300 ease-in-out"
              >
                <path d="M384 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm120 16c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z"></path>
              </svg>
              <p className="font-bold text-xl group-hover:text-indigo-500  mt-3 transition-colors duration-300 ease-in-out">
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
