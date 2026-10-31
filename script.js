// Edit the profile details in index.html and keep the vCard details in sync.
const saveButton = document.getElementById("saveContact");
const toast = document.getElementById("toast");

saveButton.addEventListener("click", () => {
  const contact = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Hepanao;Axel;;;",
    "FN:Axel Hepanao",
    "TEL;TYPE=CELL:+639859843570",
    "ADR:;;Flying V Tambo;Paranaque City;;;Philippines",
    "END:VCARD"
  ].join("\r\n");

  const file = new Blob([contact], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = "axel-hepanao.vcf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);

  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
});
