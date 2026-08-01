export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
  external?: boolean;
}

export const navigationData: NavItem[] = [
  {
    label: "Trading",
    children: [
      {
        label: "Accounts",
        children: [
          { label: "Standard Accounts", href: "/standard-accounts" },
          { label: "Professional Accounts", href: "/pro-accounts" },
          { label: "Demo Trading Account", href: "/demo-trading-account" },
        ],
      },
      {
        label: "Conditions",
        children: [
          { label: "Deposits & Withdrawals", href: "/deposits-and-withdrawals" },
          { label: "Fees", href: "/fees" },
          { label: "Client Protection", href: "/client-protection" },
          { label: "Order Execution", href: "/order-execution" },
        ],
      },
    ],
  },
  {
    label: "Markets",
    children: [
      { label: "Forex CFD", href: "/forex" },
      { label: "Commodities CFD", href: "/commodities" },
      { label: "Stocks CFD", href: "/stocks" },
      { label: "Indices CFD", href: "/indices" },
      { label: "Crypto CFD", href: "/crypto" },
    ],
  },
  {
    label: "Platforms",
    children: [
      {
        label: "Desktop",
        children: [
          { label: "MetaTrader 5", href: "/metatrader-5" },
          { label: "MetaTrader 4", href: "/metatrader-4" },
        ],
      },
      {
        label: "Mobile",
        children: [
          { label: "cextradevip Trade App", href: "/cextradevip-trade-app" },
          { label: "MetaTrader 5 Mobile", href: "/metatrader-5-app" },
          { label: "MetaTrader 4 Mobile", href: "/metatrader-4-app" },
        ],
      },
      {
        label: "Web",
        children: [
          { label: "cextradevip Terminal", href: "/cextradevip-terminal" },
          { label: "MetaTrader WebTerminal", href: "/metatrader-webterminal" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Analytical Tools", href: "/analytical-tools" },
      { label: "Economic Calendar", href: "/calendar" },
      { label: "Trading Calculator", href: "/calculator" },
      { label: "Currency Converter", href: "/currency-converter" },
      { label: "Tick History", href: "/tick-history" },
      { label: "VPS Hosting", href: "/vps" },
      { label: "Born to Trade Podcast", href: "/podcasts" },
    ],
  },
  {
    label: "Company",
    children: [
      {
        label: "About",
        children: [
          { label: "About Us", href: "/about-us" },
          { label: "Why cextradevip", href: "/why-cextradevip" },
          { label: "cextradevip Reviews", href: "/cextradevip-reviews" },
          { label: "Contact Us", href: "/contact" },
          { label: "cextradevip in the Media", href: "/cextradevip-in-the-media" },
          { label: "cextradevip in the Community", href: "/social-responsibility" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        label: "Corporate",
        children: [
          { label: "Regulation", href: "/regulation" },
          { label: "Legal Documents", href: "/legal-documents" },
          { label: "Compensation Fund", href: "/compensation-fund" },
        ],
      },
    ],
  },
  {
    label: "Partners",
    href: "#partners",
    external: true,
  },
];

export const footerLinks = {
  trading: [
    { label: "Standard Accounts", href: "/standard-accounts" },
    { label: "Professional Accounts", href: "/pro-accounts" },
    { label: "Demo Trading Account", href: "/demo-trading-account" },
    { label: "Deposits & Withdrawals", href: "/deposits-and-withdrawals" },
    { label: "Fees", href: "/fees" },
    { label: "Client Protection", href: "/client-protection" },
    { label: "Order Execution", href: "/order-execution" },
  ],
  markets: [
    { label: "Forex CFD", href: "/forex" },
    { label: "Commodities CFD", href: "/commodities" },
    { label: "Stocks CFD", href: "/stocks" },
    { label: "Indices CFD", href: "/indices" },
    { label: "Crypto CFD", href: "/crypto" },
  ],
  platforms: [
    { label: "MetaTrader 5", href: "/metatrader-5" },
    { label: "MetaTrader 4", href: "/metatrader-4" },
    { label: "cextradevip Trade App", href: "/cextradevip-trade-app" },
    { label: "cextradevip Terminal", href: "/cextradevip-terminal" },
    { label: "MetaTrader WebTerminal", href: "/metatrader-webterminal" },
  ],
  resources: [
    { label: "Analytical Tools", href: "/analytical-tools" },
    { label: "Economic Calendar", href: "/calendar" },
    { label: "Trading Calculator", href: "/calculator" },
    { label: "Currency Converter", href: "/currency-converter" },
    { label: "Tick History", href: "/tick-history" },
    { label: "VPS Hosting", href: "/vps" },
    { label: "Born to Trade Podcast", href: "/podcasts" },
  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Why cextradevip", href: "/why-cextradevip" },
    { label: "cextradevip Reviews", href: "/cextradevip-reviews" },
    { label: "Contact Us", href: "/contact" },
    { label: "cextradevip in the Media", href: "/cextradevip-in-the-media" },
    { label: "cextradevip in the Community", href: "/social-responsibility" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Regulation", href: "/regulation" },
    { label: "Legal Documents", href: "/legal-documents" },
    { label: "Compensation Fund", href: "/compensation-fund" },
  ],
};

export const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "Arabic" },
  { code: "bn", label: "Bengali" },
  { code: "zh", label: "Chinese" },
  { code: "fr", label: "French" },
  { code: "id", label: "Indonesian" },
  { code: "pt", label: "Portuguese" },
  { code: "es", label: "Spanish" },
  { code: "th", label: "Thai" },
  { code: "ur", label: "Urdu" },
  { code: "uz", label: "Uzbek" },
  { code: "vi", label: "Vietnamese" },
];
