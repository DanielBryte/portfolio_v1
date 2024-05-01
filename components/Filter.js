
import { useState } from 'react';
import Webcards from '/components/portfolioLayout/Web';
import DesignCards from '/components/portfolioLayout/Design';
import Contentcards from '/components/portfolioLayout/Content';
// import AIcards from './portfolioLayout/AI';
import Mobilecards from '/components/portfolioLayout/Mobile';



const Portfolio = () => {


    const [selectedCategory, setSelectedCategory] = useState('all');
    const portfolioItems = [
        { title: <Webcards />, category: 'web' },
        { title: <DesignCards />, category: 'design' },
        // { title: <Mobilecards />, category: 'mobile' },
        // { title: <AIcards />, category: 'ML/AI' },
        { title: <Contentcards />, category: 'content' }
    ];

    const handleCategoryClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredItems = portfolioItems.filter((item) => {
        const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
        return categoryMatch;
    });



    // const alllanguageTools = portfolioItems.reduce((acc, item) => {
    //     return acc.concat(item.languageTools);
    // }, []);

    // const uniquelanguageTools = [...new Set(alllanguageTools)];


    // const allskills = portfolioItems.reduce((acc, item) => {
    //     return acc.concat(item.skills);
    // }, []);

    // const uniqueskills = [...new Set(allskills)];


    return (

        <main>
            <div className='filter'>
                <div className='works'>
                    <button
                        value="all"
                        onClick={handleCategoryClick}
                        className={selectedCategory === 'all' ? 'active' : ''}
                    >
                        All
                    </button>

                    <button
                        value="web"
                        onClick={handleCategoryClick}
                        className={selectedCategory === 'web' ? 'active' : ''}
                    >
                        Web
                    </button>

                    <button
                        value="design"
                        onClick={handleCategoryClick}
                        className={selectedCategory === 'design' ? 'active' : ''}
                    >
                        Design
                    </button>

                    {/* <button
                        value="mobile"
                        onClick={handleCategoryClick}
                        className={selectedCategory === 'mobile' ? 'active' : ''}
                    >
                        Mobile
                    </button> */}

                    {/* <button
                        value="ML/AI"
                        onClick={handleCategoryClick}
                        className={selectedCategory === 'ML/AI' ? 'active' : ''}
                    >
                        Python/ML/AI
                    </button> */}

                    <button
                        value="content"
                        onClick={handleCategoryClick}
                        className={selectedCategory === 'content' ? 'active' : ''}
                    >
                        Content
                    </button>
                </div>

                {/* <div className='select-wrapper'>
                    <span>Filter By:</span>

                    <div className='filter-select'>
                        <div>
                            <span>Language/Tools:</ span>
                            <select value={selectedLanguage} onChange={handleLanguageChange}>
                                <option value="all">All</option>
                                {uniquelanguageTools.map((selectedLanguage, index) => (
                                    <option key={index} value={selectedLanguage}>{selectedLanguage}</option>
                                ))}
                            </select>
                        </div>


                        <div>
                            <span>Skills:</span>
                            <select value={selectedSkill} onChange={handleSkillChange}>
                                <option value="all">All</option>
                                {uniqueskills.map((selectedSkill, index) => (
                                    <option key={index} value={selectedSkill}>{selectedSkill}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                </div> */}

            </div>




            <ul className='portfolio-wrapper'>

                {filteredItems.map((item, index) => (
                    <span key={index}>
                        {item.title}
                    </span>

                ))}

            </ul>


        </main>
    );
};

export default Portfolio;
