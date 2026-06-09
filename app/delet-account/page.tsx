export default function DeleteAccountPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 20px", lineHeight: 1.7 }}>
      <h1>Konto und Daten löschen</h1>

      <p><strong>Stand:</strong> 09. Juni 2026</p>

      <p>
        Nutzer von Tradent können die Löschung ihres Kontos und ihrer personenbezogenen Daten
        beantragen.
      </p>

      <h2>Löschung direkt in der App</h2>
      <p>
        In der App kann die Kontolöschung über folgenden Pfad gestartet werden:
      </p>

      <p>
        <strong>Einstellungen → Alle meine Daten löschen</strong>
      </p>

      <p>
        In der aktuellen Testversion kann diese Funktion vorübergehend deaktiviert sein.
        In diesem Fall kann die Löschung per E-Mail beantragt werden.
      </p>

      <h2>Löschung per E-Mail beantragen</h2>
      <p>
        Sende eine E-Mail an:
        {" "}
        <a href="mailto:a.kammerhofer@tradent-app.com">
          a.kammerhofer@tradent-app.com
        </a>
      </p>

      <p>
        Bitte verwende dabei die E-Mail-Adresse, mit der du dein Tradent-Konto erstellt hast,
        damit wir dein Konto zuordnen können.
      </p>

      <h2>Welche Daten werden gelöscht?</h2>
      <p>
        Bei einer Kontolöschung werden personenbezogene Kontodaten gelöscht oder anonymisiert,
        insbesondere:
      </p>

      <ul>
        <li>Benutzerkonto</li>
        <li>E-Mail-Adresse</li>
        <li>Benutzer-ID</li>
        <li>Leaderboard-Anzeigename</li>
        <li>Referral-Zuordnungen, soweit sie deinem Konto zugeordnet sind</li>
        <li>Abo- und Entitlement-Daten, soweit sie in Tradent gespeichert sind</li>
      </ul>

      <h2>Hochgeladene Trade-Daten</h2>
      <p>
        Bereits hochgeladene Trade-Daten können aus Gründen der Datenintegrität,
        Missbrauchsprävention, statistischen Auswertung und Leaderboard-Nachvollziehbarkeit
        weiterhin gespeichert bleiben. Soweit möglich, werden diese Daten von deinem
        personenbezogenen Konto getrennt oder anonymisiert.
      </p>

      <h2>Aufbewahrungsfristen</h2>
      <p>
        Löschanfragen werden grundsätzlich innerhalb von 30 Tagen bearbeitet. Bestimmte Daten
        können länger gespeichert werden, wenn gesetzliche Aufbewahrungspflichten bestehen oder
        dies zur Abwehr von Missbrauch, Betrug oder zur Durchsetzung berechtigter Ansprüche
        erforderlich ist.
      </p>

      <h2>Kontakt</h2>
      <p>
        Bei Fragen zur Kontolöschung oder zum Datenschutz:
        <br />
        <a href="mailto:a.kammerhofer@tradent-app.com">
          a.kammerhofer@tradent-app.com
        </a>
      </p>
    </main>
  );
}