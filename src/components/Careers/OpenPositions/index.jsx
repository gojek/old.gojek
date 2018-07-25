import React, { Component } from 'react';

import data from '../../../../data/jobs.json'
import Card from './card';
import Link, { navigateTo } from 'gatsby-link';

class OpensPositions extends Component {
    constructor(props ){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (evt) {
		navigateTo({
			pathname: '/apply',
			state: {
			  id: "other-job",
			  path: "others",
			  name: "Others",
			  place:  "Bengaluru, Karnataka, India",
			  jobId: "fk0f5im"
			},
		  })
	  }
    
    render() {
        
        return(
            <div id="openPositions" className="container roboto-regular">
                <div className="row justify-content-lg-start justify-content-center">
                    <h1 className="h1 font-xl-l pt-5 raleway-extrabold">Open Positions</h1>
                </div>

                {data.map((data, key) => <Card data={data} key={key} />)}

                <h5 className="py-5 text-black font-xs-l">Your profile doesn't fit a box? Don't worry, {" "}
					{/* <a href="https://gojek.recruiterbox.com/jobs/fk0f5im?utm_source=gojek.io.website&utm_medium=Website&utm_campaign=gojekjobs_website"
                     target="_blank"> */}
                    <a onClick={ this.handleClick}>
						<span className="text-green font-xs-l" style = {{ cursor: "pointer" }}>upload your resume here.</span>
					</a>
				</h5>

            </div>
        );
    }
}

export default OpensPositions;
