"use client";

import { useParams } from "next/navigation";
import { useMemo, useState } from "react";

export default function InvitePage() {
    const params = useParams();
    const code = String(params.code ?? "").trim().toUpperCase();

    const [copied, setCopied] = useState(false);

    const deepLink = useMemo(() => {
        return `tradingapp://invite?code=${encodeURIComponent(code)}`;
    }, [code]);

    const inviteUrl = useMemo(() => {
        return `https://tradingapp.app/invite/${encodeURIComponent(code)}`;
    }, [code]);

    async function copyCode() {
        await navigator.clipboard.writeText(code);
        setCopied(true);

        setTimeout(() => setCopied(false), 1500);
    }

    function openApp() {
        window.location.href = deepLink;
    }

    return (
        <main
            style={{
                minHeight: "100vh",
                background: "#000",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 24,
                fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
        >
            <section
                style={{
                    width: "100%",
                    maxWidth: 440,
                    background: "#0b0b0b",
                    border: "1px solid #27272a",
                    borderRadius: 24,
                    padding: 24,
                }}
            >
                <p style={{ color: "#22c55e", fontWeight: 700, marginBottom: 8 }}>
                    Tradent Einladung
                </p>

                <h1 style={{ fontSize: 28, lineHeight: 1.15, marginBottom: 12 }}>
                    Du wurdest zu Tradent eingeladen
                </h1>

                <p style={{ color: "#a1a1aa", lineHeight: 1.5, marginBottom: 20 }}>
                    Dokumentiere deine Trades, analysiere deine Performance und tritt im
                    Leaderboard gegen andere Trader an.
                </p>

                <div
                    style={{
                        background: "#111",
                        border: "1px solid #27272a",
                        borderRadius: 16,
                        padding: 14,
                        marginBottom: 16,
                    }}
                >
                    <p style={{ color: "#a1a1aa", fontSize: 13, marginBottom: 6 }}>
                        Dein Einladungscode
                    </p>

                    <p
                        style={{
                            fontSize: 24,
                            letterSpacing: 2,
                            fontWeight: 800,
                            margin: 0,
                        }}
                    >
                        {code || "UNBEKANNT"}
                    </p>
                </div>

                <button
                    onClick={openApp}
                    style={{
                        width: "100%",
                        height: 48,
                        borderRadius: 14,
                        border: 0,
                        background: "#16a34a",
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: 16,
                        cursor: "pointer",
                        marginBottom: 10,
                    }}
                >
                    App öffnen
                </button>

                <button
                    onClick={copyCode}
                    style={{
                        width: "100%",
                        height: 46,
                        borderRadius: 14,
                        border: "1px solid #27272a",
                        background: "#111",
                        color: "#22c55e",
                        fontWeight: 700,
                        fontSize: 15,
                        cursor: "pointer",
                        marginBottom: 18,
                    }}
                >
                    {copied ? "Code kopiert" : "Code kopieren"}
                </button>

                <div style={{ display: "grid", gap: 10 }}>
                    <a
                        href="https://apps.apple.com/"
                        style={{
                            color: "#fff",
                            textAlign: "center",
                            textDecoration: "none",
                            background: "#18181b",
                            borderRadius: 14,
                            padding: "13px 16px",
                            fontWeight: 700,
                        }}
                    >
                        Im App Store laden
                    </a>

                    <a
                        href="https://play.google.com/store"
                        style={{
                            color: "#fff",
                            textAlign: "center",
                            textDecoration: "none",
                            background: "#18181b",
                            borderRadius: 14,
                            padding: "13px 16px",
                            fontWeight: 700,
                        }}
                    >
                        Bei Google Play laden
                    </a>
                </div>

                <p
                    style={{
                        color: "#71717a",
                        fontSize: 12,
                        lineHeight: 1.5,
                        marginTop: 18,
                        marginBottom: 0,
                    }}
                >
                    Falls die App noch nicht installiert ist, lade sie zuerst herunter.
                    Der Einladungscode kann anschließend beim Erstellen des Accounts
                    übernommen werden.
                </p>
            </section>
        </main>
    );
}