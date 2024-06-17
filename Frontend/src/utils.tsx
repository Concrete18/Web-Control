export const sendCommand = async (
  route: string,
  e: any,
) => {
  e.currentTarget.blur();
  await fetch(route, { method: "POST"});
};
