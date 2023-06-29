import Social from "/components/Socials";
import "/styles/globals.css";
import Nav from "components/Nav";

export const metadata = {
  title: "Ezediniru Daniel",
  description: "Ezediniru Daniel || @amdanielbrytre",
}

const RootLayout = ({children}) => {


  return (
    <html lang="en">
      <body style={{
        backgroundImage: 'url("/background.svg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
       <Nav/>
        <Social />
        {children}
      </body>
    </html >
  )
    }

export default RootLayout
