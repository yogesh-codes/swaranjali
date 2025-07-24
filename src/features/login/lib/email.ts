export interface EmailOptions {
    to: string;
    subject: string;
    html?: string;
    text?: string;
}

export async function sendEmail({ to, subject, html, text }: EmailOptions) {
    try {
        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                accept: "application/json",
                "api-key": process.env.BREVO_API_KEY!,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                sender: {
                    name: process.env.BREVO_FROM_NAME,
                    email: process.env.BREVO_FROM_EMAIL,
                },
                to: [{ email: to }],
                subject,
                htmlContent: html || `<p>${text}</p>`,
                textContent: text,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
                `Brevo API error: ${errorData.message || response.statusText}`
            );
        }

        const result = await response.json();
        console.log("Email sent via Brevo API:", result.messageId);

        return { success: true, messageId: result.messageId };
    } catch (error) {
        console.error("Email send error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
}
