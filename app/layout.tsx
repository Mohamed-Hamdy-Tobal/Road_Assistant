export const metadata = {
  title: "Road Assistant",
  description: "Bubble introduces a new way to build a web application. It’s a no-code point-and-click programming tool. Bubble hosts all applications on its cloud platform.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon.png',
        href: '/icon.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon.png',
        href: '/icon.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}