import React, {useState, useEffect} from 'react'
import { Button,Menu, Typography,Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HolderOutlined,MoneyCollectOutlined, BulbOutlined,FundOutlined,MenuOutlined, HomeOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

function Navbar() {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(null)

    useState(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize();
        
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    useEffect(()=> {
        if(screenSize < 768){
            setActiveMenu(false)
        }
        else{
            setActiveMenu(true)
        }
    }, [screenSize])

    const items = [
        { label: <Link to="/">Home</Link>, key: 'home', icon: <HomeOutlined /> },
        { label: <Link to="/cryptocurrencies">Crypto Currencies</Link>, key: 'cryptocurrencies', icon: <FundOutlined /> },
        { label: <Link to="/exchanges">Exchanges</Link>, key: 'exchanges', icon: <MoneyCollectOutlined /> },
        { label: <Link to="/news">News</Link>, key: 'news', icon: <BulbOutlined /> },
    ];

    return (
        <div className='nav-container'>
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className='logo'>
                    <Link to="/">Cryptic</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined/>
                </Button>
            </div>
            {activeMenu &&(
              <Menu theme='dark' items={items} />
            )}
        </div>
    )
}

export default Navbar;
