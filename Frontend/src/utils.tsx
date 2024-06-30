export const createButtonHandler = (url: string) => {
  return async (e: any) => {
    e.currentTarget.blur();
    const response = await fetch(url, { method: "POST" });
    if (!response.ok) {
      let msg = `Command Failed!\n${url}\nCheck to be sure Backend is running properly.`
      console.log(msg)
      alert(msg);
    }
  };
};
