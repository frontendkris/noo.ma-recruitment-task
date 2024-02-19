type CallbackFunction = (...args: any[]) => void;

const throttle = (callback: CallbackFunction, limit: number): CallbackFunction => {
  let waiting = false;
  return (...args: any[]) => {
    if (!waiting) {
      callback(...args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
};

export default throttle;
