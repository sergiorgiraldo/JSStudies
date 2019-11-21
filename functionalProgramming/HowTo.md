1. node code is written in myindex.js;
2. To be used inside html code, you have to make them visible thru Window functions;
3. Then you browserify:
    `browserify myindex.js -o bundle.js`
4. Reference bundle.js and just call the functions    