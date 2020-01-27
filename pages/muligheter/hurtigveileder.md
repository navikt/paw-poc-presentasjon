<div className="container mx-auto mt-2 mb-4 p-4">

# Hurtigveileder

Et eksperiement som gikk over 2 uker for å samle innsikt på hvor hvor tidlig brukerne er på vår sider i forhold til siste arbeidsdag.

- [Se demo](https://hurtigveileder.nav.party)
- [Dashboard i Amplitude](https://analytics.amplitude.com/nav/dashboard/h3llh79) (krever tilgang)

## Teknisk

- Satt opp som egen app
- Next.js, tailwind.css, nginx på naiserator
- Inngang fra Veiviser 1 toggles fra unleash

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

Vi la inn en knapp på toppen av "Mistet jobben" siden til veiledearbeidssøker.
Knappen hadde teksten "Få veiledning". De som trykket på denne kom til hurtigveilederen som stilte et par spørsmål og så viste en anbefaling av hva du kunne gjøre fremover.

Spørsmålene var:
- Har du opprettet CV og jobbprofil på arbeidsplassen.no
- Når er siste dagen du får lønn for

![Bilde av et mulig resultat](/images/muligheter/hurtigveileder/mulig-resultat-av-veileder.png)

- Dersom brukeren var tidlig ute ble det ikke vist knapper for søknad om dagpenger og registrering som arbeidssøker.
- Dersom personen hadde opprettet bruker på arbeidsplassen viste vi ikke det som et forslag.

Vi logget besøk, svar på arbeidsplassen registrering og antall dager i forkant (eller etterkant) i Amplitude. Vi laget samlegrupper på tidlig, passe og sent ettersom hvordan de var i forhold til "idealsøketidspunkt". Det vil si at dersom du var 7 dager eller mer før siste dag med lønn ble du kategorisert som tidlig og dersom det var dagen etter siste dag med lønn eller senere ble du kategorisert som sent.

I perioden vi hadde eksperimentet var litt over 750 personer innom siden.

## Statistikk

- 8 % av de som kom på siden gikk til hurtigveilederen

### Fordeling tidlig, sent og passe

- 46 % sent
- 48 % tidlig
- 6 % passe

![Tidlig, sent og passe](/images/muligheter/hurtigveileder/besok-og-fordeling.png)
 
### Hva gjør tidlig brukerne?

Hvilke linker og knapper trykker brukerne i kategorien "tidlig" på?
Brukerne kan gjøre flere valg og vi har ikke logget kombinasjonene.
Prosentene er i forhold til totalen i gruppen.

- 59 % går til dagpengekalkulatoren
- 40 % ikke registrert på arbeidsplassen men bare 9% av disse klikker på lenken til arbeidsplassen
- 20 % går til "Mer veiledning"
- 25 % går til mer dagpengeinfo
 
### Hva gjør seint brukerne? (siste dag med lønn i går eller seinere)

Hvilke linker og knapper trykker brukerne i kategorien "sent" på?
Brukerne kan gjøre flere valg og vi har ikke logget kombinasjonene.
Prosentene er i forhold til totalen i gruppen.

- 32 % som går til dagpengekalkulatoren
- 38 % som ikke er registert med CV hos arbeidsplassen og 8% klikker på linken dit
- 24 % går til registrering
- 6 % går til dagpengesøknad
- 15 % ønsker mer veiledning

### Hva gjør passe brukerne? (en uke)

Hvilke linker og knapper trykker brukerne i kategorien "passe" på?
Brukerne kan gjøre flere valg og vi har ikke logget kombinasjonene.
Prosentene er i forhold til totalen i gruppen.

- 36 % går til dagpengekalkulatoren
- 45 % som ikke er registrert på arbeidsplassen og *ingen* av de går til arbeidsplassen
- 27 % til registrering
- 9 % til dagpengesøknaden
- *ingen* går til mer veiledning

### Hva synes brukerne?

Veldig få trykket på tilbakemeldingspanelet som bare var en rekke smileys plassert over boksen "Mer veiledning"

Av de som ga tilbakemelding var det 50 % som "elsket" tjenesten og 18 % som "hatet" den.

63 % av de som "elsket" tjenesten er kategorisert som "tidlig" og det er disse brukerne tjenesten først og fremst var laget for.

75 % av de som "hatet" den er i kategorien "sent" og det gir også mening. Disse brukerne antar vi ønsker grundigere veiledning enn de som oppsøker oss på forhånd.

![Rekke med smileys](/images/muligheter/hurtigveileder/smileys.png)

## Innsikt

- Det er overraskende få som går videre til arbeidsplassen
- Nesten halvparten av de som besøker oss er i kategorien "tidlig"
- Veldig få gir tilbakemelding

![Tidlig, sent og passe](/images/muligheter/hurtigveileder/arbeidsplassen.png)

## Veien videre

Det er interessant å legge opp til mer datainnsamling (anonym) og mer personalisering av veilederen ettersom hva du selv oppgir du har behov for.

Begge deler vil være veldig enkelt å sette opp rent teknisk om de skulle bli prioritert.

### Mulige gevinster

- Bruker: får mer relevant informasjon
- Bruker: søker til rett tid med rett innhold
- NAV: får færre henvendelser fordi bruker finner det hen har behov for
- NAV: får færre søknader på feil tidspunkt
- NAV: får færre klager å behandle som følge av at de søker på rett tid
- NAV: utbetaler mindre dagpenger fordi bruker kommer fortere ut i ny jobb 

</div>