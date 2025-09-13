import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const payload = new URLSearchParams(
      Object.fromEntries(
        Object.entries(body).map(([k, v]) => [k, String(v)])
      )
    );

    const whmcsRes = await fetch("https://my.hostnin.com/includes/api.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
    });

    const contentType = whmcsRes.headers.get("content-type");
    let data;
    if (contentType?.includes("application/json")) {
      data = await whmcsRes.json();
    } else {
      data = { error: "WHMCS did not return JSON", body: await whmcsRes.text() };
    }

    return NextResponse.json(data, { status: whmcsRes.ok ? 200 : 400 });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", details: (err as Error).message },
      { status: 500 }
    );
  }
}
