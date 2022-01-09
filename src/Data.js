import SchildGesperrt from "./Images/schildGesperrt.jpeg";
import VorrichtungOne from "./Images/310599-1.jpg";
import VorrichtungTwo from "./Images/310599.jpg";
import VorrichtungThree from "./Images/310975.jpg";
import VorrichtungFour from "./Images/310977.jpg";
import VorrichtungFive from "./Images/320871.jpg";

let magazin = [
    {   
        image_url: [SchildGesperrt],
        title: 'Aufnahmespanner ',
        year: '2001',
        typ: 'Vorrichtung',
        articleNumber: ' 310201',
        maschine: ['1149', '1150', '1159'],
        rate: '1',
        articleDescription: ['55582 - 730N/65', '56975 - 730/65 Quick', '57855 - 730N/65 Neutral', '57883 - 730/20 Heavy Duty 14" ', '57908 - 721/30 Heavy Duty 18" '], 
        crowd: '1',
    },
    {   
        image_url: [SchildGesperrt],
        title: 'Drehstahlhalter ',
        year: '2001',
        typ: 'Werkzeug',
        articleNumber: ' 310201',
        maschine: ['4182', '4181', '4180'],
        rate: '1',
        articleDescription: ['55582 - 730N/65', '56975 - 730/65 Quick', '57855 - 730N/65 Neutral', '57883 - 730/20 Heavy Duty 14" ', '57908 - 721/30 Heavy Duty 18" '], 
        crowd: '1',
    },
    {   
        image_url: [VorrichtungOne],
        title: 'Aufnahmevorrichtung ',
        year: '2011',
        typ: 'Vorrichtung',
        articleNumber: ' 310599',
        maschine: ['7179', '7177'],
        rate: '5',
        articleDescription: ['55582 - 730N/65', '56975 - 730/65 Quick'], 
        crowd: '4',
    },    {   
        image_url: [VorrichtungTwo],
        title: 'Tandem-Spanner ',
        year: '2012',
        typ: 'Vorrichtung',
        articleNumber: ' 320871',
        maschine: ['1149', '1150', '1157', '1159'],
        rate: '8',
        articleDescription: ['55582 - 730N/65', '56975 - 730/65 Quick', '57855 - 730N/65 Neutral', '57883 - 730/20 Heavy Duty 14" ', '57908 - 721/30 Heavy Duty 18" '], 
        crowd: '10',
    },    {   
        image_url: [VorrichtungThree],
        title: 'Tandem-Aufnahme',
        year: '2005',
        typ: 'Vorrichtung',
        articleNumber: ' 320871',
        maschine: ['1149', '1150', '1157', '1159'],
        rate: '4',
        articleDescription: ['55582 - 730N/65', '56975 - 730/65 Quick', '57855 - 730N/65 Neutral', '57883 - 730/20 Heavy Duty 14" ', '57908 - 721/30 Heavy Duty 18" '], 
        crowd: '9',
    },    {   
        image_url: [VorrichtungFour],
        title: 'Tandem-Halter ',
        year: '2017',
        typ: 'Vorrichtung',
        articleNumber: ' 320871',
        maschine: ['1149', '1150', '1157', '1159'],
        rate: '6',
        articleDescription: ['55582 - 730N/65', '56975 - 730/65 Quick', '57855 - 730N/65 Neutral', '57883 - 730/20 Heavy Duty 14" ', '57908 - 721/30 Heavy Duty 18" '], 
        crowd: '2',
    },    {   
        image_url: [VorrichtungFive],
        title: 'Tandem-Spanner ',
        year: '2003',
        typ: 'Vorrichtung',
        articleNumber: ' 320871',
        maschine: ['1149', '1150', '1157', '1159'],
        rate: '3',
        articleDescription: ['55582 - 730N/65', '56975 - 730/65 Quick', '57855 - 730N/65 Neutral', '57883 - 730/20 Heavy Duty 14" ', '57908 - 721/30 Heavy Duty 18" '], 
        crowd: '6',
    }
];

export default magazin