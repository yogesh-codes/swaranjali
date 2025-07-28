const ALLOWED_MSG_TYPES = ["success", "error", "info", "warning"] as const;
type MsgType = (typeof ALLOWED_MSG_TYPES)[number];

export type FlashType = { msg: string; msgType: MsgType };

// 1) our user-defined type guard
function isFlash(obj: unknown): obj is FlashType {
    if (typeof obj === "object" && obj !== null) {
        const rec = obj as Record<string, unknown>;

        if (typeof rec.msg !== "string") return false;
        if (typeof rec.msgType !== "string") return false;
        if (ALLOWED_MSG_TYPES.includes(rec.msgType as MsgType)) return false;
        //Note: using 'as' will only silence typescript and, only use when abs

        return true;
    }
    return false;
}

export function parseFlash(raw: string | undefined): FlashType | null {
    //If no raw message to begin with, directly return null
    if (!raw) return null;
    //Otherwise, try to parse
    try {
        const parsed: unknown = JSON.parse(raw); // JSON.parse → unknown
        if (isFlash(parsed)) return parsed; // now TS knows parsed is Flash
        console.warn("Parsed JSON but not a Flash:", parsed);
        return null;
    } catch (e) {
        console.error("Invalid JSON:", e);
        return null;
    }
}
