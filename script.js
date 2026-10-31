// Edit the sample details in index.html to personalize this card.
const saveButton = document.getElementById("saveContact");
const toast = document.getElementById("toast");

saveButton.addEventListener("click", () => {
  const contact = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Alex Morgan",
    "ORG:TapLink Demo",
    "TITLE:Founder & Creative Director",
    "TEL;TYPE=CELL:+639171234567",
    "EMAIL:hello@example.com",
    "ADR:;;Manila;Metro Manila;;;Philippines",
    "END:VCARD"
  ].join("\\r\\n");

  const file = new Blob([contact], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = "alex-morgan-contact.vcf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
});
