import './App.css'

import {Component} from 'react'

import HistoryItem from './HistoryItem'
// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {searchInput: '', value: '', listItems: initialHistoryList, msg: ''}

  deleteItem = id => {
    const {listItems} = this.state
    const restList = listItems.filter(each => each.id !== id)
    if (restList.length === 0) {
      this.setState({listItems: restList, msg: 'There is no history to show'})
    } else {
      this.setState({listItems: restList})
    }
  }

  changeSearchInput = event => {
    const {listItems} = this.state
    const filteredHistory = listItems.filter(each => {
      const temp = each.title.toLowerCase()
      return temp.includes(event.target.value.toLowerCase())
    })
    if (filteredHistory.length === 0) {
      this.setState(() => ({
        searchInput: event.target.value,
        value: event.target.value,
        msg: 'There is no history to show',
      }))
    } else {
      this.setState(() => ({
        searchInput: event.target.value,
        value: event.target.value,
        msg: '',
      }))
    }
  }

  render() {
    const {searchInput, value, msg, listItems} = this.state
    const filteredHistory = listItems.filter(each => {
      const temp = each.title.toLowerCase()
      return temp.includes(searchInput.toLowerCase())
    })
    return (
      <div>
        <nav className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="input-container">
            <div className="icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-icon"
                alt="search"
              />
            </div>
            <input
              type="search"
              placeholder="Search history"
              className="input-element"
              value={value}
              onChange={this.changeSearchInput}
            />
          </div>
        </nav>
        <div className="history-container">
          <ul className="history-card">
            {filteredHistory.map(each => (
              <HistoryItem
                key={each.id}
                time={each.timeAccessed}
                url={each.logoUrl}
                title={each.title}
                domain={each.domainUrl}
                id={each.id}
                deleteItem={this.deleteItem}
              />
            ))}
            <p>{msg}</p>
          </ul>
        </div>
      </div>
    )
  }
}

export default App
