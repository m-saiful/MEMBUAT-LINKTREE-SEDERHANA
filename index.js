const buttons = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/much_saifullah/",
    class: "instagram",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCEZdxy7OjwRXnbUnhzeAurw",
    class: "youtube",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100071464162542",
    class: "facebook",
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/6281343198508",
    class: "whatsapp",
  },
  {
    name: "Email",
    link: "https://mailto:saifulamikom212@gmail.com",
    class: "email",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/saif212/",
    class: "linkedin",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Muhammad4001970",
    class: "twitter",
  },
  {
    name: "Github",
    link: "https://github.com/saifullah212",
    class: "github",
  },
  // {
  //   name: "Tiktok",
  //   link: "#",
  //   class: "tiktok",
  // },
];

// memanggil button container
const btnContainer = document.getElementById("button-container");

// iterasi/dapatkan masing-masing data button dari array buttons
buttons.forEach((button) => {
  // membuat element button
  const btn = document.createElement("button");

  // mengisi text dari button
  btn.innerText = button.name;

  // menambahkan class btn ke dalam button
  btn.classList.add("btn");

  // menambahkan class untuk merubah warnanya
  btn.classList.add(button.class);

  // tambahkan click menuju link
  btn.addEventListener("click", () => window.open(button.link, "_blank"));

  // masukkan button ke dalam button container
  btnContainer.append(btn);
});
