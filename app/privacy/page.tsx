export default function PrivacyPage() {
    return (
        <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 20px", lineHeight: 1.7 }}>
            <h1>Datenschutzerklärung</h1>

            <p><strong>Stand:</strong> 09. Juni 2026</p>

            <h2>1. Verantwortlicher</h2>
            <p>
                Verantwortlich für die Verarbeitung personenbezogener Daten im Zusammenhang mit der App
                <strong> Tradent</strong> ist:
            </p>
            <p>
                Andreas Kammerhofer<br />
                Österreich<br />
                E-Mail: <a href="mailto:a.kammerhofer@tradent-app.com">a.kammerhofer@tradent-app.com</a>
            </p>

            <h2>2. Zweck der App</h2>
            <p>
                Tradent ist eine Trading-Analyse- und Community-App. Nutzer können eigene bzw. simulierte
                Trading-Ideen hochladen, Wahrscheinlichkeiten abrufen, Leaderboards nutzen und andere Nutzer
                einladen. Tradent ermöglicht keinen echten Handel, verwaltet kein Kundengeld und ist keine
                Broker- oder Investment-App.
            </p>

            <h2>3. Verarbeitete Daten</h2>
            <p>Im Rahmen der Nutzung von Tradent können folgende Daten verarbeitet werden:</p>
            <ul>
                <li>E-Mail-Adresse</li>
                <li>Benutzer-ID</li>
                <li>Authentifizierungsdaten, einschließlich Passwortverwaltung über Clerk</li>
                <li>Leaderboard-Anzeigename</li>
                <li>hochgeladene Trade-Daten wie Asset, Long/Short, Hebel, Take-Profit und Stop-Loss</li>
                <li>Referral-Daten, falls Nutzer andere Personen einladen</li>
                <li>Abo- und Entitlement-Status</li>
                <li>technische Daten zur Fehleranalyse und Sicherheit</li>
            </ul>

            <h2>4. Zwecke der Datenverarbeitung</h2>
            <p>Die Daten werden verarbeitet, um:</p>
            <ul>
                <li>Benutzerkonten zu erstellen und zu verwalten</li>
                <li>den Zugriff auf kostenpflichtige Funktionen zu prüfen</li>
                <li>Trade-Uploads, Wahrscheinlichkeitsabfragen und Leaderboards bereitzustellen</li>
                <li>Referral-Funktionen zu ermöglichen</li>
                <li>die Sicherheit und Stabilität der App zu gewährleisten</li>
                <li>gesetzliche Pflichten zu erfüllen</li>
            </ul>

            <h2>5. Rechtsgrundlagen</h2>
            <p>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit sie für die
                Bereitstellung der App erforderlich ist. Soweit gesetzliche Pflichten bestehen, erfolgt die
                Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Sicherheits- und
                Fehleranalyseprozesse können auf Grundlage berechtigter Interessen gemäß Art. 6 Abs. 1 lit. f
                DSGVO erfolgen.
            </p>

            <h2>6. Eingesetzte Dienstleister</h2>
            <p>Für den Betrieb von Tradent werden insbesondere folgende Dienstleister eingesetzt:</p>
            <ul>
                <li><strong>Clerk</strong> für Registrierung, Anmeldung und Authentifizierung</li>
                <li><strong>Supabase</strong> für Datenbank, Backend-Funktionen und Speicherung von App-Daten</li>
                <li><strong>Vercel</strong> für das Hosting der Website</li>
                <li><strong>Apple App Store</strong> und <strong>Google Play</strong> für App-Downloads und In-App-Abonnements</li>
                <li><strong>RevenueCat</strong> zur Verwaltung und Prüfung von Abonnements, sobald diese Funktion aktiv eingebunden ist</li>
            </ul>

            <h2>7. Abonnements und Zahlungen</h2>
            <p>
                Kostenpflichtige Abonnements werden über Apple In-App Purchase oder Google Play Billing
                abgewickelt. Zahlungsdaten werden grundsätzlich durch Apple bzw. Google verarbeitet. Tradent
                erhält nur Informationen, die erforderlich sind, um den Abo-Status zu prüfen und Funktionen
                freizuschalten.
            </p>

            <h2>8. Leaderboards und Rewards</h2>
            <p>
                In Tradent können Nutzer in Leaderboards erscheinen. Dabei kann der vom Nutzer gewählte
                Leaderboard-Anzeigename öffentlich innerhalb der App angezeigt werden. Wenn ein Reward-System
                genutzt wird, können Daten zur Platzierung, Berechtigung und Auszahlung verarbeitet werden.
            </p>

            <h2>9. Referral-System</h2>
            <p>
                Wenn Nutzer andere Personen einladen, können Referral-Codes und Zuordnungen zwischen
                einladendem und eingeladenem Nutzer verarbeitet werden. Dies dient der Bereitstellung des
                Freunde-einladen-Systems und möglicher Bonusfunktionen.
            </p>

            <h2>10. Keine Analyse- oder Werbetrackingdienste</h2>
            <p>
                Derzeit verwendet Tradent keine Google Analytics, Vercel Analytics, PostHog oder vergleichbare
                Werbe- oder Trackingdienste.
            </p>

            <h2>11. Speicherdauer</h2>
            <p>
                Personenbezogene Daten werden nur so lange gespeichert, wie dies für die Bereitstellung der App,
                die Erfüllung gesetzlicher Pflichten, die Abwicklung von Abonnements, Sicherheitszwecke oder
                berechtigte Nachweise erforderlich ist.
            </p>

            <h2>12. Betroffenenrechte</h2>
            <p>
                Nutzer haben nach Maßgabe der DSGVO insbesondere das Recht auf Auskunft, Berichtigung,
                Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Anfragen können
                an <a href="mailto:a.kammerhofer@tradent-app.com">a.kammerhofer@tradent-app.com</a> gerichtet werden.
            </p>

            <h2>13. Beschwerderecht</h2>
            <p>
                Nutzer haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. In Österreich
                ist dies die Österreichische Datenschutzbehörde.
            </p>

            <h2>14. Änderungen dieser Datenschutzerklärung</h2>
            <p>
                Diese Datenschutzerklärung kann angepasst werden, wenn sich Funktionen, Dienstleister oder
                rechtliche Anforderungen ändern.
            </p>
        </main>
    );
}
