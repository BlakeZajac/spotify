"use client";

import Modal from "@/components/modal";
import Input from "@/components/input";
import useUploadModal from "@/hooks/useUploadModal";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const UploadModal = ({}) => {
  const [isLoading, setIsLoading] = useState();
  const uploadModal = useUploadModal();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // Upload to Supabase
  };

  return (
    <Modal
      title="Add a song"
      description="Upload an MP3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song title"
        />
      </form>
    </Modal>
  );
};

export default UploadModal;
