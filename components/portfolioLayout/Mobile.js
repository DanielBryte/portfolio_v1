import data from '/data/data.json'
import Image from 'next/image';
import GithubIcon from '/public/portfolio/github.svg';


const Mobile = () => {

    return (
        <span>
            {data.mobile.map((item) => (

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
}) => {
    return (
        <span className="portfolio-flex">
            <span className="portfolio-card">
                <span className="card-img-link">
                    <span className="portfolio-img">
                        {image && (
                            <Image
                                loading="lazy"
                                className='card-img'
                                src={image}
                                alt={title}
                                width="350"
                                height="228"
                                placeholder='blur'
                                blurDataURL={"/lazy.png"}                          />
                        )}
                    </span>
                </span>

                <span className="card-detail">
                    <span className="category">{category}</span>

                    <span className="card-description">
                        <span className="card-title">{title}</span>
                        <span className="card-links">
                            <a href={github} target="_blank" className="github"><Image src={GithubIcon} alt={github} height={25} width={26.61} /></a>
                        </span>
                    </span>
                </span>
            </span>
        </span>
    );
};

export default Mobile;
