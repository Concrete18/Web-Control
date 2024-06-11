const address = "http://localhost:9000"

export const playPause = async (e: any) => {
  e.preventDefault();
  e.stopPropagation();
  console.log(`Sending PlayPause to ${address}`)
  const response = await fetch(`${address}/space`, {
    method: "POST",
  });
  if (response.ok) {
    console.log("Play/Pause Success");
  } else {
    console.log("Play/Pause Failed");
  }
};
