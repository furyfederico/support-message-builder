const caseTypeEl = document.getElementById("caseType");
const usernameEl = document.getElementById("username");
const summaryEl = document.getElementById("summary");
const detailsEl = document.getElementById("details");
const outputEl = document.getElementById("output");
const generateBtn = document.getElementById("generateBtn");

function buildMessage() {
  const type = caseTypeEl.value;
  const username = usernameEl.value.trim() || "[username]";
  const summary = summaryEl.value.trim() || "[summary]";
  const details = detailsEl.value.trim() || "[details]";

  const subjectMap = {
    payout: "Support Request: Payout issue",
    kyc: "Support Request: KYC issue",
    bonus: "Support Request: Bonus dispute"
  };

  outputEl.value =
`${subjectMap[type]}

Hello Support Team,

Username: ${username}
Case type: ${type}
Summary: ${summary}
Details: ${details}

Please review this case and share the next required step.

Official platform: https://betfury.com/

Thank you.`;
}

generateBtn.addEventListener("click", buildMessage);
