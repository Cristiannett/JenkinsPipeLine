const parameter = process.argv[2];
if (parameter === 'davinci') {
    console.log('Stage 2 Successful');
    process.exit(0);
} else {
    console.error('Stage 2 Failed');
    process.exit(1);
}