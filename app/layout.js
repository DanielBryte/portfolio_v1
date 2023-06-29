import Social from "/components/Socials";
import "/styles/globals.css";
import Nav from "components/Nav";

export const metadata = {
  title: "Ezediniru Daniel",
  description: "Ezediniru Daniel || @amdanielbryte",
  openGraph: {
    title: 'Ezediniru Daniel',
    keywords: ['Frontend Engineer', 'Frontend Developer', 'Web Developer', 'Mobile App Developer', 'Content Creator','Product Designer', 'UI/UX Designer'],
    description: 'Frontend engineer and product Designer with 3 years of building experience',
    url: 'https://www.ezediniru.com',
    siteName: 'Daniel Bryte Portfolio',
    images: {
      url: 'https://res.cloudinary.com/dhq4zyjbq/image/upload/v1688046890/portfolio_assets/ezediniru-daniel_ox0xmi.png',
      alt: 'Ezediniru Daniel Website',
    },      locale: 'en_UK',
    type: 'website',
  },



  twitter: {
    card: 'summary_large_image',
    title: 'Ezediniru Daniel',
    description: 'Frontend engineer and product Designer with 3 years of building experience',
    images: {
      url: 'https://res.cloudinary.com/dhq4zyjbq/image/upload/v1688046890/portfolio_assets/ezediniru-daniel_ox0xmi.png',
      alt: 'Ezediniru Daniel Website',
    },  
  },
}

const RootLayout = ({ children }) => {


  return (
    <html lang="en">
      <body style={{
        backgroundImage: 'url("/background.svg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <Nav />
        <Social />
        {children}
      </body>
    </html >
  )
}

export default RootLayout
