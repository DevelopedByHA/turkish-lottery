import Button from '@/components/common/button';
import Input, { Textarea } from '@/components/common/input';
import InputLabel from '@/components/common/input-label';
import ImageInput from '@/components/common/image-input';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useUpdateEffect } from 'usehooks-ts';

const CreateRaffle = () => {
  // State
  const [prizeImage, setPrizeImage] = useState<File | null>(null);
  const [ticketImage, setTicketImage] = useState<File | null>(null);
  const [createInfo, setCreateInfo] = useState<{
    startDate: Date | null;
    endDate: Date | null;
    collectionName: string;
    description: string;
    supply: number;
    ticketPrice: number;
  }>({
    startDate: null,
    endDate: null,
    collectionName: '',
    description: '',
    supply: 0,
    ticketPrice: 0,
  });

  // validation
  const [errors, setErrors] = useState<{
    startDate: string;
    endDate: string;
    collectionName: string;
    description: string;
    supply: string;
    ticketPrice: string;
  }>({
    startDate: '',
    endDate: '',
    collectionName: '',
    description: '',
    supply: '',
    ticketPrice: '',
  });

  const validate = () => {
    const errors = {
      startDate: '',
      endDate: '',
      collectionName: '',
      description: '',
      supply: '',
      ticketPrice: '',
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

    if (!createInfo.collectionName) {
      errors.collectionName = 'Collection name is required';
    }
    if (!createInfo.description) {
      errors.description = 'Description is required';
    }
    if (!createInfo.supply || createInfo.supply <= 0) {
      errors.supply = 'Supply is required';
    }

    if (!createInfo.ticketPrice || createInfo.ticketPrice <= 0) {
      errors.ticketPrice = 'Ticket price is required';
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
      console.log({ createInfo, prizeImage, ticketImage });
    }
  };
  useUpdateEffect(() => {
    validate();
  }, [createInfo]);

  return (
    <section>
      <form onSubmit={handleCreateRaffle} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-baseline gap-4">
          <div className="flex flex-col gap-2 w-full">
            <InputLabel label="Start Date" />
            <Input
              type="date"
              placeholder="Start Date"
              value={
                (createInfo.startDate && createInfo.startDate.toString()) || ''
              }
              onChange={handleChanges}
              name="startDate"
              error={errors.startDate}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
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
          <div className="flex flex-col gap-2 w-full">
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
          <div className="flex flex-col gap-2 w-full">
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
        <div className="flex flex-col gap-2 w-full">
          <InputLabel label="Collection Name" />
          <Input
            type="text"
            value={createInfo.collectionName}
            onChange={handleChanges}
            name="collectionName"
            error={errors.collectionName}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <InputLabel label="Description " />
          <Textarea
            type="text"
            placeholder="Description"
            value={createInfo.description}
            onChange={handleChanges}
            name="description"
            error={errors.description}
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex flex-col gap-2 w-full">
            <InputLabel label="Prize" />
            <ImageInput setFile={setPrizeImage} file={prizeImage} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <InputLabel label="Ticket" />
            <ImageInput setFile={setTicketImage} file={ticketImage} />
          </div>
        </div>
        <div className="w-fit self-end mt-8">
          <Button> Create Raffle</Button>
        </div>
      </form>
    </section>
  );
};

export default CreateRaffle;
