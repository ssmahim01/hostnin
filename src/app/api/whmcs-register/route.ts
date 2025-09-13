import { NextRequest, NextResponse } from "next/server";

const WHMCS_API_URL = "https://my.hostnin.com/includes/api.php";
const WHMCS_IDENTIFIER = "j2OsM3t8m0h6MrsmTiCZ6FPkrcR4sRaB";
const WHMCS_SECRET = "by6T9nfLz4lkImHY7HGUJtzugYznJJVX";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const payload = new URLSearchParams({
      action: "AddClient",
      responsetype: "json",
      identifier: WHMCS_IDENTIFIER,
      secret: WHMCS_SECRET,
      ...Object.fromEntries(
        Object.entries(body).map(([k, v]) => [k, String(v)])
      ),
    });

    const whmcsRes = await fetch(WHMCS_API_URL, {
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
