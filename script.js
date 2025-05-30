// Constants
const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

// Functions
function getFlags() {
  const iFlag = caseInsensitiveFlag.checked;
  const gFlag = globalFlag.checked;
  if (iFlag && gFlag) {
    return "ig";
  } else if (iFlag) {
    return "i";
  } else if (gFlag) {
    return "g";
  } else {
    return "";
  }
}

function getMatches() {
  const flags = getFlags();
  const regex = new RegExp(regexPattern.value, flags);
  let matches = stringToTest.innerText.match(regex);
  if (matches) {
    testResult.innerText = matches.join(", ");
    stringToTest.innerHTML = stringToTest.innerHTML.replace(regex, (content) => `<span class="highlight">${content}</span>`);
  } else {
    testResult.innerText = "no match";
  }
}

// Event Listener
testButton.addEventListener("click", getMatches);
