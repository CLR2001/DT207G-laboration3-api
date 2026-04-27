# ◈ Laboration 3 API
Detta repository innehåller ett API för laboration 3 i kursen DT207G.

API:et hanterar olika jobberfarenheter för att skapa ett digitalt CV. CRUD (Create, Read, Update, Delete) funktionalitet är implementerat.

## ⬀ Länk till API
API:et finns tillgängligt på följande URL: [https://api.clr-server.com/employments2](https://api.clr-server.com/employments2)

## ✦ Databas och Scheman
Detta API använder NoSQL-databassystemet MongoDB.

### 1. Employments:
| Attribut | Data |
| :--- | :--- |
| company_name | type: String, required: true |
| job_title | type: String, required: true |
| location | type: String, required: true |
| start_date | type: Date, required: true |
| end_date | type: Date, default: null |
| description | type: String, default: 'Ingen beskrivning tillgänglig' |

## ⚙ Användning
| Metod | Ändpunkt | Beskrivning |
| :--- | :--- | :--- |
| GET | `/employments2` | Hämtar alla jobberfarenheter. |
| GET | `/employments2/:ID` | Hämtar en specifik jobberfarenhet med angivet ID. |
| POST | `/employments2` | Lagrar en ny jobberfarenhet i databasen. Ett objekt med jobb-data måste skicaks med i anropet. |
| PUT | `/employments2/:ID` | Uppdaterar en existerande jobberfarenhet i databasen. Ett objekt med jobb-data måste skicaks med i anropet. |
| DELETE | `/employments2/:ID` | Raderar en jobberfarenhet med angivet ID. |

Följande jobberfarenhets-objekt returneras vid lyckat get-anrop i JSON-format.
```bash
{
    "id": 1,
    "company_name": "Företagsnamn",
    "job_title": "Roll",
    "location": "Arbetets plats",
    "start_date": "2000-01-01",
    "end_date": null,
    "description": "Mina arbetsuppgifter var..."
  }
```


## ⬢ Utvecklare
**Ludvig Rosenqvist** — *Student*
🔗 [GitHub](https://github.com/CLR2001)
