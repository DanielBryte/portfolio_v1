import data from '/data/data.json'
import Image from 'next/image';
import Lazy from '/public/lazy.png'


const Design = () => {

    return (
        <span>
            {data.designs.map((item) => (

                < PortfolioCard
                    key={item}
                    title={item.title}
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
                                loading="lazy"
                                className='card-img'
                                src={image}
                                alt={title}
                                width="350"
                                height="228"
                                placeholder={Lazy}
                            />
                        )}
                    </span>
                </span>

                <span className="card-detail">
                    <span className="category">{category}</span>

                    <span className="card-description">
                        <span className="card-title">{title}</span>
                        <span className="card-links">
                            <a href={projectLink} target="_blank"> <button>View Project</button>
                            </a>
                        </span>
                    </span>
                </span>
            </span>
        </span>
    );
};

export default Design;
