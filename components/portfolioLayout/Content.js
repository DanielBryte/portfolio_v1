import Image from "next/image";
import data from'/data/data.json'


const Content = () => {
  return (
    <span>
        {data.content.map((item) => (

            < PortfolioCard
                title = { item.title }
                category = { item.category}
                image = { item.image }
                projectLink = { item.projectLink }
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
                            loading="lazy"
                            src={image}
                            alt={title}
                            width="350"
                            height="228"
                        />
                    )}
                </span>
            </span>

            <span className="card-detail">
                <span className="category">{category}</span>

                <span className="card-description">
                    <span className="card-title">{title}</span>
                    <span className="card-links">
                        <a href={projectLink} target="_blank"> <button>View Content</button>
                        </a>
                    </span>
                </span>
            </span>
        </span>
    </span>
);
}

export default Content