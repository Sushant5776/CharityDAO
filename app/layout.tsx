import '@/app/globals.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<title>Charity DAO - Helping is Caring</title>
				<meta
					name='description'
					content='CharityDAO is a complete transparent and secure solution for charity and to fund. That too, being decentralized and trustless!'
				/>
				<link rel='icon' href='/favicon.ico' />
			</head>
			<body>{children}</body>
		</html>
	)
}
