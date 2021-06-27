import { useEffect } from "react";
import userStore from "part:@sanity/base/user";

const CHECK_INTERVAL = 20 * 1000;
let interval;

const SessionChecker = () => {
  useEffect(() => {
    interval = createInterval();
    return () => clearInterval(interval);
  }, []);

  // We're a react component, in theory,
  // so return null to not render anything
  return null;
};

export default SessionChecker;

const createInterval = () =>
  setInterval(async () => {
    userStore.actions.retry();
  }, CHECK_INTERVAL);
