const script2Param = process.argv[2];

if (script2Param === "davinci") {
    console.log("success");
    process.exit(0);
} else {
    console.log("failure");
    process.exit(1);
}
