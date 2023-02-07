const parameter = process.argv[2];
if (parameter === 'leonardo') {
    console.log('Stage 1 Successful');
    process.exit(0);
} else {
    console.error('Stage 1 Failed');
    process.exit(1);
}