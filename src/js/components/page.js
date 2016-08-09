import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

class Page extends Component {
    constructor() {
        super();
        
        this.onYearBtnClick = this.onYearBtnClick.bind(this)
    }
    
    onYearBtnClick(e){
        this.props.setYear(+e.target.textContent)
    }


    render () {  
 
        const { year, photos} = this.props;

        let years = [2016,2015,2014,2013,2012,2011].map((value, index) => {
             return <button className={
                            classnames( 'btn btn-default',
                                        {'btn-primary' : year === value},
                                        {'btn-default' : year !== value})}
                            key={index} 
                            onClick={this.onYearBtnClick}>
                            {value}
                    </button>
        })

        return (
            <div>
                <div className='btn-group'>
                    {years}
                </div>
                <h3>{year} год</h3>
                <p>У тебя {photos.length} фото.</p>
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
}

export default Page