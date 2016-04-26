var Bussholdeplass = require('./Bussholdeplass');

var Stops = [
    {
        "busStopId": 100000,
        "locationId": "16482728",
        "name": "Støren Stasjon",
        "longitude": 10.284515,
        "latitude": 63.05172
    },
    {
        "busStopId": 100001,
        "locationId": "16482727",
        "name": "Rogstad",
        "longitude": 10.366549,
        "latitude": 63.013341
    },
    {
        "busStopId": 100002,
        "locationId": "16482726",
        "name": "Rogstadøyen",
        "longitude": 10.336007,
        "latitude": 63.017589
    },
    {
        "busStopId": 100003,
        "locationId": "16482722",
        "name": "Garli",
        "longitude": 10.102014,
        "latitude": 62.891075
    },
    {
        "busStopId": 100004,
        "locationId": "16482720",
        "name": "Gullvåg camping",
        "longitude": 10.141746,
        "latitude": 62.917319
    },
    {
        "busStopId": 100005,
        "locationId": "16482719",
        "name": "Bjørset",
        "longitude": 10.148627,
        "latitude": 62.923433
    },
    {
        "busStopId": 100006,
        "locationId": "16482718",
        "name": "Fossestua",
        "longitude": 10.189779,
        "latitude": 62.938276
    },
    {
        "busStopId": 100007,
        "locationId": "16482717",
        "name": "Soknedal",
        "longitude": 10.189752,
        "latitude": 62.948773
    },
    {
        "busStopId": 100008,
        "locationId": "16482716",
        "name": "Nybrua",
        "longitude": 10.192555,
        "latitude": 62.966478
    },
    {
        "busStopId": 100009,
        "locationId": "16482715",
        "name": "Storøyen",
        "longitude": 10.236518,
        "latitude": 62.982446
    },
    {
        "busStopId": 100010,
        "locationId": "16482714",
        "name": "Snøan",
        "longitude": 10.244612,
        "latitude": 62.987061
    },
    {
        "busStopId": 100011,
        "locationId": "16482713",
        "name": "Haukdalsbru",
        "longitude": 10.245995,
        "latitude": 62.99354
    },
    {
        "busStopId": 100012,
        "locationId": "16482712",
        "name": "Skjerliløkken",
        "longitude": 10.239564,
        "latitude": 62.997313
    },
    {
        "busStopId": 100013,
        "locationId": "16482711",
        "name": "Øverøyen",
        "longitude": 10.238207,
        "latitude": 63.000812
    },
    {
        "busStopId": 100014,
        "locationId": "16482710",
        "name": "Nerøyen",
        "longitude": 10.246525,
        "latitude": 63.014886
    },
    {
        "busStopId": 100015,
        "locationId": "16482709",
        "name": "Storlykkja",
        "longitude": 10.254368,
        "latitude": 63.026803
    },
    {
        "busStopId": 100016,
        "locationId": "16322213",
        "name": "Lunde",
        "longitude": 10.544658,
        "latitude": 64.132648
    },
    {
        "busStopId": 100017,
        "locationId": "16322211",
        "name": "Brandsfjord skole",
        "longitude": 10.420143,
        "latitude": 64.187679
    },
    {
        "busStopId": 100018,
        "locationId": "16305289",
        "name": "Holmeng",
        "longitude": 10.426575,
        "latitude": 64.04072
    },
    {
        "busStopId": 100019,
        "locationId": "16305276",
        "name": "Grensen",
        "longitude": 10.542826,
        "latitude": 64.1117
    },
    {
        "busStopId": 100020,
        "locationId": "16305250",
        "name": "Monstad",
        "longitude": 10.1835,
        "latitude": 63.959953
    },
    {
        "busStopId": 100021,
        "locationId": "16305212",
        "name": "Momyrvatn",
        "longitude": 10.531929,
        "latitude": 64.102921
    },
    {
        "busStopId": 100022,
        "locationId": "16305210",
        "name": "Momyr",
        "longitude": 10.504863,
        "latitude": 64.089362
    },
    {
        "busStopId": 100023,
        "locationId": "16305208",
        "name": "Nittermark",
        "longitude": 10.38501,
        "latitude": 64.02512
    },
    {
        "busStopId": 100024,
        "locationId": "16305207",
        "name": "Berdal",
        "longitude": 10.292789,
        "latitude": 63.991685
    },
    {
        "busStopId": 100025,
        "locationId": "16305206",
        "name": "Mikkelmo",
        "longitude": 10.248628,
        "latitude": 63.979451
    },
    {
        "busStopId": 100026,
        "locationId": "16305205",
        "name": "Årnes",
        "longitude": 10.224894,
        "latitude": 63.960588
    },
    {
        "busStopId": 100027,
        "locationId": "16305204",
        "name": "Arnevik",
        "longitude": 10.223618,
        "latitude": 63.937991
    },
    {
        "busStopId": 100028,
        "locationId": "16305203",
        "name": "Mørre",
        "longitude": 10.215156,
        "latitude": 63.921583
    },
    {
        "busStopId": 100029,
        "locationId": "16305202",
        "name": "Mørreaunet",
        "longitude": 10.243786,
        "latitude": 63.910982
    },
    {
        "busStopId": 100030,
        "locationId": "16302289",
        "name": "Holmeng",
        "longitude": 10.426323,
        "latitude": 64.040716
    },
    {
        "busStopId": 100031,
        "locationId": "16302276",
        "name": "Grensen",
        "longitude": 10.542484,
        "latitude": 64.111598
    },
    {
        "busStopId": 100032,
        "locationId": "16205869",
        "name": "Rabben",
        "longitude": 8.836817,
        "latitude": 63.723679
    },
    {
        "busStopId": 100033,
        "locationId": "16205867",
        "name": "Hamarvika",
        "longitude": 8.818689,
        "latitude": 63.703561
    },
    {
        "busStopId": 100034,
        "locationId": "16205835",
        "name": "Strømøybotn",
        "longitude": 8.791749,
        "latitude": 63.776911
    },
    {
        "busStopId": 100035,
        "locationId": "16205828",
        "name": "Dyrøy skole",
        "longitude": 8.68343,
        "latitude": 63.797274
    },
    {
        "busStopId": 100036,
        "locationId": "16205825",
        "name": "Kværnø",
        "longitude": 8.687499,
        "latitude": 63.781622
    },
    {
        "busStopId": 100037,
        "locationId": "16205823",
        "name": "Skjønhals",
        "longitude": 8.713874,
        "latitude": 63.785555
    },
    {
        "busStopId": 100038,
        "locationId": "16205822",
        "name": "Auka",
        "longitude": 8.746797,
        "latitude": 63.776955
    },
    {
        "busStopId": 100039,
        "locationId": "16205821",
        "name": "Strømøy",
        "longitude": 8.779388,
        "latitude": 63.777717
    },
    {
        "busStopId": 100040,
        "locationId": "16205815",
        "name": "Hellesvik",
        "longitude": 8.811611,
        "latitude": 63.779308
    },
    {
        "busStopId": 100041,
        "locationId": "16205813",
        "name": "Nesset",
        "longitude": 8.814036,
        "latitude": 63.768253
    },
    {
        "busStopId": 100042,
        "locationId": "16205812",
        "name": "Uttiankrysset",
        "longitude": 8.814997,
        "latitude": 63.760842
    },
    {
        "busStopId": 100043,
        "locationId": "16205811",
        "name": "Dyrvik",
        "longitude": 8.823109,
        "latitude": 63.75633
    },
    {
        "busStopId": 100044,
        "locationId": "16205810",
        "name": "Ervik",
        "longitude": 8.832002,
        "latitude": 63.747654
    },
    {
        "busStopId": 100045,
        "locationId": "16205809",
        "name": "Fredagsvik",
        "longitude": 8.837105,
        "latitude": 63.745226
    },
    {
        "busStopId": 100046,
        "locationId": "16205808",
        "name": "Sistranda busstasjon",
        "longitude": 8.831993,
        "latitude": 63.734478
    },
    {
        "busStopId": 100047,
        "locationId": "16205807",
        "name": "Melkstaden",
        "longitude": 8.840402,
        "latitude": 63.713696
    },
    {
        "busStopId": 100048,
        "locationId": "16632092",
        "name": "Sveberg skole",
        "longitude": 10.757415,
        "latitude": 63.421729
    },
    {
        "busStopId": 100049,
        "locationId": "16632091",
        "name": "Vikhamar skole",
        "longitude": 10.633942,
        "latitude": 63.438444
    },
    {
        "busStopId": 100050,
        "locationId": "16632080",
        "name": "Karlstad",
        "longitude": 10.779253,
        "latitude": 63.355029
    },
    {
        "busStopId": 100051,
        "locationId": "16632078",
        "name": "Bakken",
        "longitude": 10.763165,
        "latitude": 63.368163
    },
    {
        "busStopId": 100052,
        "locationId": "16632075",
        "name": "Halla",
        "longitude": 10.776532,
        "latitude": 63.387388
    },
    {
        "busStopId": 100053,
        "locationId": "16632071",
        "name": "Isdammen",
        "longitude": 10.790285,
        "latitude": 63.408322
    },
    {
        "busStopId": 100054,
        "locationId": "16632062",
        "name": "Sneisen",
        "longitude": 10.808296,
        "latitude": 63.331113
    },
    {
        "busStopId": 100055,
        "locationId": "16632061",
        "name": "Smiskaret rundkjøring",
        "longitude": 10.746186,
        "latitude": 63.43045
    },
    {
        "busStopId": 100056,
        "locationId": "16632048",
        "name": "Bjørnmyra rundkjøringen",
        "longitude": 10.748288,
        "latitude": 63.422818
    },
    {
        "busStopId": 100057,
        "locationId": "16632030",
        "name": "Havneveien",
        "longitude": 10.80411,
        "latitude": 63.413473
    },
    {
        "busStopId": 100058,
        "locationId": "16627028",
        "name": "Tanemsmovegen",
        "longitude": 10.431174,
        "latitude": 63.308279
    },
    {
        "busStopId": 100059,
        "locationId": "16626028",
        "name": "Tanemsmovegen",
        "longitude": 10.431013,
        "latitude": 63.308243
    },
    {
        "busStopId": 100060,
        "locationId": "16538204",
        "name": "Gimseflata",
        "longitude": 10.254161,
        "latitude": 63.279749
    },
    {
        "busStopId": 100061,
        "locationId": "16538203",
        "name": "Gimse",
        "longitude": 10.253065,
        "latitude": 63.282552
    },
    {
        "busStopId": 100062,
        "locationId": "16538119",
        "name": "Uglevegen",
        "longitude": 10.31743,
        "latitude": 63.287769
    },
    {
        "busStopId": 100063,
        "locationId": "16538118",
        "name": "Loddgårdstrøa",
        "longitude": 10.309237,
        "latitude": 63.28571
    },
    {
        "busStopId": 100064,
        "locationId": "16353326",
        "name": "Skauma bru",
        "longitude": 10.03517,
        "latitude": 62.814419
    },
    {
        "busStopId": 100065,
        "locationId": "16353322",
        "name": "Berkåk skole",
        "longitude": 10.007897,
        "latitude": 62.829268
    },
    {
        "busStopId": 100066,
        "locationId": "16353321",
        "name": "Skjephaug",
        "longitude": 9.965757,
        "latitude": 62.833657
    },
    {
        "busStopId": 100067,
        "locationId": "16353320",
        "name": "Berkåk sentrum",
        "longitude": 10.007816,
        "latitude": 62.828144
    },
    {
        "busStopId": 100068,
        "locationId": "16353312",
        "name": "Buan",
        "longitude": 10.044782,
        "latitude": 62.870236
    },
    {
        "busStopId": 100069,
        "locationId": "16353308",
        "name": "Nordskogen",
        "longitude": 10.054771,
        "latitude": 62.8687
    },
    {
        "busStopId": 100070,
        "locationId": "16353306",
        "name": "Halland camping",
        "longitude": 10.071875,
        "latitude": 62.866119
    },
    {
        "busStopId": 100071,
        "locationId": "16344222",
        "name": "Strand",
        "longitude": 9.933121,
        "latitude": 62.689787
    },
    {
        "busStopId": 100072,
        "locationId": "16343468",
        "name": "Slepphaugråket",
        "longitude": 9.703404,
        "latitude": 62.596419
    },
    {
        "busStopId": 100073,
        "locationId": "16343464",
        "name": "Togvollan",
        "longitude": 9.730839,
        "latitude": 62.604691
    },
    {
        "busStopId": 100074,
        "locationId": "16343460",
        "name": "Hallset",
        "longitude": 9.750386,
        "latitude": 62.61292
    },
    {
        "busStopId": 100075,
        "locationId": "16343456",
        "name": "Rønningsveien",
        "longitude": 9.754815,
        "latitude": 62.615531
    },
    {
        "busStopId": 100076,
        "locationId": "16343452",
        "name": "Myrplassen",
        "longitude": 9.784549,
        "latitude": 62.630064
    },
    {
        "busStopId": 100077,
        "locationId": "16343448",
        "name": "Veskje",
        "longitude": 9.789786,
        "latitude": 62.632537
    },
    {
        "busStopId": 100078,
        "locationId": "16343444",
        "name": "Myran",
        "longitude": 9.806378,
        "latitude": 62.639743
    },
    {
        "busStopId": 100079,
        "locationId": "16343440",
        "name": "Krokan",
        "longitude": 9.822072,
        "latitude": 62.643673
    },
    {
        "busStopId": 100080,
        "locationId": "16538544",
        "name": "Øie skole",
        "longitude": 10.254107,
        "latitude": 63.322681
    },
    {
        "busStopId": 100081,
        "locationId": "16538543",
        "name": "Udduvoll bru V.",
        "longitude": 10.265103,
        "latitude": 63.321923
    },
    {
        "busStopId": 100082,
        "locationId": "16538542",
        "name": "Gafset",
        "longitude": 10.2418,
        "latitude": 63.323758
    },
    {
        "busStopId": 100083,
        "locationId": "16538506",
        "name": "Melhus skysstasjon",
        "longitude": 10.27785,
        "latitude": 63.284789
    },
    {
        "busStopId": 100084,
        "locationId": "16538505",
        "name": "Melhus sentrum",
        "longitude": 10.2752,
        "latitude": 63.287491
    },
    {
        "busStopId": 100085,
        "locationId": "16538504",
        "name": "Kvitland",
        "longitude": 10.281946,
        "latitude": 63.29494
    },
    {
        "busStopId": 100086,
        "locationId": "16538503",
        "name": "Brubakk",
        "longitude": 10.286177,
        "latitude": 63.29894
    },
    {
        "busStopId": 100087,
        "locationId": "16538501",
        "name": "Skottvold",
        "longitude": 10.291342,
        "latitude": 63.309219
    },
    {
        "busStopId": 100088,
        "locationId": "16538190",
        "name": "Gimseflata",
        "longitude": 10.253784,
        "latitude": 63.282544
    },
    {
        "busStopId": 100089,
        "locationId": "16538189",
        "name": "Melhusbrua",
        "longitude": 10.263414,
        "latitude": 63.28113
    },
    {
        "busStopId": 100090,
        "locationId": "16538116",
        "name": "Brekkåsen",
        "longitude": 10.24428,
        "latitude": 63.272465
    },
    {
        "busStopId": 100091,
        "locationId": "16538114",
        "name": "Trøndertun",
        "longitude": 10.250514,
        "latitude": 63.277572
    },
    {
        "busStopId": 100092,
        "locationId": "16538020",
        "name": "Øysandkrysset",
        "longitude": 10.21689,
        "latitude": 63.323552
    },
    {
        "busStopId": 100093,
        "locationId": "16535060",
        "name": "Øysandkrysset",
        "longitude": 10.216162,
        "latitude": 63.324214
    },
    {
        "busStopId": 100094,
        "locationId": "16011790",
        "name": "Væresholmen",
        "longitude": 10.574994,
        "latitude": 63.433318
    },
    {
        "busStopId": 100095,
        "locationId": "16011789",
        "name": "Ekra",
        "longitude": 10.296526,
        "latitude": 63.316655
    },
    {
        "busStopId": 100096,
        "locationId": "16011529",
        "name": "Udduvoll bru Ø.",
        "longitude": 10.27599,
        "latitude": 63.323915
    },
    {
        "busStopId": 100097,
        "locationId": "16011528",
        "name": "Stav Øvre",
        "longitude": 10.296247,
        "latitude": 63.323843
    },
    {
        "busStopId": 100098,
        "locationId": "16011527",
        "name": "Storler",
        "longitude": 10.32502,
        "latitude": 63.325464
    },
    {
        "busStopId": 100099,
        "locationId": "16011526",
        "name": "Sandmoen E6",
        "longitude": 10.362606,
        "latitude": 63.33914
    },
    {
        "busStopId": 100100,
        "locationId": "16011525",
        "name": "Johan Tillers v. E6",
        "longitude": 10.369487,
        "latitude": 63.348461
    },
    {
        "busStopId": 100101,
        "locationId": "16011524",
        "name": "City Syd E6",
        "longitude": 10.374724,
        "latitude": 63.36157
    },
    {
        "busStopId": 100102,
        "locationId": "16011523",
        "name": "Tonstadkrysset",
        "longitude": 10.379629,
        "latitude": 63.369097
    },
    {
        "busStopId": 100103,
        "locationId": "16010911",
        "name": "Munkegata MR",
        "longitude": 10.39455,
        "latitude": 63.431089
    },
    {
        "busStopId": 100104,
        "locationId": "16011725",
        "name": "Spongdal",
        "longitude": 10.166809,
        "latitude": 63.355988
    },
    {
        "busStopId": 100105,
        "locationId": "16011723",
        "name": "Fallet",
        "longitude": 10.170303,
        "latitude": 63.364587
    },
    {
        "busStopId": 100106,
        "locationId": "16011722",
        "name": "Myrsund",
        "longitude": 10.176978,
        "latitude": 63.370015
    },
    {
        "busStopId": 100107,
        "locationId": "16011721",
        "name": "Berg Bedehus",
        "longitude": 10.16883,
        "latitude": 63.377129
    },
    {
        "busStopId": 100108,
        "locationId": "16011720",
        "name": "Berg",
        "longitude": 10.167195,
        "latitude": 63.379701
    },
    {
        "busStopId": 100109,
        "locationId": "16011710",
        "name": "Breidablikk",
        "longitude": 10.376655,
        "latitude": 63.412347
    },
    {
        "busStopId": 100110,
        "locationId": "16011698",
        "name": "Karosserifabrikk",
        "longitude": 10.161284,
        "latitude": 63.385952
    },
    {
        "busStopId": 100111,
        "locationId": "16011697",
        "name": "Skjøstad",
        "longitude": 10.161284,
        "latitude": 63.390797
    },
    {
        "busStopId": 100112,
        "locationId": "16011696",
        "name": "Megarden",
        "longitude": 10.161069,
        "latitude": 63.394011
    },
    {
        "busStopId": 100113,
        "locationId": "16011695",
        "name": "Mjøset",
        "longitude": 10.163099,
        "latitude": 63.401087
    },
    {
        "busStopId": 100114,
        "locationId": "16011694",
        "name": "Høstad",
        "longitude": 10.161536,
        "latitude": 63.406424
    },
    {
        "busStopId": 100115,
        "locationId": "16011693",
        "name": "Fortuna",
        "longitude": 10.154763,
        "latitude": 63.4133
    },
    {
        "busStopId": 100116,
        "locationId": "16011692",
        "name": "Rye skole",
        "longitude": 10.147199,
        "latitude": 63.419084
    },
    {
        "busStopId": 100117,
        "locationId": "16011691",
        "name": "Rye",
        "longitude": 10.150235,
        "latitude": 63.425346
    },
    {
        "busStopId": 100118,
        "locationId": "16011690",
        "name": "Klefstadhaugen",
        "longitude": 10.183455,
        "latitude": 63.433491
    },
    {
        "busStopId": 100119,
        "locationId": "16011311",
        "name": "Haakon VII gate 25",
        "longitude": 10.459947,
        "latitude": 63.440461
    },
    {
        "busStopId": 100120,
        "locationId": "16011308",
        "name": "Munkvoll gård",
        "longitude": 10.357719,
        "latitude": 63.402052
    },
    {
        "busStopId": 100121,
        "locationId": "16011307",
        "name": "Moltmyra Øst",
        "longitude": 10.399006,
        "latitude": 63.360572
    },
    {
        "busStopId": 100122,
        "locationId": "16011306",
        "name": "Munkvoll",
        "longitude": 10.359282,
        "latitude": 63.39737
    },
    {
        "busStopId": 100123,
        "locationId": "16011305",
        "name": "Maskinistboligene",
        "longitude": 10.39799,
        "latitude": 63.381907
    },
    {
        "busStopId": 100124,
        "locationId": "16011302",
        "name": "Moholt",
        "longitude": 10.434812,
        "latitude": 63.411317
    },
    {
        "busStopId": 100125,
        "locationId": "16011301",
        "name": "Moholt studentby",
        "longitude": 10.43209,
        "latitude": 63.413915
    },
    {
        "busStopId": 100126,
        "locationId": "16011300",
        "name": "Strinda kirke",
        "longitude": 10.444927,
        "latitude": 63.41293
    },
    {
        "busStopId": 100127,
        "locationId": "16011299",
        "name": "Mikkelvegen",
        "longitude": 10.390921,
        "latitude": 63.371952
    },
    {
        "busStopId": 100128,
        "locationId": "16011298",
        "name": "Midteggen",
        "longitude": 10.356614,
        "latitude": 63.362094
    },
    {
        "busStopId": 100129,
        "locationId": "16011297",
        "name": "Maskinagentur",
        "longitude": 10.374455,
        "latitude": 63.366359
    },
    {
        "busStopId": 100130,
        "locationId": "16011295",
        "name": "Marienborg",
        "longitude": 10.377338,
        "latitude": 63.419856
    },
    {
        "busStopId": 100131,
        "locationId": "16011294",
        "name": "Marie Sørdals v.",
        "longitude": 10.43598,
        "latitude": 63.391919
    },
    {
        "busStopId": 100132,
        "locationId": "16011292",
        "name": "Marcus Thranes vei",
        "longitude": 10.367196,
        "latitude": 63.355387
    },
    {
        "busStopId": 100133,
        "locationId": "16011290",
        "name": "Magnus Berrføtts v.",
        "longitude": 10.437894,
        "latitude": 63.420865
    },
    {
        "busStopId": 100134,
        "locationId": "16010734",
        "name": "Hangeråsen",
        "longitude": 10.101717,
        "latitude": 63.374521
    },
    {
        "busStopId": 100135,
        "locationId": "16010733",
        "name": "Solunda",
        "longitude": 10.091099,
        "latitude": 63.374492
    },
    {
        "busStopId": 100136,
        "locationId": "16010732",
        "name": "Hangran",
        "longitude": 10.074741,
        "latitude": 63.381959
    },
    {
        "busStopId": 100137,
        "locationId": "16010731",
        "name": "Bjøra",
        "longitude": 10.127328,
        "latitude": 63.424233
    },
    {
        "busStopId": 100138,
        "locationId": "16010730",
        "name": "Bukta",
        "longitude": 10.139554,
        "latitude": 63.424301
    },
    {
        "busStopId": 100139,
        "locationId": "16010729",
        "name": "Byaberget",
        "longitude": 10.15019,
        "latitude": 63.427291
    },
    {
        "busStopId": 100140,
        "locationId": "16010728",
        "name": "Klefstadbekken",
        "longitude": 10.155643,
        "latitude": 63.434258
    },
    {
        "busStopId": 100141,
        "locationId": "16010726",
        "name": "Flakk",
        "longitude": 10.192025,
        "latitude": 63.444975
    },
    {
        "busStopId": 100142,
        "locationId": "16010725",
        "name": "Spongdal",
        "longitude": 10.166809,
        "latitude": 63.35598
    },
    {
        "busStopId": 100143,
        "locationId": "16010723",
        "name": "Fallet",
        "longitude": 10.170348,
        "latitude": 63.364712
    },
    {
        "busStopId": 100144,
        "locationId": "16010722",
        "name": "Myrsund",
        "longitude": 10.177301,
        "latitude": 63.369995
    },
    {
        "busStopId": 100145,
        "locationId": "16010721",
        "name": "Berg Bedehus",
        "longitude": 10.16874,
        "latitude": 63.376779
    },
    {
        "busStopId": 100146,
        "locationId": "16010720",
        "name": "Berg",
        "longitude": 10.16698,
        "latitude": 63.379738
    },
    {
        "busStopId": 100147,
        "locationId": "16010710",
        "name": "Breidablikk",
        "longitude": 10.376673,
        "latitude": 63.412359
    },
    {
        "busStopId": 100148,
        "locationId": "16010698",
        "name": "Karosserifabrikk",
        "longitude": 10.161698,
        "latitude": 63.385219
    },
    {
        "busStopId": 100149,
        "locationId": "16010309",
        "name": "Johannes Minsaa's vei",
        "longitude": 10.518077,
        "latitude": 63.42973
    },
    {
        "busStopId": 100150,
        "locationId": "16010308",
        "name": "Munkvoll gård",
        "longitude": 10.357324,
        "latitude": 63.40169
    },
    {
        "busStopId": 100151,
        "locationId": "16010307",
        "name": "Moltmyra Øst",
        "longitude": 10.399221,
        "latitude": 63.360415
    },
    {
        "busStopId": 100152,
        "locationId": "16010306",
        "name": "Munkvoll",
        "longitude": 10.35921,
        "latitude": 63.397193
    },
    {
        "busStopId": 100153,
        "locationId": "16010305",
        "name": "Maskinistboligene",
        "longitude": 10.39782,
        "latitude": 63.381271
    },
    {
        "busStopId": 100154,
        "locationId": "16010303",
        "name": "Moltmyra",
        "longitude": 10.394568,
        "latitude": 63.360874
    },
    {
        "busStopId": 100155,
        "locationId": "16010302",
        "name": "Moholt",
        "longitude": 10.43704,
        "latitude": 63.409862
    },
    {
        "busStopId": 100156,
        "locationId": "16010301",
        "name": "Moholt studentby",
        "longitude": 10.43289,
        "latitude": 63.412648
    },
    {
        "busStopId": 100157,
        "locationId": "16010300",
        "name": "Strinda kirke",
        "longitude": 10.44482,
        "latitude": 63.412781
    },
    {
        "busStopId": 100158,
        "locationId": "16010298",
        "name": "Midteggen",
        "longitude": 10.357719,
        "latitude": 63.362593
    },
    {
        "busStopId": 100159,
        "locationId": "16010297",
        "name": "Maskinagentur",
        "longitude": 10.373709,
        "latitude": 63.36623
    },
    {
        "busStopId": 100160,
        "locationId": "16010295",
        "name": "Marienborg",
        "longitude": 10.377563,
        "latitude": 63.419205
    },
    {
        "busStopId": 100161,
        "locationId": "16010294",
        "name": "Marie Sørdals v.",
        "longitude": 10.437094,
        "latitude": 63.392651
    },
    {
        "busStopId": 100162,
        "locationId": "16010293",
        "name": "Margretes gate",
        "longitude": 10.386824,
        "latitude": 63.423751
    },
    {
        "busStopId": 100163,
        "locationId": "16482747",
        "name": "Moabakken",
        "longitude": 10.742063,
        "latitude": 62.952993
    },
    {
        "busStopId": 100164,
        "locationId": "16482746",
        "name": "Singsås stasjon",
        "longitude": 10.729514,
        "latitude": 62.956481
    },
    {
        "busStopId": 100165,
        "locationId": "16482745",
        "name": "Singsåsbakken",
        "longitude": 10.714485,
        "latitude": 62.956796
    },
    {
        "busStopId": 100166,
        "locationId": "16482744",
        "name": "Klokkerhaugen",
        "longitude": 10.70508,
        "latitude": 62.956841
    },
    {
        "busStopId": 100167,
        "locationId": "16482743",
        "name": "Willmannsøyen",
        "longitude": 10.680816,
        "latitude": 62.947985
    },
    {
        "busStopId": 100168,
        "locationId": "16482741",
        "name": "Forsetmoen",
        "longitude": 10.651522,
        "latitude": 62.942771
    },
    {
        "busStopId": 100169,
        "locationId": "16482740",
        "name": "Hovstad",
        "longitude": 10.626971,
        "latitude": 62.948111
    },
    {
        "busStopId": 100170,
        "locationId": "16482738",
        "name": "Øyan",
        "longitude": 10.578462,
        "latitude": 62.966535
    },
    {
        "busStopId": 100171,
        "locationId": "16482737",
        "name": "Kotsøy",
        "longitude": 10.561169,
        "latitude": 62.972957
    },
    {
        "busStopId": 100172,
        "locationId": "16482736",
        "name": "Bogen",
        "longitude": 10.541119,
        "latitude": 62.988195
    },
    {
        "busStopId": 100173,
        "locationId": "16482735",
        "name": "Støren Rådhus (gamle E6)",
        "longitude": 10.284497,
        "latitude": 63.038669
    },
    {
        "busStopId": 100174,
        "locationId": "16482734",
        "name": "Bones",
        "longitude": 10.479441,
        "latitude": 62.992581
    },
    {
        "busStopId": 100175,
        "locationId": "16482732",
        "name": "Rognes bru",
        "longitude": 10.455204,
        "latitude": 63.004168
    },
    {
        "busStopId": 100176,
        "locationId": "16482731",
        "name": "Rognes",
        "longitude": 10.449545,
        "latitude": 63.009473
    },
    {
        "busStopId": 100177,
        "locationId": "16482730",
        "name": "Støren sentrum",
        "longitude": 10.282494,
        "latitude": 63.047099
    },
    {
        "busStopId": 100178,
        "locationId": "16482729",
        "name": "Aunøien",
        "longitude": 10.421922,
        "latitude": 63.017813
    },
    {
        "busStopId": 100179,
        "locationId": "16332233",
        "name": "Osen",
        "longitude": 10.511322,
        "latitude": 64.298582
    },
    {
        "busStopId": 100180,
        "locationId": "16332232",
        "name": "Sundet",
        "longitude": 10.468957,
        "latitude": 64.306104
    },
    {
        "busStopId": 100181,
        "locationId": "16332231",
        "name": "Brattgjerd",
        "longitude": 10.43006,
        "latitude": 64.288501
    },
    {
        "busStopId": 100182,
        "locationId": "16332198",
        "name": "Myrbakkan",
        "longitude": 10.543787,
        "latitude": 64.291502
    },
    {
        "busStopId": 100183,
        "locationId": "16325229",
        "name": "Vikvatnet",
        "longitude": 10.404333,
        "latitude": 64.250184
    },
    {
        "busStopId": 100184,
        "locationId": "16325228",
        "name": "Hofstad",
        "longitude": 10.405662,
        "latitude": 64.19676
    },
    {
        "busStopId": 100185,
        "locationId": "16325216",
        "name": "Reppkleiv",
        "longitude": 10.431004,
        "latitude": 64.183795
    },
    {
        "busStopId": 100186,
        "locationId": "16325215",
        "name": "Nerdal",
        "longitude": 10.447434,
        "latitude": 64.173715
    },
    {
        "busStopId": 100187,
        "locationId": "16325214",
        "name": "Fagerdal",
        "longitude": 10.474383,
        "latitude": 64.169719
    },
    {
        "busStopId": 100188,
        "locationId": "16325213",
        "name": "Lunde",
        "longitude": 10.544955,
        "latitude": 64.132645
    },
    {
        "busStopId": 100189,
        "locationId": "16325211",
        "name": "Brandsfjord skole",
        "longitude": 10.420385,
        "latitude": 64.187882
    },
    {
        "busStopId": 100190,
        "locationId": "16322229",
        "name": "Vikvatnet",
        "longitude": 10.404009,
        "latitude": 64.250411
    },
    {
        "busStopId": 100191,
        "locationId": "16322228",
        "name": "Hofstad",
        "longitude": 10.405446,
        "latitude": 64.197084
    },
    {
        "busStopId": 100192,
        "locationId": "16322216",
        "name": "Reppkleiv",
        "longitude": 10.430447,
        "latitude": 64.183755
    },
    {
        "busStopId": 100193,
        "locationId": "16322215",
        "name": "Nerdal",
        "longitude": 10.44676,
        "latitude": 64.173657
    },
    {
        "busStopId": 100194,
        "locationId": "16322214",
        "name": "Fagerdal",
        "longitude": 10.474329,
        "latitude": 64.169406
    },
    {
        "busStopId": 100195,
        "locationId": "16209828",
        "name": "Dyrøy skole",
        "longitude": 8.683349,
        "latitude": 63.797263
    },
    {
        "busStopId": 100196,
        "locationId": "16209825",
        "name": "Kværnø",
        "longitude": 8.687562,
        "latitude": 63.781567
    },
    {
        "busStopId": 100197,
        "locationId": "16209823",
        "name": "Skjønhals",
        "longitude": 8.714054,
        "latitude": 63.785472
    },
    {
        "busStopId": 100198,
        "locationId": "16209822",
        "name": "Auka",
        "longitude": 8.74686,
        "latitude": 63.776875
    },
    {
        "busStopId": 100199,
        "locationId": "16209821",
        "name": "Strømøy",
        "longitude": 8.779289,
        "latitude": 63.777689
    },
    {
        "busStopId": 100200,
        "locationId": "16209815",
        "name": "Hellesvik",
        "longitude": 8.811566,
        "latitude": 63.779273
    },
    {
        "busStopId": 100201,
        "locationId": "16209813",
        "name": "Nesset",
        "longitude": 8.813955,
        "latitude": 63.768209
    },
    {
        "busStopId": 100202,
        "locationId": "16209812",
        "name": "Uttiankrysset",
        "longitude": 8.814934,
        "latitude": 63.760835
    },
    {
        "busStopId": 100203,
        "locationId": "16209811",
        "name": "Dyrvik",
        "longitude": 8.822974,
        "latitude": 63.756283
    },
    {
        "busStopId": 100204,
        "locationId": "16209810",
        "name": "Ervik",
        "longitude": 8.831903,
        "latitude": 63.747582
    },
    {
        "busStopId": 100205,
        "locationId": "16209809",
        "name": "Fredagsvik",
        "longitude": 8.837123,
        "latitude": 63.745361
    },
    {
        "busStopId": 100206,
        "locationId": "16209808",
        "name": "Sistranda busstasjon",
        "longitude": 8.831993,
        "latitude": 63.734478
    },
    {
        "busStopId": 100207,
        "locationId": "16209807",
        "name": "Melkstaden",
        "longitude": 8.839934,
        "latitude": 63.713433
    },
    {
        "busStopId": 100208,
        "locationId": "16207015",
        "name": "Siholmen",
        "longitude": 8.837527,
        "latitude": 63.73742
    },
    {
        "busStopId": 100209,
        "locationId": "16205893",
        "name": "Dyrøy ferjekai",
        "longitude": 8.682038,
        "latitude": 63.798492
    },
    {
        "busStopId": 100210,
        "locationId": "16205892",
        "name": "Sistranda skole",
        "longitude": 8.829891,
        "latitude": 63.73059
    },
    {
        "busStopId": 100211,
        "locationId": "16343421",
        "name": "Oppdal sentrum",
        "longitude": 9.685411,
        "latitude": 62.594861
    },
    {
        "busStopId": 100212,
        "locationId": "16638394",
        "name": "Muruvik rundkjøringen",
        "longitude": 10.833988,
        "latitude": 63.432816
    },
    {
        "busStopId": 100213,
        "locationId": "16638393",
        "name": "Hommelvik skole",
        "longitude": 10.805853,
        "latitude": 63.41293
    },
    {
        "busStopId": 100214,
        "locationId": "16638392",
        "name": "Sveberg skole",
        "longitude": 10.756751,
        "latitude": 63.421954
    },
    {
        "busStopId": 100215,
        "locationId": "16638378",
        "name": "Bakken",
        "longitude": 10.763165,
        "latitude": 63.368163
    },
    {
        "busStopId": 100216,
        "locationId": "16638375",
        "name": "Halla",
        "longitude": 10.776532,
        "latitude": 63.387388
    },
    {
        "busStopId": 100217,
        "locationId": "16638371",
        "name": "Isdammen",
        "longitude": 10.790285,
        "latitude": 63.408322
    },
    {
        "busStopId": 100218,
        "locationId": "16638362",
        "name": "Sneisen",
        "longitude": 10.808296,
        "latitude": 63.331113
    },
    {
        "busStopId": 100219,
        "locationId": "16638361",
        "name": "Smiskaret rundkjøring",
        "longitude": 10.746186,
        "latitude": 63.43045
    },
    {
        "busStopId": 100220,
        "locationId": "16638348",
        "name": "Bjørnmyra rundkjøringen",
        "longitude": 10.748288,
        "latitude": 63.422818
    },
    {
        "busStopId": 100221,
        "locationId": "16638336",
        "name": "Vikhammeråsen",
        "longitude": 10.629711,
        "latitude": 63.433182
    },
    {
        "busStopId": 100222,
        "locationId": "16638335",
        "name": "Vikhammeråsen",
        "longitude": 10.642934,
        "latitude": 63.43178
    },
    {
        "busStopId": 100223,
        "locationId": "16638314",
        "name": "Storsand",
        "longitude": 10.706041,
        "latitude": 63.431201
    },
    {
        "busStopId": 100224,
        "locationId": "16632094",
        "name": "Muruvik rundkjøringen",
        "longitude": 10.833988,
        "latitude": 63.432816
    },
    {
        "busStopId": 100225,
        "locationId": "16632093",
        "name": "Hommelvik skole",
        "longitude": 10.805853,
        "latitude": 63.41293
    },
    {
        "busStopId": 100226,
        "locationId": "16354311",
        "name": "Rennebu Nedre",
        "longitude": 9.831692,
        "latitude": 62.883252
    },
    {
        "busStopId": 100227,
        "locationId": "16354310",
        "name": "Herremsveien",
        "longitude": 9.829806,
        "latitude": 62.885929
    },
    {
        "busStopId": 100228,
        "locationId": "16354309",
        "name": "Mærk bru",
        "longitude": 9.811301,
        "latitude": 62.902273
    },
    {
        "busStopId": 100229,
        "locationId": "16354308",
        "name": "Holskrysset",
        "longitude": 9.803818,
        "latitude": 62.903672
    },
    {
        "busStopId": 100230,
        "locationId": "16354307",
        "name": "Åsveien",
        "longitude": 9.781306,
        "latitude": 62.90722
    },
    {
        "busStopId": 100231,
        "locationId": "16354306",
        "name": "Grindal Handel",
        "longitude": 9.764337,
        "latitude": 62.917102
    },
    {
        "busStopId": 100232,
        "locationId": "16354305",
        "name": "Nerskogveien",
        "longitude": 9.757258,
        "latitude": 62.922709
    },
    {
        "busStopId": 100233,
        "locationId": "16354304",
        "name": "Aunan",
        "longitude": 9.76873,
        "latitude": 62.940397
    },
    {
        "busStopId": 100234,
        "locationId": "16354303",
        "name": "Grindal Nedre",
        "longitude": 9.764031,
        "latitude": 62.917319
    },
    {
        "busStopId": 100235,
        "locationId": "16354302",
        "name": "Bruholtveien",
        "longitude": 9.775413,
        "latitude": 62.956804
    },
    {
        "busStopId": 100236,
        "locationId": "16354301",
        "name": "Motun",
        "longitude": 9.780929,
        "latitude": 62.97288
    },
    {
        "busStopId": 100237,
        "locationId": "16353350",
        "name": "Stavå bru",
        "longitude": 10.031181,
        "latitude": 62.802547
    },
    {
        "busStopId": 100238,
        "locationId": "16353336",
        "name": "Stølsvangsveien",
        "longitude": 9.946003,
        "latitude": 62.699756
    },
    {
        "busStopId": 100239,
        "locationId": "16353334",
        "name": "Rognøy",
        "longitude": 9.957942,
        "latitude": 62.711055
    },
    {
        "busStopId": 100240,
        "locationId": "16353332",
        "name": "Kløftbrua",
        "longitude": 9.976043,
        "latitude": 62.733411
    },
    {
        "busStopId": 100241,
        "locationId": "16353330",
        "name": "Ulsberg",
        "longitude": 9.982466,
        "latitude": 62.749
    },
    {
        "busStopId": 100242,
        "locationId": "16574009",
        "name": "Lykkjnesset",
        "longitude": 10.140021,
        "latitude": 63.32039
    },
    {
        "busStopId": 100243,
        "locationId": "16574008",
        "name": "Ølsholm",
        "longitude": 10.146804,
        "latitude": 63.318765
    },
    {
        "busStopId": 100244,
        "locationId": "16574007",
        "name": "Havenge",
        "longitude": 10.154098,
        "latitude": 63.314622
    },
    {
        "busStopId": 100245,
        "locationId": "16574006",
        "name": "Piine Mølle",
        "longitude": 10.160682,
        "latitude": 63.311923
    },
    {
        "busStopId": 100246,
        "locationId": "16574005",
        "name": "Buvika",
        "longitude": 10.172594,
        "latitude": 63.310898
    },
    {
        "busStopId": 100247,
        "locationId": "16574002",
        "name": "Tangen",
        "longitude": 10.183877,
        "latitude": 63.31254
    },
    {
        "busStopId": 100248,
        "locationId": "16574001",
        "name": "Brekka",
        "longitude": 10.191773,
        "latitude": 63.3154
    },
    {
        "busStopId": 100249,
        "locationId": "16011743",
        "name": "Perstu",
        "longitude": 10.192725,
        "latitude": 63.362525
    },
    {
        "busStopId": 100250,
        "locationId": "16011742",
        "name": "Haugbjørg",
        "longitude": 10.196678,
        "latitude": 63.359009
    },
    {
        "busStopId": 100251,
        "locationId": "16011741",
        "name": "Kleivplassen",
        "longitude": 10.212722,
        "latitude": 63.353981
    },
    {
        "busStopId": 100252,
        "locationId": "16011739",
        "name": "Eggen",
        "longitude": 10.124606,
        "latitude": 63.37987
    },
    {
        "busStopId": 100253,
        "locationId": "16011738",
        "name": "Haugrønning",
        "longitude": 10.068641,
        "latitude": 63.398847
    },
    {
        "busStopId": 100254,
        "locationId": "16011737",
        "name": "Byneset kirke",
        "longitude": 10.1183,
        "latitude": 63.357937
    },
    {
        "busStopId": 100255,
        "locationId": "16011736",
        "name": "Stene",
        "longitude": 10.114276,
        "latitude": 63.362038
    },
    {
        "busStopId": 100256,
        "locationId": "16011735",
        "name": "Langlo",
        "longitude": 10.111563,
        "latitude": 63.367325
    },
    {
        "busStopId": 100257,
        "locationId": "16011734",
        "name": "Hangeråsen",
        "longitude": 10.101906,
        "latitude": 63.374557
    },
    {
        "busStopId": 100258,
        "locationId": "16011733",
        "name": "Solunda",
        "longitude": 10.091099,
        "latitude": 63.374492
    },
    {
        "busStopId": 100259,
        "locationId": "16011732",
        "name": "Hangran",
        "longitude": 10.074839,
        "latitude": 63.381943
    },
    {
        "busStopId": 100260,
        "locationId": "16011731",
        "name": "Bjøra",
        "longitude": 10.12731,
        "latitude": 63.424153
    },
    {
        "busStopId": 100261,
        "locationId": "16011730",
        "name": "Bukta",
        "longitude": 10.139509,
        "latitude": 63.424253
    },
    {
        "busStopId": 100262,
        "locationId": "16011729",
        "name": "Byaberget",
        "longitude": 10.150783,
        "latitude": 63.427926
    },
    {
        "busStopId": 100263,
        "locationId": "16011728",
        "name": "Klefstadbekken",
        "longitude": 10.155948,
        "latitude": 63.434339
    },
    {
        "busStopId": 100264,
        "locationId": "16011726",
        "name": "Flakk",
        "longitude": 10.194585,
        "latitude": 63.445188
    },
    {
        "busStopId": 100265,
        "locationId": "16011336",
        "name": "Nygård",
        "longitude": 10.408555,
        "latitude": 63.398384
    },
    {
        "busStopId": 100266,
        "locationId": "16011335",
        "name": "Nydalen",
        "longitude": 10.386914,
        "latitude": 63.404566
    },
    {
        "busStopId": 100267,
        "locationId": "16011334",
        "name": "Nyborg",
        "longitude": 10.352311,
        "latitude": 63.413838
    },
    {
        "busStopId": 100268,
        "locationId": "16011333",
        "name": "Gløshaugen Nord",
        "longitude": 10.406111,
        "latitude": 63.418309
    },
    {
        "busStopId": 100269,
        "locationId": "16011330",
        "name": "Nordslettvegen",
        "longitude": 10.406462,
        "latitude": 63.387131
    },
    {
        "busStopId": 100270,
        "locationId": "16011327",
        "name": "Migosenteret",
        "longitude": 10.369128,
        "latitude": 63.393903
    },
    {
        "busStopId": 100271,
        "locationId": "16011326",
        "name": "Nordre Flatåsen",
        "longitude": 10.349499,
        "latitude": 63.379146
    },
    {
        "busStopId": 100272,
        "locationId": "16011324",
        "name": "Haakon VII gate 9",
        "longitude": 10.44906,
        "latitude": 63.444084
    },
    {
        "busStopId": 100273,
        "locationId": "16011323",
        "name": "Haakon VII gate 29",
        "longitude": 10.46602,
        "latitude": 63.438489
    },
    {
        "busStopId": 100274,
        "locationId": "16011321",
        "name": "Nidarvoll skole",
        "longitude": 10.40471,
        "latitude": 63.399148
    },
    {
        "busStopId": 100275,
        "locationId": "16011320",
        "name": "Nardokrysset",
        "longitude": 10.423772,
        "latitude": 63.406951
    },
    {
        "busStopId": 100276,
        "locationId": "16011319",
        "name": "Nedre Leirfoss",
        "longitude": 10.393939,
        "latitude": 63.380595
    },
    {
        "busStopId": 100277,
        "locationId": "16011315",
        "name": "Vikåsen",
        "longitude": 10.530528,
        "latitude": 63.414679
    },
    {
        "busStopId": 100278,
        "locationId": "16011314",
        "name": "Markaplassen",
        "longitude": 10.535828,
        "latitude": 63.415664
    },
    {
        "busStopId": 100279,
        "locationId": "16010751",
        "name": "Klett Møbel",
        "longitude": 10.319316,
        "latitude": 63.325613
    },
    {
        "busStopId": 100280,
        "locationId": "16010750",
        "name": "Esp meieri",
        "longitude": 10.32299,
        "latitude": 63.327771
    },
    {
        "busStopId": 100281,
        "locationId": "16010749",
        "name": "Lersbakken",
        "longitude": 10.330177,
        "latitude": 63.331706
    },
    {
        "busStopId": 100282,
        "locationId": "16010748",
        "name": "Esplykkja",
        "longitude": 10.332009,
        "latitude": 63.334568
    },
    {
        "busStopId": 100283,
        "locationId": "16010747",
        "name": "Heggstaddalen",
        "longitude": 10.336016,
        "latitude": 63.337318
    },
    {
        "busStopId": 100284,
        "locationId": "16010746",
        "name": "Heggstad",
        "longitude": 10.338944,
        "latitude": 63.341111
    },
    {
        "busStopId": 100285,
        "locationId": "16010745",
        "name": "Heimdalsv. 73",
        "longitude": 10.346131,
        "latitude": 63.344017
    },
    {
        "busStopId": 100286,
        "locationId": "16010744",
        "name": "Østingen",
        "longitude": 10.183796,
        "latitude": 63.36801
    },
    {
        "busStopId": 100287,
        "locationId": "16010743",
        "name": "Perstu",
        "longitude": 10.192483,
        "latitude": 63.363343
    },
    {
        "busStopId": 100288,
        "locationId": "16010742",
        "name": "Haugbjørg",
        "longitude": 10.196256,
        "latitude": 63.359335
    },
    {
        "busStopId": 100289,
        "locationId": "16010741",
        "name": "Kleivplassen",
        "longitude": 10.21274,
        "latitude": 63.354026
    },
    {
        "busStopId": 100290,
        "locationId": "16010739",
        "name": "Eggen",
        "longitude": 10.124256,
        "latitude": 63.379883
    },
    {
        "busStopId": 100291,
        "locationId": "16010738",
        "name": "Haugrønning",
        "longitude": 10.068515,
        "latitude": 63.398754
    },
    {
        "busStopId": 100292,
        "locationId": "16010737",
        "name": "Byneset kirke",
        "longitude": 10.118291,
        "latitude": 63.357841
    },
    {
        "busStopId": 100293,
        "locationId": "16010736",
        "name": "Stene",
        "longitude": 10.114276,
        "latitude": 63.361973
    },
    {
        "busStopId": 100294,
        "locationId": "16010735",
        "name": "Langlo",
        "longitude": 10.111419,
        "latitude": 63.367301
    },
    {
        "busStopId": 100295,
        "locationId": "16010333",
        "name": "Gløshaugen Nord",
        "longitude": 10.405967,
        "latitude": 63.418184
    },
    {
        "busStopId": 100296,
        "locationId": "16010330",
        "name": "Nordslettvegen",
        "longitude": 10.406704,
        "latitude": 63.387119
    },
    {
        "busStopId": 100297,
        "locationId": "16010329",
        "name": "Rate",
        "longitude": 10.397424,
        "latitude": 63.386897
    },
    {
        "busStopId": 100298,
        "locationId": "16010328",
        "name": "Nordre gate",
        "longitude": 10.396921,
        "latitude": 63.433202
    },
    {
        "busStopId": 100299,
        "locationId": "16010327",
        "name": "Migosenteret",
        "longitude": 10.369083,
        "latitude": 63.393911
    },
    {
        "busStopId": 100300,
        "locationId": "16010326",
        "name": "Nordre Flatåsen",
        "longitude": 10.350227,
        "latitude": 63.379263
    },
    {
        "busStopId": 100301,
        "locationId": "16010324",
        "name": "Haakon VII gate 9",
        "longitude": 10.449626,
        "latitude": 63.443782
    },
    {
        "busStopId": 100302,
        "locationId": "16010323",
        "name": "Haakon VII gate 29",
        "longitude": 10.465616,
        "latitude": 63.438493
    },
    {
        "busStopId": 100303,
        "locationId": "16010322",
        "name": "Trondheim Spektrum",
        "longitude": 10.377581,
        "latitude": 63.426604
    },
    {
        "busStopId": 100304,
        "locationId": "16010321",
        "name": "Nidarvoll skole",
        "longitude": 10.404889,
        "latitude": 63.39869
    },
    {
        "busStopId": 100305,
        "locationId": "16010320",
        "name": "Nardokrysset",
        "longitude": 10.424293,
        "latitude": 63.406396
    },
    {
        "busStopId": 100306,
        "locationId": "16010319",
        "name": "Nedre Leirfoss",
        "longitude": 10.394954,
        "latitude": 63.380458
    },
    {
        "busStopId": 100307,
        "locationId": "16010315",
        "name": "Vikåsen",
        "longitude": 10.53086,
        "latitude": 63.41568
    },
    {
        "busStopId": 100308,
        "locationId": "16010314",
        "name": "Markaplassen",
        "longitude": 10.536322,
        "latitude": 63.415201
    },
    {
        "busStopId": 100309,
        "locationId": "16010311",
        "name": "Haakon VII gate 25",
        "longitude": 10.460486,
        "latitude": 63.440168
    },
    {
        "busStopId": 100310,
        "locationId": "16010310",
        "name": "Møllebakken",
        "longitude": 10.35833,
        "latitude": 63.429353
    },
    {
        "busStopId": 100311,
        "locationId": "16489707",
        "name": "Soknes",
        "longitude": 10.274283,
        "latitude": 63.034388
    },
    {
        "busStopId": 100312,
        "locationId": "16489001",
        "name": "Soknedal skole",
        "longitude": 10.18844,
        "latitude": 62.956359
    },
    {
        "busStopId": 100313,
        "locationId": "16482860",
        "name": "Aune",
        "longitude": 10.439753,
        "latitude": 63.014303
    },
    {
        "busStopId": 100314,
        "locationId": "16482858",
        "name": "Plassbekken",
        "longitude": 10.389591,
        "latitude": 63.01518
    },
    {
        "busStopId": 100315,
        "locationId": "16482855",
        "name": "Nesset",
        "longitude": 10.296346,
        "latitude": 63.031749
    },
    {
        "busStopId": 100316,
        "locationId": "16482771",
        "name": "Garli Rasteplass",
        "longitude": 10.115955,
        "latitude": 62.903353
    },
    {
        "busStopId": 100317,
        "locationId": "16482763",
        "name": "Rogstadgjerdet",
        "longitude": 10.376458,
        "latitude": 63.014401
    },
    {
        "busStopId": 100318,
        "locationId": "16482758",
        "name": "Singsås Coop",
        "longitude": 10.723773,
        "latitude": 62.957188
    },
    {
        "busStopId": 100319,
        "locationId": "16482757",
        "name": "Løkli",
        "longitude": 10.128738,
        "latitude": 62.909122
    },
    {
        "busStopId": 100320,
        "locationId": "16482756",
        "name": "Dybdalsbakk",
        "longitude": 10.956635,
        "latitude": 62.967621
    },
    {
        "busStopId": 100321,
        "locationId": "16482754",
        "name": "Almåsøy",
        "longitude": 10.886027,
        "latitude": 62.970046
    },
    {
        "busStopId": 100322,
        "locationId": "16482753",
        "name": "Almås",
        "longitude": 10.874304,
        "latitude": 62.966303
    },
    {
        "busStopId": 100323,
        "locationId": "16482752",
        "name": "Reistøa",
        "longitude": 10.867657,
        "latitude": 62.964139
    },
    {
        "busStopId": 100324,
        "locationId": "16482750",
        "name": "Hindbjørgen",
        "longitude": 10.793761,
        "latitude": 62.957286
    },
    {
        "busStopId": 100325,
        "locationId": "16482749",
        "name": "Stornes",
        "longitude": 10.771231,
        "latitude": 62.95017
    },
    {
        "busStopId": 100326,
        "locationId": "16482748",
        "name": "Singsåsmoen",
        "longitude": 10.753175,
        "latitude": 62.950297
    },
    {
        "busStopId": 100327,
        "locationId": "16335243",
        "name": "Engan",
        "longitude": 10.61762,
        "latitude": 64.262853
    },
    {
        "busStopId": 100328,
        "locationId": "16335242",
        "name": "Storvollen",
        "longitude": 10.60843,
        "latitude": 64.271949
    },
    {
        "busStopId": 100329,
        "locationId": "16335235",
        "name": "Vingsand",
        "longitude": 10.463657,
        "latitude": 64.347804
    },
    {
        "busStopId": 100330,
        "locationId": "16335234",
        "name": "Sandviksberget",
        "longitude": 10.446212,
        "latitude": 64.327073
    },
    {
        "busStopId": 100331,
        "locationId": "16335233",
        "name": "Osen",
        "longitude": 10.511412,
        "latitude": 64.298741
    },
    {
        "busStopId": 100332,
        "locationId": "16335231",
        "name": "Brattgjerd",
        "longitude": 10.430285,
        "latitude": 64.288419
    },
    {
        "busStopId": 100333,
        "locationId": "16335198",
        "name": "Myrbakkan",
        "longitude": 10.543787,
        "latitude": 64.291502
    },
    {
        "busStopId": 100334,
        "locationId": "16332299",
        "name": "Fylkesgrense",
        "longitude": 10.91383,
        "latitude": 64.236764
    },
    {
        "busStopId": 100335,
        "locationId": "16332296",
        "name": "Rundfurubakken",
        "longitude": 10.799295,
        "latitude": 64.226415
    },
    {
        "busStopId": 100336,
        "locationId": "16332290",
        "name": "Strand",
        "longitude": 10.456165,
        "latitude": 64.321974
    },
    {
        "busStopId": 100337,
        "locationId": "16332275",
        "name": "Høvik",
        "longitude": 10.48024,
        "latitude": 64.3307
    },
    {
        "busStopId": 100338,
        "locationId": "16332244",
        "name": "Åsegg (nedre)",
        "longitude": 10.697183,
        "latitude": 64.24205
    },
    {
        "busStopId": 100339,
        "locationId": "16332243",
        "name": "Engan",
        "longitude": 10.61762,
        "latitude": 64.262853
    },
    {
        "busStopId": 100340,
        "locationId": "16332242",
        "name": "Storvollen",
        "longitude": 10.60843,
        "latitude": 64.271949
    },
    {
        "busStopId": 100341,
        "locationId": "16332235",
        "name": "Vingsand",
        "longitude": 10.463657,
        "latitude": 64.347804
    },
    {
        "busStopId": 100342,
        "locationId": "16332234",
        "name": "Sandviksberget",
        "longitude": 10.446212,
        "latitude": 64.327073
    },
    {
        "busStopId": 100343,
        "locationId": "16224604",
        "name": "Tangvik",
        "longitude": 9.888915,
        "latitude": 63.472335
    },
    {
        "busStopId": 100344,
        "locationId": "16224603",
        "name": "Ingdal",
        "longitude": 9.906468,
        "latitude": 63.460665
    },
    {
        "busStopId": 100345,
        "locationId": "16224601",
        "name": "Solberg",
        "longitude": 9.918164,
        "latitude": 63.445774
    },
    {
        "busStopId": 100346,
        "locationId": "16215332",
        "name": "Døsvik",
        "longitude": 9.678305,
        "latitude": 63.739972
    },
    {
        "busStopId": 100347,
        "locationId": "16215331",
        "name": "Grøtan vegkryss",
        "longitude": 9.675125,
        "latitude": 63.732495
    },
    {
        "busStopId": 100348,
        "locationId": "16215315",
        "name": "Brekstad",
        "longitude": 9.666124,
        "latitude": 63.68644
    },
    {
        "busStopId": 100349,
        "locationId": "16215314",
        "name": "Skiftkroken",
        "longitude": 9.673158,
        "latitude": 63.708547
    },
    {
        "busStopId": 100350,
        "locationId": "16215313",
        "name": "Opphaug",
        "longitude": 9.687621,
        "latitude": 63.72739
    },
    {
        "busStopId": 100351,
        "locationId": "16212332",
        "name": "Døsvik",
        "longitude": 9.678305,
        "latitude": 63.739972
    },
    {
        "busStopId": 100352,
        "locationId": "16212331",
        "name": "Grøtan vegkryss",
        "longitude": 9.674927,
        "latitude": 63.732495
    },
    {
        "busStopId": 100353,
        "locationId": "16212314",
        "name": "Skiftkroken",
        "longitude": 9.672915,
        "latitude": 63.708488
    },
    {
        "busStopId": 100354,
        "locationId": "16212313",
        "name": "Opphaug",
        "longitude": 9.687558,
        "latitude": 63.727382
    },
    {
        "busStopId": 100355,
        "locationId": "16209892",
        "name": "Sistranda skole",
        "longitude": 8.829613,
        "latitude": 63.73057
    },
    {
        "busStopId": 100356,
        "locationId": "16209869",
        "name": "Rabben",
        "longitude": 8.836557,
        "latitude": 63.723667
    },
    {
        "busStopId": 100357,
        "locationId": "16209867",
        "name": "Hamarvika",
        "longitude": 8.818581,
        "latitude": 63.703625
    },
    {
        "busStopId": 100358,
        "locationId": "16209835",
        "name": "Strømøybotn",
        "longitude": 8.79156,
        "latitude": 63.776863
    },
    {
        "busStopId": 100359,
        "locationId": "16010089",
        "name": "Havstad",
        "longitude": 10.355294,
        "latitude": 63.406162
    },
    {
        "busStopId": 100360,
        "locationId": "16010023",
        "name": "Strindheim",
        "longitude": 10.45789,
        "latitude": 63.435636
    },
    {
        "busStopId": 100361,
        "locationId": "16010000",
        "name": "Breidablikk",
        "longitude": 10.376772,
        "latitude": 63.41223
    },
    {
        "busStopId": 100362,
        "locationId": "16364204",
        "name": "Bjørnliveien",
        "longitude": 9.707527,
        "latitude": 63.134988
    },
    {
        "busStopId": 100363,
        "locationId": "16364203",
        "name": "Jordhus",
        "longitude": 9.706818,
        "latitude": 63.139445
    },
    {
        "busStopId": 100364,
        "locationId": "16364202",
        "name": "Skjøtskift",
        "longitude": 9.713564,
        "latitude": 63.14737
    },
    {
        "busStopId": 100365,
        "locationId": "16364201",
        "name": "Skjøtskift bru",
        "longitude": 9.71846,
        "latitude": 63.152048
    },
    {
        "busStopId": 100366,
        "locationId": "16354348",
        "name": "Skamfersætra (avkjøring)",
        "longitude": 10.027687,
        "latitude": 62.800724
    },
    {
        "busStopId": 100367,
        "locationId": "16354323",
        "name": "Erveien",
        "longitude": 9.981136,
        "latitude": 62.832812
    },
    {
        "busStopId": 100368,
        "locationId": "16354321",
        "name": "Flå",
        "longitude": 9.936472,
        "latitude": 62.835208
    },
    {
        "busStopId": 100369,
        "locationId": "16354320",
        "name": "Gunnesveien",
        "longitude": 9.916143,
        "latitude": 62.838636
    },
    {
        "busStopId": 100370,
        "locationId": "16354319",
        "name": "Holsmoen",
        "longitude": 9.902911,
        "latitude": 62.843954
    },
    {
        "busStopId": 100371,
        "locationId": "16354318",
        "name": "Skjervan",
        "longitude": 9.89029,
        "latitude": 62.846611
    },
    {
        "busStopId": 100372,
        "locationId": "16354317",
        "name": "Refshus",
        "longitude": 9.876752,
        "latitude": 62.847656
    },
    {
        "busStopId": 100373,
        "locationId": "16354316",
        "name": "Stamnan",
        "longitude": 9.858426,
        "latitude": 62.849038
    },
    {
        "busStopId": 100374,
        "locationId": "16354315",
        "name": "Sandbrekka",
        "longitude": 9.843065,
        "latitude": 62.847722
    },
    {
        "busStopId": 100375,
        "locationId": "16354314",
        "name": "Bergtun",
        "longitude": 9.843712,
        "latitude": 62.853785
    },
    {
        "busStopId": 100376,
        "locationId": "16354313",
        "name": "Hovengen",
        "longitude": 9.843874,
        "latitude": 62.862804
    },
    {
        "busStopId": 100377,
        "locationId": "16354312",
        "name": "Voll",
        "longitude": 9.840631,
        "latitude": 62.876564
    },
    {
        "busStopId": 100378,
        "locationId": "16574026",
        "name": "Storsand",
        "longitude": 9.936885,
        "latitude": 63.336778
    },
    {
        "busStopId": 100379,
        "locationId": "16574025",
        "name": "Rian",
        "longitude": 9.953675,
        "latitude": 63.342485
    },
    {
        "busStopId": 100380,
        "locationId": "16574024",
        "name": "Tråssåvika",
        "longitude": 9.965523,
        "latitude": 63.347406
    },
    {
        "busStopId": 100381,
        "locationId": "16574023",
        "name": "Sildværet",
        "longitude": 9.976204,
        "latitude": 63.347845
    },
    {
        "busStopId": 100382,
        "locationId": "16574022",
        "name": "Viggja",
        "longitude": 9.993075,
        "latitude": 63.345447
    },
    {
        "busStopId": 100383,
        "locationId": "16574021",
        "name": "Nygård",
        "longitude": 10.002714,
        "latitude": 63.345129
    },
    {
        "busStopId": 100384,
        "locationId": "16574020",
        "name": "Stykkan",
        "longitude": 10.013889,
        "latitude": 63.346019
    },
    {
        "busStopId": 100385,
        "locationId": "16574019",
        "name": "Lund Hagebruk",
        "longitude": 10.038727,
        "latitude": 63.346467
    },
    {
        "busStopId": 100386,
        "locationId": "16574018",
        "name": "Haukvik",
        "longitude": 10.0539,
        "latitude": 63.342892
    },
    {
        "busStopId": 100387,
        "locationId": "16574017",
        "name": "Fredlyveien",
        "longitude": 10.0599,
        "latitude": 63.33766
    },
    {
        "busStopId": 100388,
        "locationId": "16574016",
        "name": "Elistranda",
        "longitude": 10.065506,
        "latitude": 63.334774
    },
    {
        "busStopId": 100389,
        "locationId": "16574015",
        "name": "Børsa",
        "longitude": 10.069764,
        "latitude": 63.326214
    },
    {
        "busStopId": 100390,
        "locationId": "16574014",
        "name": "Børskrysset E39",
        "longitude": 10.063512,
        "latitude": 63.322294
    },
    {
        "busStopId": 100391,
        "locationId": "16574013",
        "name": "Buvikkrysset E39",
        "longitude": 10.174651,
        "latitude": 63.307501
    },
    {
        "busStopId": 100392,
        "locationId": "16574012",
        "name": "Mæla",
        "longitude": 10.077148,
        "latitude": 63.323988
    },
    {
        "busStopId": 100393,
        "locationId": "16574011",
        "name": "Svalnestangen",
        "longitude": 10.097181,
        "latitude": 63.327315
    },
    {
        "busStopId": 100394,
        "locationId": "16011759",
        "name": "Johan Tillers vei",
        "longitude": 10.359516,
        "latitude": 63.347801
    },
    {
        "busStopId": 100395,
        "locationId": "16011758",
        "name": "Knausen",
        "longitude": 10.167815,
        "latitude": 63.348127
    },
    {
        "busStopId": 100396,
        "locationId": "16011757",
        "name": "Larsstu",
        "longitude": 10.173304,
        "latitude": 63.347966
    },
    {
        "busStopId": 100397,
        "locationId": "16011756",
        "name": "Leinum",
        "longitude": 10.261743,
        "latitude": 63.343376
    },
    {
        "busStopId": 100398,
        "locationId": "16011755",
        "name": "Nypantunet",
        "longitude": 10.297783,
        "latitude": 63.332129
    },
    {
        "busStopId": 100399,
        "locationId": "16011754",
        "name": "Nypan",
        "longitude": 10.308761,
        "latitude": 63.330198
    },
    {
        "busStopId": 100400,
        "locationId": "16011753",
        "name": "Klett",
        "longitude": 10.306605,
        "latitude": 63.325774
    },
    {
        "busStopId": 100401,
        "locationId": "16011752",
        "name": "Leinstrand Samfunnshus",
        "longitude": 10.312408,
        "latitude": 63.324798
    },
    {
        "busStopId": 100402,
        "locationId": "16011751",
        "name": "Klett Møbel",
        "longitude": 10.319819,
        "latitude": 63.325823
    },
    {
        "busStopId": 100403,
        "locationId": "16011750",
        "name": "Esp meieri",
        "longitude": 10.323673,
        "latitude": 63.327968
    },
    {
        "busStopId": 100404,
        "locationId": "16011749",
        "name": "Lersbakken",
        "longitude": 10.330518,
        "latitude": 63.331714
    },
    {
        "busStopId": 100405,
        "locationId": "16011748",
        "name": "Esplykkja",
        "longitude": 10.333177,
        "latitude": 63.334847
    },
    {
        "busStopId": 100406,
        "locationId": "16011747",
        "name": "Heggstaddalen",
        "longitude": 10.336025,
        "latitude": 63.337201
    },
    {
        "busStopId": 100407,
        "locationId": "16011746",
        "name": "Heggstad",
        "longitude": 10.339627,
        "latitude": 63.341131
    },
    {
        "busStopId": 100408,
        "locationId": "16011745",
        "name": "Heimdalsv. 73",
        "longitude": 10.346436,
        "latitude": 63.344013
    },
    {
        "busStopId": 100409,
        "locationId": "16011744",
        "name": "Østingen",
        "longitude": 10.183464,
        "latitude": 63.368078
    },
    {
        "busStopId": 100410,
        "locationId": "16011357",
        "name": "Osveien",
        "longitude": 10.548359,
        "latitude": 63.421428
    },
    {
        "busStopId": 100411,
        "locationId": "16011355",
        "name": "Opland",
        "longitude": 10.34004,
        "latitude": 63.417887
    },
    {
        "busStopId": 100412,
        "locationId": "16011354",
        "name": "Ole Ross' veg",
        "longitude": 10.37573,
        "latitude": 63.351209
    },
    {
        "busStopId": 100413,
        "locationId": "16011353",
        "name": "Olav Engelbrektssons alle",
        "longitude": 10.457486,
        "latitude": 63.446915
    },
    {
        "busStopId": 100414,
        "locationId": "16011352",
        "name": "Ola Setroms veg",
        "longitude": 10.331668,
        "latitude": 63.39204
    },
    {
        "busStopId": 100415,
        "locationId": "16011350",
        "name": "City Lade",
        "longitude": 10.444272,
        "latitude": 63.443754
    },
    {
        "busStopId": 100416,
        "locationId": "16011349",
        "name": "Olderdalen",
        "longitude": 10.525273,
        "latitude": 63.422493
    },
    {
        "busStopId": 100417,
        "locationId": "16011348",
        "name": "Olav Nygårds veg",
        "longitude": 10.348017,
        "latitude": 63.391573
    },
    {
        "busStopId": 100418,
        "locationId": "16011347",
        "name": "Olav Tryggvasons gate",
        "longitude": 10.401251,
        "latitude": 63.433367
    },
    {
        "busStopId": 100419,
        "locationId": "16011346",
        "name": "Okstad Østre",
        "longitude": 10.389753,
        "latitude": 63.379629
    },
    {
        "busStopId": 100420,
        "locationId": "16011342",
        "name": "Nidarvoll",
        "longitude": 10.404261,
        "latitude": 63.396876
    },
    {
        "busStopId": 100421,
        "locationId": "16011341",
        "name": "Nardosenteret",
        "longitude": 10.427078,
        "latitude": 63.403343
    },
    {
        "busStopId": 100422,
        "locationId": "16011340",
        "name": "Marienborg st.",
        "longitude": 10.382629,
        "latitude": 63.417846
    },
    {
        "busStopId": 100423,
        "locationId": "16011338",
        "name": "Nyveibakken",
        "longitude": 10.370736,
        "latitude": 63.424615
    },
    {
        "busStopId": 100424,
        "locationId": "16010767",
        "name": "Digre",
        "longitude": 10.519488,
        "latitude": 63.3439
    },
    {
        "busStopId": 100425,
        "locationId": "16010766",
        "name": "Nygård",
        "longitude": 10.513684,
        "latitude": 63.346475
    },
    {
        "busStopId": 100426,
        "locationId": "16010765",
        "name": "Bratsberg",
        "longitude": 10.509498,
        "latitude": 63.34741
    },
    {
        "busStopId": 100427,
        "locationId": "16010764",
        "name": "Røstad",
        "longitude": 10.48687,
        "latitude": 63.349251
    },
    {
        "busStopId": 100428,
        "locationId": "16010763",
        "name": "Bratsberg kirke",
        "longitude": 10.478444,
        "latitude": 63.346519
    },
    {
        "busStopId": 100429,
        "locationId": "16010762",
        "name": "Sætran",
        "longitude": 10.467772,
        "latitude": 63.344637
    },
    {
        "busStopId": 100430,
        "locationId": "16010761",
        "name": "Sæterbakken",
        "longitude": 10.461447,
        "latitude": 63.343976
    },
    {
        "busStopId": 100431,
        "locationId": "16010760",
        "name": "Bruråk",
        "longitude": 10.496985,
        "latitude": 63.349279
    },
    {
        "busStopId": 100432,
        "locationId": "16010759",
        "name": "Johan Tillers vei",
        "longitude": 10.359417,
        "latitude": 63.347784
    },
    {
        "busStopId": 100433,
        "locationId": "16010758",
        "name": "Knausen",
        "longitude": 10.16795,
        "latitude": 63.348151
    },
    {
        "busStopId": 100434,
        "locationId": "16010757",
        "name": "Larsstu",
        "longitude": 10.173223,
        "latitude": 63.348018
    },
    {
        "busStopId": 100435,
        "locationId": "16010756",
        "name": "Leinum",
        "longitude": 10.261752,
        "latitude": 63.343477
    },
    {
        "busStopId": 100436,
        "locationId": "16010755",
        "name": "Nypantunet",
        "longitude": 10.296993,
        "latitude": 63.332343
    },
    {
        "busStopId": 100437,
        "locationId": "16010754",
        "name": "Nypan",
        "longitude": 10.308042,
        "latitude": 63.33071
    },
    {
        "busStopId": 100438,
        "locationId": "16010753",
        "name": "Klett",
        "longitude": 10.306704,
        "latitude": 63.325738
    },
    {
        "busStopId": 100439,
        "locationId": "16010752",
        "name": "Leinstrand Samfunnshus",
        "longitude": 10.31151,
        "latitude": 63.324875
    },
    {
        "busStopId": 100440,
        "locationId": "16010354",
        "name": "Ole Ross' veg",
        "longitude": 10.375308,
        "latitude": 63.352047
    },
    {
        "busStopId": 100441,
        "locationId": "16010353",
        "name": "Olav Engelbrektssons alle",
        "longitude": 10.45745,
        "latitude": 63.447075
    },
    {
        "busStopId": 100442,
        "locationId": "16010352",
        "name": "Ola Setroms veg",
        "longitude": 10.330689,
        "latitude": 63.391493
    },
    {
        "busStopId": 100443,
        "locationId": "16010351",
        "name": "Odenseveien",
        "longitude": 10.353156,
        "latitude": 63.41646
    },
    {
        "busStopId": 100444,
        "locationId": "16010350",
        "name": "City Lade",
        "longitude": 10.444945,
        "latitude": 63.443943
    },
    {
        "busStopId": 100445,
        "locationId": "16010349",
        "name": "Olderdalen",
        "longitude": 10.524985,
        "latitude": 63.422433
    },
    {
        "busStopId": 100446,
        "locationId": "16010348",
        "name": "Olav Nygards veg",
        "longitude": 10.34852,
        "latitude": 63.392454
    },
    {
        "busStopId": 100447,
        "locationId": "16010347",
        "name": "Olav Tryggvasons gate",
        "longitude": 10.398134,
        "latitude": 63.433395
    },
    {
        "busStopId": 100448,
        "locationId": "16010346",
        "name": "Okstad Østre",
        "longitude": 10.388684,
        "latitude": 63.379862
    },
    {
        "busStopId": 100449,
        "locationId": "16010342",
        "name": "Nidarvoll",
        "longitude": 10.403632,
        "latitude": 63.395962
    },
    {
        "busStopId": 100450,
        "locationId": "16010341",
        "name": "Nardosenteret",
        "longitude": 10.426988,
        "latitude": 63.403561
    },
    {
        "busStopId": 100451,
        "locationId": "16010340",
        "name": "Marienborg st.",
        "longitude": 10.382656,
        "latitude": 63.418465
    },
    {
        "busStopId": 100452,
        "locationId": "16010338",
        "name": "Nyveibakken",
        "longitude": 10.371185,
        "latitude": 63.424032
    },
    {
        "busStopId": 100453,
        "locationId": "16010336",
        "name": "Nygård",
        "longitude": 10.407791,
        "latitude": 63.39832
    },
    {
        "busStopId": 100454,
        "locationId": "16010335",
        "name": "Nydalen",
        "longitude": 10.387705,
        "latitude": 63.403456
    },
    {
        "busStopId": 100455,
        "locationId": "16010334",
        "name": "Nyborg",
        "longitude": 10.351763,
        "latitude": 63.413215
    },
    {
        "busStopId": 100456,
        "locationId": "16489730",
        "name": "Aune",
        "longitude": 10.439663,
        "latitude": 63.01425
    },
    {
        "busStopId": 100457,
        "locationId": "16489729",
        "name": "Aunøien",
        "longitude": 10.42176,
        "latitude": 63.017776
    },
    {
        "busStopId": 100458,
        "locationId": "16489728",
        "name": "Plassbekken",
        "longitude": 10.389959,
        "latitude": 63.015078
    },
    {
        "busStopId": 100459,
        "locationId": "16489727",
        "name": "Rogstad",
        "longitude": 10.367277,
        "latitude": 63.013288
    },
    {
        "busStopId": 100460,
        "locationId": "16489726",
        "name": "Rogstadøyen",
        "longitude": 10.335028,
        "latitude": 63.017715
    },
    {
        "busStopId": 100461,
        "locationId": "16489724",
        "name": "Nesset",
        "longitude": 10.296741,
        "latitude": 63.031268
    },
    {
        "busStopId": 100462,
        "locationId": "16489722",
        "name": "Garli",
        "longitude": 10.101735,
        "latitude": 62.890887
    },
    {
        "busStopId": 100463,
        "locationId": "16489721",
        "name": "Løkli",
        "longitude": 10.1274,
        "latitude": 62.908672
    },
    {
        "busStopId": 100464,
        "locationId": "16489719",
        "name": "Bjørset",
        "longitude": 10.15037,
        "latitude": 62.924242
    },
    {
        "busStopId": 100465,
        "locationId": "16489717",
        "name": "Soknedal",
        "longitude": 10.189438,
        "latitude": 62.948532
    },
    {
        "busStopId": 100466,
        "locationId": "16489716",
        "name": "Nybrua",
        "longitude": 10.192312,
        "latitude": 62.966364
    },
    {
        "busStopId": 100467,
        "locationId": "16489714",
        "name": "Snøan",
        "longitude": 10.244127,
        "latitude": 62.986759
    },
    {
        "busStopId": 100468,
        "locationId": "16489713",
        "name": "Haukdalsbru",
        "longitude": 10.245825,
        "latitude": 62.993262
    },
    {
        "busStopId": 100469,
        "locationId": "16489711",
        "name": "Øverøyen",
        "longitude": 10.237848,
        "latitude": 63.000681
    },
    {
        "busStopId": 100470,
        "locationId": "16489710",
        "name": "Nerøyen",
        "longitude": 10.246139,
        "latitude": 63.014927
    },
    {
        "busStopId": 100471,
        "locationId": "16489709",
        "name": "Storlykkja",
        "longitude": 10.254215,
        "latitude": 63.025967
    },
    {
        "busStopId": 100472,
        "locationId": "16346409",
        "name": "Rønningsvegen",
        "longitude": 9.756683,
        "latitude": 62.616816
    },
    {
        "busStopId": 100473,
        "locationId": "16346407",
        "name": "Myrplassen",
        "longitude": 9.786031,
        "latitude": 62.630782
    },
    {
        "busStopId": 100474,
        "locationId": "16346405",
        "name": "Fagerhaug",
        "longitude": 9.879222,
        "latitude": 62.656198
    },
    {
        "busStopId": 100475,
        "locationId": "16346404",
        "name": "Asphaugen",
        "longitude": 9.89011,
        "latitude": 62.660708
    },
    {
        "busStopId": 100476,
        "locationId": "16346402",
        "name": "Snorroegga",
        "longitude": 9.924704,
        "latitude": 62.680286
    },
    {
        "busStopId": 100477,
        "locationId": "16343502",
        "name": "Løkkjbekken",
        "longitude": 9.867167,
        "latitude": 62.653033
    },
    {
        "busStopId": 100478,
        "locationId": "16343500",
        "name": "Strand",
        "longitude": 9.932942,
        "latitude": 62.689672
    },
    {
        "busStopId": 100479,
        "locationId": "16343426",
        "name": "Tågvollan",
        "longitude": 9.73171,
        "latitude": 62.605208
    },
    {
        "busStopId": 100480,
        "locationId": "16343409",
        "name": "Rønningsvegen",
        "longitude": 9.7545,
        "latitude": 62.615383
    },
    {
        "busStopId": 100481,
        "locationId": "16343407",
        "name": "Myrplassen",
        "longitude": 9.784279,
        "latitude": 62.630109
    },
    {
        "busStopId": 100482,
        "locationId": "16343406",
        "name": "Medskogkrokan",
        "longitude": 9.790056,
        "latitude": 62.63269
    },
    {
        "busStopId": 100483,
        "locationId": "16335299",
        "name": "Fylkesgrense",
        "longitude": 10.91383,
        "latitude": 64.236764
    },
    {
        "busStopId": 100484,
        "locationId": "16335296",
        "name": "Rundfurubakken",
        "longitude": 10.799295,
        "latitude": 64.226415
    },
    {
        "busStopId": 100485,
        "locationId": "16335290",
        "name": "Strand",
        "longitude": 10.456075,
        "latitude": 64.322173
    },
    {
        "busStopId": 100486,
        "locationId": "16335275",
        "name": "Høvik",
        "longitude": 10.48024,
        "latitude": 64.3307
    },
    {
        "busStopId": 100487,
        "locationId": "16335244",
        "name": "Åsegg (nedre)",
        "longitude": 10.697183,
        "latitude": 64.24205
    },
    {
        "busStopId": 100488,
        "locationId": "16224627",
        "name": "Raustein",
        "longitude": 9.603583,
        "latitude": 63.618651
    },
    {
        "busStopId": 100489,
        "locationId": "16224626",
        "name": "Hegg",
        "longitude": 9.606673,
        "latitude": 63.619897
    },
    {
        "busStopId": 100490,
        "locationId": "16224624",
        "name": "Kallklova",
        "longitude": 9.66422,
        "latitude": 63.622224
    },
    {
        "busStopId": 100491,
        "locationId": "16224623",
        "name": "Mølnbukt",
        "longitude": 9.649379,
        "latitude": 63.616344
    },
    {
        "busStopId": 100492,
        "locationId": "16224622",
        "name": "Fremstad bru",
        "longitude": 9.654967,
        "latitude": 63.609621
    },
    {
        "busStopId": 100493,
        "locationId": "16224621",
        "name": "Lysheim skole",
        "longitude": 9.668972,
        "latitude": 63.610843
    },
    {
        "busStopId": 100494,
        "locationId": "16224617",
        "name": "Valset ferjeleie",
        "longitude": 9.687468,
        "latitude": 63.638443
    },
    {
        "busStopId": 100495,
        "locationId": "16224616",
        "name": "Breivika",
        "longitude": 9.727596,
        "latitude": 63.623365
    },
    {
        "busStopId": 100496,
        "locationId": "16224615",
        "name": "Selva",
        "longitude": 9.714579,
        "latitude": 63.615226
    },
    {
        "busStopId": 100497,
        "locationId": "16224614",
        "name": "Grønningen",
        "longitude": 9.755057,
        "latitude": 63.582656
    },
    {
        "busStopId": 100498,
        "locationId": "16224613",
        "name": "Åremmen",
        "longitude": 9.786813,
        "latitude": 63.571751
    },
    {
        "busStopId": 100499,
        "locationId": "16224612",
        "name": "Størdal",
        "longitude": 9.788214,
        "latitude": 63.561998
    },
    {
        "busStopId": 100500,
        "locationId": "16224611",
        "name": "Selnes",
        "longitude": 9.817814,
        "latitude": 63.551797
    },
    {
        "busStopId": 100501,
        "locationId": "16224609",
        "name": "Bonvik",
        "longitude": 9.809792,
        "latitude": 63.520869
    },
    {
        "busStopId": 100502,
        "locationId": "16224607",
        "name": "Lensvik",
        "longitude": 9.826581,
        "latitude": 63.504214
    },
    {
        "busStopId": 100503,
        "locationId": "16224606",
        "name": "Industrivegen",
        "longitude": 9.838879,
        "latitude": 63.496763
    },
    {
        "busStopId": 100504,
        "locationId": "16010709",
        "name": "Nordre Hoem",
        "longitude": 10.381003,
        "latitude": 63.405378
    },
    {
        "busStopId": 100505,
        "locationId": "16010708",
        "name": "Søndre Hoem",
        "longitude": 10.381605,
        "latitude": 63.403182
    },
    {
        "busStopId": 100506,
        "locationId": "16010707",
        "name": "Rognheim",
        "longitude": 10.372811,
        "latitude": 63.399398
    },
    {
        "busStopId": 100507,
        "locationId": "16010706",
        "name": "Munkvoll",
        "longitude": 10.359866,
        "latitude": 63.397797
    },
    {
        "busStopId": 100508,
        "locationId": "16010705",
        "name": "Ferstad",
        "longitude": 10.348898,
        "latitude": 63.399615
    },
    {
        "busStopId": 100509,
        "locationId": "16010704",
        "name": "Ugla Trikk",
        "longitude": 10.343939,
        "latitude": 63.400596
    },
    {
        "busStopId": 100510,
        "locationId": "16010703",
        "name": "Kyvannet",
        "longitude": 10.338046,
        "latitude": 63.403926
    },
    {
        "busStopId": 100511,
        "locationId": "16010702",
        "name": "Vestmarka",
        "longitude": 10.324912,
        "latitude": 63.406464
    },
    {
        "busStopId": 100512,
        "locationId": "16010701",
        "name": "Herlofsenløypa",
        "longitude": 10.319568,
        "latitude": 63.405165
    },
    {
        "busStopId": 100513,
        "locationId": "16010700",
        "name": "Lian",
        "longitude": 10.314258,
        "latitude": 63.402893
    },
    {
        "busStopId": 100514,
        "locationId": "16010615",
        "name": "Berge",
        "longitude": 10.533879,
        "latitude": 63.397193
    },
    {
        "busStopId": 100515,
        "locationId": "16010614",
        "name": "Rota",
        "longitude": 10.529207,
        "latitude": 63.396023
    },
    {
        "busStopId": 100516,
        "locationId": "16010612",
        "name": "Osbrua",
        "longitude": 10.524078,
        "latitude": 63.399667
    },
    {
        "busStopId": 100517,
        "locationId": "16010122",
        "name": "Vestre Ranheim",
        "longitude": 10.534112,
        "latitude": 63.423357
    },
    {
        "busStopId": 100518,
        "locationId": "16010121",
        "name": "Peder Myhres vei",
        "longitude": 10.533941,
        "latitude": 63.424965
    },
    {
        "busStopId": 100519,
        "locationId": "16010111",
        "name": "Grilstadveien",
        "longitude": 10.495395,
        "latitude": 63.429421
    },
    {
        "busStopId": 100520,
        "locationId": "16364221",
        "name": "Sybrua",
        "longitude": 9.708093,
        "latitude": 63.0328
    },
    {
        "busStopId": 100521,
        "locationId": "16364220",
        "name": "Kølmoen",
        "longitude": 9.710752,
        "latitude": 63.039973
    },
    {
        "busStopId": 100522,
        "locationId": "16364219",
        "name": "Meldal rutebilstasjon",
        "longitude": 9.713474,
        "latitude": 63.044395
    },
    {
        "busStopId": 100523,
        "locationId": "16364218",
        "name": "Meldal sentrum",
        "longitude": 9.712854,
        "latitude": 63.046643
    },
    {
        "busStopId": 100524,
        "locationId": "16364217",
        "name": "Meldal Bygdemuseum",
        "longitude": 9.70883,
        "latitude": 63.051219
    },
    {
        "busStopId": 100525,
        "locationId": "16364216",
        "name": "Bergslia",
        "longitude": 9.702793,
        "latitude": 63.053324
    },
    {
        "busStopId": 100526,
        "locationId": "16364215",
        "name": "Kråkhaugen",
        "longitude": 9.697583,
        "latitude": 63.078475
    },
    {
        "busStopId": 100527,
        "locationId": "16364214",
        "name": "Midtskogen",
        "longitude": 9.699577,
        "latitude": 63.086551
    },
    {
        "busStopId": 100528,
        "locationId": "16364213",
        "name": "Varsmoen",
        "longitude": 9.696891,
        "latitude": 63.092101
    },
    {
        "busStopId": 100529,
        "locationId": "16364212",
        "name": "Autosletta",
        "longitude": 9.694933,
        "latitude": 63.094487
    },
    {
        "busStopId": 100530,
        "locationId": "16364211",
        "name": "Trongbakken",
        "longitude": 9.692957,
        "latitude": 63.098133
    },
    {
        "busStopId": 100531,
        "locationId": "16364210",
        "name": "Myråsveien",
        "longitude": 9.696963,
        "latitude": 63.103275
    },
    {
        "busStopId": 100532,
        "locationId": "16364208",
        "name": "Løvby",
        "longitude": 9.699739,
        "latitude": 63.112307
    },
    {
        "busStopId": 100533,
        "locationId": "16364207",
        "name": "Skåveien",
        "longitude": 9.699739,
        "latitude": 63.11572
    },
    {
        "busStopId": 100534,
        "locationId": "16364206",
        "name": "Grefstad Bil",
        "longitude": 9.703701,
        "latitude": 63.119542
    },
    {
        "busStopId": 100535,
        "locationId": "16364205",
        "name": "Løkken stasjon",
        "longitude": 9.704778,
        "latitude": 63.125532
    },
    {
        "busStopId": 100536,
        "locationId": "16578717",
        "name": "Fredlyveien",
        "longitude": 10.06026,
        "latitude": 63.337136
    },
    {
        "busStopId": 100537,
        "locationId": "16578716",
        "name": "Elistranda",
        "longitude": 10.066108,
        "latitude": 63.33429
    },
    {
        "busStopId": 100538,
        "locationId": "16578715",
        "name": "Børsa",
        "longitude": 10.069638,
        "latitude": 63.326
    },
    {
        "busStopId": 100539,
        "locationId": "16578712",
        "name": "Mæla",
        "longitude": 10.076421,
        "latitude": 63.323911
    },
    {
        "busStopId": 100540,
        "locationId": "16578711",
        "name": "Svalnestangen",
        "longitude": 10.098169,
        "latitude": 63.327593
    },
    {
        "busStopId": 100541,
        "locationId": "16578709",
        "name": "Lykkjnesset",
        "longitude": 10.140542,
        "latitude": 63.320116
    },
    {
        "busStopId": 100542,
        "locationId": "16578708",
        "name": "Ølsholm",
        "longitude": 10.148205,
        "latitude": 63.318511
    },
    {
        "busStopId": 100543,
        "locationId": "16578707",
        "name": "Havenge",
        "longitude": 10.153505,
        "latitude": 63.314711
    },
    {
        "busStopId": 100544,
        "locationId": "16578706",
        "name": "Piine Mølle",
        "longitude": 10.160853,
        "latitude": 63.311786
    },
    {
        "busStopId": 100545,
        "locationId": "16578705",
        "name": "Buvika",
        "longitude": 10.173169,
        "latitude": 63.310858
    },
    {
        "busStopId": 100546,
        "locationId": "16578702",
        "name": "Tangen",
        "longitude": 10.183122,
        "latitude": 63.312193
    },
    {
        "busStopId": 100547,
        "locationId": "16578701",
        "name": "Brekka",
        "longitude": 10.192707,
        "latitude": 63.315723
    },
    {
        "busStopId": 100548,
        "locationId": "16578014",
        "name": "Børskrysset",
        "longitude": 10.062766,
        "latitude": 63.321653
    },
    {
        "busStopId": 100549,
        "locationId": "16578013",
        "name": "Buvikkrysset",
        "longitude": 10.174346,
        "latitude": 63.307024
    },
    {
        "busStopId": 100550,
        "locationId": "16574080",
        "name": "Vikan",
        "longitude": 10.045447,
        "latitude": 63.345629
    },
    {
        "busStopId": 100551,
        "locationId": "16574078",
        "name": "Lundan",
        "longitude": 10.023662,
        "latitude": 63.346588
    },
    {
        "busStopId": 100552,
        "locationId": "16011776",
        "name": "Fjellsæter",
        "longitude": 10.275038,
        "latitude": 63.414755
    },
    {
        "busStopId": 100553,
        "locationId": "16011775",
        "name": "Kobberdammen",
        "longitude": 10.288028,
        "latitude": 63.416721
    },
    {
        "busStopId": 100554,
        "locationId": "16011774",
        "name": "Grønlia",
        "longitude": 10.30232,
        "latitude": 63.41529
    },
    {
        "busStopId": 100555,
        "locationId": "16011773",
        "name": "Tungavegen",
        "longitude": 10.31389,
        "latitude": 63.416745
    },
    {
        "busStopId": 100556,
        "locationId": "16011771",
        "name": "Brandsegga",
        "longitude": 10.567853,
        "latitude": 63.340405
    },
    {
        "busStopId": 100557,
        "locationId": "16011770",
        "name": "Breivika",
        "longitude": 10.561942,
        "latitude": 63.339664
    },
    {
        "busStopId": 100558,
        "locationId": "16011769",
        "name": "Litjvika",
        "longitude": 10.554441,
        "latitude": 63.342465
    },
    {
        "busStopId": 100559,
        "locationId": "16011768",
        "name": "Espås",
        "longitude": 10.542772,
        "latitude": 63.345068
    },
    {
        "busStopId": 100560,
        "locationId": "16011767",
        "name": "Digre",
        "longitude": 10.519488,
        "latitude": 63.343944
    },
    {
        "busStopId": 100561,
        "locationId": "16011766",
        "name": "Nygård",
        "longitude": 10.513729,
        "latitude": 63.346547
    },
    {
        "busStopId": 100562,
        "locationId": "16011764",
        "name": "Røstad",
        "longitude": 10.485181,
        "latitude": 63.349376
    },
    {
        "busStopId": 100563,
        "locationId": "16011763",
        "name": "Bratsberg kirke",
        "longitude": 10.477743,
        "latitude": 63.346499
    },
    {
        "busStopId": 100564,
        "locationId": "16011762",
        "name": "Sætran",
        "longitude": 10.467349,
        "latitude": 63.344617
    },
    {
        "busStopId": 100565,
        "locationId": "16011761",
        "name": "Sæterbakken",
        "longitude": 10.461582,
        "latitude": 63.344021
    },
    {
        "busStopId": 100566,
        "locationId": "16011760",
        "name": "Bruråk",
        "longitude": 10.49703,
        "latitude": 63.349324
    },
    {
        "busStopId": 100567,
        "locationId": "16011381",
        "name": "Ramstad",
        "longitude": 10.476072,
        "latitude": 63.412234
    },
    {
        "busStopId": 100568,
        "locationId": "16011377",
        "name": "Pirbadet",
        "longitude": 10.402266,
        "latitude": 63.440931
    },
    {
        "busStopId": 100569,
        "locationId": "16011376",
        "name": "Professor Brochs gate",
        "longitude": 10.398125,
        "latitude": 63.415535
    },
    {
        "busStopId": 100570,
        "locationId": "16011374",
        "name": "Ranheim idret.pl",
        "longitude": 10.521221,
        "latitude": 63.428119
    },
    {
        "busStopId": 100571,
        "locationId": "16011373",
        "name": "Presthus",
        "longitude": 10.515688,
        "latitude": 63.424731
    },
    {
        "busStopId": 100572,
        "locationId": "16011372",
        "name": "Presthusaunet",
        "longitude": 10.494928,
        "latitude": 63.419695
    },
    {
        "busStopId": 100573,
        "locationId": "16011369",
        "name": "Persaunvegen",
        "longitude": 10.447164,
        "latitude": 63.432712
    },
    {
        "busStopId": 100574,
        "locationId": "16011368",
        "name": "Persaunet leir",
        "longitude": 10.442071,
        "latitude": 63.431567
    },
    {
        "busStopId": 100575,
        "locationId": "16011367",
        "name": "Peder Morsets veg",
        "longitude": 10.362085,
        "latitude": 63.356483
    },
    {
        "busStopId": 100576,
        "locationId": "16011366",
        "name": "Berg studentby",
        "longitude": 10.413953,
        "latitude": 63.413589
    },
    {
        "busStopId": 100577,
        "locationId": "16011363",
        "name": "Osbakken",
        "longitude": 10.51796,
        "latitude": 63.401284
    },
    {
        "busStopId": 100578,
        "locationId": "16011361",
        "name": "Omkj v. Moholt",
        "longitude": 10.445619,
        "latitude": 63.411559
    },
    {
        "busStopId": 100579,
        "locationId": "16011360",
        "name": "Okstad",
        "longitude": 10.379826,
        "latitude": 63.375728
    },
    {
        "busStopId": 100580,
        "locationId": "16011358",
        "name": "Othilienborg",
        "longitude": 10.442879,
        "latitude": 63.406955
    },
    {
        "busStopId": 100581,
        "locationId": "16010784",
        "name": "Værestrøa",
        "longitude": 10.58696,
        "latitude": 63.434009
    },
    {
        "busStopId": 100582,
        "locationId": "16010783",
        "name": "Være",
        "longitude": 10.564269,
        "latitude": 63.430293
    },
    {
        "busStopId": 100583,
        "locationId": "16010782",
        "name": "Væresbakken",
        "longitude": 10.583861,
        "latitude": 63.431197
    },
    {
        "busStopId": 100584,
        "locationId": "16010781",
        "name": "Være Østre",
        "longitude": 10.579279,
        "latitude": 63.431735
    },
    {
        "busStopId": 100585,
        "locationId": "16010780",
        "name": "Væresletta",
        "longitude": 10.57018,
        "latitude": 63.430731
    },
    {
        "busStopId": 100586,
        "locationId": "16010778",
        "name": "Steinan",
        "longitude": 10.44526,
        "latitude": 63.400882
    },
    {
        "busStopId": 100587,
        "locationId": "16010777",
        "name": "Skistua",
        "longitude": 10.26089,
        "latitude": 63.417879
    },
    {
        "busStopId": 100588,
        "locationId": "16010776",
        "name": "Fjellsæter",
        "longitude": 10.275065,
        "latitude": 63.414815
    },
    {
        "busStopId": 100589,
        "locationId": "16010775",
        "name": "Kobberdammen",
        "longitude": 10.288091,
        "latitude": 63.416773
    },
    {
        "busStopId": 100590,
        "locationId": "16010774",
        "name": "Grønlia",
        "longitude": 10.303577,
        "latitude": 63.415511
    },
    {
        "busStopId": 100591,
        "locationId": "16010773",
        "name": "Tungavegen",
        "longitude": 10.313845,
        "latitude": 63.416789
    },
    {
        "busStopId": 100592,
        "locationId": "16010772",
        "name": "Bratsberg",
        "longitude": 10.578767,
        "latitude": 63.339845
    },
    {
        "busStopId": 100593,
        "locationId": "16010771",
        "name": "Brandsegga",
        "longitude": 10.56779,
        "latitude": 63.340353
    },
    {
        "busStopId": 100594,
        "locationId": "16010770",
        "name": "Breivika",
        "longitude": 10.562059,
        "latitude": 63.339587
    },
    {
        "busStopId": 100595,
        "locationId": "16010769",
        "name": "Litjvika",
        "longitude": 10.554333,
        "latitude": 63.342449
    },
    {
        "busStopId": 100596,
        "locationId": "16010768",
        "name": "Espås",
        "longitude": 10.542808,
        "latitude": 63.345012
    },
    {
        "busStopId": 100597,
        "locationId": "16010371",
        "name": "Prestegårdsjordet",
        "longitude": 10.411654,
        "latitude": 63.414502
    },
    {
        "busStopId": 100598,
        "locationId": "16010369",
        "name": "Persaunvegen",
        "longitude": 10.446859,
        "latitude": 63.433017
    },
    {
        "busStopId": 100599,
        "locationId": "16010368",
        "name": "Persaunet leir",
        "longitude": 10.441487,
        "latitude": 63.431502
    },
    {
        "busStopId": 100600,
        "locationId": "16010367",
        "name": "Peder Morsets veg",
        "longitude": 10.361923,
        "latitude": 63.356443
    },
    {
        "busStopId": 100601,
        "locationId": "16010366",
        "name": "Berg studentby",
        "longitude": 10.416873,
        "latitude": 63.413489
    },
    {
        "busStopId": 100602,
        "locationId": "16010365",
        "name": "Paul Skolemesters veg",
        "longitude": 10.394712,
        "latitude": 63.369677
    },
    {
        "busStopId": 100603,
        "locationId": "16010363",
        "name": "Osbakken",
        "longitude": 10.518374,
        "latitude": 63.401256
    },
    {
        "busStopId": 100604,
        "locationId": "16010362",
        "name": "Olaf Bulls veg",
        "longitude": 10.34481,
        "latitude": 63.398308
    },
    {
        "busStopId": 100605,
        "locationId": "16010361",
        "name": "Omkj v. Moholt",
        "longitude": 10.444568,
        "latitude": 63.410682
    },
    {
        "busStopId": 100606,
        "locationId": "16010360",
        "name": "Okstad",
        "longitude": 10.379862,
        "latitude": 63.375362
    },
    {
        "busStopId": 100607,
        "locationId": "16010359",
        "name": "Otto Nielsens veg",
        "longitude": 10.428686,
        "latitude": 63.422216
    },
    {
        "busStopId": 100608,
        "locationId": "16010358",
        "name": "Othilienborg",
        "longitude": 10.442879,
        "latitude": 63.406955
    },
    {
        "busStopId": 100609,
        "locationId": "16010357",
        "name": "Osveien",
        "longitude": 10.548916,
        "latitude": 63.421086
    },
    {
        "busStopId": 100610,
        "locationId": "16010356",
        "name": "Oscar Wistings veg",
        "longitude": 10.36884,
        "latitude": 63.42185
    },
    {
        "busStopId": 100611,
        "locationId": "16010355",
        "name": "Opland",
        "longitude": 10.339923,
        "latitude": 63.417967
    },
    {
        "busStopId": 100612,
        "locationId": "16010009",
        "name": "Dronningens gate D4",
        "longitude": 10.393885,
        "latitude": 63.4319
    },
    {
        "busStopId": 100613,
        "locationId": "16010008",
        "name": "Dronningens gate D3",
        "longitude": 10.392511,
        "latitude": 63.431932
    },
    {
        "busStopId": 100614,
        "locationId": "16010007",
        "name": "Dronningens gate D2",
        "longitude": 10.393292,
        "latitude": 63.432009
    },
    {
        "busStopId": 100615,
        "locationId": "16010006",
        "name": "Dronningens gate D1",
        "longitude": 10.392313,
        "latitude": 63.432017
    },
    {
        "busStopId": 100616,
        "locationId": "16010005",
        "name": "Munkegata - M5",
        "longitude": 10.393912,
        "latitude": 63.432816
    },
    {
        "busStopId": 100617,
        "locationId": "16010004",
        "name": "Munkegata - M4",
        "longitude": 10.39411,
        "latitude": 63.43235
    },
    {
        "busStopId": 100618,
        "locationId": "16010003",
        "name": "Munkegata - M3",
        "longitude": 10.394352,
        "latitude": 63.431494
    },
    {
        "busStopId": 100619,
        "locationId": "16010002",
        "name": "Munkegata - M2",
        "longitude": 10.394038,
        "latitude": 63.432097
    },
    {
        "busStopId": 100620,
        "locationId": "16010001",
        "name": "Munkegata - M1",
        "longitude": 10.393741,
        "latitude": 63.432575
    },
    {
        "busStopId": 100621,
        "locationId": "16489750",
        "name": "Hindbjørgen",
        "longitude": 10.793779,
        "latitude": 62.95727
    },
    {
        "busStopId": 100622,
        "locationId": "16489749",
        "name": "Stornes",
        "longitude": 10.772076,
        "latitude": 62.950179
    },
    {
        "busStopId": 100623,
        "locationId": "16489748",
        "name": "Singsåsmoen",
        "longitude": 10.753059,
        "latitude": 62.950219
    },
    {
        "busStopId": 100624,
        "locationId": "16489747",
        "name": "Moabakken",
        "longitude": 10.741883,
        "latitude": 62.952989
    },
    {
        "busStopId": 100625,
        "locationId": "16489746",
        "name": "Singsås stasjon",
        "longitude": 10.729819,
        "latitude": 62.956367
    },
    {
        "busStopId": 100626,
        "locationId": "16489745",
        "name": "Singsåsbakken",
        "longitude": 10.714584,
        "latitude": 62.956743
    },
    {
        "busStopId": 100627,
        "locationId": "16489744",
        "name": "Klokkerhaugen",
        "longitude": 10.705277,
        "latitude": 62.956784
    },
    {
        "busStopId": 100628,
        "locationId": "16489743",
        "name": "Willmannsøyen",
        "longitude": 10.680996,
        "latitude": 62.947989
    },
    {
        "busStopId": 100629,
        "locationId": "16489741",
        "name": "Forsetmoen",
        "longitude": 10.651836,
        "latitude": 62.942722
    },
    {
        "busStopId": 100630,
        "locationId": "16489740",
        "name": "Hovstad",
        "longitude": 10.626845,
        "latitude": 62.94803
    },
    {
        "busStopId": 100631,
        "locationId": "16489738",
        "name": "Øyan",
        "longitude": 10.578615,
        "latitude": 62.966335
    },
    {
        "busStopId": 100632,
        "locationId": "16489737",
        "name": "Kotsøy",
        "longitude": 10.561071,
        "latitude": 62.972851
    },
    {
        "busStopId": 100633,
        "locationId": "16489736",
        "name": "Bogen",
        "longitude": 10.540787,
        "latitude": 62.988163
    },
    {
        "busStopId": 100634,
        "locationId": "16489734",
        "name": "Bones",
        "longitude": 10.47962,
        "latitude": 62.992553
    },
    {
        "busStopId": 100635,
        "locationId": "16489732",
        "name": "Rognes bru",
        "longitude": 10.455033,
        "latitude": 63.00394
    },
    {
        "busStopId": 100636,
        "locationId": "16489731",
        "name": "Rognes",
        "longitude": 10.450048,
        "latitude": 63.00889
    },
    {
        "busStopId": 100637,
        "locationId": "16356312",
        "name": "Buan",
        "longitude": 10.044557,
        "latitude": 62.870146
    },
    {
        "busStopId": 100638,
        "locationId": "16356309",
        "name": "Åshuset",
        "longitude": 9.952192,
        "latitude": 62.704419
    },
    {
        "busStopId": 100639,
        "locationId": "16356308",
        "name": "Nordskogen",
        "longitude": 10.054358,
        "latitude": 62.868639
    },
    {
        "busStopId": 100640,
        "locationId": "16356306",
        "name": "Halland camping",
        "longitude": 10.071022,
        "latitude": 62.865972
    },
    {
        "busStopId": 100641,
        "locationId": "16353349",
        "name": "Berkåk sentrum E6",
        "longitude": 10.009766,
        "latitude": 62.828994
    },
    {
        "busStopId": 100642,
        "locationId": "16353348",
        "name": "Mjukliveien",
        "longitude": 10.011634,
        "latitude": 62.832488
    },
    {
        "busStopId": 100643,
        "locationId": "16353347",
        "name": "Ilbro",
        "longitude": 10.06688,
        "latitude": 62.867098
    },
    {
        "busStopId": 100644,
        "locationId": "16353328",
        "name": "Stavå bru",
        "longitude": 10.031226,
        "latitude": 62.802753
    },
    {
        "busStopId": 100645,
        "locationId": "16353325",
        "name": "Berkåk stasjon",
        "longitude": 10.013925,
        "latitude": 62.823123
    },
    {
        "busStopId": 100646,
        "locationId": "16353309",
        "name": "Åshuset",
        "longitude": 9.952067,
        "latitude": 62.70458
    },
    {
        "busStopId": 100647,
        "locationId": "16346502",
        "name": "Løkkjbekken",
        "longitude": 9.867436,
        "latitude": 62.652877
    },
    {
        "busStopId": 100648,
        "locationId": "16346500",
        "name": "Strand",
        "longitude": 9.933112,
        "latitude": 62.689458
    },
    {
        "busStopId": 100649,
        "locationId": "16346436",
        "name": "Kåsløkkja",
        "longitude": 9.913619,
        "latitude": 62.674336
    },
    {
        "busStopId": 100650,
        "locationId": "16346426",
        "name": "Tågvollan",
        "longitude": 9.731953,
        "latitude": 62.605117
    },
    {
        "busStopId": 100651,
        "locationId": "16346421",
        "name": "Oppdal sentrum",
        "longitude": 9.685411,
        "latitude": 62.594861
    },
    {
        "busStopId": 100652,
        "locationId": "16346410",
        "name": "Stølen",
        "longitude": 9.741825,
        "latitude": 62.608763
    },
    {
        "busStopId": 100653,
        "locationId": "16228623",
        "name": "Mølnbukt",
        "longitude": 9.649173,
        "latitude": 63.616388
    },
    {
        "busStopId": 100654,
        "locationId": "16228622",
        "name": "Fremstad bru",
        "longitude": 9.654967,
        "latitude": 63.609621
    },
    {
        "busStopId": 100655,
        "locationId": "16228621",
        "name": "Lysheim skole",
        "longitude": 9.668972,
        "latitude": 63.610843
    },
    {
        "busStopId": 100656,
        "locationId": "16228615",
        "name": "Selva",
        "longitude": 9.71431,
        "latitude": 63.615174
    },
    {
        "busStopId": 100657,
        "locationId": "16228614",
        "name": "Grønningen",
        "longitude": 9.755255,
        "latitude": 63.582296
    },
    {
        "busStopId": 100658,
        "locationId": "16228613",
        "name": "Åremmen",
        "longitude": 9.786444,
        "latitude": 63.571779
    },
    {
        "busStopId": 100659,
        "locationId": "16228612",
        "name": "Størdal",
        "longitude": 9.788097,
        "latitude": 63.56205
    },
    {
        "busStopId": 100660,
        "locationId": "16228611",
        "name": "Selnes",
        "longitude": 9.817499,
        "latitude": 63.551869
    },
    {
        "busStopId": 100661,
        "locationId": "16228609",
        "name": "Bonvik",
        "longitude": 9.809594,
        "latitude": 63.520897
    },
    {
        "busStopId": 100662,
        "locationId": "16228607",
        "name": "Lensvik",
        "longitude": 9.825431,
        "latitude": 63.505504
    },
    {
        "busStopId": 100663,
        "locationId": "16228606",
        "name": "Industrivegen",
        "longitude": 9.838421,
        "latitude": 63.496847
    },
    {
        "busStopId": 100664,
        "locationId": "16228604",
        "name": "Tangvik",
        "longitude": 9.888753,
        "latitude": 63.472231
    },
    {
        "busStopId": 100665,
        "locationId": "16228603",
        "name": "Ingdal",
        "longitude": 9.906289,
        "latitude": 63.460657
    },
    {
        "busStopId": 100666,
        "locationId": "16228601",
        "name": "Solberg",
        "longitude": 9.918164,
        "latitude": 63.445694
    },
    {
        "busStopId": 100667,
        "locationId": "16224631",
        "name": "Værnes",
        "longitude": 9.509637,
        "latitude": 63.581069
    },
    {
        "busStopId": 100668,
        "locationId": "16224630",
        "name": "Slettvik",
        "longitude": 9.534323,
        "latitude": 63.593185
    },
    {
        "busStopId": 100669,
        "locationId": "16011456",
        "name": "Sigurd Jorsalfars veg",
        "longitude": 10.435962,
        "latitude": 63.419249
    },
    {
        "busStopId": 100670,
        "locationId": "16011359",
        "name": "Tyholt",
        "longitude": 10.427653,
        "latitude": 63.422071
    },
    {
        "busStopId": 100671,
        "locationId": "16011309",
        "name": "Johannes Minsaas veg",
        "longitude": 10.517933,
        "latitude": 63.429706
    },
    {
        "busStopId": 100672,
        "locationId": "16011157",
        "name": "Anton Jenssens veg",
        "longitude": 10.506327,
        "latitude": 63.433025
    },
    {
        "busStopId": 100673,
        "locationId": "16011122",
        "name": "Vestre Ranheim",
        "longitude": 10.534346,
        "latitude": 63.4232
    },
    {
        "busStopId": 100674,
        "locationId": "16011121",
        "name": "Peder Myhres vei",
        "longitude": 10.533681,
        "latitude": 63.425093
    },
    {
        "busStopId": 100675,
        "locationId": "16011111",
        "name": "Grilstadveien",
        "longitude": 10.494739,
        "latitude": 63.429546
    },
    {
        "busStopId": 100676,
        "locationId": "16011089",
        "name": "Havstad",
        "longitude": 10.355294,
        "latitude": 63.406251
    },
    {
        "busStopId": 100677,
        "locationId": "16011023",
        "name": "Strindheim",
        "longitude": 10.457261,
        "latitude": 63.435428
    },
    {
        "busStopId": 100678,
        "locationId": "16011000",
        "name": "Breidablikk",
        "longitude": 10.376979,
        "latitude": 63.412355
    },
    {
        "busStopId": 100679,
        "locationId": "16010779",
        "name": "Kalvskinnet",
        "longitude": 10.378299,
        "latitude": 63.430329
    },
    {
        "busStopId": 100680,
        "locationId": "16010740",
        "name": "Belvedere",
        "longitude": 10.376377,
        "latitude": 63.416138
    },
    {
        "busStopId": 100681,
        "locationId": "16010718",
        "name": "St. Olavs gate",
        "longitude": 10.390211,
        "latitude": 63.431273
    },
    {
        "busStopId": 100682,
        "locationId": "16010713",
        "name": "Bergsli gate",
        "longitude": 10.367942,
        "latitude": 63.427046
    },
    {
        "busStopId": 100683,
        "locationId": "16010712",
        "name": "Nyveibakken",
        "longitude": 10.372397,
        "latitude": 63.42433
    },
    {
        "busStopId": 100684,
        "locationId": "16010711",
        "name": "Bygrensen",
        "longitude": 10.375595,
        "latitude": 63.418743
    },
    {
        "busStopId": 100685,
        "locationId": "16386115",
        "name": "Havik",
        "longitude": 9.770023,
        "latitude": 63.212168
    },
    {
        "busStopId": 100686,
        "locationId": "16386114",
        "name": "Kårmo",
        "longitude": 9.768846,
        "latitude": 63.216491
    },
    {
        "busStopId": 100687,
        "locationId": "16386113",
        "name": "By",
        "longitude": 9.767005,
        "latitude": 63.224137
    },
    {
        "busStopId": 100688,
        "locationId": "16386112",
        "name": "By Nedre",
        "longitude": 9.765621,
        "latitude": 63.227475
    },
    {
        "busStopId": 100689,
        "locationId": "16386111",
        "name": "Grendstuggu By",
        "longitude": 9.763034,
        "latitude": 63.230721
    },
    {
        "busStopId": 100690,
        "locationId": "16386110",
        "name": "Kvålskroken",
        "longitude": 9.760537,
        "latitude": 63.236271
    },
    {
        "busStopId": 100691,
        "locationId": "16386109",
        "name": "Hallguttu",
        "longitude": 9.770787,
        "latitude": 63.243766
    },
    {
        "busStopId": 100692,
        "locationId": "16386108",
        "name": "Kvåle",
        "longitude": 9.769295,
        "latitude": 63.24741
    },
    {
        "busStopId": 100693,
        "locationId": "16386107",
        "name": "Bakkmoen",
        "longitude": 9.769188,
        "latitude": 63.253826
    },
    {
        "busStopId": 100694,
        "locationId": "16386106",
        "name": "Torshus",
        "longitude": 9.779797,
        "latitude": 63.257493
    },
    {
        "busStopId": 100695,
        "locationId": "16386105",
        "name": "Solhus",
        "longitude": 9.792751,
        "latitude": 63.261971
    },
    {
        "busStopId": 100696,
        "locationId": "16386104",
        "name": "Forvebrua",
        "longitude": 9.79885,
        "latitude": 63.265014
    },
    {
        "busStopId": 100697,
        "locationId": "16364225",
        "name": "Å sentrum",
        "longitude": 9.741672,
        "latitude": 62.984597
    },
    {
        "busStopId": 100698,
        "locationId": "16364224",
        "name": "Snoen",
        "longitude": 9.722637,
        "latitude": 63.000951
    },
    {
        "busStopId": 100699,
        "locationId": "16364223",
        "name": "Kjerstad",
        "longitude": 9.714148,
        "latitude": 63.015384
    },
    {
        "busStopId": 100700,
        "locationId": "16364222",
        "name": "Muan",
        "longitude": 9.711201,
        "latitude": 63.025935
    },
    {
        "busStopId": 100701,
        "locationId": "16632005",
        "name": "Vikhammer",
        "longitude": 10.626082,
        "latitude": 63.437091
    },
    {
        "busStopId": 100702,
        "locationId": "16632004",
        "name": "Hansensvingen",
        "longitude": 10.615805,
        "latitude": 63.435869
    },
    {
        "busStopId": 100703,
        "locationId": "16632003",
        "name": "Saksvik",
        "longitude": 10.604504,
        "latitude": 63.436677
    },
    {
        "busStopId": 100704,
        "locationId": "16632002",
        "name": "Hundhamaren",
        "longitude": 10.596761,
        "latitude": 63.438621
    },
    {
        "busStopId": 100705,
        "locationId": "16632001",
        "name": "Sjølyst",
        "longitude": 10.593563,
        "latitude": 63.437725
    },
    {
        "busStopId": 100706,
        "locationId": "16578780",
        "name": "Vikan",
        "longitude": 10.047073,
        "latitude": 63.345193
    },
    {
        "busStopId": 100707,
        "locationId": "16578778",
        "name": "Lundan",
        "longitude": 10.023761,
        "latitude": 63.346467
    },
    {
        "busStopId": 100708,
        "locationId": "16578726",
        "name": "Storsand",
        "longitude": 9.936032,
        "latitude": 63.336451
    },
    {
        "busStopId": 100709,
        "locationId": "16578725",
        "name": "Rian",
        "longitude": 9.953971,
        "latitude": 63.342473
    },
    {
        "busStopId": 100710,
        "locationId": "16578724",
        "name": "Tråssåvika",
        "longitude": 9.965964,
        "latitude": 63.347382
    },
    {
        "busStopId": 100711,
        "locationId": "16578723",
        "name": "Sildværet",
        "longitude": 9.977372,
        "latitude": 63.347466
    },
    {
        "busStopId": 100712,
        "locationId": "16578722",
        "name": "Viggja",
        "longitude": 9.990012,
        "latitude": 63.345278
    },
    {
        "busStopId": 100713,
        "locationId": "16578721",
        "name": "Nygård",
        "longitude": 10.00213,
        "latitude": 63.345016
    },
    {
        "busStopId": 100714,
        "locationId": "16578720",
        "name": "Stykkan",
        "longitude": 10.013907,
        "latitude": 63.345963
    },
    {
        "busStopId": 100715,
        "locationId": "16578719",
        "name": "Lund Hagebruk",
        "longitude": 10.038224,
        "latitude": 63.34641
    },
    {
        "busStopId": 100716,
        "locationId": "16578718",
        "name": "Haukvik",
        "longitude": 10.054349,
        "latitude": 63.34261
    },
    {
        "busStopId": 100717,
        "locationId": "16010063",
        "name": "Brøsetvegen 168",
        "longitude": 10.442466,
        "latitude": 63.411386
    },
    {
        "busStopId": 100718,
        "locationId": "16010055",
        "name": "Harald Gilles veg",
        "longitude": 10.418679,
        "latitude": 63.419603
    },
    {
        "busStopId": 100719,
        "locationId": "16010054",
        "name": "Berg Prestegård",
        "longitude": 10.414987,
        "latitude": 63.417549
    },
    {
        "busStopId": 100720,
        "locationId": "16011996",
        "name": "Skjetlein",
        "longitude": 10.302212,
        "latitude": 63.34078
    },
    {
        "busStopId": 100721,
        "locationId": "16011995",
        "name": "Rønningen aldersbolig",
        "longitude": 10.441029,
        "latitude": 63.434262
    },
    {
        "busStopId": 100722,
        "locationId": "16011788",
        "name": "Nordsetrønning",
        "longitude": 10.461376,
        "latitude": 63.339128
    },
    {
        "busStopId": 100723,
        "locationId": "16011787",
        "name": "Kambru",
        "longitude": 10.443787,
        "latitude": 63.33974
    },
    {
        "busStopId": 100724,
        "locationId": "16011786",
        "name": "Tiller bru",
        "longitude": 10.437283,
        "latitude": 63.349179
    },
    {
        "busStopId": 100725,
        "locationId": "16011784",
        "name": "Værestrøa",
        "longitude": 10.58696,
        "latitude": 63.434017
    },
    {
        "busStopId": 100726,
        "locationId": "16011782",
        "name": "Væresbakken",
        "longitude": 10.58378,
        "latitude": 63.431281
    },
    {
        "busStopId": 100727,
        "locationId": "16011781",
        "name": "Være Østre",
        "longitude": 10.578938,
        "latitude": 63.431828
    },
    {
        "busStopId": 100728,
        "locationId": "16011780",
        "name": "Væresletta",
        "longitude": 10.565859,
        "latitude": 63.430409
    },
    {
        "busStopId": 100729,
        "locationId": "16011778",
        "name": "Steinan",
        "longitude": 10.445655,
        "latitude": 63.401248
    },
    {
        "busStopId": 100730,
        "locationId": "16011777",
        "name": "Skistua",
        "longitude": 10.26053,
        "latitude": 63.417798
    },
    {
        "busStopId": 100731,
        "locationId": "16011404",
        "name": "Solsiden",
        "longitude": 10.412956,
        "latitude": 63.434005
    },
    {
        "busStopId": 100732,
        "locationId": "16011401",
        "name": "Romolslia Nedre",
        "longitude": 10.369208,
        "latitude": 63.381802
    },
    {
        "busStopId": 100733,
        "locationId": "16011400",
        "name": "Romolslia",
        "longitude": 10.369155,
        "latitude": 63.379826
    },
    {
        "busStopId": 100734,
        "locationId": "16011399",
        "name": "Skårgangen",
        "longitude": 10.365444,
        "latitude": 63.378776
    },
    {
        "busStopId": 100735,
        "locationId": "16011396",
        "name": "Rognbudalen",
        "longitude": 10.381309,
        "latitude": 63.353812
    },
    {
        "busStopId": 100736,
        "locationId": "16011394",
        "name": "Risvollan senter",
        "longitude": 10.429036,
        "latitude": 63.390712
    },
    {
        "busStopId": 100737,
        "locationId": "16011391",
        "name": "Ringve skole",
        "longitude": 10.444757,
        "latitude": 63.449738
    },
    {
        "busStopId": 100738,
        "locationId": "16011390",
        "name": "Vikelvveien",
        "longitude": 10.541128,
        "latitude": 63.423811
    },
    {
        "busStopId": 100739,
        "locationId": "16011386",
        "name": "Omkj v. Nardo",
        "longitude": 10.420682,
        "latitude": 63.407188
    },
    {
        "busStopId": 100740,
        "locationId": "16011385",
        "name": "Ranheim stasjon",
        "longitude": 10.532468,
        "latitude": 63.427898
    },
    {
        "busStopId": 100741,
        "locationId": "16011384",
        "name": "Ranheim skole",
        "longitude": 10.541784,
        "latitude": 63.429309
    },
    {
        "busStopId": 100742,
        "locationId": "16011383",
        "name": "Ranheim kirke",
        "longitude": 10.536771,
        "latitude": 63.428895
    },
    {
        "busStopId": 100743,
        "locationId": "16011382",
        "name": "Ranheim fabrikker",
        "longitude": 10.53537,
        "latitude": 63.421681
    },
    {
        "busStopId": 100744,
        "locationId": "16011027",
        "name": "Bromstadvegen",
        "longitude": 10.452824,
        "latitude": 63.430168
    },
    {
        "busStopId": 100745,
        "locationId": "16011022",
        "name": "Nova Kinosenter",
        "longitude": 10.401251,
        "latitude": 63.433367
    },
    {
        "busStopId": 100746,
        "locationId": "16011015",
        "name": "Prinsenkrysset",
        "longitude": 10.392151,
        "latitude": 63.431173
    },
    {
        "busStopId": 100747,
        "locationId": "16011014",
        "name": "Hospitalskirka",
        "longitude": 10.385953,
        "latitude": 63.430237
    },
    {
        "busStopId": 100748,
        "locationId": "16011013",
        "name": "Kalvskinnet",
        "longitude": 10.3798,
        "latitude": 63.430225
    },
    {
        "busStopId": 100749,
        "locationId": "16011012",
        "name": "Torget",
        "longitude": 10.393616,
        "latitude": 63.430498
    },
    {
        "busStopId": 100750,
        "locationId": "16011011",
        "name": "Prinsen kino",
        "longitude": 10.393589,
        "latitude": 63.426214
    },
    {
        "busStopId": 100751,
        "locationId": "16010997",
        "name": "Hasselbakken",
        "longitude": 10.493526,
        "latitude": 63.436203
    },
    {
        "busStopId": 100752,
        "locationId": "16010996",
        "name": "Skjetlein",
        "longitude": 10.302212,
        "latitude": 63.34078
    },
    {
        "busStopId": 100753,
        "locationId": "16010995",
        "name": "Rønningen aldersbolig",
        "longitude": 10.441029,
        "latitude": 63.434262
    },
    {
        "busStopId": 100754,
        "locationId": "16010787",
        "name": "Kambru",
        "longitude": 10.443427,
        "latitude": 63.339724
    },
    {
        "busStopId": 100755,
        "locationId": "16010786",
        "name": "Tiller bru",
        "longitude": 10.436663,
        "latitude": 63.349082
    },
    {
        "busStopId": 100756,
        "locationId": "16010396",
        "name": "Rognbudalen",
        "longitude": 10.379512,
        "latitude": 63.354251
    },
    {
        "busStopId": 100757,
        "locationId": "16010394",
        "name": "Risvollan senter",
        "longitude": 10.429548,
        "latitude": 63.390571
    },
    {
        "busStopId": 100758,
        "locationId": "16010391",
        "name": "Ringve skole",
        "longitude": 10.446032,
        "latitude": 63.449653
    },
    {
        "busStopId": 100759,
        "locationId": "16010390",
        "name": "Vikelvveien",
        "longitude": 10.541047,
        "latitude": 63.423321
    },
    {
        "busStopId": 100760,
        "locationId": "16010389",
        "name": "Reppe",
        "longitude": 10.557962,
        "latitude": 63.415997
    },
    {
        "busStopId": 100761,
        "locationId": "16010386",
        "name": "Omkj v. Nardo",
        "longitude": 10.423467,
        "latitude": 63.407526
    },
    {
        "busStopId": 100762,
        "locationId": "16010385",
        "name": "Ranheim stasjon",
        "longitude": 10.532567,
        "latitude": 63.427834
    },
    {
        "busStopId": 100763,
        "locationId": "16010384",
        "name": "Ranheim skole",
        "longitude": 10.543239,
        "latitude": 63.429505
    },
    {
        "busStopId": 100764,
        "locationId": "16010383",
        "name": "Ranheim kirke",
        "longitude": 10.536061,
        "latitude": 63.42875
    },
    {
        "busStopId": 100765,
        "locationId": "16010382",
        "name": "Ranheim fabrikker",
        "longitude": 10.535828,
        "latitude": 63.421677
    },
    {
        "busStopId": 100766,
        "locationId": "16010381",
        "name": "Ramstad",
        "longitude": 10.476027,
        "latitude": 63.412174
    },
    {
        "busStopId": 100767,
        "locationId": "16010377",
        "name": "Pirbadet",
        "longitude": 10.402213,
        "latitude": 63.44112
    },
    {
        "busStopId": 100768,
        "locationId": "16010376",
        "name": "Professor Brochs gate",
        "longitude": 10.398197,
        "latitude": 63.414293
    },
    {
        "busStopId": 100769,
        "locationId": "16010374",
        "name": "Ranheim idret.pl",
        "longitude": 10.525695,
        "latitude": 63.427452
    },
    {
        "busStopId": 100770,
        "locationId": "16010373",
        "name": "Presthus",
        "longitude": 10.518823,
        "latitude": 63.423719
    },
    {
        "busStopId": 100771,
        "locationId": "16010372",
        "name": "Presthusaunet",
        "longitude": 10.494838,
        "latitude": 63.418345
    },
    {
        "busStopId": 100772,
        "locationId": "16010035",
        "name": "Anton Grevskotts veg",
        "longitude": 10.406084,
        "latitude": 63.40348
    },
    {
        "busStopId": 100773,
        "locationId": "16010034",
        "name": "Ankers gate",
        "longitude": 10.416846,
        "latitude": 63.424856
    },
    {
        "busStopId": 100774,
        "locationId": "16010033",
        "name": "Angelltrøvegen",
        "longitude": 10.461385,
        "latitude": 63.416837
    },
    {
        "busStopId": 100775,
        "locationId": "16010032",
        "name": "Alfheimsvingen",
        "longitude": 10.327598,
        "latitude": 63.383541
    },
    {
        "busStopId": 100776,
        "locationId": "16010030",
        "name": "Adresseavisen",
        "longitude": 10.360099,
        "latitude": 63.34996
    },
    {
        "busStopId": 100777,
        "locationId": "16010027",
        "name": "Bromstadvegen",
        "longitude": 10.452195,
        "latitude": 63.430309
    },
    {
        "busStopId": 100778,
        "locationId": "16010022",
        "name": "Nova Kinosenter",
        "longitude": 10.401233,
        "latitude": 63.433266
    },
    {
        "busStopId": 100779,
        "locationId": "16010018",
        "name": "Søndre gate 22",
        "longitude": 10.400101,
        "latitude": 63.433519
    },
    {
        "busStopId": 100780,
        "locationId": "16010017",
        "name": "Søndre gate 23",
        "longitude": 10.400299,
        "latitude": 63.433869
    },
    {
        "busStopId": 100781,
        "locationId": "16010015",
        "name": "Prinsens gt. P1",
        "longitude": 10.3919,
        "latitude": 63.431032
    },
    {
        "busStopId": 100782,
        "locationId": "16010014",
        "name": "Hospitalskirka",
        "longitude": 10.385055,
        "latitude": 63.430345
    },
    {
        "busStopId": 100783,
        "locationId": "16010013",
        "name": "Kalvskinnet",
        "longitude": 10.378335,
        "latitude": 63.430293
    },
    {
        "busStopId": 100784,
        "locationId": "16010012",
        "name": "Torget",
        "longitude": 10.393068,
        "latitude": 63.430634
    },
    {
        "busStopId": 100785,
        "locationId": "16010011",
        "name": "Prinsen kino",
        "longitude": 10.393274,
        "latitude": 63.425833
    },
    {
        "busStopId": 100786,
        "locationId": "16642132",
        "name": "Bårdsgård",
        "longitude": 11.158082,
        "latitude": 63.193765
    },
    {
        "busStopId": 100787,
        "locationId": "16642130",
        "name": "Draksten",
        "longitude": 10.676226,
        "latitude": 63.283146
    },
    {
        "busStopId": 100788,
        "locationId": "16538502",
        "name": "Jaktøyen",
        "longitude": 10.288153,
        "latitude": 63.304805
    },
    {
        "busStopId": 100789,
        "locationId": "16538167",
        "name": "Gafset",
        "longitude": 10.241872,
        "latitude": 63.323677
    },
    {
        "busStopId": 100790,
        "locationId": "16533252",
        "name": "Gimse skole",
        "longitude": 10.264115,
        "latitude": 63.284078
    },
    {
        "busStopId": 100791,
        "locationId": "16533008",
        "name": "Stendal",
        "longitude": 10.290363,
        "latitude": 63.278384
    },
    {
        "busStopId": 100792,
        "locationId": "16489848",
        "name": "Sveum",
        "longitude": 10.1812,
        "latitude": 62.945529
    },
    {
        "busStopId": 100793,
        "locationId": "16489772",
        "name": "Kviltbakken",
        "longitude": 10.135934,
        "latitude": 62.911585
    },
    {
        "busStopId": 100794,
        "locationId": "16489771",
        "name": "Garli Rasteplass",
        "longitude": 10.115578,
        "latitude": 62.903247
    },
    {
        "busStopId": 100795,
        "locationId": "16489764",
        "name": "Rogstadgrind",
        "longitude": 10.357854,
        "latitude": 63.014108
    },
    {
        "busStopId": 100796,
        "locationId": "16489763",
        "name": "Rogstadgjerdet",
        "longitude": 10.375524,
        "latitude": 63.01423
    },
    {
        "busStopId": 100797,
        "locationId": "16489758",
        "name": "Hindsverkrønning",
        "longitude": 10.813839,
        "latitude": 62.959165
    },
    {
        "busStopId": 100798,
        "locationId": "16489754",
        "name": "Almåsøy",
        "longitude": 10.884761,
        "latitude": 62.969344
    },
    {
        "busStopId": 100799,
        "locationId": "16489753",
        "name": "Almås",
        "longitude": 10.874439,
        "latitude": 62.966286
    },
    {
        "busStopId": 100800,
        "locationId": "16489752",
        "name": "Reistøa",
        "longitude": 10.867854,
        "latitude": 62.964126
    },
    {
        "busStopId": 100801,
        "locationId": "16489751",
        "name": "Hulta",
        "longitude": 10.830933,
        "latitude": 62.962607
    },
    {
        "busStopId": 100802,
        "locationId": "16357306",
        "name": "Grindal Handel",
        "longitude": 9.764283,
        "latitude": 62.917258
    },
    {
        "busStopId": 100803,
        "locationId": "16357305",
        "name": "Nerskogveien",
        "longitude": 9.75751,
        "latitude": 62.922615
    },
    {
        "busStopId": 100804,
        "locationId": "16357302",
        "name": "Bruholtveien",
        "longitude": 9.776006,
        "latitude": 62.95709
    },
    {
        "busStopId": 100805,
        "locationId": "16357301",
        "name": "Motun",
        "longitude": 9.781081,
        "latitude": 62.972949
    },
    {
        "busStopId": 100806,
        "locationId": "16356349",
        "name": "Berkåk sentrum E6",
        "longitude": 10.009757,
        "latitude": 62.828025
    },
    {
        "busStopId": 100807,
        "locationId": "16356348",
        "name": "Mjukliveien",
        "longitude": 10.011948,
        "latitude": 62.832398
    },
    {
        "busStopId": 100808,
        "locationId": "16356347",
        "name": "Ilbro",
        "longitude": 10.066719,
        "latitude": 62.867049
    },
    {
        "busStopId": 100809,
        "locationId": "16356336",
        "name": "Stølsvangsveien",
        "longitude": 9.946237,
        "latitude": 62.699657
    },
    {
        "busStopId": 100810,
        "locationId": "16356334",
        "name": "Rognøy",
        "longitude": 9.958436,
        "latitude": 62.711232
    },
    {
        "busStopId": 100811,
        "locationId": "16356332",
        "name": "Kløftbrua",
        "longitude": 9.976878,
        "latitude": 62.733851
    },
    {
        "busStopId": 100812,
        "locationId": "16356330",
        "name": "Ulsberg",
        "longitude": 9.982618,
        "latitude": 62.748992
    },
    {
        "busStopId": 100813,
        "locationId": "16356328",
        "name": "Stavå bru",
        "longitude": 10.03128,
        "latitude": 62.802527
    },
    {
        "busStopId": 100814,
        "locationId": "16356326",
        "name": "Skauma bru",
        "longitude": 10.035071,
        "latitude": 62.815507
    },
    {
        "busStopId": 100815,
        "locationId": "16356325",
        "name": "Berkåk stasjon",
        "longitude": 10.01414,
        "latitude": 62.823209
    },
    {
        "busStopId": 100816,
        "locationId": "16356321",
        "name": "Skjephaug",
        "longitude": 9.966053,
        "latitude": 62.833764
    },
    {
        "busStopId": 100817,
        "locationId": "16356320",
        "name": "Berkåk sentrum",
        "longitude": 10.007816,
        "latitude": 62.82828
    },
    {
        "busStopId": 100818,
        "locationId": "16242109",
        "name": "Håssåker",
        "longitude": 10.031604,
        "latitude": 63.509015
    },
    {
        "busStopId": 100819,
        "locationId": "16242108",
        "name": "Sandmoen",
        "longitude": 10.066835,
        "latitude": 63.50154
    },
    {
        "busStopId": 100820,
        "locationId": "16242107",
        "name": "Vålen",
        "longitude": 10.080238,
        "latitude": 63.499464
    },
    {
        "busStopId": 100821,
        "locationId": "16242106",
        "name": "Tronghaugen",
        "longitude": 10.090946,
        "latitude": 63.497464
    },
    {
        "busStopId": 100822,
        "locationId": "16242090",
        "name": "Åsly skole",
        "longitude": 9.963916,
        "latitude": 63.586908
    },
    {
        "busStopId": 100823,
        "locationId": "16242089",
        "name": "Skaudal skole",
        "longitude": 10.14701,
        "latitude": 63.651639
    },
    {
        "busStopId": 100824,
        "locationId": "16242082",
        "name": "Fagerlia",
        "longitude": 9.992689,
        "latitude": 63.516234
    },
    {
        "busStopId": 100825,
        "locationId": "16242081",
        "name": "Grønningsmarka",
        "longitude": 9.982124,
        "latitude": 63.511667
    },
    {
        "busStopId": 100826,
        "locationId": "16228631",
        "name": "Værnes",
        "longitude": 9.509637,
        "latitude": 63.581069
    },
    {
        "busStopId": 100827,
        "locationId": "16228630",
        "name": "Slettvik",
        "longitude": 9.534395,
        "latitude": 63.593185
    },
    {
        "busStopId": 100828,
        "locationId": "16228629",
        "name": "Løkhaug",
        "longitude": 9.535266,
        "latitude": 63.598682
    },
    {
        "busStopId": 100829,
        "locationId": "16228628",
        "name": "Stranda",
        "longitude": 9.569762,
        "latitude": 63.607165
    },
    {
        "busStopId": 100830,
        "locationId": "16228627",
        "name": "Raustein",
        "longitude": 9.603664,
        "latitude": 63.618631
    },
    {
        "busStopId": 100831,
        "locationId": "16228626",
        "name": "Hegg",
        "longitude": 9.606952,
        "latitude": 63.619905
    },
    {
        "busStopId": 100832,
        "locationId": "16228625",
        "name": "Hegg bru",
        "longitude": 9.639246,
        "latitude": 63.618911
    },
    {
        "busStopId": 100833,
        "locationId": "16228624",
        "name": "Kallklova",
        "longitude": 9.663905,
        "latitude": 63.621932
    },
    {
        "busStopId": 100834,
        "locationId": "16011713",
        "name": "Bergsli gate",
        "longitude": 10.367672,
        "latitude": 63.427327
    },
    {
        "busStopId": 100835,
        "locationId": "16011712",
        "name": "Nyveibakken",
        "longitude": 10.372487,
        "latitude": 63.424374
    },
    {
        "busStopId": 100836,
        "locationId": "16011711",
        "name": "Bygrensen",
        "longitude": 10.375649,
        "latitude": 63.418847
    },
    {
        "busStopId": 100837,
        "locationId": "16011709",
        "name": "Nordre Hoem",
        "longitude": 10.381012,
        "latitude": 63.405563
    },
    {
        "busStopId": 100838,
        "locationId": "16011708",
        "name": "Søndre Hoem",
        "longitude": 10.381704,
        "latitude": 63.403271
    },
    {
        "busStopId": 100839,
        "locationId": "16011707",
        "name": "Rognheim",
        "longitude": 10.373511,
        "latitude": 63.399418
    },
    {
        "busStopId": 100840,
        "locationId": "16011706",
        "name": "Munkvoll",
        "longitude": 10.359965,
        "latitude": 63.397777
    },
    {
        "busStopId": 100841,
        "locationId": "16011705",
        "name": "Ferstad",
        "longitude": 10.349032,
        "latitude": 63.399498
    },
    {
        "busStopId": 100842,
        "locationId": "16011704",
        "name": "Ugla Trikk",
        "longitude": 10.343759,
        "latitude": 63.400572
    },
    {
        "busStopId": 100843,
        "locationId": "16011703",
        "name": "Kyvannet",
        "longitude": 10.337579,
        "latitude": 63.404103
    },
    {
        "busStopId": 100844,
        "locationId": "16011702",
        "name": "Vestmarka",
        "longitude": 10.32511,
        "latitude": 63.40648
    },
    {
        "busStopId": 100845,
        "locationId": "16011701",
        "name": "Herlofsenløypa",
        "longitude": 10.31999,
        "latitude": 63.405173
    },
    {
        "busStopId": 100846,
        "locationId": "16011664",
        "name": "Kuset",
        "longitude": 10.59756,
        "latitude": 63.382913
    },
    {
        "busStopId": 100847,
        "locationId": "16011615",
        "name": "Berge",
        "longitude": 10.533088,
        "latitude": 63.397004
    },
    {
        "busStopId": 100848,
        "locationId": "16011614",
        "name": "Rota",
        "longitude": 10.528848,
        "latitude": 63.39597
    },
    {
        "busStopId": 100849,
        "locationId": "16011612",
        "name": "Osbrua",
        "longitude": 10.524258,
        "latitude": 63.399675
    },
    {
        "busStopId": 100850,
        "locationId": "16386133",
        "name": "Hoset",
        "longitude": 9.588429,
        "latitude": 63.23655
    },
    {
        "busStopId": 100851,
        "locationId": "16386132",
        "name": "Vassliveien",
        "longitude": 9.633219,
        "latitude": 63.242075
    },
    {
        "busStopId": 100852,
        "locationId": "16386131",
        "name": "Bakksætra",
        "longitude": 9.660536,
        "latitude": 63.246601
    },
    {
        "busStopId": 100853,
        "locationId": "16386130",
        "name": "Slettet",
        "longitude": 9.671119,
        "latitude": 63.247211
    },
    {
        "busStopId": 100854,
        "locationId": "16386129",
        "name": "Fosslykkja",
        "longitude": 9.726751,
        "latitude": 63.251069
    },
    {
        "busStopId": 100855,
        "locationId": "16386128",
        "name": "Fossan",
        "longitude": 9.747188,
        "latitude": 63.255019
    },
    {
        "busStopId": 100856,
        "locationId": "16386127",
        "name": "Ødynhaug",
        "longitude": 9.763924,
        "latitude": 63.257489
    },
    {
        "busStopId": 100857,
        "locationId": "16386126",
        "name": "Nøsen",
        "longitude": 9.782213,
        "latitude": 63.260613
    },
    {
        "busStopId": 100858,
        "locationId": "16386123",
        "name": "Klinga",
        "longitude": 9.731279,
        "latitude": 63.162376
    },
    {
        "busStopId": 100859,
        "locationId": "16386122",
        "name": "Svorkmo Travbane",
        "longitude": 9.739588,
        "latitude": 63.166435
    },
    {
        "busStopId": 100860,
        "locationId": "16386121",
        "name": "Årlivollveien",
        "longitude": 9.73913,
        "latitude": 63.169813
    },
    {
        "busStopId": 100861,
        "locationId": "16386120",
        "name": "Svorkmo",
        "longitude": 9.736184,
        "latitude": 63.171066
    },
    {
        "busStopId": 100862,
        "locationId": "16386119",
        "name": "Aspøllkleivan",
        "longitude": 9.743873,
        "latitude": 63.176449
    },
    {
        "busStopId": 100863,
        "locationId": "16386118",
        "name": "Aspøl",
        "longitude": 9.759872,
        "latitude": 63.183733
    },
    {
        "busStopId": 100864,
        "locationId": "16386117",
        "name": "Moe kirke",
        "longitude": 9.764373,
        "latitude": 63.186456
    },
    {
        "busStopId": 100865,
        "locationId": "16386116",
        "name": "Vormstad",
        "longitude": 9.767813,
        "latitude": 63.200052
    },
    {
        "busStopId": 100866,
        "locationId": "16632025",
        "name": "Hommelvik stasjon",
        "longitude": 10.794821,
        "latitude": 63.411434
    },
    {
        "busStopId": 100867,
        "locationId": "16632022",
        "name": "Halstad",
        "longitude": 10.780412,
        "latitude": 63.414847
    },
    {
        "busStopId": 100868,
        "locationId": "16632021",
        "name": "Grønberg",
        "longitude": 10.776109,
        "latitude": 63.418393
    },
    {
        "busStopId": 100869,
        "locationId": "16632020",
        "name": "Blåhammaren",
        "longitude": 10.774268,
        "latitude": 63.424904
    },
    {
        "busStopId": 100870,
        "locationId": "16632018",
        "name": "Rota",
        "longitude": 10.760856,
        "latitude": 63.431358
    },
    {
        "busStopId": 100871,
        "locationId": "16632017",
        "name": "Stav",
        "longitude": 10.7519,
        "latitude": 63.432828
    },
    {
        "busStopId": 100872,
        "locationId": "16632016",
        "name": "Smiskaret",
        "longitude": 10.737913,
        "latitude": 63.432246
    },
    {
        "busStopId": 100873,
        "locationId": "16632015",
        "name": "Midtsandan",
        "longitude": 10.732074,
        "latitude": 63.431751
    },
    {
        "busStopId": 100874,
        "locationId": "16632014",
        "name": "Storsand",
        "longitude": 10.709059,
        "latitude": 63.431382
    },
    {
        "busStopId": 100875,
        "locationId": "16632013",
        "name": "Storsand",
        "longitude": 10.705942,
        "latitude": 63.431832
    },
    {
        "busStopId": 100876,
        "locationId": "16632012",
        "name": "Torp",
        "longitude": 10.690778,
        "latitude": 63.434025
    },
    {
        "busStopId": 100877,
        "locationId": "16632011",
        "name": "Haugan",
        "longitude": 10.673989,
        "latitude": 63.435596
    },
    {
        "busStopId": 100878,
        "locationId": "16632010",
        "name": "Malvik",
        "longitude": 10.657801,
        "latitude": 63.437822
    },
    {
        "busStopId": 100879,
        "locationId": "16632008",
        "name": "Naustkleiva",
        "longitude": 10.65278,
        "latitude": 63.440115
    },
    {
        "busStopId": 100880,
        "locationId": "16632007",
        "name": "Vikhov",
        "longitude": 10.643213,
        "latitude": 63.440384
    },
    {
        "busStopId": 100881,
        "locationId": "16632006",
        "name": "Vikhammerløkka",
        "longitude": 10.633412,
        "latitude": 63.438701
    },
    {
        "busStopId": 100882,
        "locationId": "16010364",
        "name": "Okstadvegen 35",
        "longitude": 10.384803,
        "latitude": 63.378961
    },
    {
        "busStopId": 100883,
        "locationId": "16010345",
        "name": "Okstadplassen",
        "longitude": 10.384686,
        "latitude": 63.378735
    },
    {
        "busStopId": 100884,
        "locationId": "16010344",
        "name": "Okstad skole",
        "longitude": 10.378299,
        "latitude": 63.381416
    },
    {
        "busStopId": 100885,
        "locationId": "16010339",
        "name": "Sjetnhaugan",
        "longitude": 10.39658,
        "latitude": 63.369121
    },
    {
        "busStopId": 100886,
        "locationId": "16010318",
        "name": "Myrsund",
        "longitude": 10.17634,
        "latitude": 63.370434
    },
    {
        "busStopId": 100887,
        "locationId": "16010277",
        "name": "Laugsand",
        "longitude": 10.433672,
        "latitude": 63.439569
    },
    {
        "busStopId": 100888,
        "locationId": "16010273",
        "name": "Lykkmarka",
        "longitude": 10.397829,
        "latitude": 63.366282
    },
    {
        "busStopId": 100889,
        "locationId": "16010210",
        "name": "Høstadkorsen",
        "longitude": 10.158176,
        "latitude": 63.410111
    },
    {
        "busStopId": 100890,
        "locationId": "16010187",
        "name": "Husebytunet 1",
        "longitude": 10.345169,
        "latitude": 63.369536
    },
    {
        "busStopId": 100891,
        "locationId": "16010164",
        "name": "Brattøra",
        "longitude": 10.407414,
        "latitude": 63.437488
    },
    {
        "busStopId": 100892,
        "locationId": "16010162",
        "name": "Halstein gård",
        "longitude": 10.403183,
        "latitude": 63.368654
    },
    {
        "busStopId": 100893,
        "locationId": "16010160",
        "name": "Hagen",
        "longitude": 10.404566,
        "latitude": 63.370849
    },
    {
        "busStopId": 100894,
        "locationId": "16010159",
        "name": "Grinden",
        "longitude": 10.163521,
        "latitude": 63.382837
    },
    {
        "busStopId": 100895,
        "locationId": "16010157",
        "name": "Aanton Jenssens veg",
        "longitude": 10.507244,
        "latitude": 63.432969
    },
    {
        "busStopId": 100896,
        "locationId": "16010129",
        "name": "Ishallen",
        "longitude": 10.467583,
        "latitude": 63.427119
    },
    {
        "busStopId": 100897,
        "locationId": "16010066",
        "name": "B. Olsens vei 50",
        "longitude": 10.304134,
        "latitude": 63.449838
    },
    {
        "busStopId": 100898,
        "locationId": "16011434",
        "name": "Fossegrenda",
        "longitude": 10.399634,
        "latitude": 63.388966
    },
    {
        "busStopId": 100899,
        "locationId": "16011433",
        "name": "Schiøtz' vei",
        "longitude": 10.354817,
        "latitude": 63.42578
    },
    {
        "busStopId": 100900,
        "locationId": "16011432",
        "name": "Moholt Storstenter",
        "longitude": 10.440876,
        "latitude": 63.410513
    },
    {
        "busStopId": 100901,
        "locationId": "16011431",
        "name": "Saupstad Senster",
        "longitude": 10.34826,
        "latitude": 63.367144
    },
    {
        "busStopId": 100902,
        "locationId": "16011430",
        "name": "Saupstadringen 109",
        "longitude": 10.344999,
        "latitude": 63.362034
    },
    {
        "busStopId": 100903,
        "locationId": "16011429",
        "name": "Saupstadmyra",
        "longitude": 10.34287,
        "latitude": 63.35971
    },
    {
        "busStopId": 100904,
        "locationId": "16011427",
        "name": "Sandbakken",
        "longitude": 10.362696,
        "latitude": 63.340087
    },
    {
        "busStopId": 100905,
        "locationId": "16011426",
        "name": "Charlottenlund kirke",
        "longitude": 10.494892,
        "latitude": 63.421593
    },
    {
        "busStopId": 100906,
        "locationId": "16011425",
        "name": "Sagplassen",
        "longitude": 10.534678,
        "latitude": 63.407401
    },
    {
        "busStopId": 100907,
        "locationId": "16011416",
        "name": "Rønningsbakken",
        "longitude": 10.43678,
        "latitude": 63.437151
    },
    {
        "busStopId": 100908,
        "locationId": "16011413",
        "name": "Rydningen",
        "longitude": 10.353784,
        "latitude": 63.388169
    },
    {
        "busStopId": 100909,
        "locationId": "16011410",
        "name": "Rotvoll",
        "longitude": 10.484247,
        "latitude": 63.435034
    },
    {
        "busStopId": 100910,
        "locationId": "16011409",
        "name": "Rotvoll alle",
        "longitude": 10.468715,
        "latitude": 63.435146
    },
    {
        "busStopId": 100911,
        "locationId": "16011408",
        "name": "Rostengrenda",
        "longitude": 10.381956,
        "latitude": 63.365199
    },
    {
        "busStopId": 100912,
        "locationId": "16011407",
        "name": "Rosten",
        "longitude": 10.362983,
        "latitude": 63.362223
    },
    {
        "busStopId": 100913,
        "locationId": "16011406",
        "name": "Rosendal",
        "longitude": 10.429926,
        "latitude": 63.436733
    },
    {
        "busStopId": 100914,
        "locationId": "16011048",
        "name": "B. Olsens vei 1",
        "longitude": 10.314771,
        "latitude": 63.450452
    },
    {
        "busStopId": 100915,
        "locationId": "16011047",
        "name": "Byåsen skole",
        "longitude": 10.358312,
        "latitude": 63.399241
    },
    {
        "busStopId": 100916,
        "locationId": "16011046",
        "name": "Bratsberg Østre",
        "longitude": 10.449985,
        "latitude": 63.347003
    },
    {
        "busStopId": 100917,
        "locationId": "16011045",
        "name": "Bynesveien 16",
        "longitude": 10.358635,
        "latitude": 63.429847
    },
    {
        "busStopId": 100918,
        "locationId": "16011044",
        "name": "Arne Bergsgårds veg",
        "longitude": 10.438217,
        "latitude": 63.399329
    },
    {
        "busStopId": 100919,
        "locationId": "16011043",
        "name": "Arnt Smistads v.",
        "longitude": 10.355311,
        "latitude": 63.396863
    },
    {
        "busStopId": 100920,
        "locationId": "16011041",
        "name": "Lade alle 80",
        "longitude": 10.463433,
        "latitude": 63.442043
    },
    {
        "busStopId": 100921,
        "locationId": "16011040",
        "name": "Astronomvegen",
        "longitude": 10.410037,
        "latitude": 63.393416
    },
    {
        "busStopId": 100922,
        "locationId": "16011039",
        "name": "Askeladdvegen",
        "longitude": 10.507863,
        "latitude": 63.42605
    },
    {
        "busStopId": 100923,
        "locationId": "16011037",
        "name": "Asbjørn Øverås veg",
        "longitude": 10.4245,
        "latitude": 63.395262
    },
    {
        "busStopId": 100924,
        "locationId": "16011036",
        "name": "Arilds gate",
        "longitude": 10.371149,
        "latitude": 63.42873
    },
    {
        "busStopId": 100925,
        "locationId": "16011035",
        "name": "Anton Grevskotts veg",
        "longitude": 10.405258,
        "latitude": 63.403838
    },
    {
        "busStopId": 100926,
        "locationId": "16011034",
        "name": "Ankers gate",
        "longitude": 10.416846,
        "latitude": 63.424856
    },
    {
        "busStopId": 100927,
        "locationId": "16011033",
        "name": "Angelltrøvegen",
        "longitude": 10.461618,
        "latitude": 63.417456
    },
    {
        "busStopId": 100928,
        "locationId": "16011032",
        "name": "Alfheimsvingen",
        "longitude": 10.32723,
        "latitude": 63.384253
    },
    {
        "busStopId": 100929,
        "locationId": "16011030",
        "name": "Adresseavisen",
        "longitude": 10.36054,
        "latitude": 63.350702
    },
    {
        "busStopId": 100930,
        "locationId": "16010426",
        "name": "Charlottenlund kirke",
        "longitude": 10.495134,
        "latitude": 63.420861
    },
    {
        "busStopId": 100931,
        "locationId": "16010425",
        "name": "Sagplassen",
        "longitude": 10.53616,
        "latitude": 63.408507
    },
    {
        "busStopId": 100932,
        "locationId": "16010417",
        "name": "Rønningstad",
        "longitude": 10.32705,
        "latitude": 63.386938
    },
    {
        "busStopId": 100933,
        "locationId": "16010416",
        "name": "Rønningsbakken",
        "longitude": 10.436591,
        "latitude": 63.436998
    },
    {
        "busStopId": 100934,
        "locationId": "16010413",
        "name": "Rydningen",
        "longitude": 10.35329,
        "latitude": 63.388274
    },
    {
        "busStopId": 100935,
        "locationId": "16010410",
        "name": "Rotvoll",
        "longitude": 10.483411,
        "latitude": 63.434853
    },
    {
        "busStopId": 100936,
        "locationId": "16010409",
        "name": "Rotvoll alle",
        "longitude": 10.469101,
        "latitude": 63.435271
    },
    {
        "busStopId": 100937,
        "locationId": "16010408",
        "name": "Rostengrenda",
        "longitude": 10.381973,
        "latitude": 63.36598
    },
    {
        "busStopId": 100938,
        "locationId": "16010407",
        "name": "Rosten",
        "longitude": 10.362705,
        "latitude": 63.362304
    },
    {
        "busStopId": 100939,
        "locationId": "16010406",
        "name": "Rosendal",
        "longitude": 10.432773,
        "latitude": 63.436769
    },
    {
        "busStopId": 100940,
        "locationId": "16010404",
        "name": "Solsiden",
        "longitude": 10.413495,
        "latitude": 63.434025
    },
    {
        "busStopId": 100941,
        "locationId": "16010403",
        "name": "Gyldenløves gate",
        "longitude": 10.419101,
        "latitude": 63.430237
    },
    {
        "busStopId": 100942,
        "locationId": "16010402",
        "name": "Romolslia",
        "longitude": 10.36248,
        "latitude": 63.376964
    },
    {
        "busStopId": 100943,
        "locationId": "16010401",
        "name": "Romolslia Nedre",
        "longitude": 10.368822,
        "latitude": 63.382048
    },
    {
        "busStopId": 100944,
        "locationId": "16010400",
        "name": "Romolslia",
        "longitude": 10.36822,
        "latitude": 63.379476
    },
    {
        "busStopId": 100945,
        "locationId": "16010399",
        "name": "Skårgangen",
        "longitude": 10.365175,
        "latitude": 63.378619
    },
    {
        "busStopId": 100946,
        "locationId": "16010051",
        "name": "Baklia",
        "longitude": 10.322721,
        "latitude": 63.416214
    },
    {
        "busStopId": 100947,
        "locationId": "16010050",
        "name": "Bakkegata",
        "longitude": 10.40727,
        "latitude": 63.432238
    },
    {
        "busStopId": 100948,
        "locationId": "16010049",
        "name": "Bjørndalstoppen",
        "longitude": 10.35594,
        "latitude": 63.37068
    },
    {
        "busStopId": 100949,
        "locationId": "16010048",
        "name": "B. Olsens vei 1",
        "longitude": 10.314366,
        "latitude": 63.45048
    },
    {
        "busStopId": 100950,
        "locationId": "16010047",
        "name": "Byåsen skole",
        "longitude": 10.357611,
        "latitude": 63.398509
    },
    {
        "busStopId": 100951,
        "locationId": "16010046",
        "name": "Bratsberg Østre",
        "longitude": 10.449949,
        "latitude": 63.346946
    },
    {
        "busStopId": 100952,
        "locationId": "16010045",
        "name": "Bynesveien 16",
        "longitude": 10.357719,
        "latitude": 63.429996
    },
    {
        "busStopId": 100953,
        "locationId": "16010044",
        "name": "Arne Bergsgårds veg",
        "longitude": 10.437822,
        "latitude": 63.399414
    },
    {
        "busStopId": 100954,
        "locationId": "16010043",
        "name": "Arnt Smistads v.",
        "longitude": 10.353021,
        "latitude": 63.396155
    },
    {
        "busStopId": 100955,
        "locationId": "16010042",
        "name": "Christian Monsens gt",
        "longitude": 10.424679,
        "latitude": 63.430843
    },
    {
        "busStopId": 100956,
        "locationId": "16010041",
        "name": "Lade",
        "longitude": 10.463657,
        "latitude": 63.44179
    },
    {
        "busStopId": 100957,
        "locationId": "16010040",
        "name": "Astronomvegen",
        "longitude": 10.409534,
        "latitude": 63.392925
    },
    {
        "busStopId": 100958,
        "locationId": "16010039",
        "name": "Askeladdvegen",
        "longitude": 10.507836,
        "latitude": 63.425925
    },
    {
        "busStopId": 100959,
        "locationId": "16010038",
        "name": "Singsaker",
        "longitude": 10.422757,
        "latitude": 63.427195
    },
    {
        "busStopId": 100960,
        "locationId": "16010037",
        "name": "Asbjørn Øverås veg",
        "longitude": 10.425973,
        "latitude": 63.395484
    },
    {
        "busStopId": 100961,
        "locationId": "16010036",
        "name": "Arilds gate",
        "longitude": 10.369631,
        "latitude": 63.426668
    },
    {
        "busStopId": 100962,
        "locationId": "16647107",
        "name": "Kjelstad",
        "longitude": 11.088085,
        "latitude": 63.243313
    },
    {
        "busStopId": 100963,
        "locationId": "16647106",
        "name": "Garberg bru",
        "longitude": 11.093843,
        "latitude": 63.249452
    },
    {
        "busStopId": 100964,
        "locationId": "16647105",
        "name": "Granby",
        "longitude": 11.078815,
        "latitude": 63.276735
    },
    {
        "busStopId": 100965,
        "locationId": "16647104",
        "name": "Øverbø",
        "longitude": 11.043699,
        "latitude": 63.394293
    },
    {
        "busStopId": 100966,
        "locationId": "16647103",
        "name": "Tømra",
        "longitude": 11.073047,
        "latitude": 63.285278
    },
    {
        "busStopId": 100967,
        "locationId": "16647102",
        "name": "Røet",
        "longitude": 11.076847,
        "latitude": 63.295957
    },
    {
        "busStopId": 100968,
        "locationId": "16646540",
        "name": "Øyberget",
        "longitude": 11.08195,
        "latitude": 63.261038
    },
    {
        "busStopId": 100969,
        "locationId": "16646538",
        "name": "Sirum",
        "longitude": 11.080476,
        "latitude": 63.263826
    },
    {
        "busStopId": 100970,
        "locationId": "16646536",
        "name": "Kvitmyr",
        "longitude": 11.07903,
        "latitude": 63.268651
    },
    {
        "busStopId": 100971,
        "locationId": "16643540",
        "name": "Øyberget",
        "longitude": 11.081806,
        "latitude": 63.260904
    },
    {
        "busStopId": 100972,
        "locationId": "16643538",
        "name": "Sirum",
        "longitude": 11.080045,
        "latitude": 63.263931
    },
    {
        "busStopId": 100973,
        "locationId": "16643536",
        "name": "Kvitmyr",
        "longitude": 11.078797,
        "latitude": 63.268643
    },
    {
        "busStopId": 100974,
        "locationId": "16642162",
        "name": "Velve",
        "longitude": 11.084187,
        "latitude": 63.205009
    },
    {
        "busStopId": 100975,
        "locationId": "16642135",
        "name": "Skisenteret Selbuskogen",
        "longitude": 11.088471,
        "latitude": 63.337942
    },
    {
        "busStopId": 100976,
        "locationId": "16642134",
        "name": "Mebost",
        "longitude": 11.149817,
        "latitude": 63.19767
    },
    {
        "busStopId": 100977,
        "locationId": "16642133",
        "name": "Hallgotto",
        "longitude": 11.054533,
        "latitude": 63.241137
    },
    {
        "busStopId": 100978,
        "locationId": "16367206",
        "name": "Grefstad Bil",
        "longitude": 9.703494,
        "latitude": 63.119192
    },
    {
        "busStopId": 100979,
        "locationId": "16367205",
        "name": "Løkken stasjon",
        "longitude": 9.704976,
        "latitude": 63.125524
    },
    {
        "busStopId": 100980,
        "locationId": "16367204",
        "name": "Bjørnliveien",
        "longitude": 9.707797,
        "latitude": 63.134679
    },
    {
        "busStopId": 100981,
        "locationId": "16367203",
        "name": "Jordhus",
        "longitude": 9.707321,
        "latitude": 63.139745
    },
    {
        "busStopId": 100982,
        "locationId": "16367202",
        "name": "Skjøtskift",
        "longitude": 9.713896,
        "latitude": 63.147407
    },
    {
        "busStopId": 100983,
        "locationId": "16367201",
        "name": "Skjøtskift bru",
        "longitude": 9.719134,
        "latitude": 63.152036
    },
    {
        "busStopId": 100984,
        "locationId": "16364209",
        "name": "Meldal Vgs",
        "longitude": 9.700116,
        "latitude": 63.106798
    },
    {
        "busStopId": 100985,
        "locationId": "16357321",
        "name": "Flå",
        "longitude": 9.93675,
        "latitude": 62.835277
    },
    {
        "busStopId": 100986,
        "locationId": "16357320",
        "name": "Gunnesveien",
        "longitude": 9.916341,
        "latitude": 62.838755
    },
    {
        "busStopId": 100987,
        "locationId": "16357319",
        "name": "Holsmoen",
        "longitude": 9.903351,
        "latitude": 62.843971
    },
    {
        "busStopId": 100988,
        "locationId": "16357318",
        "name": "Skjervan",
        "longitude": 9.89117,
        "latitude": 62.84657
    },
    {
        "busStopId": 100989,
        "locationId": "16357316",
        "name": "Stamnan",
        "longitude": 9.858175,
        "latitude": 62.849136
    },
    {
        "busStopId": 100990,
        "locationId": "16357312",
        "name": "Voll",
        "longitude": 9.840613,
        "latitude": 62.876806
    },
    {
        "busStopId": 100991,
        "locationId": "16357309",
        "name": "Mærk bru",
        "longitude": 9.811588,
        "latitude": 62.902191
    },
    {
        "busStopId": 100992,
        "locationId": "16357308",
        "name": "Holskrysset",
        "longitude": 9.80565,
        "latitude": 62.90368
    },
    {
        "busStopId": 100993,
        "locationId": "16357307",
        "name": "Åsveien",
        "longitude": 9.782016,
        "latitude": 62.907293
    },
    {
        "busStopId": 100994,
        "locationId": "16242129",
        "name": "Føll",
        "longitude": 10.015164,
        "latitude": 63.606255
    },
    {
        "busStopId": 100995,
        "locationId": "16242128",
        "name": "Leira",
        "longitude": 9.999704,
        "latitude": 63.599461
    },
    {
        "busStopId": 100996,
        "locationId": "16242126",
        "name": "Rissa",
        "longitude": 9.953603,
        "latitude": 63.582612
    },
    {
        "busStopId": 100997,
        "locationId": "16242125",
        "name": "Sund",
        "longitude": 9.93596,
        "latitude": 63.579694
    },
    {
        "busStopId": 100998,
        "locationId": "16242123",
        "name": "Kvithylla",
        "longitude": 9.901465,
        "latitude": 63.565465
    },
    {
        "busStopId": 100999,
        "locationId": "16242122",
        "name": "Rein",
        "longitude": 9.923455,
        "latitude": 63.564482
    },
    {
        "busStopId": 101000,
        "locationId": "16242121",
        "name": "Torvet",
        "longitude": 9.924111,
        "latitude": 63.551777
    },
    {
        "busStopId": 101001,
        "locationId": "16242120",
        "name": "Esvikflata",
        "longitude": 9.924875,
        "latitude": 63.53797
    },
    {
        "busStopId": 101002,
        "locationId": "16242119",
        "name": "Skogen",
        "longitude": 9.92889,
        "latitude": 63.529211
    },
    {
        "busStopId": 101003,
        "locationId": "16242117",
        "name": "Slættet",
        "longitude": 9.934253,
        "latitude": 63.51004
    },
    {
        "busStopId": 101004,
        "locationId": "16242116",
        "name": "Brørskift",
        "longitude": 9.957627,
        "latitude": 63.500354
    },
    {
        "busStopId": 101005,
        "locationId": "16242115",
        "name": "Grønning",
        "longitude": 9.980157,
        "latitude": 63.500174
    },
    {
        "busStopId": 101006,
        "locationId": "16242114",
        "name": "Buan",
        "longitude": 9.993254,
        "latitude": 63.498382
    },
    {
        "busStopId": 101007,
        "locationId": "16242113",
        "name": "Hopla",
        "longitude": 9.932286,
        "latitude": 63.570332
    },
    {
        "busStopId": 101008,
        "locationId": "16242112",
        "name": "Stadsbygd kirke",
        "longitude": 10.008786,
        "latitude": 63.499043
    },
    {
        "busStopId": 101009,
        "locationId": "16242111",
        "name": "Stadsbygd sentrum",
        "longitude": 10.017895,
        "latitude": 63.510745
    },
    {
        "busStopId": 101010,
        "locationId": "16538220",
        "name": "Hesttrøa",
        "longitude": 10.332045,
        "latitude": 63.294678
    },
    {
        "busStopId": 101011,
        "locationId": "16538006",
        "name": "Melhus skysstasjon",
        "longitude": 10.278281,
        "latitude": 63.28466
    },
    {
        "busStopId": 101012,
        "locationId": "16533035",
        "name": "Vollagjerdet",
        "longitude": 10.241863,
        "latitude": 63.094353
    },
    {
        "busStopId": 101013,
        "locationId": "16533034",
        "name": "Vollan",
        "longitude": 10.241639,
        "latitude": 63.098698
    },
    {
        "busStopId": 101014,
        "locationId": "16533032",
        "name": "Fossbakken",
        "longitude": 10.243013,
        "latitude": 63.12487
    },
    {
        "busStopId": 101015,
        "locationId": "16533031",
        "name": "Fossløkken",
        "longitude": 10.244262,
        "latitude": 63.127716
    },
    {
        "busStopId": 101016,
        "locationId": "16389218",
        "name": "Orkdal barnehage",
        "longitude": 9.85892,
        "latitude": 63.310442
    },
    {
        "busStopId": 101017,
        "locationId": "16386218",
        "name": "Orkdal Barnehage",
        "longitude": 9.85839,
        "latitude": 63.310293
    },
    {
        "busStopId": 101018,
        "locationId": "16386216",
        "name": "Norpark",
        "longitude": 9.852264,
        "latitude": 63.308239
    },
    {
        "busStopId": 101019,
        "locationId": "16386168",
        "name": "Orkanger Skysstasjon",
        "longitude": 9.847566,
        "latitude": 63.298222
    },
    {
        "busStopId": 101020,
        "locationId": "16386165",
        "name": "Hov",
        "longitude": 9.854743,
        "latitude": 63.309111
    },
    {
        "busStopId": 101021,
        "locationId": "16386092",
        "name": "Orkanger skole",
        "longitude": 9.850306,
        "latitude": 63.306572
    },
    {
        "busStopId": 101022,
        "locationId": "16346420",
        "name": "Oppdal stasjon",
        "longitude": 9.69522,
        "latitude": 62.593661
    },
    {
        "busStopId": 101023,
        "locationId": "16011779",
        "name": "Kalvskinnet",
        "longitude": 10.379584,
        "latitude": 63.430265
    },
    {
        "busStopId": 101024,
        "locationId": "16011740",
        "name": "Belvedere",
        "longitude": 10.376305,
        "latitude": 63.416238
    },
    {
        "busStopId": 101025,
        "locationId": "16011724",
        "name": "Hospitalskirka",
        "longitude": 10.384534,
        "latitude": 63.430289
    },
    {
        "busStopId": 101026,
        "locationId": "16483240",
        "name": "Soknedal",
        "longitude": 10.189608,
        "latitude": 62.948692
    },
    {
        "busStopId": 101027,
        "locationId": "16483236",
        "name": "Storøyen",
        "longitude": 10.192618,
        "latitude": 62.966486
    },
    {
        "busStopId": 101028,
        "locationId": "16483234",
        "name": "Snøan",
        "longitude": 10.244639,
        "latitude": 62.986861
    },
    {
        "busStopId": 101029,
        "locationId": "16483232",
        "name": "Skjerliløkken",
        "longitude": 10.245151,
        "latitude": 62.993634
    },
    {
        "busStopId": 101030,
        "locationId": "16483230",
        "name": "Øverøyen",
        "longitude": 10.239546,
        "latitude": 62.997068
    },
    {
        "busStopId": 101031,
        "locationId": "16483228",
        "name": "Nerøyen",
        "longitude": 10.238153,
        "latitude": 63.000938
    },
    {
        "busStopId": 101032,
        "locationId": "16483224",
        "name": "Storløkken",
        "longitude": 10.254368,
        "latitude": 63.026803
    },
    {
        "busStopId": 101033,
        "locationId": "16483222",
        "name": "Liaøyen",
        "longitude": 10.246597,
        "latitude": 63.014752
    },
    {
        "busStopId": 101034,
        "locationId": "16483220",
        "name": "Soknes",
        "longitude": 10.274032,
        "latitude": 63.034348
    },
    {
        "busStopId": 101035,
        "locationId": "16483207",
        "name": "Støren sentrum",
        "longitude": 10.282611,
        "latitude": 63.047868
    },
    {
        "busStopId": 101036,
        "locationId": "16483205",
        "name": "Støren stasjon",
        "longitude": 10.284713,
        "latitude": 63.051565
    },
    {
        "busStopId": 101037,
        "locationId": "16483201",
        "name": "Hage bru",
        "longitude": 10.287129,
        "latitude": 63.066571
    },
    {
        "busStopId": 101038,
        "locationId": "16386137",
        "name": "Ellingsgården",
        "longitude": 9.38761,
        "latitude": 63.228738
    },
    {
        "busStopId": 101039,
        "locationId": "16386136",
        "name": "Søvassli Ungdomssenter",
        "longitude": 9.429903,
        "latitude": 63.230628
    },
    {
        "busStopId": 101040,
        "locationId": "16386135",
        "name": "Bjørkøybekk",
        "longitude": 9.50387,
        "latitude": 63.239548
    },
    {
        "busStopId": 101041,
        "locationId": "16386134",
        "name": "Høgkjølen",
        "longitude": 9.542704,
        "latitude": 63.233257
    },
    {
        "busStopId": 101042,
        "locationId": "16638305",
        "name": "Vikhammer",
        "longitude": 10.625749,
        "latitude": 63.437219
    },
    {
        "busStopId": 101043,
        "locationId": "16638304",
        "name": "Hansensvingen",
        "longitude": 10.613478,
        "latitude": 63.435411
    },
    {
        "busStopId": 101044,
        "locationId": "16638303",
        "name": "Saksvik",
        "longitude": 10.603633,
        "latitude": 63.437452
    },
    {
        "busStopId": 101045,
        "locationId": "16638302",
        "name": "Hundhamaren",
        "longitude": 10.597803,
        "latitude": 63.438979
    },
    {
        "busStopId": 101046,
        "locationId": "16638301",
        "name": "Sjølyst",
        "longitude": 10.591613,
        "latitude": 63.437263
    },
    {
        "busStopId": 101047,
        "locationId": "16632033",
        "name": "Hommelvik bomstasjon",
        "longitude": 10.821546,
        "latitude": 63.413099
    },
    {
        "busStopId": 101048,
        "locationId": "16632032",
        "name": "Svebergkrysset",
        "longitude": 10.757317,
        "latitude": 63.41908
    },
    {
        "busStopId": 101049,
        "locationId": "16632031",
        "name": "Leistadkrysset",
        "longitude": 10.630412,
        "latitude": 63.422248
    },
    {
        "busStopId": 101050,
        "locationId": "16632029",
        "name": "Muruvik",
        "longitude": 10.835829,
        "latitude": 63.432109
    },
    {
        "busStopId": 101051,
        "locationId": "16632028",
        "name": "Hommelvikhøgda",
        "longitude": 10.81515,
        "latitude": 63.426914
    },
    {
        "busStopId": 101052,
        "locationId": "16632027",
        "name": "Solbakken",
        "longitude": 10.810955,
        "latitude": 63.421697
    },
    {
        "busStopId": 101053,
        "locationId": "16632026",
        "name": "Smeplassen",
        "longitude": 10.812365,
        "latitude": 63.416745
    },
    {
        "busStopId": 101054,
        "locationId": "16010679",
        "name": "Trollahaugen 10",
        "longitude": 10.300487,
        "latitude": 63.451308
    },
    {
        "busStopId": 101055,
        "locationId": "16010678",
        "name": "Trollahaugen 46",
        "longitude": 10.302643,
        "latitude": 63.45197
    },
    {
        "busStopId": 101056,
        "locationId": "16010651",
        "name": "Heggstadmyra",
        "longitude": 10.35471,
        "latitude": 63.334347
    },
    {
        "busStopId": 101057,
        "locationId": "16010649",
        "name": "Tempe kirke",
        "longitude": 10.399437,
        "latitude": 63.411643
    },
    {
        "busStopId": 101058,
        "locationId": "16010639",
        "name": "By",
        "longitude": 10.155382,
        "latitude": 63.425788
    },
    {
        "busStopId": 101059,
        "locationId": "16010635",
        "name": "Ringvål grind",
        "longitude": 10.255778,
        "latitude": 63.355412
    },
    {
        "busStopId": 101060,
        "locationId": "16010577",
        "name": "Åsveien skole",
        "longitude": 10.365831,
        "latitude": 63.415117
    },
    {
        "busStopId": 101061,
        "locationId": "16010556",
        "name": "Vådanvegen 5",
        "longitude": 10.331821,
        "latitude": 63.393987
    },
    {
        "busStopId": 101063,
        "locationId": "16010537",
        "name": "Tonstadkrysset 4",
        "longitude": 10.381506,
        "latitude": 63.370345
    },
    {
        "busStopId": 101064,
        "locationId": "16010536",
        "name": "Tonstadkrysset 3",
        "longitude": 10.37626,
        "latitude": 63.369049
    },
    {
        "busStopId": 101065,
        "locationId": "16010502",
        "name": "Fossegrenda",
        "longitude": 10.397056,
        "latitude": 63.389549
    },
    {
        "busStopId": 101066,
        "locationId": "16010484",
        "name": "Søndre Risvolltun",
        "longitude": 10.42768,
        "latitude": 63.395636
    },
    {
        "busStopId": 101067,
        "locationId": "16010445",
        "name": "Martin Stokkens v.",
        "longitude": 10.369873,
        "latitude": 63.391955
    },
    {
        "busStopId": 101068,
        "locationId": "16010395",
        "name": "Risvollveien",
        "longitude": 10.423476,
        "latitude": 63.394486
    },
    {
        "busStopId": 101069,
        "locationId": "16010379",
        "name": "Sørberg",
        "longitude": 10.174238,
        "latitude": 63.372004
    },
    {
        "busStopId": 101070,
        "locationId": "16011452",
        "name": "Sluppenvegen",
        "longitude": 10.389852,
        "latitude": 63.397455
    },
    {
        "busStopId": 101071,
        "locationId": "16011451",
        "name": "Sluppen bru",
        "longitude": 10.38474,
        "latitude": 63.394293
    },
    {
        "busStopId": 101072,
        "locationId": "16011449",
        "name": "Skyttervegen",
        "longitude": 10.351287,
        "latitude": 63.360564
    },
    {
        "busStopId": 101073,
        "locationId": "16011448",
        "name": "Skytterbanen",
        "longitude": 10.343166,
        "latitude": 63.358368
    },
    {
        "busStopId": 101074,
        "locationId": "16011447",
        "name": "Skovgård",
        "longitude": 10.494901,
        "latitude": 63.429212
    },
    {
        "busStopId": 101075,
        "locationId": "16011446",
        "name": "HVS",
        "longitude": 10.350658,
        "latitude": 63.365876
    },
    {
        "busStopId": 101076,
        "locationId": "16011444",
        "name": "Skavlans veg",
        "longitude": 10.34304,
        "latitude": 63.403701
    },
    {
        "busStopId": 101077,
        "locationId": "16011443",
        "name": "Kvenildsmyra",
        "longitude": 10.369226,
        "latitude": 63.335153
    },
    {
        "busStopId": 101078,
        "locationId": "16011442",
        "name": "Skansen",
        "longitude": 10.37184,
        "latitude": 63.429738
    },
    {
        "busStopId": 101079,
        "locationId": "16011441",
        "name": "Sivert Thonstads v.",
        "longitude": 10.368741,
        "latitude": 63.358952
    },
    {
        "busStopId": 101080,
        "locationId": "16011440",
        "name": "Sildråpevegen",
        "longitude": 10.465229,
        "latitude": 63.416001
    },
    {
        "busStopId": 101081,
        "locationId": "16011438",
        "name": "Siemens",
        "longitude": 10.399113,
        "latitude": 63.403898
    },
    {
        "busStopId": 101082,
        "locationId": "16011437",
        "name": "Djupmyra",
        "longitude": 10.374859,
        "latitude": 63.342098
    },
    {
        "busStopId": 101083,
        "locationId": "16011436",
        "name": "Selsbakkflata",
        "longitude": 10.365462,
        "latitude": 63.388793
    },
    {
        "busStopId": 101084,
        "locationId": "16011435",
        "name": "Selsbakk",
        "longitude": 10.37891,
        "latitude": 63.388889
    },
    {
        "busStopId": 101085,
        "locationId": "16011064",
        "name": "Bratsbergvegen",
        "longitude": 10.397398,
        "latitude": 63.405225
    },
    {
        "busStopId": 101086,
        "locationId": "16011063",
        "name": "Brøsetvegen 168",
        "longitude": 10.444227,
        "latitude": 63.411832
    },
    {
        "busStopId": 101087,
        "locationId": "16011061",
        "name": "Blakli",
        "longitude": 10.438046,
        "latitude": 63.393665
    },
    {
        "busStopId": 101088,
        "locationId": "16011060",
        "name": "Bjørndalsbrua",
        "longitude": 10.364025,
        "latitude": 63.370808
    },
    {
        "busStopId": 101089,
        "locationId": "16011059",
        "name": "Bjørkmyr",
        "longitude": 10.435073,
        "latitude": 63.379299
    },
    {
        "busStopId": 101090,
        "locationId": "16011058",
        "name": "Biologen",
        "longitude": 10.347281,
        "latitude": 63.4403
    },
    {
        "busStopId": 101091,
        "locationId": "16011053",
        "name": "Bekkasinvegen",
        "longitude": 10.346427,
        "latitude": 63.346975
    },
    {
        "busStopId": 101092,
        "locationId": "16011052",
        "name": "Strindheim skole",
        "longitude": 10.456183,
        "latitude": 63.433222
    },
    {
        "busStopId": 101093,
        "locationId": "16011051",
        "name": "Baklia",
        "longitude": 10.322631,
        "latitude": 63.416154
    },
    {
        "busStopId": 101094,
        "locationId": "16011050",
        "name": "Bakkegata",
        "longitude": 10.407243,
        "latitude": 63.43239
    },
    {
        "busStopId": 101095,
        "locationId": "16011049",
        "name": "Bjørndalstoppen",
        "longitude": 10.356515,
        "latitude": 63.370551
    },
    {
        "busStopId": 101096,
        "locationId": "16010446",
        "name": "HVS",
        "longitude": 10.350317,
        "latitude": 63.365868
    },
    {
        "busStopId": 101097,
        "locationId": "16010444",
        "name": "Skavlans veg",
        "longitude": 10.341971,
        "latitude": 63.403138
    },
    {
        "busStopId": 101098,
        "locationId": "16010442",
        "name": "Skansen",
        "longitude": 10.373574,
        "latitude": 63.43006
    },
    {
        "busStopId": 101099,
        "locationId": "16010441",
        "name": "Sivert Thonstads v.",
        "longitude": 10.368472,
        "latitude": 63.358658
    },
    {
        "busStopId": 101100,
        "locationId": "16010440",
        "name": "Sildråpevegen",
        "longitude": 10.46522,
        "latitude": 63.415848
    },
    {
        "busStopId": 101101,
        "locationId": "16010439",
        "name": "Sig.Berg alle",
        "longitude": 10.422065,
        "latitude": 63.43147
    },
    {
        "busStopId": 101102,
        "locationId": "16010438",
        "name": "Siemens",
        "longitude": 10.398835,
        "latitude": 63.403766
    },
    {
        "busStopId": 101103,
        "locationId": "16010437",
        "name": "Djupmyra",
        "longitude": 10.373664,
        "latitude": 63.341401
    },
    {
        "busStopId": 101104,
        "locationId": "16010436",
        "name": "Selsbakkflata",
        "longitude": 10.365301,
        "latitude": 63.388849
    },
    {
        "busStopId": 101105,
        "locationId": "16010435",
        "name": "Selsbakk",
        "longitude": 10.380851,
        "latitude": 63.390434
    },
    {
        "busStopId": 101106,
        "locationId": "16010434",
        "name": "Fossegrenda",
        "longitude": 10.398997,
        "latitude": 63.389115
    },
    {
        "busStopId": 101107,
        "locationId": "16010433",
        "name": "Schiøtz' vei",
        "longitude": 10.355599,
        "latitude": 63.425825
    },
    {
        "busStopId": 101108,
        "locationId": "16010432",
        "name": "Moholt Storsenter",
        "longitude": 10.440085,
        "latitude": 63.409882
    },
    {
        "busStopId": 101109,
        "locationId": "16010431",
        "name": "Saupstad Senter",
        "longitude": 10.348646,
        "latitude": 63.366935
    },
    {
        "busStopId": 101110,
        "locationId": "16010430",
        "name": "Saupstadringen 109",
        "longitude": 10.344298,
        "latitude": 63.362014
    },
    {
        "busStopId": 101111,
        "locationId": "16010427",
        "name": "Sandbakken",
        "longitude": 10.362327,
        "latitude": 63.339922
    },
    {
        "busStopId": 101112,
        "locationId": "16010072",
        "name": "Brøset Hageby",
        "longitude": 10.449392,
        "latitude": 63.421637
    },
    {
        "busStopId": 101113,
        "locationId": "16010071",
        "name": "Brundalen skole",
        "longitude": 10.484804,
        "latitude": 63.419454
    },
    {
        "busStopId": 101114,
        "locationId": "16010070",
        "name": "Brundalen",
        "longitude": 10.485576,
        "latitude": 63.417372
    },
    {
        "busStopId": 101115,
        "locationId": "16010069",
        "name": "Bromstadsvingen",
        "longitude": 10.459363,
        "latitude": 63.427452
    },
    {
        "busStopId": 101116,
        "locationId": "16010068",
        "name": "Brænne",
        "longitude": 10.326278,
        "latitude": 63.446834
    },
    {
        "busStopId": 101117,
        "locationId": "16010067",
        "name": "Breidablikk sk.",
        "longitude": 10.364834,
        "latitude": 63.347752
    },
    {
        "busStopId": 101118,
        "locationId": "16010064",
        "name": "Bratsbergvegen",
        "longitude": 10.395942,
        "latitude": 63.403355
    },
    {
        "busStopId": 101119,
        "locationId": "16010062",
        "name": "Kvilhaugen",
        "longitude": 10.424536,
        "latitude": 63.42273
    },
    {
        "busStopId": 101120,
        "locationId": "16010061",
        "name": "Blakli",
        "longitude": 10.439016,
        "latitude": 63.394212
    },
    {
        "busStopId": 101121,
        "locationId": "16010060",
        "name": "Bjørndalsbrua",
        "longitude": 10.363756,
        "latitude": 63.370937
    },
    {
        "busStopId": 101122,
        "locationId": "16010059",
        "name": "Bjørkmyr",
        "longitude": 10.434902,
        "latitude": 63.379504
    },
    {
        "busStopId": 101123,
        "locationId": "16010058",
        "name": "Biologen",
        "longitude": 10.347739,
        "latitude": 63.440127
    },
    {
        "busStopId": 101124,
        "locationId": "16010057",
        "name": "Bowling 1",
        "longitude": 10.349212,
        "latitude": 63.330746
    },
    {
        "busStopId": 101125,
        "locationId": "16010056",
        "name": "Birkehaug",
        "longitude": 10.448619,
        "latitude": 63.454383
    },
    {
        "busStopId": 101126,
        "locationId": "16010053",
        "name": "Bekkasinvegen",
        "longitude": 10.345708,
        "latitude": 63.346882
    },
    {
        "busStopId": 101127,
        "locationId": "16010052",
        "name": "Strindheim skole",
        "longitude": 10.455528,
        "latitude": 63.432438
    },
    {
        "busStopId": 101128,
        "locationId": "16647127",
        "name": "Tuset",
        "longitude": 11.295776,
        "latitude": 63.10952
    },
    {
        "busStopId": 101129,
        "locationId": "16647126",
        "name": "Flaknan",
        "longitude": 11.308163,
        "latitude": 63.111178
    },
    {
        "busStopId": 101130,
        "locationId": "16647124",
        "name": "Rotla bru",
        "longitude": 11.1899,
        "latitude": 63.183887
    },
    {
        "busStopId": 101131,
        "locationId": "16647123",
        "name": "Rolset",
        "longitude": 11.184196,
        "latitude": 63.189653
    },
    {
        "busStopId": 101132,
        "locationId": "16647122",
        "name": "Rønsberg",
        "longitude": 11.166885,
        "latitude": 63.189718
    },
    {
        "busStopId": 101133,
        "locationId": "16647121",
        "name": "Hyttbakken",
        "longitude": 11.133917,
        "latitude": 63.201854
    },
    {
        "busStopId": 101134,
        "locationId": "16647120",
        "name": "Lilleevjen",
        "longitude": 11.104596,
        "latitude": 63.205819
    },
    {
        "busStopId": 101135,
        "locationId": "16647119",
        "name": "Evjegjerdet",
        "longitude": 11.094203,
        "latitude": 63.205624
    },
    {
        "busStopId": 101136,
        "locationId": "16647118",
        "name": "Røsetlåven",
        "longitude": 11.073083,
        "latitude": 63.205778
    },
    {
        "busStopId": 101137,
        "locationId": "16647117",
        "name": "Berge",
        "longitude": 11.059348,
        "latitude": 63.20675
    },
    {
        "busStopId": 101138,
        "locationId": "16647116",
        "name": "Kulsetvegen",
        "longitude": 11.054039,
        "latitude": 63.207034
    },
    {
        "busStopId": 101139,
        "locationId": "16647113",
        "name": "Marienborg",
        "longitude": 11.031869,
        "latitude": 63.224683
    },
    {
        "busStopId": 101140,
        "locationId": "16647112",
        "name": "Botnlia",
        "longitude": 11.036046,
        "latitude": 63.231222
    },
    {
        "busStopId": 101141,
        "locationId": "16647111",
        "name": "Eidemsvik",
        "longitude": 11.049503,
        "latitude": 63.239916
    },
    {
        "busStopId": 101142,
        "locationId": "16647109",
        "name": "Eidem",
        "longitude": 11.067451,
        "latitude": 63.240502
    },
    {
        "busStopId": 101143,
        "locationId": "16647108",
        "name": "Borsetmoen",
        "longitude": 11.084519,
        "latitude": 63.241635
    },
    {
        "busStopId": 101144,
        "locationId": "16367225",
        "name": "Å sentrum",
        "longitude": 9.740819,
        "latitude": 62.98505
    },
    {
        "busStopId": 101145,
        "locationId": "16367223",
        "name": "Kjerstad",
        "longitude": 9.714346,
        "latitude": 63.015498
    },
    {
        "busStopId": 101146,
        "locationId": "16367222",
        "name": "Muan",
        "longitude": 9.711381,
        "latitude": 63.025914
    },
    {
        "busStopId": 101147,
        "locationId": "16367221",
        "name": "Sybrua",
        "longitude": 9.708327,
        "latitude": 63.032796
    },
    {
        "busStopId": 101148,
        "locationId": "16367219",
        "name": "Meldal rutebilstasjon",
        "longitude": 9.71325,
        "latitude": 63.044261
    },
    {
        "busStopId": 101149,
        "locationId": "16367218",
        "name": "Meldal sentrum",
        "longitude": 9.713393,
        "latitude": 63.046737
    },
    {
        "busStopId": 101150,
        "locationId": "16367217",
        "name": "Meldal Bygdemuseum",
        "longitude": 9.708803,
        "latitude": 63.051419
    },
    {
        "busStopId": 101151,
        "locationId": "16367216",
        "name": "Bergslia",
        "longitude": 9.702443,
        "latitude": 63.053531
    },
    {
        "busStopId": 101152,
        "locationId": "16367214",
        "name": "Midtskogen",
        "longitude": 9.700161,
        "latitude": 63.086348
    },
    {
        "busStopId": 101153,
        "locationId": "16367213",
        "name": "Varsmoen",
        "longitude": 9.696945,
        "latitude": 63.092621
    },
    {
        "busStopId": 101154,
        "locationId": "16367212",
        "name": "Autosletta",
        "longitude": 9.695193,
        "latitude": 63.094597
    },
    {
        "busStopId": 101155,
        "locationId": "16367211",
        "name": "Trongbakken",
        "longitude": 9.693145,
        "latitude": 63.098365
    },
    {
        "busStopId": 101156,
        "locationId": "16367210",
        "name": "Myråsveien",
        "longitude": 9.698391,
        "latitude": 63.103933
    },
    {
        "busStopId": 101157,
        "locationId": "16367209",
        "name": "Meldal Vgs",
        "longitude": 9.70044,
        "latitude": 63.106749
    },
    {
        "busStopId": 101158,
        "locationId": "16367208",
        "name": "Løvby",
        "longitude": 9.69982,
        "latitude": 63.112356
    },
    {
        "busStopId": 101159,
        "locationId": "16367207",
        "name": "Skåveien",
        "longitude": 9.699999,
        "latitude": 63.115906
    },
    {
        "busStopId": 101160,
        "locationId": "16242148",
        "name": "Hasselbrua",
        "longitude": 9.858525,
        "latitude": 63.64409
    },
    {
        "busStopId": 101161,
        "locationId": "16242147",
        "name": "Fevåg/Hasselvika skole",
        "longitude": 9.841942,
        "latitude": 63.636947
    },
    {
        "busStopId": 101162,
        "locationId": "16242146",
        "name": "Hasselvika",
        "longitude": 9.827713,
        "latitude": 63.632104
    },
    {
        "busStopId": 101163,
        "locationId": "16242145",
        "name": "Sørvika",
        "longitude": 9.845446,
        "latitude": 63.613661
    },
    {
        "busStopId": 101164,
        "locationId": "16242144",
        "name": "Årlotten",
        "longitude": 9.847126,
        "latitude": 63.607792
    },
    {
        "busStopId": 101165,
        "locationId": "16242141",
        "name": "Skaugabrua",
        "longitude": 9.918209,
        "latitude": 63.593481
    },
    {
        "busStopId": 101166,
        "locationId": "16242140",
        "name": "Uddu",
        "longitude": 9.924983,
        "latitude": 63.588535
    },
    {
        "busStopId": 101167,
        "locationId": "16242139",
        "name": "Rødsjøen",
        "longitude": 10.217429,
        "latitude": 63.77917
    },
    {
        "busStopId": 101168,
        "locationId": "16242138",
        "name": "Øyan",
        "longitude": 10.237039,
        "latitude": 63.754491
    },
    {
        "busStopId": 101169,
        "locationId": "16242137",
        "name": "Skiheisen",
        "longitude": 10.234659,
        "latitude": 63.714722
    },
    {
        "busStopId": 101170,
        "locationId": "16242136",
        "name": "Hogsdalen",
        "longitude": 10.239501,
        "latitude": 63.6983
    },
    {
        "busStopId": 101171,
        "locationId": "16242135",
        "name": "Olsøya",
        "longitude": 10.212677,
        "latitude": 63.673666
    },
    {
        "busStopId": 101172,
        "locationId": "16242134",
        "name": "Staurset",
        "longitude": 10.189689,
        "latitude": 63.666283
    },
    {
        "busStopId": 101173,
        "locationId": "16242133",
        "name": "Einbakkbrua",
        "longitude": 10.159155,
        "latitude": 63.657798
    },
    {
        "busStopId": 101174,
        "locationId": "16242131",
        "name": "Seterbrua",
        "longitude": 10.094827,
        "latitude": 63.641211
    },
    {
        "busStopId": 101175,
        "locationId": "16242130",
        "name": "Fossbrua",
        "longitude": 10.044279,
        "latitude": 63.623828
    },
    {
        "busStopId": 101176,
        "locationId": "16538525",
        "name": "Lundamo skole",
        "longitude": 10.289672,
        "latitude": 63.153026
    },
    {
        "busStopId": 101177,
        "locationId": "16538524",
        "name": "Lund",
        "longitude": 10.297029,
        "latitude": 63.159557
    },
    {
        "busStopId": 101178,
        "locationId": "16538523",
        "name": "Kjelstad",
        "longitude": 10.304718,
        "latitude": 63.16326
    },
    {
        "busStopId": 101179,
        "locationId": "16538522",
        "name": "Løhre",
        "longitude": 10.313127,
        "latitude": 63.167846
    },
    {
        "busStopId": 101180,
        "locationId": "16538521",
        "name": "Skjetnemyrbakken",
        "longitude": 10.316882,
        "latitude": 63.177454
    },
    {
        "busStopId": 101181,
        "locationId": "16538520",
        "name": "Møstad",
        "longitude": 10.313603,
        "latitude": 63.185321
    },
    {
        "busStopId": 101182,
        "locationId": "16538519",
        "name": "Krekabakken",
        "longitude": 10.308689,
        "latitude": 63.190492
    },
    {
        "busStopId": 101183,
        "locationId": "16538517",
        "name": "Nyhus",
        "longitude": 10.306596,
        "latitude": 63.213605
    },
    {
        "busStopId": 101184,
        "locationId": "16538516",
        "name": "Storstein",
        "longitude": 10.301448,
        "latitude": 63.220061
    },
    {
        "busStopId": 101185,
        "locationId": "16538515",
        "name": "Kvål",
        "longitude": 10.28156,
        "latitude": 63.230397
    },
    {
        "busStopId": 101186,
        "locationId": "16538514",
        "name": "Øya gård",
        "longitude": 10.277158,
        "latitude": 63.236295
    },
    {
        "busStopId": 101187,
        "locationId": "16538513",
        "name": "Skjerdingstad",
        "longitude": 10.27529,
        "latitude": 63.246314
    },
    {
        "busStopId": 101188,
        "locationId": "16538512",
        "name": "Hofstadsanden",
        "longitude": 10.278649,
        "latitude": 63.251194
    },
    {
        "busStopId": 101189,
        "locationId": "16538511",
        "name": "Søberg",
        "longitude": 10.285979,
        "latitude": 63.259619
    },
    {
        "busStopId": 101190,
        "locationId": "16538510",
        "name": "Søberg Sykehjem",
        "longitude": 10.288656,
        "latitude": 63.264299
    },
    {
        "busStopId": 101191,
        "locationId": "16538509",
        "name": "Melhus kirke",
        "longitude": 10.295178,
        "latitude": 63.271867
    },
    {
        "busStopId": 101192,
        "locationId": "16533009",
        "name": "Melhus kirke",
        "longitude": 10.2949,
        "latitude": 63.271047
    },
    {
        "busStopId": 101193,
        "locationId": "16489720",
        "name": "Gullvåg camping",
        "longitude": 10.141737,
        "latitude": 62.917589
    },
    {
        "busStopId": 101194,
        "locationId": "16489718",
        "name": "Fossestua",
        "longitude": 10.190507,
        "latitude": 62.93846
    },
    {
        "busStopId": 101195,
        "locationId": "16489715",
        "name": "Storøyen",
        "longitude": 10.235907,
        "latitude": 62.982271
    },
    {
        "busStopId": 101196,
        "locationId": "16489712",
        "name": "Skjerliløkken",
        "longitude": 10.239114,
        "latitude": 62.99746
    },
    {
        "busStopId": 101197,
        "locationId": "16489708",
        "name": "Liøya",
        "longitude": 10.262273,
        "latitude": 63.029451
    },
    {
        "busStopId": 101198,
        "locationId": "16489705",
        "name": "Støren Rådhus (gamle E6)",
        "longitude": 10.284102,
        "latitude": 63.038592
    },
    {
        "busStopId": 101199,
        "locationId": "16489704",
        "name": "Støren Rådhus",
        "longitude": 10.285827,
        "latitude": 63.038739
    },
    {
        "busStopId": 101200,
        "locationId": "16489703",
        "name": "Støren sentrum",
        "longitude": 10.282584,
        "latitude": 63.047771
    },
    {
        "busStopId": 101201,
        "locationId": "16489702",
        "name": "Støren Stasjon",
        "longitude": 10.28483,
        "latitude": 63.051683
    },
    {
        "busStopId": 101202,
        "locationId": "16489701",
        "name": "Hage bru",
        "longitude": 10.287578,
        "latitude": 63.066901
    },
    {
        "busStopId": 101203,
        "locationId": "16483250",
        "name": "Garli",
        "longitude": 10.101834,
        "latitude": 62.890977
    },
    {
        "busStopId": 101204,
        "locationId": "16483248",
        "name": "Løkli",
        "longitude": 10.127633,
        "latitude": 62.90868
    },
    {
        "busStopId": 101205,
        "locationId": "16483246",
        "name": "Gullvåg camping",
        "longitude": 10.141584,
        "latitude": 62.917041
    },
    {
        "busStopId": 101206,
        "locationId": "16483244",
        "name": "Bjørset",
        "longitude": 10.15019,
        "latitude": 62.924144
    },
    {
        "busStopId": 101207,
        "locationId": "16483242",
        "name": "Fossestua",
        "longitude": 10.190111,
        "latitude": 62.938329
    },
    {
        "busStopId": 101208,
        "locationId": "16638326",
        "name": "Smeplassen",
        "longitude": 10.812105,
        "latitude": 63.416709
    },
    {
        "busStopId": 101209,
        "locationId": "16638325",
        "name": "Hommelvik st.",
        "longitude": 10.794345,
        "latitude": 63.411458
    },
    {
        "busStopId": 101210,
        "locationId": "16638322",
        "name": "Halstad",
        "longitude": 10.78096,
        "latitude": 63.41457
    },
    {
        "busStopId": 101211,
        "locationId": "16638321",
        "name": "Grønberg",
        "longitude": 10.776433,
        "latitude": 63.418128
    },
    {
        "busStopId": 101212,
        "locationId": "16638320",
        "name": "Blåhammaren",
        "longitude": 10.774124,
        "latitude": 63.425238
    },
    {
        "busStopId": 101213,
        "locationId": "16638319",
        "name": "Sandsiloen Rota",
        "longitude": 10.767045,
        "latitude": 63.429976
    },
    {
        "busStopId": 101214,
        "locationId": "16638318",
        "name": "Rota",
        "longitude": 10.760559,
        "latitude": 63.43153
    },
    {
        "busStopId": 101215,
        "locationId": "16638317",
        "name": "Stav",
        "longitude": 10.749555,
        "latitude": 63.432804
    },
    {
        "busStopId": 101216,
        "locationId": "16638316",
        "name": "Smiskaret",
        "longitude": 10.738227,
        "latitude": 63.432394
    },
    {
        "busStopId": 101217,
        "locationId": "16638315",
        "name": "Midtsandan",
        "longitude": 10.724726,
        "latitude": 63.431177
    },
    {
        "busStopId": 101218,
        "locationId": "16638313",
        "name": "Storsand",
        "longitude": 10.705592,
        "latitude": 63.431972
    },
    {
        "busStopId": 101219,
        "locationId": "16638312",
        "name": "Torp",
        "longitude": 10.69341,
        "latitude": 63.433849
    },
    {
        "busStopId": 101220,
        "locationId": "16638311",
        "name": "Haugan",
        "longitude": 10.673576,
        "latitude": 63.435745
    },
    {
        "busStopId": 101221,
        "locationId": "16638310",
        "name": "Malvik",
        "longitude": 10.657882,
        "latitude": 63.437938
    },
    {
        "busStopId": 101222,
        "locationId": "16638308",
        "name": "Naustkleiva",
        "longitude": 10.653274,
        "latitude": 63.440019
    },
    {
        "busStopId": 101223,
        "locationId": "16638306",
        "name": "Vikhammerløkka",
        "longitude": 10.63537,
        "latitude": 63.43938
    },
    {
        "busStopId": 101224,
        "locationId": "16386098",
        "name": "Sorenskrivergården",
        "longitude": 9.836579,
        "latitude": 63.280048
    },
    {
        "busStopId": 101225,
        "locationId": "16386097",
        "name": "Follo",
        "longitude": 9.839472,
        "latitude": 63.284196
    },
    {
        "busStopId": 101226,
        "locationId": "16386096",
        "name": "Evjen",
        "longitude": 9.842517,
        "latitude": 63.290075
    },
    {
        "busStopId": 101227,
        "locationId": "16386095",
        "name": "Orkdal Sykehus",
        "longitude": 9.844844,
        "latitude": 63.294003
    },
    {
        "busStopId": 101228,
        "locationId": "16386094",
        "name": "Orkanger Skysstasjon",
        "longitude": 9.847629,
        "latitude": 63.298355
    },
    {
        "busStopId": 101229,
        "locationId": "16386093",
        "name": "Rømme",
        "longitude": 9.847224,
        "latitude": 63.301536
    },
    {
        "busStopId": 101230,
        "locationId": "16386091",
        "name": "Hov",
        "longitude": 9.854465,
        "latitude": 63.309026
    },
    {
        "busStopId": 101231,
        "locationId": "16384855",
        "name": "Orkdal barnehage",
        "longitude": 9.858372,
        "latitude": 63.310329
    },
    {
        "busStopId": 101232,
        "locationId": "16384852",
        "name": "Orkdal barnehage",
        "longitude": 9.85892,
        "latitude": 63.310442
    },
    {
        "busStopId": 101233,
        "locationId": "16384027",
        "name": "AKS",
        "longitude": 9.900512,
        "latitude": 63.327186
    },
    {
        "busStopId": 101234,
        "locationId": "16011345",
        "name": "Okstadplassen",
        "longitude": 10.382252,
        "latitude": 63.378401
    },
    {
        "busStopId": 101235,
        "locationId": "16011344",
        "name": "Okstad skole",
        "longitude": 10.378704,
        "latitude": 63.381219
    },
    {
        "busStopId": 101236,
        "locationId": "16011293",
        "name": "Margretes gate",
        "longitude": 10.387768,
        "latitude": 63.423381
    },
    {
        "busStopId": 101237,
        "locationId": "16011277",
        "name": "Laugsand",
        "longitude": 10.433609,
        "latitude": 63.439416
    },
    {
        "busStopId": 101238,
        "locationId": "16011231",
        "name": "Korsen",
        "longitude": 10.339232,
        "latitude": 63.351504
    },
    {
        "busStopId": 101239,
        "locationId": "16011221",
        "name": "Klefstadbukta",
        "longitude": 10.171031,
        "latitude": 63.438577
    },
    {
        "busStopId": 101240,
        "locationId": "16011210",
        "name": "Høstadkorsen",
        "longitude": 10.158536,
        "latitude": 63.409983
    },
    {
        "busStopId": 101241,
        "locationId": "16011185",
        "name": "Langåsmyra",
        "longitude": 10.187892,
        "latitude": 63.435243
    },
    {
        "busStopId": 101242,
        "locationId": "16011164",
        "name": "Brattøra",
        "longitude": 10.406749,
        "latitude": 63.437404
    },
    {
        "busStopId": 101243,
        "locationId": "16011159",
        "name": "Grinden",
        "longitude": 10.16371,
        "latitude": 63.38297
    },
    {
        "busStopId": 101244,
        "locationId": "16011129",
        "name": "Ishallen",
        "longitude": 10.467215,
        "latitude": 63.42705
    },
    {
        "busStopId": 101245,
        "locationId": "16010714",
        "name": "Lauglo",
        "longitude": 10.232736,
        "latitude": 63.350875
    },
    {
        "busStopId": 101246,
        "locationId": "16010681",
        "name": "B. Olsens vei 40",
        "longitude": 10.30515,
        "latitude": 63.450497
    },
    {
        "busStopId": 101247,
        "locationId": "16010680",
        "name": "Trollahaugen 2",
        "longitude": 10.301062,
        "latitude": 63.450155
    },
    {
        "busStopId": 101248,
        "locationId": "16011469",
        "name": "Stor-Rosta",
        "longitude": 10.372406,
        "latitude": 63.363226
    },
    {
        "busStopId": 101249,
        "locationId": "16011468",
        "name": "Stokkan",
        "longitude": 10.482675,
        "latitude": 63.410964
    },
    {
        "busStopId": 101250,
        "locationId": "16011467",
        "name": "Stiklestadveien",
        "longitude": 10.431677,
        "latitude": 63.440919
    },
    {
        "busStopId": 101251,
        "locationId": "16011465",
        "name": "Steindalsvegen",
        "longitude": 10.428515,
        "latitude": 63.401139
    },
    {
        "busStopId": 101252,
        "locationId": "16011464",
        "name": "Stavsetsvingen",
        "longitude": 10.336671,
        "latitude": 63.383867
    },
    {
        "busStopId": 101253,
        "locationId": "16011463",
        "name": "Stavsetvegen",
        "longitude": 10.328227,
        "latitude": 63.389336
    },
    {
        "busStopId": 101254,
        "locationId": "16011461",
        "name": "Stubbanvegen",
        "longitude": 10.427123,
        "latitude": 63.385264
    },
    {
        "busStopId": 101255,
        "locationId": "16011460",
        "name": "Stabells veg",
        "longitude": 10.35868,
        "latitude": 63.404498
    },
    {
        "busStopId": 101256,
        "locationId": "16011459",
        "name": "Stavset senter",
        "longitude": 10.330293,
        "latitude": 63.387779
    },
    {
        "busStopId": 101257,
        "locationId": "16011458",
        "name": "Sorgenfri",
        "longitude": 10.403749,
        "latitude": 63.408145
    },
    {
        "busStopId": 101258,
        "locationId": "16011457",
        "name": "Sollia",
        "longitude": 10.428282,
        "latitude": 63.399249
    },
    {
        "busStopId": 101259,
        "locationId": "16011455",
        "name": "Solbakken bru",
        "longitude": 10.545341,
        "latitude": 63.397089
    },
    {
        "busStopId": 101260,
        "locationId": "16011454",
        "name": "Granåsen VM anlegg",
        "longitude": 10.316702,
        "latitude": 63.379343
    },
    {
        "busStopId": 101261,
        "locationId": "16011453",
        "name": "Flatåsen senter",
        "longitude": 10.345753,
        "latitude": 63.373542
    },
    {
        "busStopId": 101262,
        "locationId": "16011083",
        "name": "Cecilie Thoresens veg",
        "longitude": 10.440319,
        "latitude": 63.427348
    },
    {
        "busStopId": 101263,
        "locationId": "16011082",
        "name": "Casper Lundes v.",
        "longitude": 10.356722,
        "latitude": 63.367764
    },
    {
        "busStopId": 101264,
        "locationId": "16011080",
        "name": "CJ. Hambros vei",
        "longitude": 10.366612,
        "latitude": 63.35322
    },
    {
        "busStopId": 101265,
        "locationId": "16011079",
        "name": "Breidablikkveien",
        "longitude": 10.383078,
        "latitude": 63.411048
    },
    {
        "busStopId": 101266,
        "locationId": "16011077",
        "name": "Buran",
        "longitude": 10.425928,
        "latitude": 63.436516
    },
    {
        "busStopId": 101267,
        "locationId": "16011076",
        "name": "Bukkvollan",
        "longitude": 10.347649,
        "latitude": 63.407031
    },
    {
        "busStopId": 101268,
        "locationId": "16011075",
        "name": "Bugges veg",
        "longitude": 10.420592,
        "latitude": 63.414305
    },
    {
        "busStopId": 101269,
        "locationId": "16011073",
        "name": "Brøsetflata",
        "longitude": 10.455042,
        "latitude": 63.423654
    },
    {
        "busStopId": 101270,
        "locationId": "16011072",
        "name": "Brøset Hageby",
        "longitude": 10.450362,
        "latitude": 63.421942
    },
    {
        "busStopId": 101271,
        "locationId": "16011071",
        "name": "Brundalen skole",
        "longitude": 10.484804,
        "latitude": 63.419945
    },
    {
        "busStopId": 101272,
        "locationId": "16011070",
        "name": "Brundalen",
        "longitude": 10.485522,
        "latitude": 63.417891
    },
    {
        "busStopId": 101273,
        "locationId": "16011068",
        "name": "Brænne",
        "longitude": 10.327554,
        "latitude": 63.446212
    },
    {
        "busStopId": 101274,
        "locationId": "16011067",
        "name": "Breidablikk sk.",
        "longitude": 10.365732,
        "latitude": 63.348578
    },
    {
        "busStopId": 101275,
        "locationId": "16010463",
        "name": "Stavsetvegen",
        "longitude": 10.327913,
        "latitude": 63.388241
    },
    {
        "busStopId": 101276,
        "locationId": "16010462",
        "name": "Stavset",
        "longitude": 10.342888,
        "latitude": 63.385292
    },
    {
        "busStopId": 101277,
        "locationId": "16010461",
        "name": "Stubbanvegen",
        "longitude": 10.427374,
        "latitude": 63.385103
    },
    {
        "busStopId": 101278,
        "locationId": "16010460",
        "name": "Stabells veg",
        "longitude": 10.357917,
        "latitude": 63.403146
    },
    {
        "busStopId": 101279,
        "locationId": "16010459",
        "name": "Stavset senter",
        "longitude": 10.330302,
        "latitude": 63.387968
    },
    {
        "busStopId": 101280,
        "locationId": "16010458",
        "name": "Sorgenfri",
        "longitude": 10.403803,
        "latitude": 63.407666
    },
    {
        "busStopId": 101281,
        "locationId": "16010457",
        "name": "Sollia",
        "longitude": 10.428452,
        "latitude": 63.397451
    },
    {
        "busStopId": 101282,
        "locationId": "16010455",
        "name": "Solbakken bru",
        "longitude": 10.545134,
        "latitude": 63.396912
    },
    {
        "busStopId": 101283,
        "locationId": "16010454",
        "name": "Granåsen VM anlegg",
        "longitude": 10.317088,
        "latitude": 63.378747
    },
    {
        "busStopId": 101284,
        "locationId": "16010453",
        "name": "Flatåsen senter",
        "longitude": 10.345753,
        "latitude": 63.373542
    },
    {
        "busStopId": 101285,
        "locationId": "16010452",
        "name": "Sluppenvegen",
        "longitude": 10.389681,
        "latitude": 63.397519
    },
    {
        "busStopId": 101286,
        "locationId": "16010451",
        "name": "Sluppen bru",
        "longitude": 10.383204,
        "latitude": 63.393263
    },
    {
        "busStopId": 101287,
        "locationId": "16010450",
        "name": "Sluppen",
        "longitude": 10.39561,
        "latitude": 63.403404
    },
    {
        "busStopId": 101288,
        "locationId": "16010449",
        "name": "Skyttervegen",
        "longitude": 10.350155,
        "latitude": 63.361256
    },
    {
        "busStopId": 101289,
        "locationId": "16010448",
        "name": "Skytterbanen",
        "longitude": 10.343023,
        "latitude": 63.357941
    },
    {
        "busStopId": 101290,
        "locationId": "16010447",
        "name": "Skovgård",
        "longitude": 10.495763,
        "latitude": 63.428774
    },
    {
        "busStopId": 101291,
        "locationId": "16010096",
        "name": "Dalgård",
        "longitude": 10.336887,
        "latitude": 63.395419
    },
    {
        "busStopId": 101292,
        "locationId": "16010095",
        "name": "Dalen Hageby",
        "longitude": 10.449976,
        "latitude": 63.437223
    },
    {
        "busStopId": 101293,
        "locationId": "16010090",
        "name": "Biskop Sigurds gate",
        "longitude": 10.426772,
        "latitude": 63.437107
    },
    {
        "busStopId": 101294,
        "locationId": "16010088",
        "name": "City Syd Vestre",
        "longitude": 10.379305,
        "latitude": 63.361123
    },
    {
        "busStopId": 101295,
        "locationId": "16010087",
        "name": "Churchills veg",
        "longitude": 10.487867,
        "latitude": 63.429449
    },
    {
        "busStopId": 101296,
        "locationId": "16010085",
        "name": "Charlottenlund Nedre",
        "longitude": 10.492556,
        "latitude": 63.433346
    },
    {
        "busStopId": 101297,
        "locationId": "16010084",
        "name": "Cecilienborg",
        "longitude": 10.379458,
        "latitude": 63.41697
    },
    {
        "busStopId": 101298,
        "locationId": "16010083",
        "name": "Cecilie Thoresens veg",
        "longitude": 10.440472,
        "latitude": 63.427275
    },
    {
        "busStopId": 101299,
        "locationId": "16010082",
        "name": "Casper Lundes v.",
        "longitude": 10.358671,
        "latitude": 63.367861
    },
    {
        "busStopId": 101300,
        "locationId": "16010081",
        "name": "Sjetnmarka",
        "longitude": 10.398574,
        "latitude": 63.371292
    },
    {
        "busStopId": 101301,
        "locationId": "16010080",
        "name": "CJ. Hambros vei",
        "longitude": 10.366513,
        "latitude": 63.352833
    },
    {
        "busStopId": 101302,
        "locationId": "16010079",
        "name": "Breidablikkveien",
        "longitude": 10.382818,
        "latitude": 63.411024
    },
    {
        "busStopId": 101303,
        "locationId": "16010077",
        "name": "Buran",
        "longitude": 10.424913,
        "latitude": 63.436255
    },
    {
        "busStopId": 101304,
        "locationId": "16010076",
        "name": "Bukkvollan",
        "longitude": 10.348664,
        "latitude": 63.408209
    },
    {
        "busStopId": 101305,
        "locationId": "16010074",
        "name": "Buenget",
        "longitude": 10.357198,
        "latitude": 63.385002
    },
    {
        "busStopId": 101306,
        "locationId": "16010073",
        "name": "Brøsetflata",
        "longitude": 10.454548,
        "latitude": 63.423461
    },
    {
        "busStopId": 101307,
        "locationId": "16658427",
        "name": "Lian",
        "longitude": 11.614947,
        "latitude": 63.046757
    },
    {
        "busStopId": 101308,
        "locationId": "16658426",
        "name": "Svellmoen",
        "longitude": 11.603044,
        "latitude": 63.04817
    },
    {
        "busStopId": 101309,
        "locationId": "16658425",
        "name": "Henmoen",
        "longitude": 11.587468,
        "latitude": 63.050189
    },
    {
        "busStopId": 101310,
        "locationId": "16658424",
        "name": "Storaunet",
        "longitude": 11.568774,
        "latitude": 63.054879
    },
    {
        "busStopId": 101311,
        "locationId": "16658423",
        "name": "Gresslivoll",
        "longitude": 11.471729,
        "latitude": 63.055013
    },
    {
        "busStopId": 101312,
        "locationId": "16658422",
        "name": "Gressli",
        "longitude": 11.4506,
        "latitude": 63.059828
    },
    {
        "busStopId": 101313,
        "locationId": "16658421",
        "name": "Hillmo bru",
        "longitude": 11.435194,
        "latitude": 63.070628
    },
    {
        "busStopId": 101314,
        "locationId": "16658420",
        "name": "Hillmo",
        "longitude": 11.426534,
        "latitude": 63.079845
    },
    {
        "busStopId": 101315,
        "locationId": "16647162",
        "name": "Velve",
        "longitude": 11.084115,
        "latitude": 63.205134
    },
    {
        "busStopId": 101316,
        "locationId": "16647135",
        "name": "Skisenteret Selbuskogen",
        "longitude": 11.088795,
        "latitude": 63.338019
    },
    {
        "busStopId": 101317,
        "locationId": "16647134",
        "name": "Mebost",
        "longitude": 11.14979,
        "latitude": 63.197816
    },
    {
        "busStopId": 101318,
        "locationId": "16647133",
        "name": "Hallgotto",
        "longitude": 11.055315,
        "latitude": 63.240955
    },
    {
        "busStopId": 101319,
        "locationId": "16647132",
        "name": "Bårdsgård",
        "longitude": 11.158342,
        "latitude": 63.193789
    },
    {
        "busStopId": 101320,
        "locationId": "16647131",
        "name": "Vinsmyr",
        "longitude": 11.078132,
        "latitude": 63.341683
    },
    {
        "busStopId": 101321,
        "locationId": "16647130",
        "name": "Draksten",
        "longitude": 10.676226,
        "latitude": 63.283146
    },
    {
        "busStopId": 101322,
        "locationId": "16647128",
        "name": "Nekåbjørgen",
        "longitude": 11.355541,
        "latitude": 63.112587
    },
    {
        "busStopId": 101323,
        "locationId": "16386161",
        "name": "Bjørnbet",
        "longitude": 9.922153,
        "latitude": 63.43564
    },
    {
        "busStopId": 101324,
        "locationId": "16386159",
        "name": "Gjeitaveien",
        "longitude": 9.948177,
        "latitude": 63.426765
    },
    {
        "busStopId": 101325,
        "locationId": "16386156",
        "name": "Klomstein",
        "longitude": 9.954456,
        "latitude": 63.396224
    },
    {
        "busStopId": 101326,
        "locationId": "16386155",
        "name": "Haugnes",
        "longitude": 9.942976,
        "latitude": 63.37756
    },
    {
        "busStopId": 101327,
        "locationId": "16386151",
        "name": "Slettvollen",
        "longitude": 9.884918,
        "latitude": 63.344669
    },
    {
        "busStopId": 101328,
        "locationId": "16386150",
        "name": "Almlia",
        "longitude": 9.867365,
        "latitude": 63.339023
    },
    {
        "busStopId": 101329,
        "locationId": "16386149",
        "name": "Furen",
        "longitude": 9.854519,
        "latitude": 63.335197
    },
    {
        "busStopId": 101330,
        "locationId": "16386148",
        "name": "Reitan",
        "longitude": 9.822098,
        "latitude": 63.323556
    },
    {
        "busStopId": 101331,
        "locationId": "16386147",
        "name": "Gjølme",
        "longitude": 9.810142,
        "latitude": 63.315969
    },
    {
        "busStopId": 101332,
        "locationId": "16386145",
        "name": "Stokkhaugen Orkdal",
        "longitude": 9.630632,
        "latitude": 63.287014
    },
    {
        "busStopId": 101333,
        "locationId": "16386143",
        "name": "Harangen",
        "longitude": 9.664902,
        "latitude": 63.281627
    },
    {
        "busStopId": 101334,
        "locationId": "16386142",
        "name": "Osbrua Orkdal",
        "longitude": 9.696253,
        "latitude": 63.287103
    },
    {
        "busStopId": 101335,
        "locationId": "16386141",
        "name": "Annøl",
        "longitude": 9.762944,
        "latitude": 63.30422
    },
    {
        "busStopId": 101336,
        "locationId": "16386140",
        "name": "Storøya",
        "longitude": 9.774596,
        "latitude": 63.306391
    },
    {
        "busStopId": 101337,
        "locationId": "16386138",
        "name": "OTI-senteret",
        "longitude": 9.839858,
        "latitude": 63.306266
    },
    {
        "busStopId": 101338,
        "locationId": "16384131",
        "name": "Svorkmo",
        "longitude": 9.737648,
        "latitude": 63.170782
    },
    {
        "busStopId": 101339,
        "locationId": "16242181",
        "name": "Tjønnbakken",
        "longitude": 10.11212,
        "latitude": 63.595706
    },
    {
        "busStopId": 101340,
        "locationId": "16242180",
        "name": "Fylkesgrensa",
        "longitude": 10.134874,
        "latitude": 63.588487
    },
    {
        "busStopId": 101341,
        "locationId": "16242174",
        "name": "Vikan",
        "longitude": 10.150361,
        "latitude": 63.520264
    },
    {
        "busStopId": 101342,
        "locationId": "16242172",
        "name": "Rørvik fergeleie",
        "longitude": 10.139617,
        "latitude": 63.509543
    },
    {
        "busStopId": 101343,
        "locationId": "16242171",
        "name": "Årnset",
        "longitude": 9.958139,
        "latitude": 63.591719
    },
    {
        "busStopId": 101344,
        "locationId": "16242161",
        "name": "Råkvåg",
        "longitude": 10.067653,
        "latitude": 63.761164
    },
    {
        "busStopId": 101345,
        "locationId": "16242160",
        "name": "Ramsvika",
        "longitude": 10.087551,
        "latitude": 63.751289
    },
    {
        "busStopId": 101346,
        "locationId": "16242159",
        "name": "Mælan",
        "longitude": 10.132089,
        "latitude": 63.752568
    },
    {
        "busStopId": 101347,
        "locationId": "16242158",
        "name": "Husby",
        "longitude": 10.095141,
        "latitude": 63.743116
    },
    {
        "busStopId": 101348,
        "locationId": "16242157",
        "name": "Saga",
        "longitude": 10.065766,
        "latitude": 63.729298
    },
    {
        "busStopId": 101349,
        "locationId": "16242156",
        "name": "Tånnårvika",
        "longitude": 10.042608,
        "latitude": 63.716285
    },
    {
        "busStopId": 101350,
        "locationId": "16242155",
        "name": "Dalen",
        "longitude": 10.000127,
        "latitude": 63.712458
    },
    {
        "busStopId": 101351,
        "locationId": "16242153",
        "name": "Frengen Slip",
        "longitude": 9.960628,
        "latitude": 63.695951
    },
    {
        "busStopId": 101352,
        "locationId": "16242152",
        "name": "Frengen vegd.",
        "longitude": 9.913781,
        "latitude": 63.694856
    },
    {
        "busStopId": 101353,
        "locationId": "16242150",
        "name": "Fevåg vegdele",
        "longitude": 9.860421,
        "latitude": 63.67798
    },
    {
        "busStopId": 101354,
        "locationId": "16242149",
        "name": "Hårberg",
        "longitude": 9.840065,
        "latitude": 63.646515
    },
    {
        "busStopId": 101355,
        "locationId": "16574027",
        "name": "AKS",
        "longitude": 9.900512,
        "latitude": 63.327186
    },
    {
        "busStopId": 101356,
        "locationId": "16538540",
        "name": "Øysandkrysset",
        "longitude": 10.216998,
        "latitude": 63.323625
    },
    {
        "busStopId": 101357,
        "locationId": "16538539",
        "name": "Rostad",
        "longitude": 10.278685,
        "latitude": 63.069367
    },
    {
        "busStopId": 101358,
        "locationId": "16538538",
        "name": "Hage gartneri",
        "longitude": 10.265103,
        "latitude": 63.073358
    },
    {
        "busStopId": 101359,
        "locationId": "16538537",
        "name": "Gylløyen",
        "longitude": 10.255428,
        "latitude": 63.082277
    },
    {
        "busStopId": 101360,
        "locationId": "16538536",
        "name": "Gylland",
        "longitude": 10.249679,
        "latitude": 63.090337
    },
    {
        "busStopId": 101361,
        "locationId": "16538535",
        "name": "Vollagjerdet",
        "longitude": 10.241962,
        "latitude": 63.094353
    },
    {
        "busStopId": 101362,
        "locationId": "16538534",
        "name": "Vollan",
        "longitude": 10.242025,
        "latitude": 63.099385
    },
    {
        "busStopId": 101363,
        "locationId": "16538533",
        "name": "Fosskrysset",
        "longitude": 10.235503,
        "latitude": 63.109057
    },
    {
        "busStopId": 101364,
        "locationId": "16538532",
        "name": "Fossbakken",
        "longitude": 10.244846,
        "latitude": 63.122775
    },
    {
        "busStopId": 101365,
        "locationId": "16538531",
        "name": "Fossløkken",
        "longitude": 10.244926,
        "latitude": 63.128346
    },
    {
        "busStopId": 101366,
        "locationId": "16538530",
        "name": "Ler",
        "longitude": 10.301853,
        "latitude": 63.198059
    },
    {
        "busStopId": 101367,
        "locationId": "16538529",
        "name": "Horg kirke",
        "longitude": 10.253434,
        "latitude": 63.136648
    },
    {
        "busStopId": 101368,
        "locationId": "16538528",
        "name": "Horghaugen",
        "longitude": 10.259812,
        "latitude": 63.141786
    },
    {
        "busStopId": 101369,
        "locationId": "16538527",
        "name": "Misjonshuset",
        "longitude": 10.271247,
        "latitude": 63.14875
    },
    {
        "busStopId": 101370,
        "locationId": "16538526",
        "name": "Lundamo",
        "longitude": 10.281218,
        "latitude": 63.151667
    },
    {
        "busStopId": 101371,
        "locationId": "16533025",
        "name": "Lundamo skole",
        "longitude": 10.286905,
        "latitude": 63.152377
    },
    {
        "busStopId": 101372,
        "locationId": "16533024",
        "name": "Lund",
        "longitude": 10.297038,
        "latitude": 63.159748
    },
    {
        "busStopId": 101373,
        "locationId": "16533023",
        "name": "Kjelstad",
        "longitude": 10.303793,
        "latitude": 63.16296
    },
    {
        "busStopId": 101374,
        "locationId": "16533022",
        "name": "Løhre",
        "longitude": 10.312435,
        "latitude": 63.167335
    },
    {
        "busStopId": 101375,
        "locationId": "16533021",
        "name": "Skjetnemyrbakken",
        "longitude": 10.316675,
        "latitude": 63.17724
    },
    {
        "busStopId": 101376,
        "locationId": "16533020",
        "name": "Møstad",
        "longitude": 10.313216,
        "latitude": 63.18554
    },
    {
        "busStopId": 101377,
        "locationId": "16533019",
        "name": "Krekabakken",
        "longitude": 10.30841,
        "latitude": 63.19054
    },
    {
        "busStopId": 101378,
        "locationId": "16533018",
        "name": "Ler",
        "longitude": 10.301817,
        "latitude": 63.198067
    },
    {
        "busStopId": 101379,
        "locationId": "16533017",
        "name": "Nyhus",
        "longitude": 10.305814,
        "latitude": 63.213119
    },
    {
        "busStopId": 101380,
        "locationId": "16533016",
        "name": "Storstein",
        "longitude": 10.301269,
        "latitude": 63.219956
    },
    {
        "busStopId": 101381,
        "locationId": "16533015",
        "name": "Kvål",
        "longitude": 10.281865,
        "latitude": 63.230106
    },
    {
        "busStopId": 101382,
        "locationId": "16533014",
        "name": "Øya gård",
        "longitude": 10.277005,
        "latitude": 63.235879
    },
    {
        "busStopId": 101383,
        "locationId": "16533013",
        "name": "Skjerdingstad",
        "longitude": 10.275101,
        "latitude": 63.246395
    },
    {
        "busStopId": 101384,
        "locationId": "16533012",
        "name": "Hofstadsanden",
        "longitude": 10.278209,
        "latitude": 63.250956
    },
    {
        "busStopId": 101385,
        "locationId": "16533011",
        "name": "Søberg",
        "longitude": 10.285854,
        "latitude": 63.259
    },
    {
        "busStopId": 101386,
        "locationId": "16533010",
        "name": "Søberg Sykehjem",
        "longitude": 10.28924,
        "latitude": 63.265253
    },
    {
        "busStopId": 101387,
        "locationId": "16638333",
        "name": "Hommelvik bomstasjon",
        "longitude": 10.820136,
        "latitude": 63.413171
    },
    {
        "busStopId": 101388,
        "locationId": "16638332",
        "name": "Svebergkrysset",
        "longitude": 10.755655,
        "latitude": 63.419804
    },
    {
        "busStopId": 101389,
        "locationId": "16638331",
        "name": "Leistadkrysset",
        "longitude": 10.630061,
        "latitude": 63.422778
    },
    {
        "busStopId": 101390,
        "locationId": "16638329",
        "name": "Muruvik",
        "longitude": 10.835713,
        "latitude": 63.432201
    },
    {
        "busStopId": 101391,
        "locationId": "16638328",
        "name": "Hommelvikhøgda",
        "longitude": 10.815114,
        "latitude": 63.427006
    },
    {
        "busStopId": 101392,
        "locationId": "16638327",
        "name": "Solbakken",
        "longitude": 10.810515,
        "latitude": 63.421066
    },
    {
        "busStopId": 101393,
        "locationId": "16386103",
        "name": "Fannrem stasjon",
        "longitude": 9.813223,
        "latitude": 63.266764
    },
    {
        "busStopId": 101394,
        "locationId": "16386102",
        "name": "Fannremsflata",
        "longitude": 9.818918,
        "latitude": 63.26809
    },
    {
        "busStopId": 101395,
        "locationId": "16386101",
        "name": "Mo-marked",
        "longitude": 9.82164,
        "latitude": 63.269734
    },
    {
        "busStopId": 101396,
        "locationId": "16386100",
        "name": "Fannremsmoen",
        "longitude": 9.824183,
        "latitude": 63.274316
    },
    {
        "busStopId": 101397,
        "locationId": "16386099",
        "name": "Syindustrien",
        "longitude": 9.829905,
        "latitude": 63.277143
    },
    {
        "busStopId": 101398,
        "locationId": "16533170",
        "name": "Simensbakken",
        "longitude": 10.334704,
        "latitude": 63.195114
    },
    {
        "busStopId": 101399,
        "locationId": "16533169",
        "name": "Flå skole",
        "longitude": 10.315202,
        "latitude": 63.19735
    },
    {
        "busStopId": 101400,
        "locationId": "16533030",
        "name": "Ler",
        "longitude": 10.301808,
        "latitude": 63.197476
    },
    {
        "busStopId": 101401,
        "locationId": "16011997",
        "name": "Hasselbakken",
        "longitude": 10.493526,
        "latitude": 63.436203
    },
    {
        "busStopId": 101402,
        "locationId": "16011714",
        "name": "Lauglo",
        "longitude": 10.232332,
        "latitude": 63.350859
    },
    {
        "busStopId": 101403,
        "locationId": "16011656",
        "name": "Brandhaugen",
        "longitude": 10.533259,
        "latitude": 63.370225
    },
    {
        "busStopId": 101404,
        "locationId": "16011651",
        "name": "Heggstadmyra",
        "longitude": 10.354997,
        "latitude": 63.334435
    },
    {
        "busStopId": 101405,
        "locationId": "16011639",
        "name": "By",
        "longitude": 10.155841,
        "latitude": 63.425792
    },
    {
        "busStopId": 101406,
        "locationId": "16011624",
        "name": "Stavnebrua",
        "longitude": 10.383465,
        "latitude": 63.409769
    },
    {
        "busStopId": 101407,
        "locationId": "16011577",
        "name": "Åsveien skole",
        "longitude": 10.366181,
        "latitude": 63.414462
    },
    {
        "busStopId": 101408,
        "locationId": "16011556",
        "name": "Vådanvegen 5",
        "longitude": 10.331937,
        "latitude": 63.393931
    },
    {
        "busStopId": 101409,
        "locationId": "16011445",
        "name": "Martin Stokkens v.",
        "longitude": 10.37061,
        "latitude": 63.392317
    },
    {
        "busStopId": 101410,
        "locationId": "16011379",
        "name": "Sørberg",
        "longitude": 10.174283,
        "latitude": 63.372077
    },
    {
        "busStopId": 101411,
        "locationId": "16011364",
        "name": "Okstadvegen 35",
        "longitude": 10.388801,
        "latitude": 63.379774
    },
    {
        "busStopId": 101412,
        "locationId": "16011362",
        "name": "Olaf Bulls veg",
        "longitude": 10.345574,
        "latitude": 63.398364
    },
    {
        "busStopId": 101413,
        "locationId": "16626019",
        "name": "Hesttrø",
        "longitude": 10.483564,
        "latitude": 63.298254
    },
    {
        "busStopId": 101414,
        "locationId": "16626018",
        "name": "Klæbu sentrum",
        "longitude": 10.484902,
        "latitude": 63.300216
    },
    {
        "busStopId": 101415,
        "locationId": "16626017",
        "name": "Rydland",
        "longitude": 10.486403,
        "latitude": 63.301491
    },
    {
        "busStopId": 101416,
        "locationId": "16626016",
        "name": "Aune",
        "longitude": 10.485334,
        "latitude": 63.309796
    },
    {
        "busStopId": 101417,
        "locationId": "16626015",
        "name": "Lysklett",
        "longitude": 10.479791,
        "latitude": 63.317179
    },
    {
        "busStopId": 101418,
        "locationId": "16626014",
        "name": "Holten",
        "longitude": 10.500138,
        "latitude": 63.320011
    },
    {
        "busStopId": 101419,
        "locationId": "16626013",
        "name": "Solem bru",
        "longitude": 10.507935,
        "latitude": 63.322181
    },
    {
        "busStopId": 101420,
        "locationId": "16626012",
        "name": "Bostad",
        "longitude": 10.508726,
        "latitude": 63.324222
    },
    {
        "busStopId": 101421,
        "locationId": "16626011",
        "name": "Nyhus Klæbu",
        "longitude": 10.498548,
        "latitude": 63.328609
    },
    {
        "busStopId": 101422,
        "locationId": "16626010",
        "name": "Sve",
        "longitude": 10.494775,
        "latitude": 63.329404
    },
    {
        "busStopId": 101423,
        "locationId": "16626009",
        "name": "Storugla",
        "longitude": 10.49226,
        "latitude": 63.333327
    },
    {
        "busStopId": 101424,
        "locationId": "16626008",
        "name": "Korsmo",
        "longitude": 10.479719,
        "latitude": 63.321588
    },
    {
        "busStopId": 101425,
        "locationId": "16626007",
        "name": "Ulseth",
        "longitude": 10.482163,
        "latitude": 63.326492
    },
    {
        "busStopId": 101426,
        "locationId": "16626006",
        "name": "Amunddal",
        "longitude": 10.481291,
        "latitude": 63.334443
    },
    {
        "busStopId": 101427,
        "locationId": "16011487",
        "name": "Trøndelag Folkemuseum",
        "longitude": 10.356677,
        "latitude": 63.421488
    },
    {
        "busStopId": 101428,
        "locationId": "16011486",
        "name": "Stokkhaugen",
        "longitude": 10.479441,
        "latitude": 63.410019
    },
    {
        "busStopId": 101429,
        "locationId": "16011485",
        "name": "Solvollvegen",
        "longitude": 10.458708,
        "latitude": 63.425636
    },
    {
        "busStopId": 101430,
        "locationId": "16011482",
        "name": "Søndre Halset",
        "longitude": 10.362929,
        "latitude": 63.39414
    },
    {
        "busStopId": 101431,
        "locationId": "16011480",
        "name": "Søndre Flatåsen",
        "longitude": 10.352203,
        "latitude": 63.376219
    },
    {
        "busStopId": 101432,
        "locationId": "16011479",
        "name": "Steintrøvegen",
        "longitude": 10.4487,
        "latitude": 63.40126
    },
    {
        "busStopId": 101433,
        "locationId": "16011478",
        "name": "Sæterbakken",
        "longitude": 10.508429,
        "latitude": 63.403211
    },
    {
        "busStopId": 101434,
        "locationId": "16011477",
        "name": "Studentersamfundet (Klostergata)",
        "longitude": 10.39517,
        "latitude": 63.422786
    },
    {
        "busStopId": 101435,
        "locationId": "16011476",
        "name": "Studentersamfundet (E6)",
        "longitude": 10.394622,
        "latitude": 63.422597
    },
    {
        "busStopId": 101436,
        "locationId": "16011475",
        "name": "Strindheim Hageby",
        "longitude": 10.454503,
        "latitude": 63.429638
    },
    {
        "busStopId": 101437,
        "locationId": "16011474",
        "name": "Kolstad kirke",
        "longitude": 10.342762,
        "latitude": 63.363492
    },
    {
        "busStopId": 101438,
        "locationId": "16011473",
        "name": "Steinaunet",
        "longitude": 10.440813,
        "latitude": 63.395628
    },
    {
        "busStopId": 101439,
        "locationId": "16011472",
        "name": "Strindheim",
        "longitude": 10.45568,
        "latitude": 63.435552
    },
    {
        "busStopId": 101440,
        "locationId": "16011471",
        "name": "Gina Krogs veg",
        "longitude": 10.436277,
        "latitude": 63.429007
    },
    {
        "busStopId": 101441,
        "locationId": "16011470",
        "name": "Strandveien",
        "longitude": 10.422712,
        "latitude": 63.436331
    },
    {
        "busStopId": 101442,
        "locationId": "16011104",
        "name": "Dora",
        "longitude": 10.419191,
        "latitude": 63.438521
    },
    {
        "busStopId": 101443,
        "locationId": "16011103",
        "name": "Dragvoll",
        "longitude": 10.471392,
        "latitude": 63.407699
    },
    {
        "busStopId": 101444,
        "locationId": "16011102",
        "name": "Dybdahls veg",
        "longitude": 10.414618,
        "latitude": 63.412857
    },
    {
        "busStopId": 101445,
        "locationId": "16011101",
        "name": "Dolpa",
        "longitude": 10.539664,
        "latitude": 63.41777
    },
    {
        "busStopId": 101446,
        "locationId": "16011100",
        "name": "Distriktslege Øverlids vei",
        "longitude": 10.36354,
        "latitude": 63.344943
    },
    {
        "busStopId": 101447,
        "locationId": "16011098",
        "name": "Ditlev Bloms veg",
        "longitude": 10.356021,
        "latitude": 63.353679
    },
    {
        "busStopId": 101448,
        "locationId": "16011097",
        "name": "Dalsaunevegen",
        "longitude": 10.408618,
        "latitude": 63.395206
    },
    {
        "busStopId": 101449,
        "locationId": "16011096",
        "name": "Dalgård",
        "longitude": 10.338378,
        "latitude": 63.395978
    },
    {
        "busStopId": 101450,
        "locationId": "16011095",
        "name": "Dalen Hageby",
        "longitude": 10.448009,
        "latitude": 63.437512
    },
    {
        "busStopId": 101451,
        "locationId": "16011090",
        "name": "Biskop Sigurds gate",
        "longitude": 10.426476,
        "latitude": 63.437038
    },
    {
        "busStopId": 101452,
        "locationId": "16011088",
        "name": "City Syd Østre",
        "longitude": 10.380168,
        "latitude": 63.361248
    },
    {
        "busStopId": 101453,
        "locationId": "16011087",
        "name": "Churchills veg",
        "longitude": 10.486969,
        "latitude": 63.429224
    },
    {
        "busStopId": 101454,
        "locationId": "16011086",
        "name": "Christian Jelstrups vei",
        "longitude": 10.360863,
        "latitude": 63.428565
    },
    {
        "busStopId": 101455,
        "locationId": "16011085",
        "name": "Charlottenlund Nedre",
        "longitude": 10.493562,
        "latitude": 63.43278
    },
    {
        "busStopId": 101456,
        "locationId": "16011084",
        "name": "Cecilienborg",
        "longitude": 10.379261,
        "latitude": 63.41693
    },
    {
        "busStopId": 101457,
        "locationId": "16010479",
        "name": "Steintrøvegen",
        "longitude": 10.448781,
        "latitude": 63.401188
    },
    {
        "busStopId": 101458,
        "locationId": "16010478",
        "name": "Sæterbakken",
        "longitude": 10.508241,
        "latitude": 63.403078
    },
    {
        "busStopId": 101459,
        "locationId": "16010477",
        "name": "Studentersamfundet (Klostergata)",
        "longitude": 10.395224,
        "latitude": 63.422662
    },
    {
        "busStopId": 101460,
        "locationId": "16010476",
        "name": "Studentersamfundet (E6)",
        "longitude": 10.394379,
        "latitude": 63.42222
    },
    {
        "busStopId": 101461,
        "locationId": "16010475",
        "name": "Strindheim Hageby",
        "longitude": 10.454279,
        "latitude": 63.429176
    },
    {
        "busStopId": 101462,
        "locationId": "16010474",
        "name": "Kolstad kirke",
        "longitude": 10.343768,
        "latitude": 63.364792
    },
    {
        "busStopId": 101463,
        "locationId": "16010473",
        "name": "Steinaunet",
        "longitude": 10.442475,
        "latitude": 63.396055
    },
    {
        "busStopId": 101464,
        "locationId": "16010472",
        "name": "Strindheim",
        "longitude": 10.455986,
        "latitude": 63.435235
    },
    {
        "busStopId": 101465,
        "locationId": "16010471",
        "name": "Gina Krogs veg",
        "longitude": 10.435208,
        "latitude": 63.428854
    },
    {
        "busStopId": 101466,
        "locationId": "16010470",
        "name": "Strandveien",
        "longitude": 10.419882,
        "latitude": 63.435982
    },
    {
        "busStopId": 101467,
        "locationId": "16010469",
        "name": "Stor-Rosta",
        "longitude": 10.37264,
        "latitude": 63.363476
    },
    {
        "busStopId": 101468,
        "locationId": "16010468",
        "name": "Stokkan",
        "longitude": 10.483393,
        "latitude": 63.410903
    },
    {
        "busStopId": 101469,
        "locationId": "16010467",
        "name": "Stiklestadveien",
        "longitude": 10.432019,
        "latitude": 63.440995
    },
    {
        "busStopId": 101470,
        "locationId": "16010466",
        "name": "Risvollan",
        "longitude": 10.452455,
        "latitude": 63.400999
    },
    {
        "busStopId": 101471,
        "locationId": "16010465",
        "name": "Steindalsvegen",
        "longitude": 10.428398,
        "latitude": 63.401167
    },
    {
        "busStopId": 101472,
        "locationId": "16010464",
        "name": "Stavsetsvingen",
        "longitude": 10.337758,
        "latitude": 63.384282
    },
    {
        "busStopId": 101473,
        "locationId": "16010124",
        "name": "Fagerheim alle",
        "longitude": 10.457001,
        "latitude": 63.444521
    },
    {
        "busStopId": 101474,
        "locationId": "16010120",
        "name": "Estenstadvegen",
        "longitude": 10.46496,
        "latitude": 63.405571
    },
    {
        "busStopId": 101475,
        "locationId": "16010119",
        "name": "E-verket",
        "longitude": 10.399751,
        "latitude": 63.398489
    },
    {
        "busStopId": 101476,
        "locationId": "16010118",
        "name": "Stavset senter",
        "longitude": 10.32979,
        "latitude": 63.386905
    },
    {
        "busStopId": 101477,
        "locationId": "16010116",
        "name": "Elvheim",
        "longitude": 10.386878,
        "latitude": 63.397555
    },
    {
        "busStopId": 101478,
        "locationId": "16010115",
        "name": "Eklesbakken",
        "longitude": 10.440768,
        "latitude": 63.357679
    },
    {
        "busStopId": 101479,
        "locationId": "16010114",
        "name": "Einbakken",
        "longitude": 10.41672,
        "latitude": 63.387759
    },
    {
        "busStopId": 101480,
        "locationId": "16010113",
        "name": "Einar Øfstis veg",
        "longitude": 10.433025,
        "latitude": 63.404855
    },
    {
        "busStopId": 101481,
        "locationId": "16010112",
        "name": "Einar Tambarskjelves gt",
        "longitude": 10.39623,
        "latitude": 63.418578
    },
    {
        "busStopId": 101482,
        "locationId": "16010104",
        "name": "Dora",
        "longitude": 10.422721,
        "latitude": 63.439392
    },
    {
        "busStopId": 101483,
        "locationId": "16010103",
        "name": "Dragvoll",
        "longitude": 10.471661,
        "latitude": 63.407847
    },
    {
        "busStopId": 101484,
        "locationId": "16010102",
        "name": "Dybdahls veg",
        "longitude": 10.41354,
        "latitude": 63.412966
    },
    {
        "busStopId": 101485,
        "locationId": "16010101",
        "name": "Dolpa",
        "longitude": 10.539745,
        "latitude": 63.417388
    },
    {
        "busStopId": 101486,
        "locationId": "16010100",
        "name": "Distriktslege Øverlids vei",
        "longitude": 10.363441,
        "latitude": 63.344964
    },
    {
        "busStopId": 101487,
        "locationId": "16010098",
        "name": "Ditlev Bloms veg",
        "longitude": 10.355868,
        "latitude": 63.353357
    },
    {
        "busStopId": 101488,
        "locationId": "16010097",
        "name": "Dalsaunevegen",
        "longitude": 10.409058,
        "latitude": 63.394715
    },
    {
        "busStopId": 101489,
        "locationId": "16659423",
        "name": "Gresslivoll",
        "longitude": 11.471028,
        "latitude": 63.054928
    },
    {
        "busStopId": 101490,
        "locationId": "16659422",
        "name": "Gressli",
        "longitude": 11.450825,
        "latitude": 63.059877
    },
    {
        "busStopId": 101491,
        "locationId": "16659421",
        "name": "Hillmo bru",
        "longitude": 11.435527,
        "latitude": 63.070632
    },
    {
        "busStopId": 101492,
        "locationId": "16659420",
        "name": "Hillmo",
        "longitude": 11.427298,
        "latitude": 63.079707
    },
    {
        "busStopId": 101493,
        "locationId": "16658440",
        "name": "Væktarstua",
        "longitude": 11.892769,
        "latitude": 62.907985
    },
    {
        "busStopId": 101494,
        "locationId": "16658439",
        "name": "Stugudal Handel",
        "longitude": 11.889445,
        "latitude": 62.913397
    },
    {
        "busStopId": 101495,
        "locationId": "16658438",
        "name": "Stuevoll",
        "longitude": 11.883561,
        "latitude": 62.917245
    },
    {
        "busStopId": 101496,
        "locationId": "16658437",
        "name": "Gjetneset",
        "longitude": 11.875845,
        "latitude": 62.918918
    },
    {
        "busStopId": 101497,
        "locationId": "16658436",
        "name": "Jensvoll",
        "longitude": 11.839993,
        "latitude": 62.934422
    },
    {
        "busStopId": 101498,
        "locationId": "16658435",
        "name": "Reitan bru",
        "longitude": 11.805884,
        "latitude": 62.950473
    },
    {
        "busStopId": 101499,
        "locationId": "16658434",
        "name": "Moen skisenter",
        "longitude": 11.786444,
        "latitude": 62.963163
    },
    {
        "busStopId": 101500,
        "locationId": "16658433",
        "name": "Tya",
        "longitude": 11.758076,
        "latitude": 62.966531
    },
    {
        "busStopId": 101501,
        "locationId": "16658431",
        "name": "Kirkvoll",
        "longitude": 11.682932,
        "latitude": 63.034922
    },
    {
        "busStopId": 101502,
        "locationId": "16658430",
        "name": "Berggardsmyra",
        "longitude": 11.679635,
        "latitude": 63.038254
    },
    {
        "busStopId": 101503,
        "locationId": "16658429",
        "name": "Tydalsenteret",
        "longitude": 11.675044,
        "latitude": 63.044249
    },
    {
        "busStopId": 101504,
        "locationId": "16658428",
        "name": "Ås i Tydal",
        "longitude": 11.65671,
        "latitude": 63.044766
    },
    {
        "busStopId": 101505,
        "locationId": "16389116",
        "name": "Vormstad",
        "longitude": 9.76811,
        "latitude": 63.199845
    },
    {
        "busStopId": 101506,
        "locationId": "16389115",
        "name": "Havik",
        "longitude": 9.770185,
        "latitude": 63.212111
    },
    {
        "busStopId": 101507,
        "locationId": "16389114",
        "name": "Kårmo",
        "longitude": 9.769026,
        "latitude": 63.216487
    },
    {
        "busStopId": 101508,
        "locationId": "16389113",
        "name": "By",
        "longitude": 9.767274,
        "latitude": 63.224003
    },
    {
        "busStopId": 101509,
        "locationId": "16389112",
        "name": "By Nedre",
        "longitude": 9.765756,
        "latitude": 63.227484
    },
    {
        "busStopId": 101510,
        "locationId": "16389111",
        "name": "Grendstuggu By",
        "longitude": 9.76316,
        "latitude": 63.230729
    },
    {
        "busStopId": 101511,
        "locationId": "16389109",
        "name": "Hallguttu",
        "longitude": 9.771065,
        "latitude": 63.243637
    },
    {
        "busStopId": 101512,
        "locationId": "16389108",
        "name": "Kvåle",
        "longitude": 9.769529,
        "latitude": 63.247256
    },
    {
        "busStopId": 101513,
        "locationId": "16389107",
        "name": "Bakkmoen",
        "longitude": 9.769565,
        "latitude": 63.25404
    },
    {
        "busStopId": 101514,
        "locationId": "16389106",
        "name": "Torshus",
        "longitude": 9.779878,
        "latitude": 63.257384
    },
    {
        "busStopId": 101515,
        "locationId": "16388131",
        "name": "Svorkmo",
        "longitude": 9.737828,
        "latitude": 63.170814
    },
    {
        "busStopId": 101516,
        "locationId": "16386223",
        "name": "Evjen skole",
        "longitude": 9.83967,
        "latitude": 63.287329
    },
    {
        "busStopId": 101517,
        "locationId": "16386222",
        "name": "Grønnøra",
        "longitude": 9.835986,
        "latitude": 63.309655
    },
    {
        "busStopId": 101518,
        "locationId": "16386221",
        "name": "Grønnøra vest",
        "longitude": 9.823913,
        "latitude": 63.310341
    },
    {
        "busStopId": 101519,
        "locationId": "16386220",
        "name": "Bårdshaugbrua",
        "longitude": 9.83684,
        "latitude": 63.297209
    },
    {
        "busStopId": 101520,
        "locationId": "16386163",
        "name": "Vinterdal",
        "longitude": 9.608407,
        "latitude": 63.291052
    },
    {
        "busStopId": 101521,
        "locationId": "16245113",
        "name": "Hopla",
        "longitude": 9.932564,
        "latitude": 63.57032
    },
    {
        "busStopId": 101522,
        "locationId": "16245112",
        "name": "Stadsbygd kirke",
        "longitude": 10.008535,
        "latitude": 63.498883
    },
    {
        "busStopId": 101523,
        "locationId": "16245111",
        "name": "Stadsbygd sentrum",
        "longitude": 10.017761,
        "latitude": 63.510802
    },
    {
        "busStopId": 101524,
        "locationId": "16245109",
        "name": "Håssåker",
        "longitude": 10.03181,
        "latitude": 63.509095
    },
    {
        "busStopId": 101525,
        "locationId": "16245108",
        "name": "Sandmoen",
        "longitude": 10.066916,
        "latitude": 63.501577
    },
    {
        "busStopId": 101526,
        "locationId": "16245107",
        "name": "Vålen",
        "longitude": 10.079879,
        "latitude": 63.499637
    },
    {
        "busStopId": 101527,
        "locationId": "16245106",
        "name": "Tronghaugen",
        "longitude": 10.091027,
        "latitude": 63.497552
    },
    {
        "busStopId": 101528,
        "locationId": "16245089",
        "name": "Skaudal skole",
        "longitude": 10.146866,
        "latitude": 63.651587
    },
    {
        "busStopId": 101529,
        "locationId": "16242203",
        "name": "Hysnes Helsefort",
        "longitude": 9.825359,
        "latitude": 63.628928
    },
    {
        "busStopId": 101530,
        "locationId": "16242202",
        "name": "Myrvang",
        "longitude": 9.831189,
        "latitude": 63.624111
    },
    {
        "busStopId": 101531,
        "locationId": "16242201",
        "name": "Nordsetra",
        "longitude": 10.229053,
        "latitude": 63.831021
    },
    {
        "busStopId": 101532,
        "locationId": "16242200",
        "name": "Krinsvatnet",
        "longitude": 10.227616,
        "latitude": 63.802645
    },
    {
        "busStopId": 101533,
        "locationId": "16242196",
        "name": "Flyta",
        "longitude": 10.011904,
        "latitude": 63.593901
    },
    {
        "busStopId": 101534,
        "locationId": "16242194",
        "name": "Stadsbygd skole",
        "longitude": 10.001905,
        "latitude": 63.512536
    },
    {
        "busStopId": 101535,
        "locationId": "16242184",
        "name": "Mo vegdele",
        "longitude": 10.049732,
        "latitude": 63.601418
    },
    {
        "busStopId": 101536,
        "locationId": "16242183",
        "name": "Ålmoen",
        "longitude": 10.099911,
        "latitude": 63.60413
    },
    {
        "busStopId": 101537,
        "locationId": "15698905",
        "name": "Stemshaug",
        "longitude": 8.708439,
        "latitude": 63.327891
    },
    {
        "busStopId": 101538,
        "locationId": "15698902",
        "name": "Hjelen",
        "longitude": 8.77124,
        "latitude": 63.340301
    },
    {
        "busStopId": 101539,
        "locationId": "15698901",
        "name": "Årvåg",
        "longitude": 8.850238,
        "latitude": 63.349146
    },
    {
        "busStopId": 101540,
        "locationId": "16011785",
        "name": "Eklestrø",
        "longitude": 10.435765,
        "latitude": 63.352773
    },
    {
        "busStopId": 101541,
        "locationId": "16011388",
        "name": "Ranheimsfjæra",
        "longitude": 10.528075,
        "latitude": 63.427364
    },
    {
        "busStopId": 101542,
        "locationId": "16010785",
        "name": "Eklestrø",
        "longitude": 10.436025,
        "latitude": 63.353075
    },
    {
        "busStopId": 101543,
        "locationId": "16010266",
        "name": "Lohove",
        "longitude": 10.459561,
        "latitude": 63.4049
    },
    {
        "busStopId": 101544,
        "locationId": "16010143",
        "name": "Geilmunnet",
        "longitude": 10.309057,
        "latitude": 63.353865
    },
    {
        "busStopId": 101545,
        "locationId": "16011199",
        "name": "N Humlehaugen V",
        "longitude": 10.535163,
        "latitude": 63.426837
    },
    {
        "busStopId": 101546,
        "locationId": "16011176",
        "name": "N Humlehaugen Ø",
        "longitude": 10.537364,
        "latitude": 63.428268
    },
    {
        "busStopId": 101547,
        "locationId": "16010199",
        "name": "N Humlehaugen V",
        "longitude": 10.535505,
        "latitude": 63.426978
    },
    {
        "busStopId": 101548,
        "locationId": "16010176",
        "name": "N Humlehaugen Ø",
        "longitude": 10.537517,
        "latitude": 63.42824
    },
    {
        "busStopId": 101549,
        "locationId": "17142603",
        "name": "Torvet Stjørdal",
        "longitude": 10.923559,
        "latitude": 63.468431
    },
    {
        "busStopId": 101550,
        "locationId": "16638334",
        "name": "Planetringen",
        "longitude": 10.63723,
        "latitude": 63.432491
    },
    {
        "busStopId": 101551,
        "locationId": "16578714",
        "name": "Børskrysset E39",
        "longitude": 10.062506,
        "latitude": 63.321733
    },
    {
        "busStopId": 101552,
        "locationId": "16578713",
        "name": "Buvikkrysset E39",
        "longitude": 10.174454,
        "latitude": 63.307045
    },
    {
        "busStopId": 101553,
        "locationId": "16533065",
        "name": "Veltet",
        "longitude": 10.213324,
        "latitude": 63.267302
    },
    {
        "busStopId": 101554,
        "locationId": "16533064",
        "name": "Løkken boligfelt",
        "longitude": 10.215507,
        "latitude": 63.268999
    },
    {
        "busStopId": 101555,
        "locationId": "16533063",
        "name": "Løkken gård",
        "longitude": 10.218857,
        "latitude": 63.272372
    },
    {
        "busStopId": 101556,
        "locationId": "16533062",
        "name": "Aundalen",
        "longitude": 10.223214,
        "latitude": 63.277208
    },
    {
        "busStopId": 101557,
        "locationId": "16533061",
        "name": "Vollhagen",
        "longitude": 10.224562,
        "latitude": 63.280932
    },
    {
        "busStopId": 101558,
        "locationId": "16533060",
        "name": "Vollmarka boligfelt",
        "longitude": 10.224948,
        "latitude": 63.280936
    },
    {
        "busStopId": 101559,
        "locationId": "16533059",
        "name": "Vollmarka garasje",
        "longitude": 10.238189,
        "latitude": 63.281461
    },
    {
        "busStopId": 101560,
        "locationId": "16533039",
        "name": "Rostad",
        "longitude": 10.278613,
        "latitude": 63.069188
    },
    {
        "busStopId": 101561,
        "locationId": "16533038",
        "name": "Hage gartneri",
        "longitude": 10.26557,
        "latitude": 63.072735
    },
    {
        "busStopId": 101562,
        "locationId": "16533037",
        "name": "Gylløyen",
        "longitude": 10.255724,
        "latitude": 63.081716
    },
    {
        "busStopId": 101563,
        "locationId": "16533036",
        "name": "Gylland",
        "longitude": 10.249759,
        "latitude": 63.089857
    },
    {
        "busStopId": 101564,
        "locationId": "16533033",
        "name": "Fosskrysset",
        "longitude": 10.235503,
        "latitude": 63.109057
    },
    {
        "busStopId": 101565,
        "locationId": "16533029",
        "name": "Horg kirke",
        "longitude": 10.253092,
        "latitude": 63.136425
    },
    {
        "busStopId": 101566,
        "locationId": "16533028",
        "name": "Horghaugen",
        "longitude": 10.259165,
        "latitude": 63.141523
    },
    {
        "busStopId": 101567,
        "locationId": "16533027",
        "name": "Misjonshuset",
        "longitude": 10.266899,
        "latitude": 63.146599
    },
    {
        "busStopId": 101568,
        "locationId": "16533026",
        "name": "Lundamo",
        "longitude": 10.280338,
        "latitude": 63.151549
    },
    {
        "busStopId": 101569,
        "locationId": "16533176",
        "name": "Finnaunet",
        "longitude": 10.424266,
        "latitude": 63.230915
    },
    {
        "busStopId": 101570,
        "locationId": "16533175",
        "name": "Fremo leir",
        "longitude": 10.402419,
        "latitude": 63.215532
    },
    {
        "busStopId": 101571,
        "locationId": "16533174",
        "name": "Grevskott",
        "longitude": 10.38236,
        "latitude": 63.212334
    },
    {
        "busStopId": 101572,
        "locationId": "16533173",
        "name": "Fremo",
        "longitude": 10.366091,
        "latitude": 63.209904
    },
    {
        "busStopId": 101573,
        "locationId": "16533172",
        "name": "Frødalen",
        "longitude": 10.357225,
        "latitude": 63.204021
    },
    {
        "busStopId": 101574,
        "locationId": "16533171",
        "name": "Bollan",
        "longitude": 10.343427,
        "latitude": 63.199055
    },
    {
        "busStopId": 101575,
        "locationId": "16626036",
        "name": "Sagmoen",
        "longitude": 10.43483,
        "latitude": 63.286178
    },
    {
        "busStopId": 101576,
        "locationId": "16626035",
        "name": "Tulluan syd",
        "longitude": 10.436187,
        "latitude": 63.288678
    },
    {
        "busStopId": 101577,
        "locationId": "16626034",
        "name": "Tulluan skole",
        "longitude": 10.437768,
        "latitude": 63.29079
    },
    {
        "busStopId": 101578,
        "locationId": "16626032",
        "name": "Forset",
        "longitude": 10.436205,
        "latitude": 63.300285
    },
    {
        "busStopId": 101579,
        "locationId": "16626031",
        "name": "Hallansvingen",
        "longitude": 10.416702,
        "latitude": 63.314178
    },
    {
        "busStopId": 101580,
        "locationId": "16626030",
        "name": "Skjøla",
        "longitude": 10.404656,
        "latitude": 63.317664
    },
    {
        "busStopId": 101581,
        "locationId": "16626029",
        "name": "Brannåsen",
        "longitude": 10.434219,
        "latitude": 63.306831
    },
    {
        "busStopId": 101582,
        "locationId": "16626027",
        "name": "Tanemsmoen",
        "longitude": 10.430339,
        "latitude": 63.310297
    },
    {
        "busStopId": 101583,
        "locationId": "16626026",
        "name": "Tanemskrysset 1",
        "longitude": 10.426871,
        "latitude": 63.313323
    },
    {
        "busStopId": 101584,
        "locationId": "16626025",
        "name": "Tanem gård",
        "longitude": 10.435792,
        "latitude": 63.313529
    },
    {
        "busStopId": 101585,
        "locationId": "16626024",
        "name": "Tanem bru",
        "longitude": 10.454189,
        "latitude": 63.309857
    },
    {
        "busStopId": 101586,
        "locationId": "16626022",
        "name": "Sørborgen",
        "longitude": 10.46248,
        "latitude": 63.303832
    },
    {
        "busStopId": 101587,
        "locationId": "16626020",
        "name": "Prestgårdskrysset",
        "longitude": 10.476494,
        "latitude": 63.298379
    },
    {
        "busStopId": 101588,
        "locationId": "16011513",
        "name": "Torvmyra",
        "longitude": 10.391666,
        "latitude": 63.361333
    },
    {
        "busStopId": 101589,
        "locationId": "16011512",
        "name": "Kroppnmarka snuplass",
        "longitude": 10.378084,
        "latitude": 63.382829
    },
    {
        "busStopId": 101590,
        "locationId": "16011511",
        "name": "Tors veg",
        "longitude": 10.427096,
        "latitude": 63.40486
    },
    {
        "busStopId": 101591,
        "locationId": "16011510",
        "name": "Torplassen",
        "longitude": 10.360674,
        "latitude": 63.36594
    },
    {
        "busStopId": 101592,
        "locationId": "16011508",
        "name": "Tonstadgrenda",
        "longitude": 10.387112,
        "latitude": 63.361792
    },
    {
        "busStopId": 101593,
        "locationId": "16011506",
        "name": "Tollbua",
        "longitude": 10.404773,
        "latitude": 63.439633
    },
    {
        "busStopId": 101594,
        "locationId": "16011504",
        "name": "Martin Kregnes v.",
        "longitude": 10.395888,
        "latitude": 63.353502
    },
    {
        "busStopId": 101595,
        "locationId": "16011501",
        "name": "Thaulowbakken",
        "longitude": 10.382333,
        "latitude": 63.412857
    },
    {
        "busStopId": 101596,
        "locationId": "16011500",
        "name": "Munkaunet",
        "longitude": 10.319127,
        "latitude": 63.4492
    },
    {
        "busStopId": 101597,
        "locationId": "16011498",
        "name": "Tempevegen 11",
        "longitude": 10.397101,
        "latitude": 63.408093
    },
    {
        "busStopId": 101598,
        "locationId": "16011497",
        "name": "Haakon VII gate 17",
        "longitude": 10.454108,
        "latitude": 63.442409
    },
    {
        "busStopId": 101599,
        "locationId": "16011496",
        "name": "Teglv.krysset",
        "longitude": 10.44817,
        "latitude": 63.418204
    },
    {
        "busStopId": 101600,
        "locationId": "16011495",
        "name": "Tiller vg.skole",
        "longitude": 10.378515,
        "latitude": 63.358086
    },
    {
        "busStopId": 101601,
        "locationId": "16011132",
        "name": "Fjøslia",
        "longitude": 10.358294,
        "latitude": 63.388692
    },
    {
        "busStopId": 101602,
        "locationId": "16011131",
        "name": "Fiolsvingen",
        "longitude": 10.420403,
        "latitude": 63.409263
    },
    {
        "busStopId": 101603,
        "locationId": "16011128",
        "name": "Tunga k.fengsel",
        "longitude": 10.471715,
        "latitude": 63.421842
    },
    {
        "busStopId": 101604,
        "locationId": "16011127",
        "name": "Fagervika",
        "longitude": 10.347981,
        "latitude": 63.438537
    },
    {
        "busStopId": 101605,
        "locationId": "16011126",
        "name": "Fagerliveien",
        "longitude": 10.355859,
        "latitude": 63.42742
    },
    {
        "busStopId": 101606,
        "locationId": "16011125",
        "name": "Ringve museum",
        "longitude": 10.456435,
        "latitude": 63.449473
    },
    {
        "busStopId": 101607,
        "locationId": "16011124",
        "name": "Fagerheim alle",
        "longitude": 10.456776,
        "latitude": 63.44475
    },
    {
        "busStopId": 101608,
        "locationId": "16011120",
        "name": "Estenstadvegen",
        "longitude": 10.464583,
        "latitude": 63.405612
    },
    {
        "busStopId": 101609,
        "locationId": "16011119",
        "name": "E-verket",
        "longitude": 10.401027,
        "latitude": 63.39873
    },
    {
        "busStopId": 101610,
        "locationId": "16011118",
        "name": "Stavset senter",
        "longitude": 10.329629,
        "latitude": 63.387248
    },
    {
        "busStopId": 101611,
        "locationId": "16011116",
        "name": "Elvheim",
        "longitude": 10.387507,
        "latitude": 63.398086
    },
    {
        "busStopId": 101612,
        "locationId": "16011115",
        "name": "Eklesbakken",
        "longitude": 10.440894,
        "latitude": 63.357309
    },
    {
        "busStopId": 101613,
        "locationId": "16011114",
        "name": "Einbakken",
        "longitude": 10.419658,
        "latitude": 63.386857
    },
    {
        "busStopId": 101614,
        "locationId": "16011113",
        "name": "Einar Øfstis veg",
        "longitude": 10.433097,
        "latitude": 63.405089
    },
    {
        "busStopId": 101615,
        "locationId": "16011112",
        "name": "Einar Tambarskjelves gt",
        "longitude": 10.396014,
        "latitude": 63.419639
    },
    {
        "busStopId": 101616,
        "locationId": "16010505",
        "name": "Tonstadkrysset 2",
        "longitude": 10.378659,
        "latitude": 63.370176
    },
    {
        "busStopId": 101617,
        "locationId": "16010504",
        "name": "Martin Kregnes v.",
        "longitude": 10.395511,
        "latitude": 63.353603
    },
    {
        "busStopId": 101618,
        "locationId": "16010501",
        "name": "Thaulowbakken",
        "longitude": 10.382243,
        "latitude": 63.41268
    },
    {
        "busStopId": 101619,
        "locationId": "16010500",
        "name": "Munkaunet",
        "longitude": 10.320897,
        "latitude": 63.448967
    },
    {
        "busStopId": 101620,
        "locationId": "16010498",
        "name": "Tempevegen 11",
        "longitude": 10.396706,
        "latitude": 63.407767
    },
    {
        "busStopId": 101621,
        "locationId": "16010497",
        "name": "Haakon VII gate 17",
        "longitude": 10.454674,
        "latitude": 63.442104
    },
    {
        "busStopId": 101622,
        "locationId": "16010496",
        "name": "Teglv.krysset",
        "longitude": 10.448018,
        "latitude": 63.418285
    },
    {
        "busStopId": 101623,
        "locationId": "16010495",
        "name": "Tiller vg.skole",
        "longitude": 10.37812,
        "latitude": 63.358521
    },
    {
        "busStopId": 101624,
        "locationId": "16010489",
        "name": "Trondheim S.",
        "longitude": 10.401377,
        "latitude": 63.43593
    },
    {
        "busStopId": 101625,
        "locationId": "16010488",
        "name": "Trondheim S.",
        "longitude": 10.401341,
        "latitude": 63.436022
    },
    {
        "busStopId": 101626,
        "locationId": "16010487",
        "name": "Trøndelag Folkemuseum",
        "longitude": 10.356012,
        "latitude": 63.420937
    },
    {
        "busStopId": 101627,
        "locationId": "16010486",
        "name": "Stokkhaugen",
        "longitude": 10.481866,
        "latitude": 63.410051
    },
    {
        "busStopId": 101628,
        "locationId": "16010485",
        "name": "Solvollvegen",
        "longitude": 10.457351,
        "latitude": 63.425041
    },
    {
        "busStopId": 101629,
        "locationId": "16010482",
        "name": "Søndre Halset",
        "longitude": 10.361887,
        "latitude": 63.393971
    },
    {
        "busStopId": 101630,
        "locationId": "16010480",
        "name": "Søndre Flatåsen",
        "longitude": 10.352275,
        "latitude": 63.37692
    },
    {
        "busStopId": 101631,
        "locationId": "16010142",
        "name": "Reppevegen",
        "longitude": 10.543005,
        "latitude": 63.423261
    },
    {
        "busStopId": 101632,
        "locationId": "16010141",
        "name": "Henrik Ourens veg",
        "longitude": 10.445386,
        "latitude": 63.415008
    },
    {
        "busStopId": 101633,
        "locationId": "16010140",
        "name": "Fykenborg",
        "longitude": 10.554953,
        "latitude": 63.420053
    },
    {
        "busStopId": 101634,
        "locationId": "16010139",
        "name": "Furuhaugen",
        "longitude": 10.340274,
        "latitude": 63.376908
    },
    {
        "busStopId": 101635,
        "locationId": "16010138",
        "name": "Framveien",
        "longitude": 10.362678,
        "latitude": 63.415776
    },
    {
        "busStopId": 101636,
        "locationId": "16010137",
        "name": "Forsøket",
        "longitude": 10.370556,
        "latitude": 63.38272
    },
    {
        "busStopId": 101637,
        "locationId": "16010136",
        "name": "Øvre Tvereggen",
        "longitude": 10.422757,
        "latitude": 63.385561
    },
    {
        "busStopId": 101638,
        "locationId": "16010135",
        "name": "F. Rambech",
        "longitude": 10.351646,
        "latitude": 63.335508
    },
    {
        "busStopId": 101639,
        "locationId": "16010134",
        "name": "Flatåsen",
        "longitude": 10.332045,
        "latitude": 63.3776
    },
    {
        "busStopId": 101640,
        "locationId": "16010132",
        "name": "Fjøslia",
        "longitude": 10.359623,
        "latitude": 63.388893
    },
    {
        "busStopId": 101641,
        "locationId": "16010131",
        "name": "Fiolsvingen",
        "longitude": 10.420197,
        "latitude": 63.409014
    },
    {
        "busStopId": 101642,
        "locationId": "16010130",
        "name": "Festningsgata",
        "longitude": 10.416235,
        "latitude": 63.427842
    },
    {
        "busStopId": 101643,
        "locationId": "16010128",
        "name": "Tunga k.fengsel",
        "longitude": 10.471113,
        "latitude": 63.421271
    },
    {
        "busStopId": 101644,
        "locationId": "16010127",
        "name": "Fagervika",
        "longitude": 10.348341,
        "latitude": 63.438497
    },
    {
        "busStopId": 101645,
        "locationId": "16010126",
        "name": "Fagerliveien",
        "longitude": 10.355832,
        "latitude": 63.42734
    },
    {
        "busStopId": 101646,
        "locationId": "16010125",
        "name": "Ringve museum",
        "longitude": 10.456767,
        "latitude": 63.449352
    },
    {
        "busStopId": 101647,
        "locationId": "16659440",
        "name": "Væktarstua",
        "longitude": 11.892994,
        "latitude": 62.908026
    },
    {
        "busStopId": 101648,
        "locationId": "16659439",
        "name": "Stugudal Handel",
        "longitude": 11.889706,
        "latitude": 62.913425
    },
    {
        "busStopId": 101649,
        "locationId": "16659438",
        "name": "Stuevoll",
        "longitude": 11.883481,
        "latitude": 62.917409
    },
    {
        "busStopId": 101650,
        "locationId": "16659437",
        "name": "Gjetneset",
        "longitude": 11.875953,
        "latitude": 62.918992
    },
    {
        "busStopId": 101651,
        "locationId": "16659436",
        "name": "Jensvoll",
        "longitude": 11.839912,
        "latitude": 62.934442
    },
    {
        "busStopId": 101652,
        "locationId": "16659435",
        "name": "Reitan bru",
        "longitude": 11.806154,
        "latitude": 62.950575
    },
    {
        "busStopId": 101653,
        "locationId": "16659434",
        "name": "Moen skisenter",
        "longitude": 11.786921,
        "latitude": 62.96315
    },
    {
        "busStopId": 101654,
        "locationId": "16659433",
        "name": "Tya",
        "longitude": 11.758705,
        "latitude": 62.966527
    },
    {
        "busStopId": 101655,
        "locationId": "16659431",
        "name": "Kirkvoll",
        "longitude": 11.68321,
        "latitude": 63.034963
    },
    {
        "busStopId": 101656,
        "locationId": "16659430",
        "name": "Berggardsmyra",
        "longitude": 11.679994,
        "latitude": 63.038291
    },
    {
        "busStopId": 101657,
        "locationId": "16659429",
        "name": "Tydalsenteret",
        "longitude": 11.675116,
        "latitude": 63.044627
    },
    {
        "busStopId": 101658,
        "locationId": "16659428",
        "name": "Ås i Tydal",
        "longitude": 11.657464,
        "latitude": 63.044978
    },
    {
        "busStopId": 101659,
        "locationId": "16659427",
        "name": "Lian",
        "longitude": 11.614776,
        "latitude": 63.046895
    },
    {
        "busStopId": 101660,
        "locationId": "16659426",
        "name": "Svellmoen",
        "longitude": 11.603197,
        "latitude": 63.048312
    },
    {
        "busStopId": 101661,
        "locationId": "16659425",
        "name": "Henmoen",
        "longitude": 11.587593,
        "latitude": 63.05025
    },
    {
        "busStopId": 101662,
        "locationId": "16659424",
        "name": "Storaunet",
        "longitude": 11.568702,
        "latitude": 63.054997
    },
    {
        "busStopId": 101663,
        "locationId": "16389137",
        "name": "Ellingsgården",
        "longitude": 9.387952,
        "latitude": 63.228791
    },
    {
        "busStopId": 101664,
        "locationId": "16389136",
        "name": "Søvassli Ungdomssenter",
        "longitude": 9.430307,
        "latitude": 63.230571
    },
    {
        "busStopId": 101665,
        "locationId": "16389135",
        "name": "Bjørkøybekk",
        "longitude": 9.503152,
        "latitude": 63.239414
    },
    {
        "busStopId": 101666,
        "locationId": "16389134",
        "name": "Høgkjølen",
        "longitude": 9.542749,
        "latitude": 63.233193
    },
    {
        "busStopId": 101667,
        "locationId": "16389133",
        "name": "Hoset",
        "longitude": 9.588572,
        "latitude": 63.236538
    },
    {
        "busStopId": 101668,
        "locationId": "16389132",
        "name": "Vassliveien",
        "longitude": 9.633398,
        "latitude": 63.242035
    },
    {
        "busStopId": 101669,
        "locationId": "16389131",
        "name": "Bakksætra",
        "longitude": 9.660707,
        "latitude": 63.246516
    },
    {
        "busStopId": 101670,
        "locationId": "16389130",
        "name": "Slettet",
        "longitude": 9.671235,
        "latitude": 63.247106
    },
    {
        "busStopId": 101671,
        "locationId": "16389129",
        "name": "Fosslykkja",
        "longitude": 9.726814,
        "latitude": 63.251024
    },
    {
        "busStopId": 101672,
        "locationId": "16389128",
        "name": "Fossan",
        "longitude": 9.747026,
        "latitude": 63.254942
    },
    {
        "busStopId": 101673,
        "locationId": "16389127",
        "name": "Ødynhaug",
        "longitude": 9.764076,
        "latitude": 63.257408
    },
    {
        "busStopId": 101674,
        "locationId": "16389126",
        "name": "Nøsen",
        "longitude": 9.78251,
        "latitude": 63.260577
    },
    {
        "busStopId": 101675,
        "locationId": "16389123",
        "name": "Klinga",
        "longitude": 9.731351,
        "latitude": 63.162716
    },
    {
        "busStopId": 101676,
        "locationId": "16389121",
        "name": "Årlivollveien",
        "longitude": 9.739274,
        "latitude": 63.169829
    },
    {
        "busStopId": 101677,
        "locationId": "16389119",
        "name": "Aspøllkleivan",
        "longitude": 9.744026,
        "latitude": 63.176348
    },
    {
        "busStopId": 101678,
        "locationId": "16389117",
        "name": "Moe kirke",
        "longitude": 9.765136,
        "latitude": 63.186496
    },
    {
        "busStopId": 101679,
        "locationId": "16245133",
        "name": "Einbakkbrua",
        "longitude": 10.159128,
        "latitude": 63.657682
    },
    {
        "busStopId": 101680,
        "locationId": "16245131",
        "name": "Seterbrua",
        "longitude": 10.09533,
        "latitude": 63.641271
    },
    {
        "busStopId": 101681,
        "locationId": "16245130",
        "name": "Fossbrua",
        "longitude": 10.044476,
        "latitude": 63.62378
    },
    {
        "busStopId": 101682,
        "locationId": "16245129",
        "name": "Føll",
        "longitude": 10.016844,
        "latitude": 63.606934
    },
    {
        "busStopId": 101683,
        "locationId": "16245128",
        "name": "Leira",
        "longitude": 9.99957,
        "latitude": 63.59915
    },
    {
        "busStopId": 101684,
        "locationId": "16245126",
        "name": "Rissa",
        "longitude": 9.953612,
        "latitude": 63.582488
    },
    {
        "busStopId": 101685,
        "locationId": "16245125",
        "name": "Sund",
        "longitude": 9.936382,
        "latitude": 63.579918
    },
    {
        "busStopId": 101686,
        "locationId": "16245123",
        "name": "Kvithylla",
        "longitude": 9.902803,
        "latitude": 63.565997
    },
    {
        "busStopId": 101687,
        "locationId": "16245122",
        "name": "Rein",
        "longitude": 9.923491,
        "latitude": 63.56435
    },
    {
        "busStopId": 101688,
        "locationId": "16245121",
        "name": "Torvet",
        "longitude": 9.924911,
        "latitude": 63.551565
    },
    {
        "busStopId": 101689,
        "locationId": "16245120",
        "name": "Esvikflata",
        "longitude": 9.925908,
        "latitude": 63.538279
    },
    {
        "busStopId": 101690,
        "locationId": "16245119",
        "name": "Skogen",
        "longitude": 9.929097,
        "latitude": 63.529283
    },
    {
        "busStopId": 101691,
        "locationId": "16245117",
        "name": "Slættet",
        "longitude": 9.934379,
        "latitude": 63.510165
    },
    {
        "busStopId": 101692,
        "locationId": "16245116",
        "name": "Brørskift",
        "longitude": 9.957951,
        "latitude": 63.500442
    },
    {
        "busStopId": 101693,
        "locationId": "16245115",
        "name": "Grønning",
        "longitude": 9.979717,
        "latitude": 63.500258
    },
    {
        "busStopId": 101694,
        "locationId": "16245114",
        "name": "Buan",
        "longitude": 9.999588,
        "latitude": 63.497833
    },
    {
        "busStopId": 101695,
        "locationId": "16010796",
        "name": "Weidemannsveien",
        "longitude": 10.427761,
        "latitude": 63.433435
    },
    {
        "busStopId": 101696,
        "locationId": "16010795",
        "name": "Flakk fergeleie",
        "longitude": 10.200047,
        "latitude": 63.451215
    },
    {
        "busStopId": 101697,
        "locationId": "16010503",
        "name": "Tungasletta",
        "longitude": 10.465032,
        "latitude": 63.423417
    },
    {
        "busStopId": 101698,
        "locationId": "16010428",
        "name": "Skjefstadbakken",
        "longitude": 10.271732,
        "latitude": 63.340953
    },
    {
        "busStopId": 101699,
        "locationId": "16010299",
        "name": "Mikkelveien",
        "longitude": 10.391388,
        "latitude": 63.371578
    },
    {
        "busStopId": 101700,
        "locationId": "16010289",
        "name": "Losgata",
        "longitude": 10.417637,
        "latitude": 63.438015
    },
    {
        "busStopId": 101701,
        "locationId": "16010078",
        "name": "Bergheim",
        "longitude": 10.453866,
        "latitude": 63.409854
    },
    {
        "busStopId": 101702,
        "locationId": "16010031",
        "name": "Alf Godagers veg",
        "longitude": 10.394837,
        "latitude": 63.370136
    },
    {
        "busStopId": 101703,
        "locationId": "16010020",
        "name": "Dronningens gate 19",
        "longitude": 10.391523,
        "latitude": 63.431924
    },
    {
        "busStopId": 101704,
        "locationId": "16010019",
        "name": "Søndre gate",
        "longitude": 10.400075,
        "latitude": 63.434158
    },
    {
        "busStopId": 101705,
        "locationId": "15698911",
        "name": "Aure",
        "longitude": 8.529782,
        "latitude": 63.267819
    },
    {
        "busStopId": 101706,
        "locationId": "15698910",
        "name": "Våg",
        "longitude": 8.540751,
        "latitude": 63.285884
    },
    {
        "busStopId": 101707,
        "locationId": "15698909",
        "name": "Eidestranda",
        "longitude": 8.53846,
        "latitude": 63.300829
    },
    {
        "busStopId": 101708,
        "locationId": "15698908",
        "name": "Vean",
        "longitude": 8.601854,
        "latitude": 63.310878
    },
    {
        "busStopId": 101709,
        "locationId": "15698907",
        "name": "Glomstad",
        "longitude": 8.625201,
        "latitude": 63.313783
    },
    {
        "busStopId": 101710,
        "locationId": "15698906",
        "name": "Melan",
        "longitude": 8.663874,
        "latitude": 63.316296
    },
    {
        "busStopId": 101711,
        "locationId": "16533092",
        "name": "Korsvegen",
        "longitude": 10.100738,
        "latitude": 63.160956
    },
    {
        "busStopId": 101712,
        "locationId": "16533091",
        "name": "Bøvra",
        "longitude": 10.10178,
        "latitude": 63.16285
    },
    {
        "busStopId": 101713,
        "locationId": "16533090",
        "name": "Fløttum",
        "longitude": 10.10858,
        "latitude": 63.166747
    },
    {
        "busStopId": 101714,
        "locationId": "16533089",
        "name": "Eid Skole",
        "longitude": 10.111185,
        "latitude": 63.168467
    },
    {
        "busStopId": 101715,
        "locationId": "16533088",
        "name": "Åmot",
        "longitude": 10.109559,
        "latitude": 63.171694
    },
    {
        "busStopId": 101716,
        "locationId": "16533087",
        "name": "Kursenteret",
        "longitude": 10.12572,
        "latitude": 63.177544
    },
    {
        "busStopId": 101717,
        "locationId": "16533086",
        "name": "Bjørsetveien",
        "longitude": 10.125495,
        "latitude": 63.174852
    },
    {
        "busStopId": 101718,
        "locationId": "16533085",
        "name": "Solbu",
        "longitude": 10.122558,
        "latitude": 63.172821
    },
    {
        "busStopId": 101719,
        "locationId": "16533084",
        "name": "Myra (Melhus)",
        "longitude": 10.127041,
        "latitude": 63.186521
    },
    {
        "busStopId": 101720,
        "locationId": "16533083",
        "name": "Nordgjærdet",
        "longitude": 10.131577,
        "latitude": 63.189722
    },
    {
        "busStopId": 101721,
        "locationId": "16533082",
        "name": "Stranda (Melhus)",
        "longitude": 10.135233,
        "latitude": 63.198744
    },
    {
        "busStopId": 101722,
        "locationId": "16533081",
        "name": "Strandamoen",
        "longitude": 10.131909,
        "latitude": 63.202717
    },
    {
        "busStopId": 101723,
        "locationId": "16533069",
        "name": "Vigdalsmo boligfelt",
        "longitude": 10.181973,
        "latitude": 63.252937
    },
    {
        "busStopId": 101724,
        "locationId": "16533068",
        "name": "Rakbjørg gård",
        "longitude": 10.194136,
        "latitude": 63.257565
    },
    {
        "busStopId": 101725,
        "locationId": "16533067",
        "name": "Kottum filial",
        "longitude": 10.202248,
        "latitude": 63.26113
    },
    {
        "busStopId": 101726,
        "locationId": "16533066",
        "name": "Kottum gård",
        "longitude": 10.205697,
        "latitude": 63.262088
    },
    {
        "busStopId": 101727,
        "locationId": "16389100",
        "name": "Fannremsmoen",
        "longitude": 9.824461,
        "latitude": 63.274348
    },
    {
        "busStopId": 101728,
        "locationId": "16389099",
        "name": "Syindustrien",
        "longitude": 9.830201,
        "latitude": 63.277123
    },
    {
        "busStopId": 101729,
        "locationId": "16389098",
        "name": "Sorenskrivergården",
        "longitude": 9.83666,
        "latitude": 63.279886
    },
    {
        "busStopId": 101730,
        "locationId": "16389097",
        "name": "Follo",
        "longitude": 9.839364,
        "latitude": 63.28443
    },
    {
        "busStopId": 101731,
        "locationId": "16389096",
        "name": "Evjen",
        "longitude": 9.84258,
        "latitude": 63.290023
    },
    {
        "busStopId": 101732,
        "locationId": "16389095",
        "name": "Orkdal Sykehus",
        "longitude": 9.844844,
        "latitude": 63.293806
    },
    {
        "busStopId": 101733,
        "locationId": "16389093",
        "name": "Rømme",
        "longitude": 9.847377,
        "latitude": 63.301483
    },
    {
        "busStopId": 101734,
        "locationId": "16389092",
        "name": "Orkanger skole",
        "longitude": 9.850324,
        "latitude": 63.306597
    },
    {
        "busStopId": 101735,
        "locationId": "16388727",
        "name": "AKS",
        "longitude": 9.900144,
        "latitude": 63.326944
    },
    {
        "busStopId": 101736,
        "locationId": "16386219",
        "name": "Strandheim",
        "longitude": 9.863789,
        "latitude": 63.312476
    },
    {
        "busStopId": 101737,
        "locationId": "16386217",
        "name": "Torget Orkanger",
        "longitude": 9.849057,
        "latitude": 63.304865
    },
    {
        "busStopId": 101738,
        "locationId": "16011318",
        "name": "Myrsund",
        "longitude": 10.176753,
        "latitude": 63.370241
    },
    {
        "busStopId": 101739,
        "locationId": "16011065",
        "name": "Brian Smiths gt",
        "longitude": 10.447829,
        "latitude": 63.43407
    },
    {
        "busStopId": 101740,
        "locationId": "16010065",
        "name": "Brian Smiths gt",
        "longitude": 10.448098,
        "latitude": 63.435347
    },
    {
        "busStopId": 101741,
        "locationId": "16627090",
        "name": "Sellesbakken",
        "longitude": 10.461879,
        "latitude": 63.325057
    },
    {
        "busStopId": 101742,
        "locationId": "16626090",
        "name": "Sellesbakken",
        "longitude": 10.462741,
        "latitude": 63.325049
    },
    {
        "busStopId": 101743,
        "locationId": "16010522",
        "name": "Tyholttårnet",
        "longitude": 10.431489,
        "latitude": 63.421906
    },
    {
        "busStopId": 101744,
        "locationId": "16626062",
        "name": "Målsjøåsen",
        "longitude": 10.434974,
        "latitude": 63.251849
    },
    {
        "busStopId": 101745,
        "locationId": "16626052",
        "name": "Bjørkli",
        "longitude": 10.55798,
        "latitude": 63.274279
    },
    {
        "busStopId": 101746,
        "locationId": "16626051",
        "name": "Bjørkligård",
        "longitude": 10.546042,
        "latitude": 63.272372
    },
    {
        "busStopId": 101747,
        "locationId": "16626050",
        "name": "Bjørklimark",
        "longitude": 10.538792,
        "latitude": 63.267229
    },
    {
        "busStopId": 101748,
        "locationId": "16626049",
        "name": "Klæbu bygdemuseum",
        "longitude": 10.532172,
        "latitude": 63.265665
    },
    {
        "busStopId": 101749,
        "locationId": "16626048",
        "name": "Teigen",
        "longitude": 10.525345,
        "latitude": 63.265855
    },
    {
        "busStopId": 101750,
        "locationId": "16626047",
        "name": "Grendstad",
        "longitude": 10.521949,
        "latitude": 63.259987
    },
    {
        "busStopId": 101751,
        "locationId": "16626046",
        "name": "Brøttemsåsen",
        "longitude": 10.514295,
        "latitude": 63.256862
    },
    {
        "busStopId": 101752,
        "locationId": "16626045",
        "name": "Brøttem gård",
        "longitude": 10.503578,
        "latitude": 63.253923
    },
    {
        "busStopId": 101753,
        "locationId": "16626044",
        "name": "Brøttemsmarka",
        "longitude": 10.486492,
        "latitude": 63.248978
    },
    {
        "busStopId": 101754,
        "locationId": "16626043",
        "name": "Svebakken",
        "longitude": 10.481094,
        "latitude": 63.246985
    },
    {
        "busStopId": 101755,
        "locationId": "16626042",
        "name": "Hyttfossen",
        "longitude": 10.455779,
        "latitude": 63.259914
    },
    {
        "busStopId": 101756,
        "locationId": "16626041",
        "name": "Lettingvold",
        "longitude": 10.449356,
        "latitude": 63.266109
    },
    {
        "busStopId": 101757,
        "locationId": "16626040",
        "name": "Nygården",
        "longitude": 10.443652,
        "latitude": 63.270853
    },
    {
        "busStopId": 101758,
        "locationId": "16626039",
        "name": "Moadalen",
        "longitude": 10.438433,
        "latitude": 63.274885
    },
    {
        "busStopId": 101759,
        "locationId": "16626038",
        "name": "Lappen",
        "longitude": 10.436663,
        "latitude": 63.279317
    },
    {
        "busStopId": 101760,
        "locationId": "16626037",
        "name": "Moen Industriområde",
        "longitude": 10.43439,
        "latitude": 63.283469
    },
    {
        "busStopId": 101761,
        "locationId": "16011541",
        "name": "Valentinlystv.",
        "longitude": 10.430213,
        "latitude": 63.418719
    },
    {
        "busStopId": 101762,
        "locationId": "16011540",
        "name": "Valentinlyst",
        "longitude": 10.440822,
        "latitude": 63.424667
    },
    {
        "busStopId": 101763,
        "locationId": "16011538",
        "name": "Bratsberg Rides.",
        "longitude": 10.468382,
        "latitude": 63.339813
    },
    {
        "busStopId": 101764,
        "locationId": "16011535",
        "name": "Utleirmark",
        "longitude": 10.411977,
        "latitude": 63.389364
    },
    {
        "busStopId": 101765,
        "locationId": "16011534",
        "name": "Harald Hårfagres gate",
        "longitude": 10.439376,
        "latitude": 63.444855
    },
    {
        "busStopId": 101766,
        "locationId": "16011533",
        "name": "NTNU Dragvoll",
        "longitude": 10.470161,
        "latitude": 63.410546
    },
    {
        "busStopId": 101767,
        "locationId": "16011531",
        "name": "Ugla",
        "longitude": 10.341406,
        "latitude": 63.400411
    },
    {
        "busStopId": 101768,
        "locationId": "16011521",
        "name": "Tyholt",
        "longitude": 10.433088,
        "latitude": 63.427818
    },
    {
        "busStopId": 101769,
        "locationId": "16011520",
        "name": "Tvetestien",
        "longitude": 10.372721,
        "latitude": 63.418023
    },
    {
        "busStopId": 101770,
        "locationId": "16011519",
        "name": "Tverregga",
        "longitude": 10.433672,
        "latitude": 63.38299
    },
    {
        "busStopId": 101771,
        "locationId": "16011518",
        "name": "Tunvegen",
        "longitude": 10.484399,
        "latitude": 63.424904
    },
    {
        "busStopId": 101772,
        "locationId": "16011517",
        "name": "Isdamveien",
        "longitude": 10.377904,
        "latitude": 63.345733
    },
    {
        "busStopId": 101773,
        "locationId": "16011516",
        "name": "Travbanen",
        "longitude": 10.472631,
        "latitude": 63.432234
    },
    {
        "busStopId": 101774,
        "locationId": "16011515",
        "name": "Travbanevegen",
        "longitude": 10.469937,
        "latitude": 63.43325
    },
    {
        "busStopId": 101775,
        "locationId": "16011514",
        "name": "Torvtaket",
        "longitude": 10.377275,
        "latitude": 63.348405
    },
    {
        "busStopId": 101776,
        "locationId": "16011151",
        "name": "Granåsvegen",
        "longitude": 10.45948,
        "latitude": 63.418349
    },
    {
        "busStopId": 101777,
        "locationId": "16011150",
        "name": "Granåsen gård",
        "longitude": 10.469577,
        "latitude": 63.414908
    },
    {
        "busStopId": 101778,
        "locationId": "16011149",
        "name": "Granhaugan",
        "longitude": 10.386312,
        "latitude": 63.370128
    },
    {
        "busStopId": 101779,
        "locationId": "16011148",
        "name": "Okstadøy",
        "longitude": 10.366531,
        "latitude": 63.374235
    },
    {
        "busStopId": 101780,
        "locationId": "16011147",
        "name": "Gildheim",
        "longitude": 10.461977,
        "latitude": 63.434013
    },
    {
        "busStopId": 101781,
        "locationId": "16011146",
        "name": "Gartnerhallen",
        "longitude": 10.464717,
        "latitude": 63.425206
    },
    {
        "busStopId": 101782,
        "locationId": "16011145",
        "name": "Gammel-lina",
        "longitude": 10.365373,
        "latitude": 63.383984
    },
    {
        "busStopId": 101783,
        "locationId": "16011144",
        "name": "Gamle Oslovei",
        "longitude": 10.352805,
        "latitude": 63.417569
    },
    {
        "busStopId": 101784,
        "locationId": "16011142",
        "name": "Reppevegen",
        "longitude": 10.543032,
        "latitude": 63.423486
    },
    {
        "busStopId": 101785,
        "locationId": "16011141",
        "name": "Henrik Ourens veg",
        "longitude": 10.446284,
        "latitude": 63.416041
    },
    {
        "busStopId": 101786,
        "locationId": "16011140",
        "name": "Fykenborg",
        "longitude": 10.554818,
        "latitude": 63.420109
    },
    {
        "busStopId": 101787,
        "locationId": "16011139",
        "name": "Furuhaugen",
        "longitude": 10.338747,
        "latitude": 63.376364
    },
    {
        "busStopId": 101788,
        "locationId": "16011138",
        "name": "Framveien",
        "longitude": 10.362157,
        "latitude": 63.415764
    },
    {
        "busStopId": 101789,
        "locationId": "16011137",
        "name": "Forsøket",
        "longitude": 10.371077,
        "latitude": 63.383203
    },
    {
        "busStopId": 101790,
        "locationId": "16011136",
        "name": "Øvre Tvereggen",
        "longitude": 10.423,
        "latitude": 63.385658
    },
    {
        "busStopId": 101791,
        "locationId": "16011135",
        "name": "F. Rambech",
        "longitude": 10.35179,
        "latitude": 63.335508
    },
    {
        "busStopId": 101792,
        "locationId": "16010533",
        "name": "NTNU Dragvoll",
        "longitude": 10.470709,
        "latitude": 63.410397
    },
    {
        "busStopId": 101793,
        "locationId": "16010531",
        "name": "Ugla",
        "longitude": 10.341019,
        "latitude": 63.400749
    },
    {
        "busStopId": 101794,
        "locationId": "16010521",
        "name": "Tyholt",
        "longitude": 10.432378,
        "latitude": 63.427637
    },
    {
        "busStopId": 101795,
        "locationId": "16010520",
        "name": "Tvetestien",
        "longitude": 10.372074,
        "latitude": 63.417903
    },
    {
        "busStopId": 101796,
        "locationId": "16010519",
        "name": "Tverregga",
        "longitude": 10.432378,
        "latitude": 63.38338
    },
    {
        "busStopId": 101797,
        "locationId": "16010518",
        "name": "Tunvegen",
        "longitude": 10.484238,
        "latitude": 63.424109
    },
    {
        "busStopId": 101798,
        "locationId": "16010517",
        "name": "Isdamveien",
        "longitude": 10.377105,
        "latitude": 63.344939
    },
    {
        "busStopId": 101799,
        "locationId": "16010516",
        "name": "Travbanen",
        "longitude": 10.472766,
        "latitude": 63.432053
    },
    {
        "busStopId": 101800,
        "locationId": "16010515",
        "name": "Travbanevegen",
        "longitude": 10.471419,
        "latitude": 63.433146
    },
    {
        "busStopId": 101801,
        "locationId": "16010514",
        "name": "Torvtaket",
        "longitude": 10.376844,
        "latitude": 63.348643
    },
    {
        "busStopId": 101802,
        "locationId": "16010513",
        "name": "Torvmyra",
        "longitude": 10.389906,
        "latitude": 63.361353
    },
    {
        "busStopId": 101803,
        "locationId": "16010512",
        "name": "Kroppnmarka snuplass",
        "longitude": 10.378084,
        "latitude": 63.382829
    },
    {
        "busStopId": 101804,
        "locationId": "16010510",
        "name": "Torplassen",
        "longitude": 10.35974,
        "latitude": 63.365078
    },
    {
        "busStopId": 101805,
        "locationId": "16010509",
        "name": "Thora Storms vei",
        "longitude": 10.3707,
        "latitude": 63.419828
    },
    {
        "busStopId": 101806,
        "locationId": "16010508",
        "name": "Tonstadgrenda",
        "longitude": 10.384875,
        "latitude": 63.361856
    },
    {
        "busStopId": 101807,
        "locationId": "16010507",
        "name": "Tonstadkrysset",
        "longitude": 10.374904,
        "latitude": 63.370337
    },
    {
        "busStopId": 101808,
        "locationId": "16010163",
        "name": "Hammersborg",
        "longitude": 10.357261,
        "latitude": 63.423682
    },
    {
        "busStopId": 101809,
        "locationId": "16010161",
        "name": "Hallfred Høyems v.",
        "longitude": 10.467098,
        "latitude": 63.419679
    },
    {
        "busStopId": 101810,
        "locationId": "16010156",
        "name": "Grilstadkleiva",
        "longitude": 10.500183,
        "latitude": 63.433592
    },
    {
        "busStopId": 101811,
        "locationId": "16010155",
        "name": "Gogstadbakken",
        "longitude": 10.308815,
        "latitude": 63.450416
    },
    {
        "busStopId": 101812,
        "locationId": "16010154",
        "name": "Gudruns gate",
        "longitude": 10.382764,
        "latitude": 63.42519
    },
    {
        "busStopId": 101813,
        "locationId": "16010153",
        "name": "Gudes gate",
        "longitude": 10.40789,
        "latitude": 63.420355
    },
    {
        "busStopId": 101814,
        "locationId": "16010152",
        "name": "Gryta",
        "longitude": 10.451413,
        "latitude": 63.406593
    },
    {
        "busStopId": 101815,
        "locationId": "16010151",
        "name": "Granåsvegen",
        "longitude": 10.458043,
        "latitude": 63.417324
    },
    {
        "busStopId": 101816,
        "locationId": "16010150",
        "name": "Granåsen gård",
        "longitude": 10.471347,
        "latitude": 63.414232
    },
    {
        "busStopId": 101817,
        "locationId": "16010149",
        "name": "Granhaugan",
        "longitude": 10.386627,
        "latitude": 63.370064
    },
    {
        "busStopId": 101818,
        "locationId": "16010148",
        "name": "Okstadøy",
        "longitude": 10.367609,
        "latitude": 63.373442
    },
    {
        "busStopId": 101819,
        "locationId": "16010147",
        "name": "Gildheim",
        "longitude": 10.463019,
        "latitude": 63.4336
    },
    {
        "busStopId": 101820,
        "locationId": "16010146",
        "name": "Gartnerhallen",
        "longitude": 10.464538,
        "latitude": 63.425165
    },
    {
        "busStopId": 101821,
        "locationId": "16010145",
        "name": "Gammel-lina",
        "longitude": 10.365166,
        "latitude": 63.383915
    },
    {
        "busStopId": 101822,
        "locationId": "16010144",
        "name": "Gamle Oslovei",
        "longitude": 10.354808,
        "latitude": 63.417477
    },
    {
        "busStopId": 101823,
        "locationId": "17145562",
        "name": "Elverum",
        "longitude": 11.082327,
        "latitude": 63.381766
    },
    {
        "busStopId": 101824,
        "locationId": "17145561",
        "name": "Elvran",
        "longitude": 11.064657,
        "latitude": 63.39348
    },
    {
        "busStopId": 101825,
        "locationId": "17145560",
        "name": "Veisethveien",
        "longitude": 11.043717,
        "latitude": 63.394321
    },
    {
        "busStopId": 101826,
        "locationId": "17145559",
        "name": "Sætnan",
        "longitude": 11.011396,
        "latitude": 63.394506
    },
    {
        "busStopId": 101827,
        "locationId": "17145558",
        "name": "Draveng",
        "longitude": 10.966399,
        "latitude": 63.393697
    },
    {
        "busStopId": 101828,
        "locationId": "17145557",
        "name": "Jullum bru",
        "longitude": 10.946044,
        "latitude": 63.401232
    },
    {
        "busStopId": 101829,
        "locationId": "17145556",
        "name": "Jullum",
        "longitude": 10.939513,
        "latitude": 63.407884
    },
    {
        "busStopId": 101830,
        "locationId": "17145555",
        "name": "Lerbakken",
        "longitude": 10.932452,
        "latitude": 63.416749
    },
    {
        "busStopId": 101831,
        "locationId": "17145554",
        "name": "Leren",
        "longitude": 10.927448,
        "latitude": 63.430795
    },
    {
        "busStopId": 101832,
        "locationId": "17145553",
        "name": "Bjørgmyrene",
        "longitude": 10.927754,
        "latitude": 63.436564
    },
    {
        "busStopId": 101833,
        "locationId": "17145552",
        "name": "Malvikkrysset",
        "longitude": 10.922598,
        "latitude": 63.444003
    },
    {
        "busStopId": 101834,
        "locationId": "17145551",
        "name": "Hydrost. Hell",
        "longitude": 10.910731,
        "latitude": 63.445007
    },
    {
        "busStopId": 101835,
        "locationId": "17145510",
        "name": "Stjørdal st.",
        "longitude": 10.913839,
        "latitude": 63.47014
    },
    {
        "busStopId": 101836,
        "locationId": "17142580",
        "name": "Fosslia Fjellhall",
        "longitude": 10.93291,
        "latitude": 63.479688
    },
    {
        "busStopId": 101837,
        "locationId": "17142562",
        "name": "Elverum",
        "longitude": 11.082507,
        "latitude": 63.381734
    },
    {
        "busStopId": 101838,
        "locationId": "16659443",
        "name": "Stugudalen",
        "longitude": 11.873204,
        "latitude": 62.900399
    },
    {
        "busStopId": 101839,
        "locationId": "16389220",
        "name": "Bårdshaugbrua",
        "longitude": 9.834351,
        "latitude": 63.297249
    },
    {
        "busStopId": 101840,
        "locationId": "16389163",
        "name": "Vinterdal",
        "longitude": 9.60829,
        "latitude": 63.291052
    },
    {
        "busStopId": 101841,
        "locationId": "16389161",
        "name": "Bjørnbet",
        "longitude": 9.922566,
        "latitude": 63.435532
    },
    {
        "busStopId": 101842,
        "locationId": "16389159",
        "name": "Gjeitaveien",
        "longitude": 9.948096,
        "latitude": 63.426713
    },
    {
        "busStopId": 101843,
        "locationId": "16389156",
        "name": "Klomstein",
        "longitude": 9.954313,
        "latitude": 63.3962
    },
    {
        "busStopId": 101844,
        "locationId": "16389155",
        "name": "Haugnes",
        "longitude": 9.942814,
        "latitude": 63.377705
    },
    {
        "busStopId": 101845,
        "locationId": "16389151",
        "name": "Slettvollen",
        "longitude": 9.885079,
        "latitude": 63.344839
    },
    {
        "busStopId": 101846,
        "locationId": "16389150",
        "name": "Almlia",
        "longitude": 9.867445,
        "latitude": 63.339075
    },
    {
        "busStopId": 101847,
        "locationId": "16389149",
        "name": "Furen",
        "longitude": 9.854519,
        "latitude": 63.335197
    },
    {
        "busStopId": 101848,
        "locationId": "16389148",
        "name": "Reitan",
        "longitude": 9.822278,
        "latitude": 63.323689
    },
    {
        "busStopId": 101849,
        "locationId": "16389147",
        "name": "Gjølme",
        "longitude": 9.809971,
        "latitude": 63.316219
    },
    {
        "busStopId": 101850,
        "locationId": "16389143",
        "name": "Harangen",
        "longitude": 9.665046,
        "latitude": 63.281627
    },
    {
        "busStopId": 101851,
        "locationId": "16389142",
        "name": "Osbrua Orkdal",
        "longitude": 9.69549,
        "latitude": 63.28693
    },
    {
        "busStopId": 101852,
        "locationId": "16389141",
        "name": "Annøl",
        "longitude": 9.762504,
        "latitude": 63.304062
    },
    {
        "busStopId": 101853,
        "locationId": "16389140",
        "name": "Storøya",
        "longitude": 9.774811,
        "latitude": 63.306266
    },
    {
        "busStopId": 101854,
        "locationId": "16389138",
        "name": "OTI-senteret",
        "longitude": 9.839957,
        "latitude": 63.306274
    },
    {
        "busStopId": 101855,
        "locationId": "16245152",
        "name": "Frengen vegd.",
        "longitude": 9.914185,
        "latitude": 63.694765
    },
    {
        "busStopId": 101856,
        "locationId": "16245150",
        "name": "Fevåg vegdele",
        "longitude": 9.860313,
        "latitude": 63.677817
    },
    {
        "busStopId": 101857,
        "locationId": "16245149",
        "name": "Hårberg",
        "longitude": 9.840262,
        "latitude": 63.646379
    },
    {
        "busStopId": 101858,
        "locationId": "16245148",
        "name": "Hasselbrua",
        "longitude": 9.858651,
        "latitude": 63.644242
    },
    {
        "busStopId": 101859,
        "locationId": "16245147",
        "name": "Fevåg/Hasselvika skole",
        "longitude": 9.842023,
        "latitude": 63.636899
    },
    {
        "busStopId": 101860,
        "locationId": "16245146",
        "name": "Hasselvika",
        "longitude": 9.827911,
        "latitude": 63.632112
    },
    {
        "busStopId": 101861,
        "locationId": "16245145",
        "name": "Sørvika",
        "longitude": 9.84585,
        "latitude": 63.613589
    },
    {
        "busStopId": 101862,
        "locationId": "16245144",
        "name": "Årlotten",
        "longitude": 9.847224,
        "latitude": 63.607764
    },
    {
        "busStopId": 101863,
        "locationId": "16245141",
        "name": "Skaugabrua",
        "longitude": 9.91856,
        "latitude": 63.593629
    },
    {
        "busStopId": 101864,
        "locationId": "16245140",
        "name": "Uddu",
        "longitude": 9.925162,
        "latitude": 63.588483
    },
    {
        "busStopId": 101865,
        "locationId": "16245139",
        "name": "Rødsjøen",
        "longitude": 10.217842,
        "latitude": 63.779293
    },
    {
        "busStopId": 101866,
        "locationId": "16245138",
        "name": "Øyan",
        "longitude": 10.237632,
        "latitude": 63.754169
    },
    {
        "busStopId": 101867,
        "locationId": "16245137",
        "name": "Skiheisen",
        "longitude": 10.235332,
        "latitude": 63.714348
    },
    {
        "busStopId": 101868,
        "locationId": "16245136",
        "name": "Hogsdalen",
        "longitude": 10.23951,
        "latitude": 63.698443
    },
    {
        "busStopId": 101869,
        "locationId": "16245135",
        "name": "Olsøya",
        "longitude": 10.213144,
        "latitude": 63.673678
    },
    {
        "busStopId": 101870,
        "locationId": "16245134",
        "name": "Staurset",
        "longitude": 10.189384,
        "latitude": 63.666168
    },
    {
        "busStopId": 101871,
        "locationId": "16128403",
        "name": "Vasslia",
        "longitude": 9.24724,
        "latitude": 63.223117
    },
    {
        "busStopId": 101872,
        "locationId": "16128402",
        "name": "Flauglia",
        "longitude": 9.307454,
        "latitude": 63.226294
    },
    {
        "busStopId": 101873,
        "locationId": "16128401",
        "name": "Slupphaugen",
        "longitude": 9.348507,
        "latitude": 63.229952
    },
    {
        "busStopId": 101874,
        "locationId": "16011796",
        "name": "Weidemannsveien",
        "longitude": 10.427626,
        "latitude": 63.433543
    },
    {
        "busStopId": 101875,
        "locationId": "16011795",
        "name": "Flakk fergeleie",
        "longitude": 10.200047,
        "latitude": 63.451215
    },
    {
        "busStopId": 101876,
        "locationId": "16011507",
        "name": "Tonstadkrysset",
        "longitude": 10.374904,
        "latitude": 63.370337
    },
    {
        "busStopId": 101877,
        "locationId": "16011503",
        "name": "Tungasletta",
        "longitude": 10.463927,
        "latitude": 63.423096
    },
    {
        "busStopId": 101878,
        "locationId": "16011428",
        "name": "Skjefstadbakken",
        "longitude": 10.272253,
        "latitude": 63.340691
    },
    {
        "busStopId": 101879,
        "locationId": "16011403",
        "name": "Gyldenløves gate",
        "longitude": 10.420152,
        "latitude": 63.430783
    },
    {
        "busStopId": 101880,
        "locationId": "16011266",
        "name": "Dragvoll/Lohove",
        "longitude": 10.459309,
        "latitude": 63.405153
    },
    {
        "busStopId": 101881,
        "locationId": "16011189",
        "name": "IKEA",
        "longitude": 10.472155,
        "latitude": 63.427974
    },
    {
        "busStopId": 101882,
        "locationId": "16011130",
        "name": "Festningsgata",
        "longitude": 10.41646,
        "latitude": 63.427866
    },
    {
        "busStopId": 101883,
        "locationId": "16011078",
        "name": "Bergheim",
        "longitude": 10.457055,
        "latitude": 63.410445
    },
    {
        "busStopId": 101884,
        "locationId": "16010907",
        "name": "Kongens gt - K2",
        "longitude": 10.391819,
        "latitude": 63.430494
    },
    {
        "busStopId": 101885,
        "locationId": "16010905",
        "name": "Kongens gt - K1",
        "longitude": 10.390624,
        "latitude": 63.430695
    },
    {
        "busStopId": 101886,
        "locationId": "16010816",
        "name": "Trondheim S 6",
        "longitude": 10.40153,
        "latitude": 63.436074
    },
    {
        "busStopId": 101887,
        "locationId": "16642101",
        "name": "Blomliene",
        "longitude": 11.082893,
        "latitude": 63.314912
    },
    {
        "busStopId": 101888,
        "locationId": "16632038",
        "name": "Leistadmoen",
        "longitude": 10.630403,
        "latitude": 63.42566
    },
    {
        "busStopId": 101889,
        "locationId": "16632037",
        "name": "Elvdalen",
        "longitude": 10.628534,
        "latitude": 63.43016
    },
    {
        "busStopId": 101890,
        "locationId": "16632036",
        "name": "Vikhammeråsen",
        "longitude": 10.631193,
        "latitude": 63.432892
    },
    {
        "busStopId": 101891,
        "locationId": "16632035",
        "name": "Vikhammeråsen rundkjøring",
        "longitude": 10.642925,
        "latitude": 63.431872
    },
    {
        "busStopId": 101892,
        "locationId": "16573080",
        "name": "Grønnesset",
        "longitude": 10.133742,
        "latitude": 63.216095
    },
    {
        "busStopId": 101893,
        "locationId": "16573079",
        "name": "Gangaunet",
        "longitude": 10.122324,
        "latitude": 63.22166
    },
    {
        "busStopId": 101894,
        "locationId": "16573078",
        "name": "Gangaunet boligfelt",
        "longitude": 10.124498,
        "latitude": 63.223943
    },
    {
        "busStopId": 101895,
        "locationId": "16573077",
        "name": "Konnstad",
        "longitude": 10.127508,
        "latitude": 63.2261
    },
    {
        "busStopId": 101896,
        "locationId": "16573076",
        "name": "Hove Camp.",
        "longitude": 10.129825,
        "latitude": 63.232509
    },
    {
        "busStopId": 101897,
        "locationId": "16573075",
        "name": "Merket V.",
        "longitude": 10.145097,
        "latitude": 63.236712
    },
    {
        "busStopId": 101898,
        "locationId": "16573074",
        "name": "Merket Ø.",
        "longitude": 10.1501,
        "latitude": 63.23977
    },
    {
        "busStopId": 101899,
        "locationId": "16573073",
        "name": "Sandvika",
        "longitude": 10.15964,
        "latitude": 63.244324
    },
    {
        "busStopId": 101900,
        "locationId": "16573072",
        "name": "Sagberget",
        "longitude": 10.167555,
        "latitude": 63.245675
    },
    {
        "busStopId": 101901,
        "locationId": "16573071",
        "name": "Onsøyen snekkeri",
        "longitude": 10.171884,
        "latitude": 63.24819
    },
    {
        "busStopId": 101902,
        "locationId": "16573070",
        "name": "Vigdalsmo",
        "longitude": 10.176897,
        "latitude": 63.251489
    },
    {
        "busStopId": 101903,
        "locationId": "17142502",
        "name": "Hell",
        "longitude": 10.903158,
        "latitude": 63.443851
    },
    {
        "busStopId": 101904,
        "locationId": "17142501",
        "name": "Gjevingåsen",
        "longitude": 10.885452,
        "latitude": 63.441509
    },
    {
        "busStopId": 101905,
        "locationId": "16389219",
        "name": "Strandheim",
        "longitude": 9.864194,
        "latitude": 63.312544
    },
    {
        "busStopId": 101906,
        "locationId": "16389217",
        "name": "Torget Orkanger",
        "longitude": 9.848734,
        "latitude": 63.304066
    },
    {
        "busStopId": 101907,
        "locationId": "16389168",
        "name": "Orkanger Skysstasjon",
        "longitude": 9.847512,
        "latitude": 63.29842
    },
    {
        "busStopId": 101908,
        "locationId": "16389165",
        "name": "Hov",
        "longitude": 9.855453,
        "latitude": 63.309179
    },
    {
        "busStopId": 101909,
        "locationId": "16389103",
        "name": "Fannrem stasjon",
        "longitude": 9.81369,
        "latitude": 63.266897
    },
    {
        "busStopId": 101910,
        "locationId": "16389102",
        "name": "Fannremsflata",
        "longitude": 9.819664,
        "latitude": 63.26838
    },
    {
        "busStopId": 101911,
        "locationId": "16389101",
        "name": "Mo-marked",
        "longitude": 9.822089,
        "latitude": 63.270142
    },
    {
        "busStopId": 101912,
        "locationId": "16627020",
        "name": "Prestgårdskrysset",
        "longitude": 10.474293,
        "latitude": 63.299175
    },
    {
        "busStopId": 101913,
        "locationId": "16627019",
        "name": "Hesttrø",
        "longitude": 10.483223,
        "latitude": 63.298077
    },
    {
        "busStopId": 101914,
        "locationId": "16627018",
        "name": "Klæbu sentrum",
        "longitude": 10.484956,
        "latitude": 63.300151
    },
    {
        "busStopId": 101915,
        "locationId": "16627017",
        "name": "Rydland",
        "longitude": 10.487238,
        "latitude": 63.302202
    },
    {
        "busStopId": 101916,
        "locationId": "16627016",
        "name": "Aune",
        "longitude": 10.485423,
        "latitude": 63.309893
    },
    {
        "busStopId": 101917,
        "locationId": "16627015",
        "name": "Lysklett",
        "longitude": 10.479872,
        "latitude": 63.317313
    },
    {
        "busStopId": 101918,
        "locationId": "16627014",
        "name": "Holten",
        "longitude": 10.500201,
        "latitude": 63.319955
    },
    {
        "busStopId": 101919,
        "locationId": "16627013",
        "name": "Solem bru",
        "longitude": 10.508241,
        "latitude": 63.322278
    },
    {
        "busStopId": 101920,
        "locationId": "16627012",
        "name": "Bostad",
        "longitude": 10.508834,
        "latitude": 63.32431
    },
    {
        "busStopId": 101921,
        "locationId": "16627011",
        "name": "Nyhus Klæbu",
        "longitude": 10.498467,
        "latitude": 63.328492
    },
    {
        "busStopId": 101922,
        "locationId": "16627010",
        "name": "Sve",
        "longitude": 10.494838,
        "latitude": 63.329428
    },
    {
        "busStopId": 101923,
        "locationId": "16627009",
        "name": "Storugla",
        "longitude": 10.49181,
        "latitude": 63.33377
    },
    {
        "busStopId": 101924,
        "locationId": "16627008",
        "name": "Korsmo",
        "longitude": 10.479746,
        "latitude": 63.321487
    },
    {
        "busStopId": 101925,
        "locationId": "16627007",
        "name": "Ulseth",
        "longitude": 10.482351,
        "latitude": 63.326291
    },
    {
        "busStopId": 101926,
        "locationId": "16627006",
        "name": "Amunddal",
        "longitude": 10.48166,
        "latitude": 63.334488
    },
    {
        "busStopId": 101927,
        "locationId": "16011530",
        "name": "Utleirmark",
        "longitude": 10.413415,
        "latitude": 63.389646
    },
    {
        "busStopId": 101928,
        "locationId": "16626065",
        "name": "Tanemskrysset 2",
        "longitude": 10.427482,
        "latitude": 63.312633
    },
    {
        "busStopId": 101929,
        "locationId": "16626064",
        "name": "Tangen Klæbu",
        "longitude": 10.431057,
        "latitude": 63.240623
    },
    {
        "busStopId": 101930,
        "locationId": "16626063",
        "name": "Målsjøen",
        "longitude": 10.429988,
        "latitude": 63.244377
    },
    {
        "busStopId": 101931,
        "locationId": "16626061",
        "name": "Storvollen",
        "longitude": 10.440427,
        "latitude": 63.254999
    },
    {
        "busStopId": 101932,
        "locationId": "16626060",
        "name": "Moenkrysset",
        "longitude": 10.437965,
        "latitude": 63.277879
    },
    {
        "busStopId": 101933,
        "locationId": "16626059",
        "name": "Moen gård",
        "longitude": 10.446922,
        "latitude": 63.278828
    },
    {
        "busStopId": 101934,
        "locationId": "16626058",
        "name": "Moodden",
        "longitude": 10.467349,
        "latitude": 63.281494
    },
    {
        "busStopId": 101935,
        "locationId": "16626057",
        "name": "Svean",
        "longitude": 10.472119,
        "latitude": 63.280759
    },
    {
        "busStopId": 101936,
        "locationId": "16626056",
        "name": "Haugum",
        "longitude": 10.481094,
        "latitude": 63.295562
    },
    {
        "busStopId": 101937,
        "locationId": "16626055",
        "name": "Husby",
        "longitude": 10.485441,
        "latitude": 63.289788
    },
    {
        "busStopId": 101938,
        "locationId": "16626054",
        "name": "Eggan Klæbu",
        "longitude": 10.482468,
        "latitude": 63.284664
    },
    {
        "busStopId": 101939,
        "locationId": "16011568",
        "name": "Østre Rosten",
        "longitude": 10.381884,
        "latitude": 63.362336
    },
    {
        "busStopId": 101940,
        "locationId": "16011567",
        "name": "Østre Berg",
        "longitude": 10.429997,
        "latitude": 63.416009
    },
    {
        "busStopId": 101941,
        "locationId": "16011566",
        "name": "Østmarkveien",
        "longitude": 10.448943,
        "latitude": 63.449774
    },
    {
        "busStopId": 101942,
        "locationId": "16011560",
        "name": "Byåsen B.senter",
        "longitude": 10.353542,
        "latitude": 63.416986
    },
    {
        "busStopId": 101943,
        "locationId": "16011559",
        "name": "Vikåsen",
        "longitude": 10.529639,
        "latitude": 63.413782
    },
    {
        "busStopId": 101944,
        "locationId": "16011558",
        "name": "Vikåsen nedre",
        "longitude": 10.533861,
        "latitude": 63.417095
    },
    {
        "busStopId": 101945,
        "locationId": "16011557",
        "name": "Vikåsen skole",
        "longitude": 10.537768,
        "latitude": 63.412664
    },
    {
        "busStopId": 101946,
        "locationId": "16011553",
        "name": "Voll studentby",
        "longitude": 10.443939,
        "latitude": 63.409235
    },
    {
        "busStopId": 101947,
        "locationId": "16011550",
        "name": "Vollabakken",
        "longitude": 10.400488,
        "latitude": 63.421822
    },
    {
        "busStopId": 101948,
        "locationId": "16011549",
        "name": "Strandveikaia",
        "longitude": 10.42697,
        "latitude": 63.44269
    },
    {
        "busStopId": 101949,
        "locationId": "16011548",
        "name": "Venusvegen",
        "longitude": 10.426512,
        "latitude": 63.391879
    },
    {
        "busStopId": 101950,
        "locationId": "16011547",
        "name": "Vestre Rosten",
        "longitude": 10.369774,
        "latitude": 63.361365
    },
    {
        "busStopId": 101951,
        "locationId": "16011545",
        "name": "Voll gård",
        "longitude": 10.446715,
        "latitude": 63.410779
    },
    {
        "busStopId": 101952,
        "locationId": "16011544",
        "name": "Postterminalen",
        "longitude": 10.397568,
        "latitude": 63.397262
    },
    {
        "busStopId": 101953,
        "locationId": "16011543",
        "name": "Valøyvegen",
        "longitude": 10.39914,
        "latitude": 63.409363
    },
    {
        "busStopId": 101954,
        "locationId": "16011542",
        "name": "Valgrindvegen",
        "longitude": 10.402473,
        "latitude": 63.410373
    },
    {
        "busStopId": 101955,
        "locationId": "16011174",
        "name": "Heimdalsvegen",
        "longitude": 10.352868,
        "latitude": 63.347849
    },
    {
        "busStopId": 101956,
        "locationId": "16011172",
        "name": "Hitravegen",
        "longitude": 10.514691,
        "latitude": 63.431635
    },
    {
        "busStopId": 101957,
        "locationId": "16011170",
        "name": "Kolstad/Heimdal",
        "longitude": 10.357378,
        "latitude": 63.351584
    },
    {
        "busStopId": 101958,
        "locationId": "16011169",
        "name": "Havstadsenteret",
        "longitude": 10.359911,
        "latitude": 63.407735
    },
    {
        "busStopId": 101959,
        "locationId": "16011168",
        "name": "Haugnessvingen",
        "longitude": 10.394514,
        "latitude": 63.38792
    },
    {
        "busStopId": 101960,
        "locationId": "16011167",
        "name": "Haukåsen",
        "longitude": 10.32158,
        "latitude": 63.395383
    },
    {
        "busStopId": 101961,
        "locationId": "16011165",
        "name": "Hanskemakerbk.",
        "longitude": 10.365786,
        "latitude": 63.4293
    },
    {
        "busStopId": 101962,
        "locationId": "16011163",
        "name": "Hammersborg",
        "longitude": 10.357234,
        "latitude": 63.423827
    },
    {
        "busStopId": 101963,
        "locationId": "16011161",
        "name": "Hallfred Høyems v.",
        "longitude": 10.467772,
        "latitude": 63.419816
    },
    {
        "busStopId": 101964,
        "locationId": "16011156",
        "name": "Grilstadkleiva",
        "longitude": 10.500255,
        "latitude": 63.433833
    },
    {
        "busStopId": 101965,
        "locationId": "16011155",
        "name": "Gogstadbakken",
        "longitude": 10.308734,
        "latitude": 63.45038
    },
    {
        "busStopId": 101966,
        "locationId": "16011154",
        "name": "Gudruns gate",
        "longitude": 10.382557,
        "latitude": 63.425182
    },
    {
        "busStopId": 101967,
        "locationId": "16011152",
        "name": "Gryta",
        "longitude": 10.451638,
        "latitude": 63.406597
    },
    {
        "busStopId": 101968,
        "locationId": "16010558",
        "name": "Vikåsen nedre",
        "longitude": 10.533582,
        "latitude": 63.417195
    },
    {
        "busStopId": 101969,
        "locationId": "16010557",
        "name": "Vikåsen skole",
        "longitude": 10.53775,
        "latitude": 63.412789
    },
    {
        "busStopId": 101970,
        "locationId": "16010553",
        "name": "Voll studentby",
        "longitude": 10.444595,
        "latitude": 63.409532
    },
    {
        "busStopId": 101971,
        "locationId": "16010550",
        "name": "Vollabakken",
        "longitude": 10.40047,
        "latitude": 63.421741
    },
    {
        "busStopId": 101972,
        "locationId": "16010549",
        "name": "Strandveikaia",
        "longitude": 10.427267,
        "latitude": 63.442911
    },
    {
        "busStopId": 101973,
        "locationId": "16010548",
        "name": "Venusvegen",
        "longitude": 10.426099,
        "latitude": 63.392016
    },
    {
        "busStopId": 101974,
        "locationId": "16010547",
        "name": "Vestre Rosten",
        "longitude": 10.368768,
        "latitude": 63.360261
    },
    {
        "busStopId": 101975,
        "locationId": "16010546",
        "name": "Vestlia",
        "longitude": 10.434992,
        "latitude": 63.399434
    },
    {
        "busStopId": 101976,
        "locationId": "16010545",
        "name": "Voll gård",
        "longitude": 10.447865,
        "latitude": 63.410819
    },
    {
        "busStopId": 101977,
        "locationId": "16010544",
        "name": "Postterminalen",
        "longitude": 10.396329,
        "latitude": 63.39688
    },
    {
        "busStopId": 101978,
        "locationId": "16010543",
        "name": "Valøyvegen",
        "longitude": 10.398026,
        "latitude": 63.407851
    },
    {
        "busStopId": 101979,
        "locationId": "16010542",
        "name": "Valgrindvegen",
        "longitude": 10.402868,
        "latitude": 63.409392
    },
    {
        "busStopId": 101980,
        "locationId": "16010540",
        "name": "Valentinlyst",
        "longitude": 10.440256,
        "latitude": 63.424494
    },
    {
        "busStopId": 101981,
        "locationId": "16010538",
        "name": "Bratsberg Rides.",
        "longitude": 10.468382,
        "latitude": 63.339813
    },
    {
        "busStopId": 101982,
        "locationId": "16010535",
        "name": "Utleirmark",
        "longitude": 10.412157,
        "latitude": 63.390064
    },
    {
        "busStopId": 101983,
        "locationId": "16010534",
        "name": "Harald Hårfagres gate",
        "longitude": 10.439906,
        "latitude": 63.444626
    },
    {
        "busStopId": 101984,
        "locationId": "16010182",
        "name": "Høiset",
        "longitude": 10.463217,
        "latitude": 63.411937
    },
    {
        "busStopId": 101985,
        "locationId": "16010181",
        "name": "Høgreina",
        "longitude": 10.340265,
        "latitude": 63.380696
    },
    {
        "busStopId": 101986,
        "locationId": "16010180",
        "name": "Husebytunet",
        "longitude": 10.344945,
        "latitude": 63.368703
    },
    {
        "busStopId": 101987,
        "locationId": "16010179",
        "name": "Hegsnippen",
        "longitude": 10.146974,
        "latitude": 63.421484
    },
    {
        "busStopId": 101988,
        "locationId": "16010178",
        "name": "Hornebergvegen",
        "longitude": 10.401359,
        "latitude": 63.393653
    },
    {
        "busStopId": 101989,
        "locationId": "16010177",
        "name": "Hoeggen skole",
        "longitude": 10.433743,
        "latitude": 63.401232
    },
    {
        "busStopId": 101990,
        "locationId": "16010174",
        "name": "Heimdalsvegen",
        "longitude": 10.354045,
        "latitude": 63.348304
    },
    {
        "busStopId": 101991,
        "locationId": "16010173",
        "name": "Hjalmar Johansens vei",
        "longitude": 10.366235,
        "latitude": 63.423578
    },
    {
        "busStopId": 101992,
        "locationId": "16010172",
        "name": "Hitravegen",
        "longitude": 10.512337,
        "latitude": 63.432218
    },
    {
        "busStopId": 101993,
        "locationId": "16010171",
        "name": "Heimdal sentrum",
        "longitude": 10.356758,
        "latitude": 63.35158
    },
    {
        "busStopId": 101994,
        "locationId": "16010170",
        "name": "Kolstad/Heimdal",
        "longitude": 10.35736,
        "latitude": 63.351584
    },
    {
        "busStopId": 101995,
        "locationId": "16010169",
        "name": "Havstadsenteret",
        "longitude": 10.359408,
        "latitude": 63.407622
    },
    {
        "busStopId": 101996,
        "locationId": "16010168",
        "name": "Haugnessvingen",
        "longitude": 10.394002,
        "latitude": 63.387952
    },
    {
        "busStopId": 101997,
        "locationId": "16010167",
        "name": "Haukåsen",
        "longitude": 10.32158,
        "latitude": 63.395383
    },
    {
        "busStopId": 101998,
        "locationId": "16010166",
        "name": "Harald Bothners veg",
        "longitude": 10.419406,
        "latitude": 63.41736
    },
    {
        "busStopId": 101999,
        "locationId": "16010165",
        "name": "Hanskemakerbk.",
        "longitude": 10.365471,
        "latitude": 63.429385
    },
    {
        "busStopId": 102000,
        "locationId": "17257760",
        "name": "Langøra",
        "longitude": 11.196934,
        "latitude": 64.289105
    },
    {
        "busStopId": 102001,
        "locationId": "17257758",
        "name": "Fossli vd.",
        "longitude": 11.197563,
        "latitude": 64.261761
    },
    {
        "busStopId": 102002,
        "locationId": "17257595",
        "name": "Meungen",
        "longitude": 10.920549,
        "latitude": 64.237338
    },
    {
        "busStopId": 102003,
        "locationId": "17257594",
        "name": "Storlidalen",
        "longitude": 11.022517,
        "latitude": 64.227247
    },
    {
        "busStopId": 102004,
        "locationId": "17257593",
        "name": "Øyungen bru",
        "longitude": 11.058037,
        "latitude": 64.238556
    },
    {
        "busStopId": 102005,
        "locationId": "17257591",
        "name": "Myrmoen",
        "longitude": 11.120469,
        "latitude": 64.254766
    },
    {
        "busStopId": 102006,
        "locationId": "17257590",
        "name": "Fosslia",
        "longitude": 11.170515,
        "latitude": 64.252225
    },
    {
        "busStopId": 102007,
        "locationId": "17186962",
        "name": "Vollakrysset",
        "longitude": 10.201134,
        "latitude": 63.549869
    },
    {
        "busStopId": 102008,
        "locationId": "17186961",
        "name": "Kleivavegen",
        "longitude": 10.20779,
        "latitude": 63.552041
    },
    {
        "busStopId": 102009,
        "locationId": "17186958",
        "name": "Fagerli vd",
        "longitude": 10.181371,
        "latitude": 63.558102
    },
    {
        "busStopId": 102010,
        "locationId": "17186902",
        "name": "Raumyra",
        "longitude": 10.13659,
        "latitude": 63.58762
    },
    {
        "busStopId": 102011,
        "locationId": "17186901",
        "name": "Keiseråsen",
        "longitude": 10.168839,
        "latitude": 63.575089
    },
    {
        "busStopId": 102012,
        "locationId": "17186821",
        "name": "Vanvikan",
        "longitude": 10.22307,
        "latitude": 63.55351
    },
    {
        "busStopId": 102013,
        "locationId": "17149003",
        "name": "Statoil Stjørdal",
        "longitude": 10.907775,
        "latitude": 63.47191
    },
    {
        "busStopId": 102014,
        "locationId": "17145707",
        "name": "Torvet Stjørdal",
        "longitude": 10.925364,
        "latitude": 63.468206
    },
    {
        "busStopId": 102015,
        "locationId": "17145566",
        "name": "Brennmoen",
        "longitude": 11.071296,
        "latitude": 63.370837
    },
    {
        "busStopId": 102016,
        "locationId": "16403645",
        "name": "Ormhaugen",
        "longitude": 11.394725,
        "latitude": 62.639198
    },
    {
        "busStopId": 102017,
        "locationId": "16403640",
        "name": "Trøan",
        "longitude": 11.402361,
        "latitude": 62.643367
    },
    {
        "busStopId": 102018,
        "locationId": "16403600",
        "name": "Røros skysstasjon",
        "longitude": 11.380128,
        "latitude": 62.574672
    },
    {
        "busStopId": 102019,
        "locationId": "16403598",
        "name": "Gullikstad",
        "longitude": 11.367857,
        "latitude": 62.609597
    },
    {
        "busStopId": 102020,
        "locationId": "16403597",
        "name": "Orvos",
        "longitude": 11.380711,
        "latitude": 62.628176
    },
    {
        "busStopId": 102021,
        "locationId": "16403596",
        "name": "Ol-Jensabakken",
        "longitude": 11.387934,
        "latitude": 62.631464
    },
    {
        "busStopId": 102022,
        "locationId": "16403590",
        "name": "Kroken vegkryss",
        "longitude": 11.40201,
        "latitude": 62.674303
    },
    {
        "busStopId": 102023,
        "locationId": "16403589",
        "name": "Bergan",
        "longitude": 11.386667,
        "latitude": 62.683876
    },
    {
        "busStopId": 102024,
        "locationId": "16403587",
        "name": "Rugelsjøen",
        "longitude": 11.351121,
        "latitude": 62.716553
    },
    {
        "busStopId": 102025,
        "locationId": "16403586",
        "name": "Rugeldalen stasjon",
        "longitude": 11.32675,
        "latitude": 62.730501
    },
    {
        "busStopId": 102026,
        "locationId": "16403585",
        "name": "Ryen",
        "longitude": 11.324477,
        "latitude": 62.740237
    },
    {
        "busStopId": 102027,
        "locationId": "16403584",
        "name": "Glåmos",
        "longitude": 11.41915,
        "latitude": 62.67335
    },
    {
        "busStopId": 102028,
        "locationId": "16403583",
        "name": "Langset",
        "longitude": 11.361991,
        "latitude": 62.590039
    },
    {
        "busStopId": 102029,
        "locationId": "16389223",
        "name": "Evjen skole",
        "longitude": 9.83967,
        "latitude": 63.287329
    },
    {
        "busStopId": 102030,
        "locationId": "16389222",
        "name": "Grønnøra",
        "longitude": 9.835618,
        "latitude": 63.309466
    },
    {
        "busStopId": 102031,
        "locationId": "16389221",
        "name": "Grønnøra vest",
        "longitude": 9.823868,
        "latitude": 63.310055
    },
    {
        "busStopId": 102032,
        "locationId": "16245200",
        "name": "Krinsvatnet",
        "longitude": 10.227885,
        "latitude": 63.80276
    },
    {
        "busStopId": 102033,
        "locationId": "16245196",
        "name": "Flyta",
        "longitude": 10.012128,
        "latitude": 63.593937
    },
    {
        "busStopId": 102034,
        "locationId": "16245184",
        "name": "Mo vegdele",
        "longitude": 10.049732,
        "latitude": 63.601418
    },
    {
        "busStopId": 102035,
        "locationId": "16245183",
        "name": "Ålmoen",
        "longitude": 10.099911,
        "latitude": 63.60413
    },
    {
        "busStopId": 102036,
        "locationId": "16245181",
        "name": "Tjønnbakken",
        "longitude": 10.11212,
        "latitude": 63.595706
    },
    {
        "busStopId": 102037,
        "locationId": "16245180",
        "name": "Fylkesgrensa",
        "longitude": 10.135018,
        "latitude": 63.588511
    },
    {
        "busStopId": 102038,
        "locationId": "16245174",
        "name": "Vikan",
        "longitude": 10.150361,
        "latitude": 63.520264
    },
    {
        "busStopId": 102039,
        "locationId": "16245172",
        "name": "Rørvik fergeleie",
        "longitude": 10.139698,
        "latitude": 63.509668
    },
    {
        "busStopId": 102040,
        "locationId": "16245171",
        "name": "Årnset",
        "longitude": 9.958023,
        "latitude": 63.591911
    },
    {
        "busStopId": 102041,
        "locationId": "16245160",
        "name": "Ramsvika",
        "longitude": 10.087596,
        "latitude": 63.751349
    },
    {
        "busStopId": 102042,
        "locationId": "16245159",
        "name": "Mælan",
        "longitude": 10.132395,
        "latitude": 63.752592
    },
    {
        "busStopId": 102043,
        "locationId": "16245158",
        "name": "Husby",
        "longitude": 10.095384,
        "latitude": 63.743131
    },
    {
        "busStopId": 102044,
        "locationId": "16245157",
        "name": "Saga",
        "longitude": 10.065802,
        "latitude": 63.729246
    },
    {
        "busStopId": 102045,
        "locationId": "16245156",
        "name": "Tånnårvika",
        "longitude": 10.042428,
        "latitude": 63.715971
    },
    {
        "busStopId": 102046,
        "locationId": "16245155",
        "name": "Dalen",
        "longitude": 9.999731,
        "latitude": 63.712287
    },
    {
        "busStopId": 102047,
        "locationId": "16245153",
        "name": "Frengen Slip",
        "longitude": 9.960502,
        "latitude": 63.695844
    },
    {
        "busStopId": 102048,
        "locationId": "16128429",
        "name": "Røstvoll",
        "longitude": 9.000634,
        "latitude": 63.378969
    },
    {
        "busStopId": 102049,
        "locationId": "16128428",
        "name": "Åstad",
        "longitude": 9.002835,
        "latitude": 63.371815
    },
    {
        "busStopId": 102050,
        "locationId": "16128427",
        "name": "Ness",
        "longitude": 9.016606,
        "latitude": 63.36064
    },
    {
        "busStopId": 102051,
        "locationId": "16128425",
        "name": "Aunhaugen",
        "longitude": 8.999736,
        "latitude": 63.337547
    },
    {
        "busStopId": 102052,
        "locationId": "16128423",
        "name": "Dalum",
        "longitude": 9.040411,
        "latitude": 63.299078
    },
    {
        "busStopId": 102053,
        "locationId": "16128421",
        "name": "Blakstad",
        "longitude": 9.081204,
        "latitude": 63.29381
    },
    {
        "busStopId": 102054,
        "locationId": "16128420",
        "name": "Kyrksæterøra",
        "longitude": 9.090942,
        "latitude": 63.289259
    },
    {
        "busStopId": 102055,
        "locationId": "16128417",
        "name": "Hemne vg.skole",
        "longitude": 9.085947,
        "latitude": 63.291714
    },
    {
        "busStopId": 102056,
        "locationId": "16128415",
        "name": "Støland",
        "longitude": 9.066274,
        "latitude": 63.290002
    },
    {
        "busStopId": 102057,
        "locationId": "16128414",
        "name": "Strand",
        "longitude": 9.043133,
        "latitude": 63.282156
    },
    {
        "busStopId": 102058,
        "locationId": "16128413",
        "name": "Bjerkan",
        "longitude": 9.019283,
        "latitude": 63.273851
    },
    {
        "busStopId": 102059,
        "locationId": "16128412",
        "name": "Mo",
        "longitude": 9.012168,
        "latitude": 63.269035
    },
    {
        "busStopId": 102060,
        "locationId": "16128411",
        "name": "Lenes",
        "longitude": 9.015753,
        "latitude": 63.256745
    },
    {
        "busStopId": 102061,
        "locationId": "16128410",
        "name": "Hunnestrøan",
        "longitude": 9.021179,
        "latitude": 63.244037
    },
    {
        "busStopId": 102062,
        "locationId": "16128406",
        "name": "Stormyra",
        "longitude": 9.021017,
        "latitude": 63.211637
    },
    {
        "busStopId": 102063,
        "locationId": "16128404",
        "name": "Sødalskrysset",
        "longitude": 9.083935,
        "latitude": 63.210536
    },
    {
        "busStopId": 102064,
        "locationId": "16642118",
        "name": "Røsetlåven",
        "longitude": 11.072976,
        "latitude": 63.205665
    },
    {
        "busStopId": 102065,
        "locationId": "16642117",
        "name": "Berge",
        "longitude": 11.059321,
        "latitude": 63.206661
    },
    {
        "busStopId": 102066,
        "locationId": "16642116",
        "name": "Kulsetvegen",
        "longitude": 11.053931,
        "latitude": 63.20692
    },
    {
        "busStopId": 102067,
        "locationId": "16642115",
        "name": "Selbu skysstasjon",
        "longitude": 11.04078,
        "latitude": 63.21807
    },
    {
        "busStopId": 102068,
        "locationId": "16642114",
        "name": "Vestre Eidem",
        "longitude": 11.054991,
        "latitude": 63.241157
    },
    {
        "busStopId": 102069,
        "locationId": "16642113",
        "name": "Marienborg",
        "longitude": 11.032138,
        "latitude": 63.224311
    },
    {
        "busStopId": 102070,
        "locationId": "16642112",
        "name": "Botnlia",
        "longitude": 11.036782,
        "latitude": 63.231983
    },
    {
        "busStopId": 102071,
        "locationId": "16642111",
        "name": "Eidemsvik",
        "longitude": 11.04953,
        "latitude": 63.240247
    },
    {
        "busStopId": 102072,
        "locationId": "16642109",
        "name": "Eidem",
        "longitude": 11.067415,
        "latitude": 63.240547
    },
    {
        "busStopId": 102073,
        "locationId": "16642108",
        "name": "Borsetmoen",
        "longitude": 11.084384,
        "latitude": 63.241671
    },
    {
        "busStopId": 102074,
        "locationId": "16642107",
        "name": "Kjelstad",
        "longitude": 11.087681,
        "latitude": 63.243232
    },
    {
        "busStopId": 102075,
        "locationId": "16642106",
        "name": "Garberg bru",
        "longitude": 11.094194,
        "latitude": 63.249573
    },
    {
        "busStopId": 102076,
        "locationId": "16642105",
        "name": "Granby",
        "longitude": 11.078518,
        "latitude": 63.276776
    },
    {
        "busStopId": 102077,
        "locationId": "16642104",
        "name": "Øverbø",
        "longitude": 11.080396,
        "latitude": 63.281748
    },
    {
        "busStopId": 102078,
        "locationId": "16642103",
        "name": "Tømra",
        "longitude": 11.073245,
        "latitude": 63.285217
    },
    {
        "busStopId": 102079,
        "locationId": "16642102",
        "name": "Røet",
        "longitude": 11.076434,
        "latitude": 63.29601
    },
    {
        "busStopId": 102080,
        "locationId": "17142510",
        "name": "Stjørdal stasjon",
        "longitude": 10.913785,
        "latitude": 63.469406
    },
    {
        "busStopId": 102081,
        "locationId": "17142505",
        "name": "Hellsenteret",
        "longitude": 10.914935,
        "latitude": 63.448999
    },
    {
        "busStopId": 102082,
        "locationId": "17142503",
        "name": "Værnesmoen",
        "longitude": 10.911162,
        "latitude": 63.459529
    },
    {
        "busStopId": 102083,
        "locationId": "16627039",
        "name": "Moadalen",
        "longitude": 10.438648,
        "latitude": 63.274873
    },
    {
        "busStopId": 102084,
        "locationId": "16627038",
        "name": "Lappen",
        "longitude": 10.437067,
        "latitude": 63.279208
    },
    {
        "busStopId": 102085,
        "locationId": "16627037",
        "name": "Moen Industriområde",
        "longitude": 10.434489,
        "latitude": 63.283469
    },
    {
        "busStopId": 102086,
        "locationId": "16627036",
        "name": "Sagmoen",
        "longitude": 10.434965,
        "latitude": 63.286122
    },
    {
        "busStopId": 102087,
        "locationId": "16627035",
        "name": "Tulluan syd",
        "longitude": 10.436286,
        "latitude": 63.288593
    },
    {
        "busStopId": 102088,
        "locationId": "16627034",
        "name": "Tulluan skole",
        "longitude": 10.437903,
        "latitude": 63.290761
    },
    {
        "busStopId": 102089,
        "locationId": "16627033",
        "name": "Tulluan nord",
        "longitude": 10.438127,
        "latitude": 63.293144
    },
    {
        "busStopId": 102090,
        "locationId": "16627032",
        "name": "Forset",
        "longitude": 10.436447,
        "latitude": 63.300345
    },
    {
        "busStopId": 102091,
        "locationId": "16627031",
        "name": "Hallansvingen",
        "longitude": 10.41637,
        "latitude": 63.314339
    },
    {
        "busStopId": 102092,
        "locationId": "16627030",
        "name": "Skjøla",
        "longitude": 10.402913,
        "latitude": 63.317688
    },
    {
        "busStopId": 102093,
        "locationId": "16627029",
        "name": "Brannåsen",
        "longitude": 10.434516,
        "latitude": 63.306835
    },
    {
        "busStopId": 102094,
        "locationId": "16627027",
        "name": "Tanemsmoen",
        "longitude": 10.430545,
        "latitude": 63.310414
    },
    {
        "busStopId": 102095,
        "locationId": "16627026",
        "name": "Tanemskrysset 1",
        "longitude": 10.428075,
        "latitude": 63.313686
    },
    {
        "busStopId": 102096,
        "locationId": "16627025",
        "name": "Tanem gård",
        "longitude": 10.435576,
        "latitude": 63.313593
    },
    {
        "busStopId": 102097,
        "locationId": "16627024",
        "name": "Tanem bru",
        "longitude": 10.453902,
        "latitude": 63.310123
    },
    {
        "busStopId": 102098,
        "locationId": "16627022",
        "name": "Sørborgen",
        "longitude": 10.461528,
        "latitude": 63.304704
    },
    {
        "busStopId": 102099,
        "locationId": "16011613",
        "name": "Osen",
        "longitude": 10.524473,
        "latitude": 63.396936
    },
    {
        "busStopId": 102100,
        "locationId": "16011611",
        "name": "Solbakken skole",
        "longitude": 10.523755,
        "latitude": 63.402229
    },
    {
        "busStopId": 102101,
        "locationId": "16011610",
        "name": "Tjønnlia",
        "longitude": 10.509588,
        "latitude": 63.402109
    },
    {
        "busStopId": 102102,
        "locationId": "16011609",
        "name": "Bratsbergflata",
        "longitude": 10.456417,
        "latitude": 63.34612
    },
    {
        "busStopId": 102103,
        "locationId": "16011608",
        "name": "Randlia",
        "longitude": 10.441747,
        "latitude": 63.351242
    },
    {
        "busStopId": 102104,
        "locationId": "16011607",
        "name": "Folla",
        "longitude": 10.442996,
        "latitude": 63.35463
    },
    {
        "busStopId": 102105,
        "locationId": "16011606",
        "name": "Lia",
        "longitude": 10.44402,
        "latitude": 63.365022
    },
    {
        "busStopId": 102106,
        "locationId": "16011605",
        "name": "Gisvold",
        "longitude": 10.442448,
        "latitude": 63.367571
    },
    {
        "busStopId": 102107,
        "locationId": "16011604",
        "name": "Kvamshaugen",
        "longitude": 10.430491,
        "latitude": 63.373804
    },
    {
        "busStopId": 102108,
        "locationId": "16011603",
        "name": "Traneveien",
        "longitude": 10.331057,
        "latitude": 63.34905
    },
    {
        "busStopId": 102109,
        "locationId": "16011602",
        "name": "Solberg",
        "longitude": 10.310683,
        "latitude": 63.351761
    },
    {
        "busStopId": 102110,
        "locationId": "16011576",
        "name": "Åsveien skole",
        "longitude": 10.368121,
        "latitude": 63.415229
    },
    {
        "busStopId": 102111,
        "locationId": "16011575",
        "name": "Åsvang skole",
        "longitude": 10.45462,
        "latitude": 63.411028
    },
    {
        "busStopId": 102112,
        "locationId": "16011574",
        "name": "Åsheim skole",
        "longitude": 10.343526,
        "latitude": 63.351068
    },
    {
        "busStopId": 102113,
        "locationId": "16011569",
        "name": "Øvre Flatåsveg",
        "longitude": 10.3343,
        "latitude": 63.373659
    },
    {
        "busStopId": 102114,
        "locationId": "16011196",
        "name": "Bergheim snuplass",
        "longitude": 10.456552,
        "latitude": 63.4088
    },
    {
        "busStopId": 102115,
        "locationId": "16011193",
        "name": "Iskremfabrikken",
        "longitude": 10.467403,
        "latitude": 63.423968
    },
    {
        "busStopId": 102116,
        "locationId": "16011192",
        "name": "Ila",
        "longitude": 10.368166,
        "latitude": 63.429288
    },
    {
        "busStopId": 102117,
        "locationId": "16011191",
        "name": "Idrettsveien",
        "longitude": 10.36672,
        "latitude": 63.350956
    },
    {
        "busStopId": 102118,
        "locationId": "16011190",
        "name": "Idrettsplassen",
        "longitude": 10.493562,
        "latitude": 63.415446
    },
    {
        "busStopId": 102119,
        "locationId": "16011188",
        "name": "Ingebord Ofstads veg",
        "longitude": 10.399257,
        "latitude": 63.357051
    },
    {
        "busStopId": 102120,
        "locationId": "16011184",
        "name": "Høgreina Øvre",
        "longitude": 10.335324,
        "latitude": 63.380579
    },
    {
        "busStopId": 102121,
        "locationId": "16011183",
        "name": "Høvringen",
        "longitude": 10.33686,
        "latitude": 63.445469
    },
    {
        "busStopId": 102122,
        "locationId": "16011182",
        "name": "Høiset",
        "longitude": 10.462984,
        "latitude": 63.411949
    },
    {
        "busStopId": 102123,
        "locationId": "16011181",
        "name": "Høgreina",
        "longitude": 10.339295,
        "latitude": 63.380764
    },
    {
        "busStopId": 102124,
        "locationId": "16011180",
        "name": "Husebytunet",
        "longitude": 10.345143,
        "latitude": 63.36896
    },
    {
        "busStopId": 102125,
        "locationId": "16011179",
        "name": "Hegsnippen",
        "longitude": 10.148762,
        "latitude": 63.422521
    },
    {
        "busStopId": 102126,
        "locationId": "16011178",
        "name": "Hornebergvegen",
        "longitude": 10.401745,
        "latitude": 63.39375
    },
    {
        "busStopId": 102127,
        "locationId": "16011177",
        "name": "Hoeggen skole",
        "longitude": 10.433348,
        "latitude": 63.401344
    },
    {
        "busStopId": 102128,
        "locationId": "16010608",
        "name": "Randlia",
        "longitude": 10.441864,
        "latitude": 63.351157
    },
    {
        "busStopId": 102129,
        "locationId": "16010607",
        "name": "Folla",
        "longitude": 10.44287,
        "latitude": 63.3549
    },
    {
        "busStopId": 102130,
        "locationId": "16010606",
        "name": "Lia",
        "longitude": 10.443831,
        "latitude": 63.364873
    },
    {
        "busStopId": 102131,
        "locationId": "16010605",
        "name": "Gisvold",
        "longitude": 10.442313,
        "latitude": 63.367321
    },
    {
        "busStopId": 102132,
        "locationId": "16010604",
        "name": "Kvamshaugen",
        "longitude": 10.429952,
        "latitude": 63.374186
    },
    {
        "busStopId": 102133,
        "locationId": "16010603",
        "name": "Traneveien",
        "longitude": 10.331371,
        "latitude": 63.348885
    },
    {
        "busStopId": 102134,
        "locationId": "16010602",
        "name": "Solberg",
        "longitude": 10.3108,
        "latitude": 63.351806
    },
    {
        "busStopId": 102135,
        "locationId": "16010576",
        "name": "Åsveien skole",
        "longitude": 10.365849,
        "latitude": 63.41459
    },
    {
        "busStopId": 102136,
        "locationId": "16010575",
        "name": "Åsvang skole",
        "longitude": 10.45595,
        "latitude": 63.41106
    },
    {
        "busStopId": 102137,
        "locationId": "16010574",
        "name": "Åsheim skole",
        "longitude": 10.34349,
        "latitude": 63.351169
    },
    {
        "busStopId": 102138,
        "locationId": "16010569",
        "name": "Øvre Flatåsveg",
        "longitude": 10.334138,
        "latitude": 63.373651
    },
    {
        "busStopId": 102139,
        "locationId": "16010568",
        "name": "Østre Rosten",
        "longitude": 10.37697,
        "latitude": 63.362589
    },
    {
        "busStopId": 102140,
        "locationId": "16010567",
        "name": "Østre Berg",
        "longitude": 10.430491,
        "latitude": 63.415905
    },
    {
        "busStopId": 102141,
        "locationId": "16010566",
        "name": "Østmarkveien",
        "longitude": 10.451099,
        "latitude": 63.449886
    },
    {
        "busStopId": 102142,
        "locationId": "16010560",
        "name": "Byåsen B.senter",
        "longitude": 10.353668,
        "latitude": 63.417891
    },
    {
        "busStopId": 102143,
        "locationId": "16010559",
        "name": "Vikåsen",
        "longitude": 10.529639,
        "latitude": 63.413891
    },
    {
        "busStopId": 102144,
        "locationId": "16010202",
        "name": "Jakobsliveien Ø.",
        "longitude": 10.49252,
        "latitude": 63.411868
    },
    {
        "busStopId": 102145,
        "locationId": "16010201",
        "name": "Jakobsliveien N.",
        "longitude": 10.494362,
        "latitude": 63.428481
    },
    {
        "busStopId": 102146,
        "locationId": "16010200",
        "name": "Jakobsli",
        "longitude": 10.491433,
        "latitude": 63.410264
    },
    {
        "busStopId": 102147,
        "locationId": "16010197",
        "name": "Høgskoleringen",
        "longitude": 10.404943,
        "latitude": 63.420322
    },
    {
        "busStopId": 102148,
        "locationId": "16010194",
        "name": "Ilsvika",
        "longitude": 10.356758,
        "latitude": 63.431245
    },
    {
        "busStopId": 102149,
        "locationId": "16010193",
        "name": "Iskremfabrikken",
        "longitude": 10.467709,
        "latitude": 63.423703
    },
    {
        "busStopId": 102150,
        "locationId": "16010192",
        "name": "Ila",
        "longitude": 10.367663,
        "latitude": 63.429256
    },
    {
        "busStopId": 102151,
        "locationId": "16010191",
        "name": "Idrettsveien",
        "longitude": 10.366612,
        "latitude": 63.350246
    },
    {
        "busStopId": 102152,
        "locationId": "16010190",
        "name": "Idrettsplassen",
        "longitude": 10.493832,
        "latitude": 63.415607
    },
    {
        "busStopId": 102153,
        "locationId": "16010189",
        "name": "IKEA",
        "longitude": 10.472155,
        "latitude": 63.427974
    },
    {
        "busStopId": 102154,
        "locationId": "16010188",
        "name": "Ingebord Ofstads veg",
        "longitude": 10.399015,
        "latitude": 63.357043
    },
    {
        "busStopId": 102155,
        "locationId": "16010185",
        "name": "Langåsmyra",
        "longitude": 10.187821,
        "latitude": 63.435307
    },
    {
        "busStopId": 102156,
        "locationId": "16010184",
        "name": "Høgreina Øvre",
        "longitude": 10.335306,
        "latitude": 63.380623
    },
    {
        "busStopId": 102157,
        "locationId": "16010183",
        "name": "Høvringen",
        "longitude": 10.335899,
        "latitude": 63.445991
    },
    {
        "busStopId": 102158,
        "locationId": "17257762",
        "name": "Sjøåsen",
        "longitude": 11.226048,
        "latitude": 64.310617
    },
    {
        "busStopId": 102159,
        "locationId": "17257761",
        "name": "Lingen",
        "longitude": 11.215035,
        "latitude": 64.300907
    },
    {
        "busStopId": 102160,
        "locationId": "16406645",
        "name": "Ormhaugen",
        "longitude": 11.394842,
        "latitude": 62.639206
    },
    {
        "busStopId": 102161,
        "locationId": "16406640",
        "name": "Trøan",
        "longitude": 11.40246,
        "latitude": 62.643384
    },
    {
        "busStopId": 102162,
        "locationId": "16406600",
        "name": "Røros skysstasjon",
        "longitude": 11.380065,
        "latitude": 62.574618
    },
    {
        "busStopId": 102163,
        "locationId": "16406599",
        "name": "Gullikstad",
        "longitude": 11.368207,
        "latitude": 62.609808
    },
    {
        "busStopId": 102164,
        "locationId": "16406598",
        "name": "Orvos",
        "longitude": 11.380981,
        "latitude": 62.628152
    },
    {
        "busStopId": 102165,
        "locationId": "16406597",
        "name": "Ol-Jensabakken",
        "longitude": 11.387601,
        "latitude": 62.631175
    },
    {
        "busStopId": 102166,
        "locationId": "16406592",
        "name": "Glåmos",
        "longitude": 11.41915,
        "latitude": 62.67335
    },
    {
        "busStopId": 102167,
        "locationId": "16406590",
        "name": "Kroken vegkryss",
        "longitude": 11.402019,
        "latitude": 62.67467
    },
    {
        "busStopId": 102168,
        "locationId": "16406589",
        "name": "Bergan",
        "longitude": 11.382589,
        "latitude": 62.688069
    },
    {
        "busStopId": 102169,
        "locationId": "16406587",
        "name": "Rugelsjøen",
        "longitude": 11.35122,
        "latitude": 62.716553
    },
    {
        "busStopId": 102170,
        "locationId": "16406586",
        "name": "Rugeldalen stasjon",
        "longitude": 11.326067,
        "latitude": 62.732057
    },
    {
        "busStopId": 102171,
        "locationId": "16406585",
        "name": "Ryen",
        "longitude": 11.324657,
        "latitude": 62.740287
    },
    {
        "busStopId": 102172,
        "locationId": "16406583",
        "name": "Langset",
        "longitude": 11.362341,
        "latitude": 62.589998
    },
    {
        "busStopId": 102173,
        "locationId": "16403743",
        "name": "Øybakken",
        "longitude": 11.343099,
        "latitude": 62.720749
    },
    {
        "busStopId": 102174,
        "locationId": "16403741",
        "name": "Gullikstad Sør",
        "longitude": 11.366401,
        "latitude": 62.606308
    },
    {
        "busStopId": 102175,
        "locationId": "16403734",
        "name": "Fjellheimen",
        "longitude": 11.37162,
        "latitude": 62.580534
    },
    {
        "busStopId": 102176,
        "locationId": "16272335",
        "name": "Liakryss",
        "longitude": 9.799614,
        "latitude": 63.768975
    },
    {
        "busStopId": 102177,
        "locationId": "16272333",
        "name": "Ervika",
        "longitude": 9.71978,
        "latitude": 63.749752
    },
    {
        "busStopId": 102178,
        "locationId": "16272314",
        "name": "Fjellet",
        "longitude": 9.853522,
        "latitude": 63.893832
    },
    {
        "busStopId": 102179,
        "locationId": "16272312",
        "name": "Stokkslettbakken",
        "longitude": 9.710725,
        "latitude": 63.737042
    },
    {
        "busStopId": 102180,
        "locationId": "16272310",
        "name": "Bjugn Fabrikker",
        "longitude": 9.7651,
        "latitude": 63.762125
    },
    {
        "busStopId": 102181,
        "locationId": "16272309",
        "name": "Dalan",
        "longitude": 9.788295,
        "latitude": 63.762209
    },
    {
        "busStopId": 102182,
        "locationId": "16272307",
        "name": "Tjønnstua",
        "longitude": 9.878935,
        "latitude": 63.78615
    },
    {
        "busStopId": 102183,
        "locationId": "16272306",
        "name": "Gjølga",
        "longitude": 9.960834,
        "latitude": 63.794073
    },
    {
        "busStopId": 102184,
        "locationId": "16272305",
        "name": "Kalkmølla",
        "longitude": 9.983391,
        "latitude": 63.785924
    },
    {
        "busStopId": 102185,
        "locationId": "16272304",
        "name": "Grandal",
        "longitude": 10.024588,
        "latitude": 63.787337
    },
    {
        "busStopId": 102186,
        "locationId": "16272303",
        "name": "Skilleås",
        "longitude": 10.075953,
        "latitude": 63.797005
    },
    {
        "busStopId": 102187,
        "locationId": "16272302",
        "name": "Elveng skole",
        "longitude": 10.10841,
        "latitude": 63.804048
    },
    {
        "busStopId": 102188,
        "locationId": "16272301",
        "name": "Elveng østre",
        "longitude": 10.142923,
        "latitude": 63.808041
    },
    {
        "busStopId": 102189,
        "locationId": "16245203",
        "name": "Hysnes Helsefort",
        "longitude": 9.825386,
        "latitude": 63.62902
    },
    {
        "busStopId": 102190,
        "locationId": "16245202",
        "name": "Myrvang",
        "longitude": 9.830588,
        "latitude": 63.62487
    },
    {
        "busStopId": 102191,
        "locationId": "16245201",
        "name": "Nordsetra",
        "longitude": 10.22908,
        "latitude": 63.831001
    },
    {
        "busStopId": 102192,
        "locationId": "16134525",
        "name": "Vaslagvågen",
        "longitude": 9.24441,
        "latitude": 63.506919
    },
    {
        "busStopId": 102193,
        "locationId": "16134522",
        "name": "Vaslag",
        "longitude": 9.271683,
        "latitude": 63.495059
    },
    {
        "busStopId": 102194,
        "locationId": "16134519",
        "name": "Fenes",
        "longitude": 9.412116,
        "latitude": 63.500298
    },
    {
        "busStopId": 102195,
        "locationId": "16134518",
        "name": "Mjønes",
        "longitude": 9.425807,
        "latitude": 63.469643
    },
    {
        "busStopId": 102196,
        "locationId": "16134517",
        "name": "Åsten",
        "longitude": 9.51156,
        "latitude": 63.484774
    },
    {
        "busStopId": 102197,
        "locationId": "16134516",
        "name": "Slørdal",
        "longitude": 9.493701,
        "latitude": 63.463459
    },
    {
        "busStopId": 102198,
        "locationId": "16134515",
        "name": "Krokstadøra",
        "longitude": 9.502352,
        "latitude": 63.400612
    },
    {
        "busStopId": 102199,
        "locationId": "16134513",
        "name": "Snilldal",
        "longitude": 9.581916,
        "latitude": 63.391287
    },
    {
        "busStopId": 102200,
        "locationId": "16134512",
        "name": "Myrset",
        "longitude": 9.579329,
        "latitude": 63.366359
    },
    {
        "busStopId": 102201,
        "locationId": "16134511",
        "name": "Sætergård",
        "longitude": 9.559099,
        "latitude": 63.356451
    },
    {
        "busStopId": 102202,
        "locationId": "16134502",
        "name": "Våvatnet",
        "longitude": 9.529032,
        "latitude": 63.321374
    },
    {
        "busStopId": 102203,
        "locationId": "16128502",
        "name": "Bordstad",
        "longitude": 9.17365,
        "latitude": 63.208499
    },
    {
        "busStopId": 102204,
        "locationId": "16128442",
        "name": "Vinjeøra",
        "longitude": 8.983117,
        "latitude": 63.202806
    },
    {
        "busStopId": 102205,
        "locationId": "16128441",
        "name": "Vinje kirke",
        "longitude": 9.001389,
        "latitude": 63.207196
    },
    {
        "busStopId": 102206,
        "locationId": "16128437",
        "name": "Singsdalssaga",
        "longitude": 8.935192,
        "latitude": 63.379166
    },
    {
        "busStopId": 102207,
        "locationId": "16128430",
        "name": "Svanem",
        "longitude": 8.985713,
        "latitude": 63.388113
    },
    {
        "busStopId": 102208,
        "locationId": "16652201",
        "name": "Hilmo",
        "longitude": 11.426651,
        "latitude": 63.079825
    },
    {
        "busStopId": 102209,
        "locationId": "16647114",
        "name": "Vestre Eidem",
        "longitude": 11.054892,
        "latitude": 63.240899
    },
    {
        "busStopId": 102210,
        "locationId": "16647101",
        "name": "Blomliene",
        "longitude": 11.083091,
        "latitude": 63.3149
    },
    {
        "busStopId": 102211,
        "locationId": "16642806",
        "name": "Røet",
        "longitude": 11.076425,
        "latitude": 63.296099
    },
    {
        "busStopId": 102212,
        "locationId": "16642151",
        "name": "Bell skole",
        "longitude": 11.033854,
        "latitude": 63.226351
    },
    {
        "busStopId": 102213,
        "locationId": "16642131",
        "name": "Vinsmyr",
        "longitude": 11.077674,
        "latitude": 63.341743
    },
    {
        "busStopId": 102214,
        "locationId": "16642128",
        "name": "Nekåbjørgen",
        "longitude": 11.355262,
        "latitude": 63.112522
    },
    {
        "busStopId": 102215,
        "locationId": "16642127",
        "name": "Tuset",
        "longitude": 11.296701,
        "latitude": 63.109406
    },
    {
        "busStopId": 102216,
        "locationId": "16642126",
        "name": "Flaknan",
        "longitude": 11.308433,
        "latitude": 63.111121
    },
    {
        "busStopId": 102217,
        "locationId": "16642125",
        "name": "Flora kafe",
        "longitude": 11.2468,
        "latitude": 63.142549
    },
    {
        "busStopId": 102218,
        "locationId": "16642124",
        "name": "Rotla bru",
        "longitude": 11.189541,
        "latitude": 63.183866
    },
    {
        "busStopId": 102219,
        "locationId": "16642123",
        "name": "Rolset",
        "longitude": 11.183926,
        "latitude": 63.1896
    },
    {
        "busStopId": 102220,
        "locationId": "16642122",
        "name": "Rønsberg",
        "longitude": 11.166697,
        "latitude": 63.189624
    },
    {
        "busStopId": 102221,
        "locationId": "16642121",
        "name": "Hyttbakken",
        "longitude": 11.134178,
        "latitude": 63.201806
    },
    {
        "busStopId": 102222,
        "locationId": "16642120",
        "name": "Lilleevjen",
        "longitude": 11.10483,
        "latitude": 63.205718
    },
    {
        "busStopId": 102223,
        "locationId": "16642119",
        "name": "Evjegjerdet",
        "longitude": 11.093969,
        "latitude": 63.205475
    },
    {
        "busStopId": 102224,
        "locationId": "15694903",
        "name": "Gjelaneset",
        "longitude": 8.745459,
        "latitude": 63.334504
    },
    {
        "busStopId": 102225,
        "locationId": "15694902",
        "name": "Hjelen",
        "longitude": 8.771115,
        "latitude": 63.340361
    },
    {
        "busStopId": 102226,
        "locationId": "15694901",
        "name": "Årvåg",
        "longitude": 8.849717,
        "latitude": 63.349175
    },
    {
        "busStopId": 102227,
        "locationId": "16632650",
        "name": "Nortura",
        "longitude": 10.766372,
        "latitude": 63.416468
    },
    {
        "busStopId": 102228,
        "locationId": "16012026",
        "name": "Flakk fergeleie",
        "longitude": 10.200029,
        "latitude": 63.451207
    },
    {
        "busStopId": 102229,
        "locationId": "16011650",
        "name": "Nidelv bru",
        "longitude": 10.416091,
        "latitude": 63.437063
    },
    {
        "busStopId": 102230,
        "locationId": "16011450",
        "name": "Sluppen",
        "longitude": 10.396535,
        "latitude": 63.404731
    },
    {
        "busStopId": 102231,
        "locationId": "16011171",
        "name": "Heimdal sentrum",
        "longitude": 10.357369,
        "latitude": 63.351737
    },
    {
        "busStopId": 102232,
        "locationId": "16010629",
        "name": "Tyholtveien",
        "longitude": 10.441954,
        "latitude": 63.426777
    },
    {
        "busStopId": 102233,
        "locationId": "17148505",
        "name": "Hellsenteret",
        "longitude": 10.914989,
        "latitude": 63.449521
    },
    {
        "busStopId": 102234,
        "locationId": "17148502",
        "name": "Hell",
        "longitude": 10.90579,
        "latitude": 63.445216
    },
    {
        "busStopId": 102235,
        "locationId": "17148501",
        "name": "Gjevingåsen",
        "longitude": 10.87902,
        "latitude": 63.441593
    },
    {
        "busStopId": 102236,
        "locationId": "17142707",
        "name": "Torvet Stjørdal",
        "longitude": 10.923622,
        "latitude": 63.468463
    },
    {
        "busStopId": 102237,
        "locationId": "17142587",
        "name": "Statoil Stjørdal",
        "longitude": 10.906455,
        "latitude": 63.469627
    },
    {
        "busStopId": 102238,
        "locationId": "17142586",
        "name": "Værnesbranden",
        "longitude": 10.914755,
        "latitude": 63.451472
    },
    {
        "busStopId": 102239,
        "locationId": "16533006",
        "name": "Melhus Skyssstasjon",
        "longitude": 10.278182,
        "latitude": 63.284668
    },
    {
        "busStopId": 102240,
        "locationId": "16533005",
        "name": "Melhus sentrum",
        "longitude": 10.275227,
        "latitude": 63.2872
    },
    {
        "busStopId": 102241,
        "locationId": "16533004",
        "name": "Kvitland",
        "longitude": 10.280617,
        "latitude": 63.294072
    },
    {
        "busStopId": 102242,
        "locationId": "16533003",
        "name": "Brubakk",
        "longitude": 10.284803,
        "latitude": 63.29995
    },
    {
        "busStopId": 102243,
        "locationId": "16533001",
        "name": "Skottvold",
        "longitude": 10.290687,
        "latitude": 63.308828
    },
    {
        "busStopId": 102244,
        "locationId": "16627055",
        "name": "Husby",
        "longitude": 10.485486,
        "latitude": 63.289869
    },
    {
        "busStopId": 102245,
        "locationId": "16627054",
        "name": "Eggan Klæbu",
        "longitude": 10.48263,
        "latitude": 63.284656
    },
    {
        "busStopId": 102246,
        "locationId": "16627053",
        "name": "Ståggånvegen",
        "longitude": 10.484354,
        "latitude": 63.285201
    },
    {
        "busStopId": 102247,
        "locationId": "16627052",
        "name": "Bjørkli",
        "longitude": 10.55798,
        "latitude": 63.274279
    },
    {
        "busStopId": 102248,
        "locationId": "16627051",
        "name": "Bjørkligård",
        "longitude": 10.545736,
        "latitude": 63.272348
    },
    {
        "busStopId": 102249,
        "locationId": "16627050",
        "name": "Bjørklimark",
        "longitude": 10.53881,
        "latitude": 63.267229
    },
    {
        "busStopId": 102250,
        "locationId": "16627049",
        "name": "Klæbu bygdemuseum",
        "longitude": 10.53201,
        "latitude": 63.265738
    },
    {
        "busStopId": 102251,
        "locationId": "16627048",
        "name": "Teigen",
        "longitude": 10.525012,
        "latitude": 63.265976
    },
    {
        "busStopId": 102252,
        "locationId": "16627047",
        "name": "Grendstad",
        "longitude": 10.521688,
        "latitude": 63.259918
    },
    {
        "busStopId": 102253,
        "locationId": "16627046",
        "name": "Brøttemsåsen",
        "longitude": 10.512867,
        "latitude": 63.256704
    },
    {
        "busStopId": 102254,
        "locationId": "16627045",
        "name": "Brøttem gård",
        "longitude": 10.503201,
        "latitude": 63.253907
    },
    {
        "busStopId": 102255,
        "locationId": "16627044",
        "name": "Brøttemsmarka",
        "longitude": 10.486394,
        "latitude": 63.249023
    },
    {
        "busStopId": 102256,
        "locationId": "16627043",
        "name": "Svebakken",
        "longitude": 10.481058,
        "latitude": 63.247058
    },
    {
        "busStopId": 102257,
        "locationId": "16627042",
        "name": "Hyttfossen",
        "longitude": 10.455887,
        "latitude": 63.2601
    },
    {
        "busStopId": 102258,
        "locationId": "16627041",
        "name": "Lettingvold",
        "longitude": 10.449473,
        "latitude": 63.266162
    },
    {
        "busStopId": 102259,
        "locationId": "16627040",
        "name": "Nygården",
        "longitude": 10.444335,
        "latitude": 63.271019
    },
    {
        "busStopId": 102260,
        "locationId": "16011634",
        "name": "Statoil Rotvoll",
        "longitude": 10.478057,
        "latitude": 63.436705
    },
    {
        "busStopId": 102261,
        "locationId": "16011633",
        "name": "Leangen gård",
        "longitude": 10.474374,
        "latitude": 63.436436
    },
    {
        "busStopId": 102262,
        "locationId": "16011631",
        "name": "Edgar B. Schieldrops veg",
        "longitude": 10.435154,
        "latitude": 63.400588
    },
    {
        "busStopId": 102263,
        "locationId": "16011630",
        "name": "Brøsetvegen",
        "longitude": 10.438298,
        "latitude": 63.409721
    },
    {
        "busStopId": 102264,
        "locationId": "16011629",
        "name": "Tyholtveien",
        "longitude": 10.442304,
        "latitude": 63.426576
    },
    {
        "busStopId": 102265,
        "locationId": "16011628",
        "name": "Brundalen sykehjem",
        "longitude": 10.486151,
        "latitude": 63.41609
    },
    {
        "busStopId": 102266,
        "locationId": "16011625",
        "name": "Slakthuset",
        "longitude": 10.406911,
        "latitude": 63.384765
    },
    {
        "busStopId": 102267,
        "locationId": "16011622",
        "name": "Leangen alle",
        "longitude": 10.465337,
        "latitude": 63.43378
    },
    {
        "busStopId": 102268,
        "locationId": "16011224",
        "name": "Klokkstein",
        "longitude": 10.342519,
        "latitude": 63.355125
    },
    {
        "busStopId": 102269,
        "locationId": "16011222",
        "name": "Karl Jonssons v.",
        "longitude": 10.408474,
        "latitude": 63.40194
    },
    {
        "busStopId": 102270,
        "locationId": "16011220",
        "name": "Killingdal",
        "longitude": 10.348835,
        "latitude": 63.435424
    },
    {
        "busStopId": 102271,
        "locationId": "16011219",
        "name": "Kattemskogen",
        "longitude": 10.341064,
        "latitude": 63.345097
    },
    {
        "busStopId": 102272,
        "locationId": "16011218",
        "name": "Kattemsenteret",
        "longitude": 10.335522,
        "latitude": 63.346209
    },
    {
        "busStopId": 102273,
        "locationId": "16011217",
        "name": "Kattem",
        "longitude": 10.332126,
        "latitude": 63.347011
    },
    {
        "busStopId": 102274,
        "locationId": "16011216",
        "name": "Karlsheim",
        "longitude": 10.501252,
        "latitude": 63.408069
    },
    {
        "busStopId": 102275,
        "locationId": "16011209",
        "name": "John P. Kroglund veg",
        "longitude": 10.340489,
        "latitude": 63.352881
    },
    {
        "busStopId": 102276,
        "locationId": "16011206",
        "name": "Jonsvannsveien",
        "longitude": 10.413235,
        "latitude": 63.42271
    },
    {
        "busStopId": 102277,
        "locationId": "16011205",
        "name": "Johan Falkbergets vei",
        "longitude": 10.362381,
        "latitude": 63.412154
    },
    {
        "busStopId": 102278,
        "locationId": "16011203",
        "name": "Jørgen B. Lysholms vei",
        "longitude": 10.460513,
        "latitude": 63.443445
    },
    {
        "busStopId": 102279,
        "locationId": "16011202",
        "name": "Jakobsliveien Ø.",
        "longitude": 10.491568,
        "latitude": 63.411313
    },
    {
        "busStopId": 102280,
        "locationId": "16011201",
        "name": "Jakobsliveien N.",
        "longitude": 10.494299,
        "latitude": 63.428429
    },
    {
        "busStopId": 102281,
        "locationId": "16011200",
        "name": "Jakobsli",
        "longitude": 10.487355,
        "latitude": 63.410851
    },
    {
        "busStopId": 102282,
        "locationId": "16011197",
        "name": "Høgskoleringen",
        "longitude": 10.404135,
        "latitude": 63.420885
    },
    {
        "busStopId": 102283,
        "locationId": "16010632",
        "name": "Vestlia",
        "longitude": 10.44013,
        "latitude": 63.397197
    },
    {
        "busStopId": 102284,
        "locationId": "16010628",
        "name": "Brundalen sykehjem",
        "longitude": 10.486124,
        "latitude": 63.41609
    },
    {
        "busStopId": 102285,
        "locationId": "16010626",
        "name": "Nordslettv snuplass",
        "longitude": 10.404494,
        "latitude": 63.384008
    },
    {
        "busStopId": 102286,
        "locationId": "16010625",
        "name": "Slakthuset",
        "longitude": 10.408195,
        "latitude": 63.385767
    },
    {
        "busStopId": 102287,
        "locationId": "16010622",
        "name": "Leangen alle",
        "longitude": 10.46752,
        "latitude": 63.433391
    },
    {
        "busStopId": 102288,
        "locationId": "16010619",
        "name": "Omkj v. Klæbu v.",
        "longitude": 10.407001,
        "latitude": 63.402241
    },
    {
        "busStopId": 102289,
        "locationId": "16010613",
        "name": "Osen",
        "longitude": 10.52459,
        "latitude": 63.396908
    },
    {
        "busStopId": 102290,
        "locationId": "16010611",
        "name": "Solbakken skole",
        "longitude": 10.523826,
        "latitude": 63.402121
    },
    {
        "busStopId": 102291,
        "locationId": "16010610",
        "name": "Tjønnlia",
        "longitude": 10.509929,
        "latitude": 63.401702
    },
    {
        "busStopId": 102292,
        "locationId": "16010609",
        "name": "Bratsbergflata",
        "longitude": 10.456318,
        "latitude": 63.346076
    },
    {
        "busStopId": 102293,
        "locationId": "16010226",
        "name": "Koieflata",
        "longitude": 10.386923,
        "latitude": 63.352978
    },
    {
        "busStopId": 102294,
        "locationId": "16010225",
        "name": "Klokkerplassen",
        "longitude": 10.551405,
        "latitude": 63.428537
    },
    {
        "busStopId": 102295,
        "locationId": "16010224",
        "name": "Klokkstein",
        "longitude": 10.342376,
        "latitude": 63.355174
    },
    {
        "busStopId": 102296,
        "locationId": "16010222",
        "name": "Karl Jonssons v.",
        "longitude": 10.408644,
        "latitude": 63.401409
    },
    {
        "busStopId": 102297,
        "locationId": "16010221",
        "name": "Klefstadbukta",
        "longitude": 10.171058,
        "latitude": 63.438714
    },
    {
        "busStopId": 102298,
        "locationId": "16010220",
        "name": "Killingdal",
        "longitude": 10.349014,
        "latitude": 63.435709
    },
    {
        "busStopId": 102299,
        "locationId": "16010219",
        "name": "Kattemskogen",
        "longitude": 10.341064,
        "latitude": 63.345097
    },
    {
        "busStopId": 102300,
        "locationId": "16010218",
        "name": "Kattemsenteret",
        "longitude": 10.337983,
        "latitude": 63.345826
    },
    {
        "busStopId": 102301,
        "locationId": "16010217",
        "name": "Kattem",
        "longitude": 10.332036,
        "latitude": 63.347289
    },
    {
        "busStopId": 102302,
        "locationId": "16010216",
        "name": "Karlsheim",
        "longitude": 10.502456,
        "latitude": 63.407707
    },
    {
        "busStopId": 102303,
        "locationId": "16010209",
        "name": "John P. Kroglund veg",
        "longitude": 10.340732,
        "latitude": 63.353401
    },
    {
        "busStopId": 102304,
        "locationId": "16010208",
        "name": "John Aae`s veg",
        "longitude": 10.380563,
        "latitude": 63.36329
    },
    {
        "busStopId": 102305,
        "locationId": "16010206",
        "name": "Jonsvannsveien",
        "longitude": 10.413397,
        "latitude": 63.422609
    },
    {
        "busStopId": 102306,
        "locationId": "16010205",
        "name": "Johan Falkbergets vei",
        "longitude": 10.36098,
        "latitude": 63.411261
    },
    {
        "busStopId": 102307,
        "locationId": "16010204",
        "name": "Trondheim S.",
        "longitude": 10.400622,
        "latitude": 63.436018
    },
    {
        "busStopId": 102308,
        "locationId": "16010203",
        "name": "Lade",
        "longitude": 10.460513,
        "latitude": 63.443373
    },
    {
        "busStopId": 102309,
        "locationId": "16448637",
        "name": "Hov skole",
        "longitude": 11.292299,
        "latitude": 62.842778
    },
    {
        "busStopId": 102310,
        "locationId": "16448636",
        "name": "Mo bru",
        "longitude": 11.274575,
        "latitude": 62.843766
    },
    {
        "busStopId": 102311,
        "locationId": "16448635",
        "name": "Mosletta",
        "longitude": 11.259044,
        "latitude": 62.845566
    },
    {
        "busStopId": 102312,
        "locationId": "16448633",
        "name": "Eidet",
        "longitude": 11.216571,
        "latitude": 62.854863
    },
    {
        "busStopId": 102313,
        "locationId": "16448631",
        "name": "Øyen",
        "longitude": 11.184582,
        "latitude": 62.877363
    },
    {
        "busStopId": 102314,
        "locationId": "16448630",
        "name": "Drøyvoll",
        "longitude": 11.185669,
        "latitude": 62.908181
    },
    {
        "busStopId": 102315,
        "locationId": "16448629",
        "name": "Grøt skole",
        "longitude": 11.170631,
        "latitude": 62.9201
    },
    {
        "busStopId": 102316,
        "locationId": "16448628",
        "name": "Haltdalen Coop",
        "longitude": 11.153644,
        "latitude": 62.924357
    },
    {
        "busStopId": 102317,
        "locationId": "16448627",
        "name": "Prestrønning",
        "longitude": 11.129201,
        "latitude": 62.928175
    },
    {
        "busStopId": 102318,
        "locationId": "16448626",
        "name": "Ysetmoen",
        "longitude": 11.104219,
        "latitude": 62.933347
    },
    {
        "busStopId": 102319,
        "locationId": "16448625",
        "name": "Gåregrenda",
        "longitude": 11.073685,
        "latitude": 62.94101
    },
    {
        "busStopId": 102320,
        "locationId": "16448623",
        "name": "Gildset",
        "longitude": 11.037645,
        "latitude": 62.954166
    },
    {
        "busStopId": 102321,
        "locationId": "16448622",
        "name": "Langlete",
        "longitude": 10.991849,
        "latitude": 62.958131
    },
    {
        "busStopId": 102322,
        "locationId": "16448621",
        "name": "Bollingmo",
        "longitude": 10.978679,
        "latitude": 62.961084
    },
    {
        "busStopId": 102323,
        "locationId": "16406743",
        "name": "Øybakken",
        "longitude": 11.343117,
        "latitude": 62.720782
    },
    {
        "busStopId": 102324,
        "locationId": "16406734",
        "name": "Fjellheimen",
        "longitude": 11.371288,
        "latitude": 62.581105
    },
    {
        "busStopId": 102325,
        "locationId": "16275305",
        "name": "Kalkmølla",
        "longitude": 9.983229,
        "latitude": 63.785972
    },
    {
        "busStopId": 102326,
        "locationId": "16275304",
        "name": "Grandal",
        "longitude": 10.024408,
        "latitude": 63.787479
    },
    {
        "busStopId": 102327,
        "locationId": "16275303",
        "name": "Skilleås",
        "longitude": 10.075549,
        "latitude": 63.797044
    },
    {
        "busStopId": 102328,
        "locationId": "16275302",
        "name": "Elveng skole",
        "longitude": 10.108167,
        "latitude": 63.804092
    },
    {
        "busStopId": 102329,
        "locationId": "16275301",
        "name": "Elveng østre",
        "longitude": 10.143255,
        "latitude": 63.808172
    },
    {
        "busStopId": 102330,
        "locationId": "16272383",
        "name": "Lia",
        "longitude": 9.811355,
        "latitude": 63.785738
    },
    {
        "busStopId": 102331,
        "locationId": "16272382",
        "name": "Audal vegkryss",
        "longitude": 9.86997,
        "latitude": 63.827004
    },
    {
        "busStopId": 102332,
        "locationId": "16272381",
        "name": "Gullvika",
        "longitude": 9.853782,
        "latitude": 63.867687
    },
    {
        "busStopId": 102333,
        "locationId": "16272380",
        "name": "Svartvika",
        "longitude": 9.841349,
        "latitude": 63.875152
    },
    {
        "busStopId": 102334,
        "locationId": "16272378",
        "name": "Bukta",
        "longitude": 9.839957,
        "latitude": 63.887728
    },
    {
        "busStopId": 102335,
        "locationId": "16272377",
        "name": "Botngård skole/Fosen vgs",
        "longitude": 9.819386,
        "latitude": 63.764619
    },
    {
        "busStopId": 102336,
        "locationId": "16272376",
        "name": "Lysøya bru",
        "longitude": 9.856872,
        "latitude": 63.882967
    },
    {
        "busStopId": 102337,
        "locationId": "16272375",
        "name": "Lysøysundet",
        "longitude": 9.864176,
        "latitude": 63.884604
    },
    {
        "busStopId": 102338,
        "locationId": "16272369",
        "name": "Fagerenget skole",
        "longitude": 9.884226,
        "latitude": 63.874009
    },
    {
        "busStopId": 102339,
        "locationId": "16272367",
        "name": "Olden v. kr.",
        "longitude": 9.890694,
        "latitude": 63.866888
    },
    {
        "busStopId": 102340,
        "locationId": "16272366",
        "name": "Teksdal",
        "longitude": 9.891727,
        "latitude": 63.847485
    },
    {
        "busStopId": 102341,
        "locationId": "16138829",
        "name": "Hemnskjel",
        "longitude": 9.158208,
        "latitude": 63.497572
    },
    {
        "busStopId": 102342,
        "locationId": "16138826",
        "name": "Sunde",
        "longitude": 9.180198,
        "latitude": 63.497115
    },
    {
        "busStopId": 102343,
        "locationId": "16138825",
        "name": "Vaslagvågen",
        "longitude": 9.244347,
        "latitude": 63.506863
    },
    {
        "busStopId": 102344,
        "locationId": "16138822",
        "name": "Vaslag",
        "longitude": 9.271521,
        "latitude": 63.494906
    },
    {
        "busStopId": 102345,
        "locationId": "16138819",
        "name": "Fenes",
        "longitude": 9.411838,
        "latitude": 63.500394
    },
    {
        "busStopId": 102346,
        "locationId": "16138818",
        "name": "Mjønes",
        "longitude": 9.426822,
        "latitude": 63.469462
    },
    {
        "busStopId": 102347,
        "locationId": "16138817",
        "name": "Åsten",
        "longitude": 9.511452,
        "latitude": 63.484754
    },
    {
        "busStopId": 102348,
        "locationId": "16138816",
        "name": "Slørdal",
        "longitude": 9.493387,
        "latitude": 63.463836
    },
    {
        "busStopId": 102349,
        "locationId": "16138815",
        "name": "Krokstadøra",
        "longitude": 9.501966,
        "latitude": 63.400524
    },
    {
        "busStopId": 102350,
        "locationId": "16138813",
        "name": "Snilldal",
        "longitude": 9.58179,
        "latitude": 63.391219
    },
    {
        "busStopId": 102351,
        "locationId": "16138812",
        "name": "Myrset",
        "longitude": 9.579275,
        "latitude": 63.366528
    },
    {
        "busStopId": 102352,
        "locationId": "16138811",
        "name": "Sætergård",
        "longitude": 9.559027,
        "latitude": 63.356576
    },
    {
        "busStopId": 102353,
        "locationId": "16138802",
        "name": "Våvatnet",
        "longitude": 9.528385,
        "latitude": 63.321608
    },
    {
        "busStopId": 102354,
        "locationId": "16134531",
        "name": "Engvik",
        "longitude": 9.391662,
        "latitude": 63.487934
    },
    {
        "busStopId": 102355,
        "locationId": "16134529",
        "name": "Hemnskjel",
        "longitude": 9.154929,
        "latitude": 63.497187
    },
    {
        "busStopId": 102356,
        "locationId": "16134526",
        "name": "Sunde",
        "longitude": 9.179749,
        "latitude": 63.496674
    },
    {
        "busStopId": 102357,
        "locationId": "16652224",
        "name": "Jensvoll",
        "longitude": 11.840299,
        "latitude": 62.934389
    },
    {
        "busStopId": 102358,
        "locationId": "16652223",
        "name": "Mobrua",
        "longitude": 11.805983,
        "latitude": 62.950632
    },
    {
        "busStopId": 102359,
        "locationId": "16652222",
        "name": "Moen skisenter",
        "longitude": 11.786507,
        "latitude": 62.963195
    },
    {
        "busStopId": 102360,
        "locationId": "16652221",
        "name": "Tya",
        "longitude": 11.759558,
        "latitude": 62.966384
    },
    {
        "busStopId": 102361,
        "locationId": "16652220",
        "name": "Sakrismoen",
        "longitude": 11.685249,
        "latitude": 63.002072
    },
    {
        "busStopId": 102362,
        "locationId": "16652218",
        "name": "Kirkvold",
        "longitude": 11.683399,
        "latitude": 63.034796
    },
    {
        "busStopId": 102363,
        "locationId": "16652217",
        "name": "Berggårdsmyra",
        "longitude": 11.680246,
        "latitude": 63.03836
    },
    {
        "busStopId": 102364,
        "locationId": "16652216",
        "name": "Tydalsenteret",
        "longitude": 11.674991,
        "latitude": 63.044314
    },
    {
        "busStopId": 102365,
        "locationId": "16652215",
        "name": "Ås i Tydal",
        "longitude": 11.656593,
        "latitude": 63.044786
    },
    {
        "busStopId": 102366,
        "locationId": "16652210",
        "name": "Lian",
        "longitude": 11.61501,
        "latitude": 63.046773
    },
    {
        "busStopId": 102367,
        "locationId": "16652209",
        "name": "Svelmo",
        "longitude": 11.603323,
        "latitude": 63.048239
    },
    {
        "busStopId": 102368,
        "locationId": "16652208",
        "name": "Henmo",
        "longitude": 11.587405,
        "latitude": 63.050299
    },
    {
        "busStopId": 102369,
        "locationId": "16652207",
        "name": "Storaunet",
        "longitude": 11.568935,
        "latitude": 63.05492
    },
    {
        "busStopId": 102370,
        "locationId": "16652204",
        "name": "Græslivoll",
        "longitude": 11.475744,
        "latitude": 63.053886
    },
    {
        "busStopId": 102371,
        "locationId": "16652203",
        "name": "Græsli",
        "longitude": 11.450924,
        "latitude": 63.059857
    },
    {
        "busStopId": 102372,
        "locationId": "16652202",
        "name": "Hilmo bru",
        "longitude": 11.43523,
        "latitude": 63.070591
    },
    {
        "busStopId": 102373,
        "locationId": "16124406",
        "name": "Stormyra",
        "longitude": 9.0209,
        "latitude": 63.21169
    },
    {
        "busStopId": 102374,
        "locationId": "16124405",
        "name": "Stølen",
        "longitude": 9.069867,
        "latitude": 63.209127
    },
    {
        "busStopId": 102375,
        "locationId": "16124404",
        "name": "Sødalskrysset",
        "longitude": 9.083099,
        "latitude": 63.210556
    },
    {
        "busStopId": 102376,
        "locationId": "16124403",
        "name": "Vasslia",
        "longitude": 9.246961,
        "latitude": 63.223117
    },
    {
        "busStopId": 102377,
        "locationId": "16124402",
        "name": "Flauglia",
        "longitude": 9.307076,
        "latitude": 63.226298
    },
    {
        "busStopId": 102378,
        "locationId": "16124401",
        "name": "Slupphaugen",
        "longitude": 9.348749,
        "latitude": 63.230013
    },
    {
        "busStopId": 102379,
        "locationId": "16011904",
        "name": "Presthus E6",
        "longitude": 10.518634,
        "latitude": 63.424257
    },
    {
        "busStopId": 102381,
        "locationId": "15694911",
        "name": "Aure",
        "longitude": 8.529782,
        "latitude": 63.267819
    },
    {
        "busStopId": 102382,
        "locationId": "15694910",
        "name": "Våg",
        "longitude": 8.540517,
        "latitude": 63.285839
    },
    {
        "busStopId": 102383,
        "locationId": "15694909",
        "name": "Eidestranda",
        "longitude": 8.538298,
        "latitude": 63.300918
    },
    {
        "busStopId": 102384,
        "locationId": "15694908",
        "name": "Vean",
        "longitude": 8.601477,
        "latitude": 63.311092
    },
    {
        "busStopId": 102385,
        "locationId": "15694907",
        "name": "Glomstad",
        "longitude": 8.624923,
        "latitude": 63.313863
    },
    {
        "busStopId": 102386,
        "locationId": "15694906",
        "name": "Melan",
        "longitude": 8.66355,
        "latitude": 63.316328
    },
    {
        "busStopId": 102387,
        "locationId": "15694905",
        "name": "Stemshaug",
        "longitude": 8.708286,
        "latitude": 63.327936
    },
    {
        "busStopId": 102388,
        "locationId": "15694904",
        "name": "Gjela",
        "longitude": 8.726504,
        "latitude": 63.33094
    },
    {
        "busStopId": 102389,
        "locationId": "16010195",
        "name": "Johan Nygaarsvold.",
        "longitude": 10.361842,
        "latitude": 63.354702
    },
    {
        "busStopId": 102390,
        "locationId": "16627065",
        "name": "Tanemskrysset",
        "longitude": 10.427276,
        "latitude": 63.312851
    },
    {
        "busStopId": 102391,
        "locationId": "16627064",
        "name": "Tangen Klæbu",
        "longitude": 10.431246,
        "latitude": 63.240583
    },
    {
        "busStopId": 102392,
        "locationId": "16627063",
        "name": "Målsjøen",
        "longitude": 10.42989,
        "latitude": 63.244429
    },
    {
        "busStopId": 102393,
        "locationId": "16627062",
        "name": "Målsjøåsen",
        "longitude": 10.434992,
        "latitude": 63.25174
    },
    {
        "busStopId": 102394,
        "locationId": "16627061",
        "name": "Storvollen",
        "longitude": 10.440472,
        "latitude": 63.254962
    },
    {
        "busStopId": 102395,
        "locationId": "16627060",
        "name": "Moenkrysset",
        "longitude": 10.438262,
        "latitude": 63.277867
    },
    {
        "busStopId": 102396,
        "locationId": "16627059",
        "name": "Moen gård",
        "longitude": 10.446958,
        "latitude": 63.278775
    },
    {
        "busStopId": 102397,
        "locationId": "16627058",
        "name": "Moodden",
        "longitude": 10.467116,
        "latitude": 63.281494
    },
    {
        "busStopId": 102398,
        "locationId": "16627057",
        "name": "Svean",
        "longitude": 10.472515,
        "latitude": 63.28065
    },
    {
        "busStopId": 102399,
        "locationId": "16627056",
        "name": "Haugum",
        "longitude": 10.481309,
        "latitude": 63.295566
    },
    {
        "busStopId": 102400,
        "locationId": "16011649",
        "name": "Tempe krirke",
        "longitude": 10.399455,
        "latitude": 63.411643
    },
    {
        "busStopId": 102401,
        "locationId": "16011648",
        "name": "Torgardshaugen",
        "longitude": 10.377006,
        "latitude": 63.322645
    },
    {
        "busStopId": 102402,
        "locationId": "16011647",
        "name": "Terminalen",
        "longitude": 10.356524,
        "latitude": 63.340623
    },
    {
        "busStopId": 102403,
        "locationId": "16011646",
        "name": "Oppsynsmann Eggens v.",
        "longitude": 10.360899,
        "latitude": 63.341864
    },
    {
        "busStopId": 102404,
        "locationId": "16011645",
        "name": "Mentz Skjetnes v.",
        "longitude": 10.359372,
        "latitude": 63.345488
    },
    {
        "busStopId": 102405,
        "locationId": "16011642",
        "name": "Torgard",
        "longitude": 10.371104,
        "latitude": 63.324907
    },
    {
        "busStopId": 102406,
        "locationId": "16011641",
        "name": "Torgaardssletta",
        "longitude": 10.364304,
        "latitude": 63.328557
    },
    {
        "busStopId": 102407,
        "locationId": "16011640",
        "name": "Tiller",
        "longitude": 10.366963,
        "latitude": 63.333673
    },
    {
        "busStopId": 102408,
        "locationId": "16011638",
        "name": "Saxenborg alle",
        "longitude": 10.442313,
        "latitude": 63.437894
    },
    {
        "busStopId": 102409,
        "locationId": "16011637",
        "name": "Heggdalen",
        "longitude": 10.450308,
        "latitude": 63.407707
    },
    {
        "busStopId": 102410,
        "locationId": "16011636",
        "name": "Rotvoll Nedre",
        "longitude": 10.483402,
        "latitude": 63.438183
    },
    {
        "busStopId": 102411,
        "locationId": "16011242",
        "name": "St. Olavs Hospit.",
        "longitude": 10.392349,
        "latitude": 63.420777
    },
    {
        "busStopId": 102412,
        "locationId": "16011240",
        "name": "Kvenilds veg",
        "longitude": 10.36266,
        "latitude": 63.341598
    },
    {
        "busStopId": 102413,
        "locationId": "16011239",
        "name": "Kvenild",
        "longitude": 10.359444,
        "latitude": 63.356813
    },
    {
        "busStopId": 102414,
        "locationId": "16011237",
        "name": "Krutthusbakken",
        "longitude": 10.432144,
        "latitude": 63.44787
    },
    {
        "busStopId": 102415,
        "locationId": "16011236",
        "name": "Kroppan",
        "longitude": 10.375955,
        "latitude": 63.386853
    },
    {
        "busStopId": 102416,
        "locationId": "16011235",
        "name": "Krokstien",
        "longitude": 10.413253,
        "latitude": 63.392486
    },
    {
        "busStopId": 102417,
        "locationId": "16011234",
        "name": "Korsen",
        "longitude": 10.339348,
        "latitude": 63.351052
    },
    {
        "busStopId": 102418,
        "locationId": "16011233",
        "name": "Konglevegen",
        "longitude": 10.489071,
        "latitude": 63.422919
    },
    {
        "busStopId": 102419,
        "locationId": "16011232",
        "name": "Kong Øysteins v.",
        "longitude": 10.450012,
        "latitude": 63.430365
    },
    {
        "busStopId": 102420,
        "locationId": "16011230",
        "name": "St. Olavs Hospit.",
        "longitude": 10.385558,
        "latitude": 63.420089
    },
    {
        "busStopId": 102421,
        "locationId": "16011229",
        "name": "Kolstadhaugen",
        "longitude": 10.335198,
        "latitude": 63.374037
    },
    {
        "busStopId": 102422,
        "locationId": "16011228",
        "name": "Kolstaddalen",
        "longitude": 10.367151,
        "latitude": 63.368779
    },
    {
        "busStopId": 102423,
        "locationId": "16011227",
        "name": "K.O.Thornæs veg",
        "longitude": 10.436878,
        "latitude": 63.406657
    },
    {
        "busStopId": 102424,
        "locationId": "16011226",
        "name": "Koieflata",
        "longitude": 10.389636,
        "latitude": 63.352801
    },
    {
        "busStopId": 102425,
        "locationId": "16011225",
        "name": "Klokkerplassen",
        "longitude": 10.550974,
        "latitude": 63.428686
    },
    {
        "busStopId": 102426,
        "locationId": "16010648",
        "name": "Torgardshaugen",
        "longitude": 10.377194,
        "latitude": 63.322492
    },
    {
        "busStopId": 102427,
        "locationId": "16010647",
        "name": "Terminalen",
        "longitude": 10.356623,
        "latitude": 63.340675
    },
    {
        "busStopId": 102428,
        "locationId": "16010646",
        "name": "Oppsynsmann Eggens v.",
        "longitude": 10.360809,
        "latitude": 63.341703
    },
    {
        "busStopId": 102429,
        "locationId": "16010645",
        "name": "Mentz Skjetnes v.",
        "longitude": 10.359246,
        "latitude": 63.345488
    },
    {
        "busStopId": 102430,
        "locationId": "16010643",
        "name": "Bjarne Ness veg",
        "longitude": 10.429692,
        "latitude": 63.403822
    },
    {
        "busStopId": 102431,
        "locationId": "16010642",
        "name": "Torgard",
        "longitude": 10.371212,
        "latitude": 63.32473
    },
    {
        "busStopId": 102432,
        "locationId": "16010641",
        "name": "Torgaardssletta",
        "longitude": 10.36425,
        "latitude": 63.32825
    },
    {
        "busStopId": 102433,
        "locationId": "16010640",
        "name": "Tiller",
        "longitude": 10.364789,
        "latitude": 63.333274
    },
    {
        "busStopId": 102434,
        "locationId": "16010638",
        "name": "Saxenborg alle",
        "longitude": 10.442709,
        "latitude": 63.437757
    },
    {
        "busStopId": 102435,
        "locationId": "16010637",
        "name": "Heggdalen",
        "longitude": 10.448988,
        "latitude": 63.408105
    },
    {
        "busStopId": 102436,
        "locationId": "16010634",
        "name": "Statoil Rotvoll",
        "longitude": 10.480465,
        "latitude": 63.436733
    },
    {
        "busStopId": 102437,
        "locationId": "16010633",
        "name": "Leangen gård",
        "longitude": 10.47379,
        "latitude": 63.436416
    },
    {
        "busStopId": 102438,
        "locationId": "16010244",
        "name": "Kroppanmarka",
        "longitude": 10.385019,
        "latitude": 63.382692
    },
    {
        "busStopId": 102439,
        "locationId": "16010242",
        "name": "St. Olavs Hospit.",
        "longitude": 10.389636,
        "latitude": 63.420696
    },
    {
        "busStopId": 102440,
        "locationId": "16010241",
        "name": "KVT",
        "longitude": 10.380815,
        "latitude": 63.360612
    },
    {
        "busStopId": 102441,
        "locationId": "16010240",
        "name": "Kvenilds veg",
        "longitude": 10.362534,
        "latitude": 63.341417
    },
    {
        "busStopId": 102442,
        "locationId": "16010239",
        "name": "Kvenild",
        "longitude": 10.358968,
        "latitude": 63.356378
    },
    {
        "busStopId": 102443,
        "locationId": "16010237",
        "name": "Krutthusbakken",
        "longitude": 10.433222,
        "latitude": 63.447706
    },
    {
        "busStopId": 102444,
        "locationId": "16010236",
        "name": "Kroppan",
        "longitude": 10.375577,
        "latitude": 63.386857
    },
    {
        "busStopId": 102445,
        "locationId": "16010235",
        "name": "Krokstien",
        "longitude": 10.413253,
        "latitude": 63.392486
    },
    {
        "busStopId": 102446,
        "locationId": "16010234",
        "name": "Korsen",
        "longitude": 10.33783,
        "latitude": 63.351185
    },
    {
        "busStopId": 102447,
        "locationId": "16010233",
        "name": "Konglevegen",
        "longitude": 10.490813,
        "latitude": 63.422955
    },
    {
        "busStopId": 102448,
        "locationId": "16010232",
        "name": "Kong Øysteins v.",
        "longitude": 10.449635,
        "latitude": 63.431265
    },
    {
        "busStopId": 102449,
        "locationId": "16010230",
        "name": "St. Olavs Hospit.",
        "longitude": 10.38633,
        "latitude": 63.420242
    },
    {
        "busStopId": 102450,
        "locationId": "16010229",
        "name": "Kolstadhaugen",
        "longitude": 10.336788,
        "latitude": 63.375169
    },
    {
        "busStopId": 102451,
        "locationId": "16010228",
        "name": "Kolstaddalen",
        "longitude": 10.366945,
        "latitude": 63.368646
    },
    {
        "busStopId": 102452,
        "locationId": "16010227",
        "name": "K.O.Thornæs veg",
        "longitude": 10.438163,
        "latitude": 63.406705
    },
    {
        "busStopId": 102453,
        "locationId": "16449630",
        "name": "Drøyvoll",
        "longitude": 11.185624,
        "latitude": 62.907993
    },
    {
        "busStopId": 102454,
        "locationId": "16449629",
        "name": "Grøt skole",
        "longitude": 11.170631,
        "latitude": 62.9201
    },
    {
        "busStopId": 102455,
        "locationId": "16449628",
        "name": "Haltdalen Coop",
        "longitude": 11.153527,
        "latitude": 62.924324
    },
    {
        "busStopId": 102456,
        "locationId": "16449627",
        "name": "Prestrønning",
        "longitude": 11.12912,
        "latitude": 62.928151
    },
    {
        "busStopId": 102457,
        "locationId": "16449626",
        "name": "Ysetmoen",
        "longitude": 11.104057,
        "latitude": 62.93333
    },
    {
        "busStopId": 102458,
        "locationId": "16449625",
        "name": "Gåregrenda",
        "longitude": 11.073775,
        "latitude": 62.940953
    },
    {
        "busStopId": 102459,
        "locationId": "16449623",
        "name": "Gildset",
        "longitude": 11.038965,
        "latitude": 62.953679
    },
    {
        "busStopId": 102460,
        "locationId": "16449622",
        "name": "Langlete",
        "longitude": 10.991903,
        "latitude": 62.958095
    },
    {
        "busStopId": 102461,
        "locationId": "16449621",
        "name": "Bollingmo",
        "longitude": 10.978679,
        "latitude": 62.961084
    },
    {
        "busStopId": 102462,
        "locationId": "16448644",
        "name": "Nesvold",
        "longitude": 11.335787,
        "latitude": 62.760174
    },
    {
        "busStopId": 102463,
        "locationId": "16448643",
        "name": "Holden Øvre",
        "longitude": 11.341428,
        "latitude": 62.785347
    },
    {
        "busStopId": 102464,
        "locationId": "16448642",
        "name": "Holden Nedre",
        "longitude": 11.332391,
        "latitude": 62.803036
    },
    {
        "busStopId": 102465,
        "locationId": "16448641",
        "name": "Unsholte",
        "longitude": 11.330999,
        "latitude": 62.819672
    },
    {
        "busStopId": 102466,
        "locationId": "16448640",
        "name": "Jordsli",
        "longitude": 11.320902,
        "latitude": 62.828514
    },
    {
        "busStopId": 102467,
        "locationId": "16448639",
        "name": "Lunderengshaugen",
        "longitude": 11.312889,
        "latitude": 62.836709
    },
    {
        "busStopId": 102468,
        "locationId": "16448638",
        "name": "Ålen sentrum",
        "longitude": 11.300492,
        "latitude": 62.841962
    },
    {
        "busStopId": 102469,
        "locationId": "16275375",
        "name": "Lysøysundet",
        "longitude": 9.864176,
        "latitude": 63.884632
    },
    {
        "busStopId": 102470,
        "locationId": "16275374",
        "name": "Canningen",
        "longitude": 9.882537,
        "latitude": 63.883928
    },
    {
        "busStopId": 102471,
        "locationId": "16275373",
        "name": "Hellesvik",
        "longitude": 9.897755,
        "latitude": 63.887839
    },
    {
        "busStopId": 102472,
        "locationId": "16275371",
        "name": "Hellesvik v. kr.",
        "longitude": 9.89833,
        "latitude": 63.881049
    },
    {
        "busStopId": 102473,
        "locationId": "16275369",
        "name": "Fagerenget skole",
        "longitude": 9.884343,
        "latitude": 63.874029
    },
    {
        "busStopId": 102474,
        "locationId": "16275367",
        "name": "Olden v. kr.",
        "longitude": 9.89046,
        "latitude": 63.866718
    },
    {
        "busStopId": 102475,
        "locationId": "16275366",
        "name": "Teksdal",
        "longitude": 9.891925,
        "latitude": 63.84737
    },
    {
        "busStopId": 102476,
        "locationId": "16275335",
        "name": "Liakryss",
        "longitude": 9.799739,
        "latitude": 63.768975
    },
    {
        "busStopId": 102477,
        "locationId": "16275333",
        "name": "Ervika",
        "longitude": 9.719673,
        "latitude": 63.749744
    },
    {
        "busStopId": 102478,
        "locationId": "16275314",
        "name": "Fjellet",
        "longitude": 9.853459,
        "latitude": 63.893784
    },
    {
        "busStopId": 102479,
        "locationId": "16275312",
        "name": "Stokkslettbakken",
        "longitude": 9.709216,
        "latitude": 63.736788
    },
    {
        "busStopId": 102480,
        "locationId": "16275310",
        "name": "Bjugn Fabrikker",
        "longitude": 9.7651,
        "latitude": 63.762145
    },
    {
        "busStopId": 102481,
        "locationId": "16275309",
        "name": "Dalan",
        "longitude": 9.788439,
        "latitude": 63.762153
    },
    {
        "busStopId": 102482,
        "locationId": "16275308",
        "name": "Botngård",
        "longitude": 9.808273,
        "latitude": 63.764583
    },
    {
        "busStopId": 102483,
        "locationId": "16275307",
        "name": "Tjønnstua",
        "longitude": 9.879285,
        "latitude": 63.786321
    },
    {
        "busStopId": 102484,
        "locationId": "16275306",
        "name": "Gjølga",
        "longitude": 9.9607,
        "latitude": 63.794256
    },
    {
        "busStopId": 102485,
        "locationId": "16175794",
        "name": "Aunet",
        "longitude": 8.848262,
        "latitude": 63.617486
    },
    {
        "busStopId": 102486,
        "locationId": "16175716",
        "name": "Strømsvik",
        "longitude": 8.815033,
        "latitude": 63.649777
    },
    {
        "busStopId": 102487,
        "locationId": "16175715",
        "name": "Kjerringvåg",
        "longitude": 8.779011,
        "latitude": 63.649689
    },
    {
        "busStopId": 102488,
        "locationId": "16175714",
        "name": "Vikstrøm",
        "longitude": 8.786494,
        "latitude": 63.634498
    },
    {
        "busStopId": 102489,
        "locationId": "16175713",
        "name": "Dolmsundet",
        "longitude": 8.818141,
        "latitude": 63.636799
    },
    {
        "busStopId": 102490,
        "locationId": "16175712",
        "name": "Barman oppv.sent",
        "longitude": 8.848675,
        "latitude": 63.622315
    },
    {
        "busStopId": 102491,
        "locationId": "16175711",
        "name": "Sveneset",
        "longitude": 8.8511,
        "latitude": 63.610383
    },
    {
        "busStopId": 102492,
        "locationId": "16175710",
        "name": "Volden",
        "longitude": 8.862401,
        "latitude": 63.600791
    },
    {
        "busStopId": 102493,
        "locationId": "16175709",
        "name": "Dalpro",
        "longitude": 8.885982,
        "latitude": 63.606358
    },
    {
        "busStopId": 102494,
        "locationId": "16175706",
        "name": "Fillan buss st.",
        "longitude": 8.973101,
        "latitude": 63.601143
    },
    {
        "busStopId": 102495,
        "locationId": "16175704",
        "name": "Skaget",
        "longitude": 8.95977,
        "latitude": 63.581117
    },
    {
        "busStopId": 102496,
        "locationId": "16175703",
        "name": "Trafost",
        "longitude": 8.958629,
        "latitude": 63.574258
    },
    {
        "busStopId": 102497,
        "locationId": "16175702",
        "name": "Kaldkløv",
        "longitude": 8.9838,
        "latitude": 63.574086
    },
    {
        "busStopId": 102498,
        "locationId": "16175701",
        "name": "Tranvik vegdeler",
        "longitude": 9.027045,
        "latitude": 63.572263
    },
    {
        "busStopId": 102499,
        "locationId": "16175080",
        "name": "Sandstad HBT",
        "longitude": 9.111783,
        "latitude": 63.517492
    },
    {
        "busStopId": 102500,
        "locationId": "16138831",
        "name": "Engvik",
        "longitude": 9.391383,
        "latitude": 63.48803
    },
    {
        "busStopId": 102501,
        "locationId": "17142559",
        "name": "Sætnan",
        "longitude": 11.011369,
        "latitude": 63.394607
    },
    {
        "busStopId": 102502,
        "locationId": "17142558",
        "name": "Draveng",
        "longitude": 10.927574,
        "latitude": 63.430659
    },
    {
        "busStopId": 102503,
        "locationId": "17142557",
        "name": "Jullum bru",
        "longitude": 10.946232,
        "latitude": 63.401272
    },
    {
        "busStopId": 102504,
        "locationId": "17142556",
        "name": "Jullum",
        "longitude": 10.939369,
        "latitude": 63.408233
    },
    {
        "busStopId": 102505,
        "locationId": "17142555",
        "name": "Lerbakken",
        "longitude": 10.932713,
        "latitude": 63.416468
    },
    {
        "busStopId": 102506,
        "locationId": "17142554",
        "name": "Leren",
        "longitude": 10.927448,
        "latitude": 63.430795
    },
    {
        "busStopId": 102507,
        "locationId": "17142553",
        "name": "Bjørgmyrene",
        "longitude": 10.927952,
        "latitude": 63.436822
    },
    {
        "busStopId": 102508,
        "locationId": "17142552",
        "name": "Malvikkrysset",
        "longitude": 10.923774,
        "latitude": 63.443594
    },
    {
        "busStopId": 102509,
        "locationId": "17142551",
        "name": "Hydrost. Hell",
        "longitude": 10.91074,
        "latitude": 63.445015
    },
    {
        "busStopId": 102510,
        "locationId": "16652235",
        "name": "Stugudal",
        "longitude": 11.873491,
        "latitude": 62.900395
    },
    {
        "busStopId": 102511,
        "locationId": "16652232",
        "name": "Svartholvika",
        "longitude": 11.883903,
        "latitude": 62.896703
    },
    {
        "busStopId": 102512,
        "locationId": "16652231",
        "name": "Rotvoll",
        "longitude": 11.897117,
        "latitude": 62.902748
    },
    {
        "busStopId": 102513,
        "locationId": "16652230",
        "name": "Væktarstua",
        "longitude": 11.893596,
        "latitude": 62.908353
    },
    {
        "busStopId": 102514,
        "locationId": "16652227",
        "name": "Stugudal Coop",
        "longitude": 11.889769,
        "latitude": 62.913282
    },
    {
        "busStopId": 102515,
        "locationId": "16652226",
        "name": "Stuevoll",
        "longitude": 11.884217,
        "latitude": 62.917106
    },
    {
        "busStopId": 102516,
        "locationId": "16652225",
        "name": "Geitnesset",
        "longitude": 11.876285,
        "latitude": 62.918975
    },
    {
        "busStopId": 102517,
        "locationId": "16124424",
        "name": "Vægan",
        "longitude": 9.009617,
        "latitude": 63.33096
    },
    {
        "busStopId": 102518,
        "locationId": "16124423",
        "name": "Dalum",
        "longitude": 9.040591,
        "latitude": 63.299094
    },
    {
        "busStopId": 102519,
        "locationId": "16124422",
        "name": "Haugafossen",
        "longitude": 9.066606,
        "latitude": 63.295873
    },
    {
        "busStopId": 102520,
        "locationId": "16124421",
        "name": "Blakstad",
        "longitude": 9.081384,
        "latitude": 63.293842
    },
    {
        "busStopId": 102521,
        "locationId": "16124420",
        "name": "Kyrksæterøra",
        "longitude": 9.091041,
        "latitude": 63.289251
    },
    {
        "busStopId": 102522,
        "locationId": "16124417",
        "name": "Hemne vg.skole",
        "longitude": 9.085947,
        "latitude": 63.291779
    },
    {
        "busStopId": 102523,
        "locationId": "16124416",
        "name": "Hemnehallen",
        "longitude": 9.079461,
        "latitude": 63.292239
    },
    {
        "busStopId": 102524,
        "locationId": "16124415",
        "name": "Støland",
        "longitude": 9.066696,
        "latitude": 63.290111
    },
    {
        "busStopId": 102525,
        "locationId": "16124414",
        "name": "Strand",
        "longitude": 9.043232,
        "latitude": 63.28214
    },
    {
        "busStopId": 102526,
        "locationId": "16124413",
        "name": "Bjerkan",
        "longitude": 9.019283,
        "latitude": 63.273718
    },
    {
        "busStopId": 102527,
        "locationId": "16124412",
        "name": "Mo",
        "longitude": 9.012312,
        "latitude": 63.269035
    },
    {
        "busStopId": 102528,
        "locationId": "16124411",
        "name": "Lenes",
        "longitude": 9.015834,
        "latitude": 63.256729
    },
    {
        "busStopId": 102529,
        "locationId": "16124410",
        "name": "Hunnestrøan",
        "longitude": 9.021313,
        "latitude": 63.244154
    },
    {
        "busStopId": 102530,
        "locationId": "16124409",
        "name": "Eide",
        "longitude": 9.035821,
        "latitude": 63.235321
    },
    {
        "busStopId": 102531,
        "locationId": "16124408",
        "name": "Eidsfoss",
        "longitude": 9.032192,
        "latitude": 63.229296
    },
    {
        "busStopId": 102532,
        "locationId": "16124407",
        "name": "Stavåsen",
        "longitude": 9.022652,
        "latitude": 63.223279
    },
    {
        "busStopId": 102533,
        "locationId": "16533040",
        "name": "Brekkåsen snuplass",
        "longitude": 10.235216,
        "latitude": 63.268021
    },
    {
        "busStopId": 102534,
        "locationId": "16010929",
        "name": "Prinsens gate P5",
        "longitude": 10.392026,
        "latitude": 63.431832
    },
    {
        "busStopId": 102535,
        "locationId": "16010928",
        "name": "Prinsens gt. P4",
        "longitude": 10.392196,
        "latitude": 63.431309
    },
    {
        "busStopId": 102536,
        "locationId": "16010927",
        "name": "Prinsens gate P3",
        "longitude": 10.392277,
        "latitude": 63.43008
    },
    {
        "busStopId": 102537,
        "locationId": "16010636",
        "name": "Rotvoll Nedre",
        "longitude": 10.483591,
        "latitude": 63.438324
    },
    {
        "busStopId": 102538,
        "locationId": "16010420",
        "name": "Ada Arnfinsens veg",
        "longitude": 10.434399,
        "latitude": 63.391163
    },
    {
        "busStopId": 102539,
        "locationId": "16011672",
        "name": "Ringvål",
        "longitude": 10.249903,
        "latitude": 63.351874
    },
    {
        "busStopId": 102540,
        "locationId": "16011671",
        "name": "Ringvål grind",
        "longitude": 10.256344,
        "latitude": 63.355677
    },
    {
        "busStopId": 102541,
        "locationId": "16011670",
        "name": "Leinbakken",
        "longitude": 10.259012,
        "latitude": 63.35579
    },
    {
        "busStopId": 102542,
        "locationId": "16011669",
        "name": "Legårdsbakken",
        "longitude": 10.267259,
        "latitude": 63.355544
    },
    {
        "busStopId": 102543,
        "locationId": "16011668",
        "name": "Hestsjøen",
        "longitude": 10.272271,
        "latitude": 63.356398
    },
    {
        "busStopId": 102544,
        "locationId": "16011667",
        "name": "Fjøsvollan",
        "longitude": 10.290273,
        "latitude": 63.356137
    },
    {
        "busStopId": 102545,
        "locationId": "16011666",
        "name": "Rørmyra",
        "longitude": 10.297208,
        "latitude": 63.355331
    },
    {
        "busStopId": 102546,
        "locationId": "16011665",
        "name": "Moheim",
        "longitude": 10.306587,
        "latitude": 63.35407
    },
    {
        "busStopId": 102547,
        "locationId": "16011261",
        "name": "Leirbrua gård",
        "longitude": 10.32405,
        "latitude": 63.384857
    },
    {
        "busStopId": 102548,
        "locationId": "16011260",
        "name": "Leira skole",
        "longitude": 10.432216,
        "latitude": 63.37665
    },
    {
        "busStopId": 102549,
        "locationId": "16011259",
        "name": "Leirfossvegen",
        "longitude": 10.377419,
        "latitude": 63.383517
    },
    {
        "busStopId": 102550,
        "locationId": "16011258",
        "name": "Anders Buens gate",
        "longitude": 10.429485,
        "latitude": 63.438364
    },
    {
        "busStopId": 102551,
        "locationId": "16011257",
        "name": "Ladehammeren",
        "longitude": 10.426296,
        "latitude": 63.445955
    },
    {
        "busStopId": 102552,
        "locationId": "16011256",
        "name": "Lade kirke",
        "longitude": 10.438199,
        "latitude": 63.447389
    },
    {
        "busStopId": 102553,
        "locationId": "16011255",
        "name": "Lade gård",
        "longitude": 10.439816,
        "latitude": 63.447176
    },
    {
        "busStopId": 102554,
        "locationId": "16011254",
        "name": "Ladeveien",
        "longitude": 10.435513,
        "latitude": 63.443778
    },
    {
        "busStopId": 102555,
        "locationId": "16011253",
        "name": "Ladejarlen vg.skole",
        "longitude": 10.423646,
        "latitude": 63.445063
    },
    {
        "busStopId": 102556,
        "locationId": "16011252",
        "name": "Ingemann Torps vei",
        "longitude": 10.442367,
        "latitude": 63.44616
    },
    {
        "busStopId": 102557,
        "locationId": "16011251",
        "name": "Ivar Skjånes veg",
        "longitude": 10.377302,
        "latitude": 63.355605
    },
    {
        "busStopId": 102558,
        "locationId": "16011250",
        "name": "Kystad",
        "longitude": 10.343885,
        "latitude": 63.388773
    },
    {
        "busStopId": 102559,
        "locationId": "16011246",
        "name": "Kroppanbrua",
        "longitude": 10.391954,
        "latitude": 63.396143
    },
    {
        "busStopId": 102560,
        "locationId": "16011245",
        "name": "Kolsåsdalen",
        "longitude": 10.321705,
        "latitude": 63.375938
    },
    {
        "busStopId": 102561,
        "locationId": "16011244",
        "name": "Kroppanmarka",
        "longitude": 10.386438,
        "latitude": 63.382301
    },
    {
        "busStopId": 102562,
        "locationId": "16010677",
        "name": "Trollahaugen 64",
        "longitude": 10.304521,
        "latitude": 63.452171
    },
    {
        "busStopId": 102563,
        "locationId": "16010676",
        "name": "Heggstadmoen",
        "longitude": 10.351179,
        "latitude": 63.334407
    },
    {
        "busStopId": 102564,
        "locationId": "16010675",
        "name": "E.A.Smith",
        "longitude": 10.352374,
        "latitude": 63.337285
    },
    {
        "busStopId": 102565,
        "locationId": "16010674",
        "name": "Heggstadmoen 4",
        "longitude": 10.353182,
        "latitude": 63.338789
    },
    {
        "busStopId": 102566,
        "locationId": "16010673",
        "name": "Heggstadmoen 2",
        "longitude": 10.35312,
        "latitude": 63.340018
    },
    {
        "busStopId": 102567,
        "locationId": "16010672",
        "name": "Ringvål",
        "longitude": 10.249903,
        "latitude": 63.351874
    },
    {
        "busStopId": 102568,
        "locationId": "16010671",
        "name": "Ringvål grind",
        "longitude": 10.255832,
        "latitude": 63.355746
    },
    {
        "busStopId": 102569,
        "locationId": "16010670",
        "name": "Leinbakken",
        "longitude": 10.259012,
        "latitude": 63.355778
    },
    {
        "busStopId": 102570,
        "locationId": "16010669",
        "name": "Legårdsbakken",
        "longitude": 10.266235,
        "latitude": 63.35542
    },
    {
        "busStopId": 102571,
        "locationId": "16010668",
        "name": "Hestsjøen",
        "longitude": 10.27149,
        "latitude": 63.356358
    },
    {
        "busStopId": 102572,
        "locationId": "16010667",
        "name": "Fjøsvollan",
        "longitude": 10.292618,
        "latitude": 63.356366
    },
    {
        "busStopId": 102573,
        "locationId": "16010666",
        "name": "Rørmyra",
        "longitude": 10.297307,
        "latitude": 63.355355
    },
    {
        "busStopId": 102574,
        "locationId": "16010665",
        "name": "Moheim",
        "longitude": 10.307027,
        "latitude": 63.354155
    },
    {
        "busStopId": 102575,
        "locationId": "16010664",
        "name": "Kuset",
        "longitude": 10.59756,
        "latitude": 63.382913
    },
    {
        "busStopId": 102576,
        "locationId": "16010656",
        "name": "Brandhaugen",
        "longitude": 10.533259,
        "latitude": 63.370225
    },
    {
        "busStopId": 102577,
        "locationId": "16010263",
        "name": "Lerkendal gård",
        "longitude": 10.407845,
        "latitude": 63.412781
    },
    {
        "busStopId": 102578,
        "locationId": "16010262",
        "name": "Leirelva",
        "longitude": 10.332458,
        "latitude": 63.382696
    },
    {
        "busStopId": 102579,
        "locationId": "16010261",
        "name": "Leirbrua gård",
        "longitude": 10.321822,
        "latitude": 63.383718
    },
    {
        "busStopId": 102580,
        "locationId": "16010260",
        "name": "Leira skole",
        "longitude": 10.43192,
        "latitude": 63.376646
    },
    {
        "busStopId": 102581,
        "locationId": "16010259",
        "name": "Leirfossvegen",
        "longitude": 10.376817,
        "latitude": 63.382636
    },
    {
        "busStopId": 102582,
        "locationId": "16010258",
        "name": "Anders Buens gate",
        "longitude": 10.429854,
        "latitude": 63.43846
    },
    {
        "busStopId": 102583,
        "locationId": "16010257",
        "name": "Ladehammeren",
        "longitude": 10.426763,
        "latitude": 63.446112
    },
    {
        "busStopId": 102584,
        "locationId": "16010256",
        "name": "Lade kirke",
        "longitude": 10.439277,
        "latitude": 63.446891
    },
    {
        "busStopId": 102585,
        "locationId": "16010255",
        "name": "Lade gård",
        "longitude": 10.439987,
        "latitude": 63.44669
    },
    {
        "busStopId": 102586,
        "locationId": "16010254",
        "name": "Ladevegen",
        "longitude": 10.436411,
        "latitude": 63.444084
    },
    {
        "busStopId": 102587,
        "locationId": "16010253",
        "name": "Ladejarlen vg.skole",
        "longitude": 10.423925,
        "latitude": 63.44508
    },
    {
        "busStopId": 102588,
        "locationId": "16010252",
        "name": "Ingemann Torps vei",
        "longitude": 10.442277,
        "latitude": 63.446304
    },
    {
        "busStopId": 102589,
        "locationId": "16010251",
        "name": "Ivar Skjånes veg",
        "longitude": 10.376925,
        "latitude": 63.356108
    },
    {
        "busStopId": 102590,
        "locationId": "16010250",
        "name": "Kystad",
        "longitude": 10.341666,
        "latitude": 63.388382
    },
    {
        "busStopId": 102591,
        "locationId": "16010246",
        "name": "Kroppanbrua",
        "longitude": 10.389879,
        "latitude": 63.395399
    },
    {
        "busStopId": 102592,
        "locationId": "16010245",
        "name": "Kolsåsdalen",
        "longitude": 10.322604,
        "latitude": 63.375519
    },
    {
        "busStopId": 102593,
        "locationId": "16482708",
        "name": "Liøya",
        "longitude": 10.262273,
        "latitude": 63.029451
    },
    {
        "busStopId": 102594,
        "locationId": "16482707",
        "name": "Soknes",
        "longitude": 10.274885,
        "latitude": 63.034555
    },
    {
        "busStopId": 102595,
        "locationId": "16482704",
        "name": "Støren Rådhus",
        "longitude": 10.285854,
        "latitude": 63.03891
    },
    {
        "busStopId": 102596,
        "locationId": "16449648",
        "name": "Melien",
        "longitude": 11.328106,
        "latitude": 62.823069
    },
    {
        "busStopId": 102597,
        "locationId": "16449644",
        "name": "Nesvold",
        "longitude": 11.335652,
        "latitude": 62.760256
    },
    {
        "busStopId": 102598,
        "locationId": "16449643",
        "name": "Holden Øvre",
        "longitude": 11.341302,
        "latitude": 62.785253
    },
    {
        "busStopId": 102599,
        "locationId": "16449642",
        "name": "Holden Nedre",
        "longitude": 11.33231,
        "latitude": 62.802958
    },
    {
        "busStopId": 102600,
        "locationId": "16449641",
        "name": "Unsholte",
        "longitude": 11.331008,
        "latitude": 62.819044
    },
    {
        "busStopId": 102601,
        "locationId": "16449640",
        "name": "Jordsli",
        "longitude": 11.320911,
        "latitude": 62.828362
    },
    {
        "busStopId": 102602,
        "locationId": "16449639",
        "name": "Lunderengshaugen",
        "longitude": 11.312368,
        "latitude": 62.836905
    },
    {
        "busStopId": 102603,
        "locationId": "16449638",
        "name": "Ålen sentrum",
        "longitude": 11.3006,
        "latitude": 62.841814
    },
    {
        "busStopId": 102604,
        "locationId": "16449637",
        "name": "Hov skole",
        "longitude": 11.292299,
        "latitude": 62.842778
    },
    {
        "busStopId": 102605,
        "locationId": "16449636",
        "name": "Mo bru",
        "longitude": 11.274513,
        "latitude": 62.843684
    },
    {
        "busStopId": 102606,
        "locationId": "16449635",
        "name": "Mosletta",
        "longitude": 11.258621,
        "latitude": 62.84552
    },
    {
        "busStopId": 102607,
        "locationId": "16449633",
        "name": "Eidet",
        "longitude": 11.216949,
        "latitude": 62.854567
    },
    {
        "busStopId": 102608,
        "locationId": "16449631",
        "name": "Øyen",
        "longitude": 11.184421,
        "latitude": 62.87731
    },
    {
        "busStopId": 102609,
        "locationId": "16302250",
        "name": "Monstad",
        "longitude": 10.1835,
        "latitude": 63.959953
    },
    {
        "busStopId": 102610,
        "locationId": "16302212",
        "name": "Momyrvatn",
        "longitude": 10.531579,
        "latitude": 64.102807
    },
    {
        "busStopId": 102611,
        "locationId": "16302210",
        "name": "Momyr",
        "longitude": 10.504576,
        "latitude": 64.089283
    },
    {
        "busStopId": 102612,
        "locationId": "16302208",
        "name": "Nittermark",
        "longitude": 10.384704,
        "latitude": 64.025159
    },
    {
        "busStopId": 102613,
        "locationId": "16302207",
        "name": "Berdal",
        "longitude": 10.292591,
        "latitude": 63.991713
    },
    {
        "busStopId": 102614,
        "locationId": "16302206",
        "name": "Mikkelmo",
        "longitude": 10.248178,
        "latitude": 63.979526
    },
    {
        "busStopId": 102615,
        "locationId": "16302205",
        "name": "Årnes",
        "longitude": 10.224786,
        "latitude": 63.960509
    },
    {
        "busStopId": 102616,
        "locationId": "16302204",
        "name": "Arnevik",
        "longitude": 10.223448,
        "latitude": 63.937821
    },
    {
        "busStopId": 102617,
        "locationId": "16302203",
        "name": "Mørre",
        "longitude": 10.215058,
        "latitude": 63.921718
    },
    {
        "busStopId": 102618,
        "locationId": "16302202",
        "name": "Mørreaunet",
        "longitude": 10.242618,
        "latitude": 63.910832
    },
    {
        "busStopId": 102619,
        "locationId": "16275383",
        "name": "Lia",
        "longitude": 9.811534,
        "latitude": 63.785646
    },
    {
        "busStopId": 102620,
        "locationId": "16275382",
        "name": "Audal vegkryss",
        "longitude": 9.870841,
        "latitude": 63.827134
    },
    {
        "busStopId": 102621,
        "locationId": "16275379",
        "name": "Lysøya snuplass",
        "longitude": 9.864984,
        "latitude": 63.88791
    },
    {
        "busStopId": 102622,
        "locationId": "16275378",
        "name": "Bukta",
        "longitude": 9.840271,
        "latitude": 63.887483
    },
    {
        "busStopId": 102623,
        "locationId": "16275377",
        "name": "Botngård skole/Fosen vgs",
        "longitude": 9.819386,
        "latitude": 63.764619
    },
    {
        "busStopId": 102624,
        "locationId": "16275376",
        "name": "Lysøya bru",
        "longitude": 9.856818,
        "latitude": 63.883058
    },
    {
        "busStopId": 102625,
        "locationId": "16179715",
        "name": "Kjerringvåg",
        "longitude": 8.778723,
        "latitude": 63.649749
    },
    {
        "busStopId": 102626,
        "locationId": "16179706",
        "name": "Fillan buss st.",
        "longitude": 8.972678,
        "latitude": 63.601215
    },
    {
        "busStopId": 102627,
        "locationId": "16179602",
        "name": "Sandstad t.serv.",
        "longitude": 9.105189,
        "latitude": 63.521646
    },
    {
        "busStopId": 102628,
        "locationId": "16179594",
        "name": "Aunet",
        "longitude": 8.848522,
        "latitude": 63.617246
    },
    {
        "busStopId": 102629,
        "locationId": "16179516",
        "name": "Strømsvik",
        "longitude": 8.814853,
        "latitude": 63.649837
    },
    {
        "busStopId": 102630,
        "locationId": "16179514",
        "name": "Vikstrøm",
        "longitude": 8.786395,
        "latitude": 63.634462
    },
    {
        "busStopId": 102631,
        "locationId": "16179513",
        "name": "Dolmsundet",
        "longitude": 8.817845,
        "latitude": 63.636827
    },
    {
        "busStopId": 102632,
        "locationId": "16179512",
        "name": "Barman oppv.sent",
        "longitude": 8.848477,
        "latitude": 63.622307
    },
    {
        "busStopId": 102633,
        "locationId": "16179511",
        "name": "Sveneset",
        "longitude": 8.851244,
        "latitude": 63.610232
    },
    {
        "busStopId": 102634,
        "locationId": "16179510",
        "name": "Volden",
        "longitude": 8.863309,
        "latitude": 63.600444
    },
    {
        "busStopId": 102635,
        "locationId": "16179509",
        "name": "Dalpro",
        "longitude": 8.886126,
        "latitude": 63.60635
    },
    {
        "busStopId": 102636,
        "locationId": "16179504",
        "name": "Skaget",
        "longitude": 8.95959,
        "latitude": 63.581197
    },
    {
        "busStopId": 102637,
        "locationId": "16179503",
        "name": "Trafost",
        "longitude": 8.958611,
        "latitude": 63.574234
    },
    {
        "busStopId": 102638,
        "locationId": "16179502",
        "name": "Kaldkløv",
        "longitude": 8.983863,
        "latitude": 63.573986
    },
    {
        "busStopId": 102639,
        "locationId": "16179501",
        "name": "Tranvik vegdeler",
        "longitude": 9.026937,
        "latitude": 63.572199
    },
    {
        "busStopId": 102640,
        "locationId": "16175802",
        "name": "Sandstad t.serv.",
        "longitude": 9.105629,
        "latitude": 63.521754
    },
    {
        "busStopId": 102641,
        "locationId": "16538117",
        "name": "Høyeggen skole",
        "longitude": 10.296607,
        "latitude": 63.285993
    },
    {
        "busStopId": 102642,
        "locationId": "16533220",
        "name": "Hesttrøa",
        "longitude": 10.332,
        "latitude": 63.294698
    },
    {
        "busStopId": 102643,
        "locationId": "16533203",
        "name": "Gimse",
        "longitude": 10.253613,
        "latitude": 63.282665
    },
    {
        "busStopId": 102644,
        "locationId": "16533119",
        "name": "Uglevegen",
        "longitude": 10.317447,
        "latitude": 63.287733
    },
    {
        "busStopId": 102645,
        "locationId": "16533118",
        "name": "Loddgårdstrøa",
        "longitude": 10.309354,
        "latitude": 63.285698
    },
    {
        "busStopId": 102646,
        "locationId": "16533117",
        "name": "Høyeggen skole",
        "longitude": 10.296346,
        "latitude": 63.285952
    },
    {
        "busStopId": 102647,
        "locationId": "16011343",
        "name": "Okstadvegen",
        "longitude": 10.378991,
        "latitude": 63.382945
    },
    {
        "busStopId": 102648,
        "locationId": "16010900",
        "name": "M41",
        "longitude": 10.394191,
        "latitude": 63.432338
    },
    {
        "busStopId": 102649,
        "locationId": "16010653",
        "name": "Nyjord",
        "longitude": 10.538586,
        "latitude": 63.379359
    },
    {
        "busStopId": 102650,
        "locationId": "16010443",
        "name": "Kvenildsmyra",
        "longitude": 10.368894,
        "latitude": 63.335129
    },
    {
        "busStopId": 102651,
        "locationId": "16010343",
        "name": "Okstadvegen",
        "longitude": 10.378973,
        "latitude": 63.38307
    },
    {
        "busStopId": 102652,
        "locationId": "17142582",
        "name": "Elvarli",
        "longitude": 11.066094,
        "latitude": 63.393178
    },
    {
        "busStopId": 102653,
        "locationId": "17142566",
        "name": "Brennmoen",
        "longitude": 11.07223,
        "latitude": 63.371553
    },
    {
        "busStopId": 102654,
        "locationId": "17142565",
        "name": "Elverum",
        "longitude": 11.066094,
        "latitude": 63.393178
    },
    {
        "busStopId": 102655,
        "locationId": "17142561",
        "name": "Elvran",
        "longitude": 11.065807,
        "latitude": 63.393255
    },
    {
        "busStopId": 102656,
        "locationId": "17142560",
        "name": "Veisethveien",
        "longitude": 11.043583,
        "latitude": 63.394337
    },
    {
        "busStopId": 102657,
        "locationId": "16343436",
        "name": "Veslenget",
        "longitude": 9.915299,
        "latitude": 62.675536
    },
    {
        "busStopId": 102658,
        "locationId": "16343420",
        "name": "Oppdal stasjon",
        "longitude": 9.695068,
        "latitude": 62.593761
    },
    {
        "busStopId": 102659,
        "locationId": "16343410",
        "name": "Stølen",
        "longitude": 9.74116,
        "latitude": 62.608721
    },
    {
        "busStopId": 102660,
        "locationId": "16343405",
        "name": "Fagerhaug",
        "longitude": 9.87907,
        "latitude": 62.656306
    },
    {
        "busStopId": 102661,
        "locationId": "16343404",
        "name": "Asphaugen",
        "longitude": 9.89117,
        "latitude": 62.661616
    },
    {
        "busStopId": 102662,
        "locationId": "16343402",
        "name": "Snorroegga",
        "longitude": 9.924605,
        "latitude": 62.680438
    },
    {
        "busStopId": 102663,
        "locationId": "16124502",
        "name": "Bordstad",
        "longitude": 9.173443,
        "latitude": 63.208552
    },
    {
        "busStopId": 102664,
        "locationId": "16124442",
        "name": "Vinjeøra",
        "longitude": 8.983458,
        "latitude": 63.202745
    },
    {
        "busStopId": 102665,
        "locationId": "16124441",
        "name": "Vinje kirke",
        "longitude": 9.001344,
        "latitude": 63.207269
    },
    {
        "busStopId": 102666,
        "locationId": "16124437",
        "name": "Singsdalssaga",
        "longitude": 8.934572,
        "latitude": 63.379355
    },
    {
        "busStopId": 102667,
        "locationId": "16124430",
        "name": "Svanem",
        "longitude": 8.986072,
        "latitude": 63.388129
    },
    {
        "busStopId": 102668,
        "locationId": "16124429",
        "name": "Røstvoll",
        "longitude": 9.000778,
        "latitude": 63.378888
    },
    {
        "busStopId": 102669,
        "locationId": "16124428",
        "name": "Åstad",
        "longitude": 9.003212,
        "latitude": 63.37161
    },
    {
        "busStopId": 102670,
        "locationId": "16124427",
        "name": "Ness",
        "longitude": 9.01657,
        "latitude": 63.360809
    },
    {
        "busStopId": 102671,
        "locationId": "16124426",
        "name": "Lian",
        "longitude": 9.006554,
        "latitude": 63.349763
    },
    {
        "busStopId": 102672,
        "locationId": "16124425",
        "name": "Aunhaugen",
        "longitude": 8.999951,
        "latitude": 63.337539
    },
    {
        "busStopId": 102673,
        "locationId": "16533190",
        "name": "Gimseflata",
        "longitude": 10.254161,
        "latitude": 63.279749
    },
    {
        "busStopId": 102674,
        "locationId": "16533189",
        "name": "Melhusbrua",
        "longitude": 10.262983,
        "latitude": 63.281421
    },
    {
        "busStopId": 102675,
        "locationId": "16533184",
        "name": "Øie skole",
        "longitude": 10.253937,
        "latitude": 63.322838
    },
    {
        "busStopId": 102676,
        "locationId": "16533183",
        "name": "Udduvoll bru V.",
        "longitude": 10.265139,
        "latitude": 63.322407
    },
    {
        "busStopId": 102677,
        "locationId": "16533167",
        "name": "Gafset",
        "longitude": 10.238773,
        "latitude": 63.324028
    },
    {
        "busStopId": 102678,
        "locationId": "16533116",
        "name": "Brekkåsen",
        "longitude": 10.245412,
        "latitude": 63.273714
    },
    {
        "busStopId": 102679,
        "locationId": "16533114",
        "name": "Trøndertun",
        "longitude": 10.249274,
        "latitude": 63.276929
    },
    {
        "busStopId": 102680,
        "locationId": "16010904",
        "name": "Presthus E6",
        "longitude": 10.518634,
        "latitude": 63.424257
    },
    {
        "busStopId": 102681,
        "locationId": "16010813",
        "name": "Trondheim S 3",
        "longitude": 10.400883,
        "latitude": 63.436034
    },
    {
        "busStopId": 102682,
        "locationId": "16010791",
        "name": "Være",
        "longitude": 10.569497,
        "latitude": 63.431438
    },
    {
        "busStopId": 102683,
        "locationId": "16010790",
        "name": "Væresholmen",
        "longitude": 10.575704,
        "latitude": 63.433407
    },
    {
        "busStopId": 102684,
        "locationId": "16010789",
        "name": "Ekra",
        "longitude": 10.29693,
        "latitude": 63.317615
    },
    {
        "busStopId": 102685,
        "locationId": "16010529",
        "name": "Udduvoll bru Ø.",
        "longitude": 10.277787,
        "latitude": 63.324302
    },
    {
        "busStopId": 102686,
        "locationId": "16010528",
        "name": "Stav Øvre",
        "longitude": 10.294981,
        "latitude": 63.323968
    },
    {
        "busStopId": 102687,
        "locationId": "16010527",
        "name": "Storler",
        "longitude": 10.32432,
        "latitude": 63.325496
    },
    {
        "busStopId": 102688,
        "locationId": "16010526",
        "name": "Sandmoen E6",
        "longitude": 10.361555,
        "latitude": 63.338491
    },
    {
        "busStopId": 102689,
        "locationId": "16010525",
        "name": "Johan Tillers v. E6",
        "longitude": 10.368975,
        "latitude": 63.347523
    },
    {
        "busStopId": 102690,
        "locationId": "16010524",
        "name": "City Syd E6",
        "longitude": 10.371966,
        "latitude": 63.360294
    },
    {
        "busStopId": 102691,
        "locationId": "16010523",
        "name": "Tonstadkrysset",
        "longitude": 10.379054,
        "latitude": 63.368924
    },
    {
        "busStopId": 102692,
        "locationId": "16011689",
        "name": "Flakkråa",
        "longitude": 10.199481,
        "latitude": 63.445871
    },
    {
        "busStopId": 102693,
        "locationId": "16011688",
        "name": "Flakkleiva",
        "longitude": 10.217456,
        "latitude": 63.44985
    },
    {
        "busStopId": 102694,
        "locationId": "16011687",
        "name": "Svartbekken",
        "longitude": 10.224139,
        "latitude": 63.451255
    },
    {
        "busStopId": 102695,
        "locationId": "16011686",
        "name": "Follafoten",
        "longitude": 10.235198,
        "latitude": 63.45238
    },
    {
        "busStopId": 102696,
        "locationId": "16011685",
        "name": "Storsteinan",
        "longitude": 10.256964,
        "latitude": 63.452918
    },
    {
        "busStopId": 102697,
        "locationId": "16011684",
        "name": "Løften",
        "longitude": 10.279215,
        "latitude": 63.451436
    },
    {
        "busStopId": 102698,
        "locationId": "16011683",
        "name": "Trolla",
        "longitude": 10.310539,
        "latitude": 63.45144
    },
    {
        "busStopId": 102699,
        "locationId": "16011682",
        "name": "Brukseier Olsens v.",
        "longitude": 10.313648,
        "latitude": 63.450866
    },
    {
        "busStopId": 102700,
        "locationId": "16011676",
        "name": "Heggstadmoen",
        "longitude": 10.351772,
        "latitude": 63.334806
    },
    {
        "busStopId": 102701,
        "locationId": "16011675",
        "name": "E.A.Smith",
        "longitude": 10.35259,
        "latitude": 63.337249
    },
    {
        "busStopId": 102702,
        "locationId": "16011674",
        "name": "Heggstadmoen 4",
        "longitude": 10.353299,
        "latitude": 63.338793
    },
    {
        "busStopId": 102703,
        "locationId": "16011673",
        "name": "Heggstadmoen 2",
        "longitude": 10.353236,
        "latitude": 63.340063
    },
    {
        "busStopId": 102704,
        "locationId": "16011288",
        "name": "Løvaasveien",
        "longitude": 10.370421,
        "latitude": 63.337942
    },
    {
        "busStopId": 102705,
        "locationId": "16011287",
        "name": "Lillerydningen",
        "longitude": 10.35188,
        "latitude": 63.387171
    },
    {
        "busStopId": 102706,
        "locationId": "16011286",
        "name": "Lialøkken",
        "longitude": 10.432809,
        "latitude": 63.372427
    },
    {
        "busStopId": 102707,
        "locationId": "16011276",
        "name": "Leirøya",
        "longitude": 10.389807,
        "latitude": 63.386028
    },
    {
        "busStopId": 102708,
        "locationId": "16011274",
        "name": "Lyngvegen",
        "longitude": 10.3555,
        "latitude": 63.357112
    },
    {
        "busStopId": 102709,
        "locationId": "16011271",
        "name": "Lundåsen",
        "longitude": 10.326844,
        "latitude": 63.351737
    },
    {
        "busStopId": 102710,
        "locationId": "16011270",
        "name": "Lundemobakken",
        "longitude": 10.36116,
        "latitude": 63.352394
    },
    {
        "busStopId": 102711,
        "locationId": "16011269",
        "name": "Lund",
        "longitude": 10.320071,
        "latitude": 63.349574
    },
    {
        "busStopId": 102712,
        "locationId": "16011268",
        "name": "Loholtbakken",
        "longitude": 10.458357,
        "latitude": 63.405282
    },
    {
        "busStopId": 102713,
        "locationId": "16011267",
        "name": "Lohove",
        "longitude": 10.454692,
        "latitude": 63.405797
    },
    {
        "busStopId": 102714,
        "locationId": "16011265",
        "name": "Gløshaugen Syd",
        "longitude": 10.408698,
        "latitude": 63.416311
    },
    {
        "busStopId": 102715,
        "locationId": "16011264",
        "name": "Lerkendal stadion",
        "longitude": 10.399742,
        "latitude": 63.412672
    },
    {
        "busStopId": 102716,
        "locationId": "16011263",
        "name": "Lerkendal gård",
        "longitude": 10.407045,
        "latitude": 63.41297
    },
    {
        "busStopId": 102717,
        "locationId": "16011262",
        "name": "Leirelva",
        "longitude": 10.331803,
        "latitude": 63.382776
    },
    {
        "busStopId": 102718,
        "locationId": "16010697",
        "name": "Skjøstad",
        "longitude": 10.161186,
        "latitude": 63.390809
    },
    {
        "busStopId": 102719,
        "locationId": "16010696",
        "name": "Megarden",
        "longitude": 10.160907,
        "latitude": 63.393971
    },
    {
        "busStopId": 102720,
        "locationId": "16010695",
        "name": "Mjøset",
        "longitude": 10.162964,
        "latitude": 63.401188
    },
    {
        "busStopId": 102721,
        "locationId": "16010694",
        "name": "Høstad",
        "longitude": 10.161392,
        "latitude": 63.406343
    },
    {
        "busStopId": 102722,
        "locationId": "16010693",
        "name": "Fortuna",
        "longitude": 10.155311,
        "latitude": 63.412628
    },
    {
        "busStopId": 102723,
        "locationId": "16010692",
        "name": "Rye skole",
        "longitude": 10.147082,
        "latitude": 63.419113
    },
    {
        "busStopId": 102724,
        "locationId": "16010691",
        "name": "Rye",
        "longitude": 10.150037,
        "latitude": 63.425354
    },
    {
        "busStopId": 102725,
        "locationId": "16010690",
        "name": "Klefstadhaugen",
        "longitude": 10.183275,
        "latitude": 63.433531
    },
    {
        "busStopId": 102726,
        "locationId": "16010689",
        "name": "Flakkråa",
        "longitude": 10.197774,
        "latitude": 63.44575
    },
    {
        "busStopId": 102727,
        "locationId": "16010688",
        "name": "Flakkleiva",
        "longitude": 10.216657,
        "latitude": 63.449902
    },
    {
        "busStopId": 102728,
        "locationId": "16010687",
        "name": "Svartbekken",
        "longitude": 10.224894,
        "latitude": 63.451589
    },
    {
        "busStopId": 102729,
        "locationId": "16010686",
        "name": "Follafoten",
        "longitude": 10.234919,
        "latitude": 63.452472
    },
    {
        "busStopId": 102730,
        "locationId": "16010685",
        "name": "Storsteinan",
        "longitude": 10.257404,
        "latitude": 63.45303
    },
    {
        "busStopId": 102731,
        "locationId": "16010684",
        "name": "Løften",
        "longitude": 10.27882,
        "latitude": 63.451569
    },
    {
        "busStopId": 102732,
        "locationId": "16010683",
        "name": "Trolla",
        "longitude": 10.309318,
        "latitude": 63.451886
    },
    {
        "busStopId": 102733,
        "locationId": "16010682",
        "name": "Brukseier Olsens v.",
        "longitude": 10.313657,
        "latitude": 63.451047
    },
    {
        "busStopId": 102734,
        "locationId": "16010292",
        "name": "Marcus Thranes vei",
        "longitude": 10.367061,
        "latitude": 63.355065
    },
    {
        "busStopId": 102735,
        "locationId": "16010291",
        "name": "Magnus Blindes vei",
        "longitude": 10.420924,
        "latitude": 63.421396
    },
    {
        "busStopId": 102736,
        "locationId": "16010290",
        "name": "Magnus Berrføtts v.",
        "longitude": 10.439016,
        "latitude": 63.42179
    },
    {
        "busStopId": 102737,
        "locationId": "16010288",
        "name": "Løvaasveien",
        "longitude": 10.36981,
        "latitude": 63.337193
    },
    {
        "busStopId": 102738,
        "locationId": "16010287",
        "name": "Lillerydningen",
        "longitude": 10.351952,
        "latitude": 63.386563
    },
    {
        "busStopId": 102739,
        "locationId": "16010286",
        "name": "Lialøkken",
        "longitude": 10.43262,
        "latitude": 63.372355
    },
    {
        "busStopId": 102740,
        "locationId": "16010276",
        "name": "Leirøya",
        "longitude": 10.389807,
        "latitude": 63.386604
    },
    {
        "busStopId": 102741,
        "locationId": "16010274",
        "name": "Lyngvegen",
        "longitude": 10.355024,
        "latitude": 63.357514
    },
    {
        "busStopId": 102742,
        "locationId": "16010272",
        "name": "Lundåsen",
        "longitude": 10.326233,
        "latitude": 63.354364
    },
    {
        "busStopId": 102743,
        "locationId": "16010271",
        "name": "Lundåsen",
        "longitude": 10.326952,
        "latitude": 63.352595
    },
    {
        "busStopId": 102744,
        "locationId": "16010270",
        "name": "Lundemobakken",
        "longitude": 10.360872,
        "latitude": 63.352342
    },
    {
        "busStopId": 102745,
        "locationId": "16010269",
        "name": "Lund",
        "longitude": 10.319379,
        "latitude": 63.349678
    },
    {
        "busStopId": 102746,
        "locationId": "16010267",
        "name": "Lohove",
        "longitude": 10.456794,
        "latitude": 63.405322
    },
    {
        "busStopId": 102747,
        "locationId": "16010265",
        "name": "Gløshaugen Syd",
        "longitude": 10.407566,
        "latitude": 63.416624
    },
    {
        "busStopId": 102748,
        "locationId": "16010264",
        "name": "Lerkendal stadion",
        "longitude": 10.400362,
        "latitude": 63.412612
    }
];

var convertedStops = Stops.map(function (e) {
    return new Bussholdeplass(e.busStopId, e.locationId, e.name, e.longitude, e.latitude);
});

convertedStops = convertedStops.sort(function (a, b) {
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1;
    }
    else if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1;
    }

    return 0;
});

module.exports = convertedStops;
