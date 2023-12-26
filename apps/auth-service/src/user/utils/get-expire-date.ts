interface GetExpireDate {
  now: Date;
  secondsToAdd: number;
}
const OneSecondIsMs = 1000;

export const getExpireDate = ({ now, secondsToAdd }: GetExpireDate) =>
  new Date(now.getTime() + OneSecondIsMs * secondsToAdd);
