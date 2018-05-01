import { Component } from 'react'
import PropTypes from 'prop-types'

class Summary extends Component {
    static propTypes = {
        ingredients: PropTypes.number.isRequired,
        steps: PropTypes.number.isRequired,
        title: (props, propName) => {
            //this validation must be method for validation title
            if (typeof props[propName] !== 'string') {
                throw new Error('A title must be a string')
            } else {
                if (props[propName].length > 20) {
                    throw new Error('title is over 20 characters')
                }
                return null
            }
        }
    }
    static defaultProps = {
        ingredients: 0,
        steps: 0,
        title: '[recipe]',
    }    
    render() {
        const {ingredients, steps, title,} = this.props
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients} Ingredients</span> | <span>{steps} Steps</span>
                </p>
            </div> 
        )
    }
}

export default Summary