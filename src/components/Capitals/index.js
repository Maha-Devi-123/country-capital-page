import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {currentCapital: countryAndCapitalsList[0].capitalDisplayText}

  changeCountry = event => {
    this.setState({currentCapital: event.target.value})
  }

  render() {
    const {currentCapital} = this.state
    let currentCountry = 'India'
    countryAndCapitalsList.map(each => {
      if (currentCapital === each.id) {
        currentCountry = each.country
      }
      return ''
    })
    console.log(currentCapital)

    return (
      <div className="blue-con">
        <div className="white-can">
          <h1>Countries And Capitals</h1>
          <div className="dropdown-can">
            <select
              name="NEW_DELHI"
              onChange={this.changeCountry}
              className="select-edit"
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p className="country">{currentCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
