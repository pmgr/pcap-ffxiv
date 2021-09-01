const { CaptureInterface } = require("./lib/pcap-ffxiv");

const ci = new CaptureInterface({
	localDataPath: "G:\\WebstormProjects\\FFXIVOpcodes",
});

ci.on("message", (message) => {
	if (message.type === "playerSetup") {
		console.log(message.parsedIpcData);
	}
}).on("error", console.error);

ci.once("ready", () => {
	ci.start().then(() => {
		console.log("Everything is started !");
	});
});
