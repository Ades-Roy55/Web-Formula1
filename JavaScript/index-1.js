//ini untuk membuat agar menu ketika diklik muncul
const icons = document.querySelector("#open");
let show = false;
icons.addEventListener("click", () =>{
      document.getElementById("nav").classList.toggle("slide");
})

// ini untuk klik agar pindah pada halaman lain
const pindah1 = document.querySelector(".goOne");
pindah1.addEventListener("click", () => {
   location.href = "./main.html";
})


// ini untuk klik agar pindah pada halaman lain
const pindah2 = document.querySelector(".goTwo");
pindah2.addEventListener("click", () => {
   location.href = "./driver.html"
})


// ini untuk klik agar pindah pada halaman lain
const pindah3 = document.querySelector(".goFour");
pindah3.addEventListener("click", () => {
   location.href = "./team.html"
})

// Function untuk data teams
const getTeams = async () => {
   // ini adalah untuk mengetahui dimana data akan disimpan
   const list = document.querySelector(".container");

   const options1 = {
      method: 'GET',
      headers: {
         // ini adalah kunci khusus untuk mengakses api
         'X-RapidAPI-Key': '79420ae42dmsh3334ab32aea79b9p1f3a1fjsn46411236bdf0',
         'X-RapidAPI-Host': 'fia-formula-1-championship-statistics.p.rapidapi.com'
      }
   };
   // ini adalah api yang akan digunakan untuk diambil datanya
   fetch('https://fia-formula-1-championship-statistics.p.rapidapi.com/api/teams', options1)
   .then((response) => response.json())
   .then(data => {
      console.log(data.teams);

      // ini untuk membuat tabel
      const tabel = document.createElement("table");
      // tabel harus di appendChild karena tabel ini merupakan anak dari list
      list.appendChild(tabel);

      //thead ini adalah bagian dari tabel, dimana ini adalah sebagai judul dari tabel/kepala tabel
      const thead = document.createElement("thead");
      tabel.appendChild(thead);

      //sedangkan yang ini adalah kolom kolom / body pada tabel
      const tbody = document.createElement("tbody");
      tabel.appendChild(tbody);

      //ini untuk tempat judul diletakan
      const th1 = document.createElement("th");
      th1.textContent = "Rank";
      thead.appendChild(th1);

      
      //ini untuk tempat judul diletakan
      const th2 = document.createElement("th");
      th2.textContent = "Team";
      thead.appendChild(th2);

      
      //ini untuk tempat judul diletakan
      const th3 = document.createElement("th");
      th3.textContent = "Points";
      thead.appendChild(th3);

      const tr = document.createElement("tr");
      tbody.appendChild(tr);

      // ini untuk tempat data disimpan pada tabel
      const tdata1 = document.createElement("td");
      tdata1.textContent = data.teams[0].rank.standing;
      // tr.appendChild(tdata1);

      // ini untuk tempat data disimpan pada tabel
      const tdata2 = document.createElement("td");
      tdata2.textContent = data.teams[0].teamName;
      // tr.appendChild(tdata2);

      // ini untuk tempat data disimpan pada tabel
      const tdata3 = document.createElement("td");
      tdata3.textContent = data.teams[0].points.pts;
      // tr.appendChild(tdata3);

      // ini untuk perulangan agar data yang keluar itu sesuai dengan data  yang ada di api
      data.teams.forEach((teams, i) =>{
         const tr = document.createElement("tr");
         tbody.appendChild(tr);

         const tdata1 = document.createElement("td");
         tdata1.textContent = teams.rank.standing;
         tr.appendChild(tdata1);

         const tdata2 = document.createElement("td");
         tdata2.textContent = teams.teamName;
         tr.appendChild(tdata2);

         const tdata3 = document.createElement("td");
         tdata3.textContent = teams.points.pts;
         tr.appendChild(tdata3);

      })

   })
}

// ini adalah pemanggilan funtion agar data data didalam function dapat tercetak
getTeams();

// ini untuk klik agar pindah pada halaman lain
const pindah5 = document.querySelector(".gofive");
pindah5.addEventListener("click", () => {
   location.href = "./schedule.html";
})



// ini untuk klik agar pindah pada halaman lain
const pindah4 = document.querySelector(".goThree");
pindah4.addEventListener("click", () => {
   location.href = "./index.html"
})
