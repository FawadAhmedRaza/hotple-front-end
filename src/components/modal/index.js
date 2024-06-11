// components/Modal.js
import { useEffect, useRef } from 'react';
import DynamicSlider from '../slider';

const Modal = ({ isOpen, onClose, children }) => {
    
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
      window.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="relative w-full max-w-2xl p-4  bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex justify-between items-center flex-row p-4 space-y-4">
             {children}   
        </div>
      </div>
    </div>
  );
};

export default Modal;
