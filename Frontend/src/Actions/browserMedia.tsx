const address = "http://localhost:8000"

export const playPause = async () => {
  console.log(`Sending PlayPause to ${address}`)
  const response = await fetch(`${address}/space`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("Play/Pause Success");
  }
  console.log("Play/Pause Failed");
};
