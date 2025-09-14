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
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      address1: body.address1,
      city: body.city,
      state: body.state,
      postcode: body.postcode,
      country: body.country,
      phonenumber: body.phonenumber,
      password2: body.password, 
    });

    const whmcsRes = await fetch(WHMCS_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
    });

    const data = await whmcsRes.json();
    return NextResponse.json(data, { status: whmcsRes.ok ? 200 : 400 });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
