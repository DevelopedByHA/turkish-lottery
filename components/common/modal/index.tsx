import { useModalContext } from '@/context/modal-context';
import classNames from 'classnames';
import { FC } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

type ModalProps = {
  setImage: (image: string) => void;
};

const Modal: FC<ModalProps> = ({ setImage }) => {
  const { openModal, setOpenModal } = useModalContext();
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div
      className={classNames(
        `fixed inset-0 z-[9999]   h-screen   w-screen flex-col gap-4 text-white transition-all duration-500 ease-in-out will-change-transform ${
          openModal ? 'top-0' : 'top-full'
        }`
      )}
    >
      <div className="relative  grid h-screen w-screen place-items-center ">
        <div
          className="absolute left-0 top-0 z-0 h-full w-full  bg-black/60"
          onClick={closeModal}
        />
        <div className="relative z-10 flex h-[90%] w-[90%] flex-col items-center gap-2 rounded-xl bg-primary p-9">
          <div
            className="absolute right-2 top-2 h-5 w-5  cursor-pointer md:h-10  md:w-10"
            onClick={closeModal}
          >
            <AiOutlineCloseCircle className="h-5 w-5  md:h-10 md:w-10" />
          </div>
          <h1 className="whitespace-nowrap text-lg md:text-2xl xl:text-4xl">
            SELECT NFT
          </h1>

          <div
            className={
              'grid h-full w-full grid-cols-1 gap-4 overflow-y-scroll md:grid-cols-2 lg:grid-cols-3'
            }
          >
            {
              // put images here and select logic
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
