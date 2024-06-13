import { useEffect, useRef } from 'react';
// import DynamicSlider from '../../../slider';
import BgIcon from '../Iconify-icons/bg-icon';
import Paragraph from '../Typography/paragraph';

const Modal = ({ isOpen, onClose, children, title, className, titleClass, contentClass}) => {

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
    <div className="fixed  inset-0 !z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className={` relative w-full sm:max-w-xl bg-white md:rounded-2xl shadow dark:bg-brownish_black dark:border dark:border-neutral-800   ${className}`}>
        <div className={` flex items-center justify-between px-4 sm:px-5 py-3  border-b dark:border-neutral-800 border-gray-200 ${titleClass} `}>
          <Paragraph className={" dark:!text-dark_primary_label font-semibold grow !text-center "}>{title}</Paragraph>
          <BgIcon icon={'akar-icons:cross'} IconclassName={'!w-4 !h-4'} onClick={() => onClose()} />
        </div>
 
        <div className={`flex justify-between items-center flex-row p-5 sm:p-6 ${contentClass} `}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
