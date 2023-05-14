import Button from '@/components/common/button';
import Input, { Textarea } from '@/components/common/input';
import InputLabel from '@/components/common/input-label';
import ImageInput from '@/components/common/image-input';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useUpdateEffect } from 'usehooks-ts';
import { AnimatePresenceWrapper } from '@/components/common/animate-presence-wrapper';
import Modal from '@/components/common/modal';

const CreateRaffle = () => {
  // State
  const [createInfo, setCreateInfo] = useState<{
    startDate: Date | null;
    endDate: Date | null;
    supply: number;
    ticketPrice: number;
    image: string;
  }>({
    startDate: null,
    endDate: null,
    supply: 0,
    ticketPrice: 0,
    image: '',
  });

  // validation
  const [errors, setErrors] = useState<{
    startDate: string;
    endDate: string;
    supply: string;
    ticketPrice: string;
    image: string;
  }>({
    startDate: '',
    endDate: '',
    supply: '',
    ticketPrice: '',
    image: '',
  });

  const validate = () => {
    const errors = {
      startDate: '',
      endDate: '',
      supply: '',
      ticketPrice: '',
      image: '',
    };
    console.log(createInfo);
    if (!createInfo.startDate) {
      errors.startDate = 'Start date is required';
    }
    if (!createInfo.endDate) {
      errors.endDate = 'End date is required';
    }
    if (
      createInfo.startDate &&
      createInfo.endDate &&
      createInfo.startDate > createInfo.endDate
    ) {
      errors.endDate = 'End date must be after start date';
    }

    if (!createInfo.supply || createInfo.supply <= 0) {
      errors.supply = 'Supply is required';
    }

    if (!createInfo.ticketPrice || createInfo.ticketPrice <= 0) {
      errors.ticketPrice = 'Ticket price is required';
    }
    if (!createInfo.image) {
      errors.image = 'Image is required';
    }

    setErrors(errors);
    console.log(errors);

    return Object.values(errors).every((err) => err === '');
  };

  // Handlers
  const handleChanges: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setCreateInfo({
      ...createInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateRaffle: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ createInfo });
    }
  };
  useUpdateEffect(() => {
    validate();
  }, [createInfo]);

  return (
    <>
      <section>
        <form
          onSubmit={handleCreateRaffle}
          className="flex w-full flex-col gap-4  md:flex-row md:items-baseline"
        >
          <div className="flex w-full flex-col gap-4 md:w-2/3">
            <div className="flex w-full flex-col gap-2">
              <InputLabel label="Start Date" />
              <Input
                type="date"
                placeholder="Start Date"
                value={
                  (createInfo.startDate && createInfo.startDate.toString()) ||
                  ''
                }
                onChange={handleChanges}
                name="startDate"
                error={errors.startDate}
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <InputLabel label="End Date" />
              <Input
                type="date"
                placeholder="End Date"
                value={
                  (createInfo.endDate && createInfo.endDate.toString()) || ''
                }
                onChange={handleChanges}
                name="endDate"
                error={errors.endDate}
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <InputLabel label="Supply" />

              <Input
                type="number"
                placeholder="Supply"
                value={createInfo.supply.toString()}
                onChange={handleChanges}
                name="supply"
                error={errors.supply}
                min="0"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <InputLabel label="Ticket Price (SOL)" />
              <Input
                type="number"
                placeholder="Ticket Price"
                value={createInfo.ticketPrice.toString()}
                onChange={handleChanges}
                name="ticketPrice"
                error={errors.ticketPrice}
                min="0"
              />
            </div>
          </div>

          <div className=" sticky top-36 flex w-full flex-col gap-4 md:w-1/3">
            <InputLabel label="Prize" />
            <ImageInput
              image={createInfo.image}
              setImage={(image) =>
                setCreateInfo({
                  ...createInfo,
                  image,
                })
              }
            />

            <div className="mt-8 w-fit self-end">
              <Button> Create Raffle</Button>
            </div>
          </div>
        </form>
      </section>
      <AnimatePresenceWrapper>
        <Modal
          setImage={(image) =>
            setCreateInfo({
              ...createInfo,
              image,
            })
          }
        />
      </AnimatePresenceWrapper>
    </>
  );
};

export default CreateRaffle;
