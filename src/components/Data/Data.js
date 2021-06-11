/*
 * @Author: Florian Griesser 
 * @Date: 2021-05-29 10:27:59 
 * @Last Modified by: Florian Griesser
 * @Last Modified time: 2021-05-29 10:31:10
 */



/*Factor = C02 per liter * Average consumption  */

/*Fixme Durchscnittsverbrauch pro Klasse  https://www.quarks.de/umwelt/klimawandel/co2-rechner-fuer-auto-flugzeug-und-co/*/

export const carValues = {
    /*Benzin*/
    0: { /* pro Liter Benzin 2,32 kg CO2   */
        0: [/*Kleinwagen*/
            2.32*5.7*0.01
        ],
        1: [ /*Mittelklasse*/
            2.32*6.8*0.01
        ],
        2 : [ /*SUV / Van*/
            2.32*18.6*0.01
        ]
    },
    1: { /*  pro Liter Diesel 2,63 kg CO2 */
        0 : [/*Kleinwagen*/
            2.63*4.4*0.01
        ],
        1: [/*Mittelklasse*/
            2.63*5.1*0.01
        ],
        2 : [ /*SUV / Van*/
            2.63*6.7*0.01
        ]
    },
    2: { /*0.99 kg per KM  (circa in Deutschland)*/
        0 : [/*Kleinwagen*/
            0.99
        ],
        1: [/*Mittelklasse*/
            0.99
        ],
        2 : [/*SUV / Van*/
            0.99
        ]
    },
    3: { /*pro kg Erdgas 2,23 kg CO2.  101 Gramm pro Kilometer*/
        0 : [ /*Kleinwagen*/
            0.101
        ],
        1 : [/*Mittelklasse*/
            0.101
        ],
        2 : [ /*SUV / Van*/
            0.101
        ]
    }

};
