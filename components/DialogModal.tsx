import { useEffect, useRef } from "react";

type Props = {
  isOpened: boolean;
  onClose: () => void;
};

const DialogModal = ({ isOpened, onClose }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add("modal-open");
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpened]);

  return (
    <dialog className="modal" ref={ref} onCancel={onClose} onClick={onClose}>
      <div className="modal-logo-container"></div>
      <form method="dialog">
        <input
          className="signup"
          type="email"
          placeholder="What's your email?"
        />
        <button className="modal-form-button">
          <span className="modal-form-button-span">Subscribe</span>
        </button>
      </form>

      <div className="modal-text-container">
        <p>Hey. We kinda hate getting emails too 🙄.</p>
        <p>
          That’s why we promise to only send them when we have some tasty
          nuggets of information for you.
        </p>
        <p>In your inbox for a good time, not a long time.</p>
      </div>
      <div className="modal-link-container">
        <a className="modal-link" href="">
          Nevermind
        </a>
        <a className="modal-link" href="">
          Privacy Policy
        </a>
      </div>
    </dialog>
  );
};

export default DialogModal;
