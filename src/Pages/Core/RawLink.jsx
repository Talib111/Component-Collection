

import { useLocation, useNavigate } from 'react-router-dom'

function RawLink(props) {
  const navigate = useNavigate()
  const location = useLocation()

  const activateLink = (menuId) => {
    props?.setshowSidebar()
    if (location.pathname === props.path) {
      window.location.reload()
      return
    }
    navigate(props.path)
  }

  return (
    <>

      {props.subMenuStatus ? <li className='cursor-pointer' style={{ 'textDecoration': 'none', 'fontSize': '13px', 'fontWeight': '400', 'paddingLeft': '10px' }}>{props.title}</li> : <div className='cursor-pointer' onClick={() => activateLink(props?.menuId)}><li style={{ 'textDecoration': 'none', 'fontSize': '13px', 'fontWeight': '400', 'paddingLeft': '10px' }} href={props.path}>{props.title}</li></div>
      }

    </>
  )
}

export default RawLink;
