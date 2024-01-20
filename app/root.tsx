import { Links, Meta, Outlet, Scripts } from '@remix-run/react'

const Root = () => {
  return (
    <html lang={'ja'}>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />

        <Scripts />
      </body>
    </html>
  )
}

export default Root
