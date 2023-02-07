const script1Param = process.argv[2];

if (script1Param === "leonardo") {
    console.log("success");
    process.exit(0);
} else {
    console.log("failure");
    process.exit(1);
}