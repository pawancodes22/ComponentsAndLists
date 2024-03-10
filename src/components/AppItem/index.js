// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem
  return (
    <li className="app-background">
      <img src={imageUrl} alt="appName" className="image-style" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
