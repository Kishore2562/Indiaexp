const placeImages = {
  "Tirupati": "https://github.com/Kishore2562/sampleweb/blob/main/venkateswarswami.jpg?raw=true",
  "Araku Valley": "https://github.com/Kishore2562/sampleweb/blob/main/araku.jpg?raw=true",
  "Vijayawada": "https://github.com/Kishore2562/sampleweb/blob/main/durgamma.jpeg?raw=true",
  "Tawang": "https://github.com/Kishore2562/sampleweb/blob/main/tawang.jpeg?raw=true",
  "Ziro" : "https://github.com/Kishore2562/sampleweb/blob/main/ziro.jpeg?raw=true",
  "Bomdila": "https://github.com/Kishore2562/sampleweb/blob/main/bomdila.jpeg?raw=true",
  "Guwahati": "https://github.com/Kishore2562/sampleweb/blob/main/guvahati.jpeg?raw=true",
  "Kaziranga": "https://github.com/Kishore2562/sampleweb/blob/main/kaziranga.jpeg?raw=true",
  "Majuli": "https://github.com/Kishore2562/sampleweb/blob/main/majuli.jpeg?raw=true",


  // Add more as needed
};

const stateData = [
  { name: "Andhra Pradesh", date: "01-11-1956", places: ["Tirupati", "Araku Valley", "Vijayawada"] },
  { name: "Arunachal Pradesh", date: "20-02-1987", places: ["Tawang", "Ziro", "Bomdila"] },
  { name: "Assam", date: "26-01-1950", places: ["Guwahati", "Kaziranga", "Majuli"] },
  { name: "Bihar", date: "26-01-1950", places: ["Patna", "Nalanda", "Bodh Gaya"] },
  { name: "Chhattisgarh", date: "01-11-2000", places: ["Raipur", "Jagdalpur", "Bilaspur"] },
  { name: "Goa", date: "30-05-1987", places: ["Panaji", "Calangute", "Dudhsagar Falls"] },
  { name: "Gujarat", date: "01-05-1960", places: ["Ahmedabad", "Somnath", "Rann of Kutch"] },
  { name: "Haryana", date: "01-11-1966", places: ["Gurugram", "Kurukshetra", "Pinjore"] },
  { name: "Himachal Pradesh", date: "25-01-1971", places: ["Shimla", "Manali", "Dharamshala"] },
  { name: "Jharkhand", date: "15-11-2000", places: ["Ranchi", "Deoghar", "Netarhat"] },
  { name: "Karnataka", date: "01-11-1956", places: ["Mysore", "Hampi", "Coorg"] },
  { name: "Kerala", date: "01-11-1956", places: ["Alleppey", "Munnar", "Kochi"] },
  { name: "Madhya Pradesh", date: "01-11-1956", places: ["Bhopal", "Khajuraho", "Bandhavgarh"] },
  { name: "Maharashtra", date: "01-05-1960", places: ["Mumbai", "Ajanta", "Shirdi"] },
  { name: "Manipur", date: "21-01-1972", places: ["Imphal", "Loktak Lake", "Kangla Fort"] },
  { name: "Meghalaya", date: "21-01-1972", places: ["Shillong", "Cherrapunji", "Mawsynram"] },
  { name: "Mizoram", date: "20-02-1987", places: ["Aizawl", "Champhai", "Serchhip"] },
  { name: "Nagaland", date: "01-12-1963", places: ["Kohima", "Dimapur", "Dzukou Valley"] },
  { name: "Odisha", date: "01-04-1936", places: ["Puri", "Konark", "Bhubaneswar"] },
  { name: "Punjab", date: "01-11-1966", places: ["Amritsar", "Ludhiana", "Jalandhar"] },
  { name: "Rajasthan", date: "26-01-1950", places: ["Jaipur", "Udaipur", "Jaisalmer"] },
  { name: "Sikkim", date: "16-05-1975", places: ["Gangtok", "Pelling", "Tsomgo Lake"] },
  { name: "Tamil Nadu", date: "26-01-1950", places: ["Chennai", "Ooty", "Madurai"] },
  { name: "Telangana", date: "02-06-2014", places: ["Hyderabad", "Warangal", "Nagarjuna Sagar"] },
  { name: "Tripura", date: "21-01-1972", places: ["Agartala", "Neermahal", "Unakoti"] },
  { name: "Uttar Pradesh", date: "26-01-1950", places: ["Agra", "Varanasi", "Lucknow"] },
  { name: "Uttarakhand", date: "09-11-2000", places: ["Nainital", "Rishikesh", "Haridwar"] },
  { name: "West Bengal", date: "26-01-1950", places: ["Kolkata", "Darjeeling", "Sundarbans"] },
  { name: "Andaman & Nicobar Islands", date: "01-11-1956", places: ["Port Blair", "Havelock", "Cellular Jail"] },
  { name: "Chandigarh", date: "01-11-1966", places: ["Rock Garden", "Sukhna Lake", "Rose Garden"] },
  { name: "Dadra & Nagar Haveli and Daman & Diu", date: "26-01-2020", places: ["Daman", "Silvassa", "Devka Beach"] },
  { name: "Delhi (NCT)", date: "01-11-1956", places: ["India Gate", "Red Fort", "Lotus Temple"] },
  { name: "Jammu & Kashmir", date: "31-10-2019", places: ["Srinagar", "Gulmarg", "Pahalgam"] },
  { name: "Ladakh", date: "31-10-2019", places: ["Leh", "Nubra Valley", "Pangong Lake"] },
  { name: "Lakshadweep", date: "01-11-1956", places: ["Kavaratti", "Agatti", "Bangaram"] },
  { name: "Puducherry", date: "01-07-1963", places: ["Auroville", "French Colony", "Paradise Beach"] }
];

function startApp() {
  const year = document.getElementById('answer').value.trim();
  if (year === '1947') {
    document.getElementById('app').style.display = 'block';
    loadStates();
  } else {
    alert('❌ Incorrect! Please enter correct year.');
  }
}

function loadStates() {
  const list = document.getElementById('stateList');
  list.innerHTML = "";
  stateData.forEach(state => {
    const div = document.createElement('div');
    div.className = 'state';
    div.textContent = state.name;
    div.onclick = () => showModal(state);
    list.appendChild(div);
  });
}

function showModal(state) {
  document.getElementById('modalTitle').textContent = state.name;
  document.getElementById('modalDate').textContent = `Formation Date: ${state.date}`;
  const imagesDiv = document.getElementById('modalImages');
  imagesDiv.innerHTML = '';
  state.places.forEach(place => {
    const imgSrc = placeImages[place] || `https://via.placeholder.com/100x100?text=${encodeURIComponent(place)}`;
    const div = document.createElement('div');
    div.innerHTML = `<img src="${imgSrc}" alt="${place}"><span>${place}</span>`;
    imagesDiv.appendChild(div);
  });
  document.getElementById('modal').style.display = 'flex';
}

function closeModal(e) {
  if (["modal", "close-btn"].includes(e.target.className)) {
    document.getElementById('modal').style.display = 'none';
  }
}
