export interface Product {
    id: string;
    name: string;
    type: string;
    description: string;
    price: number;
    colour: string;
    path: string;
}

const BASE_URL = "https://rmcnjxvjosmglbobgfyh.supabase.co/storage/v1/object/public/products/";

export const products: Product[] = [
    {
        id: "1",
        name: "Watch",
        type: "jewelry",
        description: "a stylish watch with a leather strap",
        price: 29.99,
        colour: "blue",
        path: `${BASE_URL}IMG-20260307-WA0088.jpg`, // watch
    },
    {
        id: "2",
        name: "Shoes",
        type: "footwear",
        description: "comfortable running shoes for everyday wear",
        price: 49.99,
        colour: "red",
        path: `${BASE_URL}IMG-20260307-WA0089.jpg` // shoes
    },
    {
        id: "4",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0000.jpg` // product1
    },
    {
        id: "5",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0003.jpg` // product2
    },
    {
        id: "6",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0009.jpg` // product3
    },
    {
        id: "7",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0010.jpg` // product4
    },
    {
        id: "8",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0031.jpg` // product5
    },
    {
        id: "9",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0032.jpg` // product6
    },
    {
        id: "10",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0033.jpg` // product7
    },
    {
        id: "11",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0034.jpg` // product8
    },
    {
        id: "12",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0035.jpg` // product9
    },
    {
        id: "13",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0036.jpg` // product10
    },
    {
        id: "14",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0037.jpg` // product11
    },
    {
        id: "15",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0038.jpg` // product12
    },
    {
        id: "16",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0039.jpg` // product13
    },
    {
        id: "17",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0040.jpg` // product14
    },
    {
        id: "18",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0041.jpg` // product15
    },
    {
        id: "19",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0042.jpg` // product16
    },
    {
        id: "20",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0043.jpg` // product17
    },
    {
        id: "21",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0044.jpg` // product18
    },
    {
        id: "22",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0045.jpg` // product19
    },
    {
        id: "23",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0046.jpg` // product20
    },
    {
        id: "24",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0047.jpg` // product21
    },
    {
        id: "25",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0048.jpg` // product22
    },
    {
        id: "26",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0049.jpg` // product23
    },
    {
        id: "27",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0050.jpg` // product24
    },
    {
        id: "28",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0051.jpg` // product25
    },
    {
        id: "29",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0052.jpg` // product26
    },
    {
        id: "30",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0053.jpg` // product27
    },
    {
        id: "31",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0054.jpg` // product28
    },
    {
        id: "32",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0055.jpg` // product29
    },
    {
        id: "33",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0056.jpg` // product30
    },
    {
        id: "34",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0057.jpg` // product31
    },
    {
        id: "35",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0058.jpg` // product32
    },
    {
        id: "36",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0059.jpg` // product33
    },
    {
        id: "37",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0060.jpg` // product34
    },
    {
        id: "38",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0061.jpg` // product35
    },
    {
        id: "39",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0062.jpg` // product36
    },
    {
        id: "40",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0063.jpg` // product37
    },
    {
        id: "41",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0064.jpg` // product38
    },
    {
        id: "42",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0065.jpg` // product39
    },
    {
        id: "43",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0066.jpg` // product40
    },
    {
        id: "44",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0067.jpg` // product41
    },
    {
        id: "45",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0068.jpg` // product42
    },
    {
        id: "46",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0069.jpg` // product43
    },
    {
        id: "47",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0070.jpg` // product44
    },
    {
        id: "48",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0071.jpg` // product45
    },
    {
        id: "49",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0072.jpg` // product46
    },
    {
        id: "50",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0073.jpg` // product47
    },
    {
        id: "51",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0074.jpg` // product48
    },
    {
        id: "52",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0075.jpg` // product49
    },
    {
        id: "53",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0076.jpg` // product50
    },
    {
        id: "54",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0077.jpg` // product51
    },
    {
        id: "55",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0078.jpg` // product52
    },
    {
        id: "56",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0079.jpg` // product53
    },
    {
        id: "57",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0080.jpg` // product54
    },
    {
        id: "58",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0081.jpg` // product55
    },
    {
        id: "59",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0082.jpg` // product56
    },
    {
        id: "60",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0083.jpg` // product57
    },
    {
        id: "61",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0084.jpg` // product58
    },
    {
        id: "62",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0085.jpg` // product59
    },
    {
        id: "63",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0086.jpg` // product60
    },
    {
        id: "64",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0087.jpg` // product61
    },
    {
        id: "101",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260328-WA0021.jpg` // product64
    },
    {
        id: "65",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260328-WA0022.jpg` // product65
    },
    {
        id: "66",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260328-WA0023.jpg` // product66
    },
    {
        id: "67",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260328-WA0024.jpg` // product67
    },
    {
        id: "68",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260328-WA0025.jpg` // product68
    },
    {
        id: "69",
        name: "La Vida es bella",
        type: "perfume",
        description: "a quality product",
        price: 210000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0001.jpg` // product69
    },
    {
        id: "70",
        name: "Maison Crivelli's Oud Maracujá ",
        type: "perfume",
        description: "Maison Crivelli's Oud Maracujá is a bold, fruity-woody Extrait de Parfum (2023) blending bright passion fruit with intense, smoky oud and leather. Known for its high concentration and long-lasting sillage 100ml ",
        price: 480000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0002.jpg` // product70
    },
    {
        id: "72",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 30000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0004.jpg` // product72
    },
    {
        id: "73",
        name: "9pm Elixir Afnan",
        type: "perfume",
        description: "a quality product",
        price: 135000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0005.jpg` // product73
    },
    {
        id: "74",
        name: "Asad Elixir Lattafa",
        type: "perfume",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0006.jpg` // product74
    },
    {
        id: "75",
        name: "Hayaati Lattafa",
        type: "perfume",
        description: "a quality product",
        price: 25000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0007.jpg` // product75
    },
    {
        id: "76",
        name: "Teriaq Intense Lattafa",
        type: "perfume",
        description: "a quality product",
        price: 87000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0008.jpg` // product76
    },
    {
        id: "77",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260328-WA0020.jpg` // product77
    },
    {
        id: "78",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260328-WA0019.jpg` // product78
    },
    {
        id: "79",
        name: "His Coffession Laffata",
        type: "perfume",
        description: "a quality product",
        price: 63000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0009.jpg` // product79
    },
    {
        id: "80",
        name: "Haramain Amber oud",
        type: "perfume",
        description: "a quality product",
        price: 185000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0010.jpg` // product80
    },
    {
        id: "82",
        name: "Tom Ford Lost Cherry",
        type: "perfume",
        description: "It features a rich blend of black cherry, almond, and spicy Turkish rose, aiming for a luxurious, sweet, and sensual profile packaged in a signature red bottle. 100ml 650k",
        price: 650000,
        colour: "brown",
        path: `${BASE_URL}IMG-20260401-WA0012.jpg` // product82
    },
    {
        id: "83",
        name: "Maison Extrait de perfum verporisation",
        type: "general",
        description: "Barakkat Rouge 540, 100ml , 3.4FLOZ",
        price: 29500,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0013.jpg` // product83
    },
    {
        id: "84",
        name: "Christian Dior Oud Ispahan",
        type: "perfume",
        description: "Christian Dior Oud Ispahan 100 ml is an opulent, unisex oriental floral fragrance launched in 2012, characterized by a potent blend of Damascena rose and intense agarwood (oud) smoke. ",
        price: 1400000,
        colour: "gold",
        path: `${BASE_URL}IMG-20260401-WA0014.jpg` // product84
    },
    {
        id: "85",
        name: "La Vis Better",
        type: "general",
        description: "75ml , 2.5FLOZ",
        price: 50000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0015.jpg` // product85
    },
    {
        id: "86",
        name: "Dance & Gabriel",
        type: "perfume",
        description: "rose the one",
        price: 200000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0016.jpg` // product86
    },
    {
        id: "87",
        name: "Tom Ford Tobacco Vanila",
        type: "perfume",
        description: "Tom Ford Tobacco Vanille 100ml Eau de Parfum is a luxurious, unisex Oriental Spicy fragrance featuring prominent notes of tobacco leaf, creamy tonka bean, vanilla, and cocoa. 100ml.",
        price: 550000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0017.jpg` // product87
    },
    {
        id: "88",
        name: "Moisen Fragrance Khurshid Paris",
        type: "perfume",
        description: "Boceanial Rovg 504, eau de perfum",
        price: 20000,
        colour: "brown",
        path: `${BASE_URL}IMG-20260401-WA0019.jpg` // product88
    },
    {
        id: "89",
        name: "club de nuit",
        type: "perfume",
        description: "a quality product, 105ml",
        price: 70000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0020.jpg` // product89
    },
    {
        id: "90",
        name: "body",
        type: "perfume",
        description: "a quality product",
        price: 150000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0021.jpg` // product90
    },
    {
        id: "91",
        name: "Gucci Osmanthus neccer",
        type: "perfume",
        description: "It is a high-end, floral-woody, unisex scent featuring osmanthus flower, apricot, and sandalwood, packaged in a distinctive red glass bottle with a hummingbird design. 100ml ",
        price: 580000,
        colour: "chocolate",
        path: `${BASE_URL}IMG-20260401-WA0022.jpg` // product91
    },
    {
        id: "92",
        name: "Bloom",
        type: "perfume",
        description: "G.M.C maria Grazia Cucinotta Bloom, 100ml, 3.4FLOZ",
        price: 45000,
        colour: "green",
        path: `${BASE_URL}IMG-20260401-WA0023.jpg` // product92
    },
    {
        id: "93",
        name: "Roja perfume I8 Burlington I9",
        type: "perfume",
        description: "a quality product",
        price: 450000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0024.jpg` // product93
    },
    {
        id: "94",
        name: "Vercares Brilliant Cristal",
        type: "perfume",
        description: "a quality product",
        price: 70000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0025.jpg` // product94
    },
    {
        id: "95",
        name: "Mark him",
        type: "perfume",
        description: "100ml, water pour home perfume",
        price: 18000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0026.jpg` // product95
    },
    {
        id: "96",
        name: "euhponic",
        type: "perfume",
        description: "a quality product",
        price: 60000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0027.jpg` // product96
    },
    {
        id: "97",
        name: "Terre D'Horse",
        type: "perfume",
        description: "eau de perfum natural spray",
        price: 40000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0028.jpg` // product97
    },
    {
        id: "98",
        name: "Blue De Challenge",
        type: "perfume",
        description: "a quality product",
        price: 15000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0029.jpg` // product98
    },
    {
        id: "99",
        name: "Azzaro The Most Wanted",
        type: "perfume",
        description: "a quality product",
        price: 180000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0030.jpg` // product99
    },
    {
        id: "100",
        name: "Sauvace ",
        type: "perfume",
        description: " eau de perfum verporisation, 100ml , 3.4 Floz",
        price: 120000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0031.jpg` // product100
    },
    {
        id: "102",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260307-WA0087.jpg` // product61
    },
    {
        id: "103",
        name: "Product",
        type: "general",
        description: "a quality product",
        price: 19.99,
        colour: "black",
        path: `${BASE_URL}IMG-20260328-WA0017.jpg` // product62
    },
    {
        id: "104",
        name: "Ombre Nomade Louis Vuition",
        type: "perfume",
        description: "A combination of Assam Oud wood, benzoin, raspberry, and leathery notes, creating a smoky, yet fruity and sweet profile.  Price ",
        price: 1000000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0032.jpg` // product101
    },
    {
        id: "105",
        name: "Gabelil chank perfume",
        type: "perfume",
        description: "a quality product",
        price: 30000,
        colour: "gold",
        path: `${BASE_URL}IMG-20260401-WA0033.jpg` // product102
    },
    {
        id: "106",
        name: "Libre eau de perfum",
        type: "perfume",
        description: "a quality product",
        price: 60000,
        colour: "gold",
        path: `${BASE_URL}IMG-20260401-WA0034.jpg` // product103
    },
    {
        id: "107",
        name: "Bloom",
        type: "perfume",
        description: "G.M.C maria Grazia Cucinotta Bloom, 100ml, 3.4FLOZ",
        price: 50000,
        colour: "red",
        path: `${BASE_URL}IMG-20260401-WA0035.jpg` // product104
    },
    {
        id: "108",
        name: "Sexy Scandal",
        type: "perfume",
        description: "a quality product",
        price: 22000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0036.jpg` // product105
    },
    {
        id: "109",
        name: "Gabrille channel",
        type: "perfume",
        description: "A solar and voluptuous, feminine fragrance designed for those who want to express their own personality, created by Olivier Polge.  100ml ",
        price: 390000,
        colour: "gold",
        path: `${BASE_URL}IMG-20260401-WA0037.jpg` // product106
    },
    {
        id: "110",
        name: "Angels share Kilian Parads",
        type: "perfume",
        description: "vaporisation spray, 50ml , 1.7.8. oz",
        price: 430000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0038.jpg` // product107
    },
    {
        id: "111",
        name: "Pur Oud Lus Vuition",
        type: "perfume",
        description: "Louis Vuitton Pur Oud is an ultra-premium, unisex woody-spicy fragrance launched in 2021, featuring a high concentration of rare Indian and Cambodian oud, along with notes of musk and animalic undertones. 100ml",
        price: 4000000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0039.jpg` // product108
    },
    {
        id: "112",
        name: "coco Daisy",
        type: "perfume",
        description: "Maiden Anna",
        price: 15000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0040.jpg` // product109
    },
    {
        id: "113",
        name: "Dior Sauvage Elixir",
        type: "perfume",
        description: "Dior Sauvage Elixir is an intensely concentrated, woody-aromatic fragrance for men, featuring notes of lavender, spices, and rich woods midnight-blue glass bottle. It is known for high longevity (10-12+ hours) and a powerful, sophisticated, and rare aromatic scent.",
        price: 420000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0041.jpg` // product110
    },
    {
        id: "114",
        name: "5th coog chaveg",
        type: "perfume",
        description: "eau de perfum",
        price: 20000,
        colour: "gold",
        path: `${BASE_URL}IMG-20260401-WA0042.jpg` // product111
    },
    {
        id: "115",
        name: "coog chaveg perfume",
        type: "perfume",
        description: "Eau de verporisation spray, 100m, 3.4FLOZ",
        price: 42000,
        colour: "black",
        path: `${BASE_URL}IMG-20260401-WA0043.jpg` // product112
    }
];