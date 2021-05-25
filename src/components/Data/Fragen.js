export const QuizData =[
  {
    id: 0,
    type: "single",
    question : "Welche Art der Reise ist geplant?",
    options: ["Bergurlaub", "Wellness", "Flussreise", "Cluburlaub", "Strandurlaub", "Kreuzfahrt", "Natururlaub", 
    "Studienreise", "Städte-Reise", "Jugendfreizeit", "Kultur-Reise", "Incentive-Reise", "Bauernhof", "Work & Travel",
    "Sporturlaub", "Back-Packing"],
    values: [5,4,2,2,2,1,5,4,3,3,3,3,5,4,3,3],
    tipps: ["Tipp1", "Tipp2", "Tipp3", "Tipp4", "Tipp5", "Tipp6", "Tipp7", 
    "Tipp8", "Tipp9", "Tipp10", "Tipp11", "Tipp12", "Tipp13", "Tipp14",
    "Tipp15", "Tipp16"]
  },
  {
    id: 1,
    type: "single",
    question : "Für welche Art der Unterkunft hast du Dich entschieden?",
    options: ["Hotel", "AirBnB", "Hostel", "Privat-Unterkunft", "Jugendherberge", "Couch-Surfing", "Camping-Platz", "Sternenhimmel"],
    values: [1, 2, 2, 3, 3, 4, 4, 5],
    tipps: ["Tipp1", "Tipp2", "Tipp3", "Tipp4", "Tipp5", "Tipp6", "Tipp7", "Tipp8"]
  },
  {
    id: 2,
    type: "single",
    question: "Für wie viele Tage wird verreist?",
    options:  ["1 Tag", "3 Tage", "5 Tage", "7 Tage", "10 Tage", "14 Tage", "über 2 Wochen"],
    values: [0,1,2,3,4,5,6],
    tipps: ["Tipp1", "Tipp2", "Tipp3", "Tipp4", "Tipp5", "Tipp6", "Tipp7"]
  },
  {
    id: 3,
    type: "single",
    question: "Mit wie vielen Leuten verreist Du?",
    options:  ["Alleine", "Gruppe", "Familie"],
    values: [1,2,4],
    tipps: ["Tipp1", "Tipp2", "Tipp3"]
  },
  {
    id: 4,
    type: "single",
    question: "Mit welchem Transportmittel vereist du?",
    options:  ["Auto", "Flugzeug", "Zug", "Fahrrad"],
    values: [],
    tipps: ["Tipp1", "Tipp2", "Tipp3", "Tipp4"]
  },
  {
    id: 5,
    type: "car",
    category: "power",
    question: "Welche Antriebsart verwendet dein Auto?",
    options:  ["Benzin", "Diesel", "Elektro", "Gas"],
    values: [],
    tipps: ["Tipp1", "Tipp2", "Tipp3", "Tipp4"]
  },
  {
    id: 6,
    type: "car",
    category: "type",
    question: "Welcher Fahrzeugtyp wird verwendet?",
    options:  ["Kleinwagen", "Mittelklasse", "SUV / Van"],
    values: [],
    tipps: ["Tipp1", "Tipp2", "Tipp3"]
  },
  {
    id: 7,
    type: "transport",
    question: "Wohin geht die Reise?",
    options:  ["Startpunkt:   ", "Endpunkt:   "],
    values: [],
    tipps: ["Tipp1", "Tipp2"]
  },
  {
    id: 8,
    type: "flight",
    question: "Wohin geht die Reise?",
    options:  ["Startpunkt:   ", "Endpunkt:   "],
    values: [],
    tipps: ["Tipp1", "Tipp2"]
  },
  {
    id: 9,
    type: "single",
    question: "Wie wird sich vor Ort bewegt?",
    options: ["Auto", "Zu Fuß", "Zug", "E-Scooter", "Bus", "Motorrad","Fahrrad", "Boot"],
    values: [1,5,3,4,4,3,5,2],
    tipps: ["Tipp1", "Tipp2", "Tipp3", "Tipp4", "Tipp5", "Tipp6","Tipp7", "Tipp8"]
  },
  {
    id: 10,
    type: "single",
    question: "Welcher Souvenier-Typ bis du?",
    options: ["Oma bekommt immer eine Postkarte", "Magnete für alle meine Freunde.", "Eine getöpferte Tasse für Mama.", "Muscheln und Sand vom Strand", 
      "Ich räume fast alle Souvenir-Läden leer.", "Ich schwöre auf Armbänder.","Möbelstücke kommen immer mit nach Hause.", "Fotos reichen völlig aus!"],
    values: [5,4,4,5,1,2,1,5],
    tipps: ["Tipp1", "Tipp2", "Tipp3", "Tipp4", "Tipp5", "Tipp6","Tipp7", "Tipp8"]
  },
  {
    id: 11,
    type: "single",
    question: "Wie erzählst du anderen von deiner Reise?",
    options: ["Posts bei Insta & Co.", "Ich rufe Mama an und erzähle alles.", "Ich drucke alle Fotos aus.", "Ich gestalte ein Fotoalbum.", "Ich lade zum Diashow-Abend ein"],
    values: [3,3,2,1,3],
    tipps: ["Tipp1", "Tipp2", "Tipp3", "Tipp4", "Tipp5"]
  }
]

export const carPower = [
  {
    id: 0,
    type: "car",
    category: "power",
    question: "Welche Antriebsart verwendet dein Auto?",
    options:  ["Benzin", "Diesel", "Elektro", "Hybrid", "Gas"],
    values: [],
    tipps: ["Tipp1", "Tipp2", "Tipp3", "Tipp4", "Tipp5"]
  },
  {
    id: 1,
    type: "car",
    category: "type",
    question: "Welcher Fahrzeugtyp wird verwendet?",
    options:  ["Kleinwagen", "Mittelklasse", "SUV / Van"],
    values: [],
    tipps: ["Tipp1", "Tipp2", "Tipp3"]
  },
  {
    id: 5,
    type: "transport",
    question: "Wohin geht die Reise?",
    options:  ["Startpunkt:   ", "Endpunkt:   "],
    values: [],
    tipps: ["Tipp1", "Tipp2"]
  },
]


export const flightData = [
  {
    id: 0,
    type: "transport",
    question: "Wohin geht die Reise?",
    options:  ["Startpunkt:   ", "Endpunkt:   "],
    values: [],
    tipps: ["Tipp1", "Tipp2"]
  }
]