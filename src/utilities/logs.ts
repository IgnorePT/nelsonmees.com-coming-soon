declare global {
    interface Window {
        hello: () => void;
    }
}

export const welcomeLogs = () => {
    console.clear();

    const backgroundImage = [
        "background: url(https://i.pinimg.com/originals/5b/43/02/5b4302c2f6413454c782aeec866143cf.gif)",
        "background-size: cover",
        "color: black",
        "padding: 100px",
        "font-weight: bolder",
        "font-size: 40px",
        "-webkit-text-stroke-width: 1px",
        "-webkit-text-stroke-color: yellow",
        "text-transform: uppercase",
        "text-align: center",
        "letter-spacing: 1px",
    ].join(" ;");

    //console.log("%cMay the force be with you, Always!", backgroundImage);
    console.log("%cSay hello() 😉", backgroundImage);
}

window.hello = () => {

    const input = prompt("What's your name?");

    const name = input ? input : "Stranger"

    const stringsArr = [
        `Hi ${name}, my name is Nelson Mees`,
        "I am a front-end developer, that love to code",
        "I know this is strange, and I am sorry for this",
        "I am a little bit shy, but if you want you can reach me at:",
        "mail@nelsonmees.com",
        "Hope this helps! Byee"
    ]
    setTimeout(() => {
        console.clear();
    }, (0));
    stringsArr.forEach((str, i) => setTimeout(console.log, 2000 * i, str))

    return
}