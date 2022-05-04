## JobWolf - inProgres

Aplikacja inspirowana portalem justjoin służąca do wyszukiwania i dodawania ofert pracy.

## Funkcjonalności

-   Wyświetlanie listy ofert
-   Dodawanie ofert
-   Filtrowanie / sortowanie ofert - inProgres
-   Rejestracja / Logowanie - inProgres
-   Aplikowanie na oferty - inProgres

## Uruchomienie

Zainstaluj [Docker Desktop](https://www.docker.com/get-started).

Pobierz kontener z aplikacją

```bash
docker pull mateuszscirka/it-jobs-api:latest
```

a następnie uruchom

```bash
docker run -p 4000:4000 -v it-jobs-api-db:/api/src/database mateuszscirka/it-jobs-api:latest
```

Serwer powinien zostać uruchomiony i dostępny pod adresem `http://localhost:4000`. Serwer mozna wyłączyć za pomocą CTRL+C

aby uruchomić aplikacje wpisz w katalogu projektu

```bash
npm start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
