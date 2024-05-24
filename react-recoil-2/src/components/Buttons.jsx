import { useRecoilValue } from "recoil";
import {
  networkAtom,
  jobAtom,
  messageAtom,
  notificationAtom,
  totalNotificationAtom,
} from "../store/atoms/navAtoms";

export default function Buttons() {
  const networkNotifications = useRecoilValue(networkAtom);
  const jobsNotifications = useRecoilValue(jobAtom);
  const messageNotifications = useRecoilValue(messageAtom);
  const notifications = useRecoilValue(notificationAtom);
  const totalNotifications = useRecoilValue(totalNotificationAtom);
  return (
    <>
      <button>Home</button>
      <button>My Network ({networkNotifications})</button>
      <button>Jobs ({jobsNotifications})</button>
      <button>Messaging ({messageNotifications})</button>
      <button>Notification ({notifications})</button>
      <button>Total Notification ({totalNotifications})</button>
    </>
  );
}
