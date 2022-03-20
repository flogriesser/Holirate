/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:28:13 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-06-11 22:43:47
 */

export const QuizData = [
  {
    /*Please do not move Question "Transportmittel"*/
    id: 1,
    type: "single",
    headline: "Transportmittel",
    question: "Mit welchem Transportmittel reist du zu deinem Urlaubsziel?",
    options: ["Auto", "Flugzeug", "Zug"],
    values: ["Car", "Flight", "Train"],
    tipps: ["Hast du dir als Alternative den Zug genauer angeschaut? Hier lässt sich Zeit, Geld und Nerven sparen. Falls das nicht passt, versuche dein Auto so weit es geht mit Personen zu füllen. Kennst du vielleicht schon https://www.blablacar.de?",
      "Hast du auch einmal Alternativen in Betracht gezogen? Diese sind meist umweltschonender und ggf. sogar günstiger und entspannter. Unter https://www.rome2rio.com/de/  hast du einen guten Überblick über deine Möglichkeiten von A nach B zu kommen",
      "Gute Wahl! Du hast dich für das umweltschonendste Verkehrsmittel entschieden und kannst dich in Ruhe zurücklehnen, dich unterhalten oder ein Buch lesen"]
  },
  {
    id: 2,
    type: "single",
    headline: "Art der Reise",
    question: "Welche Art der Reise ist geplant?",
    options: ["Bergurlaub", "Wellness", "Flussreise", "Cluburlaub", "Strandurlaub",
      "Städte-Reise", "Jugendfreizeit", "Kultur-Reise", "Bauernhof", "Work & Travel",
      "Sporturlaub", "Back-Packing"],
    values: [5, 4, 2, 2, 2, 5, 4, 3, 3, 3, 3, 5, 4, 3, 3],
    tipps: ["Verwednet am besten Tupperware statt Plastik und Alu- Verpackung für die Brotzeit. Auch eine Idee: du kannst die leere Tupperdose dann mit deinem Müll füllen. Die Umwelt wird's dir danken.",
      "Hast du schonmal darauf geachtet, ob die Wellnessunterkunft zertifiziert ist? Ein kleiner Check lohnt sich: https://www.fairunterwegs.org/vor-der-reise/labelfuehrer/.",
      "Schau bei den Zwischenstopps auch mal bei den lokalen Geschäften vorbei. Diese haben weniger Werbung draußen und keine Übersetzungen in eine andere Sprache oder Währung. Hier warten Überraschungen auf dich!",
      "Muss es immer All-Inclusive sein? Wenn du deine individuelle Reise planst, entscheidest du selbst, wofür du vor Ort dein Geld ausgibst und wie viel. So hast du unterwegs einen positiven Einfluss auf die lokalen Gegebenheiten und erlebst wie es ist ein Local zu sein.",
      "Nimm deinen Müll mit wenn du unterwegs bist. Die Umwelt wird's dir danken.",
      "Städtereisen sind beliebte Kurzreisen, dabei gibt es so viele Ecken in einer Stadt zu entdecken. Ein längerer Aufenthalt ist durchaus lohnenswert.",
      "Reist doch alle zusammen z.B. mit dem Bus an. Eine perfekte Gelegenheit um sich besser kennen zu lernen und Pläne zu schmieden",
      "Nutze die Gelegenheit, dich auch mit den Einheimischen zu unterhalten und deine Sprachkentnisse erweitern kannst! Durch die Kultur lernst du auch, wie du dich vor Ort verhalten solltest.",
      "Versuche doch, das ein oder andere, was du vom Alltag auf dem Bauernhof lernst, auch zu Hause in deine Routine einzubauen. Man kann so vieles ganz einfach selbst herstellen!",
      "Stell dir vor, wie viel du erleben kannst, wenn du ein kleines Bisschen länger an einem Ort bleibst. Lass dir von den Einheimischen ihre Lebensart zeigen, das findest du in keinem Buch.",
      "Sportshirts lassen sich schnell waschen und wieder trocknen, daher kannst du unnotige Last mit ein wenig Waschmittel ersetzen.",
      "Weniger Gepäck ist oft mehr! Packe neutrale Farben ein, meistens brauchst du nicht so viel und dein Rucksack wird nur unnötig schwer. Außerdem bist du viel flexibler und annst mehr Souvenirs mitbringen!"
    ]
  },
  {
    id: 3,
    type: "single",
    headline: "Art der Unterkunft",
    question: "Wo wirst du übernachten?",
    options: ["Hotel", "AirBnB", "Hostel", "Privat-Unterkunft", "Couch-Surfing", "Camping-Platz"],
    values: [1, 2, 2, 3, 3, 4, 4, 5],
    tipps: ["Den Luxus eines all-inklusiv Hotels bezahlt sehr oft die Umwelt. Überlege dir ob du wirklich alle Angebote brauchst, die angeboten werden",
      "Fast, als würde man bei einem Freund übernachten. Frag doch mal den Gastgeber nach seinen Insider-Tipps!",
      "Hier gibt es meist tolle möglichkeiten neue Leute kennenzulernen und sich aus zu tauschen. Perfekt, um ganz besondere Erinnerungen zu sammeln.",
      "Fast wie ein Zuhause in einem anderen Land. Behalte aber deinen Energie- und Wasserverbraucht im Auge.",
      "Tolle Entscheidung! So hast du gleich Kontakt zu Locals und kannst dich voll auf die Reise einlassen. Falls du mal kein Antwort auf deine Anfrag erhälst lass dich nicht unter kriegen. Es gibt verdammt viele inaktive Nutzer.",
      "Naturnah, flexibel und unter Menschen! Vergiss nicht, dass man sein Zelt nicht in Mulden aufbauen sollte, falls es doch mal regnet.",
    ]
  },
  {
    id: 4,
    type: "single",
    headline: "Dauer der Reise",
    question: "Für wie viele Tage wird verreist?",
    options: ["1 Tag", "3 Tage", "5 Tage", "7 Tage", "10 Tage", "14 Tage", "über 2 Wochen"],
    values: [0, 1, 2, 3, 4, 5, 6],
    tipps: ["Überlege dir ob du nicht eine lange Reise, als viele kurze machen willst. Das schohnt die Umwelt, aber noch viel mehr deine Nerven und du kannst dich besser erholen.",
      "Überlege dir ob du nicht eine lange Reise, als viele kurze machen willst. Das schohnt die Umwelt, aber noch viel mehr deine Nerven und du kannst dich besser erholen.",
      "Überlege dir ob du nicht eine lange Reise, als viele kurze machen willst. Das schohnt die Umwelt, aber noch viel mehr deine Nerven und du kannst dich besser erholen.",
      "Überlege dir ob du nicht eine lange Reise, als viele kurze machen willst. Das schohnt die Umwelt, aber noch viel mehr deine Nerven und du kannst dich besser erholen.",
      "Überlege dir ob du nicht eine lange Reise, als viele kurze machen willst. Das schohnt die Umwelt, aber noch viel mehr deine Nerven und du kannst dich besser erholen.",
      "Eine super Entscheidung! So kannst du dich vollkommen auf deinen Urlaub und die neue Umgebung einlassen. Zusätzlich schonst du die Umwelt und deine Nerven!",
      "Eine super Entscheidung! So kannst du dich vollkommen auf deinen Urlaub und die neue Umgebung einlassen. Zusätzlich schonst du die Umwelt und deine Nerven!",
    ]
  },
  {
    id: 5,
    type: "single",
    headline: "Anzahl der Reisenden",
    question: "Mit wie vielen Leuten verreist Du?",
    options: ["Alleine", "Paar", "Gruppe", "Familie"],
    values: [1, 2, 2, 4],
    tipps: ["Alleine Anreisen ist oft sehr umweltschädlich und macht nicht so viel Spaß. Such doch in deinem Umfeld oder z.B. unter https://www.blablacar.de nach Mitfahrern.",
      "Zu zweit zu reisen ist meistens für die Umwelt besser als allein ein Transportmittel zu nutzen. Noch besser wäre es, wenn ihr falls möglich die volle Kapazität des Transportmittels ausnutzt.",
      "So lassen sich nicht nur Kosten sondern auch Emissionen sparen, im vergleich zu allein Reisenden! Vielleicht schafft ihr es sogar noch jemanden mitzunehmen?",
      "So lassen sich nicht nur Kosten sondern auch Emissionen sparen, im vergleich zu allein Reisenden! Vielleicht schafft ihr es sogar noch jemanden mitzunehmen?"]
  },
  {
    id: 6,
    type: "single",
    headline: "Fortbewegung vor Ort",
    question: "Wie bewegst du dich vor Ort?",
    options: ["Auto", "Zu Fuß", "Zug", "Bus", "Motorrad", "Fahrrad", "Boot", "E-Scooter"],
    values: [1, 5, 3, 4, 4, 3, 5, 2],
    tipps: ["Prüfe, ob es Fahrzeuge mit Elektroantrieb gibt. Das schont nicht nur die Umwelt, sondern ist auch ein zusätzliches Erlebnis!",
      "Super! So wird dein Uralub noch intensiver, da du alles um dich herum mit genügend Zeit wahrnehmen kannst!",
      "Der Zug ist die perfekte Möglichkeit, dein Wunschziel mit dem Rad zu erkunden. Hier ist die Fahrradmitnahme überhaupt kein Problem.",
      "Vergiss deine Kopfhörer nicht und ggf. ein Kissen. So kannst du entspannen, während du deine Umgebung beobachten kannst.",
      "Hast du bereits ein Motorrad der neuen Generation mit Elektroantrieb versucht? Umweltfreundlich bei besserer Beschleunnigung.",
      "Toll! Die perfekte Mischung aus Erlebnis, Sport und Erholung mit der höchsten Flexibilität! Flickzeug nicht vergessen. :)",
      "Selbst gerudert ist halb gewonnen. Fitness für den Tage kannst du somit wegstreichen.",
      "E-Scooter sind inzwischen in jeder größeren Stadt in allen Ecken verteilt. Das gute ist, dass du schnell und flexibel bist und beim Fahren keine Emissionen entstehen. Problematisch sind allerdings die Lithium-Akkus der Roller, die schwierig zu recyceln sind und der Stromverbrauch beim Aufladen. Fahrräder gewinnen daher unterm' Strich beim Verlgeich."]
  },
  {
    id: 7,
    type: "single",
    headline: "Souveniere",
    question: "Welcher Souvenier-Typ bis du?",
    options: ["Oma bekommt immer eine Postkarte", "Magnete für alle meine Freunde.", "Eine getöpferte Tasse für Mama.", "Muscheln und Sand vom Strand",
      "Ich räume alle Souvenir-Läden leer.", "Ich schwöre auf Armbänder.", "Fotos reichen völlig aus!"],
    values: [5, 4, 4, 5, 1, 2, 5],
    tipps: ["Auch in der älteren Generation gibt es schon viele, die sich auch über digitale Erinnerungen freuen",
      "Bist du dir sicher, dass deine Freunde sich über Magneten freun? Oder doch lieber etwas handwerkliches aus dem Urlaubsort?",
      "Achte darauf, dass diese auch im Urlaubsort hergestellt wird und nicht z.B. aus China kommt",
      "Schönes Souvenier! Vergiss nicht nochmal zu prüfen, dass du keine lebendigen Sachen oder Pflanzen einpackst. Der Zoll wird sich freuen.",
      "Behälst du wirklich alles und erfreust dich daran? Nicht, dass es nach kurzer Zeit im Müll landet. Da würden hochwertigere Produkte, welche vor Ort hergestellt werden ggf. länger halten und haben noch dazu eine Geschichte",
      "Hier kann man kaum was falsch machen! Achte auf lokal hergestellte Armbänder.",
      "Digital lassen sich wunderbar einzelne Fotos oder sogar ganze Alben teilen! Zusätzlich schonst du wichtige Ressourcen"]
  },
  {
    id: 8,
    type: "single",
    headline: "Wie erzählst du von deiner Reise",
    question: "Wie erzählst du anderen von deiner Reise?",
    options: ["Posts bei Insta & Co.", "Ich rufe Mama an und erzähle alles.", "Ich drucke alle Fotos aus.", "Ich gestalte ein Fotoalbum.", "Ich lade zum Diashow-Abend ein"],
    values: [3, 3, 2, 1, 3],
    tipps: ["Eine einfache Möglichkeit die meisten Leute in deinem Umfeld mitzunehmen.",
      "Vergiss nicht, ihr digital ein paar Bilder zu senden",
      "Hast du schon einmal ein digitales Fotoalbum gemacht? So hast du es immer parat und kannst es einfach teilen!",
      "Hast du schon einmal von einem digitalen Fotoalbum gehört? Das hast du immer parat und kannst es einfach teilen!",
      "Cool! So musst du nicht alles drucken und kannst deine Erlebnisse präsentieren!"]
  },

]

export const CarQuestion = [
  {
    id: 0,
    type: "car",
    headline: "Antriebsart",
    category: "power",
    question: "Welche Antriebsart verwendet dein Auto?",
    options: ["Benzin", "Diesel", "Elektro", "Gas"],
    values: [],
    tipps: ["Um Bezin zu sparen, denk daran: Schnell fahren und oft Bremsen verbraucht nicht nur viel Bezin, sondern auch Nerven", "Mit Hinblick auf die Diesel-Belastungsgrenzen solltest du dich informieren, wie umweltfreundlich dein Auto ist, was den Verbrauch angeht.", "Cool! du bist einer der Vorreiter in der Mobilitätswende!", "Tipp4"]/*ich denke hier ist kein Tip sinnvoll. Maximal ein Lob bei elektro? */
  },
  {
    id: 1,
    type: "car",
    headline: "Fahrzeugtyp",
    category: "type",
    question: "Welcher Fahrzeugtyp wird verwendet?",
    options: ["Kleinwagen", "Mittelklasse", "SUV / Van"],
    values: [],
    tipps: ["Prüfe immer, ob du noch Mitfahrer mitnehmen kannst, das schont nicht nur die Umwelt, sondern auch deinen Geldbeutel!",
      "Prüfe immer, ob du  noch Mitfahrer mitnehmen kannst. Hast du schonmal über Fahrgemeinschaften nachgedacht?",
      "Benötigst du den Platz wirklich? Vielleicht kannst du noch jemanden mitnehmen."]
  },
  {
    id: 2,
    type: "car",
    headline: "Reiseziel",
    question: "Wohin geht die Reise?",
    options: ["Startpunkt:   ", "Endpunkt:   "],
    values: [],
    tipps: ["Meist hat die nächstgelegene Großstadt eine bessere Anbindung öffentlicher Verkehrsmittel.", "Ein super Ziel! Warst du auch schon an den tollen Orten um deine Heimat? Oft vergisst man wie schön es dort eigentlich ist!"]/*schwer hier einen Tipp zu geben*/
  },
]


export const FlightQuestion = [
  {
    id: 0,
    type: "flight",
    headline: "Reiseziel",
    question: "Wohin geht die Reise?",
    options: ["Startpunkt:   ", "Endpunkt:   "],
    values: [],
    tipps: ["Wusstest du, dass es Flüghäfen mit speziellen Rail & Fly-Angeboten gibt, um deinen CO2-Ausstoß zu reduzieren.", "Wenn du unentschlossen bist kannst du dich auch an der klimaoptimierten Flugroute orientieren, wie von REACT4: https://www.react4c.eu/ "]
  }
]

export const TrainQuestion = [
  {
    id: 0,
    type: "transport",
    headline: "Reiseziel",
    question: "Wohin geht die Reise?",
    options: ["Startpunkt:   ", "Endpunkt:   "],
    values: [],
    tipps: ["Meist hat die nächstgelegene Großstadt eine bessere Anbindung öffentlicher Verkehrsmittel.", "Ein super Ziel! Warst du auch schon an den tollen Orten um deine Heimat? Oft vergisst man wie schön es dort eigentlich ist!"]/*schwer hier einen Tipp zu geben*/
  },
]