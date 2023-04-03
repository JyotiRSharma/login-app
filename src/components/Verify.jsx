import { useSelector } from "react-redux";
import store from "../utils/store";

const Verify = () => {
  const email = useSelector(store => store.email.items);
  return (
    <>
    <label>Verify page works! {email[0]}</label>
    </>
  )
}

export default Verify;