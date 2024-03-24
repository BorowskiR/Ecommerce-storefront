'use client';

import PreviewModal from '@/components/preview-modal';
import { useEffect, useState } from 'react';

export const ModalProvider = () => {
  const [mounted, setMounded] = useState(false);

  useEffect(() => {
    setMounded(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <PreviewModal />
    </>
  );
};
