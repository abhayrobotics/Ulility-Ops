import type { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

const Modal = ({ children, footer, isOpen, onClose, title }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 py-6"
      role="dialog"
    >
      <div className="w-full max-w-xl overflow-hidden rounded border border-subtle bg-surface shadow-xl">
        <div className="flex items-center justify-between gap-4 border-b border-subtle px-5 py-4">
          <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
          <button
            aria-label="Close modal"
            className="flex h-9 w-9 items-center justify-center rounded border border-subtle text-xl leading-none text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
            onClick={onClose}
            type="button"
          >
            &times;
          </button>
        </div>

        <div className="px-5 py-5">{children}</div>

        {footer ? (
          <div className="flex items-center justify-end gap-3 border-t border-subtle bg-slate-50 px-5 py-4">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
