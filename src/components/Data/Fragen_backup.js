/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:28:13 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-06-11 22:43:47
 */

export const QuizData =[
  {
    id: 0,
    type: "single",
    headline: "Art der Reise",
    question : "Welche Art der Reise ist geplant?",
    options: ["Bergurlaub", "Wellness", "Flussreise", "Cluburlaub", "Strandurlaub", "Kreuzfahrt",
              "Städte-Reise", "Jugendfreizeit", "Kultur-Reise", "Bauernhof", "Work & Travel",
    "Sporturlaub", "Back-Packing"],
    values: [5,4,2,2,2,1,5,4,3,3,3,3,5,4,3,3],
    tipps: [  "Nimm deinen Müll mit wenn du unterwegs bist. Die Umwelt wird's dir danken.",
              "Hast du schonmal darauf geachtet, ob die Wellnessunterkunft zertifiziert ist? Ein kleiner Check lohnt sich.",
              "Schau bei den Zwischenstopps auch mal bei den lokalen Geschäften vorbei. Hier warten Überraschungen auf dich!",
              "Muss es immer All-Inclusive sein? Wenn du deine individuelle Reise planst, entscheidest du selbst, wofür du vor Ort dein Geld ausgibst und wie viel. So hast du unterwegs einen positiven Einfluss auf die lokalen Gegebenheiten.",
              "Nimm deinen Müll mit wenn du unterwegs bist. Die Umwelt wird's dir danken.",
              "Schau doch auf einem lokalen Markt vorbei! Du wirst erstaunt sein, welche Überraschungen hier auf dich warten.",
              "Städtereisen sind beliebte Kurzreisen, dabei gibt es so viele Ecken in einer Stadt zu entdecken. Ein längerer Aufenthalt ist durchaus lohnenswert.",
              "Reist doch alle zusammen z.B. mit dem Bus an.",
              "Nutze die Gelegenheit, dich auch mit den Einheimischen zu unterhalten! Durch die Kultur lernst du auch, wie du dich in der Destination verhalten solltest.",
              "Versuche doch, das ein oder andere, was du vom Alltag auf dem Bauernhof lernst, auch zu Hause in deine Routine einzubauen. Man kann so vieles ganz einfach selbst herstellen!",
              "Stell dir vor, wie viel du erleben kannst, wenn du ein kleines Bisschen länger an einem Ort bleibst. Lass dich von den Einheimischen ihre Lebensart zeigen.",
              "Sportshirts lassen sich schnell waschen und wieder trocknen, daher kannst du unnotige Last mit ein wenig Waschmittel ersetzen.",
              "Weniger Gepäck ist oft mehr! Meistens brauchst du nicht so viel und dein Rucksack wird nur unnötig schwer. Außerdem bist du viel flexibler!"
            ]
  },
  {
    id: 1,
    type: "single",
    headline: "Art der Unterkunft",
    question : "Für welche Art der Unterkunft hast du Dich entschieden?",
    options: ["Hotel", "AirBnB", "Hostel", "Privat-Unterkunft", "Couch-Surfing", "Camping-Platz"],
    values: [1, 2, 2, 3, 3, 4, 4, 5],
    tipps: ["Den Luxus eines all-inklusiv Hotels bezahlt sehr oft die Umwelt. Etwas weniger ist hier oft mehr!", 
            "Fast, als würde man bei einem Freund übernachten. Frag doch mal den Gastgeber nach seinen Insider-Tipps!", 
            "Hier gibt es meist tolle möglichkeiten Leute kennenzulernen. Perfekt, um ganz besondere Erinnerungen zu sammeln.", 
            "Behalte deinen Energie- und Wasserverbraucht im Auge.",
            "Tolle Entscheidung! So hast du gleich Kontakt zu Locals und kannst dich voll auf die Reise einlassen. Falls du mal kein Antwort auf deine Anfrag erhälst lass dich nicht unter kriegen. Es gibt verdammt viele inaktive Nutzer.",
            "Naturnah, flexibel und unter Menschen! Vergiss nicht, dass man sein Zelt nicht in Mulden aufbauen sollte, falls es doch mal regnet.",
          ]
  },
  {
    id: 2,
    type: "single",
    headline: "Dauer der Reise",
    question: "Für wie viele Tage wird verreist?",
    options:  ["1 Tag", "3 Tage", "5 Tage", "7 Tage", "10 Tage", "14 Tage", "über 2 Wochen"],
    values: [0,1,2,3,4,5,6],
    tipps: ["Überlege dir ob du nicht eine lange Reise, als viele kurze machen willst. Das schohnt die Umwelt, aber noch viel mehr deine Nerven und du kannst dich besser erholen.",
            "Überlege dir ob du nicht eine lange Reise, als viele kurze machen willst. Das schohnt die Umwelt, aber noch viel mehr deine Nerven und du kannst dich besser erholen.",
            "Überlege dir ob du nicht eine lange Reise, als viele kurze machen willst. Das schohnt die Umwelt, aber noch viel mehr deine Nerven und du kannst dich besser erholen.",
            "Überlege dir ob du nicht eine lange Reise, als viele kurze machen willst. Das schohnt die Umwelt, aber noch viel mehr deine Nerven und du kannst dich besser erholen.",
            "Überlege dir ob du nicht eine lange Reise, als viele kurze machen willst. Das schohnt die Umwelt, aber noch viel mehr deine Nerven und du kannst dich besser erholen.",
            "Überlege dir ob du nicht eine lange Reise, als viele kurze machen willst. Das schohnt die Umwelt, aber noch viel mehr deine Nerven und du kannst dich besser erholen.",
            "Überlege dir ob du nicht eine lange Reise, als viele kurze machen willst. Das schohnt die Umwelt, aber noch viel mehr deine Nerven und du kannst dich besser erholen.",
              ]
  },
  {
    id: 3,
    type: "single",
    headline: "Anzahl der Reisenden",
    question: "Mit wie vielen Leuten verreist Du?",
    options:  ["Alleine", "Gruppe", "Familie"],
    values: [1,2,4],
    tipps: ["Alleine Anreisen ist oft sehr umweltschädlich. Such doch in deinem Umfeld oder auf z.B. https://www.blablacar.de nach Mitfahrern.", 
            "Tipp2", 
            "Tipp3"]
  },
  {
    id: 4,
    type: "single",
    headline: "Transportmittel",
    question: "Mit welchem Transportmittel vereist du?",
    options:  ["Auto", "Flugzeug", "Zug"],
    values: [],
    tipps: ["Tipp1", "Tipp2", "Tipp3"]
  },
  {
    id: 5,
    type: "car",
    headline: "Antriebsart",
    category: "power",
    question: "Welche Antriebsart verwendet dein Auto?",
    options:  ["Benzin", "Diesel", "Elektro", "Gas"],
    values: [],
    tipps: ["Tipp1", "Tipp2", "Tipp3", "Tipp4"]
  },
  {
    id: 6,
    type: "car",
    headline: "Fahrzeugtyp",
    category: "type",
    question: "Welcher Fahrzeugtyp wird verwendet?",
    options:  ["Kleinwagen", "Mittelklasse", "SUV / Van"],
    values: [],
    tipps: ["Tipp1", "Tipp2", "Tipp3"]
  },
  {
    id: 7,
    type: "transport",
    headline: "Reiseziel",
    question: "Wohin geht die Reise?",
    options:  ["Startpunkt:   ", "Endpunkt:   "],
    values: [],
    tipps: ["Tipp1", "Tipp2"]
  },
  {
    id: 8,
    type: "flight",
    headline: "Reiseziel",
    question: "Wohin geht die Reise?",
    options:  ["Startpunkt:   ", "Endpunkt:   "],
    values: [],
    tipps: ["Tipp1", "Tipp2"]
  },
  {
    id: 9,
    type: "single",
    headline: "Fortbewegung vor Ort",
    question: "Wie wird sich vor Ort bewegt?",
    options: ["Auto", "Zu Fuß", "Zug", "Bus", "Motorrad","Fahrrad", "Boot"],
    values: [1,5,3,4,4,3,5,2],
    tipps: ["Tipp1",
            "Tipp2",
            "Der Zug ist die perfekte Möglichkeit dein Wunschziel mit dem Rad zu erkundigen!",
            "Vergiss deine Kopfhörer nicht und ggf. ein Kissen. ",
            "Tipp6",
            "Toll! Die perfekte Mischung aus Erlebnis, Sport und Erholung mit der höchsten Flexibilität! Flickzeug nicht vergessen :)",
            "Selbst gerudert ist halb gewonnen. "]
  },
  {
    id: 10,
    type: "single",
    headline: "Souveniere",
    question: "Welcher Souvenier-Typ bis du?",
    options: ["Oma bekommt immer eine Postkarte", "Magnete für alle meine Freunde.", "Eine getöpferte Tasse für Mama.", "Muscheln und Sand vom Strand", 
      "Ich räume fast alle Souvenir-Läden leer.", "Ich schwöre auf Armbänder.","Möbelstücke kommen immer mit nach Hause.", "Fotos reichen völlig aus!"],
    values: [5,4,4,5,1,2,1,5],
    tipps: ["Tipp1", "Tipp2", "Tipp3", "Tipp4", "Tipp5", "Tipp6","Tipp7", "Tipp8"]
  },
  {
    id: 11,
    type: "single",
    headline: "Wie erzählst du von deiner Reise",
    question: "Wie erzählst du anderen von deiner Reise?",
    options: ["Posts bei Insta & Co.", "Ich rufe Mama an und erzähle alles.", "Ich drucke alle Fotos aus.", "Ich gestalte ein Fotoalbum.", "Ich lade zum Diashow-Abend ein"],
    values: [3,3,2,1,3],
    tipps: ["Tipp1", 
            "Tipp2", 
            "Tipp3", 
            "Tipp4", 
            "Tipp5"]
  }
]


//Obsolete:
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