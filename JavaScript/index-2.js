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


const pindah2 = document.querySelector(".goTwo");
pindah2.addEventListener("click", () => {
   // ini adalah alamat halaman yang akan dituju ketika diklik
   location.href = "./driver.html"
})


const pindah3 = document.querySelector(".goFour");
pindah3.addEventListener("click", () => {
   // ini adalah alamat halaman yang akan dituju ketika diklik
   location.href = "./team.html"
})

const pindah5 = document.querySelector(".gofive");
pindah5.addEventListener("click", () => {
   // ini adalah alamat halaman yang akan dituju ketika diklik
   location.href = "./schedule.html";
})


// ini adalah function untuk data schedule
const getSchedule = async () => {
   // ini adalah tempat yang digunakan untuk menyimpan data js ke html
   const list = document.querySelector(".container");

   const options3 = {
      method: 'GET',
      headers: {
         // ini adalah kunci dari api
         'X-RapidAPI-Key': '79420ae42dmsh3334ab32aea79b9p1f3a1fjsn46411236bdf0',
         'X-RapidAPI-Host': 'fia-formula-1-championship-statistics.p.rapidapi.com'
      }
   };

   // ini adalah api yang digunakan untuk diambil datanya
   fetch('https://fia-formula-1-championship-statistics.p.rapidapi.com/api/schedule/race-schedule', options3)
   .then((response) => response.json())
   .then(data => {
      // console ini digunakan agar dia muncul pada saat diinsfect
      console.log(data.raceCalendarEvents);
      // console.log(data.nextRoundEvents);

      // ini untuk membuat tabel
      const tabel = document.createElement("table");
      list.appendChild(tabel);

      //thead ini adalah bagian dari tabel, dimana ini adalah sebagai judul dari tabel/kepala tabel
      const thead = document.createElement("thead");
      tabel.appendChild(thead);

      //sedangkan yang ini adalah kolom kolom / body pada tabel
      const tbody = document.createElement("tbody");
      tabel.appendChild(tbody);

      //ini untuk tempat judul diletakan
      const th1 = document.createElement("th");
      // ini untuk penamaan judul pada tabel
      th1.textContent = "Start Date";
      thead.appendChild(th1);

      //ini untuk tempat judul diletakan
      const th2 = document.createElement("th");
      th2.textContent = "Location";
      thead.appendChild(th2);

      //ini untuk tempat judul diletakan
      const th4 = document.createElement("th");
      th4.textContent = "Summary";
      thead.appendChild(th4);


      //ini untuk tempat judul diletakan
      const th3 = document.createElement("th");
      th3.textContent = "End Date";
      thead.appendChild(th3);

      const tr = document.createElement("tr");
      tbody.appendChild(tr);

      // ini untuk tempat data disimpan pada tabel
      const tdata1 = document.createElement("td");
      tdata1.textContent = data.raceCalendarEvents[0].startDate;
      // tr.appendChild(tdata1);

      // ini untuk tempat data disimpan pada tabel
      const tdata2 = document.createElement("td");
      tdata2.textContent = data.raceCalendarEvents[0].location;
      // tr.appendChild(tdata2);

      // ini untuk tempat data disimpan pada tabel
      const tdata4 = document.createElement("td");
      // ini untuk menentukan data mana yang akan ditampilkan dan dimulai dari index ke berapa
      tdata4.textContent = data.raceCalendarEvents[0].summary;
      // tr.appendChild(tdata4);

      // ini untuk tempat data disimpan pada tabel
      const tdata3 = document.createElement("td");
      tdata3.textContent = data.raceCalendarEvents[0].endDate;
      // tr.appendChild(tdata3);

      // const tdata4 = document.createElement("td");

      // ini untuk perulangan agar data yang keluar itu sesuai dengan data  yang ada di api
      data.raceCalendarEvents.forEach((raceCalendarEvents, i) => {
         const tr = document.createElement("tr");
         tbody.appendChild(tr);

         const tdata1 = document.createElement("td");
         tdata1.textContent = data.raceCalendarEvents[0].startDate;
         tr.appendChild(tdata1);

         const tdata2 = document.createElement("td");
         tdata2.textContent = raceCalendarEvents.location;
         tr.appendChild(tdata2);
   
         const tdata4 = document.createElement("td");
         tdata4.textContent = raceCalendarEvents.summary;
         tr.appendChild(tdata4);   

         const tdata3 = document.createElement("td");
         tdata3.textContent = raceCalendarEvents.endDate;
         tr.appendChild(tdata3);
   
         
      })

   })
}

// ini untuk memanggil function agar data yang ada dalam function bisa muncul
getSchedule();

const pindah4 = document.querySelector(".goThree");
pindah4.addEventListener("click", () => {
   // ini adalah alamat halaman yang akan dituju ketika diklik
   location.href = "./index.html"
})
