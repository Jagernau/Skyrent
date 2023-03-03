import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import LogoImg from '../images/logo.svg'
import Vector from '../images/vector.svg'
import * as S from './StylesPage'

function ItemPage() {
  const { pk } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios
      .get(`https://back-xpag.onrender.com/places/${pk}`)
      .then((response) => setPost(response.data))
  }, [pk])

  const [activeInfo, setActiveInfo] = useState(true)

  const toggleVisibility = (info) => {
    setActiveInfo((currentInfo) => (currentInfo === info ? false : info))
  }

  return (
    <div>
      {post && (
        <div className="centr">
          <S.Header>
            <div className="vector">
              <a href="/">
                <img src={Vector} alt="Logo" />
              </a>
            </div>
            <div className="logo">
              <a href="/">
                <img src={LogoImg} alt="Logo" />
              </a>
            </div>
          </S.Header>
          <S.Location>
            {post.country} → {post.city}
          </S.Location>
          <S.PriceRent>$ {post.price} / month</S.PriceRent>
          <S.Description>{post.description}</S.Description>
          <S.ImgItem src={post.picture_url} alt="{list.country} " />
          <S.Features>
            <S.FeaturesTitle>Что есть внутри</S.FeaturesTitle>

            <p>{post.features_on}</p>
            <p>{post.features_off}</p>
          </S.Features>
          <S.InfoButtonWrapper onClick={() => toggleVisibility(ItemPage)}>
            <S.Text>Показать контактную информацию</S.Text>
          </S.InfoButtonWrapper>

          {activeInfo === ItemPage && (
            <S.InfoWrapper>
              <S.NameBlock>
                <S.InfoTitle>Имя хоста</S.InfoTitle>
                <S.InfoText>{post.host_name}</S.InfoText>
              </S.NameBlock>
              <S.PhoneBlock>
                <S.InfoTitle>Телефон</S.InfoTitle>
                <S.InfoText>{post.host_phone}</S.InfoText>
              </S.PhoneBlock>
              <S.AdressBlock>
                <S.InfoTitle>Адрес</S.InfoTitle>
                <S.InfoText>{post.host_location}</S.InfoText>
              </S.AdressBlock>
            </S.InfoWrapper>
          )}
          <S.Footer>
            <div className="logo">
              <a href="./">
                <img src={LogoImg} alt="Logo" />
              </a>
            </div>
            <S.Year>2023</S.Year>
          </S.Footer>
        </div>
      )}
    </div>
  )
}

export default ItemPage
