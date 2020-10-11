const mail = document.getElementById("mailInput");
const discord = document.getElementById("discordInput");
const tooltip = document.getElementById("myTooltip");
const tooltipD = document.getElementById("myTooltipD");

function copyMail() {
    mail.select();
    mail.setSelectionRange(0, 99999);
    document.execCommand("copy");
    tooltip.innerHTML = "Copied Mail! ";
}

function copyDiscord() {
    discord.select();
    discord.setSelectionRange(0, 99999);
    document.execCommand("copy");
    tooltipD.innerHTML = "Copied Discord!";
}

function outFunc() {
    tooltip.innerHTML = "Copy to clipboard";
    tooltipD.innerHTML = "Copy to clipboard";
  }