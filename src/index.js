const messages = [
    "Nicolas", 
    "Manuel",
    "Ana",
    "Tatiana",
    "Carlos",
    "Oscar",
    "Papayaa"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message);
};

module.exports = { randomMsg };
