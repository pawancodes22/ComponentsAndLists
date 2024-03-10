// Write your code here
import './index.css'

const TabItem = props => {
  const {displayText, isActive, func, id} = props
  const ActiveTab = isActive ? 'active-tab' : ''
  function callFunc() {
    func(id)
  }
  return (
    <li>
      <button className={`tab ${ActiveTab}`} type="button" onClick={callFunc}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
