// main.js

const prohibitedWords = [
    'arse',
    'sex',
    'sexy',
    'beautiful',
    'handsome',
    'arsehead',
    'arsehole',
    'ass',
    'asshole',
    'B',
    'bastard',
    'bitch',
    'bloody',
    'bollocks',
    'brotherfucker',
    'bugger',
    'bullshit',
    'C',
    'child-fucker',
    'Christ on a bike',
    'Christ on a cracker',
    'cock',
    'cocksucker',
    'crap',
    'cunt',
    'cyka blyat',
    'D',
    'damn',
    'damn it',
    'dick',
    'dickhead',
    'dyke',
    'F',
    'fatherfucker',
    'frigger',
    'fuck',
    'fucker',
    'G',
    'geda',
    'goddamn',
    'godsdamn',
    'H',
    'hell',
    'holy shit',
    'horseshit',
    'I',
    'in shit',
    'J',
    'Jesus Christ',
    'Jesus fuck',
    'Jesus H. Christ',
    'Jesus Harold Christ',
    'Jesus, Mary and Joseph',
    'Jesus wept',
    'K',
    'kike',
    'M',
    'motherfucker',
    'machikne',
    'muji',
    'N',
    'nigga',
    'nigra',
    'P',
    'pigfucker',
    'piss',
    'prick',
    'pussy',
    'S',
    'shit',
    'sala',
    'masala',
    'randi',
    'shit ass',
    'shite',
    'sisterfucker',
    'slut',
    'son of a whore',
    'son of a bitch',
    'spastic',
    'sweet Jesus',
    'T',
    'turd',
    'twat',
    'W',
    'wanker',
    'mugi',
];

let previousGirlName = "";
let previousBoyName = "";
let previousLovePercentage = null;

function isValidName(name) {
    const lowerCaseName = name.toLowerCase();
    const isProhibited = prohibitedWords.some(word =>
        new RegExp(`\\b${word}\\b`, 'i').test(lowerCaseName)
    );

    return (
        name.trim() !== '' &&
        !/\d/.test(name) &&
        name.length > 2 &&
        !isProhibited
    );
}

function calculateLove() {
    var girlName = document.getElementById("girlName").value;
    var boyName = document.getElementById("boyName").value;

    // Check if there is no change in the names
    if (girlName === previousGirlName && boyName === previousBoyName) {
        return; // No change, do nothing
    }

    // Check if the names are the same
    if (girlName.toLowerCase() === boyName.toLowerCase()) {
        alert("Please enter different names for the girl and boy.");
        return;
    }

    // Validate names
    if (!isValidName(girlName) || !isValidName(boyName)) {
        alert("Please enter valid names (at least 3 characters) without vulgar or abusive words to calculate the love percentage.");
        return;
    }

    // Customized prediction based on the boy's name
    var lovePercentage;

    if (boyName.toLowerCase() === "aavash") {
        lovePercentage = Math.floor(Math.random() * 21); // Set to below 20%
    } else {
        // Generate a random love percentage between 50% and 100%
        lovePercentage = Math.floor(Math.random() * 51) + 50;
    }

    // Update previous values
    previousGirlName = girlName;
    previousBoyName = boyName;

    // Display the result
    var resultElement = document.getElementById("loveResult");
    resultElement.innerHTML = "The love percentage between " + girlName + " and " + boyName + " is: " + lovePercentage + "%";

    // Update previous love percentage
    previousLovePercentage = lovePercentage;
}