export function GET({}) {
    return new Response(
        JSON.stringify({
            url: "https://quazar.icu",
            name: "Quazar",
            iconUrl: "https://quazar.icu/satellite.png",
            termsOfUseUrl: "https://docs.quazar.icu/rules/terms-of-use",
            privacyPolicyUrl: ""
        }),
    );
}