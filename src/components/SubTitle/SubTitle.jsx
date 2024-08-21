import "../../style.css"
import "./SubTitle.css"

function SubTitle({subTitle,color}) {
  return (
    <p className="sub" style={{color:{color}}}>
      {subTitle}
    </p>
  )
}

export default SubTitle