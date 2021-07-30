import { toast } from "react-toastify";

class Notify {
  static success(message: string) {
    toast.success(message);
  }

  static info(message: string) {
    toast.info(message);
  }

  static error(message: string) {
    toast.error(message);
  }

  static warning(message: string) {
    toast.warning(message);
  }
}

export default Notify;
