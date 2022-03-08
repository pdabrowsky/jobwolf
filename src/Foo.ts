// let number: number | string = 5 // number, boolean, string,
// number = '43ddwww'

// const bool: boolean = true

interface General {
	imie: string;
	nazwisko: string;
	dodajHobby: (hobby: string) => void;
}

// type SomeType = number | 'foo'

// const some: SomeType = 'foo'

// interface Osoba extends General {
//     wiek: number
//     imie: number
//     zonaty: boolean
// }

// type Osoba = General & {
//     imie: number
// }

// type Osoba = {
//     wiek: number
//     zonaty: boolean
// } & Omit<General, 'imie'>, Pick, Partial

const osoba: General = {
	imie: "Pawel",
	nazwisko: "",
	dodajHobby(hobby: string) {
		console.log(hobby);
	},
};

osoba.dodajHobby("dawda");

type Foo = {
	imie: string;
	nazwisko: string;
};

type Boo = {
	wiek: number;
	wzrost: number;
};

type Baz = {
	wypłata: {
		waluta: "PLN" | "USD";
		count: number;
	};
};

type Goo = Baz & {
	imie?: string;
	wiek?: number;
	dodajPrace: (praca: Baz) => Baz;
};

/*
    imie?: string
    wiek?: number
    dodajPrace: (praca: Baz) => Baz

    Baz = {
        wypłata: {
            waluta: PLN lub USD
            count: number
        }
    }
*/

export {};
