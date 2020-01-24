<div className="container mx-auto">

# Hurtigveileder

Et eksperiement som gikk over 2 uker for å samle innsikt på hvor hvor tidlig brukerne er på vår sider i forhold til siste arbeidsdag.

## Hypotese

Gi bruker konkrete oppgaver i tidligfase

### Hvis vi
- gjør en kortvarig test der vi er konkret på hva bruker gjøre i denne fasen, som at de kan forberede seg på å søke dagpenger og begynne å se etter nye jobber
- hvis vi spør brukerne hva de ønsker veiledning om

### Så vil vi se
- hvor tidlig brukerne oppsøker NAV når de har mistet jobben
- om det er et behov for at NAV gjør noe i denne fasen
- hvilke informasjon av det vi legger ut som brukerne er mest interessert i
- hva brukerne er interessert i å vite mer om

### Og dette kan vi vite ved å måle
- sjekke endring i smilefjesstatistikken
- måle klikk på de ulike lenkene/oppgavene
- sammenlikne våre data med NKS sitt inntrykk av når folk tar kontakt i forbindelse med at de blir arbeidsledige
- telle hvor mange dager det er i forkant (kan sammenlikne med tall vi har på tidligere datovelger i veiviser)
- hvor mange av de som ser inngangen til hurtigveilederen prøver den?
- å legge inn hotjar eller liknende der vi spør brukerne om hva de ønsker veiledning om

## Gjennomføring

![Bilde av "Veiledning" knappen](/images/muligheter/hurtigveileder/inngang-til-hurtigveileder.png)

Vi la inn en knapp på toppen av "Mistet jobben" siden til veiledearbeeidssøker.
Knappen hadde teksten "Veiledning". De som trykket på denne kom til hurtigveilederen som stilte et par spørsmål og så viste en anbefaling av hva du kunne gjøre fremover.

Spørsmålene var:
- Har du opprettet CV og jobbprofil på arbeidsplassen.no
- Når er siste dagen du får lønn for

![Bilde av et mulig resultat](/images/muligheter/hurtigveileder/mulig-resultat-av-veileder.png)

Dersom brukeren var tidlig ute ble det ikke vist knapper for søknad om dagpenger og registrering som arbeidssøker.

Dersom personen hadde opprettet bruker på arbeidsplassen viste vi ikke det som et forslag.

## Statistikk

Vi logget besøk, svar på arbeidsplassen registrering og antall dager i forkant (eller etterkant) i Amplitude. Vi laget samlegrupper på tidlig, passe og sent ettersom hvordan de var i forhold til "idealsøketidspunkt".

- 8 prosent av de som kom på siden gikk til hurtigveilederen

### Foredeling tidlig, sent og passe

- 46 prosent sent
- 48 prosent tidlig
- 6 prosent passe

![Tidlig, sent og passe](/images/muligheter/hurtigveileder/besok-og-fordeling.png)
 
### Hva gjør tidlig brukerne?
- Dagpengekalkulatoren, 59 % går inn der
- Ingen forsøker å registrere seg, for de får ikke opp knappen
- 40% ikke registrert på arbeidsplassen men bare 9% av disse klikker på lenken til arbeidsplassen
- Mer veiledning: 20 %
- Dagpengeinfo: 25 % (litt lite, men kanskje fordi de får informasjon de trenger på kalkisen
 
### Hva gjør seint brukerne? (siste dag med lønn i går eller seinere)
- 32% som går til kalkisen
- 24% går til registrering
- 6% går til dagpengesøknad
- 15% ønsker mer veiledning
- 38 % som ikke er registert med CV hos arbeidsplassen og 8% klikker på linken dit

### Hva gjør passe brukerne? (en uke)
- 36% går til kalkisen
- 27% til registrering
- 9 % til dagpengesøknaden
- 45 % som ikke er registrert på arbeidsplassen og *ingen* av de går til arbeidsplassen

## Innsikt

- Det er overraskende få som går videre til arbeidsplassen 

## Veien videre

På sikt vil det være interessant å legge opp til mer datainnsamling og mer personalisering av veilederen. Begger deler vil være veldig enkelt å sette opp rent teknisk.

</div>