import data from '/data/data.json'
import Image from 'next/image';
import GithubIcon from '/public/portfolio/github.svg';



const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
    

const Web = () => {

    return (
        <span>
            {data.webs.map((item) => (

                < PortfolioCard
                    key={item}
                    title={item.title}
                    github={item.github}
                    category={item.category}
                    image={item.image}
                    projectLink={item.projectLink}
                />
            ))}
        </span>
    );
};

const PortfolioCard = ({
    title,
    category,
    github,
    image,
    projectLink,
}) => {
    return (
        <span className="portfolio-flex">
            <span className="portfolio-card">
                <span className="card-img-link">
                    <span className="portfolio-img">
                        {image && (
                            <Image
                                className='card-img'
                                loading="lazy"
                                src={image}
                                alt={title}
                                width="350"
                                height="228"
                                placeholder='blur'
                                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(350, 228))}`}

                            />
                        )}
                    </span>
                </span>

                <span className="card-detail">
                    <span className="category">{category}</span>

                    <span className="card-description">
                        <span className="card-title">{title}</span>
                        <span className="card-links">
                            <a href={github} target="_blank" className="github"><Image src={GithubIcon} alt={github} height={25} width={26.61} /></a>
                            <a href={projectLink} target="_blank"> <button>View Project</button>
                            </a>
                        </span>
                    </span>
                </span>
            </span>
        </span>
    );
};

export default Web;
