"use client";

import { useState, useEffect } from "react";

import Modal from "@/components/modal";

const ModalProvider = () => {
  // Prevent modals from loading whilst server side rendering (hydration errors)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  <>
    <Modal
      title="Test modal"
      description="Test description"
      isOpen
      onChange={() => {}}
    >
      Children
    </Modal>
  </>;
};

export default ModalProvider;
