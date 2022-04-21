import React, { useState, useContext, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import * as S from "./styles";
import { Link } from 'react-router-dom'

import { ApiContext } from '../../contexts/apiContext'

import backWomen from '../../assets/backWomen.jpg'
import backMen from '../../assets/backMen.jpg'
import eletronics from '../../assets/eletronics.jpg'
import joiasBack from '../../assets/joiasBack.jfif'

import CardProduct from '../../components/CardProduct'
import Loading from '../../components/Loading'

import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Home() {
    const { allProducts, loading } = useContext(ApiContext)
    const [products, setProducts] = useState([])

    let productsHome = allProducts.slice(0, 8)

    return (
        <>
            <S.SeeProductsCards>
                <S.ProductCard>
                    <img src={backMen} alt="Imagem roupa masculina" />
                    <S.ContentProductCard>
                        <h1>Roupas masculinas</h1>
                        <p>Outono/Inverno 2022</p>
                        <Link to="/men">Ver produtos</Link>
                    </S.ContentProductCard>
                </S.ProductCard>
                <S.ProductCard>
                    <img src={backWomen} alt="Imagem roupa feminina" />
                    <S.ContentProductCard>
                        <h1>Roupas femininas</h1>
                        <p>Outono/Inverno 2022</p>
                        <Link to="/women">Ver produtos</Link>
                    </S.ContentProductCard>
                </S.ProductCard>
                <S.ProductCard>
                    <img src={eletronics} alt="Imagem eletrônicos" />
                    <S.ContentProductCard>
                        <h1>Eletrônicos</h1>
                        <p>Outono/Inverno 2022</p>
                        <Link to="/eletronics">Ver produtos</Link>
                    </S.ContentProductCard>
                </S.ProductCard>
                <S.ProductCard>
                    <img src={joiasBack} alt="Imagem joias" />
                    <S.ContentProductCard>
                        <h1>Joalheria</h1>
                        <p>Outono/Inverno 2022</p>
                        <Link to="/jewelery">Ver produtos</Link>
                    </S.ContentProductCard>
                </S.ProductCard>
            </S.SeeProductsCards>

            <S.TitleProducts>
                <h1>Conheça nossos principais produtos</h1>
                <p>Em breve... Novo estoque!</p>
            </S.TitleProducts>

            {loading ? (
                <Loading />
            ) : (

                <S.SomeProducts>
                    <ul>
                        {productsHome.map((item) => (
                            <>
                                <CardProduct id={item.id} title={item.title} price={item.price} category={item.category} image={item.image} rating={item.rating} />
                            </>
                        ))}
                    </ul>
                </S.SomeProducts>)}

            {loading === false && (
                <S.ButtonSeeAllProducts>
                    <Link to="/products">Ver todos produtos</Link>
                </S.ButtonSeeAllProducts>)}

            <S.CollaboratorsDev>
                <h1>FAVORITOS DO DEVSHOP</h1>
                <div className="listCollaborators">
                    <S.Collaborator>
                        <img src="https://img.lojasrenner.com.br/banner/01-home/20211228_STORIES_INFLUS_CAIOCABRAL.jpg" alt="" />
                        <a href="http://"><FaLinkedin /></a>
                    </S.Collaborator>
                    <S.Collaborator>
                        <img src="https://img.lojasrenner.com.br/banner/01-home/20211228_STORIES_INFLUS_CAIOCABRAL.jpg" alt="" />
                        <a href="http://"><FaLinkedin /></a>
                    </S.Collaborator>
                    <S.Collaborator>
                        <img src="https://img.lojasrenner.com.br/banner/01-home/20211228_STORIES_INFLUS_CAIOCABRAL.jpg" alt="" />
                        <a href="http://"><FaLinkedin /></a>
                    </S.Collaborator>
                    <S.Collaborator>
                        <img src="https://img.lojasrenner.com.br/banner/01-home/20211228_STORIES_INFLUS_CAIOCABRAL.jpg" alt="" />
                        <a href="http://"><FaLinkedin /></a>
                    </S.Collaborator>
                    <S.Collaborator>
                        <img src="https://img.lojasrenner.com.br/banner/01-home/20211228_STORIES_INFLUS_CAIOCABRAL.jpg" alt="" />
                        <a href="http://"><FaLinkedin /></a>
                    </S.Collaborator>
                    
                </div>
            </S.CollaboratorsDev>


            <S.InstagramFooter>
                <FaInstagram />
                <S.InstagramText>
                    <h1>Siga-nos no instagram</h1>
                    <span>@DEVSHOPPERFEITO</span>
                </S.InstagramText>
            </S.InstagramFooter>
        </>
    )
}