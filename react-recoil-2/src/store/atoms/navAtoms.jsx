import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});
export const jobAtom = atom({
  key: "jobAtom",
  default: 0,
});
export const messageAtom = atom({
  key: "messageAtom",
  default: 12,
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 0,
});
export const totalNotificationAtom = selector({
  key: "totalNotificationAtom",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobAtom);
    const notificationsAtomCount = get(notificationAtom);
    const messagingAtomCount = get(messageAtom);

    return (
      networkAtomCount +
      jobsAtomCount +
      notificationsAtomCount +
      messagingAtomCount
    );
  },
});
