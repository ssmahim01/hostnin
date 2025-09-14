import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { domain } = await req.json();
    if (!domain) {
      return NextResponse.json(
        { status: "error", message: "No domain provided" },
        { status: 400 }
      );
    }

    // Call WHMCS API
    const params = new URLSearchParams({
      action: "DomainWhois",
      domain,
      responsetype: "json",
    });

    const response = await fetch("https://my.hostnin.com/includes/api.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await response.json();

    // Determine availability
    const available = data?.status === "available";

    const results_html = available
      ? `<div class="result-wrapper alert-success mb-3"><i class="far fa-check-circle"></i>Congratulation <b>${domain}</b> is available!<span class="reasult-info"><a href="https://my.hostnin.com/cart.php?a=add&domain=register&query=${domain}" class="hostim-btn" target="_blank"><input type="button" class="wdes-purchase-btn template-btn primary-btn btn-small flex-shrink-0 border-0" value="Purchase"></a></span></div>`
      : `<div class="result-wrapper alert-danger mb-3"><i class="far fa-times-circle"></i>Sorry <b>${domain}</b> is unavailable.</div>`;

    return NextResponse.json({
      status: available ? "available" : "unavailable",
      domain,
      results_html,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      status: "unavailable",
      domain: null,
      results_html: `<div class="result-wrapper alert-danger mb-3"><i class="far fa-times-circle"></i>Error checking domain.</div>`,
    });
  }
}
