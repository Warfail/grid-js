new gridjs.Grid({
    columns: ["Nama", "Email", "telepon"],
    data: [
      ["Rezky", "rezky@bot.com", "(353) 01 222 3333"],
      ["Diva", "diva@gmail.com", "(01) 22 888 4444"],
      ["nando", "nando@gmail.com", "0097 22 654 00033"]
    ]
  }).render(document.getElementById("tabel"));