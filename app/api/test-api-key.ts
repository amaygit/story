import { NextRequest, NextResponse } from "next/server";
import g from "@/lib/gptScriptInstance";

export async function GET(request: NextRequest) {
    try {
        const response = await g.run('echo Hello World'); // Simple command to test API key
        const text = await response.text();
        console.log("API Key Test Success:", text);
        return new NextResponse(text, { status: 200 });
    } catch (error) {
        console.error("API Key Test Failed:", error);
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
