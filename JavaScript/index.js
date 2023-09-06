//ini untuk membuat agar menu ketika diklik muncul
const icons = document.querySelector("#open");
let show = false;
icons.addEventListener("click", () =>{
      document.getElementById("nav").classList.toggle("slide");
})


// ini untuk klik agar pindah pada halaman lain
const pindah1 = document.querySelector(".goOne");
pindah1.addEventListener("click", () => {
   // ini adalah alamat halaman yang akan dituju ketika diklik
   location.href = "./main.html";
})


// ini untuk klik agar pindah pada halaman lain
const pindah2 = document.querySelector(".goTwo");
pindah2.addEventListener("click", () => {
   // ini adalah alamat halaman yang akan dituju ketika diklik
   location.href = "./driver.html";
})


// ini adalah function untuk data driver
const getDrivers = async () => {
   // ini untuk mengetahui dimana data  akan disimpan
   const datalist = document.querySelector(".container");
   const options = {
      method: 'GET',
      headers: {
         // ini adalah kunci dari api yang akan digunakan
         'X-RapidAPI-Key': '79420ae42dmsh3334ab32aea79b9p1f3a1fjsn46411236bdf0',
         'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com'
      }
   };
   //ini adalah api yang digunakan untuk diambil datanya
   fetch('https://f1-live-motorsport-data.p.rapidapi.com/drivers/2020', options)
   .then((response) => response.json())
   .then(data => {
      // console ini agar dapat dimunculkan ketika kita meninsfect
      console.log(data.results);

      // ini untuk membuat tabel
      const tabel = document.createElement("table");
      tabel.id = "table"
      datalist.appendChild(tabel);

      //thead ini adalah bagian dari tabel, dimana ini adalah sebagai judul dari tabel/kepala tabel
      const thead = document.createElement("thead");
      tabel.appendChild(thead);
      //sedangkan yang ini adalah kolom kolom / body pada tabel
      const tbody = document.createElement("tbody");
      tabel.appendChild(tbody);

      //ini untuk tempat judul diletakan
      const th4 = document.createElement("th");
      th4.textContent = "Id Drivers";
      thead.appendChild(th4);

      //ini untuk tempat judul diletakan
      const th1 = document.createElement("th");
      th1.textContent = "Team";
      thead.appendChild(th1);

      //ini untuk tempat judul diletakan
      const th2 = document.createElement("th");
      th2.textContent = "Drivers";
      thead.appendChild(th2);

      //ini untuk tempat judul diletakan
      const th3 = document.createElement("th");
      th3.textContent = "Nationality";
      thead.appendChild(th3);


      const tr = document.createElement("tr");
      tbody.appendChild(tr);

      // ini untuk tempat data disimpan pada tabel
      const tdata4 = document.createElement("td");
      tdata4.textContent = data.results[0].driver_id;
      // tr.appendChild(tdata4);

      // ini untuk tempat data disimpan pada tabel
      const tdata1 = document.createElement("td");
      tdata1.textContent = data.results[0].team_name;
      // tr.appendChild(tdata1);

      // ini untuk tempat data disimpan pada tabel
      const tdata2 = document.createElement("td");
      tdata2.textContent = data.results[0].driver_name;
      // tr.appendChild(tdata2);

      // ini untuk tempat data disimpan pada tabel
      const tdata3 = document.createElement("td");
      tdata3.textContent = data.results[0].nationality;
      // tr.appendChild(tdata3);

      // ini untuk perulangan agar data yang keluar itu sesuai dengan data  yang ada di api
      data.results.forEach((results, i) => {
         const tr = document.createElement("tr");
         tbody.appendChild(tr);

         const tdata4 = document.createElement("td");
         tdata4.textContent = results.driver_id;
         tr.appendChild(tdata4);

         const tdata1 = document.createElement("td");
         tdata1.textContent = results.team_name;
         tr.appendChild(tdata1);

         const tdata2 = document.createElement("td");
         tdata2.textContent = results.driver_name;
         tr.appendChild(tdata2);

         const tdata3 = document.createElement("td");
         tdata3.textContent = results.nationality;
         tr.appendChild(tdata3);
      })
   })
}

// ini adalah pemanggilan funtion agar data data didalam function dapat tercetak
getDrivers();

// ini untuk klik agar pindah pada halaman lain
const pindah3 = document.querySelector(".goFour");
pindah3.addEventListener("click", () => {
      // ini adalah alamat halaman yang akan dituju ketika diklik
   location.href = "./team.html";
})

// ini untuk klik agar pindah pada halaman lain
const pindah5 = document.querySelector(".gofive");
pindah5.addEventListener("click", () => {
      // ini adalah alamat halaman yang akan dituju ketika diklik
   location.href = "./schedule.html";
})


// ini untuk klik agar pindah pada halaman lain
const pindah4 = document.querySelector(".goThree");
pindah4.addEventListener("click", () => {
   // ini adalah alamat halaman yang akan dituju ketika diklik
   location.href = "./index.html";
})

