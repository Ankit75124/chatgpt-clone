'use client'
import useSWR from 'swr';
import Select from "react-select";

const fetchModals = () => fetch('/api/getEngines').then(res =>res.json())

function ModalSelection() {

    const {data:models, isLoading} =useSWR('models', fetchModals);
    const {data:model, mutate:setModel} =useSWR('model', {
        fallbackData: 'text-davinci-003'
    });



  return (
    <div className='mt-2'>
      <Select
        className="mt-2"
        defaultValue={model}
        placeholder={model}
        options={models?.modelOptions}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]"
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}

export default ModalSelection