const script1Param = process.argv[2];

if (script1Param === "Leonardo") {
    console.log("success");
    process.exit(0);
} else {
    console.log("failure");
    process.exit(1);
}