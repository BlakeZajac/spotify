"use client";

import { useState, useEffect } from "react";

import AuthModal from "@/components/auth-modal";
import UploadModal from "@/components/upload-modal";

const ModalProvider = () => {
  // Prevent modals from loading whilst server side rendering (hydration errors)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
