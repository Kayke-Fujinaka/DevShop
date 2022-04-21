import React, { useState, useEffect, useCallback, useHistory } from 'react';
import * as S from "./styles"
import { FiShoppingCart, FiSearch, FiMenu, FiChevronRight, FiLinkedin } from 'react-icons/fi'

import { Link, NavLink } from 'react-router-dom'
import ShopCart from '../ShopCart';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [productsOnCart, setProductsOnCart] = useState([]);
  const [qtdItems, setQtdItems] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [searchProducts, setSearchProducts] = useState('')
  const [navProducts, setNavProducts] = useState(false)

  useEffect(() => {
    const listaProducts = localStorage.getItem('products')
    setProductsOnCart(JSON.parse(listaProducts) || [])
  }, [[], productsOnCart])

  useEffect(() => {
    let qtd = 0;

    productsOnCart.forEach((item, index) => {
      qtd += item.quantity
    })
    setQtdItems(qtd)
  }, [[], productsOnCart, qtdItems])


  return (
    <>
      <S.MainContainer>
        <S.ContainerLeft>
          <Link to="/"><h1>devshop</h1></Link>
          <S.Nav>
            <li onClick={() => setNavProducts(!navProducts)} onMouseOver={() => setNavProducts(true)} className={navProducts ? 'navProducts' : 'navProductsOff'} onMouseOut={() => setNavProducts(false)}>
              <NavLink to="/products" activeStyle={
                {
                  paddingBottom: "6px",
                  borderBottom: "2px solid #ffa724",
                }
              } className="navLink">Products
                <nav>
                  <li><NavLink to="/men">Men <FiChevronRight /></NavLink></li>
                  <li><NavLink to="/women">Women <FiChevronRight /></NavLink></li>
                  <li><NavLink to="/jewelery">Jewelery <FiChevronRight /></NavLink></li>
                  <li><NavLink to="/jewelery">Eletronics <FiChevronRight /></NavLink></li>
                </nav>
              </NavLink>
            </li>

            <li><NavLink to="/profile" activeStyle={
              {
                paddingBottom: "6px",
                borderBottom: "2px solid #ffa724",
              }
            }>Profile</NavLink>
            </li>


            <li><NavLink to="/policy" activeStyle={
              {
                paddingBottom: "6px",
                borderBottom: "2px solid #ffa724",
              }
            }>Our Policy</NavLink></li>
          </S.Nav>
        </S.ContainerLeft>

        <S.ContainerSearch>
          <div className="inputEmailFooter">
            <input placeholder="Buscar produtos" type="text" value={searchProducts} onChange={e => setSearchProducts(e.target.value)} />
            <Link className="iconInputEmailFooter" to={`/search/${encodeURIComponent(searchProducts)}`} >
              <FiSearch />
            </Link>
          </div>
        </S.ContainerSearch>

        <S.ContainerRight>
          <S.DivAccount>
            <p><Link to="/register">Register</Link></p>
            <span>/</span>
            <p><Link to="/login">Login</Link></p>
          </S.DivAccount>
          <FiShoppingCart onClick={() => setShowSidebar(!showSidebar)} />
          <S.Bar>{qtdItems}</S.Bar>
        </S.ContainerRight>

        <S.MenuHamburguer>
          <FiMenu onClick={() => setShowNav(!showNav)} />
          {showNav &&
            (
              <nav className={`navHamburguer ${showNav ? 'navTrue' : 'navFalse'}`}>
                <div className="inputEmailFooter">
                  <input placeholder="Buscar produtos" type="text" value={searchProducts} onChange={e => setSearchProducts(e.target.value)} />
                  <Link className="iconInputEmailFooter" to={`/search/${encodeURIComponent(searchProducts)}`} >
                    <FiSearch />
                  </Link>
                </div>
                <S.DivAccount>
                  <p><Link to="/register">Register</Link></p>
                  <span>/</span>
                  <p><Link to="/login">Login</Link></p>
                </S.DivAccount>
                <li><Link to="/men">Men <FiChevronRight /></Link></li>
                <li><Link to="/women">Women <FiChevronRight /></Link></li>
                <li><Link to="/jewelery">Jewelery <FiChevronRight /></Link></li>
                <li><Link to="/eletronics">Eletronics <FiChevronRight /></Link></li>
                <li><Link to="/policy">Our policy <FiChevronRight /></Link></li>
              </nav>)}
        </S.MenuHamburguer>

      </S.MainContainer>

      {showSidebar && <ShopCart sidebar={showSidebar} />}
    </>
  )
}
