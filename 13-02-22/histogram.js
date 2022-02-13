// this class extend map so that the get() method returns the specified value insteadof null when the key is not in the map

class DefaultMap extends Map {
    constructor(defaultValue) {
        super();                             //Invoke SuperClass Constructor
        this.defaultValue = defaultValue;    //Remember the default value
    }


    get(key) {
        if (this.has(key)) {                 //if the key is already in the map
            return super.get(key);           //return its value from superclass
        }
        else {
            return this.defaultValue;        //otherwise return the default value
        }
    }
}

// this class computes and displays letter frequency histograms
class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0);                              //map from letters to counts
        this.totalLetters = 0;                                              //how many letters in all
    }
    //this function update the histogram with the letters of text.
    add(text) {
        //remove whitespace from the text, and convert to upper case
        text = text.replace(/\s/g, "").toUpperCase();
        //now loop through the characters of the text
        for (let character of text) {
            let count = this.letterCounts.get(character);                   //get old count
            this.letterCounts.set(character, count + 1);                    //increament it
            this.totalLetters++;
        }
    }

    //convert the histogram to a string that displays an ASCII graphics
    toString() {
        //convert the map to an array of [key, value] arrays
        let entries = [...this.letterCounts];

        //sort the array by count, then alphabetically
        entries.sort((a, b) => {                                             //a function to define sort order
            if (a[1] === b[1]) {                                                 //if the counts are the same
                return a[0] < b[0] ? -1 : 1;                                       //sort alphabetically
            }
            else {                                                            //if the counts differ
                return b[1] - a[1];                                            //sort the largest count
            }
        });
        //convert the count to percentages
        for (let entry of entries) {
            entry[1] = entry[1] / this.totalletters * 100;
        }
        //drop any entries less than 1%
        entries = entries.filter(entry => entry[1] >= 1);
        //now convert each entry to a line of text
        let lines = entries.map(
            ([l, n]) => '${l}:${"#".repeat(Math.round(n))} ${n.toFixed(2)}%'
        );
        // and return the concatenated lines, seperated by newline characters.
        return lines.join("\n");
    }
}
//this async (promise-returning)function creates a histogram object,
//asynchronously reads chunks of text from standard input, and add those chunks to
//the histogram. when it reaches the end of the stream, it returns this histogram

async function histogramFromStdin() {
    process.stdin.setEncoding("utf-8");                                   //read unicorn strings, not bytes
    let histogram = new Histogram();
    for await (let chunk of process.stdin) {
        histogram.add(chunk);
    }
    return histogram;
}
//this one final line of code is the man body of the program.
//it makes the histogram of teh object from standard input, then prints the histogram.
histogramFromStdin().then(histogram => { console.log(histogram.toString()); });
