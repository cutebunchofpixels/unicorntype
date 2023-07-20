const ninetyNine = {
    name: "9009",
    colors: {
        bg: "#EEEBE2",
        text: "#C0BCAC",
        accent: "#080909",
        logo: "#080909",
        correct: "#080909",
        incorrect: "#ca847a"
    },
    utils: {
        transitionSpeed: ".25s",
        roundness: "1rem"
    }
};

const arch = {
    name: "arch",
    colors: {
        bg: "#0C0D11",
        text: "#454864",
        accent: "#7EBAB5",
        logo: "#F6F5F5",
        correct: "#f6f5f5",
        incorrect: "#ff4754"
    },
    utils: {
        transitionSpeed: ".25s",
        roundness: "1rem"
    }
}

const lilDragon = {
    name: "lil dragon",
    colors: {
        bg: "#EBE1EF",
        text: "#A28DB8",
        accent: "#8A5BD6",
        logo: "#212B43",
        correct: "#212b43",
        incorrect: "#f794ca"
    },
    utils: {
        transitionSpeed: ".25s",
        roundness: "1rem"
    }
}

const bingsu = {
    name: "bingsu",
    colors: {
        bg: "#B8A7AA",
        text: "#48373D",
        accent: "#EBE6EA",
        logo: "#EBE6EA",
        correct: "#EBE6EA",
        incorrect: "#921341"
    },
    utils: {
        transitionSpeed: "0.25s",
        roundness: "1rem"
    }
}
const themes = [bingsu, ninetyNine, arch, lilDragon];
const previewColors = ["accent", "text", "logo"];

export default themes;
export { previewColors };