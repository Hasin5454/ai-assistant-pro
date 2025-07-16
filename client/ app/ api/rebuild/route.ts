export async function POST(req: Request) {
  const { url, framework } = await req.json();
  
  // 1. সাইট স্ক্যানিং
  const scanner = new SiteScanner();
  const { html, css } = await scanner.scrape(url);
  
  // 2. কম্পোনেন্ট এক্সট্রাকশন
  const analyzer = new ComponentAnalyzer();
  const components = analyzer.detectComponents(html, css);
  
  // 3. কোড জেনারেশন
  const generator = new CodeGenerator({ framework });
  const { code, previewUrl } = generator.generate(components);
  
  return Response.json({
    success: true,
    code,
    previewUrl,
    components: components.length
  });
}
