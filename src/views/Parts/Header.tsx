import React, { useState, useEffect } from 'react'
import { Menu, Avatar, Layout, Button } from 'antd'
import './header.scss'
import { useNavigate } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
const SubMenu = Menu.SubMenu

const { Header } = Layout

const HeaderBox = (props: any) => {
  const [current, setCurrent] = useState()
  const [collapsed, setCollapsed] = useState(props.collapsed)

  useEffect(() => {
    setCollapsed(props.collapsed)
  }, [props.collapsed])

  const topMenuClick = (e: any) => {
    setCurrent(e.key)
  }

  let navigate = useNavigate()

  const escLogin = () => {
    localStorage.kiteToken = ''
    navigate('/sign-in')
  }

  const { onCollapseChange, adminUserInfo } = props

  return (
    <Header className={`k-header ${collapsed ? 'collapsed' : ''}`}>
      <div className="clearfix">
        <div className="pull-left">
          <Button
            onClick={() => onCollapseChange(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          ></Button>
        </div>
        <div className="pull-right">
          <Menu onClick={topMenuClick} selectedKeys={current} mode="horizontal">
            <Menu.Item key="alipay" />
            <SubMenu
              title={
                <div className="personal">
                  <Avatar src={adminUserInfo.avatar} />
                  <div className="personal-info">
                    <span className="name">{adminUserInfo.nickname}</span>
                    <span className="role">{adminUserInfo.account}</span>
                  </div>
                </div>
              }
            >
              {/* <Menu.Item key="setting:1">个人资料</Menu.Item>*/}
              <Menu.Item key="setting" onClick={escLogin}>
                退出
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    </Header>
  )
}

export default HeaderBox
