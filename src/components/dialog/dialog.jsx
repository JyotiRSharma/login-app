import { createPortal } from "react-dom";

const CustomDialog = ({ isShowing, hide, direction, ...props }) => {
  return isShowing
    ? createPortal(
        <div className="grid place-content-center fixed top-0 left-0 w-screen h-screen z-{1040} bg-gray-100 font-mono">
          {props.children}
          <button className="absolute right-10 top-10 text-lg text-red-700" onClick={hide}>Close</button>
        </div>,
        document.body
      )
    : null;
};

export default CustomDialog;
