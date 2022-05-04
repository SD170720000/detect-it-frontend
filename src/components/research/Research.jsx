import React from 'react'
import './research.css'

const Research = () => {

    const report_url = "https://drive.google.com/file/d/1PEj3mceOwkM4r-XiW3-skTHMbdOjxvZh/view?usp=sharing"

    return (
        <section id='research'>
            <h5>What Can I Do</h5>
            <h2>Read My Research</h2>

            <div className="container research__container">
                <article>
                    <h2>Abstract</h2>
                    
                    Social Networking Sites, in the present scenario, are an amalgam of knowledge and spam. As their popularity surges among the users, day by day so does it among the spammers looking at easy targets for their campaigns. The threat due to spam causing atrocious harm to the bandwidth, overloading the servers, spreading malicious pages online et cetera has increased manifold making it necessary for researchers to foray into this field of spam detection and reduce their effect on the various social networking sites.
                    <br /><br />
                    This project proposes a framework for fake profile and cloned profile detection in the social networking site Facebook. We’ll be utilizing the data public ally available in this giant social networking era. Initially, we’ll be citing the various approaches that have already been explored in this field. After that, we’ll briefly explain the two methods that we used to collect the datasets from these websites.
                </article>

                <article>
                    <h2>Problem Definition</h2>
                    Online Social Network (OSN) is a network hub where people with similar interests or real-world relationships interact. As the popularity of OSN is increasing, the security and privacy issues related to it are also rising. Fake and Clone profiles are creating dangerous security problems for social network users. Cloning of user profiles is one serious threat, where already existing user’s details are stolen to create duplicate profiles, and then it is misused for damaging the identity of the original profile owner. They can even launch threats like phishing, stalking, spamming, etc.
                    <br /><br />
                    A fake profile is the creation of a profile in the name of a person or a company that does not exist in social media, to carry out malicious activities. In this paper, a detection method has been proposed which can detect Fake and Clone profiles on Twitter. Fake profiles are detected based on a set of rules that can effectively classify fake and genuine profiles. For Profile Cloning detection two methods are used. One using Similarity Measures and the other using the C4.5 decision tree algorithm. In Similarity Measures, two types of similarities are considered – Similarity of Attributes and Similarity of Network relationships. C4.5 detects clones by building a decision tree by considering information gain given. A comparison is made to check how well these two methods help in detecting clone profiles.
                </article>
                <div className='research-float-btn'>
                <h2>want to read the full report?</h2>
                <a href={report_url} className='btn btn-primary' target='_blank'>Read More</a>
                </div>
            </div>
        </section>
    )
}

export default Research
