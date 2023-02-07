const script1Result = process.argv[2];
const script2Result = process.argv[3];

if (script1Result === "success" && script2Result === "success") {
    console.log("El proyecto va viento en popa!!!");
    process.exit(0);
} else if (script1Result === "failure" || script2Result === "failure") {
    console.log("Alguna de las dos stages ha fallado");
    process.exit(1);
} else {
    console.log("Esto pinta muy mal");
    process.exit(1);
}