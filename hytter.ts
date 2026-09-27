interface CabinLocation {
  municipality: string;
  latitude: number;
  longitude: number;
}

interface Cabin {
  id: number;
  name: string;
  location: CabinLocation;
  type: string;
  pricePerNight: number;
  facilities: string[];
  beds: number;
}

const cabins: Cabin[] = [
  {
    id: 1,
    name: "Fjellheim",
    location: {
      municipality: "Lom",
      latitude: 61.837,
      longitude: 8.568
    },
    type: "Betjent",
    pricePerNight: 650,
    facilities: ["Dusj", "WiFi", "Restaurant"],
    beds: 40
  },
  {
    id: 2,
    name: "Skogstua",
    location: {
      municipality: "Hol",
      latitude: 60.534,
      longitude: 8.207
    },
    type: "Ubetjent",
    pricePerNight: 300,
    facilities: ["Vedovn", "Kjøkken"],
    beds: 12
  },
  {
  id: 3,
  name: "Memurubu Turisthytte",
  location: {
    municipality: "Lom",
    latitude: 61.4913,
    longitude: 8.6312
  },
  type: "Betjent",
  pricePerNight: 999,
  facilities: [
    "Dusj",
    "Toalett",
    "Kafé",
    "Restaurant"
  ],
  beds: 150
}
];

function displayCabins(cabins: Cabin[]): void {
  const container = document.getElementById("cabins");

  if (!container) {
    return;
  }




  for (const cabin of cabins) {
    const cabinElement = document.createElement("div");
    cabinElement.className = "cabin";

    cabinElement.innerHTML = `
      <h2>${cabin.name}</h2>
      <p>Sted: ${cabin.location.municipality}</p>
      <p>Type: ${cabin.type}</p>
      <p>Pris per natt: ${cabin.pricePerNight} kr</p>
      <p>Sengeplasser: ${cabin.beds}</p>
      <p>Fasiliteter: ${cabin.facilities.join(", ")}</p>
    `;

    container.appendChild(cabinElement);
  }
const hytteOverskrift = document.getElementById("antallHytter");
if(hytteOverskrift) {
hytteOverskrift.textContent = `Antall hytter tilgjengelig: ${cabins.length}`;
}


}

displayCabins(cabins);