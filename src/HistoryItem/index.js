import './index.css'

const HistoryItem = props => {
  const {title, time, domain, url, id, deleteItem} = props
  const delItem = () => {
    deleteItem(id)
  }
  return (
    <li className="item">
      <p className="time">{time}</p>
      <div className="link-details-container">
        <div className="link-details">
          <img src={url} className="logo" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="url-tag">{domain}</p>
        </div>
        <button type="button" onClick={delItem} id="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
